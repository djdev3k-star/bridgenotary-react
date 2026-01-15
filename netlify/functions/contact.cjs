// Netlify Function: contact.js
// Handles contact form submissions with SendGrid email service

const sgMail = require('@sendgrid/mail');

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'contact@bridgenotary.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@bridgenotary.com';

/**
 * Send email via SendGrid with fallback
 */
async function sendEmail(to, subject, html, text) {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      console.warn('⚠️ SendGrid API key not configured, skipping email');
      return { success: false, reason: 'email_service_disabled' };
    }

    await sgMail.send({
      to,
      from: FROM_EMAIL,
      subject,
      html,
      text,
    });

    console.log(`✅ Email sent to ${to}`);
    return { success: true };
  } catch (error) {
    console.error('❌ SendGrid error:', error);
    return { success: false, error: error.message };
  }
}

exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" })
    };
  }

  try {
    const { name, email, phone, message } = JSON.parse(event.body || '{}');

    // Validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Validation failed',
          message: 'Name, email, and message are required',
        })
      };
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Validation failed',
          message: 'Invalid email address',
        })
      };
    }

    // Log submission
    const timestamp = new Date().toISOString();
    console.log('📧 Contact form submission:', {
      name,
      email,
      phone,
      messagePreview: message.substring(0, 50) + '...',
      timestamp,
    });

    // Email to admin
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #192252;">New Contact Form Submission</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Timestamp:</strong> ${timestamp}</p>
        </div>
        <div style="border-left: 4px solid #0055E6; padding-left: 20px; margin: 20px 0;">
          <h3 style="color: #192252;">Message:</h3>
          <p style="white-space: pre-wrap; color: #555;">${message}</p>
        </div>
      </div>
    `;

    // Email to user (confirmation)
    const userHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #192252;">Thank You for Contacting Bridge Notary</h2>
        <p>Hi ${name},</p>
        <p>We received your message and will get back to you as soon as possible.</p>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Your message:</strong></p>
          <p style="white-space: pre-wrap; color: #555;">${message}</p>
        </div>
        <p>If you need immediate assistance, feel free to call us at <strong>(469) 629-8932</strong>.</p>
        <p>Best regards,<br><strong>Bridge Notary Team</strong></p>
      </div>
    `;

    // Try to send emails (optional - form succeeds regardless)
    let emailSent = false;
    if (process.env.SENDGRID_API_KEY) {
      const [adminResult, userResult] = await Promise.all([
        sendEmail(ADMIN_EMAIL, `New Contact Form: ${name}`, adminHtml, message),
        sendEmail(email, 'We received your message - Bridge Notary', userHtml, 'Thank you for contacting us.')
      ]);
      emailSent = adminResult.success && userResult.success;
    } else {
      console.log('⚠️ SendGrid not configured - emails will not be sent (setup optional for now)');
    }

    // Success response - form always succeeds
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Thank you for your message. We will get back to you soon.',
        emailSent,
      })
    };
  } catch (error) {
    console.error('Contact form error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: 'Failed to process contact form submission',
      })
    };
  }
};
