const express = require('express');
const router = express.Router();
const db = require('../config/database');

// ── POST : déclarer les heures d'un jour (F-11) ────────────────────────────
// Body : { employee_id, date, entries: [{task_id, hours, comment}] }
router.post('/', async (req, res) => {
  const connection = await db.getConnection();
  try {
    const { employee_id, date, entries } = req.body;

    if (!employee_id || !date || !Array.isArray(entries) || entries.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'employee_id, date et entries (non vide) sont obligatoires.'
      });
    }

    const entryDate = date.split('T')[0];

    await connection.beginTransaction();

    for (const entry of entries) {
      const { task_id, hours, comment } = entry;
      if (!task_id || !hours || parseFloat(hours) <= 0) continue;

      // Vérifier que la tâche appartient à l'employé
      const [taskRow] = await connection.execute(
        `SELECT t.id, t.project_id FROM tasks t
         WHERE t.id = ?
           AND (t.assignee_id = ?
             OR EXISTS (SELECT 1 FROM task_assignments ta WHERE ta.task_id = t.id AND ta.employee_id = ?))`,
        [task_id, employee_id, employee_id]
      );
      if (!taskRow) continue;

      // UPSERT : un seul enregistrement par (employé, tâche, jour)
      await connection.execute(
        `INSERT INTO daily_time_entries (employee_id, task_id, date, hours, comment)
         VALUES (?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE hours = VALUES(hours), comment = VALUES(comment), updated_at = CURRENT_TIMESTAMP`,
        [employee_id, task_id, entryDate, parseFloat(hours), comment || null]
      );
    }

    await connection.commit();

    res.json({ success: true, message: 'Heures déclarées avec succès.' });
  } catch (error) {
    await connection.rollback();
    console.error('Erreur POST /daily-hours:', error);
    res.status(500).json({ success: false, message: 'Erreur déclaration heures', error: error.message });
  } finally {
    connection.release();
  }
});

// ── GET : heures d'un employé sur une période (F-11) ──────────────────────
router.get('/employee/:employeeId', async (req, res) => {
  try {
    const { employeeId } = req.params;
    const { from, to } = req.query;

    let sql = `
      SELECT d.*, t.title AS task_title, p.name AS project_name, p.id AS project_id
      FROM daily_time_entries d
      JOIN tasks t ON t.id = d.task_id
      LEFT JOIN projects p ON p.id = t.project_id
      WHERE d.employee_id = ?`;
    const params = [employeeId];

    if (from) { sql += ' AND d.date >= ?'; params.push(from); }
    if (to)   { sql += ' AND d.date <= ?'; params.push(to); }
    sql += ' ORDER BY d.date DESC, t.title ASC';

    const entries = await db.query(sql, params);
    res.json({ success: true, data: entries });
  } catch (error) {
    console.error('Erreur GET /daily-hours/employee:', error);
    res.status(500).json({ success: false, message: 'Erreur récupération heures', error: error.message });
  }
});

// ── GET : vue équipe enrichie par jour pour le manager (F-10) ─────────────
// Retourne pour chaque employé+jour : heures de présence + détail tâches
router.get('/team/:managerId', async (req, res) => {
  try {
    const { managerId } = req.params;
    const { date } = req.query;
    const targetDate = date || new Date().toISOString().split('T')[0];

    // Présence du jour
    const attendance = await db.query(
      `SELECT ar.*,
              CONCAT(u.prenom, ' ', u.nom) AS employee_name,
              u.id AS emp_id
       FROM attendance_records ar
       JOIN users u ON u.id = ar.employee_id
       WHERE ar.date = ?
         AND u.role = 'employee'
         AND EXISTS (
           SELECT 1 FROM tasks t
           JOIN task_assignments ta ON ta.task_id = t.id
           WHERE ta.employee_id = u.id
             AND t.project_id IN (SELECT id FROM projects WHERE manager_id = ?)
         )
       ORDER BY u.nom, u.prenom`,
      [targetDate, managerId]
    );

    // Heures par tâche pour chaque employé ce jour
    const employeeIds = attendance.map(a => a.emp_id);
    const hoursMap = {};

    if (employeeIds.length > 0) {
      const placeholders = employeeIds.map(() => '?').join(',');
      const taskHours = await db.query(
        `SELECT d.employee_id, d.task_id, d.hours, d.comment,
                t.title AS task_title, p.name AS project_name
         FROM daily_time_entries d
         JOIN tasks t ON t.id = d.task_id
         LEFT JOIN projects p ON p.id = t.project_id
         WHERE d.employee_id IN (${placeholders}) AND d.date = ?`,
        [...employeeIds, targetDate]
      );

      for (const row of taskHours) {
        if (!hoursMap[row.employee_id]) hoursMap[row.employee_id] = [];
        hoursMap[row.employee_id].push({
          task_id: row.task_id,
          task_title: row.task_title,
          project_name: row.project_name,
          hours: parseFloat(row.hours),
          comment: row.comment
        });
      }
    }

    const result = attendance.map(a => {
      const taskEntries = hoursMap[a.emp_id] || [];
      const totalTaskHours = taskEntries.reduce((s, e) => s + e.hours, 0);
      const presenceHours = parseFloat(a.total_hours || 0);
      return {
        ...a,
        task_entries: taskEntries,
        total_task_hours: Math.round(totalTaskHours * 100) / 100,
        alerte_depassement: totalTaskHours > presenceHours && presenceHours > 0
      };
    });

    res.json({ success: true, data: result });
  } catch (error) {
    console.error('Erreur GET /daily-hours/team:', error);
    res.status(500).json({ success: false, message: 'Erreur vue équipe heures', error: error.message });
  }
});

// ── GET : tâches disponibles pour déclaration (non bloquées) (F-11) ────────
router.get('/available-tasks/:employeeId', async (req, res) => {
  try {
    const { employeeId } = req.params;

    const tasks = await db.query(
      `SELECT t.id, t.title, t.status, t.project_id, p.name AS project_name,
              t.estimated_hours, t.is_blocked
       FROM tasks t
       LEFT JOIN projects p ON p.id = t.project_id
       WHERE (t.assignee_id = ?
           OR EXISTS (SELECT 1 FROM task_assignments ta WHERE ta.task_id = t.id AND ta.employee_id = ?))
         AND t.status != 'done'
         AND t.status != 'cancelled'
         AND (t.is_blocked = 0 OR t.is_blocked IS NULL)
       ORDER BY t.due_date ASC`,
      [employeeId, employeeId]
    );

    res.json({ success: true, data: tasks });
  } catch (error) {
    console.error('Erreur GET /daily-hours/available-tasks:', error);
    res.status(500).json({ success: false, message: 'Erreur récupération tâches', error: error.message });
  }
});

module.exports = router;
