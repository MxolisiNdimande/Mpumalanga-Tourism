// server/index.js
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

import db from './db.js';
import path from 'path';

// ROUTES
import authRoutes from './routes/auth.routes.js';
import destinationsRoutes from './routes/destinations.routes.js';
import accommodationsRoutes from './routes/accommodations.routes.js';
import flightsRoutes from './routes/flights.routes.js';
import animalSightingsRoutes from './routes/animalSightings.routes.js';
import analyticsRoutes from './routes/analytics.routes.js';
import campaignsRoutes from './routes/campaigns.routes.js';
import usersRoutes from './routes/users.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

/* ===================== GLOBAL MIDDLEWARE ===================== */
app.use('/uploads', express.static(path.resolve('server/uploads')));
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

/* ===================== API ROUTES ===================== */
app.use('/api/auth', authRoutes);
app.use('/api/destinations', destinationsRoutes);
app.use('/api/accommodations', accommodationsRoutes);
app.use('/api/flights', flightsRoutes);
app.use('/api/animal-sightings', animalSightingsRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/campaigns', campaignsRoutes);
app.use('/api/users', usersRoutes);

/* ===================== HEALTH CHECK ===================== */
app.get('/api/health', async (req, res) => {
  try {
    const connected = await db.testConnection();
    res.json({
      status: 'OK',
      service: 'Gateway Discoveries API',
      database: connected ? 'connected' : 'disconnected',
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    res.status(500).json({
      status: 'ERROR',
      error: err.message
    });
  }
});

/* ===================== 404 HANDLER ===================== */
app.use('/api/*', (req, res) => {
  res.status(404).json({
    error: 'API route not found',
    path: req.originalUrl
  });
});

/* ===================== GLOBAL ERROR HANDLER ===================== */
app.use((err, req, res, next) => {
  console.error('🔥 Server Error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message:
      process.env.NODE_ENV === 'development'
        ? err.message
        : 'Something went wrong'
  });
});

/* ===================== START SERVER ===================== */
const server = app.listen(PORT, async () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📦 Environment: ${process.env.NODE_ENV || 'development'}`);

  const connected = await db.testConnection();
  console.log(`🗄️  Database: ${connected ? 'CONNECTED' : 'NOT CONNECTED'}`);

  console.log('📡 Active API Routes:');
  console.log('   /api/auth');
  console.log('   /api/destinations');
  console.log('   /api/accommodations');
  console.log('   /api/flights');
  console.log('   /api/animal-sightings');
  console.log('   /api/analytics');
  console.log('   /api/campaigns');
  console.log('   /api/users');
});

/* ===================== GRACEFUL SHUTDOWN ===================== */
const shutdown = async (signal) => {
  console.log(`\n🛑 Received ${signal}. Shutting down...`);
  server.close(() => {
    console.log('✅ Server closed');
    process.exit(0);
  });

  setTimeout(() => {
    console.warn('⚠️ Force shutdown');
    process.exit(1);
  }, 5000).unref();
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
