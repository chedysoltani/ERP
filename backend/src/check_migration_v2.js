require('dotenv').config();
const mysql = require('mysql2/promise');

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'project_db',
  port: process.env.DB_PORT || 3306,
};

async function check() {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    console.log('✅ Connexion DB OK\n');

    // 1. planned_hours sur projects
    const [projCols] = await conn.execute(
      "SELECT COLUMN_NAME, DATA_TYPE, COLUMN_DEFAULT FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'projects' AND COLUMN_NAME = 'planned_hours'",
      [dbConfig.database]
    );
    if (projCols.length > 0) {
      console.log('✅ projects.planned_hours existe :', projCols[0]);
    } else {
      console.log('❌ projects.planned_hours MANQUANT');
    }

    // 2. Table daily_time_entries
    const [tblCheck] = await conn.execute(
      "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'daily_time_entries'",
      [dbConfig.database]
    );
    if (tblCheck.length > 0) {
      console.log('✅ Table daily_time_entries existe');
      const [cols] = await conn.execute(
        "SELECT COLUMN_NAME, DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'daily_time_entries' ORDER BY ORDINAL_POSITION",
        [dbConfig.database]
      );
      console.log('   Colonnes :', cols.map(c => `${c.COLUMN_NAME}(${c.DATA_TYPE})`).join(', '));

      const [keys] = await conn.execute(
        "SELECT CONSTRAINT_NAME, CONSTRAINT_TYPE FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'daily_time_entries'",
        [dbConfig.database]
      );
      console.log('   Contraintes :', keys.map(k => `${k.CONSTRAINT_NAME}(${k.CONSTRAINT_TYPE})`).join(', '));
    } else {
      console.log('❌ Table daily_time_entries MANQUANTE');
    }

    // 3. is_blocked sur tasks
    const [taskCols] = await conn.execute(
      "SELECT COLUMN_NAME, DATA_TYPE, COLUMN_DEFAULT FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'tasks' AND COLUMN_NAME = 'is_blocked'",
      [dbConfig.database]
    );
    if (taskCols.length > 0) {
      console.log('✅ tasks.is_blocked existe :', taskCols[0]);
    } else {
      console.log('❌ tasks.is_blocked MANQUANT');
    }

    // 4. Index sur daily_time_entries
    const [idxCheck] = await conn.execute(
      "SELECT INDEX_NAME, COLUMN_NAME FROM INFORMATION_SCHEMA.STATISTICS WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'daily_time_entries' ORDER BY INDEX_NAME",
      [dbConfig.database]
    );
    if (idxCheck.length > 0) {
      console.log('✅ Index sur daily_time_entries :');
      idxCheck.forEach(ix => console.log(`   - ${ix.INDEX_NAME} (${ix.COLUMN_NAME})`));
    } else {
      console.log('⚠️  Aucun index sur daily_time_entries');
    }

    console.log('\n✅ Vérification terminée.');
  } catch (err) {
    console.error('❌ Erreur :', err.message);
  } finally {
    if (conn) await conn.end();
  }
}

check();
