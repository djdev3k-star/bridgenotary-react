# RON Integration - Getting Started Guide

This guide walks you through setting up and testing the complete RON (Remote Online Notarization) integration with Proof.

## Step 1: Install Dependencies

```powershell
npm install
```

## Step 2: Get Your Proof API Key

1. Sign up for a Proof account at https://notarize.proof.com
2. Navigate to Settings → API Keys
3. Create a new API key (use Test/Fairfax environment for development)
4. Copy your API key

## Step 3: Configure Environment

Open `.env.development` and add your Proof API key:

```env
PROOF_API_KEY=your_actual_api_key_here
```

The file should look like this:

```env
VITE_APP_ENV=development
VITE_API_URL=http://localhost:5000
VITE_PUBLIC_URL=http://localhost:3000

# Backend Server Configuration
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Proof API Configuration (Test/Fairfax Environment)
PROOF_API_KEY=sk_test_abc123...  # Replace with your actual key
PROOF_ENVIRONMENT=test
PROOF_BASE_URL=https://api-fairfax.notarize.proof.com
PROOF_WEBHOOK_SECRET=your_webhook_secret_here
```

## Step 4: Start Development Servers

### Option A: Run both servers with one command

```powershell
npm run start:all
```

### Option B: Run servers separately

**Terminal 1 - Frontend:**
```powershell
npm run dev
```

**Terminal 2 - Backend:**
```powershell
npm run server:dev
```

You should see:
```
🚀 Bridge Notary backend running on port 5000
📝 Environment: development
🔗 Proof API: test
✅ Server ready to accept requests
```

## Step 5: Test the Integration

### 1. Check Backend Health

Open your browser or use curl:

```powershell
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

### 2. Test RON Flow in Browser

1. Open http://localhost:3000/ron
2. Click "Start RON Session" button
3. Fill in the modal with test data:
   - Name: `Test User`
   - Email: `test@example.com`
   - Phone: `555-123-4567` (optional)
4. Click "Start RON Session"

**What happens:**
- Frontend calls `/api/ron/start` (proxied to backend at port 5000)
- Backend creates a transaction with Proof API
- Backend returns the signer URL
- Browser redirects to Proof's RON interface
- User completes notarization on Proof's platform

### 3. Monitor Backend Logs

Watch the backend terminal for log output:
```
Received request to start RON
Creating Proof transaction...
Transaction created: txn_abc123
Returning signer URL: https://app-fairfax.notarize.proof.com/...
```

## Step 6: Understanding the Flow

### Architecture Overview

```
┌─────────────┐         ┌─────────────┐         ┌─────────────┐
│   Browser   │         │   Express   │         │  Proof API  │
│  (React)    │─────────│   Backend   │─────────│             │
│  Port 3000  │         │  Port 5000  │         │  Fairfax    │
└─────────────┘         └─────────────┘         └─────────────┘
      │                        │                        │
      │  1. User clicks       │                        │
      │     "Start RON"       │                        │
      │                        │                        │
      │  2. POST /api/ron/start│                       │
      │ ──────────────────────>│                       │
      │                        │ 3. Create Transaction │
      │                        │ ─────────────────────>│
      │                        │                        │
      │                        │ 4. Return signer URL  │
      │                        │ <─────────────────────│
      │  5. Redirect to URL    │                        │
      │ <──────────────────────│                        │
      │                        │                        │
      │  6. Complete RON       │                        │
      │ ──────────────────────────────────────────────>│
```

### Files Involved

**Frontend:**
- `src/pages/ron/index.tsx` - RON page with "Start RON Session" button
- `src/features/ron/components/StartRONModal.tsx` - Modal to collect signer info
- `src/services/ronService.ts` - Service to call backend API

**Backend:**
- `server/index.js` - Express server entry point
- `server/api/ron.js` - RON endpoints
- `server/services/proofService.js` - Proof API integration
- `server/config/env.js` - Environment configuration

## Step 7: Debugging

### Frontend Console

Open browser DevTools (F12) and check:

1. **Network tab:** Look for `POST /api/ron/start` request
2. **Console tab:** Check for any error messages
3. **Response:** Verify the backend returned a `signerUrl`

### Backend Logs

Check the backend terminal for:
- Request received confirmation
- Proof API response
- Any error messages

### Common Issues

**1. "Failed to create RON transaction"**
- Check your `PROOF_API_KEY` is correct
- Verify you're using the test environment URL
- Check backend logs for specific error from Proof API

**2. CORS errors in browser**
- Ensure backend is running on port 5000
- Verify Vite proxy is configured in `vite.config.ts`
- Check `FRONTEND_URL` in `.env.development`

**3. Backend won't start**
- Port 5000 might be in use: `netstat -ano | findstr :5000`
- Check all dependencies are installed: `npm install`
- Verify Node.js version: `node --version` (need 18+)

**4. Modal doesn't open**
- Check browser console for React errors
- Verify `StartRONModal` component is imported correctly
- Check that state management is working

## Step 8: Testing the Complete Flow

### Manual Test Checklist

- [ ] Backend starts without errors
- [ ] Frontend loads at http://localhost:3000
- [ ] Health check returns OK
- [ ] RON page loads correctly
- [ ] "Start RON Session" button appears
- [ ] Clicking button opens modal
- [ ] Modal form validates input
- [ ] Submitting form calls backend
- [ ] Backend creates Proof transaction
- [ ] Browser redirects to Proof URL
- [ ] Can complete notarization on Proof

### API Test with Curl

Test the backend directly:

```powershell
curl -X POST http://localhost:5000/api/ron/start `
  -H "Content-Type: application/json" `
  -d '{\"signerName\":\"Test User\",\"signerEmail\":\"test@example.com\"}'
```

Expected response:
```json
{
  "success": true,
  "transactionId": "txn_...",
  "signerUrl": "https://app-fairfax.notarize.proof.com/transaction/...",
  "message": "RON transaction created successfully"
}
```

## Next Steps

### 1. Implement Webhooks

Proof will send webhooks when transactions complete. Update `server/api/ron.js`:

```javascript
router.post('/webhook', async (req, res) => {
  const event = req.body;
  
  if (event.type === 'transaction.completed') {
    // Store completed transaction
    // Notify user
    // Download documents
  }
  
  res.json({ received: true });
});
```

### 2. Add Document Upload

Allow users to upload documents before starting RON:

```javascript
// After creating transaction
await proofService.addDocuments(transactionId, [
  { name: 'contract.pdf', url: 'https://...' }
]);
```

### 3. Store Transactions

Add a database to store transaction records:
- Transaction ID
- Signer information
- Status
- Completed documents

### 4. User Dashboard

Create a dashboard where users can:
- View transaction history
- Download completed documents
- Track transaction status

### 5. Production Deployment

When ready for production:
1. Update `.env.production` with production API key
2. Change `PROOF_ENVIRONMENT=production`
3. Update `PROOF_BASE_URL` to production URL
4. Configure production webhook URL in Proof dashboard
5. Add SSL/TLS certificates
6. Set up monitoring and logging

## Resources

- **Proof API Docs:** https://docs.notarize.proof.com
- **Proof Dashboard:** https://app.notarize.proof.com
- **Backend README:** See `server/README.md` for detailed API documentation

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review backend logs for error messages
3. Check Proof API status page
4. Consult Proof API documentation
5. Contact Proof support for API-specific issues
