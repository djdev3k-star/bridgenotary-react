# Bridge Notary React - Project Structure

## Overview
This is a professional notary service provider website built with React 18, TypeScript, Vite, and TailwindCSS. The project includes both web and mobile components.

## Directory Structure

```
bridgenotary-react/
├── .github/                    # GitHub workflows and CI/CD
│   ├── workflows/
│   └── instructions/           # Copilot instructions for development
├── .netlify/                   # Netlify CLI cache (gitignored)
├── archived/                   # Old code and deprecated components
│   └── bridge-notary-pro/
├── dist/                       # Production build output (gitignored)
├── docs/                       # Comprehensive documentation
│   ├── BOOK-PAGE-REDESIGN.md
│   ├── COMPONENT-DOCS.md
│   ├── FORMS-INTEGRATION-STATUS.md
│   ├── ODOO-INTEGRATION-GUIDE.md
│   ├── RON-ARCHITECTURE.md
│   ├── RON-IMPLEMENTATION-SUMMARY.md
│   └── ...
├── netlify/                    # Netlify Functions (serverless backend)
│   └── functions/
│       ├── apostille.cjs       # Apostille service API
│       ├── appointment.cjs     # Appointment booking API
│       ├── contact.cjs         # Contact form API
│       ├── odoo-form-submit.cjs # Odoo CRM integration ⭐
│       └── ron-start.cjs       # Remote notary initiation
├── node_modules/              # Dependencies (gitignored)
├── public/                     # Static assets
│   ├── downloads/              # PDF downloads
│   ├── images/                 # Brand images, logos, marketing assets
│   └── videos/                 # Marketing/demo videos
├── server/                     # Express.js backend (optional, for local development)
│   ├── api/                    # API route handlers
│   ├── config/                 # Server configuration
│   └── services/               # Business logic
├── src/                        # React source code ⭐⭐⭐ (Main Application)
│   ├── assets/
│   │   ├── Google-Business/    # Google Business profile assets
│   │   └── images/             # Imported image assets
│   ├── components/             # Reusable React components
│   │   ├── common/             # Generic components (Card, Button, ErrorBoundary, etc.)
│   │   ├── forms/              # Form components ⭐
│   │   │   ├── FormFields.tsx
│   │   │   ├── NotaryRequestForm.tsx
│   │   │   ├── CourierRequestForm.tsx
│   │   │   ├── GeneralInquiryForm.tsx
│   │   │   └── ...
│   │   ├── layout/             # Layout wrappers (Navigation, Footer, etc.)
│   │   ├── ui/                 # Basic UI elements
│   │   └── index.ts            # Barrel exports
│   ├── features/               # Feature-specific components
│   │   ├── apostille/          # Apostille service module
│   │   ├── loan-signing/       # Loan signing service module
│   │   ├── notary-services/    # General notary services
│   │   └── ron/                # Remote online notarization
│   ├── mobile/                 # React Native mobile app
│   │   ├── app-flow-diagram.txt
│   │   ├── components/
│   │   ├── navigation/
│   │   ├── screens/
│   │   └── types/
│   ├── pages/                  # Page-level components (route-based)
│   │   ├── apostille/          # /apostille route
│   │   ├── book/               # /book appointment
│   │   ├── contact/            # /contact
│   │   ├── courier-request/    # /courier-request
│   │   ├── general-inquiry/    # /general-inquiry
│   │   ├── home/               # / homepage
│   │   ├── loan-signing/       # /loan-signing
│   │   ├── notary-request/     # /notary-request
│   │   ├── ron/                # /ron remote notarization
│   │   └── ...
│   ├── services/               # Business logic services
│   │   ├── formSubmissionService.ts  # Form submission to Netlify ⭐
│   │   ├── ronService.ts
│   │   └── ...
│   ├── styles/                 # Global styles
│   │   └── index.css           # Tailwind + custom component classes
│   ├── types/                  # TypeScript type definitions
│   │   ├── forms.ts            # Form data types ⭐
│   │   ├── ron.ts
│   │   └── services.ts
│   ├── utils/                  # Utility functions
│   │   ├── classNames.ts
│   │   ├── featureFlags.ts     # Feature toggle configuration
│   │   ├── formValidation.ts   # Form validation logic ⭐
│   │   └── ...
│   ├── App.tsx                 # Main app with routing ⭐
│   ├── main.tsx                # React entry point
│   └── vite-env.d.ts           # Vite types
├── workers-site/               # Cloudflare Workers (optional)
├── .env.example                # Environment variables template
├── .env.development            # Development environment (gitignored)
├── .gitignore                  # Git ignore rules ⭐
├── ARCHITECTURE.md             # High-level architecture
├── FORMS-IMPLEMENTATION.md     # Form system documentation
├── QUICK-START.md              # Quick start guide
├── README.md                   # Project overview
├── index.html                  # HTML entry point
├── netlify.toml                # Netlify configuration
├── package.json                # Dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # TailwindCSS configuration
├── tsconfig.json               # TypeScript configuration
├── tsconfig.node.json          # TypeScript config for build tools
├── vite.config.ts              # Vite build configuration
└── [other config files]
```

## Key Sections

### 🎨 `/src/components`
Component library organized by purpose:
- **`common/`** - Reusable components used across multiple pages
- **`forms/`** - All form-related components (input fields, form wrappers, form components)
- **`layout/`** - Page structure (Navigation, Footer, RouteLayout)
- **`ui/`** - Basic UI building blocks

### 📄 `/src/pages`
Page components organized by route:
- Each folder represents a URL route (e.g., `/src/pages/book` → `/book`)
- Each page imports layout and subcomponents
- Pages are lazy-loaded in `App.tsx`

### ⚡ `/src/features`
Feature modules for specific business services:
- Apostille service handling
- Loan signing workflows
- Remote online notarization (RON)
- General notary services

### 📚 `/src/types`
Central TypeScript definitions:
- Form data interfaces
- Service-specific types
- API response types

### 🛠️ `/src/utils`
Utility functions:
- Form validation
- Class name helpers
- Feature flags (conditional rendering)

### 🔗 `/netlify/functions`
Serverless backend (Node.js):
- **`odoo-form-submit.cjs`** - Handles form submissions to Odoo CRM
- Other API endpoints for booking, contact, notifications

### 📱 `/src/mobile`
React Native mobile app (separate from web):
- Independent navigation structure
- Mobile-specific screens
- Shared types where applicable

## Development Workflow

### Adding a New Page
1. Create folder in `/src/pages/[page-name]/`
2. Create `index.tsx` for main page component
3. Add subcomponents as separate files (e.g., `Hero.tsx`, `Details.tsx`)
4. Import and lazy-load in `App.tsx`
5. Add route to Router config

### Adding a New Component
1. Create folder in `/src/components/[category]/ComponentName/`
2. Create `ComponentName.tsx` file
3. Create `index.ts` barrel export
4. Add TypeScript interface if needed
5. Export from `/src/components/common/index.ts` (if reusable)

### Adding a New Form
1. Create form component in `/src/components/forms/[FormName].tsx`
2. Use `FormFields` components for inputs
3. Implement validation using `/src/utils/formValidation.ts`
4. Use `formSubmissionService.submitRequestForm()` to submit
5. Add form types to `/src/types/forms.ts`

## Build Process

```bash
# Development
npm run dev              # Vite only (Git Bash compatible)
npm run dev:netlify     # Vite + Netlify Functions (WSL/PowerShell)

# Production
npm run build           # Creates /dist folder

# Testing
npm run test            # Jest + React Testing Library
```

## Key Files to Know

| File | Purpose |
|------|---------|
| `src/App.tsx` | Router configuration, lazy-loaded pages |
| `src/components/layout/RouteLayout.tsx` | Default page layout wrapper |
| `src/components/forms/*` | Form components with confirmation screens ⭐ |
| `src/services/formSubmissionService.ts` | Form → Netlify Function bridge |
| `src/utils/formValidation.ts` | Form validation logic |
| `src/utils/featureFlags.ts` | Feature toggles (apostille, etc.) |
| `netlify/functions/odoo-form-submit.cjs` | Odoo CRM integration |
| `.gitignore` | Git tracking rules (see updates below) |
| `tailwind.config.js` | Brand colors and design system |

## Recent Cleanup

✅ **Removed from Git:**
- `deno.lock` - Deno lock file (not needed)
- `_routes.json` - Generated routing file
- `move-assets.js` - Build script

✅ **Reorganized:**
- PR documentation ignored (not tracked)
- Temporary summary files ignored
- Important docs moved to clean structure
- ARCHITECTURE.md, FORMS-IMPLEMENTATION.md, QUICK-START.md kept in root as reference

✅ **Git Ignore Rules:**
```ignore
# PR and temporary documentation
PR-*.md
HANDOFF-SUMMARY.md
PROJECT-STATUS.txt
*-SUMMARY.md

# Generated files
.qodo/
deno.lock
_routes.json
move-assets.js
```

## Standards & Conventions

- **Path Alias**: Use `@/` for imports from src (never relative paths)
- **Naming**: PascalCase for components, camelCase for utilities
- **TypeScript**: Strict mode enforced, no `any` types
- **Styling**: TailwindCSS with custom component classes
- **Error Handling**: ErrorBoundary at root, form-level validation
- **Testing**: Colocated `.test.tsx` files with components

## Next Steps for Developers

1. Read [QUICK-START.md](QUICK-START.md) to get running locally
2. Review [ARCHITECTURE.md](ARCHITECTURE.md) for system design
3. Check [FORMS-IMPLEMENTATION.md](FORMS-IMPLEMENTATION.md) for form patterns
4. See `/docs/ODOO-INTEGRATION-GUIDE.md` for CRM integration details
