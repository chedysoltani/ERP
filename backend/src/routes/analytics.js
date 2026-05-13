const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Obtenir les analytics d'un projet
router.get('/project/:projectId', async (req, res) => {
  try {
    const { projectId } = req.params;

    // Statistiques de base du projet
    const projectStats = await db.query(`
      SELECT 
        p.id,
        p.name,
        p.progress as project_progress,
        p.start_date,
        p.end_date,
        p.deadline,
        COUNT(DISTINCT t.id) as total_tasks,
        SUM(CASE WHEN t.status = 'done' THEN 1 ELSE 0 END) as completed_tasks,
        SUM(CASE WHEN t.status = 'in_progress' THEN 1 ELSE 0 END) as in_progress_tasks,
        SUM(CASE WHEN t.status = 'todo' THEN 1 ELSE 0 END) as pending_tasks,
        SUM(CASE WHEN t.status = 'cancelled' THEN 1 ELSE 0 END) as cancelled_tasks,
        SUM(CASE WHEN t.due_date < CURDATE() AND t.status != 'done' THEN 1 ELSE 0 END) as delayed_tasks,
        SUM(CASE WHEN t.is_blocked = TRUE THEN 1 ELSE 0 END) as blocked_tasks,
        SUM(t.estimated_hours) as total_estimated_hours,
        SUM(t.actual_hours) as total_actual_hours,
        AVG(t.progress) as avg_task_progress
      FROM projects p
      LEFT JOIN tasks t ON p.id = t.project_id
      WHERE p.id = ?
      GROUP BY p.id
    `, [projectId]);

    if (projectStats.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Projet non trouvé'
      });
    }

    const stats = projectStats[0];

    // Calculer le pourcentage de complétion
    const completionPercentage = stats.total_tasks > 0 
      ? Math.round((stats.completed_tasks / stats.total_tasks) * 100) 
      : 0;

    // Distribution de la charge de travail par employé
    const workloadDistribution = await db.query(`
      SELECT 
        u.id as employee_id,
        CONCAT(u.prenom, ' ', u.nom) as employee_name,
        CONCAT(LEFT(u.prenom, 1), LEFT(u.nom, 1)) as initials,
        COUNT(DISTINCT t.id) as assigned_tasks,
        SUM(CASE WHEN t.status = 'done' THEN 1 ELSE 0 END) as completed_tasks,
        SUM(CASE WHEN t.status = 'in_progress' THEN 1 ELSE 0 END) as in_progress_tasks,
        SUM(t.estimated_hours) as total_estimated_hours,
        SUM(t.actual_hours) as total_actual_hours,
        AVG(t.progress) as avg_progress
      FROM users u
      LEFT JOIN task_assignments ta ON u.id = ta.employee_id
      LEFT JOIN tasks t ON ta.task_id = t.id AND t.project_id = ?
      WHERE u.role = 'employee'
      GROUP BY u.id, u.prenom, u.nom
      HAVING assigned_tasks > 0
      ORDER BY assigned_tasks DESC
    `, [projectId]);

    // Productivité des employés (basée sur les sessions de temps)
    const employeeProductivity = await db.query(`
      SELECT 
        u.id as employee_id,
        CONCAT(u.prenom, ' ', u.nom) as employee_name,
        CONCAT(LEFT(u.prenom, 1), LEFT(u.nom, 1)) as initials,
        COUNT(DISTINCT tts.id) as total_sessions,
        SUM(tts.duration_seconds) as total_seconds,
        SUM(tts.duration_seconds) / 3600 as total_hours,
        AVG(tts.duration_seconds) as avg_session_duration,
        COUNT(DISTINCT tts.task_id) as tasks_worked_on
      FROM users u
      LEFT JOIN task_time_sessions tts ON u.id = tts.employee_id
      LEFT JOIN tasks t ON tts.task_id = t.id AND t.project_id = ?
      WHERE u.role = 'employee' AND tts.status = 'completed'
      GROUP BY u.id, u.prenom, u.nom
      HAVING total_sessions > 0
      ORDER BY total_hours DESC
    `, [projectId]);

    // Tâches avec leurs dépendances
    const tasksWithDependencies = await db.query(`
      SELECT 
        t.id,
        t.title,
        t.status,
        t.progress,
        t.start_date,
        t.due_date,
        t.estimated_hours,
        t.actual_hours,
        t.is_blocked,
        t.dependency_count,
        COUNT(DISTINCT td.id) as has_dependencies,
        GROUP_CONCAT(
          DISTINCT CONCAT(pt.title, ' (', pt.status, ')')
          ORDER BY pt.title
          SEPARATOR ', '
        ) as depends_on_tasks
      FROM tasks t
      LEFT JOIN task_dependencies td ON t.id = td.task_id
      LEFT JOIN tasks pt ON td.depends_on_task_id = pt.id
      WHERE t.project_id = ?
      GROUP BY t.id
      ORDER BY t.start_date
    `, [projectId]);

    // KPIs supplémentaires
    const kpis = {
      completionPercentage,
      onTimeTasks: stats.total_tasks - stats.delayed_tasks,
      efficiency: stats.total_actual_hours > 0 
        ? Math.round((stats.completed_tasks / stats.total_actual_hours) * 10) / 10 
        : 0,
      avgTaskDuration: stats.completed_tasks > 0
        ? Math.round((stats.total_actual_hours / stats.completed_tasks) * 10) / 10
        : 0,
      blockedTasksPercentage: stats.total_tasks > 0
        ? Math.round((stats.blocked_tasks / stats.total_tasks) * 100)
        : 0
    };

    res.json({
      success: true,
      data: {
        projectStats: stats,
        kpis,
        workloadDistribution,
        employeeProductivity,
        tasksWithDependencies
      }
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des analytics:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des analytics'
    });
  }
});

// Obtenir les analytics globaux pour le manager
router.get('/manager/:managerId', async (req, res) => {
  try {
    const { managerId } = req.params;

    // Statistiques globales
    const globalStats = await db.query(`
      SELECT 
        COUNT(DISTINCT p.id) as total_projects,
        COUNT(DISTINCT t.id) as total_tasks,
        SUM(CASE WHEN t.status = 'done' THEN 1 ELSE 0 END) as completed_tasks,
        SUM(CASE WHEN t.status = 'in_progress' THEN 1 ELSE 0 END) as in_progress_tasks,
        SUM(CASE WHEN t.due_date < CURDATE() AND t.status != 'done' THEN 1 ELSE 0 END) as delayed_tasks,
        SUM(t.estimated_hours) as total_estimated_hours,
        SUM(t.actual_hours) as total_actual_hours,
        AVG(p.progress) as avg_project_progress
      FROM projects p
      LEFT JOIN tasks t ON p.id = t.project_id
      WHERE p.manager_id = ?
    `, [managerId]);

    // Projets avec leurs statistiques
    const projectsOverview = await db.query(`
      SELECT 
        p.id,
        p.name,
        p.progress,
        p.status,
        p.start_date,
        p.end_date,
        p.deadline,
        COUNT(DISTINCT t.id) as total_tasks,
        SUM(CASE WHEN t.status = 'done' THEN 1 ELSE 0 END) as completed_tasks,
        SUM(CASE WHEN t.due_date < CURDATE() AND t.status != 'done' THEN 1 ELSE 0 END) as delayed_tasks,
        SUM(t.estimated_hours) as estimated_hours,
        SUM(t.actual_hours) as actual_hours
      FROM projects p
      LEFT JOIN tasks t ON p.id = t.project_id
      WHERE p.manager_id = ?
      GROUP BY p.id
      ORDER BY p.created_at DESC
    `, [managerId]);

    // Top employés par productivité
    const topEmployees = await db.query(`
      SELECT 
        u.id as employee_id,
        CONCAT(u.prenom, ' ', u.nom) as employee_name,
        CONCAT(LEFT(u.prenom, 1), LEFT(u.nom, 1)) as initials,
        COUNT(DISTINCT ta.task_id) as total_assignments,
        SUM(CASE WHEN ta.status = 'completed' THEN 1 ELSE 0 END) as completed_assignments,
        SUM(tts.duration_seconds) / 3600 as total_hours_worked
      FROM users u
      LEFT JOIN task_assignments ta ON u.id = ta.employee_id
      LEFT JOIN tasks t ON ta.task_id = t.id
      LEFT JOIN projects p ON t.project_id = p.id
      LEFT JOIN task_time_sessions tts ON u.id = tts.employee_id AND tts.status = 'completed'
      WHERE u.role = 'employee' AND p.manager_id = ?
      GROUP BY u.id, u.prenom, u.nom
      ORDER BY total_hours_worked DESC
      LIMIT 10
    `, [managerId]);

    // Tâches qui nécessitent une attention (bloquées ou en retard)
    const attentionTasks = await db.query(`
      SELECT 
        t.id,
        t.title,
        t.status,
        t.due_date,
        t.is_blocked,
        p.name as project_name,
        CONCAT(u.prenom, ' ', u.nom) as assignee_name
      FROM tasks t
      LEFT JOIN projects p ON t.project_id = p.id
      LEFT JOIN task_assignments ta ON t.id = ta.task_id
      LEFT JOIN users u ON ta.employee_id = u.id
      WHERE p.manager_id = ? 
        AND (t.is_blocked = TRUE OR (t.due_date < CURDATE() AND t.status != 'done'))
      ORDER BY t.due_date ASC
      LIMIT 20
    `, [managerId]);

    res.json({
      success: true,
      data: {
        globalStats: globalStats[0] || {},
        projectsOverview,
        topEmployees,
        attentionTasks
      }
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des analytics globaux:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des analytics globaux'
    });
  }
});

// Obtenir les données pour le graphique de Gantt
router.get('/gantt/:projectId', async (req, res) => {
  try {
    const { projectId } = req.params;

    const projectRows = await db.query(
      `SELECT id, name,
        COALESCE(progress, 0) AS progress,
        start_date, end_date, deadline
       FROM projects WHERE id = ?`,
      [projectId]
    );

    const ganttData = await db.query(
      `
      SELECT
        t.id,
        t.title,
        t.status,
        COALESCE(t.progress, 0) AS progress,
        DATE(COALESCE(t.start_date, DATE(t.created_at))) AS start_date,
        DATE(
          COALESCE(
            t.due_date,
            t.end_date,
            DATE_ADD(DATE(COALESCE(t.start_date, DATE(t.created_at))), INTERVAL 7 DAY)
          )
        ) AS end_date,
        t.estimated_hours,
        t.actual_hours,
        COALESCE(t.is_blocked, 0) AS is_blocked,
        t.priority,
        p.name AS project_name,
        t.assignee_id,
        CONCAT(au.prenom, ' ', au.nom) AS primary_assignee_name,
        IFNULL(ad.assignments, JSON_ARRAY()) AS assignments,
        IFNULL(dd.dependencies, JSON_ARRAY()) AS dependencies
      FROM tasks t
      LEFT JOIN projects p ON t.project_id = p.id
      LEFT JOIN users au ON au.id = t.assignee_id
      LEFT JOIN (
        SELECT ta.task_id,
          JSON_ARRAYAGG(
            JSON_OBJECT(
              'employee_id', ta.employee_id,
              'employee_name', CONCAT(u.prenom, ' ', u.nom),
              'employee_initials', CONCAT(LEFT(u.prenom, 1), LEFT(u.nom, 1)),
              'status', ta.status
            )
          ) AS assignments
        FROM task_assignments ta
        INNER JOIN users u ON u.id = ta.employee_id
        GROUP BY ta.task_id
      ) ad ON ad.task_id = t.id
      LEFT JOIN (
        SELECT td.task_id,
          JSON_ARRAYAGG(
            JSON_OBJECT(
              'depends_on_task_id', td.depends_on_task_id,
              'dependency_type', td.dependency_type,
              'lag_days', td.lag_days,
              'depends_on_task_title', pt.title
            )
          ) AS dependencies
        FROM task_dependencies td
        INNER JOIN tasks pt ON td.depends_on_task_id = pt.id
        GROUP BY td.task_id
      ) dd ON dd.task_id = t.id
      WHERE t.project_id = ?
      ORDER BY start_date ASC, t.id ASC
      `,
      [projectId]
    );

    res.json({
      success: true,
      data: ganttData,
      project: projectRows[0] || null
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des données Gantt:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des données Gantt'
    });
  }
});

module.exports = router;
