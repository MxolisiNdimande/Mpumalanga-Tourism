// src/lib/database.js
import pkg from 'pg';
const { Pool } = pkg;
import { config } from 'dotenv';

config();

// PostgreSQL connection
export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Test connection
export const testConnections = async () => {
  try {
    const dbClient = await pool.connect();
    console.log('✅ PostgreSQL connected successfully');
    dbClient.release();
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    return false;
  }
};

// Utility functions
export const query = (text, params) => pool.query(text, params);

// Dummy Redis functions (no-op)
export const cacheGet = async (key) => null;
export const cacheSet = async (key, data, expireSeconds = 3600) => {};
export const cacheDelete = async (key) => {};
export const publishSighting = async (sighting) => {};
export const subscribeToSightings = (callback) => {
  console.warn('Redis not available. subscribeToSightings is disabled.');
  return null;
};
