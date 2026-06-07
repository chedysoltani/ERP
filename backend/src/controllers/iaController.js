const fs = require('fs');
const pdfParse = require('pdf-parse');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const db = require('../config/database');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const PDF_MAX_CHARS = 40000;
const PROMPT_INJECTION_PATTERN = /ignore\s+(all\s+)?(previous|prior|above|earlier|preceding)\s+(instructions?|prompts?|context|rules?)/gi;

function sanitizePdfText(text) {
  return text
    .substring(0, PDF_MAX_CHARS)
    .replace(PROMPT_INJECTION_PATTERN, '[CONTENU SUPPRIMÉ]')
    .replace(/```/g, '')
    .trim();
}

function addBusinessDays(startDate, days) {
  const result = new Date(startDate);
  let added = 0;
  while (added < days) {
    result.setDate(result.getDate() + 1);
    const dow = result.getDay();
    if (dow !== 0 && dow !== 6) added++;
  }
  return result;
}

function parseEstimatedDays(estimatedTime) {
  if (!estimatedTime) return 1;
  const match = String(estimatedTime).match(/\d+/);
  return match ? Math.max(1, parseInt(match[0])) : 1;
}

class IAController {
  static async simulateProjectFromPdf(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ success: false, message: 'Aucun fichier PDF fourni.' });
      }

      const dataBuffer = fs.readFileSync(req.file.path);
      const data = await pdfParse(dataBuffer);
      fs.unlinkSync(req.file.path);

      const pdfText = data.text;
      if (!pdfText || pdfText.trim().length === 0) {
        return res.status(400).json({ success: false, message: 'Le fichier PDF est vide ou illisible.' });
      }

      const safePdfText = sanitizePdfText(pdfText);

      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

      const today = new Date().toISOString().split('T')[0];
      const prompt = `Tu es un assistant de planification de projets intégré dans un ERP.
Analyse le cahier des charges fourni et génère un planning structuré en JSON UNIQUEMENT.
N'ajoute AUCUN texte en dehors du JSON. Le JSON doit être valide et parseable.

RÈGLES IMPORTANTES :
- La date de début du projet est au plus tôt aujourd'hui : ${today}
- Pour chaque tâche, fournis OBLIGATOIREMENT : date_debut, date_fin (format ISO 8601 YYYY-MM-DD), heures_estimees (float > 0), prerequis (liste des titres des tâches prérequises parmi les suggestions, vide si aucune)
- Les dates doivent respecter les dépendances : date_debut(B) >= date_fin(A) + 1 jour pour chaque prérequis A de B
- heures_estimees doit être cohérent avec la durée et la complexité de la tâche
- Les dépendances ne doivent pas créer de cycles

CONTENU DU CAHIER DES CHARGES :
---BEGIN---
${safePdfText}
---END---

FORMAT JSON ATTENDU (réponds UNIQUEMENT avec ce JSON) :
{
  "projectName": "Nom du projet",
  "description": "Description courte",
  "duration": "Ex: 60 jours",
  "complexity": "faible | moyen | élevé",
  "phases": [
    {
      "name": "Nom de la phase",
      "description": "Description de la phase",
      "tasks": [
        {
          "title": "Titre de la tâche",
          "description": "Description détaillée",
          "date_debut": "YYYY-MM-DD",
          "date_fin": "YYYY-MM-DD",
          "heures_estimees": 16.0,
          "estimatedDays": 2,
          "priority": "low | medium | high",
          "prerequis": ["Titre d'une tâche prérequise"],
          "role": "Rôle recommandé",
          "status": "not started"
        }
      ]
    }
  ],
  "timeline": {
    "startDate": "YYYY-MM-DD",
    "endDate": "YYYY-MM-DD"
  }
}`;

      const result = await model.generateContent(prompt);
      let responseText = result.response.text().trim();

      responseText = responseText
        .replace(/^```json\s*/i, '')
        .replace(/^```\s*/i, '')
        .replace(/\s*```$/i, '')
        .trim();

      const projectData = JSON.parse(responseText);

      res.json({ success: true, data: projectData });
    } catch (error) {
      if (req.file?.path && fs.existsSync(req.file.path)) {
        fs.unlinkSync(req.file.path);
      }
      console.error('Erreur simulateProjectFromPdf:', error);
      res.status(500).json({ success: false, message: 'Erreur lors de l\'analyse par l\'IA.', error: error.message });
    }
  }

  static async confirmProject(req, res) {
    const connection = await db.getConnection();
    try {
      const { projectData } = req.body;
      const manager_id = req.user?.id;

      if (!manager_id) {
        return res.status(401).json({ success: false, message: 'Authentification requise.' });
      }

      if (!projectData || !projectData.projectName) {
        return res.status(400).json({ success: false, message: 'Données de projet invalides.' });
      }

      const startDate = projectData.timeline?.startDate || new Date().toISOString().split('T')[0];
      const endDate = projectData.timeline?.endDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

      const priority = projectData.complexity === 'élevé' ? 'high'
        : projectData.complexity === 'moyen' ? 'medium' : 'low';

      await connection.beginTransaction();

      const [projectResult] = await connection.query(
        `INSERT INTO projects (name, description, team, priority, start_date, end_date, budget, manager_id, status, progress)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          projectData.projectName,
          projectData.description || '',
          'Équipe à définir',
          priority,
          startDate,
          endDate,
          0,
          manager_id,
          'active',
          0
        ]
      );

      const projectId = projectResult.insertId;
      let createdTasks = 0;
      let currentDate = new Date(startDate);

      const taskTitleToId = {};

      for (const phase of projectData.phases || []) {
        for (const task of phase.tasks || []) {
          const estimatedDays = parseEstimatedDays(task.estimatedDays || task.estimatedTime);

          // Priorité aux champs IA enrichis (F-08)
          let taskStartDate, taskDueDate;
          if (task.date_debut && task.date_fin) {
            taskStartDate = task.date_debut;
            taskDueDate = task.date_fin;
          } else {
            const end = addBusinessDays(currentDate, estimatedDays);
            taskStartDate = currentDate.toISOString().split('T')[0];
            taskDueDate = end.toISOString().split('T')[0];
            currentDate = end;
          }

          const estimatedHours = task.heures_estimees || estimatedDays * 8;

          const [taskResult] = await connection.query(
            `INSERT INTO tasks (title, description, project_id, status, priority, start_date, due_date, end_date, estimated_hours, progress, created_at, tags, creator_id)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, ?, ?)`,
            [
              `[${phase.name}] ${task.title}`,
              task.description || '',
              projectId,
              'todo',
              task.priority || 'medium',
              taskStartDate,
              taskDueDate,
              taskDueDate,
              estimatedHours,
              0,
              JSON.stringify([task.role || 'Non défini']),
              manager_id
            ]
          );
          taskTitleToId[task.title] = taskResult.insertId;
          createdTasks++;
        }
      }

      // Créer les dépendances entre tâches (F-06 / F-08)
      for (const phase of projectData.phases || []) {
        for (const task of phase.tasks || []) {
          const taskId = taskTitleToId[task.title];
          if (!taskId) continue;
          for (const prereqTitle of (task.prerequis || task.dependencies || [])) {
            const prereqId = taskTitleToId[prereqTitle];
            if (prereqId && prereqId !== taskId) {
              try {
                await connection.query(
                  `INSERT IGNORE INTO task_dependencies (task_id, depends_on_task_id, dependency_type, lag_days)
                   VALUES (?, ?, 'finish_to_start', 0)`,
                  [taskId, prereqId]
                );
              } catch (_e) { /* ignore duplicate */ }
            }
          }
        }
      }

      await connection.commit();

      res.json({
        success: true,
        message: `Projet créé avec succès avec ${createdTasks} tâches.`,
        data: { projectId }
      });
    } catch (error) {
      await connection.rollback();
      console.error('Erreur confirmProject:', error);
      res.status(500).json({ success: false, message: 'Erreur lors de la création du projet.', error: error.message });
    } finally {
      connection.release();
    }
  }

  static async savePlanning(req, res) {
    try {
      const { projectData } = req.body;
      const manager_id = req.user?.id;

      if (!manager_id) {
        return res.status(401).json({ success: false, message: 'Authentification requise.' });
      }

      if (!projectData || !projectData.projectName) {
        return res.status(400).json({ success: false, message: 'Données de planning invalides.' });
      }

      await db.query(
        'INSERT INTO plannings (project_name, description, simulation_data, manager_id) VALUES (?, ?, ?, ?)',
        [
          projectData.projectName,
          projectData.description || '',
          JSON.stringify(projectData),
          manager_id
        ]
      );

      res.json({ success: true, message: 'Planning enregistré avec succès.' });
    } catch (error) {
      console.error('Erreur savePlanning:', error);
      res.status(500).json({ success: false, message: 'Erreur lors de l\'enregistrement du planning.' });
    }
  }

  static async getPlannings(req, res) {
    try {
      const manager_id = req.user?.id;

      if (!manager_id) {
        return res.status(401).json({ success: false, message: 'Authentification requise.' });
      }

      const plannings = await db.query(
        'SELECT * FROM plannings WHERE manager_id = ? ORDER BY created_at DESC',
        [manager_id]
      );

      res.json({ success: true, data: plannings });
    } catch (error) {
      console.error('Erreur getPlannings:', error);
      res.status(500).json({ success: false, message: 'Erreur lors de la récupération des plannings.' });
    }
  }
}

module.exports = IAController;
