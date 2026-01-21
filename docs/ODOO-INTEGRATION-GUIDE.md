# Odoo Forms Integration - Setup Guide

This guide walks through setting up the Bridge Notary request forms to integrate with Odoo CRM.

## Architecture Overview

```
Frontend Forms → Netlify Function → Odoo API → CRM Lead Created
```

**Components**:
1. **Frontend Forms** (`src/components/forms/*.tsx`) - User-facing form components
2. **Form Submission Service** (`src/services/formSubmissionService.ts`) - Client-side submission handler
3. **Netlify Function** (`netlify/functions/odoo-form-submit.cjs`) - Server-side proxy to Odoo API
4. **Odoo CRM** - Lead management system (external)

## Prerequisites

### 1. Odoo Instance
You need access to an Odoo instance with:
- **CRM** module installed
- **API access** enabled
- **Custom fields** created on `crm.lead` model (see below)

### 2. Odoo Custom Fields

In your Odoo instance, add these custom fields to the `crm.lead` model:

| Field Name | Technical Name | Type | Description |
|------------|----------------|------|-------------|
| Service Type | `x_service_type` | Selection | Type of service requested |
| Appointment Date/Time | `x_appointment_datetime` | Datetime | Preferred appointment time |
| Location | `x_location` | Char | Service location/address |
| Consent | `x_consent` | Boolean | Privacy policy consent |
| Form Type | `x_form_type` | Selection | Which form submitted |

**Service Type Options**:
- `notary_general` → "Notary General"
- `loan_signing` → "Loan Signing"
- `apostille` → "Apostille"
- `courier` → "Courier"
- `other` → "Other"

**Form Type Options**:
- `notary` → "Notary Request"
- `courier` → "Courier Request"
- `general-inquiry` → "General Inquiry"

### 3. Odoo API Credentials

1. **Create API User** (or use existing):
   - Navigate to Settings → Users & Companies → Users
   - Create a user with "CRM / User: Own Documents Only" (or higher) permissions
   - Note the email/username

2. **Generate API Key**:
   - In Odoo 14+: User Preferences → Account Security → API Keys
   - Create a new key and save it securely

3. **Get Database Name**:
   - Check your Odoo URL: `https://yourcompany.odoo.com` → database name is usually in URL or settings
   - Or check Settings → About

## Environment Variables Setup

### Development (.env.development)

Create `.env.development` in project root:

```env
# Frontend Configuration
VITE_APP_ENV=development
VITE_API_URL=http://localhost:8888
VITE_PUBLIC_URL=http://localhost:3000

# Feature Flags
VITE_ENABLE_APOSTILLE=true

# Odoo Form Integration (Frontend - used to validate submission)
VITE_ODOO_FORM_TOKEN=dev_secret_token_12345

# Backend Server Configuration
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Odoo Backend Configuration (Server Side - Netlify Functions)
ODOO_URL=https://yourcompany.odoo.com
ODOO_DB=your_database_name
ODOO_USERNAME=api_user@yourcompany.com
ODOO_API_KEY=your_api_key_here
ODOO_FORM_TOKEN=dev_secret_token_12345
```

### Production (.env.production)

Create `.env.production` for deployment:

```env
# Frontend Configuration
VITE_APP_ENV=production
VITE_API_URL=https://bridgenotary.com
VITE_PUBLIC_URL=https://bridgenotary.com

# Feature Flags
VITE_ENABLE_APOSTILLE=true

# Odoo Form Integration
VITE_ODOO_FORM_TOKEN=GENERATE_SECURE_TOKEN_HERE

# Odoo Backend Configuration (Set in Netlify Dashboard)
ODOO_URL=https://yourcompany.odoo.com
ODOO_DB=production_db_name
ODOO_USERNAME=api_user@yourcompany.com
ODOO_API_KEY=production_api_key
ODOO_FORM_TOKEN=GENERATE_SECURE_TOKEN_HERE
```

**Security Note**: `VITE_ODOO_FORM_TOKEN` and `ODOO_FORM_TOKEN` should match. This validates requests from your frontend.

## Netlify Configuration

### Netlify Dashboard Setup

1. Navigate to your site in Netlify Dashboard
2. Go to **Site settings → Environment variables**
3. Add these variables:

```
ODOO_URL=https://yourcompany.odoo.com
ODOO_DB=your_db_name
ODOO_USERNAME=api@yourcompany.com
ODOO_API_KEY=your_secure_api_key
ODOO_FORM_TOKEN=your_secure_token
```

### netlify.toml (Already Configured)

The project's `netlify.toml` should include:

```toml
[build]
  command = "npm run build"
  publish = "dist"
  functions = "netlify/functions"

[functions]
  node_bundler = "esbuild"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

## Local Development Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Install Netlify CLI

```bash
npm install -g netlify-cli
```

### 3. Create .env.development

Use the template above with your Odoo credentials.

### 4. Start Development Server

```bash
# Start both Vite dev server AND Netlify Functions
npm run dev

# This runs: netlify dev
# - Frontend: http://localhost:3000
# - Netlify Functions: http://localhost:8888/.netlify/functions/*
```

### 5. Test Form Submission

1. Navigate to any form page:
   - http://localhost:3000/notary-request
   - http://localhost:3000/courier-request
   - http://localhost:3000/general-inquiry

2. Fill out and submit the form

3. Check browser console for submission logs

4. Verify lead created in Odoo CRM

## Testing Checklist

- [ ] Forms render without errors
- [ ] Form validation works (required fields)
- [ ] Submission shows loading state
- [ ] Success message displays on successful submission
- [ ] Error message displays on failure
- [ ] Lead appears in Odoo CRM with correct data
- [ ] Custom fields populated correctly
- [ ] Phone number formatted properly
- [ ] Email validation works
- [ ] Consent checkbox required

## Troubleshooting

### "Server configuration error"

**Cause**: Missing or incorrect environment variables

**Fix**:
1. Check `.env.development` exists and has all required variables
2. Restart Netlify dev server: `Ctrl+C` then `npm run dev`
3. Verify variable names match exactly (case-sensitive)

### "Invalid token"

**Cause**: Mismatch between frontend and backend tokens

**Fix**:
1. Ensure `VITE_ODOO_FORM_TOKEN` === `ODOO_FORM_TOKEN`
2. Clear browser cache
3. Restart dev server

### "Authentication failed"

**Cause**: Incorrect Odoo credentials

**Fix**:
1. Verify `ODOO_USERNAME` and `ODOO_API_KEY` are correct
2. Check API key hasn't expired (regenerate if needed)
3. Ensure user has CRM access permissions
4. Test credentials directly in Odoo

### "Lead creation failed"

**Cause**: Missing custom fields in Odoo or permission issues

**Fix**:
1. Verify all custom fields exist on `crm.lead` model
2. Check technical names match exactly
3. Ensure API user has create permission on leads
4. Check Odoo server logs for detailed error

### Forms not submitting

**Cause**: Netlify function not running or network error

**Fix**:
1. Ensure `netlify dev` is running (not just `vite`)
2. Check browser Network tab for failed requests
3. Verify function URL: `http://localhost:8888/.netlify/functions/odoo-form-submit`
4. Check Netlify function logs in terminal

## Deployment

### Netlify Deployment

1. **Push to GitHub**:
   ```bash
   git push origin feature/odoo-forms-integration
   ```

2. **Set Environment Variables** in Netlify Dashboard (see above)

3. **Deploy**:
   - Netlify will auto-deploy on push (if configured)
   - Or manually trigger deploy in dashboard

4. **Verify**:
   - Test forms on production URL
   - Check Odoo for new leads
   - Monitor Netlify function logs

### Manual Deployment

```bash
# Build production bundle
npm run build

# Deploy to Netlify
netlify deploy --prod
```

## Security Best Practices

1. **Never commit** `.env` files to git
2. **Rotate tokens** regularly (every 90 days)
3. **Use different tokens** for dev/prod
4. **Limit API user permissions** to minimum required
5. **Monitor function logs** for suspicious activity
6. **Enable CORS** only for your domain in production

## API Reference

### Odoo Lead Mapping

| Frontend Field | Odoo Field | Type | Notes |
|----------------|------------|------|-------|
| `full_name` | `partner_name` | string | Contact name |
| `email` | `email_from` | string | Contact email |
| `phone` | `phone` | string | Contact phone |
| `service_type` | `x_service_type` | selection | Custom field |
| `notes` | `description` | text | Lead notes |
| `consent` | `x_consent` | boolean | Custom field |
| `appointment_datetime` | `x_appointment_datetime` | datetime | Custom field |
| `location` | `x_location` | char | Custom field |
| `form_type` | `x_form_type` | selection | Custom field |
| (auto) | `name` | string | Lead title (generated) |
| (auto) | `type` | selection | Set to 'opportunity' |
| (auto) | `source_id` | many2one | Set to 'Website' |

### Function Response Format

**Success**:
```json
{
  "success": true,
  "message": "Form submitted successfully",
  "lead_id": 123
}
```

**Error**:
```json
{
  "success": false,
  "error": "Error description"
}
```

## Support

For issues or questions:
- Check Odoo docs: https://www.odoo.com/documentation
- Netlify Functions: https://docs.netlify.com/functions/overview/
- Project Issues: https://github.com/djdev3k-star/bridgenotary-react/issues
