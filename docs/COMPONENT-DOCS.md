# Bridge Notary Component Documentation

## Components Overview
This document provides documentation for the key components and functions modified or added as part of the UI enhancement PR.

## RON Page Components

### Hero Section
**Purpose:** Introduces the Remote Online Notarization service and provides primary CTAs
**Key Features:**
- Session availability toggle
- Card-based layout for different signing options
- Clear value proposition statement

```tsx
// Live Agent Availability Toggle (for demo purposes)
const [liveAgentsAvailable, setLiveAgentsAvailable] = useState(true);

// Session option cards with conditional rendering
{liveAgentsAvailable && (
  <Card hover={true} shadow="lg" className="flex-1 cursor-pointer">
    <CardBody className="text-center p-8">
      {/* Live Agent Indicator */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
        <span className="text-success font-medium text-sm">Live Agents Available</span>
      </div>
      {/* Card content */}
    </CardBody>
  </Card>
)}
```

### Checklist Section
**Purpose:** Highlights the key benefits of remote online notarization
**Implementation Details:**
- Custom SVG check icons with background circles
- Flex layout for proper alignment
- Semantic HTML structure for accessibility

```tsx
<div className="flex items-start gap-4">
  <div className="bg-electric-blue/10 rounded-full p-2 flex-shrink-0 mt-1">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  </div>
  <div>
    <span className="font-medium block text-proof">Document Title</span>
    <span className="text-neutral-600">Description text</span>
  </div>
</div>
```

### How It Works Section
**Purpose:** Explains the step-by-step process of remote online notarization
**Key Features:**
- Numbered steps for clear process flow
- Visual icons representing each step
- Consistent card styling

```tsx
// Card component with number, icon, title and description
<div className="bg-white rounded-xl shadow-md p-6 relative border border-neutral-200">
  <div className="absolute -top-4 -left-4 bg-electric-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
  <div className="pt-2">
    <h3 className="text-xl font-bold text-proof mb-2">Step Title</h3>
    <p className="text-neutral-600">Step description text</p>
  </div>
</div>
```

### Session Preparation Section
**Purpose:** Provides checklist of required documents and technical requirements
**Implementation Details:**
- Two-column layout with card containers
- Icon-based list items
- Clear visual hierarchy with headings and descriptions

```tsx
<div className="grid md:grid-cols-2 gap-12">
  <div className="bg-white rounded-xl shadow-md p-8">
    <h3 className="text-xl font-semibold text-proof mb-6">Required Documents</h3>
    <ul className="space-y-6">
      <!-- List items with custom icons -->
    </ul>
  </div>
  <div className="bg-white rounded-xl shadow-md p-8">
    <h3 className="text-xl font-semibold text-proof mb-6">Technical Requirements</h3>
    <ul className="space-y-6">
      <!-- List items with custom icons -->
    </ul>
  </div>
</div>
```

### Final CTA Section
**Purpose:** Encourages users to take action
**Key Features:**
- Gradient background for visual impact
- Prominent buttons with hover effects
- Clear value proposition statement

```tsx
<div className="flex flex-col sm:flex-row justify-center gap-6">
  <Link to="/book" className="bg-white text-proof hover:bg-neutral-100 transition-all font-semibold rounded-lg text-lg py-4 px-8 shadow-lg">
    Begin Notarization
  </Link>
  <Link to="/demo" className="bg-transparent border-2 border-white hover:bg-white/10 transition-all font-semibold rounded-lg text-lg py-4 px-8">
    View Demo
  </Link>
</div>
```

## Services Page Components

### Quick Action Section
**Purpose:** Provides prominent call-to-action for booking
**Implementation Details:**
- Full-width card with two-column layout
- Icon-based feature list
- Prominent booking button

```tsx
<div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-xl shadow-md p-8 border border-neutral-200">
  <div className="md:w-2/3">
    <h2 className="text-2xl font-bold text-proof mb-4">Ready to Schedule?</h2>
    <p className="text-neutral-600 mb-4">Schedule your signing appointment today.</p>
    <div className="flex flex-wrap gap-6">
      <!-- Feature items with icons -->
    </div>
  </div>
  <div className="md:w-1/3 flex justify-center">
    <Link to="/book" className="bg-electric-blue text-white py-4 px-8 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors text-lg font-medium">
      <svg><!-- Calendar icon --></svg>
      Book a Signing
    </Link>
  </div>
</div>
```

### What to Bring Section
**Purpose:** Informs users about required documents
**Key Features:**
- Three-column grid layout
- Icon-based cards
- Consistent styling

```tsx
<div className="grid md:grid-cols-3 gap-8">
  <div className="bg-white rounded-xl shadow-md p-8 border border-neutral-200 flex flex-col items-center text-center">
    <div className="bg-electric-blue/10 rounded-full p-3 mb-4">
      <svg><!-- Icon --></svg>
    </div>
    <h3 className="text-xl font-bold text-proof mb-3">Item Title</h3>
    <p className="text-neutral-600">Item description</p>
  </div>
  <!-- Additional items -->
</div>
```

### Related Services Section
**Purpose:** Provides links to other service pages
**Implementation Details:**
- Three-column grid with card links
- Consistent styling with proper hover states
- Icon-based headings

```tsx
<div className="grid md:grid-cols-3 gap-8">
  <Link to="/service-path" className="bg-white rounded-xl shadow-md p-8 border border-neutral-200 hover:shadow-lg transition-all">
    <h3 className="text-xl font-bold text-proof mb-4 flex items-center gap-2">
      <svg><!-- Service icon --></svg>
      Service Name
    </h3>
    <p className="text-neutral-600">Service description</p>
  </Link>
  <!-- Additional service links -->
</div>
```

### Testimonial Section
**Purpose:** Adds social proof through customer quotes
**Key Features:**
- Centered layout with quote icon
- Proper typography for readability
- Clear attribution

```tsx
<div className="max-w-4xl mx-auto text-center">
  <div className="mb-6">
    <svg className="h-10 w-10 text-gold mx-auto" fill="currentColor" viewBox="0 0 24 24">
      <!-- Quote icon path -->
    </svg>
  </div>
  <p className="text-xl text-neutral-700 italic mb-6">
    "Testimonial text"
  </p>
  <p className="text-lg font-semibold text-proof">- Attribution</p>
</div>
```

### Contact Section
**Purpose:** Provides multiple contact options
**Implementation Details:**
- Two-column layout with contact info and buttons
- Icon-based contact methods
- Prominent call-to-action buttons

```tsx
<div className="grid md:grid-cols-2 gap-12 items-center">
  <div>
    <h2 className="text-3xl font-bold text-proof mb-6">Contact Us</h2>
    <p className="text-neutral-600 mb-8">Description text</p>
    <div className="space-y-4">
      <!-- Contact methods with icons -->
    </div>
  </div>
  <div className="flex justify-center">
    <div className="space-y-6">
      <!-- CTA buttons -->
    </div>
  </div>
</div>
```

## Utility Functions and Helpers

### classNames
**Purpose:** Utility function to conditionally join class names
**Location:** `/src/utils/classNames.ts`
**Usage:**
```tsx
import { classNames } from '@/utils/classNames';

// Example usage
<div className={classNames(
  'base-class',
  isActive && 'active-class',
  variant === 'primary' ? 'primary-class' : 'secondary-class'
)}>
  Content
</div>
```

## Styling Patterns

### Card Pattern
```tsx
<div className="bg-white rounded-xl shadow-md p-6 border border-neutral-200 hover:shadow-lg transition-all">
  {/* Card content */}
</div>
```

### Icon with Background Pattern
```tsx
<div className="bg-electric-blue/10 rounded-full p-2 flex-shrink-0">
  <svg className="h-5 w-5 text-electric-blue" viewBox="0 0 20 20" fill="currentColor">
    {/* SVG path */}
  </svg>
</div>
```

### Section Pattern
```tsx
<section className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    {/* Section content */}
  </div>
</section>
```

### Gradient Background Pattern
```tsx
<section className="bg-gradient-to-r from-proof/10 to-electric-blue/10">
  {/* Section content */}
</section>
```

## TailwindCSS Color System
The Bridge Notary website uses a custom color palette defined in the TailwindCSS configuration:

- `proof` - Primary brand color (deep navy blue)
- `electric-blue` - Secondary brand color (bright blue)
- `gold` - Accent color (golden yellow)
- `neutral-*` - Grayscale colors for text and backgrounds

## Best Practices Implemented
1. **Consistent spacing**
   - Using TailwindCSS spacing utilities (px-6, py-16, etc.)
   - Maintaining consistent spacing between sections

2. **Responsive design**
   - Mobile-first approach with appropriate breakpoints
   - Using flex-col/row for stacking/horizontal layouts
   - Grid layouts with responsive column counts

3. **Visual hierarchy**
   - Clear heading sizes and weights
   - Proper spacing between elements
   - Card-based layout for grouping related content

4. **Accessibility**
   - Semantic HTML structure
   - Proper heading hierarchy
   - Sufficient color contrast
   - Hover states for interactive elements
