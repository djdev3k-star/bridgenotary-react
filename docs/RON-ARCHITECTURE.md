# RON Integration Architecture

## System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                        Bridge Notary RON System                      │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│                 │         │                 │         │                 │
│   Web Browser   │         │  Express Backend│         │    Proof API    │
│   React + Vite  │◄────────│   Node.js       │◄────────│   (Fairfax/Prod)│
│   Port 3000     │         │   Port 5000     │         │                 │
│                 │         │                 │         │                 │
└────────┬────────┘         └────────┬────────┘         └────────┬────────┘
         │                           │                           │
         │                           │                           │
    User clicks              API Key stored here         Official Proof
  "Start RON Session"     (never sent to frontend)      RON platform
         │                           │                           │
         │                           │                           │
         └───────────┬───────────────┘                           │
                     │                                           │
                     └───────────────────────────────────────────┘
                           User redirected to complete RON
```

## Request Flow

### 1. User Initiates RON

```
User Action: Click "Start RON Session" button
     │
     ├─► Component: src/pages/ron/index.tsx
     │        │
     │        └─► Opens: StartRONModal.tsx
     │                 │
     │                 ├─ Collects: name, email, phone
     │                 └─ Validates: input
     │
     └─► Next: Form submission
```

### 2. Frontend to Backend

```
Modal Form Submit
     │
     ├─► Service: src/services/ronService.ts
     │        │
     │        └─► POST /api/ron/start
     │             │
     │             ├─ Body: { signerName, signerEmail, signerPhone }
     │             └─ Headers: Content-Type: application/json
     │
     └─► Proxy: Vite proxy → http://localhost:5000
```

### 3. Backend Processing

```
Express Server: server/index.js
     │
     ├─► Route: server/api/ron.js
     │        │
     │        ├─ Validates: required fields, email format
     │        └─ Calls: proofService.createTransaction()
     │
     ├─► Service: server/services/proofService.js
     │        │
     │        ├─ Constructs: transaction request body
     │        ├─ Headers: ApiKey, Content-Type
     │        └─ POST: https://api-fairfax.notarize.proof.com/v1/transactions
     │
     └─► Response: Extract signer URL from Proof response
```

### 4. Proof API Integration

```
Proof API: api-fairfax.notarize.proof.com
     │
     ├─► Creates: New transaction
     │        │
     │        ├─ Generates: Unique transaction ID
     │        ├─ Creates: Signer participant record
     │        └─ Returns: Transaction object with signer URL
     │
     └─► Backend: Extracts URL from response
```

### 5. Response Chain

```
Backend → Frontend → Browser
     │         │          │
     │         │          └─► window.location.href = signerUrl
     │         │
     │         └─► Returns: { success, transactionId, signerUrl }
     │
     └─► Logs: Transaction created successfully
```

### 6. User Completes RON

```
Proof Platform (External)
     │
     ├─► User: Verifies identity
     ├─► User: Reviews documents
     ├─► Notary: Joins session
     ├─► All: Complete notarization
     │
     └─► Webhook: POST /api/ron/webhook (transaction.completed)
```

## Data Flow Diagram

```
┌──────────────────────────────────────────────────────────────────────┐
│                         Data Flow Sequence                            │
└──────────────────────────────────────────────────────────────────────┘

Step 1: User Input
┌─────────────┐
│ Modal Form  │ { name: "John", email: "john@example.com" }
└──────┬──────┘
       │
       v
Step 2: Frontend Service Call
┌─────────────┐
│ ronService  │ POST /api/ron/start
└──────┬──────┘
       │
       v
Step 3: Backend Route Handler
┌─────────────┐
│ ron.js      │ Validate + Call proofService
└──────┬──────┘
       │
       v
Step 4: Proof API Service
┌─────────────┐
│proofService │ POST https://api-fairfax.notarize.proof.com/v1/transactions
└──────┬──────┘      Headers: { ApiKey: sk_test_..., Content-Type: application/json }
       │             Body: { name, draft_sign: true, participants: [...] }
       │
       v
Step 5: Proof Response
┌─────────────┐
│ Proof API   │ { id: "txn_123", participants: [{ url: "https://..." }], ... }
└──────┬──────┘
       │
       v
Step 6: Extract Signer URL
┌─────────────┐
│proofService │ Extract: transaction.participants[0].url
└──────┬──────┘
       │
       v
Step 7: Return to Frontend
┌─────────────┐
│ ron.js      │ { success: true, transactionId: "txn_123", signerUrl: "https://..." }
└──────┬──────┘
       │
       v
Step 8: Redirect User
┌─────────────┐
│ Modal       │ window.location.href = signerUrl
└──────┬──────┘
       │
       v
Step 9: User on Proof Platform
┌─────────────┐
│ Proof UI    │ Complete RON session
└─────────────┘
```

## Component Structure

```
src/
├── pages/
│   └── ron/
│       └── index.tsx ───────────┐
│                                │ Uses
├── features/                    │
│   └── ron/                     │
│       └── components/          │
│           ├── index.ts         │
│           ├── StartRONModal.tsx◄──┘
│           ├── FeatureCard.tsx
│           └── ...
│
└── services/
    └── ronService.ts ───────────┐
                                 │ Calls Backend
server/                          │
├── index.js ◄───────────────────┘
├── api/
│   └── ron.js ──────────────────┐
│                                │ Uses
├── services/                    │
│   └── proofService.js ◄────────┘
│
└── config/
    └── env.js
```

## Environment Configuration Flow

```
.env.development
     │
     ├─► Backend (server/config/env.js)
     │        │
     │        ├─ PROOF_API_KEY
     │        ├─ PROOF_ENVIRONMENT
     │        ├─ PROOF_BASE_URL
     │        └─ PORT, NODE_ENV
     │
     └─► Frontend (import.meta.env)
              │
              └─ VITE_API_URL (for service calls)
```

## Security Model

```
┌────────────────────────────────────────────────────────────────────┐
│                     Security Architecture                           │
└────────────────────────────────────────────────────────────────────┘

Frontend (React)
┌───────────────────────┐
│  NO API KEYS STORED   │ ← Only calls own backend
│  NO DIRECT PROOF API  │   via /api/* endpoints
└───────┬───────────────┘
        │
        │ HTTPS (production)
        │ Vite Proxy (dev)
        v
Backend (Express)
┌───────────────────────┐
│  API KEYS HERE ONLY   │ ← Protected environment
│  ✓ PROOF_API_KEY      │   Server-side only
│  ✓ Input Validation   │   Never exposed to browser
│  ✓ CORS Protection    │
└───────┬───────────────┘
        │
        │ HTTPS
        │ ApiKey Header
        v
Proof API
┌───────────────────────┐
│  Official RON API     │
│  ✓ Authentication     │
│  ✓ Secure Sessions    │
│  ✓ Compliance Ready   │
└───────────────────────┘
```

## State Management

```
Component State (useState)
     │
     ├─► isModalOpen: boolean
     │        │
     │        ├─ false: Modal hidden
     │        └─ true: Modal visible
     │
     └─► Modal Internal State
              │
              ├─ formData: { name, email, phone }
              ├─ isLoading: boolean
              └─ error: string | null
```

## Error Handling Flow

```
Error Occurs
     │
     ├─► Frontend (Modal)
     │        │
     │        ├─ Validation Error → Show in modal
     │        ├─ Network Error → Show error message
     │        └─ API Error → Display error.message
     │
     ├─► Backend (ron.js)
     │        │
     │        ├─ Validation → Return 400 with error
     │        ├─ Proof API Error → Return 500 with details
     │        └─ Unexpected Error → Return 500
     │
     └─► Proof Service
              │
              ├─ HTTP Error → Throw with status
              ├─ Parse Error → Throw with message
              └─ Network Error → Throw with details
```

## Production Deployment Architecture

```
┌────────────────────────────────────────────────────────────────────┐
│                    Production Environment                           │
└────────────────────────────────────────────────────────────────────┘

Internet
    │
    └─► Load Balancer / Reverse Proxy (nginx)
             │
             ├─► Static Files (Frontend Build)
             │   https://bridgenotary.com
             │
             └─► API Server (Express Backend)
                 https://api.bridgenotary.com
                      │
                      └─► Proof Production API
                          https://api.notarize.proof.com
```

## Key Takeaways

1. **Frontend** calls **Backend** (never Proof directly)
2. **Backend** stores and uses **API keys** securely
3. **Proof** provides the actual **RON platform**
4. **User** completes notarization on **Proof's UI**
5. **Webhooks** notify **Backend** of completion
6. **Backend** can download **completed documents**

---

For implementation details, see:
- Getting Started: `docs/RON-GETTING-STARTED.md`
- Backend API: `server/README.md`
- Quick Reference: `docs/RON-QUICK-REFERENCE.md`
