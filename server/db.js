// server/db.js
import dotenv from 'dotenv';
dotenv.config(); // 👈 MUST be first

import pkg from 'pg';
const { Pool } = pkg;

// Prefer DATABASE_URL, fallback to individual vars
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: false // local dev
});

pool.on('connect', () => {
  console.log('✅ PostgreSQL connected');
});

pool.on('error', (err) => {
  console.error('❌ Unexpected PG error:', err);
});

export async function query(text, params) {
  return pool.query(text, params);
}

export async function testConnection() {
  try {
    await pool.query('SELECT 1');
    return true;
  } catch (err) {
    console.error('Postgres connection test failed:', err.message);
    return false;
  }
}

export default {
  pool,
  query,
  testConnection
};
