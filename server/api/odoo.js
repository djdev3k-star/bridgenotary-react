/**
 * Odoo CRM API
 * Handles form submissions to Odoo CRM via local backend (supports Tailscale)
 */

import express from 'express';
import http from 'http';
import https from 'https';
import { URL } from 'url';

const router = express.Router();

/**
 * Authenticate with Odoo and get session
 */
async function authenticateOdoo(odooUrl, db, username, password) {
  // ⚠️ Security check: Warn if using insecure HTTP in production
  if (process.env.NODE_ENV === 'production' && odooUrl.startsWith('http://')) {
    console.warn('⚠️  WARNING: Using insecure HTTP to Odoo in production. Ensure traffic is confined to private network (e.g., Tailscale).');
  }

  return new Promise((resolve, reject) => {
    const authData = JSON.stringify({
      jsonrpc: '2.0',
      method: 'call',
      params: {
        db,
        login: username,
        password,
      },
      id: Date.now(),
    });

    const url = new URL('/web/session/authenticate', odooUrl);
    const protocol = url.protocol === 'https:' ? https : http;

    const options = {
      hostname: url.hostname,
      port: url.port || (url.protocol === 'https:' ? 443 : 80),
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
          console.log('📍 Odoo auth response:', response.result?.uid ? 'Success' : 'Failed');
          
          if (response.error) {
            reject(new Error(`Odoo auth error: ${response.error.message || JSON.stringify(response.error)}`));
          } else if (response.result && response.result.uid) {
            // Extract session ID from cookies
            const cookies = res.headers['set-cookie'] || [];
            const sessionCookie = cookies.find(cookie => cookie.startsWith('session_id='));
            const sessionId = sessionCookie ? sessionCookie.split(';')[0].split('=')[1] : null;
            
            resolve({
              uid: response.result.uid,
              sessionId,
            });
          } else {
            reject(new Error(`Unexpected auth response: ${JSON.stringify(response)}`));
          }
        } catch (error) {
          console.log('Raw auth response:', data);
          reject(new Error(`Failed to parse auth response: ${error.message}`));
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
      port: url.port || (url.protocol === 'https:' ? 443 : 80),
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
          console.log('🔍 Raw Odoo response:', data);
          const response = JSON.parse(data);
          console.log('📍 Odoo lead creation response:', typeof response.result === 'number' ? `Lead ID: ${response.result}` : 'Error');
          
          if (response.error) {
            console.error('❌ Odoo lead creation error details:', JSON.stringify(response.error, null, 2));
            console.error('❌ Error data:', JSON.stringify(response.error.data, null, 2));
            reject(new Error(`Odoo lead error: ${response.error.data?.message || response.error.message || JSON.stringify(response.error)}`));
          } else if (typeof response.result === 'number') {
            resolve(response.result);
          } else {
            console.error('❌ Unexpected lead response:', JSON.stringify(response, null, 2));
            reject(new Error(`Unexpected lead response: ${JSON.stringify(response)}`));
          }
        } catch (error) {
          console.log('❌ Raw lead response (parse failed):', data);
          reject(new Error(`Failed to parse lead response: ${error.message}`));
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
  // Minimal safe payload - only standard Odoo fields
  const leadData = {
    // Required fields
    name: `${formData.service_type || 'Inquiry'} - ${formData.full_name}`,
    type: 'lead', // Changed from 'opportunity' to 'lead'
    
    // Standard optional fields
    contact_name: formData.full_name,
    email_from: formData.email,
    phone: formData.phone,
    description: formData.notes || `Service: ${formData.service_type}\nLocation: ${formData.location || 'N/A'}`,
  };
  
  // Only add these if they're simple values (no custom fields until we verify they exist)
  return leadData;
}

/**
 * POST /api/odoo/form-submit
 * Submit a form to Odoo CRM
 * 
 * Requires: X-Form-Token header or token in body
 */
router.post('/form-submit', async (req, res) => {
  try {
    console.log('🔄 Processing Odoo form submission...');
    
    const formData = req.body;

    // ✅ Validate authentication token
    const expectedToken = process.env.ODOO_FORM_TOKEN;
    const providedToken = req.headers['x-form-token'] || formData.token;

    if (!expectedToken) {
      console.error('❌ Missing ODOO_FORM_TOKEN in environment');
      return res.status(500).json({
        success: false,
        error: 'Server configuration error: Missing form token',
      });
    }

    if (!providedToken || providedToken !== expectedToken) {
      console.error('❌ Invalid or missing form token');
      return res.status(401).json({
        success: false,
        error: 'Unauthorized: Invalid form token',
      });
    }

    // Validate required Odoo environment variables
    const odooUrl = process.env.ODOO_URL;
    const odooDb = process.env.ODOO_DB;
    const odooUsername = process.env.ODOO_USERNAME;
    const odooPassword = process.env.ODOO_API_KEY;

    if (!odooUrl || !odooDb || !odooUsername || !odooPassword) {
      console.error('❌ Missing required Odoo environment variables');
      return res.status(500).json({
        success: false,
        error: 'Server configuration error: Missing Odoo credentials',
      });
    }

    // Authenticate with Odoo
    console.log('🔐 Authenticating with Odoo...');
    const { sessionId } = await authenticateOdoo(odooUrl, odooDb, odooUsername, odooPassword);

    if (!sessionId) {
      throw new Error('Failed to obtain Odoo session');
    }

    // Map and create lead
    console.log('📝 Creating Odoo lead...');
    const leadData = mapFormDataToOdooLead(formData);
    const leadId = await createOdooLead(odooUrl, sessionId, leadData);

    console.log(`✅ Lead created successfully: ${leadId}`);

    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully',
      lead_id: leadId,
    });
  } catch (error) {
    console.error('❌ Form submission error:', error.message);

    return res.status(500).json({
      success: false,
      error: error.message || 'Internal server error',
    });
  }
});

export default router;
