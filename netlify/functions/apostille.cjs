// Netlify Function: apostille.js
// Handles apostille service requests with SendGrid email service

const sgMail = require('@sendgrid/mail');

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'contact@bridgenotary.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@bridgenotary.com';

/**
 * Send email via SendGrid
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
    const { 
      name, 
      email, 
      documentTypes = [],
      destinationCountry,
      comments
    } = JSON.parse(event.body || '{}');

    // Validation
    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Validation failed',
          message: 'Name and email are required',
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
    console.log('📄 Apostille request:', {
      name,
      email,
      documentTypes,
      destinationCountry,
      timestamp,
    });

    // Format document types list
    const documentsList = documentTypes.length > 0 ? documentTypes.join(', ') : 'Not specified';

    // Email to admin
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #192252;">New Apostille Service Request</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Document Types:</strong> ${documentsList}</p>
          ${destinationCountry ? `<p><strong>Destination Country:</strong> ${destinationCountry}</p>` : ''}
          <p><strong>Timestamp:</strong> ${timestamp}</p>
        </div>
        ${comments ? `
        <div style="border-left: 4px solid #0055E6; padding-left: 20px; margin: 20px 0;">
          <h3 style="color: #192252;">Additional Comments:</h3>
          <p style="white-space: pre-wrap; color: #555;">${comments}</p>
        </div>
        ` : ''}
        <p style="color: #666; font-size: 14px;"><em>Please follow up with this client at ${email} to provide apostille guidance and pricing.</em></p>
      </div>
    `;

    // Email to user (confirmation)
    const userHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #192252;">Your Apostille Request</h2>
        <p>Hi ${name},</p>
        <p>Thank you for choosing Bridge Notary for your apostille needs. We have received your request and will review your documents shortly.</p>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #192252; margin-top: 0;">Your Request Details:</h3>
          <p><strong>Document Types:</strong> ${documentsList}</p>
          ${destinationCountry ? `<p><strong>Destination Country:</strong> ${destinationCountry}</p>` : ''}
        </div>
        <h3 style="color: #192252;">What Happens Next?</h3>
        <ol style="color: #555;">
          <li>Our team will review your document types and destination country requirements</li>
          <li>We'll contact you at this email to confirm details and provide a quote</li>
          <li>Once confirmed, you can submit your documents for apostille processing</li>
          <li>We'll handle the entire apostille process and ship your documents back to you</li>
        </ol>
        <p><strong>Need help right now?</strong> Call us at <strong>(469) 629-8932</strong> for immediate assistance.</p>
        <p>Best regards,<br><strong>Bridge Notary Team</strong></p>
      </div>
    `;

    // Try to send emails (optional - form succeeds regardless)
    let emailSent = false;
    if (process.env.SENDGRID_API_KEY) {
      const [adminResult, userResult] = await Promise.all([
        sendEmail(ADMIN_EMAIL, `New Apostille Request: ${name}`, adminHtml, `${name} requested apostille services for ${documentsList}`),
        sendEmail(email, 'Apostille Request Received - Bridge Notary', userHtml, 'Thank you for your apostille request. We will be in touch shortly.')
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
        message: 'Thank you for your apostille request. We will contact you soon with guidance and pricing.',
        emailSent,
      })
    };
  } catch (error) {
    console.error('Apostille form error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: 'Failed to process apostille request',
      })
    };
  }
};
