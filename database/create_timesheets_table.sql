-- Création de la table timesheets
CREATE TABLE IF NOT EXISTS timesheets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  employee_id INT NOT NULL,
  date DATE NOT NULL,
  project_name VARCHAR(255) NOT NULL,
  hours_worked DECIMAL(5,2) NOT NULL DEFAULT 0,
  task_description TEXT,
  status ENUM('pending', 'submitted', 'validated', 'rejected') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  -- Clés étrangères
  FOREIGN KEY (employee_id) REFERENCES users(id) ON DELETE CASCADE,
  
  -- Index pour optimiser les requêtes
  INDEX idx_employee_id (employee_id),
  INDEX idx_date (date),
  INDEX idx_status (status),
  INDEX idx_employee_date (employee_id, date),
  
  -- Contraintes
  CONSTRAINT chk_hours_positive CHECK (hours_worked >= 0),
  CONSTRAINT chk_hours_daily CHECK (hours_worked <= 24)
);

-- Insérer quelques données de test pour les employés
INSERT INTO timesheets (employee_id, date, project_name, hours_worked, task_description, status) VALUES
(12, '2026-05-01', 'Développement ERP', 8, 'Développement module utilisateur', 'validated'),
(12, '2026-05-02', 'Site E-commerce', 7.5, 'Intégration panier d\'achat', 'validated'),
(12, '2026-05-03', 'Application Mobile', 8, 'Développement interface iOS', 'pending'),
(13, '2026-05-01', 'Développement ERP', 8, 'Tests unitaires module authentification', 'validated'),
(13, '2026-05-02', 'Site E-commerce', 6, 'Optimisation performance', 'submitted'),
(14, '2026-05-01', 'Application Mobile', 7, 'Développement interface Android', 'validated'),
(14, '2026-05-02', 'Développement ERP', 8, 'Documentation API', 'pending'),
(15, '2026-05-01', 'Site E-commerce', 8, 'Intégration paiement', 'validated'),
(15, '2026-05-02', 'Application Mobile', 7.5, 'Tests automatisés', 'submitted'),
(16, '2026-05-01', 'Développement ERP', 8, 'Refactoring base de données', 'validated'),
(16, '2026-05-02', 'Site E-commerce', 8, 'Mise en production', 'pending');
