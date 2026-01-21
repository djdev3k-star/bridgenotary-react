/**
 * General Inquiry / Other Request Form Component
 * Allows users to submit general inquiries and other service requests
 */

import React, { useState } from 'react';
import {
  InputField,
  TextAreaField,
  SelectField,
  CheckboxField,
  ErrorAlert,
  SuccessAlert,
} from '@/components/forms/FormFields';
import { validateRequestForm, getFieldError, formatPhoneNumber } from '@/utils/formValidation';
import { submitRequestForm } from '@/services/formSubmissionService';
import type { GeneralInquiryFormData, FormFieldError } from '@/types/forms';

interface GeneralInquiryFormProps {
  onSuccess?: (message: string) => void;
  onError?: (error: string) => void;
}

const GeneralInquiryForm: React.FC<GeneralInquiryFormProps> = ({ onSuccess, onError }) => {
  const [formData, setFormData] = useState<Partial<GeneralInquiryFormData>>({
    full_name: '',
    email: '',
    phone: '',
    service_type: 'other',
    appointment_datetime: '',
    location: '',
    notes: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormFieldError[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checkboxElement = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checkboxElement.checked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error for this field when user starts typing
    if (errors.some(err => err.field === name)) {
      setErrors(errors.filter(err => err.field !== name));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors([]);
    setGeneralError(null);

    // Validate form
    const validation = validateRequestForm(formData as Partial<GeneralInquiryFormData>);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setLoading(true);

    try {
      // Format phone number
      const formattedPhone = formatPhoneNumber(formData.phone || '');

      const completeFormData: GeneralInquiryFormData = {
        full_name: formData.full_name || '',
        email: formData.email || '',
        phone: formattedPhone,
        service_type: formData.service_type as any,
        appointment_datetime: formData.appointment_datetime || undefined,
        location: formData.location || '',
        notes: formData.notes || '',
        consent: formData.consent || false,
      };

      const response = await submitRequestForm(completeFormData, 'general-inquiry');

      if (response.success) {
        const message = 'Thank you! Your inquiry has been submitted. We\'ll contact you soon.';
        setSuccess(message);
        if (onSuccess) onSuccess(message);

        // Reset form
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          service_type: 'other',
          appointment_datetime: '',
          location: '',
          notes: '',
          consent: false,
        });

        // Clear success message after 5 seconds
        setTimeout(() => setSuccess(null), 5000);
      } else {
        const errorMsg = response.error || 'Failed to submit form. Please try again.';
        setGeneralError(errorMsg);
        if (onError) onError(errorMsg);
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.';
      setGeneralError(errorMsg);
      if (onError) onError(errorMsg);
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} action={import.meta.env.VITE_ODOO_FORM_URL || 'http://localhost:8069/form/submit'} method="POST" className="bg-white border border-professional-blue/20 p-6 md:p-8" noValidate>
      {/* Hidden Token Field for Odoo validation */}
      <input type="hidden" name="token" value={import.meta.env.VITE_ODOO_FORM_TOKEN || ''} />

      {generalError && <ErrorAlert message={generalError} />}
      {success && <SuccessAlert message={success} />}

      {/* Personal Information Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-charcoal mb-4">Personal Information</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <InputField
            id="full_name"
            label="Full Name"
            name="full_name"
            type="text"
            value={formData.full_name || ''}
            onChange={handleInputChange}
            placeholder="First and last name"
            required
            error={getFieldError('full_name', errors)}
            disabled={loading}
          />

          <InputField
            id="email"
            label="Email Address"
            name="email"
            type="email"
            value={formData.email || ''}
            onChange={handleInputChange}
            placeholder="you@example.com"
            required
            error={getFieldError('email', errors)}
            disabled={loading}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <InputField
            id="phone"
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone || ''}
            onChange={handleInputChange}
            placeholder="(123) 456-7890"
            required
            error={getFieldError('phone', errors)}
            disabled={loading}
          />

          <SelectField
            id="service_type"
            label="Service Type"
            name="service_type"
            value={formData.service_type || 'other'}
            onChange={handleInputChange}
            options={[
              { value: 'notary_general', label: 'Notary General' },
              { value: 'loan_signing', label: 'Loan Signing' },
              { value: 'apostille', label: 'Apostille' },
              { value: 'courier', label: 'Courier' },
              { value: 'other', label: 'Other' },
            ]}
            required
            error={getFieldError('service_type', errors)}
            disabled={loading}
          />
        </div>
      </div>

      {/* Message Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-charcoal mb-4">Message</h3>

        <TextAreaField
          id="notes"
          label="Notes / Instructions"
          name="notes"
          value={formData.notes || ''}
          onChange={handleInputChange}
          placeholder="Please describe your inquiry or request in detail..."
          rows={6}
          disabled={loading}
        />
      </div>

      {/* Optional Details Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-charcoal mb-4">Optional Details</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <InputField
            id="appointment_datetime"
            label="Preferred Contact Date & Time"
            name="appointment_datetime"
            type="datetime-local"
            value={formData.appointment_datetime || ''}
            onChange={handleInputChange}
            disabled={loading}
          />

          <TextAreaField
            id="location"
            label="Location / Service Area"
            name="location"
            value={formData.location || ''}
            onChange={handleInputChange}
            placeholder="Location where service would be needed (if applicable)"
            rows={3}
            disabled={loading}
          />
        </div>
      </div>

      {/* Consent Section */}
      <div className="mb-6 p-4 bg-gray-50 border border-gray-200">
        <CheckboxField
          id="consent"
          name="consent"
          label={
            <>
              I agree to the{' '}
              <a href="/terms" className="text-professional-blue hover:underline" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>
              {' '}and{' '}
              <a href="/privacy" className="text-professional-blue hover:underline" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </>
          }
          checked={formData.consent || false}
          onChange={handleInputChange}
          required
          error={getFieldError('consent', errors)}
          disabled={loading}
        />
      </div>

      {/* Submit Button */}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={loading}
          className="button-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-max"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send Inquiry
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default GeneralInquiryForm;
