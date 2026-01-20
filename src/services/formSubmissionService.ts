/**
 * Form submission service
 * Handles POST requests to Odoo backend
 */

import type { RequestFormData, FormSubmissionResponse } from '@/types/forms';

/**
 * Default API endpoint for form submissions
 * Should be configured via environment variable
 */
const getApiEndpoint = (): string => {
  return import.meta.env.VITE_API_URL || '';
};

/**
 * Submit a form to the backend
 * Maps form data to Odoo CRM lead fields
 */
export const submitRequestForm = async (
  formData: RequestFormData,
  formType: 'notary' | 'courier' | 'general-inquiry'
): Promise<FormSubmissionResponse> => {
  try {
    const endpoint = `${getApiEndpoint()}/api/request-form`;

    // Map form data to Odoo fields
    const odooPayload = {
      // Standard fields
      name: formData.name,
      email_from: formData.email,
      phone: formData.phone,
      service_type: formData.service_type,
      description: formData.notes || '',
      x_consent: formData.consent,

      // Custom fields
      x_appointment_datetime: formData.appointment_datetime || null,
      x_location: formData.location || '',
      x_form_type: formType,

      // Form-specific fields
      ...(formType === 'notary' && 'document_type' in formData && {
        x_document_type: (formData as any).document_type,
      }),
      ...(formType === 'courier' && {
        x_pickup_address: (formData as any).pickup_address || '',
        x_delivery_address: (formData as any).delivery_address || '',
        x_service_date: (formData as any).service_date || null,
      }),
      ...(formType === 'general-inquiry' && 'subject' in formData && {
        x_subject: (formData as any).subject || '',
      }),
    };

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(odooPayload),
    });

    if (!response.ok) {
      throw new Error(`Server responded with status ${response.status}`);
    }

    const data = await response.json() as FormSubmissionResponse;

    return {
      success: data.success ?? false,
      message: data.message ?? 'Form submitted successfully',
      lead_id: data.lead_id,
      error: data.error,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';

    console.error('Form submission error:', error);

    return {
      success: false,
      message: 'Failed to submit form',
      error: errorMessage,
    };
  }
};

/**
 * Submit via Netlify Forms as fallback (existing pattern)
 * This maintains compatibility with current deployment
 */
export const submitViaNetlifyForms = (
  formName: string,
  formData: Record<string, string | boolean>
): Promise<Response> => {
  const formDataObj = new FormData();
  formDataObj.append('form-name', formName);

  Object.entries(formData).forEach(([key, value]) => {
    formDataObj.append(key, String(value));
  });

  return fetch('/', {
    method: 'POST',
    body: formDataObj,
  });
};
