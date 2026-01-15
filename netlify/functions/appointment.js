// Netlify Function: appointment.js
// Handles appointment booking requests with SendGrid email service

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
      phone, 
      documentType, 
      preferredDate, 
      preferredTime, 
      location,
      additionalNotes,
      serviceType 
    } = JSON.parse(event.body || '{}');

    // Validation
    if (!name || !email || !documentType || !preferredDate) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Validation failed',
          message: 'Name, email, document type, and preferred date are required',
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
    console.log('📅 Appointment request:', {
      name,
      email,
      documentType,
      serviceType,
      preferredDate,
      timestamp,
    });

    // Email to admin
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #192252;">New Appointment Request</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Service Type:</strong> ${serviceType || 'Not specified'}</p>
          <p><strong>Document Type:</strong> ${documentType}</p>
          <p><strong>Preferred Date:</strong> ${preferredDate}</p>
          ${preferredTime ? `<p><strong>Preferred Time:</strong> ${preferredTime}</p>` : ''}
          ${location ? `<p><strong>Location:</strong> ${location}</p>` : ''}
          <p><strong>Timestamp:</strong> ${timestamp}</p>
        </div>
        ${additionalNotes ? `
        <div style="border-left: 4px solid #0055E6; padding-left: 20px; margin: 20px 0;">
          <h3 style="color: #192252;">Additional Notes:</h3>
          <p style="white-space: pre-wrap; color: #555;">${additionalNotes}</p>
        </div>
        ` : ''}
        <p style="color: #666; font-size: 14px;"><em>Please contact this client at ${phone || email} to confirm the appointment.</em></p>
      </div>
    `;

    // Email to user (confirmation)
    const userHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #192252;">Appointment Request Received</h2>
        <p>Hi ${name},</p>
        <p>Thank you for requesting an appointment with Bridge Notary. We have received your request and will contact you shortly at <strong>${phone || email}</strong> to confirm your appointment.</p>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #192252; margin-top: 0;">Appointment Details:</h3>
          <p><strong>Service Type:</strong> ${serviceType || 'Not specified'}</p>
          <p><strong>Document Type:</strong> ${documentType}</p>
          <p><strong>Preferred Date:</strong> ${preferredDate}</p>
          ${preferredTime ? `<p><strong>Preferred Time:</strong> ${preferredTime}</p>` : ''}
          ${location ? `<p><strong>Location:</strong> ${location}</p>` : ''}
        </div>
        <p><strong>Need help right away?</strong> Call us at <strong>(469) 629-8932</strong> and we'll be happy to assist you.</p>
        <p>Best regards,<br><strong>Bridge Notary Team</strong></p>
      </div>
    `;

    // Send emails in parallel
    const [adminResult, userResult] = await Promise.all([
      sendEmail(ADMIN_EMAIL, `New Appointment Request: ${name}`, adminHtml, `${name} requested an appointment for ${documentType}`),
      sendEmail(email, 'Appointment Request Received - Bridge Notary', userHtml, 'We received your appointment request and will contact you shortly.')
    ]);

    // Success response
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Thank you for your appointment request. We will contact you soon to confirm.',
        emailSent: adminResult.success && userResult.success,
      })
    };
  } catch (error) {
    console.error('Appointment form error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: 'Failed to process appointment request',
      })
    };
  }
};
