/**
 * Contact Form API
 * Handles contact form submissions
 */

import express from 'express';

const router = express.Router();

/**
 * POST /api/contact
 * Submit a contact form message
 */
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Validation failed',
        message: 'Name, email, and message are required',
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Validation failed',
        message: 'Invalid email address',
      });
    }

    // TODO: Implement email sending service (SendGrid, AWS SES, etc.)
    // For now, just log the contact form submission
    console.log('📧 Contact form submission:', {
      name,
      email,
      messagePreview: message.substring(0, 50) + '...',
      timestamp: new Date().toISOString(),
    });

    // TODO: Send email notification to Bridge Notary admin
    // TODO: Send confirmation email to the user
    // TODO: Store submission in database

    // Success response
    res.status(200).json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon.',
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to process contact form submission',
    });
  }
});

export default router;
