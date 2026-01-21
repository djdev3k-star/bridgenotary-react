#!/usr/bin/env node

/**
 * Test Odoo connection with your credentials
 */

const https = require('https');
const http = require('http');

const ODOO_URL = 'http://100.116.83.95:8069';
const ODOO_DB = '1logisticsdb';
const ODOO_USERNAME = '100.116.83.95.stingy495@passinbox.com';
const ODOO_PASSWORD = '7946Apiu$er';

async function testOdooConnection() {
  console.log('🔍 Testing Odoo Connection...');
  console.log(`URL: ${ODOO_URL}`);
  console.log(`DB: ${ODOO_DB}`);
  console.log(`Username: ${ODOO_USERNAME}`);
  console.log('');

  try {
    // Test 1: Basic connectivity
    console.log('1️⃣  Testing basic connectivity...');
    const testUrl = new URL(ODOO_URL);
    const protocol = testUrl.protocol === 'https:' ? https : http;

    await new Promise((resolve, reject) => {
      const req = protocol.request(testUrl, { method: 'GET' }, (res) => {
        console.log(`   ✅ Server responded with status: ${res.statusCode}`);
        resolve();
      });
      req.on('error', reject);
      req.end();
    });

    // Test 2: Authentication
    console.log('\n2️⃣  Testing authentication...');
    const authData = JSON.stringify({
      jsonrpc: '2.0',
      method: 'call',
      params: {
        db: ODOO_DB,
        login: ODOO_USERNAME,
        password: ODOO_PASSWORD,
      },
      id: Date.now(),
    });

    const result = await new Promise((resolve, reject) => {
      const url = new URL('/web/session/authenticate', ODOO_URL);
      const options = {
        hostname: url.hostname,
        port: url.port || (url.protocol === 'https:' ? 443 : 80),
        path: url.pathname + url.search,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(authData),
        },
      };

      const req = protocol.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
          try {
            const response = JSON.parse(data);
            resolve({ status: res.statusCode, data: response });
          } catch (e) {
            resolve({ status: res.statusCode, data: data });
          }
        });
      });

      req.on('error', reject);
      req.write(authData);
      req.end();
    });

    console.log(`   Status: ${result.status}`);
    console.log(`   Response:`, JSON.stringify(result.data, null, 2));

    if (result.status === 200 && result.data.result && result.data.result.uid) {
      console.log(`\n✅ Authentication successful! User ID: ${result.data.result.uid}`);
    } else if (result.data.error) {
      console.log(`\n❌ Authentication failed: ${result.data.error.message || 'Unknown error'}`);
    } else {
      console.log('\n⚠️  Unexpected response');
    }

  } catch (error) {
    console.error('\n❌ Connection test failed:', error.message);
  }
}

testOdooConnection();
