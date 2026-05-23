/**
 * Script one-shot : crée un compte administrateur
 * Usage : node create-admin.js
 */
require('dotenv').config({ path: './src/../.env' });
const bcrypt = require('bcryptjs');
const db = require('./src/config/database');

const ADMIN = {
  nom: 'Admin',
  prenom: 'Super',
  email: 'admin@sit-erp.com',
  password: 'Admin@2024',
  telephone: '+216 00 000 000',
  role: 'admin'
};

(async () => {
  try {
    // Vérifie si l'email existe déjà
    const existing = await db.query('SELECT id FROM users WHERE email = ?', [ADMIN.email]);
    if (existing.length > 0) {
      console.log(`\n✅ Compte admin déjà existant (id=${existing[0].id})`);
      console.log(`   Email    : ${ADMIN.email}`);
      console.log(`   Password : ${ADMIN.password}\n`);
      process.exit(0);
    }

    const hash = await bcrypt.hash(ADMIN.password, 10);
    const result = await db.query(
      'INSERT INTO users (nom, prenom, email, password, telephone, role, actif) VALUES (?, ?, ?, ?, ?, ?, 1)',
      [ADMIN.nom, ADMIN.prenom, ADMIN.email, hash, ADMIN.telephone, ADMIN.role]
    );

    console.log(`\n✅ Compte admin créé (id=${result.insertId})`);
    console.log(`   Email    : ${ADMIN.email}`);
    console.log(`   Password : ${ADMIN.password}`);
    console.log(`   URL      : http://localhost:4200/admin/login\n`);
    process.exit(0);
  } catch (err) {
    console.error('\n❌ Erreur :', err.message);
    process.exit(1);
  }
})();
