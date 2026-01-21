/**
 * Form types and interfaces for Odoo integration
 * Maps frontend form fields to Odoo CRM lead fields
 */

export type ServiceType = 'notary_general' | 'loan_signing' | 'apostille' | 'courier' | 'other';
export type RequestFormType = 'notary' | 'courier' | 'general-inquiry';

/**
 * Base form data structure for all request forms
 * Maps to Odoo crm.lead model
 */
export interface BaseRequestFormData {
  // Required fields
  full_name: string;               // Maps to: full_name (Odoo)
  email: string;                   // Maps to: email
  phone: string;                   // Maps to: phone
  service_type: ServiceType;       // Maps to: service_type (Odoo)
  consent: boolean;                // Maps to: consent (boolean)

  // Optional fields
  appointment_datetime?: string;   // Maps to: appointment_datetime (ISO format)
  location?: string;               // Maps to: location
  notes?: string;                  // Maps to: notes
}

/**
 * Notary-specific request form
 */
export interface NotaryRequestFormData extends BaseRequestFormData {
  service_type: 'notary_general';
}

/**
 * Courier/Delivery request form
 */
export interface CourierRequestFormData extends BaseRequestFormData {
  service_type: 'courier';
}

/**
 * General inquiry/other request form
 */
export interface GeneralInquiryFormData extends BaseRequestFormData {
  service_type: 'other';
}

// Union type for any request form
export type RequestFormData = NotaryRequestFormData | CourierRequestFormData | GeneralInquiryFormData;

/**
 * Form submission response from backend
 */
export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  lead_id?: string;  // Odoo CRM lead ID if created
  error?: string;
}

/**
 * Form field validation error
 */
export interface FormFieldError {
  field: string;
  message: string;
}

/**
 * Validation state for forms
 */
export interface FormValidationState {
  isValid: boolean;
  errors: FormFieldError[];
}
