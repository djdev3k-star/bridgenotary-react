# Bridge Notary React - AI Coding Guide

This document provides essential information for AI coding agents to work effectively with the Bridge Notary React codebase.

## Project Overview

Bridge Notary is a professional notary service provider's website built with:

- React 18 + TypeScript
- Vite as build tool
- React Router for navigation
- TailwindCSS for styling

## Architecture & Component Organization

### Core Structure

- `/src/pages/` - Page-level components organized by route
- `/src/components/` - Reusable components organized by purpose:
  - `/common/` - Generic, widely-used components (Card, Button, etc.)
  - `/layout/` - Components related to site structure (Navigation, Footer)
  - `/ui/` - Basic UI elements (buttons, form fields)
- `/src/features/` - Feature-specific components (apostille, RON services)

### Key Design Patterns

1. **Layout Pattern**: Two layout components handle different use cases:

   - `RouteLayout.tsx`: Used with React Router's `<Outlet/>` for route-based content
   - `Layout.tsx`: Used with direct children for standalone pages
   - See `/src/components/layout/index.ts` for exports

2. **Lazy Loading**: All page components are lazy-loaded with Suspense for performance:

   ```tsx
   // From App.tsx
   const HomePage = React.lazy(() => import("@/pages/home"));
   ```

3. **Component Naming Convention**:
   - Page components are named `index.tsx` within their route folder
   - Specialized components within a page are named by function (e.g., `Hero.tsx`, `Process.tsx`)

## Styling Guidelines

1. **TailwindCSS**: Primary styling method with custom components and theme:

   - Custom color palette using Bridge Notary brand colors (`proof`, `gold`, `electric-blue`)
   - Typography system with consistent heading styles
   - Component classes defined in `/src/styles/index.css`

2. **Component Classes**: Reusable styles in `@layer components`:

   ```css
   /* Example from index.css */
   .button-primary {
     @apply button bg-electric-blue text-white hover:bg-hover-blue;
   }
   ```

3. **Animation Classes**: Predefined animations for UI elements:
   - `fade-in`, `fade-in-delay`, `pulse-button`, `floating-element`
   - Used for staggered entrance animations and hover effects

## Data Flow & State Management

1. **Page Structure**: Most pages follow consistent structure:
   - Interface definitions at the top
   - Component data arrays (services, features, etc.)
   - Main component rendering with sections
2. **Component Props**: Interfaces are defined at the top of component files:
   ```tsx
   interface ScenarioType {
     situation: string;
     documents: string;
     gotcha: string;
     icon: string;
   }
   ```

## Development Workflow

1. **Start Development Server**:

   ```bash
   npm run dev
   ```

2. **Build for Production**:

   ```bash
   npm run build
   ```

3. **Path Aliasing**: Use `@/` alias for imports from src directory:
   ```tsx
   import Layout from "@/components/layout";
   ```

## Codebase Conventions

1. **File Structure**:

   - Related component files are grouped in folders
   - Index files are used for clean exports
   - Component folders often have a type definition file

2. **Consistent Styling Pattern**:
   - Sections use the `section` class
   - Cards use the `card` class
   - Buttons use `button-primary` or `button-outline`
   - Background colors follow brand palette
3. **Responsive Design**:
   - Mobile-first approach with Tailwind breakpoints
   - Consistent grid patterns (`grid md:grid-cols-2 lg:grid-cols-3`)
   - Flexible spacing with responsive padding/margin

## Common Gotchas

1. Imports should use the `@/` path alias rather than relative paths
2. Component props should have proper TypeScript interfaces
3. Always wrap page content in appropriate layout components
4. Use `className` conventions from `index.css` for consistent styling
