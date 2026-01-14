/**
 * RON API Routes
 * Handles Remote Online Notarization endpoints
 */

import express from 'express';
import proofService from '../services/proofService.js';
import crypto from 'crypto';
import config from '../config/env.js';

const router = express.Router();

/**
 * POST /api/ron/start
 * Create a new RON transaction and return the signer URL
 * 
 * Request body:
 * {
 *   signerName: string (required)
 *   signerEmail: string (required)
 *   signerPhone?: string
 *   transactionName?: string
 * }
 * 
 * Response:
 * {
 *   success: boolean
 *   transactionId: string
 *   signerUrl: string
 *   message: string
 * }
 */
router.post('/start', async (req, res) => {
  try {
    const { signerName, signerEmail, signerPhone, transactionName } = req.body;

    // Validate required fields
    if (!signerName || !signerEmail) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: signerName and signerEmail are required',
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signerEmail)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format',
      });
    }

    // Create transaction with Proof API
    const result = await proofService.createTransaction({
      signerName,
      signerEmail,
      signerPhone,
      transactionName,
      draftSign: true, // Allow document upload
    });

    // Return success response with signer URL
    res.json({
      success: true,
      transactionId: result.transactionId,
      signerUrl: result.signerUrl,
      message: 'RON transaction created successfully',
    });

  } catch (error) {
    console.error('Error in /api/ron/start:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create RON transaction',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

/**
 * GET /api/ron/transaction/:transactionId
 * Get the status of a specific transaction
 */
router.get('/transaction/:transactionId', async (req, res) => {
  try {
    const { transactionId } = req.params;

    if (!transactionId) {
      return res.status(400).json({
        success: false,
        error: 'Transaction ID is required',
      });
    }

    const transaction = await proofService.getTransaction(transactionId);

    res.json({
      success: true,
      transaction,
    });

  } catch (error) {
    console.error('Error fetching transaction:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch transaction',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

/**
 * POST /api/ron/transaction/:transactionId/documents
 * Add documents to an existing transaction
 * 
 * Request body:
 * {
 *   documents: Array<{
 *     name: string
 *     url: string
 *   }>
 * }
 */
router.post('/transaction/:transactionId/documents', async (req, res) => {
  try {
    const { transactionId } = req.params;
    const { documents } = req.body;

    if (!transactionId || !documents || !Array.isArray(documents)) {
      return res.status(400).json({
        success: false,
        error: 'Transaction ID and documents array are required',
      });
    }

    const result = await proofService.addDocuments(transactionId, documents);

    res.json({
      success: true,
      transaction: result,
      message: 'Documents added successfully',
    });

  } catch (error) {
    console.error('Error adding documents:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to add documents',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

/**
 * POST /api/ron/webhook
 * Webhook endpoint for Proof to notify about transaction updates
 * 
 * This endpoint should be configured in your Proof dashboard
 */
router.post('/webhook', async (req, res) => {
  try {
    const signature = req.headers['x-proof-signature'] || req.headers['x-signature'] || req.headers['x-webhook-signature'];
    const secret = config.webhookSecret;
    const rawBody = JSON.stringify(req.body);

    if (!secret) {
      return res.status(500).json({ error: 'Webhook secret not configured' });
    }

    if (!signature) {
      return res.status(401).json({ error: 'Missing webhook signature' });
    }

    // Compute HMAC SHA256 signature
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(rawBody)
      .digest('hex');

    // Use timing-safe comparison to prevent timing attacks
    const signatureBuffer = Buffer.from(signature, 'hex');
    const expectedBuffer = Buffer.from(expectedSignature, 'hex');
    
    if (signatureBuffer.length !== expectedBuffer.length || 
        !crypto.timingSafeEqual(signatureBuffer, expectedBuffer)) {
      return res.status(401).json({ error: 'Invalid webhook signature' });
    }

    const event = req.body;

    // Log the webhook event
    // Optionally replace with a proper logger in production
    // console.log('Received Proof webhook:', {
    //   type: event.type,
    //   transactionId: event.transaction?.id,
    //   timestamp: new Date().toISOString(),
    // });

    // TODO: Handle different event types (transaction.completed, transaction.failed, etc.)
    // TODO: Update your database with transaction status

    // Acknowledge receipt
    res.json({ received: true });

  } catch (error) {
    // console.error('Error processing webhook:', error);
    res.status(500).json({
      error: 'Failed to process webhook',
    });
  }
});

export default router;
