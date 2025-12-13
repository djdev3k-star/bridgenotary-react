# RON Quick Reference

## 🚀 Start Development

```powershell
# Install dependencies (first time only)
npm install

# Start both frontend and backend
npm run start:all

# OR start separately:
npm run dev          # Frontend (port 3000)
npm run server:dev   # Backend (port 5000)
```

## 🔑 Environment Setup

**Edit `.env.development` and add:**

```env
PROOF_API_KEY=your_test_api_key_here
```

Get your API key from: https://app.notarize.proof.com/settings/api

## 📡 API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/ron/start` | Create RON transaction |
| GET | `/api/ron/transaction/:id` | Get transaction status |
| POST | `/api/ron/transaction/:id/documents` | Add documents |
| POST | `/api/ron/webhook` | Receive Proof webhooks |
| GET | `/health` | Backend health check |

## 🧪 Quick Tests

**Health Check:**
```powershell
curl http://localhost:5000/health
```

**Start RON (API):**
```powershell
curl -X POST http://localhost:5000/api/ron/start `
  -H "Content-Type: application/json" `
  -d '{\"signerName\":\"Test User\",\"signerEmail\":\"test@example.com\"}'
```

**Start RON (Browser):**
1. Go to http://localhost:3000/ron
2. Click "Start RON Session"
3. Fill form and submit

## 📁 Key Files

| File | Purpose |
|------|---------|
| `server/index.js` | Express server |
| `server/api/ron.js` | RON endpoints |
| `server/services/proofService.js` | Proof API |
| `src/services/ronService.ts` | Frontend service |
| `src/features/ron/components/StartRONModal.tsx` | RON modal |
| `.env.development` | Environment config |

## 🔧 Troubleshooting

**Backend won't start:**
```powershell
# Check if port is in use
netstat -ano | findstr :5000

# Verify Node.js version
node --version  # Should be 18+
```

**Frontend API calls fail:**
```powershell
# Ensure backend is running
curl http://localhost:5000/health

# Check Vite config has proxy
# vite.config.ts should have:
# server: { proxy: { '/api': 'http://localhost:5000' } }
```

**Proof API errors:**
- Check `PROOF_API_KEY` is correct
- Verify using test environment URL
- Check backend logs for Proof error messages

## 📚 Documentation

- **Getting Started:** `docs/RON-GETTING-STARTED.md`
- **Backend API:** `server/README.md`
- **Implementation Summary:** `docs/RON-IMPLEMENTATION-SUMMARY.md`

## 🎯 URLs

| Service | URL |
|---------|-----|
| Frontend | http://localhost:3000 |
| Backend | http://localhost:5000 |
| RON Page | http://localhost:3000/ron |
| Health Check | http://localhost:5000/health |
| Proof Test | https://app-fairfax.notarize.proof.com |
| Proof Prod | https://app.notarize.proof.com |

## 📦 NPM Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start frontend (Vite) |
| `npm run server` | Start backend (production) |
| `npm run server:dev` | Start backend (dev mode) |
| `npm run start:all` | Start both servers |
| `npm run build` | Build frontend |

## 🔐 Security Notes

- ✅ API keys only in backend
- ✅ CORS configured
- ✅ Input validation
- ⚠️ TODO: Webhook signature verification
- ⚠️ TODO: Rate limiting
- ⚠️ TODO: HTTPS in production

## 🎉 Quick Win

Get up and running in 3 steps:

```powershell
# 1. Install
npm install

# 2. Configure (add your Proof API key)
# Edit .env.development

# 3. Run
npm run start:all
```

Then open http://localhost:3000/ron and click "Start RON Session"!
