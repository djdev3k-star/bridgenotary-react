# Code Documentation - Bridge Notary React

## Overview

This document provides detailed function and API documentation for the Bridge Notary React application, including backend services, form handling, and Odoo CRM integration.

---

## Backend API Functions

### File: `server/api/odoo.js`

#### `authenticateOdoo(odooUrl, db, username, password)`

**Purpose:** Authenticate with Odoo and obtain a session ID for subsequent API calls.

**Parameters:**
- `odooUrl` (string): Base URL of the Odoo instance (e.g., `https://your-odoo-instance.com`)
- `db` (string): Odoo database name (e.g., `your_database_name`)
- `username` (string): Odoo user login (usually email format)
- `password` (string): Odoo user password or API key

**Returns:** 
```javascript
Promise<{
  uid: number,           // User ID returned by Odoo
  sessionId: string      // Session cookie for authenticated requests
}>
```

**Security Notes:**
- ⚠️ Warns in production if using HTTP (should be confined to private network like Tailscale)
- Password is sent via POST to Odoo's `/web/session/authenticate` endpoint
- Session ID is extracted from response cookies

**Example:**
```javascript
const { uid, sessionId } = await authenticateOdoo(
  'https://your-odoo-instance.com',
  'your_database_name',
  'user@example.com',
  'password123'
);
console.log(`Authenticated as user ${uid}`);
```

---

#### `createOdooLead(odooUrl, sessionId, leadData)`

**Purpose:** Create a new CRM lead in Odoo with form submission data.

**Parameters:**
- `odooUrl` (string): Base URL of Odoo instance
- `sessionId` (string): Session ID from `authenticateOdoo()`
- `leadData` (object): Lead information structured for Odoo CRM

**Lead Data Structure:**
```javascript
{
  name: string,                    // Lead title
  partner_name: string,            // Full name
  email_from: string,              // Email address
  phone: string,                   // Phone number
  description: string,             // Notes/additional info
  type: string,                    // "opportunity" or "lead"
  source_id: number,               // Lead source ID
  x_service_type: string,          // Custom field: service type
  x_appointment_datetime: string,  // Custom field: appointment date
  x_location: string,              // Custom field: service location
  x_consent: boolean,              // Custom field: consent flag
  x_form_type: string              // Custom field: form type
}
```

**Returns:**
```javascript
Promise<number> // Returns the created lead ID
```

**Example:**
```javascript
const leadId = await createOdooLead(
  'https://your-odoo-instance.com',
  'abc123sessionid',
  {
    name: 'Notary - John Doe',
    partner_name: 'John Doe',
    email_from: 'john@example.com',
    phone: '+14696298932',
    description: 'Needs apostille for international documents',
    type: 'opportunity',
    source_id: 1,
    x_service_type: 'Apostille',
    x_form_type: 'notary-request',
    x_consent: true
  }
);
console.log(`Lead created with ID: ${leadId}`);
```

---

#### `mapFormDataToOdooLead(formData)`

**Purpose:** Transform frontend form data into Odoo CRM lead fields.

**Parameters:**
- `formData` (object): Form submission data from frontend

**Input Structure:**
```javascript
{
  full_name: string,
  email: string,
  phone: string,
  service_type: string,
  notes: string,
  consent: boolean,
  appointment_datetime: string,
  location: string,
  form_type: string
}
```

**Returns:**
```javascript
object // Odoo lead object ready for creation
```

**Example:**
```javascript
const leadData = mapFormDataToOdooLead({
  full_name: 'Jane Smith',
  email: 'jane@example.com',
  phone: '+1-800-NOTARY-1',
  service_type: 'Loan Signing',
  notes: 'Rush order needed',
  consent: true,
  form_type: 'general-inquiry'
});
```

---

#### `router.post('/form-submit', handler)`

**Purpose:** Main API endpoint for form submissions. Receives form data and creates Odoo leads.

**HTTP Method:** POST

**Endpoint:** `/api/odoo/form-submit`

**Request Headers:**
```
Content-Type: application/json
```

**Request Body:**
```javascript
{
  full_name: string,
  email: string,
  phone: string,
  service_type: string,
  notes: string,
  consent: boolean,
  appointment_datetime?: string,
  location?: string,
  form_type: 'notary' | 'courier' | 'general-inquiry'
}
```

**Response (Success - 200):**
```javascript
{
  success: true,
  message: "Form submitted successfully",
  lead_id: number
}
```

**Response (Error - 401):**
```javascript
{
  success: false,
  error: "Invalid token"
}
```

**Response (Error - 500):**
```javascript
{
  success: false,
  error: "Server configuration error" | "Odoo error message"
}
```

**Security:**
- Optional token validation (if `X-Form-Token` header provided)
- CORS headers configured
- Logs all errors for debugging

**Example Request:**
```bash
curl -X POST https://bridgenotary.com/api/odoo/form-submit \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "John Doe",
    "email": "john@example.com",
    "phone": "+1-234-567-8900",
    "service_type": "Apostille",
    "notes": "International document",
    "consent": true,
    "form_type": "notary-request"
  }'
```

---

## Frontend Services

### File: `src/services/formSubmissionService.ts`

#### `submitRequestForm(formData, formType)`

**Purpose:** Submit a form to the Odoo CRM via the backend API.

**Parameters:**
- `formData` (RequestFormData): Form submission data
- `formType` ('notary' | 'courier' | 'general-inquiry'): Type of form submitted

**Returns:**
```typescript
Promise<FormSubmissionResponse> {
  success: boolean,
  message: string,
  lead_id?: number,
  error?: string
}
```

**Behavior:**
- **Development:** Sends to `http://localhost:5000/api/odoo/form-submit`
- **Production (self-hosted):** Sends to `/api/odoo/form-submit` (Nginx proxies to backend)
- **Production (Netlify):** Would send to `/.netlify/functions/odoo-form-submit` (not recommended)

**Example:**
```typescript
const response = await submitRequestForm(
  {
    full_name: 'Alice Johnson',
    email: 'alice@example.com',
    phone: '+1-555-0123',
    service_type: 'Loan Signing',
    notes: 'Same day service',
    consent: true
  },
  'general-inquiry'
);

if (response.success) {
  console.log(`Lead created: ${response.lead_id}`);
} else {
  console.error(`Submission failed: ${response.error}`);
}
```

---

#### `getOdooEndpoint()`

**Purpose:** Determine the correct endpoint based on environment.

**Returns:** `string` - The full API endpoint URL

**Logic:**
```
IF development:
  IF VITE_API_URL set: return `${VITE_API_URL}/api/odoo/form-submit`
  ELSE: return `http://localhost:5000/api/odoo/form-submit`
ELSE (production):
  return `/api/odoo/form-submit`  // Nginx proxies to backend
```

---

## Data Types

### `RequestFormData` Interface

```typescript
interface RequestFormData {
  full_name: string;              // User's full name
  email: string;                  // Email address
  phone: string;                  // Phone number
  service_type: string;           // Service requested
  notes?: string;                 // Additional notes
  consent: boolean;               // Privacy consent
  appointment_datetime?: string;  // Preferred appointment
  location?: string;              // Service location
}
```

### `FormSubmissionResponse` Interface

```typescript
interface FormSubmissionResponse {
  success: boolean;               // Whether submission succeeded
  message: string;                // Human-readable message
  lead_id?: number;               // Odoo lead ID if successful
  error?: string;                 // Error message if failed
}
```

---

## Environment Variables

### Backend (Server)

**Required:**
- `ODOO_URL` - Odoo instance URL (e.g., `https://your-odoo-instance.com`)
- `ODOO_DB` - Database name (e.g., `your_database_name`)
- `ODOO_USERNAME` - Login email (e.g., `user@example.com`)
- `ODOO_API_KEY` - Password or API key
- `ODOO_FORM_TOKEN` - Custom security token

**Optional:**
- `NODE_ENV` - `development` or `production`
- `PORT` - Server port (default: 5000)
- `MOCK_ODOO` - Set to `true` to mock Odoo responses (for testing)

### Frontend

**Development:**
- `VITE_API_URL` - Backend URL (e.g., `http://localhost:5000`)
- `VITE_ENABLE_APOSTILLE` - Enable apostille feature

**Production (Self-hosted):**
- No `VITE_API_URL` needed (uses relative paths)
- `VITE_ENABLE_APOSTILLE` - Feature flag

---

## Error Handling

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| 401 Invalid token | Token validation failed | Check token matches between frontend and backend |
| 500 Server config error | Missing env variables | Verify all ODOO_* env vars are set |
| ECONNREFUSED | Backend not running | Start backend with `docker-compose up` |
| Authentication failed | Wrong Odoo credentials | Verify username/password/database name |
| Lead creation failed | Odoo field validation error | Check custom fields exist in Odoo (x_*) |

### Logging

All requests and errors are logged with timestamps:
```
📍 Odoo auth response: Success
❌ Invalid or missing form token
✅ Lead created with ID: 12345
```

---

## API Flow Diagram

```
1. User submits form
   ↓
2. Frontend calls submitRequestForm()
   ↓
3. Request sent to /api/odoo/form-submit (HTTP POST)
   ↓
4. Backend validates form data
   ↓
5. Backend authenticates with Odoo
   ↓
6. Backend creates lead in Odoo
   ↓
7. Response returned with lead ID
   ↓
8. Frontend displays confirmation
```

---

## Testing

### Local Development

```bash
# Start backend
npm run dev

# Test with curl
curl -X POST http://localhost:5000/api/odoo/form-submit \
  -H "Content-Type: application/json" \
  -d '{"full_name":"Test","email":"test@example.com","phone":"555-1234","service_type":"Test","consent":true,"form_type":"notary-request"}'
```

### Mock Mode

Set `MOCK_ODOO=true` in `.env.development` to test without Odoo:
```bash
# Backend responds with mock data
# No Odoo connection needed for testing UI
```

---

## Future Enhancements

- [ ] Rate limiting on form submissions
- [ ] Email notifications for new leads
- [ ] Lead status tracking
- [ ] Custom field validation rules
- [ ] Webhook support for Odoo events
- [ ] Multi-language support

---

**Last Updated:** January 21, 2026
**Version:** 1.0
