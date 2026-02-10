import express from 'express';
import db from '../db.js';
import { uploadDestinationImage } from '../middleware/upload.js';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';

const router = express.Router();

/* GET ALL */
router.get('/', async (req, res) => {
  const { rows } = await db.query(
    `SELECT id, name, country, description, image_url AS "imageUrl",
            rating, category
     FROM destinations
     ORDER BY created_at DESC`
  );
  res.json(rows);
});

/* CREATE */
router.post(
  '/',
  authenticateToken,
  authorizeRoles(['admin']),
  uploadDestinationImage.single('image'),
  async (req, res) => {
    const { name, country, category, description } = req.body;

    const imageUrl = req.file
      ? `/uploads/destinations/${req.file.filename}`
      : null;

    const { rows } = await db.query(
      `INSERT INTO destinations (name, country, category, description, image_url)
       VALUES ($1,$2,$3,$4,$5)
       RETURNING *`,
      [name, country, category, description, imageUrl]
    );

    res.status(201).json(rows[0]);
  }
);

/* UPDATE */
router.put(
  '/:id',
  authenticateToken,
  authorizeRoles(['admin']),
  uploadDestinationImage.single('image'),
  async (req, res) => {
    const { id } = req.params;
    const { name, country, category, description } = req.body;

    const imagePart = req.file
      ? `, image_url = '/uploads/destinations/${req.file.filename}'`
      : '';

    const query = `
      UPDATE destinations
      SET name=$1, country=$2, category=$3, description=$4
      ${imagePart}
      WHERE id=$5
      RETURNING *
    `;

    const { rows } = await db.query(query, [
      name,
      country,
      category,
      description,
      id
    ]);

    res.json(rows[0]);
  }
);

/* DELETE */
router.delete('/:id', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
  await db.query('DELETE FROM destinations WHERE id=$1', [req.params.id]);
  res.json({ success: true });
});

export default router;
