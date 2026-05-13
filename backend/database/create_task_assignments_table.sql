-- Création de la table des assignations de tâches (multi-employés)
-- Permet d'assigner une tâche à plusieurs employés avec un statut individuel

CREATE TABLE IF NOT EXISTS task_assignments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  task_id INT NOT NULL,
  employee_id INT NOT NULL,
  status ENUM('pending', 'in_progress', 'completed') DEFAULT 'pending',
  assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  completed_at TIMESTAMP NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  -- Clés étrangères
  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,
  FOREIGN KEY (employee_id) REFERENCES users(id) ON DELETE CASCADE,
  
  -- Index pour optimiser les requêtes
  INDEX idx_task_id (task_id),
  INDEX idx_employee_id (employee_id),
  INDEX idx_status (status),
  INDEX idx_task_employee (task_id, employee_id),
  
  -- Contrainte d'unicité: un employé ne peut être assigné qu'une fois à une tâche
  UNIQUE KEY unique_task_employee (task_id, employee_id)
);

-- Ajouter une colonne pour stocker les assignations multiples dans la table tasks (optionnel, pour compatibilité)
ALTER TABLE tasks 
ADD COLUMN IF NOT EXISTS has_multiple_assignees BOOLEAN DEFAULT FALSE AFTER assignee_id;

-- Insérer des données d'exemple pour les tâches existantes
INSERT IGNORE INTO task_assignments (task_id, employee_id, status, assigned_at, completed_at) VALUES
(1, 1, 'in_progress', NOW(), NULL),
(1, 2, 'pending', NOW(), NULL),
(2, 2, 'pending', NOW(), NULL),
(3, 3, 'in_progress', NOW(), NULL),
(4, 1, 'pending', NOW(), NULL),
(5, 2, 'pending', NOW(), NULL),
(6, 3, 'completed', NOW(), NOW());

-- Mettre à jour les tâches qui ont plusieurs assignées
UPDATE tasks t SET has_multiple_assignees = TRUE 
WHERE EXISTS (SELECT 1 FROM task_assignments ta WHERE ta.task_id = t.id GROUP BY ta.task_id HAVING COUNT(*) > 1);
