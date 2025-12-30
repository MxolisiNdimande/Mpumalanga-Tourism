import express from 'express';
import { query } from '../../src/lib/database.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const {
      page = 1,
      pageSize = 5,
      origin,
      destination,
      airline
    } = req.query;

    const limit = Number(pageSize);
    const offset = (Number(page) - 1) * limit;

    const filters = [];
    const values = [];

    if (origin) {
      values.push(origin);
      filters.push(`origin_code = $${values.length}`);
    }

    if (destination) {
      values.push(destination);
      filters.push(`destination_code = $${values.length}`);
    }

    if (airline && airline !== 'all') {
      values.push(airline);
      filters.push(`airline = $${values.length}`);
    }

    const whereClause =
      filters.length > 0 ? `WHERE ${filters.join(' AND ')}` : '';

    // 🔢 Total count
    const countResult = await query(
      `SELECT COUNT(*) FROM flights ${whereClause}`,
      values
    );
    const total = Number(countResult.rows[0].count);

    // 📄 Paginated data
    values.push(limit, offset);

    const dataResult = await query(
      `
      SELECT *
      FROM flights
      ${whereClause}
      ORDER BY departure_time
      LIMIT $${values.length - 1}
      OFFSET $${values.length}
      `,
      values
    );

    res.json({
      data: dataResult.rows,
      pagination: {
        total,
        page: Number(page),
        pageSize: limit,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (err) {
    console.error('Flights pagination error:', err);
    res.status(500).json({ error: 'Failed to fetch flights' });
  }
});

export default router;
