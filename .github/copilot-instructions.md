# Bridge Notary React - AI Coding Guide

AI agents working on this Bridge Notary website should understand the architecture, workflow, and patterns essential for productivity.

## Quick Start

**Development**: `npm run dev` (starts on port 3000)
**Build**: `npm run build`
**Path alias**: Always use `@/` for src imports, never relative paths

## Architecture Overview

### Layout System (Critical for routing)

The app uses **two distinct layout patterns**—this is fundamental:

- **`RouteLayout.tsx`** (default in `/src/components/layout/index.ts`): Used in `App.tsx` route definitions. Renders `<Outlet/>` for nested routes, wraps with Navigation + Footer + ScrollToTop.
- **`Layout.tsx`**: For standalone pages needing Navigation/Footer but managing own content flow. Accepts `children` prop.

Why this matters: Incorrect layout choice breaks page structure. Most routes use `RouteLayout` (the default export). Check `App.tsx` routing to see which routes use `ApostilleLayout` (custom variant).

### Page & Component Organization

```
/src/pages/          → Route-level pages (lazy-loaded in App.tsx)
/src/components/
  /common/          → Reusable components (ErrorBoundary, Card, Image, NavLink)
  /layout/          → Layout wrappers (Navigation, Footer, Sidebar variants)
  /ui/              → Atomic UI (Button, FormFields, HeroBackground)
/src/features/      → Feature domains (apostille/*, ron/*)
```

**Page structure pattern** (see `/src/pages/home/index.tsx`):
1. Import specialized subcomponents (Hero, Process, Services)
2. Define data interfaces at file top
3. Export main component with sections

### Lazy Loading & Error Handling

All pages are `React.lazy()` imported in `App.tsx` with `Suspense` + `LoadingFallback`. The app wraps with `ErrorBoundary` at root. Don't add additional error boundaries unless handling specific component failures.

## Styling System

**TailwindCSS with custom layer components** (`/src/styles/index.css`):

- **Colors**: `electric-blue` (#0046fa), `proof` (#192252), `gold` (#FFD700), `hover-blue` (#1437c0)
- **Reusable classes**: `.section` (py-20 md:py-28, centered), `.card` (white bg, shadow, p-8), `.button`, `.button-primary`, `.button-outline`
- **Animations**: `.fade-in`, `.fade-in-delay`, `.pulse-button` (entrance effects)
- **Typography**: Headlines styled in `@layer base` with font-family priority: Poppins → Inter → system fonts

Use TailwindCSS utilities; avoid inline styles. Brand colors are strictly applied (proof for primary headers, electric-blue for CTAs, gold accents).

## Data Flow Patterns

**No external state management library**. Data flows:
1. Page components define local interfaces (e.g., `ScenarioType`, `ServiceType`)
2. Data arrays live in component file (not external API calls in current codebase)
3. Props passed to subcomponents with TypeScript interfaces
4. Navigation state: `useState()` for mobile menu toggle (see `Navigation.tsx`)

## Critical Integration Points

- **Navigation/Routing**: Managed by React Router v7 in `App.tsx`. Main nav dropdown (Solutions) defined in `Navigation.tsx` with menu items array structure.
- **Form interaction**: `FormFields.tsx` in `/src/components/ui/`; booking flow routes to `/book` page
- **Phone link**: `tel:+14696298932` appears in Navigation header
- **CTA pattern**: Typically `Book Your Appointment` button → `/book` or contact form

## Important Conventions

1. **Always use `@/` path alias** for imports from src/
2. **TypeScript strict mode enabled**: All prop interfaces required, no `any` types
3. **Responsive mobile-first**: Use `md:`, `lg:` breakpoints; test on mobile widths
4. **Component naming**: Page index files are `index.tsx`, subcomponents use descriptive names (Hero, Process, Services)
5. **Exports pattern**: Use index.ts files for clean re-exports (see `/src/components/layout/index.ts`)

## Build & Testing Notes

- Jest configured with React Testing Library (setup in `setupTests.ts`)
- `matchMedia` mocked for responsive design testing
- TypeScript strict mode: `noUnusedLocals`, `noUnusedParameters` enforced
- Vite aliases configured in `vite.config.ts` and `tsconfig.json`

## Special Cases

- **Apostille quiz flow**: Uses custom `ApostilleLayout` (separate from main RouteLayout) with nested routes at `/apostille/quiz*`
- **Mobile app** exists in `/src/mobile/` but separate from web (different architecture)
- **Archived components** in `/archived/` are outdated—don't reference or refactor these
