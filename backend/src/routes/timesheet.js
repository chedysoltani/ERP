const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Obtenir les entrées de timesheet pour le manager
router.get('/manager/:managerId', async (req, res) => {
  try {
    const { managerId } = req.params;
    
    // Récupérer toutes les tâches avec les informations des projets
    const query = `
      SELECT 
        t.id as task_id,
        t.title as task_title,
        t.description as task_description,
        t.status as task_status,
        t.estimated_hours,
        t.actual_hours,
        t.created_at,
        t.due_date,
        t.start_date,
        t.end_date,
        p.id as project_id,
        p.name as project_name,
        p.description as project_description,
        p.status as project_status,
        u.nom as user_nom,
        u.prenom as user_prenom,
        u.email as user_email,
        u.role as user_role
      FROM tasks t
      LEFT JOIN projects p ON t.project_id = p.id
      LEFT JOIN users u ON t.assignee_id = u.id
      WHERE (t.creator_id = ? OR t.assignee_id = ? OR p.manager_id = ?)
      ORDER BY t.created_at DESC
    `;
    
    const results = await db.query(query, [managerId, managerId, managerId]);
    
    // Transformer les résultats en format timesheet
    const timesheetEntries = results.map(row => {
      // Calculer la durée (utiliser actual_hours si disponible, sinon estimated_hours)
      const duration = row.actual_hours || row.estimated_hours || 0;
      
      return {
        id: row.task_id,
        date: row.created_at,
        project: row.project_name || 'Non assigné',
        task: row.task_title,
        duration: duration,
        status: row.task_status === 'done' ? 'approved' : 'pending',
        user: `${row.user_prenom || ''} ${row.user_nom || ''}`.trim() || 'Non assigné',
        userEmail: row.user_email,
        userRole: row.user_role,
        projectId: row.project_id,
        taskDescription: row.task_description,
        projectStatus: row.project_status,
        dueDate: row.due_date,
        startDate: row.start_date,
        endDate: row.end_date
      };
    });
    
    res.json({
      success: true,
      data: timesheetEntries,
      message: 'Timesheet récupéré avec succès'
    });
  } catch (error) {
    console.error('Erreur lors de la récupération du timesheet:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération du timesheet'
    });
  }
});

// Obtenir les statistiques du timesheet
router.get('/stats/manager/:managerId', async (req, res) => {
  try {
    const { managerId } = req.params;
    
    // Statistiques globales
    const statsQuery = `
      SELECT 
        COUNT(*) as total_entries,
        SUM(t.actual_hours) as total_hours,
        SUM(t.estimated_hours) as estimated_hours,
        COUNT(CASE WHEN t.status = 'done' THEN 1 END) as completed_tasks,
        COUNT(CASE WHEN t.status = 'in_progress' THEN 1 END) as in_progress_tasks,
        COUNT(CASE WHEN t.status = 'todo' THEN 1 END) as todo_tasks,
        COUNT(DISTINCT t.project_id) as active_projects,
        COUNT(DISTINCT t.assignee_id) as active_users
      FROM tasks t
      WHERE (t.creator_id = ? OR t.assignee_id = ?)
    `;
    
    const stats = await db.query(statsQuery, [managerId, managerId]);
    
    // Statistiques par projet
    const projectStatsQuery = `
      SELECT 
        p.name as project_name,
        COUNT(t.id) as task_count,
        SUM(t.actual_hours) as total_hours,
        SUM(t.estimated_hours) as estimated_hours,
        COUNT(CASE WHEN t.status = 'done' THEN 1 END) as completed_tasks
      FROM projects p
      LEFT JOIN tasks t ON p.id = t.project_id
      WHERE p.manager_id = ?
      GROUP BY p.id, p.name
      ORDER BY total_hours DESC
    `;
    
    const projectStats = await db.query(projectStatsQuery, [managerId]);
    
    // Statistiques par utilisateur
    const userStatsQuery = `
      SELECT 
        u.nom,
        u.prenom,
        u.email,
        u.role,
        COUNT(t.id) as task_count,
        SUM(t.actual_hours) as total_hours,
        SUM(t.estimated_hours) as estimated_hours,
        COUNT(CASE WHEN t.status = 'done' THEN 1 END) as completed_tasks
      FROM users u
      LEFT JOIN tasks t ON u.id = t.assignee_id
      WHERE u.id IN (
        SELECT DISTINCT assignee_id FROM tasks WHERE creator_id = ?
        UNION
        SELECT DISTINCT creator_id FROM tasks WHERE assignee_id = ?
      )
      GROUP BY u.id, u.nom, u.prenom, u.email, u.role
      ORDER BY total_hours DESC
    `;
    
    const userStats = await db.query(userStatsQuery, [managerId, managerId]);
    
    res.json({
      success: true,
      data: {
        global: stats[0],
        byProject: projectStats,
        byUser: userStats
      },
      message: 'Statistiques du timesheet récupérées avec succès'
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des statistiques:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des statistiques'
    });
  }
});

// Obtenir les entrées par période
router.get('/period/manager/:managerId', async (req, res) => {
  try {
    const { managerId } = req.params;
    const { startDate, endDate, period } = req.query;
    
    let dateFilter = '';
    let queryParams = [managerId, managerId];
    
    if (startDate && endDate) {
      dateFilter = 'AND t.created_at BETWEEN ? AND ?';
      queryParams.push(startDate, endDate);
    } else if (period) {
      switch(period) {
        case 'week':
          dateFilter = 'AND t.created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)';
          break;
        case 'month':
          dateFilter = 'AND t.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)';
          break;
        case 'quarter':
          dateFilter = 'AND t.created_at >= DATE_SUB(NOW(), INTERVAL 90 DAY)';
          break;
        default:
          dateFilter = 'AND t.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)';
      }
    }
    
    const query = `
      SELECT 
        DATE(t.created_at) as date,
        COUNT(*) as entries_count,
        SUM(t.actual_hours) as total_hours,
        SUM(t.estimated_hours) as estimated_hours,
        COUNT(CASE WHEN t.status = 'done' THEN 1 END) as completed_tasks,
        COUNT(CASE WHEN t.status = 'in_progress' THEN 1 END) as in_progress_tasks,
        COUNT(CASE WHEN t.status = 'todo' THEN 1 END) as todo_tasks
      FROM tasks t
      WHERE (t.creator_id = ? OR t.assignee_id = ?) ${dateFilter}
      GROUP BY DATE(t.created_at)
      ORDER BY date DESC
    `;
    
    const results = await db.query(query, queryParams);
    
    res.json({
      success: true,
      data: results,
      message: 'Entrées par période récupérées avec succès'
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des entrées par période:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des entrées par période'
    });
  }
});

// Obtenir les entrées de timesheet pour un employé
router.get('/employee/:employeeId', async (req, res) => {
  try {
    const { employeeId } = req.params;
    
    // Récupérer les timesheets de la table timesheets
    const query = `
      SELECT 
        id,
        date,
        project_name,
        hours_worked,
        task_description,
        status,
        created_at,
        updated_at
      FROM timesheets
      WHERE employee_id = ?
      ORDER BY date DESC, created_at DESC
    `;
    
    const results = await db.query(query, [employeeId]);
    
    // Transformer les résultats en format timesheet pour le frontend
    const timesheetEntries = results.map(row => ({
      id: row.id,
      date: new Date(row.date).toLocaleDateString('fr-FR'),
      project: row.project_name,
      hours: row.hours_worked,
      description: row.task_description || '',
      status: row.status
    }));
    
    res.json({
      success: true,
      data: timesheetEntries,
      message: 'Timesheet employé récupéré avec succès'
    });
  } catch (error) {
    console.error('Erreur lors de la récupération du timesheet employé:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération du timesheet employé'
    });
  }
});

// Créer une nouvelle entrée de timesheet pour un employé
router.post('/employee/:employeeId', async (req, res) => {
  try {
    const { employeeId } = req.params;
    const { date, project_name, hours_worked, task_description, status = 'pending' } = req.body;
    
    // Validation des données
    if (!date || !project_name || !hours_worked) {
      return res.status(400).json({
        success: false,
        message: 'Les champs date, project_name et hours_worked sont obligatoires'
      });
    }
    
    // Insérer le timesheet
    const insertQuery = `
      INSERT INTO timesheets (employee_id, date, project_name, hours_worked, task_description, status)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    
    const result = await db.query(insertQuery, [employeeId, date, project_name, hours_worked, task_description, status]);
    
    res.json({
      success: true,
      data: {
        id: result.insertId,
        employee_id: employeeId,
        date,
        project_name,
        hours_worked,
        task_description,
        status
      },
      message: 'Timesheet créé avec succès'
    });
  } catch (error) {
    console.error('Erreur lors de la création du timesheet:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la création du timesheet'
    });
  }
});

// Mettre à jour un timesheet
router.put('/employee/:employeeId/timesheets/:timesheetId', async (req, res) => {
  try {
    const { employeeId, timesheetId } = req.params;
    const { date, project_name, hours_worked, task_description, status } = req.body;
    
    // Vérifier que le timesheet appartient à l'employé
    const checkQuery = 'SELECT id FROM timesheets WHERE id = ? AND employee_id = ?';
    const checkResult = await db.query(checkQuery, [timesheetId, employeeId]);
    
    if (checkResult.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Timesheet non trouvé ou non autorisé'
      });
    }
    
    // Mettre à jour le timesheet
    const updateQuery = `
      UPDATE timesheets 
      SET date = ?, project_name = ?, hours_worked = ?, task_description = ?, status = ?
      WHERE id = ? AND employee_id = ?
    `;
    
    await db.query(updateQuery, [date, project_name, hours_worked, task_description, status, timesheetId, employeeId]);
    
    res.json({
      success: true,
      message: 'Timesheet mis à jour avec succès'
    });
  } catch (error) {
    console.error('Erreur lors de la mise à jour du timesheet:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la mise à jour du timesheet'
    });
  }
});

// Soumettre un timesheet pour validation
router.put('/employee/:employeeId/timesheets/:timesheetId/submit', async (req, res) => {
  try {
    const { employeeId, timesheetId } = req.params;
    
    // Vérifier que le timesheet appartient à l'employé
    const checkQuery = 'SELECT id FROM timesheets WHERE id = ? AND employee_id = ?';
    const checkResult = await db.query(checkQuery, [timesheetId, employeeId]);
    
    if (checkResult.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Timesheet non trouvé ou non autorisé'
      });
    }
    
    // Mettre à jour le statut
    const updateQuery = 'UPDATE timesheets SET status = ? WHERE id = ? AND employee_id = ?';
    await db.query(updateQuery, ['submitted', timesheetId, employeeId]);
    
    res.json({
      success: true,
      message: 'Timesheet soumis pour validation'
    });
  } catch (error) {
    console.error('Erreur lors de la soumission du timesheet:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la soumission du timesheet'
    });
  }
});

// Supprimer un timesheet
router.delete('/employee/:employeeId/timesheets/:timesheetId', async (req, res) => {
  try {
    const { employeeId, timesheetId } = req.params;
    
    // Vérifier que le timesheet appartient à l'employé
    const checkQuery = 'SELECT id FROM timesheets WHERE id = ? AND employee_id = ?';
    const checkResult = await db.query(checkQuery, [timesheetId, employeeId]);
    
    if (checkResult.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Timesheet non trouvé ou non autorisé'
      });
    }
    
    // Supprimer le timesheet
    await db.query('DELETE FROM timesheets WHERE id = ? AND employee_id = ?', [timesheetId, employeeId]);
    
    res.json({
      success: true,
      message: 'Timesheet supprimé avec succès'
    });
  } catch (error) {
    console.error('Erreur lors de la suppression du timesheet:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la suppression du timesheet'
    });
  }
});

// Route pour ajouter des données de test (à utiliser temporairement)
router.post('/seed-test-data', async (req, res) => {
  try {
    const testData = [
      [12, '2026-05-01', 'Développement ERP', 8, 'Développement module utilisateur', 'validated'],
      [12, '2026-05-02', 'Site E-commerce', 7.5, 'Intégration panier d\'achat', 'validated'],
      [12, '2026-05-03', 'Application Mobile', 8, 'Développement interface iOS', 'pending'],
      [13, '2026-05-01', 'Développement ERP', 8, 'Tests unitaires module authentification', 'validated'],
      [13, '2026-05-02', 'Site E-commerce', 6, 'Optimisation performance', 'submitted'],
      [14, '2026-05-01', 'Application Mobile', 7, 'Développement interface Android', 'validated'],
      [14, '2026-05-02', 'Développement ERP', 8, 'Documentation API', 'pending'],
      [15, '2026-05-01', 'Site E-commerce', 8, 'Intégration paiement', 'validated'],
      [15, '2026-05-02', 'Application Mobile', 7.5, 'Tests automatisés', 'submitted'],
      [16, '2026-05-01', 'Développement ERP', 8, 'Refactoring base de données', 'validated'],
      [16, '2026-05-02', 'Site E-commerce', 8, 'Mise en production', 'pending']
    ];

    const insertQuery = `
      INSERT INTO timesheets (employee_id, date, project_name, hours_worked, task_description, status)
      VALUES ?
    `;

    await db.query(insertQuery, [testData]);
    
    res.json({
      success: true,
      message: 'Données de test insérées avec succès',
      count: testData.length
    });
  } catch (error) {
    console.error('Erreur lors de l\'insertion des données de test:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'insertion des données de test'
    });
  }
});

module.exports = router;
