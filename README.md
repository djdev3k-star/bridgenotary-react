# Bridge Notary – React App

Modern React 18 + TypeScript site for Bridge Notary built with Vite and TailwindCSS. Includes routed marketing pages (apostille, RON, destination wedding, overseas property, study abroad, dual citizenship, international adoption), hero image cycling, mega menu, and consistent layout system.

## Quick Start

```bash
npm install
npm run dev    # starts Vite dev server on http://localhost:5173
npm run build  # production build
npm run test   # unit/UI tests (Jest + RTL)
```

## Stack
- React 18 + TypeScript
- Vite build/dev server
- TailwindCSS for styling (see src/styles/index.css)
- React Router v7 with lazy-loaded pages

## Key Conventions
- Path alias: use `@/` for imports from `src/`
- Layouts: `RouteLayout` for routed pages with `<Outlet/>`; `Layout` for standalone pages
- Components organized under `src/components/{layout,common,ui}`
- Feature areas under `src/features/` (apostille, ron)
- Pages live in `src/pages/` with `index.tsx` per route

## Notable UX Features
- Hero backgrounds with cycling imagery (RON, loan-signing) and gradient overlays
- Mega menu with apostille subpages (quiz, study abroad, overseas property, destination wedding)
- Consistent breadcrumb headers and sharp card grids
- Session prep and process sections with checklist cards

## Project Structure (partial)

```
src/
	App.tsx            # routes + lazy imports
	components/        # layout/common/ui atoms & molecules
	features/          # apostille, ron feature modules
	pages/             # route pages (apostille, ron, services, etc.)
	styles/index.css   # Tailwind layer customizations, animations
```

## Deploy
- Vite static build → `npm run build` outputs to `dist/`
- Host on Netlify, Vercel, Cloudflare Pages, or any static host

## Testing
- Jest + React Testing Library
- `npm run test` to execute suite
