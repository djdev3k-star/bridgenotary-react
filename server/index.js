/**
 * Bridge Notary Backend Server
 * Express server for handling RON integration and other backend services
 */

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import config from './config/env.js';
import ronRoutes from './api/ron.js';
import contactRoutes from './api/contact.js';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (config.allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: config.nodeEnv,
  });
});

// API routes
app.use('/api/ron', ronRoutes);
app.use('/api/contact', contactRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: config.nodeEnv === 'development' ? err.message : undefined,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not found',
    path: req.path,
  });
});

// Start server
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`🚀 Bridge Notary backend running on port ${PORT}`);
  console.log(`📝 Environment: ${config.nodeEnv}`);
  console.log(`🔗 Proof API: ${config.proof.environment}`);
  console.log(`✅ Server ready to accept requests`);
});

export default app;
