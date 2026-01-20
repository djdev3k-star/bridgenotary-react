/**
 * Form types and interfaces for Odoo integration
 * Maps frontend form fields to Odoo CRM lead fields
 */

export type ServiceType = 'notary' | 'loan-signing' | 'apostille' | 'courier' | 'other';
export type RequestFormType = 'notary' | 'courier' | 'general-inquiry';

/**
 * Base form data structure for all request forms
 * Maps to Odoo crm.lead model
 */
export interface BaseRequestFormData {
  // Required fields
  name: string;                    // Maps to: name
  email: string;                   // Maps to: email_from
  phone: string;                   // Maps to: phone
  service_type: ServiceType;       // Maps to: tag_ids or custom service_type field
  consent: boolean;                // Maps to: x_consent (boolean)

  // Optional fields
  appointment_datetime?: string;   // Maps to: x_appointment_datetime (ISO format)
  location?: string;               // Maps to: x_location
  notes?: string;                  // Maps to: description
}

/**
 * Notary-specific request form
 */
export interface NotaryRequestFormData extends BaseRequestFormData {
  service_type: 'notary';
  document_type?: string;          // Type of document to be notarized
}

/**
 * Courier/Delivery request form
 */
export interface CourierRequestFormData extends BaseRequestFormData {
  service_type: 'courier';
  pickup_address?: string;         // Address for pickup (override location field)
  delivery_address?: string;       // Address for delivery
  service_date?: string;           // When service is needed (ISO format)
}

/**
 * General inquiry/other request form
 */
export interface GeneralInquiryFormData extends BaseRequestFormData {
  service_type: 'other';
  subject?: string;                // Subject of inquiry
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
