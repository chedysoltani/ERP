-- ============================================================
-- MIGRATION V2 — Nouvelles fonctionnalités ERP
-- ============================================================

-- 1. Ajout planned_hours sur projects
ALTER TABLE projects
  ADD COLUMN IF NOT EXISTS planned_hours DECIMAL(10,2) DEFAULT 0 COMMENT 'Heures planifiées (somme estimations tâches)';

-- 2. Table saisie journalière des heures par tâche (F-11, F-10)
CREATE TABLE IF NOT EXISTS daily_time_entries (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  employee_id   INT NOT NULL,
  task_id       INT NOT NULL,
  date          DATE NOT NULL,
  hours         DECIMAL(5,2) NOT NULL CHECK (hours > 0),
  comment       TEXT,
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uq_emp_task_date (employee_id, task_id, date),
  CONSTRAINT fk_dte_employee FOREIGN KEY (employee_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_dte_task     FOREIGN KEY (task_id)     REFERENCES tasks(id) ON DELETE CASCADE
);

-- 3. S'assurer que start_date + estimated_hours existent sur tasks (déjà présents normalement)
-- Les colonnes start_date, end_date, estimated_hours existent déjà dans create_tasks_table.sql
-- On s'assure juste que is_blocked existe
ALTER TABLE tasks
  ADD COLUMN IF NOT EXISTS is_blocked TINYINT(1) DEFAULT 0;

-- 4. Index utiles
CREATE INDEX IF NOT EXISTS idx_dte_employee_date ON daily_time_entries (employee_id, date);
CREATE INDEX IF NOT EXISTS idx_dte_task         ON daily_time_entries (task_id);
