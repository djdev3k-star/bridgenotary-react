// Netlify Function: ron-start.js
// Handles RON session creation (migrated from Express)

const fetch = require('node-fetch');

exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, error: "Method Not Allowed" })
    };
  }

  try {
    const { signerName, signerEmail, signerPhone, transactionName } = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!signerName || !signerEmail) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          error: 'Missing required fields: signerName and signerEmail are required',
        })
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signerEmail)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          error: 'Invalid email format',
        })
      };
    }

    // Call Proof API (replace with your actual implementation)
    // This is a placeholder. You must implement proofService.createTransaction logic here.
    // Example:
    // const result = await proofService.createTransaction({ ... });
    // For now, simulate a successful response:
    const result = {
      transactionId: 'simulated-txid',
      signerUrl: 'https://proof.com/simulated-link',
      message: 'Simulated RON session created.'
    };

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        transactionId: result.transactionId,
        signerUrl: result.signerUrl,
        message: result.message,
      })
    };
  } catch (error) {
    console.error('RON start error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: 'Internal server error',
        message: 'Failed to create RON session',
      })
    };
  }
};
