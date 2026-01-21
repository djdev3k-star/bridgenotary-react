# Form System Architecture Overview

## Component Hierarchy

```
┌─────────────────────────────────────────────────────────────┐
│                      App Router (App.tsx)                   │
│  ├── /request/notary    → NotaryRequestPage                 │
│  ├── /request/courier   → CourierRequestPage                │
│  └── /request/inquiry   → GeneralInquiryPage                │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│              Form Page (Hero + Form + CTA)                  │
│  ├── Hero Section (title, description)                      │
│  ├── Form Component                                         │
│  │   ├── Personal Info Section                              │
│  │   │   ├── InputField (name)                              │
│  │   │   ├── InputField (email)                             │
│  │   │   ├── InputField (phone)                             │
│  │   │   └── SelectField (service type)                     │
│  │   ├── Service Details Section                            │
│  │   │   ├── SelectField (document type)                    │
│  │   │   ├── InputField (datetime)                          │
│  │   │   └── TextAreaField (location/notes)                 │
│  │   ├── Additional Info Section                            │
│  │   │   └── TextAreaField (notes)                          │
│  │   ├── Consent Section                                    │
│  │   │   └── CheckboxField (Terms & Privacy)               │
│  │   ├── Submit Button                                      │
│  │   ├── ErrorAlert (if validation fails)                   │
│  │   └── SuccessAlert (on submission success)               │
│  └── Info/FAQ Section                                       │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow

```
User Input
    ↓
handleInputChange()
    ↓
Update formData state
    ↓
Clear error for field (if exists)
    ↓
User Clicks Submit
    ↓
e.preventDefault()
    ↓
validateRequestForm(formData)
    ↓
    ├─ Valid? → Proceed to submission
    │   ↓
    │   formatPhoneNumber()
    │   ↓
    │   submitRequestForm(formData, formType)
    │   ↓
    │   POST /api/request-form
    │   ↓
    │   ├─ Success → Show success alert, reset form
    │   └─ Error → Show error alert
    │
    └─ Invalid? → Display errors in form
```

## Form Submission Flow

```
┌──────────────────────────────────────────┐
│    User Submits Form (NotaryForm.tsx)    │
└──────────────────────────────────────────┘
              ↓
┌──────────────────────────────────────────┐
│    Validate with formValidation.ts       │
│  • Check required fields                 │
│  • Validate email format                 │
│  • Validate phone format                 │
│  • Check consent                         │
└──────────────────────────────────────────┘
              ↓
    ┌─────────┴─────────┐
    ↓                   ↓
 VALID              INVALID
    ↓                   ↓
FORMAT           SHOW ERRORS
PHONE                   │
    ↓                   └─── Wait for user fixes
SUBMIT TO                   │
API                    Handle input changes
    ↓                       │
[Loading state]         Clear error for field
    ↓
[API Response]
    ↓
    ├── Success → Show "Submitted!" → Reset form
    ├── Error → Show error message → Allow retry
    └── Network error → Show "Try again" message
```

## Validation Flow

```
Input: Full Name
├─ Empty? → "Full name is required"
└─ Not empty? → ✓ Valid

Input: Email
├─ Empty? → "Email is required"
├─ Invalid format? → "Please enter a valid email address"
└─ Valid format? → ✓ Valid

Input: Phone
├─ Empty? → "Phone number is required"
├─ Invalid format? → "Please enter a valid US phone number"
│  (Checks: (123) 456-7890, 123-456-7890, +1 123 456 7890, etc.)
└─ Valid format? → ✓ Format → "(123) 456-7890"

Input: Service Type
├─ Empty? → "Service type is required"
└─ Selected? → ✓ Valid

Input: Consent Checkbox
├─ Unchecked? → "You must agree to the terms..."
└─ Checked? → ✓ Valid

Input: DateTime (optional)
├─ Provided AND Invalid? → "Please enter a valid date and time"
└─ Provided AND Valid? → ✓ Valid (ISO format)
```

## Error State Management

```
Form State:
{
  name: "John Doe",
  email: "invalid-email",
  phone: "(123) 456",
  ...
}

Errors State:
[
  { field: "email", message: "Please enter a valid email address" },
  { field: "phone", message: "Please enter a valid US phone number" },
  { field: "consent", message: "You must agree to the terms..." }
]

Rendering:
├─ ErrorAlert component shows first field error
├─ Email field shows error with red border + error message
├─ Phone field shows error with red border + error message
└─ Consent field shows error with red border + error message

User Types in Email Field:
├─ onChange triggers handleInputChange()
├─ New email state updates
├─ Remove email error from errors array
├─ Field error disappears
└─ User can retry
```

## Type System

```typescript
// Base interface for all forms
BaseRequestFormData {
  name: string                    // Required
  email: string                   // Required
  phone: string                   // Required
  service_type: ServiceType       // Required: 'notary' | 'courier' | 'other'
  consent: boolean                // Required
  appointment_datetime?: string   // Optional
  location?: string               // Optional
  notes?: string                  // Optional
}

// Specialized form types
NotaryRequestFormData extends BaseRequestFormData {
  service_type: 'notary'
  document_type?: string
}

CourierRequestFormData extends BaseRequestFormData {
  service_type: 'courier'
  pickup_address?: string
  delivery_address?: string
  service_date?: string
}

GeneralInquiryFormData extends BaseRequestFormData {
  service_type: 'other'
  subject?: string
}

// Union type for flexibility
type RequestFormData = NotaryRequestFormData | CourierRequestFormData | GeneralInquiryFormData
```

## API Integration

```
Frontend                          Backend
   │                               │
   │  POST /api/request-form       │
   ├──────────────────────────────>│
   │  {                            │
   │    name: "John Doe"           │
   │    email_from: "j@ex.com"     │
   │    phone: "(123) 456-7890"    │
   │    service_type: "notary"     │
   │    description: "..."         │
   │    x_consent: true            │
   │    x_appointment_datetime: "..." │
   │    x_location: "..."          │
   │    x_form_type: "notary"      │
   │  }                            │
   │                               │
   │                 Create crm.lead│
   │                 Map fields    │
   │                 Validate      │
   │                               │
   │  {                            │
   │    success: true              │
   │    message: "..."             │
   │    lead_id: "CRM-12345"       │
   │  }                            │
   │<──────────────────────────────┤
   │  Show success              Execute workflow
   │  Reset form                Create tasks
   │                            Send notifications
```

## Component Reusability

```
FormFields.tsx provides:

InputField
├─ Used by: All 3 form components
├─ Variants: text, email, tel, date, datetime-local
└─ Reusable in: Future forms, other pages

TextAreaField
├─ Used by: All 3 form components (location, notes, message)
└─ Reusable in: Contact form, feedback forms

SelectField
├─ Used by: All 3 form components
├─ Dynamic options support
└─ Reusable in: Any dropdown field

CheckboxField
├─ Used by: All 3 form components (consent)
├─ Supports React nodes in labels (links!)
└─ Reusable in: Terms, agreements, preferences

ErrorAlert / SuccessAlert
├─ Used by: All 3 form components
├─ Consistent styling
└─ Reusable in: Any form or modal

This design allows easy extension to other forms!
```

## File Dependencies

```
App.tsx
├─ imports: NotaryRequestPage, CourierRequestPage, GeneralInquiryPage
│
NotaryRequestPage
├─ imports: NotaryRequestForm
│
NotaryRequestForm.tsx
├─ imports: FormFields (InputField, TextAreaField, SelectField, CheckboxField, ErrorAlert, SuccessAlert)
├─ imports: formValidation (validateRequestForm, getFieldError, formatPhoneNumber)
├─ imports: formSubmissionService (submitRequestForm)
├─ imports: forms.types (NotaryRequestFormData, FormFieldError)
│
formValidation.ts
├─ No external dependencies (pure utilities)
│
formSubmissionService.ts
├─ imports: forms.types (RequestFormData, FormSubmissionResponse)
│
forms.types
├─ No external dependencies (pure types)
```

## Styling System

```
All Forms Use:

Colors:
├─ Text: charcoal (#2C3E50)
├─ Primary CTA: professional-blue (#0055E6)
├─ Hover: professional-blue/90
├─ Error: red-600
├─ Success: green-700
└─ Borders: professional-blue/20

Typography:
├─ Headings: font-bold text-lg md:text-3xl
├─ Labels: font-semibold text-sm
├─ Body: text-charcoal text-base
└─ Help text: text-charcoal/70 text-sm

Spacing:
├─ Section margins: mb-6
├─ Field gaps: gap-6
├─ Padding: p-6 md:p-8
└─ Button: px-6 py-3

Responsive:
├─ Mobile: Single column forms
├─ Tablet+: Two column grids (md:grid-cols-2)
└─ Large: Three column cards (lg:grid-cols-3)
```

---

This architecture ensures:
✅ **Reusability** - Components used across all forms
✅ **Maintainability** - Clear separation of concerns
✅ **Scalability** - Easy to add new forms
✅ **Type Safety** - Full TypeScript coverage
✅ **User Experience** - Real-time validation, clear errors
✅ **Accessibility** - Proper labels, ARIA, keyboard navigation
