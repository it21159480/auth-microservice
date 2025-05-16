import pool from './index.js';

async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('PostgreSQL connected:', res.rows[0]);
  } catch (error) {
    console.error('Connection error:', error);
  } finally {
    await pool.end();
  }
}

testConnection();
