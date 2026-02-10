import express from 'express';
import db from '../db.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const { rows } = await db.query(
    'SELECT * FROM analytics ORDER BY created_at DESC'
  );
  res.json(rows);
});

export default router;
