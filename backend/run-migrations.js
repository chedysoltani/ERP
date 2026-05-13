const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
require('dotenv').config();

async function runMigrations() {
  const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'project_db',
    port: process.env.DB_PORT || 3306,
    multipleStatements: true
  };

  console.log('🔄 Connecting to database...');
  
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('✅ Connected to database successfully');

    const migrations = [
      'backend/database/create_task_assignments_table.sql',
      'backend/database/create_task_dependencies_table.sql',
      'backend/database/create_task_time_sessions_table.sql'
    ];

    for (const migrationFile of migrations) {
      console.log(`\n📄 Executing: ${migrationFile}`);
      
      const filePath = path.join(__dirname, '..', migrationFile);
      const sql = fs.readFileSync(filePath, 'utf8');
      
      try {
        await connection.query(sql);
        console.log(`✅ ${migrationFile} executed successfully`);
      } catch (error) {
        if (error.code === 'ER_TABLE_EXISTS_ERROR' || error.code === 'ER_DUP_ENTRY') {
          console.log(`⚠️  ${migrationFile} - Table(s) already exist, skipping`);
        } else {
          console.error(`❌ Error executing ${migrationFile}:`, error.message);
          throw error;
        }
      }
    }

    console.log('\n🎉 All migrations completed successfully!');
    
    await connection.end();
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  }
}

runMigrations();
