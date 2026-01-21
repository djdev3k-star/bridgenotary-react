/**
 * Form validation utilities for request forms
 */

import type { RequestFormData, FormValidationState, FormFieldError } from '@/types/forms';

/**
 * Email validation regex pattern
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Phone validation regex for US numbers (flexible formatting)
 * Accepts: 1234567890, (123) 456-7890, 123-456-7890, +1 123 456 7890
 */
const PHONE_REGEX = /^(\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email);
};

/**
 * Validate phone format (US numbers)
 */
export const isValidPhone = (phone: string): boolean => {
  return PHONE_REGEX.test(phone.trim());
};

/**
 * Validate required string field
 */
export const isValidRequiredString = (value: string): boolean => {
  return value.trim().length > 0;
};

/**
 * Format phone number to consistent format
 * Input: "1234567890" or "(123) 456-7890"
 * Output: "(123) 456-7890"
 */
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  } else if (cleaned.length === 11 && cleaned[0] === '1') {
    return `(${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  
  return phone; // Return original if unable to format
};

/**
 * Validate required fields in form data
 * Returns validation state with errors if any
 */
export const validateRequestForm = (formData: Partial<RequestFormData>): FormValidationState => {
  const errors: FormFieldError[] = [];

  // Validate full name (required)
  if (!formData.full_name || !isValidRequiredString(formData.full_name)) {
    errors.push({
      field: 'full_name',
      message: 'Full name is required'
    });
  }

  // Validate email (required & format)
  if (!formData.email || !isValidRequiredString(formData.email)) {
    errors.push({
      field: 'email',
      message: 'Email is required'
    });
  } else if (!isValidEmail(formData.email)) {
    errors.push({
      field: 'email',
      message: 'Please enter a valid email address'
    });
  }

  // Validate phone (required & format)
  if (!formData.phone || !isValidRequiredString(formData.phone)) {
    errors.push({
      field: 'phone',
      message: 'Phone number is required'
    });
  } else if (!isValidPhone(formData.phone)) {
    errors.push({
      field: 'phone',
      message: 'Please enter a valid US phone number'
    });
  }

  // Validate service type (required)
  if (!formData.service_type) {
    errors.push({
      field: 'service_type',
      message: 'Service type is required'
    });
  }

  // Validate consent (required)
  if (!formData.consent) {
    errors.push({
      field: 'consent',
      message: 'You must agree to the terms and privacy policy'
    });
  }

  // Validate date format if provided (should be ISO date string)
  if (formData.appointment_datetime && formData.appointment_datetime !== '') {
    const dateObj = new Date(formData.appointment_datetime);
    if (isNaN(dateObj.getTime())) {
      errors.push({
        field: 'appointment_datetime',
        message: 'Please enter a valid date and time'
      });
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Get error message for a specific field
 */
export const getFieldError = (field: string, errors: FormFieldError[]): string | null => {
  const error = errors.find(e => e.field === field);
  return error ? error.message : null;
};

/**
 * Check if field has error
 */
export const hasFieldError = (field: string, errors: FormFieldError[]): boolean => {
  return errors.some(e => e.field === field);
};
