# Bridge Notary React – AI Coding Guide

Quick reference for AI agents working on this professional notary website. Designed for immediate productivity.

## Essentials

**Tech Stack:** React 18 + TypeScript + Vite + TailwindCSS + React Router v7

**Development:**
- `npm run dev` → starts on http://localhost:3000 (Vite)
- `npm run build` → production bundle
- `npm run test` → Jest + React Testing Library
- `npm run start:all` → dev server + Node API server (concurrent)

**Path Alias:** Always use `@/` for src imports (configured in `vite.config.ts` and `tsconfig.json`). Never use relative paths.

## Architecture: The Layout System (Critical)

This project uses **two distinct layout patterns**—misunderstanding this breaks routing:

### RouteLayout (Default)
- **File:** `src/components/layout/RouteLayout.tsx`
- **Default export** in `src/components/layout/index.ts`
- **Used in:** `App.tsx` route definitions—renders `<Outlet/>` for nested routes
- **Wraps:** Navigation + Footer + ScrollToTop + main content
- **Example:** Most routes use this (`/`, `/ron`, `/loan-signing`, `/book`, etc.)

### Layout (Children-based)
- **File:** `src/components/layout/Layout.tsx`
- **Named export:** Import as `{ PageLayout }`
- **Accepts:** `children` prop instead of `<Outlet/>`
- **Use case:** Standalone pages managing own content flow

### Special Case: ApostilleLayout
- **File:** `src/pages/apostille/ApostilleLayout.tsx`
- **Used for:** `/apostille/quiz*` routes (separate route group in `App.tsx`)
- **Controlled by:** `featureFlags.enableApostille`

**Rule:** Check `App.tsx` routing to see which routes use which layout.

## Page & Component Organization

```
/src/pages/              → Route-level pages, lazy-loaded in App.tsx
  index.tsx             → Main component (imports subcomponents)
  Hero.tsx              → Specialized section component
  Process.tsx           → Feature-specific subcomponent
  
/src/components/        → Reusable UI pieces
  /layout/              → Navigation, Footer, RouteLayout, ApostilleLayout
  /common/              → ErrorBoundary, Card, Image, TrustSection, TawkChat
  /ui/                  → Button, FormFields, HeroBackground
  
/src/features/          → Feature domains
  /apostille/           → Apostille-specific services & data
  /ron/                 → Remote Notarization components
```

**Page Structure Pattern** (see `src/pages/home/index.tsx`):
1. Import specialized subcomponents (Hero, Process, Features)
2. Define data interfaces at top (e.g., `ScenarioType`, `ServiceType`)
3. Main component with multiple `<section>` elements
4. Each section has specific styling patterns

## Styling System

**Method:** TailwindCSS with custom layer components in `src/styles/index.css`

**Color Palette** (`tailwind.config.js`):
- `deep-navy` (#1A2B4D) – primary headings
- `professional-blue` (#0055E6) – CTAs, links, accents, icons
- `hover-blue` (#0049CC) – hover state for buttons
- `charcoal` (#2C3E50) – body text
- `muted-gold` (#D4AF37) – strong/bold accents
- `off-white` – backgrounds, fallback to `neutral-50`

**Reusable Classes** (`@layer components` in index.css):
- `.section` – `py-20 md:py-28 px-4 md:px-0 max-w-5xl mx-auto` (full-width content blocks)
- `.card` – `bg-white border border-neutral-200 p-8 md:p-12 shadow-sm hover:shadow-md`
- `.button-primary` – Blue button with hover state and shadow
- `.button-outline` – Border button with deep-navy text
- `.stats-card` – Floating stats card with hover lift
- `.accent-left` – Left border in professional-blue

**Design Pattern Example:**
```tsx
// Full-width section with accent background
<section className="w-full bg-professional-blue/10 py-20 md:py-28">
  <div className="max-w-7xl mx-auto px-6">
    {/* content */}
  </div>
</section>

// Icon with hover scale inside card with group class
<div className="group">
  <svg className="h-6 w-6 text-professional-blue group-hover:scale-110 transition-transform" />
</div>
```

**Typography:** Headings use Poppins → Inter → system fonts (set in `@layer base`). Strict hierarchy: h1 (text-5xl/7xl), h2 (text-2xl/3xl), h3 (text-lg/2xl).

## Data Flow & State Management

**Pattern:** No Redux/Zustand. Data is local and simple:

1. **Page components define interfaces** at file top:
   ```tsx
   interface ServiceType {
     title: string;
     description: string;
     icon: string;
   }
   ```

2. **Data arrays live in component files** (not external APIs in current codebase):
   ```tsx
   const services: ServiceType[] = [
     { title: "...", description: "...", icon: "..." },
   ];
   ```

3. **Props passed with TypeScript interfaces** to subcomponents

4. **Navigation state:** `useState()` for mobile menu toggles (see `src/components/layout/Navigation.tsx`)

5. **Feature flags:** Controlled via environment variables (`.env`) and `src/utils/featureFlags.ts`:
   ```tsx
   enableApostille: parseEnvFlag(import.meta.env.VITE_ENABLE_APOSTILLE, true)
   ```

## Critical Integration Points

- **Routing:** React Router v7 in `App.tsx`. All routes defined here; pages lazy-loaded with `React.lazy()` + `<Suspense>`.
- **Forms:** Netlify Forms (hidden form declarations in `App.tsx`); form submissions to `/book`, `/contact`, etc.
- **Navigation/Mega Menu:** Solutions dropdown in `src/components/layout/Navigation.tsx` with menu structure
- **Phone Link:** `tel:+14696298932` in Navigation header
- **CTA Pattern:** Typical flow is "Book Your Appointment" → `/book` or contact form

## Lazy Loading & Error Handling

- **All pages are lazy-loaded** with `React.lazy()` in `App.tsx`
- **LoadingFallback component** wraps routes in `<Suspense>`—shows spinner during page load
- **ErrorBoundary at root** catches unhandled component errors
- **Do NOT add additional error boundaries** unless handling specific failures (e.g., form validation)

## Developer Conventions

1. **TypeScript strict mode enabled:** All prop interfaces required; no `any` types. Enforced: `noUnusedLocals`, `noUnusedParameters`
2. **Component naming:** Page index files are `index.tsx`; subcomponents use descriptive names (Hero, Process, Services, PricingTier)
3. **Exports pattern:** Use `index.ts` files in folders for clean re-exports (see `src/components/layout/index.ts`)
4. **Responsive design:** Mobile-first approach; use Tailwind breakpoints `md:`, `lg:`. Test on mobile widths (375px, 768px)
5. **No relative imports:** Breaks refactoring. Always use `@/` alias.

## Testing

- **Framework:** Jest + React Testing Library (configured in `setupTests.ts`)
- **Mocks:** `matchMedia` mocked for responsive design tests
- **Command:** `npm run test`

## Special Cases

- **Apostille feature:** Gated by `featureFlags.enableApostille`. Routes exist at `/apostille/quiz*` with custom layout. Conditionally loaded in `App.tsx`.
- **Mobile app:** Separate React Native architecture in `src/mobile/`—do not reference web code from mobile.
- **Archived components:** `archived/` contains outdated code—do not reference or refactor.
- **Server/API:** Express server in `server/` (start with `npm run server:dev`). Proxied via Vite at `/api`.

## Common Patterns

**Hero Section with Gradient Background:**
```tsx
<section className="relative overflow-hidden pt-20 pb-24 md:pt-36 md:pb-52 bg-off-white">
  <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
    {/* Left: Text */}
    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
        Main Title <span className="text-professional-blue">Highlight</span>
      </h1>
      <p className="text-lg md:text-xl text-charcoal/70 mb-10">Subheading</p>
    </div>
    {/* Right: Image or content */}
  </div>
</section>
```

**Feature Grid:**
```tsx
<section className="w-full bg-professional-blue/10 py-20 md:py-28">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12">Title</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature) => (
        <div key={feature.id} className="group card">
          <h3 className="text-xl font-semibold text-charcoal mb-4">{feature.title}</h3>
          <p className="text-charcoal/70">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

## Build & Production

- **Build command:** `npm run build`
- **Output:** Static files to `dist/`
- **Hosting:** Netlify, Vercel, Cloudflare Pages, or any static host
- **Environment:** Set feature flags via `.env` files (`VITE_ENABLE_APOSTILLE=true`)
