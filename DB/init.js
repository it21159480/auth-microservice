import pool from './index.js';

async function createTable() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      );
    `);
    console.log('Users table created or already exists.');
  } catch (error) {
    console.error('Error creating table:', error);
  } finally {
    await pool.end();
  }
}

createTable();
