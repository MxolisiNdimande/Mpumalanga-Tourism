import express from 'express';
import db from '../db.js';
import { authenticateToken } from '../middleware/auth.js';
import { authorizeRoles } from '../middleware/roles.js';

const router = express.Router();

router.get('/', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  const { rows } = await db.query(`
    SELECT id, name, email, role, status
    FROM users
    ORDER BY created_at DESC
  `);
  res.json(rows);
});

export default router;
