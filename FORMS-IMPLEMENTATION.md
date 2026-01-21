# Request Forms Implementation

This document describes the new request form system for Bridge Notary React, including three specialized forms for notary requests, courier services, and general inquiries.

## Overview

The form system provides:

- **Three specialized request forms** matching different service types
- **Comprehensive validation** with user-friendly error messages
- **Responsive design** matching the existing Bridge Notary theme
- **Odoo CRM integration** for lead creation and tracking
- **TypeScript type safety** throughout the stack

## Forms

### 1. Notary Request Form
**Route:** `/request/notary`

Allows users to request notary services with fields for:
- Personal information (name, email, phone)
- Service type selection
- Document type (dropdown with options like General, Power of Attorney, Estate & Trust, etc.)
- Preferred appointment date/time
- Physical location for in-person notarization
- Additional notes/instructions
- Terms & privacy policy consent

### 2. Courier / Delivery Request Form
**Route:** `/request/courier`

Allows users to request courier and document delivery services with fields for:
- Personal information (name, email, phone)
- Pickup address
- Delivery address (with visual "to" separator)
- Service date & time needed
- Special handling instructions
- Terms & privacy policy consent

### 3. General Inquiry Form
**Route:** `/request/inquiry`

A flexible form for general questions and custom requests with fields for:
- Personal information (name, email, phone)
- Inquiry type (dropdown)
- Subject line
- Detailed message (larger text area)
- Optional preferred contact date/time
- Optional service location
- Terms & privacy policy consent

## Architecture

### File Structure

```
src/
├── components/forms/
│   ├── FormFields.tsx           # Reusable form field components
│   ├── NotaryRequestForm.tsx    # Notary request form component
│   ├── CourierRequestForm.tsx   # Courier request form component
│   ├── GeneralInquiryForm.tsx   # General inquiry form component
│   └── index.ts                 # Form component exports
├── pages/
│   ├── notary-request/
│   │   └── index.tsx           # Notary request page with hero and CTA
│   ├── courier-request/
│   │   └── index.tsx           # Courier request page with hero and CTA
│   └── general-inquiry/
│       └── index.tsx           # General inquiry page with FAQ section
├── services/
│   └── formSubmissionService.ts # API submission and Netlify Forms fallback
├── types/
│   └── forms.ts                # TypeScript interfaces and types
└── utils/
    └── formValidation.ts       # Validation functions and utilities
```

### Component Hierarchy

```
FormPage (e.g., NotaryRequestPage)
├── Hero Section
├── Form Component (NotaryRequestForm, CourierRequestForm, GeneralInquiryForm)
│   ├── InputField
│   ├── TextAreaField
│   ├── SelectField
│   ├── CheckboxField
│   ├── ErrorAlert
│   └── SuccessAlert
└── Info/FAQ Section
```

## Form Field Types

### InputField
- Text, email, tel, date, datetime-local inputs
- Props: `id`, `label`, `name`, `type`, `value`, `onChange`, `placeholder`, `required`, `error`, `disabled`
- Error display with icon
- Mobile-friendly styling

### TextAreaField
- Multi-line text input
- Props: `id`, `label`, `name`, `value`, `onChange`, `placeholder`, `required`, `error`, `rows`, `disabled`
- Auto-expanding rows
- Consistent error handling

### SelectField
- Dropdown selection
- Props: `id`, `label`, `name`, `value`, `onChange`, `options`, `required`, `error`, `disabled`
- Typed options array

### CheckboxField
- Single checkbox with label
- Props: `id`, `name`, `label`, `checked`, `onChange`, `required`, `error`, `disabled`
- Inline layout with optional required indicator
- Supports React nodes in label (e.g., links to Terms/Privacy)

## Validation

### Validation Rules

All forms enforce these required field validations:

| Field | Validation | Error Message |
|-------|-----------|---|
| Full Name | Non-empty | "Full name is required" |
| Email | Non-empty + valid format | "Email is required" / "Please enter a valid email address" |
| Phone | Non-empty + valid US format | "Phone number is required" / "Please enter a valid US phone number" |
| Service Type | Non-empty | "Service type is required" |
| Consent | Must be checked | "You must agree to the terms and privacy policy" |
| Appointment DateTime (optional) | Valid ISO date if provided | "Please enter a valid date and time" |

### Validation Functions

Located in `src/utils/formValidation.ts`:

- `isValidEmail(email: string): boolean` - Checks email format
- `isValidPhone(phone: string): boolean` - Validates US phone numbers with flexible formatting
- `isValidRequiredString(value: string): boolean` - Checks non-empty strings
- `formatPhoneNumber(phone: string): string` - Formats phone numbers to consistent format
- `validateRequestForm(formData: Partial<RequestFormData>): FormValidationState` - Validates entire form
- `getFieldError(field: string, errors: FormFieldError[]): string | null` - Gets error for specific field
- `hasFieldError(field: string, errors: FormFieldError[]): boolean` - Checks if field has error

## Form Submission

### Submission Flow

1. **User clicks Submit**
2. **Frontend validation** checks all required fields and formats
3. **If invalid** → Display error messages for failed validations
4. **If valid** → POST request to `/api/request-form`
5. **Show loading state** while waiting for response
6. **On success** → Display confirmation message and reset form
7. **On error** → Display error alert with message

### Submission Service

Located in `src/services/formSubmissionService.ts`:

```typescript
export const submitRequestForm = async (
  formData: RequestFormData,
  formType: 'notary' | 'courier' | 'general-inquiry'
): Promise<FormSubmissionResponse>
```

Maps form data to Odoo CRM fields:

| Frontend Field | Odoo Field |
|---|---|
| name | name |
| email | email_from |
| phone | phone |
| service_type | service_type or tag_ids |
| notes | description |
| consent | x_consent (boolean) |
| appointment_datetime | x_appointment_datetime |
| location | x_location |
| document_type (notary) | x_document_type |
| pickup_address (courier) | x_pickup_address |
| delivery_address (courier) | x_delivery_address |
| service_date (courier) | x_service_date |
| subject (inquiry) | x_subject |

### Fallback: Netlify Forms

If backend API endpoint is unavailable, forms can submit via Netlify Forms. The hidden form declarations for this are pre-configured in `src/App.tsx`:

```tsx
<form name="notary-request" method="POST" data-netlify="true" hidden>
<form name="courier-request" method="POST" data-netlify="true" hidden>
<form name="general-inquiry" method="POST" data-netlify="true" hidden>
```

## Styling

All forms use the existing Bridge Notary design system:

- **Color scheme:** Professional-blue (#0055E6) for CTAs and accents
- **Typography:** Charcoal (#2C3E50) for text, with proper hierarchy
- **Spacing:** Consistent padding and margins matching site standard
- **Responsive:** Mobile-first approach with `md:` breakpoints
- **Borders:** Light professional-blue borders with hover effects
- **Validation feedback:** Color-coded error messages in red with icons
- **Success feedback:** Green success alerts with checkmark icon

### CSS Classes Used

- `.button-primary` - Main submit button (blue with hover effect)
- `.button-outline` - Alternative button styling
- `border-professional-blue/20` - Light borders on inputs
- `focus:ring-professional-blue/20` - Focus states

## Environment Variables

No specific environment variables are required, but these are recommended:

```env
# Backend API endpoint for form submissions (optional)
VITE_API_URL=https://api.example.com

# Feature flags (existing)
VITE_ENABLE_APOSTILLE=true
VITE_ENABLE_RON=true
VITE_ENABLE_LOAN_SIGNING=true
```

## Types & Interfaces

Located in `src/types/forms.ts`:

```typescript
// Service types
type ServiceType = 'notary' | 'loan-signing' | 'apostille' | 'courier' | 'other';
type RequestFormType = 'notary' | 'courier' | 'general-inquiry';

// Base form data (all forms)
interface BaseRequestFormData {
  name: string;
  email: string;
  phone: string;
  service_type: ServiceType;
  consent: boolean;
  appointment_datetime?: string;
  location?: string;
  notes?: string;
}

// Specific form types extend base
interface NotaryRequestFormData extends BaseRequestFormData
interface CourierRequestFormData extends BaseRequestFormData
interface GeneralInquiryFormData extends BaseRequestFormData
```

## Backend Integration

### Expected Endpoint

`POST /api/request-form`

**Request Body Example:**
```json
{
  "name": "John Doe",
  "email_from": "john@example.com",
  "phone": "(123) 456-7890",
  "service_type": "notary",
  "description": "Need general notarization",
  "x_consent": true,
  "x_appointment_datetime": "2026-01-25T14:00",
  "x_location": "123 Main St, Dallas, TX 75201",
  "x_form_type": "notary",
  "x_document_type": "general"
}
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Form submitted successfully",
  "lead_id": "12345"
}
```

Or on error:
```json
{
  "success": false,
  "message": "Failed to submit form",
  "error": "Reason for failure"
}
```

### Odoo Integration

The backend should:

1. Create a new `crm.lead` record in Odoo
2. Map all fields according to the table in "Submission Service" section above
3. Set appropriate stage (e.g., "New Lead")
4. Return the created lead ID in response

## Testing

### Manual Testing Checklist

- [ ] Test each form page loads correctly
- [ ] Test form validation (missing required fields)
- [ ] Test email validation
- [ ] Test phone number validation (various formats)
- [ ] Test phone number formatting
- [ ] Test successful form submission
- [ ] Test error handling (failed API request)
- [ ] Test success message display and auto-clear
- [ ] Test form reset after successful submission
- [ ] Test responsive design on mobile/tablet/desktop
- [ ] Test accessibility (keyboard navigation, labels, ARIA)
- [ ] Test error clearing when user starts typing

### Test Data

**Valid Phone Numbers:**
- 1234567890
- (123) 456-7890
- 123-456-7890
- +1 123 456 7890

**Invalid Phone Numbers:**
- 123456789 (too short)
- 12345678901 (too long)
- abc-def-ghij (non-numeric)

## Accessibility Features

- All form fields have associated `<label>` elements
- Required fields marked with asterisk (*)
- Error messages associated with fields
- Keyboard navigation supported
- Focus states visible
- Color not sole indicator of errors (icons used too)
- Sufficient contrast ratios met

## Future Enhancements

- [ ] CAPTCHA integration for spam prevention
- [ ] Pre-fill for logged-in users
- [ ] Multi-step form wizard for complex requests
- [ ] File upload support for document attachments
- [ ] SMS notifications for form submission confirmations
- [ ] Form field conditional visibility
- [ ] Real-time validation debouncing
- [ ] Auto-save draft to localStorage

## Troubleshooting

### Forms not submitting
- Check browser console for errors
- Verify API endpoint is configured correctly
- Check network tab for failed requests
- Ensure CORS is configured on backend

### Validation errors not clearing
- Validation errors should clear when user starts typing
- If not working, check `handleInputChange` in form component

### Phone number formatting issues
- Try using the `formatPhoneNumber()` utility function
- Check that phone input is using `tel` type

### Styles not applying
- Ensure TailwindCSS is properly configured
- Check that color tokens (professional-blue, charcoal) are defined in tailwind.config.js

## Branch Information

**Branch:** `feature/request-forms`

This implementation is complete and ready for integration with the Odoo backend.
