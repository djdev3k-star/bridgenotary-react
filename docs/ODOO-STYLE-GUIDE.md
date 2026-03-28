# Bridge Notary - Odoo Migration Style Guide & Spec Sheet

**Project:** Bridge Notary Professional Notary Services
**Target Platform:** Odoo 16+ (Community Edition)
**Design System:** Professional, Modern, Trust-based

---

## 1. COLOR PALETTE

### Primary Colors
| Name | Hex Code | RGB | Usage |
|------|----------|-----|-------|
| **Deep Navy** | #1A2B4D | 26, 43, 77 | Primary headings, main text, logo |
| **Professional Blue** | #0055E6 | 0, 85, 230 | CTA buttons, links, accents, icons, hover states |
| **Hover Blue** | #0049CC | 0, 73, 204 | Button hover state (darker professional-blue) |
| **Charcoal** | #2C3E50 | 44, 62, 80 | Body text, secondary headings |

### Accent Colors
| Name | Hex Code | RGB | Usage |
|------|----------|-----|-------|
| **Muted Gold** | #D4AF37 | 212, 175, 55 | Premium accents, highlights |
| **Gold Dark** | #BFA100 | 191, 161, 0 | Gold hover state |

### Neutral Colors
| Name | Hex Code | Usage |
|------|----------|-------|
| **Off-White** | #F9F9F7 | Page backgrounds, card backgrounds |
| **Light Gray** | #ECF0F1 | Section backgrounds, borders |
| **Neutral 400** | #A1A1AA | Disabled text, secondary borders |
| **Neutral 500** | #71717A | Tertiary text, muted labels |
| **Neutral 700** | #3F3F46 | Dark text on light backgrounds |

---

## 2. TYPOGRAPHY SYSTEM

### Font Family
- **Primary:** Poppins (web font)
- **Fallback:** Inter, system-ui, sans-serif

### Heading Hierarchy

| Level | Font Size | Font Weight | Line Height | Letter Spacing | Color | Example |
|-------|-----------|-------------|-------------|-----------------|-------|---------|
| **H1** | 48px (md: 56px) | 700 (Bold) | 1.2 | -0.5px | Deep Navy | Page title, hero headline |
| **H2** | 36px (md: 42px) | 700 (Bold) | 1.25 | -0.3px | Deep Navy | Section title |
| **H3** | 24px (md: 28px) | 700 (Bold) | 1.3 | 0 | Deep Navy | Subsection, card title |
| **H4** | 20px | 600 (Semibold) | 1.4 | 0 | Charcoal | Feature title |
| **H5** | 16px | 600 (Semibold) | 1.5 | 0 | Charcoal | Label, small title |
| **H6** | 14px | 600 (Semibold) | 1.5 | 0 | Charcoal | Micro label |

### Body Text

| Purpose | Font Size | Font Weight | Line Height | Color |
|---------|-----------|-------------|-------------|-------|
| **Paragraph** | 16px | 400 | 1.6 | Charcoal |
| **Paragraph (small)** | 14px | 400 | 1.6 | Charcoal |
| **Description** | 18px (md: 20px) | 400 | 1.7 | Charcoal/70% (opacity) |
| **Caption** | 12px | 400 | 1.5 | Neutral 500 |
| **Link** | 16px | 400 | 1.6 | Professional Blue (hover: Hover Blue) |

---

## 3. SPACING & SIZING SYSTEM

### Margins & Padding (Base unit: 4px)
```
xs: 4px (0.25rem)
sm: 8px (0.5rem)
md: 12px (0.75rem)
lg: 16px (1rem)
xl: 24px (1.5rem)
2xl: 32px (2rem)
3xl: 48px (3rem)
4xl: 64px (4rem)
```

### Section Vertical Spacing
- **Desktop:** py-20 md:py-28 = 80px (md: 112px)
- **Mobile:** py-12 = 48px

### Container Width
- **Max Width:** 1280px (80rem / max-w-7xl)
- **Padding:** 24px (6 on each side)

---

## 4. COMPONENT SPECIFICATIONS

### Buttons

#### Primary Button (CTA)
```css
Background: #0055E6 (Professional Blue)
Text Color: White
Padding: 12px 24px (py-3 px-6)
Border Radius: 4px
Font: 16px, 600 weight, Poppins
Hover: #0049CC (Hover Blue)
Active: #003BA3 (darker)
Border: None
Shadow: 0 4px 6px rgba(0, 85, 230, 0.2)
Transition: 0.2s ease
```

#### Secondary/Outline Button
```css
Background: White / Transparent
Border: 1.5px solid #1A2B4D (Deep Navy)
Text Color: #1A2B4D (Deep Navy)
Padding: 10px 22px
Border Radius: 4px
Font: 16px, 600 weight
Hover: Background #1A2B4D, Text White
Transition: 0.2s ease
```

#### Tertiary/Text Button
```css
Background: Transparent
Text Color: #0055E6 (Professional Blue)
Font: 16px, 600 weight
Underline: None by default, underline on hover
Hover: Text #0049CC
```

### Cards

#### Standard Card (Default)
```css
Background: White
Border: 1px solid #E4E4E7 (Neutral 200)
Border Radius: 8px
Padding: 24px (md: 32px)
Box Shadow: 0 1px 3px rgba(0, 0, 0, 0.1)
Hover: Shadow increase to 0 10px 15px rgba(0, 0, 0, 0.1)
Transition: 0.2s ease
```

#### Accent Left Border Card (PREFERRED PATTERN)
```css
Background: White
Border Left: 2px solid #0055E6 (Professional Blue)
Border Radius: 0 (top-right/bottom-right: 8px optional)
Padding Left: 24px
Padding: 16px 24px 16px 24px
Box Shadow: 0 1px 2px rgba(0, 0, 0, 0.05)
Hover: Scale 1.02, Shadow increase
Icon Color: #0055E6
Icon Hover: scale-110, transition
```

#### Stat Card
```css
Background: White / #F9F9F7 (off-white)
Border: None
Padding: 24px
Border Radius: 8px
Text Alignment: Center
Hover: Transform translateY(-4px), shadow increase
```

### Forms

#### Input Field
```css
Background: White
Border: 1px solid #D4D4D8 (Neutral 300)
Border Radius: 4px
Padding: 10px 12px
Font: 14px, 400 weight
Focus: Border #0055E6, Shadow 0 0 0 3px rgba(0, 85, 230, 0.1)
Disabled: Background #F4F4F5, Border #E4E4E7, Color #A1A1AA
```

#### Label
```css
Font: 14px, 600 weight
Color: #1A2B4D (Deep Navy)
Margin Bottom: 6px
```

#### Error Message
```css
Font: 12px, 400 weight
Color: #DC2626 (Red-600)
Margin Top: 4px
```

---

## 5. LAYOUT PATTERNS

### Hero Section (Standard)
```
Structure:
├── Full width background (w-full)
├── Background color: #F9F9F7 (off-white) or with gradient overlay
├── Padding: py-20 md:py-28 (80px / 112px vertical)
├── Container: max-w-7xl mx-auto px-6
├── Grid: md:grid-cols-2 gap-8 (for two-column layout)
├── Left: Text content (h1, paragraph, CTA)
└── Right: Image or visual element
```

### Feature Grid Section
```
Structure:
├── Full width background: bg-white or bg-professional-blue/10
├── Padding: py-20 md:py-28
├── Container: max-w-7xl mx-auto px-6
├── Title: h2, mb-12
├── Grid: grid md:grid-cols-2 lg:grid-cols-3 gap-6
└── Cards: Feature cards with accent-left-border pattern
```

### Full-Width Accent Section
```
Structure:
├── w-full bg-professional-blue/10 (light blue background)
├── Padding: py-20 md:py-28
├── Inner container: max-w-7xl mx-auto px-6
├── Heading: h2 text-charcoal
├── Content: Text, list items, or grid
└── CTA: Primary button at bottom
```

### Service Scenario Cards
```
├── Card with accent-left border
├── Icon: 24-32px, color: #0055E6, group-hover:scale-110
├── Title: h4
├── Description: Body text
├── Details (bullet points): sm text, charcoal/70
└── Group hover effects: shadow increase, icon scale
```

---

## 6. ICON SPECIFICATIONS

### Icon Sizing
```
Navigation: 16px
Card heading: 24px
Feature section: 32px
Hero section: 40-48px
Footer: 20px
```

### Icon Colors
- **Primary:** #0055E6 (Professional Blue)
- **Hover:** Scale 110%, Transition 0.2s
- **Disabled:** #A1A1AA (Neutral 400)
- **Secondary:** #1A2B4D (Deep Navy, minimal use)

---

## 7. ANIMATIONS & TRANSITIONS

### Standard Transitions
```css
Default duration: 0.2s - 0.3s
Easing: ease-out / ease-in-out
Apply to: colors, transforms, shadows
```

### Hover Effects
```css
Buttons: bg-color change + subtle scale (1.02)
Cards: shadow increase + translateY(-4px)
Icons: scale-110
Links: color change + underline appear
```

### Page Animations
```
Fade in: 0.3s ease-out, opacity 0→1
Stagger delay: 0.1s per child element
Load animation: Apply to page entry
```

---

## 8. BORDER & SHADOW SYSTEM

### Border Radius
```
xs: 2px (small buttons, inputs)
sm: 4px (buttons, form fields)
md: 6px (cards, medium elements)
lg: 8px (large cards, sections)
full: 9999px (badges, rounded avatars)
```

### Box Shadows
```
Subtle: 0 1px 2px rgba(0, 0, 0, 0.05)
Light: 0 1px 3px rgba(0, 0, 0, 0.1)
Medium: 0 4px 6px rgba(0, 0, 0, 0.1)
Elevated: 0 10px 15px rgba(0, 0, 0, 0.1)
Heavy: 0 20px 25px rgba(0, 0, 0, 0.15)
Focus ring: 0 0 0 3px rgba(0, 85, 230, 0.1)
```

---

## 9. RESPONSIVE DESIGN BREAKPOINTS

| Name | Width | Usage |
|------|-------|-------|
| **Mobile** | 320px - 639px | sm: breakpoint |
| **Tablet** | 640px - 767px | (no explicit breakpoint) |
| **Tablet Large** | 768px - 1023px | md: breakpoint |
| **Desktop** | 1024px - 1279px | lg: breakpoint |
| **Desktop Large** | 1280px+ | xl: breakpoint |

### Responsive Scaling
```
Typography: Scales 10-15% from mobile to desktop
Spacing: Sections: 48px (mobile) → 112px (desktop)
Containers: 100% width (mobile) → 1280px max (desktop)
Grids: 1 col (mobile) → 2 col (tablet) → 3 col (desktop)
```

---

## 10. COMMON PATTERNS & USAGE

### Call-to-Action Pattern
```
Position: Bottom of hero, middle of page, or sidebar
Button: Primary (Professional Blue, white text)
Text: Action-oriented ("Book Now", "Get Started", "Schedule")
Icon: Optional arrow → (margin-left: 8px)
```

### Trust/Social Proof Section
```
Title: "Why Trust Bridge Notary"
Background: Light (white or off-white)
Items: 3-4 key stats or testimonials
Cards: Accent-left border with icons
```

### Service/Feature Grid
```
Title: h2 or h3
Items: 3-4 per row (desktop), 1-2 per row (mobile)
Card style: Accent-left border
Icon: Professional Blue, 24-32px
Description: 2-3 lines max
Link: Optional "Learn More" link
```

### Navigation Bar
```
Logo: "Bridge Notary" text with small blue underline
Menu: Hidden on mobile (hamburger), visible on md+
Links: Text color charcoal, hover: professional-blue
Dropdown: Solutions menu with grouped items
CTA: Primary button "Book Appointment"
Phone: Display in header/navigation
```

---

## 11. ODOO-SPECIFIC GUIDELINES

### Theme Customization
- **Odoo Website Theme:** Ensure custom theme uses colors from palette
- **CSS Variables:** Define in website theme settings
- **Bootstrap 5:** Odoo uses BS5; override with custom CSS

### Page Building in Odoo
1. Use **Odoo's website builder** (drag-drop)
2. Apply brand colors via theme editor
3. Use Bootstrap grid system (row/col-md-6, etc.)
4. Custom CSS for specific components

### Form Integration
1. Create forms in **CRM → Website → Forms**
2. Style forms using theme settings
3. Auto-populate from leads on submission

### Asset Management
- Store images in `/public/images/`
- Use SVGs for logos/icons (scalable)
- Optimize images before upload
- Use relative paths in Odoo

---

## 12. ACCESSIBILITY REQUIREMENTS

### WCAG 2.1 AA Compliance
- **Color contrast:** 4.5:1 for text, 3:1 for graphics
- **Focus indicators:** Visible on all interactive elements
- **Alt text:** All images and icons must have descriptive alt text
- **Keyboard navigation:** All functions accessible via keyboard
- **Form labels:** Associated with input fields

### Testing Checklist
- [ ] Test color contrast (WebAIM tool)
- [ ] Keyboard navigation (Tab through all elements)
- [ ] Screen reader compatibility (NVDA/JAWS)
- [ ] Mobile responsiveness (320px - 1920px)
- [ ] Page load time < 3s

---

## 13. ASSETS & FILES PROVIDED

### SVG Assets
- `bridge-notary-logo.svg` - Logo with blue underline (use in header)
- `pinstripe-overlay.svg` - Subtle blue pinstripe pattern (backgrounds)

### Image Paths
```
/public/images/          - Logo, icons, patterns
/public/downloads/       - Downloadable resources (flyers, etc.)
```

---

## 14. QUICK REFERENCE - CSS CLASSES (For Odoo Custom CSS)

```css
/* Primary Button */
.btn-primary { 
  background: #0055E6; 
  color: white; 
  padding: 12px 24px;
  border-radius: 4px;
  transition: 0.2s;
}
.btn-primary:hover { background: #0049CC; }

/* Card with Accent Border */
.card-accent {
  background: white;
  border-left: 2px solid #0055E6;
  padding: 16px 24px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

/* Hero Section */
.hero-section {
  padding: 80px 24px;
  background: #F9F9F7;
  max-width: 1280px;
  margin: 0 auto;
}

/* Feature Grid */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  padding: 80px 24px;
}
```

---

## 15. COLOR EXPORT FOR ODOO THEME

**For Odoo Website Theme Editor:**
```
Primary Color: #0055E6
Secondary Color: #1A2B4D
Accent Color: #D4AF37
Text Color: #2C3E50
Light BG: #F9F9F7
Border Color: #E4E4E7
```

---

**Document Version:** 1.0
**Last Updated:** January 22, 2026
**Contact:** Development Team
