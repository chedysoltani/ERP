const express = require('express');
const router = express.Router();
const db = require('../config/database');

// GET les tâches assignées à l'employé
router.get('/:employeeId/tasks', async (req, res) => {
  try {
    const employeeId = parseInt(req.params.employeeId);
    
    const tasks = await db.query(`
      SELECT t.*, p.name as project_name, CONCAT(u.prenom, ' ', u.nom) as creator_name
      FROM tasks t
      LEFT JOIN projects p ON t.project_id = p.id
      LEFT JOIN users u ON t.creator_id = u.id
      WHERE t.assignee_id = ?
      ORDER BY t.due_date ASC, t.created_at DESC
    `, [employeeId]);

    res.json({
      success: true,
      data: tasks,
      message: 'Tâches de l\'employé récupérées avec succès'
    });
  } catch (error) {
    console.error('Erreur GET /employee/:employeeId/tasks:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des tâches de l\'employé',
      error: error.message
    });
  }
});

// GET les projets où l'employé est assigné
router.get('/:employeeId/projects', async (req, res) => {
  try {
    const employeeId = parseInt(req.params.employeeId);
    
    const projects = await db.query(`
      SELECT DISTINCT p.*, CONCAT(u.prenom, ' ', u.nom) as manager_name
      FROM projects p
      INNER JOIN tasks t ON p.id = t.project_id
      LEFT JOIN users u ON p.manager_id = u.id
      WHERE t.assignee_id = ?
      ORDER BY p.deadline ASC, p.created_at DESC
    `, [employeeId]);

    res.json({
      success: true,
      data: projects,
      message: 'Projets de l\'employé récupérés avec succès'
    });
  } catch (error) {
    console.error('Erreur GET /employee/:employeeId/projects:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des projets de l\'employé',
      error: error.message
    });
  }
});

// GET les réunions de l'employé
router.get('/:employeeId/meetings', async (req, res) => {
  try {
    const employeeId = parseInt(req.params.employeeId);
    
    // Pour l'instant, on récupère toutes les réunions créées par les managers
    // Plus tard, on pourra ajouter une table meeting_participants
    const meetings = await db.query(`
      SELECT m.*, CONCAT(u.prenom, ' ', u.nom) as creator_name
      FROM meetings m
      LEFT JOIN users u ON m.creator_id = u.id
      WHERE m.creator_id IN (
        SELECT DISTINCT manager_id FROM projects
        INNER JOIN tasks ON projects.id = tasks.project_id
        WHERE tasks.assignee_id = ?
      )
      ORDER BY m.date_time ASC
    `, [employeeId]);

    res.json({
      success: true,
      data: meetings,
      message: 'Réunions de l\'employé récupérées avec succès'
    });
  } catch (error) {
    console.error('Erreur GET /employee/:employeeId/meetings:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des réunions de l\'employé',
      error: error.message
    });
  }
});

// GET le dashboard complet de l'employé
router.get('/:employeeId/dashboard', async (req, res) => {
  try {
    const employeeId = parseInt(req.params.employeeId);
    
    // Récupérer les statistiques des tâches
    const taskStats = await db.query(`
      SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN status = 'todo' THEN 1 ELSE 0 END) as todo,
        SUM(CASE WHEN status = 'in_progress' THEN 1 ELSE 0 END) as in_progress,
        SUM(CASE WHEN status = 'done' THEN 1 ELSE 0 END) as done,
        SUM(CASE WHEN status = 'cancelled' THEN 1 ELSE 0 END) as cancelled,
        SUM(CASE WHEN due_date < CURDATE() AND status != 'done' THEN 1 ELSE 0 END) as overdue
      FROM tasks 
      WHERE assignee_id = ?
    `, [employeeId]);

    // Récupérer les tâches récentes
    const recentTasks = await db.query(`
      SELECT t.*, p.name as project_name, CONCAT(u.prenom, ' ', u.nom) as creator_name
      FROM tasks t
      LEFT JOIN projects p ON t.project_id = p.id
      LEFT JOIN users u ON t.creator_id = u.id
      WHERE t.assignee_id = ?
      ORDER BY t.created_at DESC
      LIMIT 5
    `, [employeeId]);

    // Récupérer les projets actifs
    const activeProjects = await db.query(`
      SELECT DISTINCT p.*, COUNT(t.id) as task_count
      FROM projects p
      INNER JOIN tasks t ON p.id = t.project_id
      WHERE t.assignee_id = ? AND p.status = 'active'
      GROUP BY p.id
      ORDER BY p.deadline ASC
    `, [employeeId]);

    // Récupérer les réunions à venir
    const upcomingMeetings = await db.query(`
      SELECT m.*, CONCAT(u.prenom, ' ', u.nom) as creator_name
      FROM meetings m
      LEFT JOIN users u ON m.creator_id = u.id
      WHERE m.date_time > NOW() AND m.creator_id IN (
        SELECT DISTINCT manager_id FROM projects
        INNER JOIN tasks ON projects.id = tasks.project_id
        WHERE tasks.assignee_id = ?
      )
      ORDER BY m.date_time ASC
      LIMIT 3
    `, [employeeId]);

    res.json({
      success: true,
      data: {
        stats: taskStats[0],
        recentTasks,
        activeProjects,
        upcomingMeetings
      },
      message: 'Dashboard de l\'employé récupéré avec succès'
    });
  } catch (error) {
    console.error('Erreur GET /employee/:employeeId/dashboard:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération du dashboard de l\'employé',
      error: error.message
    });
  }
});

// PUT mettre à jour le statut d'une tâche (pour l'employé)
router.put('/:employeeId/tasks/:taskId/status', async (req, res) => {
  try {
    const employeeId = parseInt(req.params.employeeId);
    const taskId = parseInt(req.params.taskId);
    const { status } = req.body;

    // Vérifier que la tâche est bien assignée à cet employé
    const task = await db.query('SELECT * FROM tasks WHERE id = ? AND assignee_id = ?', [taskId, employeeId]);
    if (task.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Tâche non trouvée ou non assignée à cet employé'
      });
    }

    // Mettre à jour le statut
    await db.query(`
      UPDATE tasks SET 
        status = ?, 
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `, [status, taskId]);

    // Récupérer la tâche mise à jour
    const updatedTask = await db.query('SELECT * FROM tasks WHERE id = ?', [taskId]);

    res.json({
      success: true,
      data: updatedTask[0],
      message: 'Statut de la tâche mis à jour avec succès'
    });
  } catch (error) {
    console.error('Erreur PUT /employee/:employeeId/tasks/:taskId/status:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la mise à jour du statut de la tâche',
      error: error.message
    });
  }
});

module.exports = router;
