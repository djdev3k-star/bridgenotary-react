// Netlify Function: contact.js
// Handles contact form submissions (migrated from Express)

exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" })
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || '{}');

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
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Thank you for your message. We will get back to you soon.',
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
