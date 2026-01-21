/**
 * Form submission service
 * Handles POST requests to Odoo backend via Netlify Function
 */

import type { RequestFormData, FormSubmissionResponse } from '@/types/forms';

/**
 * Get Odoo form submission endpoint
 * Uses Netlify Function as proxy to Odoo API
 */
const getOdooEndpoint = (): string => {
  // In production, use Netlify function URL
  if (import.meta.env.PROD) {
    return '/.netlify/functions/odoo-form-submit';
  }
  
  // In development, use local Netlify dev server
  return 'http://localhost:8888/.netlify/functions/odoo-form-submit';
};

/**
 * Get form submission token for Odoo validation
 */
const getFormToken = (): string => {
  return import.meta.env.VITE_ODOO_FORM_TOKEN || '';
};

/**
 * Submit a form to Odoo CRM via Netlify Function
 * Creates a lead in Odoo with standardized fields
 */
export const submitRequestForm = async (
  formData: RequestFormData,
  formType: 'notary' | 'courier' | 'general-inquiry'
): Promise<FormSubmissionResponse> => {
  try {
    const endpoint = getOdooEndpoint();
    const token = getFormToken();

    // Prepare payload for Odoo
    const odooPayload = {
      // Security token
      token,
      
      // Form metadata
      form_type: formType,
      
      // Standardized fields (matches Odoo schema)
      full_name: formData.full_name,
      email: formData.email,
      phone: formData.phone,
      service_type: formData.service_type,
      notes: formData.notes || '',
      consent: formData.consent,
      
      // Optional fields
      appointment_datetime: formData.appointment_datetime || null,
      location: formData.location || '',
    };

    console.log('Submitting form to Odoo:', { formType, endpoint });

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Form-Token': token,
      },
      body: JSON.stringify(odooPayload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Server responded with status ${response.status}`);
    }

    const data = await response.json() as FormSubmissionResponse;

    console.log('Form submission response:', data);

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
      message: 'Failed to submit form. Please try again or contact us directly.',
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
