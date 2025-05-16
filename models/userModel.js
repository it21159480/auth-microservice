import pool from '../DB/index.js';

export const findUserByUsername = async (username) => {
  const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
  return result.rows[0];
};

export const createUser = async (username, hashedPassword) => {
  await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hashedPassword]);
};
