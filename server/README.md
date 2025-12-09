# Bridge Notary - RON Backend Setup

This guide will help you set up the backend infrastructure for Remote Online Notarization (RON) integration with Proof.

## Prerequisites

- Node.js 18+ installed
- Proof API account and API key
- Access to Proof's test (Fairfax) or production environment

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install:
- `express` - Web server framework
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variable management
- `nodemon` - Development auto-restart (dev dependency)
- `concurrently` - Run multiple npm scripts (dev dependency)

### 2. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.development
```

Edit `.env.development` and add your Proof API credentials:

```env
# Proof API Configuration
PROOF_API_KEY=your_actual_api_key_here
PROOF_ENVIRONMENT=test
PROOF_BASE_URL=https://api-fairfax.notarize.proof.com
PROOF_WEBHOOK_SECRET=your_webhook_secret_here
```

**Important:** 
- Get your API key from: https://app.notarize.proof.com/settings/api
- Start with `test` environment using the Fairfax URL
- Switch to production only when ready for live transactions

### 3. Start the Backend Server

Run the backend server in development mode:

```bash
npm run server:dev
```

Or run both frontend and backend simultaneously:

```bash
npm run start:all
```

The backend will be available at `http://localhost:5000`

## Project Structure

```
server/
├── index.js              # Main Express server
├── config/
│   └── env.js           # Environment configuration
├── services/
│   └── proofService.js  # Proof API integration
└── api/
    └── ron.js           # RON endpoints
```

## API Endpoints

### POST /api/ron/start

Create a new RON transaction and return the signer URL.

**Request:**
```json
{
  "signerName": "John Doe",
  "signerEmail": "john@example.com",
  "signerPhone": "(555) 123-4567",
  "transactionName": "RON Transaction - John Doe"
}
```

**Response:**
```json
{
  "success": true,
  "transactionId": "txn_abc123",
  "signerUrl": "https://app.notarize.proof.com/transaction/abc123",
  "message": "RON transaction created successfully"
}
```

### GET /api/ron/transaction/:transactionId

Get the status of a specific transaction.

**Response:**
```json
{
  "success": true,
  "transaction": {
    "id": "txn_abc123",
    "status": "pending",
    "participants": [...],
    ...
  }
}
```

### POST /api/ron/transaction/:transactionId/documents

Add documents to an existing transaction.

**Request:**
```json
{
  "documents": [
    {
      "name": "contract.pdf",
      "url": "https://example.com/documents/contract.pdf"
    }
  ]
}
```

### POST /api/ron/webhook

Webhook endpoint for Proof to notify about transaction updates.

Configure this URL in your Proof dashboard:
- Development: `http://localhost:5000/api/ron/webhook`
- Production: `https://api.bridgenotary.com/api/ron/webhook`

## Frontend Integration

The frontend automatically connects to the backend through the Vite proxy configured in `vite.config.ts`:

```typescript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      changeOrigin: true,
    }
  }
}
```

### Using the RON Service

```typescript
import ronService from '@/services/ronService';

// Start a RON session
const response = await ronService.startRON({
  signerName: 'John Doe',
  signerEmail: 'john@example.com',
  signerPhone: '555-123-4567',
});

// Redirect to Proof's signer URL
window.location.href = response.signerUrl;
```

## Development Workflow

1. **Start both servers:**
   ```bash
   npm run start:all
   ```

2. **Frontend:** http://localhost:3000
3. **Backend:** http://localhost:5000
4. **API calls:** `/api/*` routes automatically proxy to backend

## Testing

### Test the Backend Health

```bash
curl http://localhost:5000/health
```

Expected response:
```json
{
  "status": "ok",
  "timestamp": "2025-12-08T...",
  "environment": "development"
}
```

### Test RON Transaction Creation

```bash
curl -X POST http://localhost:5000/api/ron/start \
  -H "Content-Type: application/json" \
  -d '{
    "signerName": "Test User",
    "signerEmail": "test@example.com"
  }'
```

## Production Deployment

### 1. Update Environment Variables

Create `.env.production`:

```env
NODE_ENV=production
PORT=5000
FRONTEND_URL=https://bridgenotary.com

# Switch to production Proof API
PROOF_API_KEY=your_production_api_key
PROOF_ENVIRONMENT=production
PROOF_BASE_URL=https://api.notarize.proof.com
PROOF_WEBHOOK_SECRET=your_production_webhook_secret
```

### 2. Build and Start

```bash
# Build frontend
npm run build

# Start backend
NODE_ENV=production npm run server
```

### 3. Configure Webhooks

In your Proof dashboard, configure the webhook URL:
- URL: `https://api.bridgenotary.com/api/ron/webhook`
- Events: Select transaction events you want to receive

## Security Best Practices

1. **Never expose API keys in frontend code** - Always use backend endpoints
2. **Use HTTPS in production** - Configure SSL/TLS certificates
3. **Validate webhook signatures** - Implement signature verification in the webhook handler
4. **Rate limiting** - Add rate limiting middleware to prevent abuse
5. **Input validation** - Validate all user inputs before processing

## Troubleshooting

### Backend won't start

- Check that port 5000 is not in use: `netstat -ano | findstr :5000` (Windows) or `lsof -i :5000` (Mac/Linux)
- Verify all environment variables are set correctly
- Check Node.js version: `node --version` (should be 18+)

### API calls failing

- Ensure backend is running: `curl http://localhost:5000/health`
- Check browser console for CORS errors
- Verify Vite proxy configuration in `vite.config.ts`
- Check that `VITE_API_URL` environment variable is set

### Proof API errors

- Verify API key is correct and active
- Check you're using the right environment (test vs production)
- Review Proof API documentation for endpoint changes
- Check API rate limits haven't been exceeded

## Support

For issues related to:
- **Proof API:** Contact Proof support or check their documentation
- **Bridge Notary backend:** Review the code in `server/` directory
- **Frontend integration:** Check `src/services/ronService.ts` and RON page components

## Next Steps

1. Test the complete flow in development
2. Implement webhook handling for transaction status updates
3. Add database to store transaction records
4. Implement document upload functionality
5. Add user authentication and session management
6. Deploy to production environment
