-- Création de la table des sessions de temps de travail sur les tâches
-- Permet de suivre le temps passé sur chaque tâche avec un système de pointage

CREATE TABLE IF NOT EXISTS task_time_sessions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  task_id INT NOT NULL,
  employee_id INT NOT NULL,
  start_time DATETIME NOT NULL,
  end_time DATETIME NULL,
  duration_seconds INT DEFAULT 0 COMMENT 'Durée en secondes',
  status ENUM('running', 'paused', 'completed') DEFAULT 'running',
  description TEXT COMMENT 'Description de ce qui a été fait pendant cette session',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  -- Clés étrangères
  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,
  FOREIGN KEY (employee_id) REFERENCES users(id) ON DELETE CASCADE,
  
  -- Index pour optimiser les requêtes
  INDEX idx_task_id (task_id),
  INDEX idx_employee_id (employee_id),
  INDEX idx_status (status),
  INDEX idx_start_time (start_time),
  INDEX idx_task_employee (task_id, employee_id)
);

-- Table pour l'historique des modifications de tâches
CREATE TABLE IF NOT EXISTS task_edit_history (
  id INT AUTO_INCREMENT PRIMARY KEY,
  task_id INT NOT NULL,
  employee_id INT NOT NULL,
  field_name VARCHAR(50) NOT NULL COMMENT 'Champ modifié (title, description, etc.)',
  old_value TEXT,
  new_value TEXT,
  changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  -- Clés étrangères
  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,
  FOREIGN KEY (employee_id) REFERENCES users(id) ON DELETE CASCADE,
  
  -- Index pour optimiser les requêtes
  INDEX idx_task_id (task_id),
  INDEX idx_employee_id (employee_id),
  INDEX idx_changed_at (changed_at)
);

-- Table des notifications pour les assignations de tâches
CREATE TABLE IF NOT EXISTS task_notifications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  task_id INT NOT NULL,
  employee_id INT NOT NULL,
  type ENUM('assigned', 'dependency_completed', 'deadline_reminder', 'status_changed') NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  -- Clés étrangères
  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,
  FOREIGN KEY (employee_id) REFERENCES users(id) ON DELETE CASCADE,
  
  -- Index pour optimiser les requêtes
  INDEX idx_employee_id (employee_id),
  INDEX idx_is_read (is_read),
  INDEX idx_created_at (created_at)
);

-- Insérer des données d'exemple pour les sessions de temps
INSERT IGNORE INTO task_time_sessions (task_id, employee_id, start_time, end_time, duration_seconds, status, description) VALUES
(1, 1, DATE_SUB(NOW(), INTERVAL 2 HOUR), DATE_SUB(NOW(), INTERVAL 1 HOUR), 3600, 'completed', 'Design review et corrections'),
(1, 1, DATE_SUB(NOW(), INTERVAL 30 MINUTE), NULL, 1800, 'running', 'Continuation du design'),
(2, 2, DATE_SUB(NOW(), INTERVAL 3 HOUR), DATE_SUB(NOW(), INTERVAL 1 HOUR), 7200, 'completed', 'Développement des endpoints API'),
(3, 3, DATE_SUB(NOW(), INTERVAL 1 HOUR), NULL, 3600, 'running', 'Schéma de base de données');

-- Insérer des données d'exemple pour l'historique d'édition
INSERT IGNORE INTO task_edit_history (task_id, employee_id, field_name, old_value, new_value) VALUES
(1, 1, 'status', 'todo', 'in_progress'),
(2, 1, 'priority', 'medium', 'high'),
(3, 1, 'due_date', '2024-03-30', '2024-04-01');

-- Insérer des données d'exemple pour les notifications
INSERT IGNORE INTO task_notifications (task_id, employee_id, type, message, is_read) VALUES
(1, 2, 'assigned', 'Vous avez été assigné à la tâche: Dashboard design review', FALSE),
(2, 2, 'assigned', 'Vous avez été assigné à la tâche: API endpoints', FALSE),
(3, 3, 'assigned', 'Vous avez été assigné à la tâche: Database schema', TRUE);
