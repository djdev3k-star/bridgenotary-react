/**
 * Environment Configuration
 * Manages environment variables for the Bridge Notary backend
 */

import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const config = {
  // Server configuration
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // Proof API configuration
  proof: {
    apiKey: process.env.PROOF_API_KEY,
    baseUrl: process.env.PROOF_BASE_URL || 'https://api.notarize.proof.com',
    // Test environment URL: https://api-fairfax.notarize.proof.com
    environment: process.env.PROOF_ENVIRONMENT || 'test', // 'test' or 'production'
  },
  
  // Frontend configuration
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
  
  // CORS configuration
  allowedOrigins: [
    'http://localhost:3000',
    'https://bridgenotary.com',
    'https://www.bridgenotary.com',
  ],
  
  // Webhook configuration
  webhookSecret: process.env.PROOF_WEBHOOK_SECRET,
};

// Validate required environment variables
const requiredEnvVars = [
  'PROOF_API_KEY',
];

const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.warn(`⚠️  Warning: Missing environment variables: ${missingVars.join(', ')}`);
  console.warn('Some features may not work correctly.');
}

export default config;
