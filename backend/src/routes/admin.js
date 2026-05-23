const express = require('express');
const router = express.Router();
const { auth, isAdmin } = require('../middleware/auth');
const User = require('../models/User');
const db = require('../config/database');

// Stats globales
router.get('/stats', auth, isAdmin, async (req, res) => {
  try {
    const totalUsersRows   = await db.query('SELECT COUNT(*) as v FROM users');
    const activeEmpRows    = await db.query("SELECT COUNT(*) as v FROM users WHERE role='employee' AND actif=1");
    const activeMgrRows    = await db.query("SELECT COUNT(*) as v FROM users WHERE role='manager' AND actif=1");
    const totalAdminRows   = await db.query("SELECT COUNT(*) as v FROM users WHERE role='admin'");
    const todayLoginRows   = await db.query("SELECT COUNT(*) as v FROM users WHERE DATE(date_modification)=CURDATE()");
    const inactiveRows     = await db.query("SELECT COUNT(*) as v FROM users WHERE actif=0");

    let attendanceToday = 0;
    try {
      const attRows = await db.query("SELECT COUNT(*) as v FROM attendance WHERE DATE(check_in)=CURDATE()");
      attendanceToday = attRows[0].v;
    } catch (_) {}

    res.json({
      success: true,
      data: {
        totalUsers:      totalUsersRows[0].v,
        activeEmployees: activeEmpRows[0].v,
        activeManagers:  activeMgrRows[0].v,
        totalAdmins:     totalAdminRows[0].v,
        todayLogins:     todayLoginRows[0].v,
        inactiveUsers:   inactiveRows[0].v,
        attendanceToday
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Tous les utilisateurs
router.get('/users', auth, isAdmin, async (req, res) => {
  try {
    const rows = await db.query(
      'SELECT id, nom, prenom, email, telephone, role, actif, date_creation, date_modification FROM users ORDER BY date_creation DESC'
    );
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Créer utilisateur
router.post('/users', auth, isAdmin, async (req, res) => {
  try {
    const { nom, prenom, email, password, telephone, role } = req.body;
    if (!nom || !prenom || !email || !password || !role) {
      return res.status(400).json({ success: false, message: 'Champs obligatoires manquants.' });
    }
    const existing = await User.getByEmail(email);
    if (existing) return res.status(409).json({ success: false, message: 'Email déjà utilisé.' });
    const newId = await User.create({ nom, prenom, email, password, telephone, role });
    res.status(201).json({ success: true, data: { id: newId }, message: 'Utilisateur créé.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Modifier utilisateur
router.put('/users/:id', auth, isAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { nom, prenom, email, telephone, role } = req.body;
    if (!nom || !prenom || !email || !role) {
      return res.status(400).json({ success: false, message: 'Champs obligatoires manquants.' });
    }
    const updated = await User.update(id, { nom, prenom, email, telephone, role });
    if (!updated) return res.status(404).json({ success: false, message: 'Utilisateur non trouvé.' });
    res.json({ success: true, message: 'Utilisateur mis à jour.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Activer/Désactiver utilisateur
router.patch('/users/:id/toggle', auth, isAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const rows = await db.query('SELECT actif FROM users WHERE id=?', [id]);
    if (!rows.length) return res.status(404).json({ success: false, message: 'Utilisateur non trouvé.' });
    const newStatus = rows[0].actif ? 0 : 1;
    await db.query('UPDATE users SET actif=?, date_modification=NOW() WHERE id=?', [newStatus, id]);
    res.json({ success: true, message: newStatus ? 'Compte activé.' : 'Compte désactivé.', actif: newStatus });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Réinitialiser mot de passe
router.patch('/users/:id/reset-password', auth, isAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { newPassword } = req.body;
    if (!newPassword || newPassword.length < 6) {
      return res.status(400).json({ success: false, message: 'Mot de passe trop court (min 6 caractères).' });
    }
    const bcrypt = require('bcryptjs');
    const hash = await bcrypt.hash(newPassword, 10);
    await db.query('UPDATE users SET password=?, date_modification=NOW() WHERE id=?', [hash, id]);
    res.json({ success: true, message: 'Mot de passe réinitialisé.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Supprimer utilisateur
router.delete('/users/:id', auth, isAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    if (parseInt(id) === req.user.id) {
      return res.status(400).json({ success: false, message: 'Impossible de supprimer votre propre compte.' });
    }
    await db.query('UPDATE users SET actif=0 WHERE id=?', [id]);
    res.json({ success: true, message: 'Utilisateur supprimé.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Logs d'activité récente
router.get('/activity', auth, isAdmin, async (req, res) => {
  try {
    const rows = await db.query(
      `SELECT id, nom, prenom, email, role, actif, date_modification as lastActivity
       FROM users ORDER BY date_modification DESC LIMIT 20`
    );
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Stats par rôle
router.get('/role-stats', auth, isAdmin, async (req, res) => {
  try {
    const rows = await db.query(
      'SELECT role, COUNT(*) as count, SUM(actif) as active FROM users GROUP BY role'
    );
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Croissance utilisateurs (7 derniers jours)
router.get('/growth', auth, isAdmin, async (req, res) => {
  try {
    const rows = await db.query(
      `SELECT DATE(date_creation) as day, COUNT(*) as count
       FROM users WHERE date_creation >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)
       GROUP BY DATE(date_creation) ORDER BY day ASC`
    );
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
