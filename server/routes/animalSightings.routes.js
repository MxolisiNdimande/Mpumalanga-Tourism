import express from 'express';
import db from '../db.js';

const router = express.Router();

/**
 * GET /api/animal-sightings
 * Public endpoint (used by kiosk + landing)
 */
router.get('/', async (req, res) => {
  try {
    const result = await db.query(`
      SELECT
        id,
        species,
        location,
        gate,
        image_url,
        status,
        count,
        confidence,
        reported_at
      FROM animal_sightings
      WHERE status IN ('recent', 'active')
      ORDER BY reported_at DESC
      LIMIT 10
    `);

    const sightings = result.rows.map(row => ({
      id: row.id,
      species: row.species,
      location: row.location,
      gate: row.gate,
      image: row.image_url,
      status: row.status,
      count: row.count,
      confidence: row.confidence,
      time: row.reported_at
    }));

    res.json(sightings);
  } catch (err) {
    console.error('❌ Animal sightings SQL error:', err.message);
    res.status(500).json({ error: 'Failed to fetch animal sightings' });
  }
});

export default router;
