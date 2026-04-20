const db = require('../src/config/database');

async function seedEmployeeData() {
  try {
    console.log('Début de l\'ajout des données de test pour employés...');

    // Ajouter des utilisateurs employés s'ils n'existent pas
    const employees = [
      { nom: 'Employee1', prenom: 'Jean', email: 'employee1@company.com', password: 'password123' },
      { nom: 'Employee2', prenom: 'Marie', email: 'employee2@company.com', password: 'password123' },
      { nom: 'Employee3', prenom: 'Pierre', email: 'employee3@company.com', password: 'password123' }
    ];

    for (const emp of employees) {
      // Vérifier si l'employé existe déjà
      const existing = await db.query('SELECT id FROM users WHERE email = ?', [emp.email]);
      
      if (existing.length === 0) {
        const result = await db.query(`
          INSERT INTO users (nom, prenom, email, password) 
          VALUES (?, ?, ?, ?)
        `, [emp.nom, emp.prenom, emp.email, emp.password]);
        
        console.log(`Employé ${emp.email} créé avec ID: ${result.insertId}`);
        
        // Assigner des tâches existantes à cet employé
        await assignTasksToEmployee(result.insertId);
      } else {
        console.log(`Employé ${emp.email} existe déjà avec ID: ${existing[0].id}`);
        await assignTasksToEmployee(existing[0].id);
      }
    }

    console.log('Données de test pour employés ajoutées avec succès!');
  } catch (error) {
    console.error('Erreur lors de l\'ajout des données de test:', error);
  } finally {
    process.exit();
  }
}

async function assignTasksToEmployee(employeeId) {
  try {
    // Récupérer quelques tâches existantes
    const tasks = await db.query('SELECT id FROM tasks LIMIT 3');
    
    for (const task of tasks) {
      // Assigner aléatoirement des tâches à l'employé
      const shouldAssign = Math.random() > 0.3; // 70% de chance d'assigner
      
      if (shouldAssign) {
        await db.query('UPDATE tasks SET assignee_id = ? WHERE id = ?', [employeeId, task.id]);
        console.log(`Tâche ${task.id} assignée à l'employé ${employeeId}`);
      }
    }
  } catch (error) {
    console.error('Erreur lors de l\'assignation des tâches:', error);
  }
}

seedEmployeeData();
