/**
 * Netlify Function: Odoo Form Submit Proxy
 * Proxies form submissions to Odoo CRM and creates leads
 * 
 * Environment Variables Required:
 * - ODOO_URL: Base URL of Odoo instance (e.g., https://yourcompany.odoo.com)
 * - ODOO_DB: Odoo database name
 * - ODOO_USERNAME: Odoo user email/username
 * - ODOO_API_KEY: Odoo API key (or password)
 * - ODOO_FORM_TOKEN: Secret token for validating frontend requests
 */

const https = require('https');
const http = require('http');

/**
 * Authenticate with Odoo and get session
 */
async function authenticateOdoo(odooUrl, db, username, apiKey) {
  return new Promise((resolve, reject) => {
    const authData = JSON.stringify({
      jsonrpc: '2.0',
      method: 'call',
      params: {
        db,
        login: username,
        password: apiKey,
      },
      id: Date.now(),
    });

    const url = new URL('/web/session/authenticate', odooUrl);
    const protocol = url.protocol === 'https:' ? https : http;

    const options = {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(authData),
      },
    };

    const req = protocol.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.error) {
            reject(new Error(response.error.message || 'Authentication failed'));
          } else {
            // Extract session ID from set-cookie header
            const cookies = res.headers['set-cookie'] || [];
            const sessionCookie = cookies.find(cookie => cookie.startsWith('session_id='));
            const sessionId = sessionCookie ? sessionCookie.split(';')[0].split('=')[1] : null;
            
            resolve({
              uid: response.result?.uid,
              sessionId,
            });
          }
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', reject);
    req.write(authData);
    req.end();
  });
}

/**
 * Create a CRM lead in Odoo
 */
async function createOdooLead(odooUrl, sessionId, leadData) {
  return new Promise((resolve, reject) => {
    const requestData = JSON.stringify({
      jsonrpc: '2.0',
      method: 'call',
      params: {
        model: 'crm.lead',
        method: 'create',
        args: [leadData],
        kwargs: {},
      },
      id: Date.now(),
    });

    const url = new URL('/web/dataset/call_kw/crm.lead/create', odooUrl);
    const protocol = url.protocol === 'https:' ? https : http;

    const options = {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(requestData),
        'Cookie': `session_id=${sessionId}`,
      },
    };

    const req = protocol.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.error) {
            reject(new Error(response.error.message || 'Lead creation failed'));
          } else {
            resolve(response.result);
          }
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', reject);
    req.write(requestData);
    req.end();
  });
}

/**
 * Map frontend form data to Odoo CRM lead fields
 */
function mapFormDataToOdooLead(formData) {
  return {
    // Standard CRM lead fields
    name: `${formData.service_type} - ${formData.full_name}`, // Lead title
    partner_name: formData.full_name,
    email_from: formData.email,
    phone: formData.phone,
    description: formData.notes || '',
    
    // Custom fields (ensure these exist in your Odoo instance)
    x_service_type: formData.service_type,
    x_appointment_datetime: formData.appointment_datetime || false,
    x_location: formData.location || '',
    x_consent: formData.consent || false,
    x_form_type: formData.form_type || 'general-inquiry',
    
    // Lead source and type
    type: 'opportunity',
    source_id: 1, // Adjust based on your Odoo source configuration (Website)
    
    // Auto-assign or leave unassigned
    // user_id: false, // Unassigned
  };
}

/**
 * Netlify Function Handler
 */
exports.handler = async (event) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse request body
    const formData = JSON.parse(event.body);

    // Validate token
    const token = formData.token || event.headers['x-form-token'];
    const expectedToken = process.env.ODOO_FORM_TOKEN;

    if (!expectedToken) {
      console.error('ODOO_FORM_TOKEN not configured');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Server configuration error',
        }),
      };
    }

    if (token !== expectedToken) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Invalid token',
        }),
      };
    }

    // Validate required Odoo environment variables
    const odooUrl = process.env.ODOO_URL;
    const odooDb = process.env.ODOO_DB;
    const odooUsername = process.env.ODOO_USERNAME;
    const odooApiKey = process.env.ODOO_API_KEY;

    if (!odooUrl || !odooDb || !odooUsername || !odooApiKey) {
      console.error('Missing required Odoo environment variables');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Server configuration error',
        }),
      };
    }

    // Authenticate with Odoo
    console.log('Authenticating with Odoo...');
    const { sessionId } = await authenticateOdoo(odooUrl, odooDb, odooUsername, odooApiKey);

    if (!sessionId) {
      throw new Error('Failed to obtain Odoo session');
    }

    // Map and create lead
    console.log('Creating Odoo lead...');
    const leadData = mapFormDataToOdooLead(formData);
    const leadId = await createOdooLead(odooUrl, sessionId, leadData);

    console.log(`Lead created successfully: ${leadId}`);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Form submitted successfully',
        lead_id: leadId,
      }),
    };
  } catch (error) {
    console.error('Form submission error:', error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: error.message || 'Internal server error',
      }),
    };
  }
};
