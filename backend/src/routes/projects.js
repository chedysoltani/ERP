const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { auth, isEmployee } = require('../middleware/auth');

router.use(auth, isEmployee);

// ── Helpers ────────────────────────────────────────────────────────────────

function computeStatusDisplay(project) {
  const today = new Date().toISOString().split('T')[0];
  const internalStatus = (project.status || '').toLowerCase();
  if (internalStatus === 'completed') return 'Terminé';
  if (internalStatus === 'paused')    return 'En pause';
  if (internalStatus === 'cancelled') return 'En attente';
  if (project.end_date && project.end_date < today && internalStatus !== 'completed') return 'En retard';
  return 'En cours';
}

function statusColor(display) {
  switch (display) {
    case 'En cours':   return 'green';
    case 'En retard':  return 'red';
    case 'En pause':   return 'gray';
    case 'Terminé':    return 'blue';
    case 'En attente': return 'orange';
    default:           return 'gray';
  }
}

async function enrichProject(project) {
  const today = new Date().toISOString().split('T')[0];

  // ── Tâches du projet ─────────────────────────────────────────────────────
  const tasks = await db.query(
    'SELECT id, status, estimated_hours FROM tasks WHERE project_id = ?',
    [project.id]
  );
  const total_tasks     = tasks.length;
  const done_tasks      = tasks.filter(t => t.status === 'done').length;
  const in_progress_tasks = tasks.filter(t => t.status === 'in_progress').length;
  const todo_tasks      = tasks.filter(t => !['done','in_progress'].includes(t.status)).length;
  const late_tasks      = (await db.query(
    `SELECT COUNT(*) AS cnt FROM tasks WHERE project_id = ? AND status != 'done' AND due_date < ?`,
    [project.id, today]
  ))[0]?.cnt || 0;

  // ── Heures planifiées ────────────────────────────────────────────────────
  const sumEstimated = tasks.reduce((s, t) => s + parseFloat(t.estimated_hours || 0), 0);
  const planned_hours = parseFloat(project.planned_hours || 0) || sumEstimated;

  // ── Heures consommées : sessions complétées + daily_time_entries ─────────
  const [sessRow] = await db.query(
    `SELECT COALESCE(SUM(tts.duration_seconds), 0) / 3600 AS sess_h
     FROM task_time_sessions tts
     INNER JOIN tasks t ON tts.task_id = t.id
     WHERE t.project_id = ? AND tts.status = 'completed'`,
    [project.id]
  );
  const [dailyRow] = await db.query(
    `SELECT COALESCE(SUM(d.hours), 0) AS daily_h
     FROM daily_time_entries d
     INNER JOIN tasks t ON d.task_id = t.id
     WHERE t.project_id = ?`,
    [project.id]
  );
  const consumed_hours = Math.round(
    (parseFloat(sessRow?.sess_h || 0) + parseFloat(dailyRow?.daily_h || 0)) * 100
  ) / 100;

  // ── Membres de l'équipe (assignés aux tâches) ────────────────────────────
  const [membersRow] = await db.query(
    `SELECT COUNT(DISTINCT ea.employee_id) AS cnt
     FROM (
       SELECT assignee_id AS employee_id FROM tasks WHERE project_id = ? AND assignee_id IS NOT NULL
       UNION
       SELECT ta.employee_id FROM task_assignments ta
       INNER JOIN tasks t ON ta.task_id = t.id WHERE t.project_id = ?
     ) ea`,
    [project.id, project.id]
  );
  const team_members_count = parseInt(membersRow?.cnt || 0);

  // ── Progression réelle par tâche (heures travaillées / heures estimées) ──
  let sessMapE = {}, dailyMapE = {};
  if (tasks.length > 0) {
    const ids = tasks.map(t => t.id);
    const ph = ids.map(() => '?').join(',');
    const sR = await db.query(
      `SELECT task_id, COALESCE(SUM(duration_seconds),0)/3600 AS h
       FROM task_time_sessions WHERE task_id IN (${ph}) AND status='completed' GROUP BY task_id`, ids);
    sR.forEach(r => { sessMapE[r.task_id] = parseFloat(r.h || 0); });
    const dR = await db.query(
      `SELECT task_id, COALESCE(SUM(hours),0) AS h
       FROM daily_time_entries WHERE task_id IN (${ph}) GROUP BY task_id`, ids);
    dR.forEach(r => { dailyMapE[r.task_id] = parseFloat(r.h || 0); });
  }

  let sumWeighted = 0, sumEst = 0;
  for (const t of tasks) {
    const est    = parseFloat(t.estimated_hours || 0);
    const weight = est > 0 ? est : 1;
    let taskPct;
    if (t.status === 'done') {
      taskPct = 1.0;
    } else if (est > 0) {
      const actual = (sessMapE[t.id] || 0) + (dailyMapE[t.id] || 0);
      taskPct = Math.min(0.99, actual / est);
    } else {
      taskPct = t.status === 'in_progress' ? 0.5 : 0;
    }
    sumWeighted += weight * taskPct;
    sumEst      += weight;
  }
  const progress_tasks = sumEst > 0 ? Math.round((sumWeighted / sumEst) * 100) : 0;

  // Progression heures : consumed / planned (limité à 100%)
  const progress_hours = planned_hours > 0
    ? Math.min(100, Math.round((consumed_hours / planned_hours) * 100))
    : 0;

  // Progression globale = moyenne des deux indicateurs
  const progress = sumEst > 0
    ? progress_tasks
    : (project.progress || 0);

  // ── Retard ────────────────────────────────────────────────────────────────
  const deadline_late = !!(project.end_date && project.end_date < today &&
    !['completed','cancelled'].includes(project.status));
  const hours_over_budget = planned_hours > 0 && consumed_hours > planned_hours;
  const is_late = deadline_late || hours_over_budget;

  const statusDisplay = computeStatusDisplay(project);

  return {
    ...project,
    planned_hours,
    consumed_hours,
    progress,
    progress_tasks,
    progress_hours,
    total_tasks,
    done_tasks,
    in_progress_tasks,
    todo_tasks,
    late_tasks: parseInt(late_tasks),
    team_members_count,
    is_late,
    deadline_late,
    hours_over_budget,
    status_display: statusDisplay,
    status_color: statusColor(statusDisplay)
  };
}

// ── GET tous les projets ───────────────────────────────────────────────────
router.get('/', async (_req, res) => {
  try {
    const projects = await db.query('SELECT * FROM projects ORDER BY created_at DESC');
    const enriched = await Promise.all(projects.map(enrichProject));
    res.json({ success: true, data: enriched });
  } catch (error) {
    console.error('Erreur GET /projects:', error);
    res.status(500).json({ success: false, message: 'Erreur récupération projets', error: error.message });
  }
});

// ── GET projets par manager ────────────────────────────────────────────────
router.get('/manager/:managerId', async (req, res) => {
  try {
    const managerId = parseInt(req.params.managerId);
    const projects = await db.query(
      'SELECT * FROM projects WHERE manager_id = ? ORDER BY created_at DESC',
      [managerId]
    );
    const enriched = await Promise.all(projects.map(enrichProject));
    res.json({ success: true, data: enriched });
  } catch (error) {
    console.error('Erreur GET /projects/manager/:managerId:', error);
    res.status(500).json({ success: false, message: 'Erreur récupération projets manager', error: error.message });
  }
});

// ── POST créer un projet ───────────────────────────────────────────────────
router.post('/', async (req, res) => {
  const { name, description, team, priority, startDate, endDate, budget, manager_id, deadline, planned_hours } = req.body;

  if (!name || !team || !manager_id) {
    return res.status(400).json({ success: false, message: 'Champs obligatoires manquants: name, team, manager_id' });
  }

  try {
    const result = await db.query(
      `INSERT INTO projects (name, description, team, priority, start_date, end_date, budget, manager_id, deadline, planned_hours)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, description || '', team, priority || 'medium',
       startDate || null, endDate || null, budget || 0,
       manager_id, deadline || endDate,
       parseFloat(planned_hours) || 0]
    );
    const newProject = await db.query('SELECT * FROM projects WHERE id = ?', [result.insertId]);
    const enriched = await enrichProject(newProject[0]);
    res.status(201).json({ success: true, data: enriched });
  } catch (error) {
    console.error('Erreur POST /projects:', error);
    res.status(500).json({ success: false, message: 'Erreur création projet', error: error.message });
  }
});

// ── GET un projet par ID ───────────────────────────────────────────────────
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const projects = await db.query('SELECT * FROM projects WHERE id = ?', [id]);
    if (projects.length === 0) return res.status(404).json({ success: false, message: 'Projet non trouvé' });
    const enriched = await enrichProject(projects[0]);
    res.json({ success: true, data: enriched });
  } catch (error) {
    console.error('Erreur GET /projects/:id:', error);
    res.status(500).json({ success: false, message: 'Erreur récupération projet', error: error.message });
  }
});

// ── GET KPI complet d'un projet (F-12, F-13) ──────────────────────────────
router.get('/:id/kpi', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const projects = await db.query('SELECT * FROM projects WHERE id = ?', [id]);
    if (projects.length === 0) return res.status(404).json({ success: false, message: 'Projet non trouvé' });
    const project = projects[0];

    // Tâches du projet
    const tasks = await db.query(
      `SELECT t.*,
        (SELECT COUNT(*) FROM task_dependencies td WHERE td.task_id = t.id
         AND EXISTS (SELECT 1 FROM tasks tp WHERE tp.id = td.depends_on_task_id AND tp.status != 'done'))
        AS blocked_count
       FROM tasks t WHERE t.project_id = ?`,
      [id]
    );

    const today = new Date().toISOString().split('T')[0];
    let totalTasks = tasks.length;
    let doneTasks = 0, inProgressTasks = 0, blockedTasks = 0, lateTasks = 0;

    // ── Heures réelles par tâche (en une seule requête chacune) ──────────────
    const taskIds = tasks.map(t => t.id);
    let sessHoursMap = {}, dailyHoursMap = {};

    if (taskIds.length > 0) {
      const placeholders = taskIds.map(() => '?').join(',');
      const sessRows = await db.query(
        `SELECT task_id, COALESCE(SUM(duration_seconds), 0) / 3600 AS h
         FROM task_time_sessions WHERE task_id IN (${placeholders}) AND status = 'completed'
         GROUP BY task_id`,
        taskIds
      );
      sessRows.forEach(r => { sessHoursMap[r.task_id] = parseFloat(r.h || 0); });

      const dailyRows = await db.query(
        `SELECT task_id, COALESCE(SUM(hours), 0) AS h
         FROM daily_time_entries WHERE task_id IN (${placeholders})
         GROUP BY task_id`,
        taskIds
      );
      dailyRows.forEach(r => { dailyHoursMap[r.task_id] = parseFloat(r.h || 0); });
    }

    // ── Calcul progression réelle ─────────────────────────────────────────────
    let sumWeightedReal = 0, sumWeights = 0, sumRealEstimated = 0;

    for (const t of tasks) {
      if (t.status === 'done') { doneTasks++; }
      else if (t.status === 'in_progress') { inProgressTasks++; }
      if (parseInt(t.blocked_count) > 0) blockedTasks++;
      if (t.end_date && t.end_date < today && t.status !== 'done') lateTasks++;

      const est = parseFloat(t.estimated_hours || 0);
      sumRealEstimated += est; // somme réelle des heures estimées (pour planned_hours)

      const weight = est > 0 ? est : 1; // poids pour la progression (1 si pas d'estimation)

      let taskRealProgress;
      if (t.status === 'done') {
        taskRealProgress = 1.0;
      } else if (est > 0) {
        const actualH = (sessHoursMap[t.id] || 0) + (dailyHoursMap[t.id] || 0);
        taskRealProgress = Math.min(0.99, actualH / est);
      } else {
        taskRealProgress = t.status === 'in_progress' ? 0.5 : 0;
      }

      sumWeightedReal += weight * taskRealProgress;
      sumWeights      += weight;
    }

    // Heures consommées : sessions complétées + daily entries
    const [sessTotalRow] = await db.query(
      `SELECT COALESCE(SUM(tts.duration_seconds), 0) / 3600 AS h
       FROM task_time_sessions tts
       INNER JOIN tasks t ON tts.task_id = t.id
       WHERE t.project_id = ? AND tts.status = 'completed'`,
      [id]
    );
    const [dailyTotalRow] = await db.query(
      `SELECT COALESCE(SUM(d.hours), 0) AS h
       FROM daily_time_entries d INNER JOIN tasks t ON d.task_id = t.id WHERE t.project_id = ?`,
      [id]
    );
    const consumed_hours = Math.round(
      (parseFloat(sessTotalRow?.h || 0) + parseFloat(dailyTotalRow?.h || 0)) * 100
    ) / 100;

    // Heures planifiées = projet.planned_hours OU somme des heures estimées des tâches
    const planned_hours = parseFloat(project.planned_hours || 0) || sumRealEstimated;
    const remaining_hours = Math.max(0, planned_hours - consumed_hours);

    // Progression réelle tâches (heures)
    const progression_planifiee = sumWeights > 0
      ? Math.round((sumWeightedReal / sumWeights) * 100)
      : 0;
    // Consommation budget heures
    const progression_reelle = planned_hours > 0
      ? Math.min(100, Math.round((consumed_hours / planned_hours) * 100))
      : 0;

    // Membres équipe
    const [membersRow] = await db.query(
      `SELECT COUNT(DISTINCT ea.employee_id) AS members FROM (
         SELECT assignee_id AS employee_id FROM tasks WHERE project_id = ? AND assignee_id IS NOT NULL
         UNION
         SELECT ta.employee_id FROM task_assignments ta
         INNER JOIN tasks t ON ta.task_id = t.id WHERE t.project_id = ?
       ) ea`,
      [id, id]
    );
    const team_members = parseInt(membersRow?.members || 0);

    const taux_consommation = planned_hours > 0 ? Math.round((consumed_hours / planned_hours) * 100) : 0;

    const statusDisplay = computeStatusDisplay(project);

    res.json({
      success: true,
      data: {
        project: { ...project, status_display: statusDisplay, status_color: statusColor(statusDisplay) },
        kpi: {
          planned_hours,
          consumed_hours,
          remaining_hours,
          team_members,
          total_tasks: totalTasks,
          done_tasks: doneTasks,
          in_progress_tasks: inProgressTasks,
          blocked_tasks: blockedTasks,
          late_tasks: lateTasks,
          taux_consommation,
          progression_planifiee,
          progression_reelle,
          alerte_sous_planifie: progression_reelle > progression_planifiee
        }
      }
    });
  } catch (error) {
    console.error('Erreur GET /projects/:id/kpi:', error);
    res.status(500).json({ success: false, message: 'Erreur calcul KPI', error: error.message });
  }
});

// ── PUT mettre à jour un projet ────────────────────────────────────────────
router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, description, team, priority, startDate, endDate, budget, deadline, status, progress, planned_hours } = req.body;

    const existing = await db.query('SELECT * FROM projects WHERE id = ?', [id]);
    if (existing.length === 0) return res.status(404).json({ success: false, message: 'Projet non trouvé' });

    const safeDate = (val, fallback) => (val && val !== '') ? val : (fallback || null);
    const safeProgress = (progress !== undefined && progress !== null)
      ? parseFloat(progress)
      : existing[0].progress;

    await db.query(
      `UPDATE projects SET
         name = ?, description = ?, team = ?, priority = ?,
         start_date = ?, end_date = ?, budget = ?, deadline = ?,
         status = ?, progress = ?, planned_hours = ?,
         updated_at = CURRENT_TIMESTAMP
       WHERE id = ?`,
      [name, description || existing[0].description, team, priority || existing[0].priority,
       safeDate(startDate, existing[0].start_date),
       safeDate(endDate, existing[0].end_date),
       budget !== undefined ? budget : existing[0].budget,
       safeDate(deadline, existing[0].deadline),
       status || existing[0].status,
       safeProgress,
       parseFloat(planned_hours) || existing[0].planned_hours || 0,
       id]
    );

    const updated = await db.query('SELECT * FROM projects WHERE id = ?', [id]);
    const enriched = await enrichProject(updated[0]);
    res.json({ success: true, data: enriched });
  } catch (error) {
    console.error('Erreur PUT /projects/:id:', error);
    res.status(500).json({ success: false, message: 'Erreur mise à jour projet', error: error.message });
  }
});

// ── DELETE supprimer un projet ────────────────────────────────────────────
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const existing = await db.query('SELECT * FROM projects WHERE id = ?', [id]);
    if (existing.length === 0) return res.status(404).json({ success: false, message: 'Projet non trouvé' });

    await db.query(`DELETE FROM task_dependencies
      WHERE task_id IN (SELECT id FROM tasks WHERE project_id = ?)
         OR depends_on_task_id IN (SELECT id FROM tasks WHERE project_id = ?)`, [id, id]);
    await db.query('DELETE FROM task_assignments WHERE task_id IN (SELECT id FROM tasks WHERE project_id = ?)', [id]);
    await db.query('DELETE FROM daily_time_entries WHERE task_id IN (SELECT id FROM tasks WHERE project_id = ?)', [id]);
    await db.query('DELETE FROM tasks WHERE project_id = ?', [id]);
    await db.query('DELETE FROM projects WHERE id = ?', [id]);

    res.json({ success: true, data: existing[0] });
  } catch (error) {
    console.error('Erreur DELETE /projects/:id:', error);
    res.status(500).json({ success: false, message: 'Erreur suppression projet', error: error.message });
  }
});

module.exports = router;
