-- Création de la table des dépendances de tâches
-- Permet de définir des relations de dépendance entre les tâches

CREATE TABLE IF NOT EXISTS task_dependencies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  task_id INT NOT NULL COMMENT 'Tâche qui dépend (tâche B)',
  depends_on_task_id INT NOT NULL COMMENT 'Tâche dont dépend (tâche A)',
  dependency_type ENUM('finish_to_start', 'start_to_start', 'finish_to_finish') DEFAULT 'finish_to_start',
  lag_days INT DEFAULT 0 COMMENT 'Délai en jours entre les tâches',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  -- Clés étrangères
  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,
  FOREIGN KEY (depends_on_task_id) REFERENCES tasks(id) ON DELETE CASCADE,
  
  -- Index pour optimiser les requêtes
  INDEX idx_task_id (task_id),
  INDEX idx_depends_on_task_id (depends_on_task_id),
  INDEX idx_dependency_type (dependency_type),
  
  -- Contrainte d'unicité: éviter les doublons de dépendances
  UNIQUE KEY unique_dependency (task_id, depends_on_task_id),
  
  -- Contrainte pour éviter les dépendances circulaires directes
  CONSTRAINT check_no_self_dependency CHECK (task_id != depends_on_task_id)
);

-- Insérer des données d'exemple pour les tâches existantes
INSERT IGNORE INTO task_dependencies (task_id, depends_on_task_id, dependency_type, lag_days) VALUES
(2, 1, 'finish_to_start', 0),
(3, 1, 'start_to_start', 1),
(4, 2, 'finish_to_start', 0),
(5, 3, 'finish_to_start', 2),
(6, 4, 'finish_to_finish', 0);

-- Ajouter une colonne pour indiquer si une tâche est bloquée
ALTER TABLE tasks 
ADD COLUMN IF NOT EXISTS is_blocked BOOLEAN DEFAULT FALSE AFTER status;

-- Ajouter une colonne pour stocker le nombre de dépendances
ALTER TABLE tasks 
ADD COLUMN IF NOT EXISTS dependency_count INT DEFAULT 0 AFTER is_blocked;

-- Mettre à jour le compteur de dépendances pour les tâches existantes
UPDATE tasks t SET dependency_count = (
  SELECT COUNT(*) FROM task_dependencies td WHERE td.task_id = t.id
);

-- Marquer les tâches bloquées (dont les dépendances ne sont pas terminées)
UPDATE tasks t SET is_blocked = TRUE 
WHERE EXISTS (
  SELECT 1 FROM task_dependencies td 
  INNER JOIN tasks pt ON td.depends_on_task_id = pt.id 
  WHERE td.task_id = t.id AND pt.status != 'done'
);
