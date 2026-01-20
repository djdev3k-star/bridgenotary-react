/**
 * Notary Request Form Component
 * Allows users to submit notary service requests
 */

import React, { useState } from 'react';
import {
  InputField,
  TextAreaField,
  SelectField,
  CheckboxField,
  ErrorAlert,
  SuccessAlert,
  LoadingSpinner,
} from '@/components/forms/FormFields';
import { validateRequestForm, getFieldError, formatPhoneNumber } from '@/utils/formValidation';
import { submitRequestForm } from '@/services/formSubmissionService';
import type { NotaryRequestFormData, FormFieldError } from '@/types/forms';

interface NotaryRequestFormProps {
  onSuccess?: (message: string) => void;
  onError?: (error: string) => void;
}

const NotaryRequestForm: React.FC<NotaryRequestFormProps> = ({ onSuccess, onError }) => {
  const [formData, setFormData] = useState<Partial<NotaryRequestFormData>>({
    name: '',
    email: '',
    phone: '',
    service_type: 'notary',
    document_type: '',
    appointment_datetime: '',
    location: '',
    notes: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormFieldError[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);

  const documentTypeOptions = [
    { value: '', label: 'Select a document type' },
    { value: 'general', label: 'General Document' },
    { value: 'power-of-attorney', label: 'Power of Attorney' },
    { value: 'estate-trust', label: 'Estate & Trust Documents' },
    { value: 'witness', label: 'Witness Services' },
    { value: 'i9-verification', label: 'I-9 Verification' },
    { value: 'other', label: 'Other' },
  ];

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
    const validation = validateRequestForm(formData as Partial<NotaryRequestFormData>);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setLoading(true);

    try {
      // Format phone number
      const formattedPhone = formatPhoneNumber(formData.phone || '');

      const completeFormData: NotaryRequestFormData = {
        name: formData.name || '',
        email: formData.email || '',
        phone: formattedPhone,
        service_type: 'notary',
        document_type: formData.document_type || '',
        appointment_datetime: formData.appointment_datetime || undefined,
        location: formData.location || '',
        notes: formData.notes || '',
        consent: formData.consent || false,
      };

      const response = await submitRequestForm(completeFormData, 'notary');

      if (response.success) {
        const message = 'Thank you! Your notary request has been submitted. We\'ll contact you soon to confirm.';
        setSuccess(message);
        if (onSuccess) onSuccess(message);

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service_type: 'notary',
          document_type: '',
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
    <form onSubmit={handleSubmit} className="bg-white border border-professional-blue/20 p-6 md:p-8" noValidate>
      {generalError && <ErrorAlert message={generalError} />}
      {success && <SuccessAlert message={success} />}

      {/* Personal Information Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-charcoal mb-4">Personal Information</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <InputField
            id="name"
            label="Full Name"
            name="name"
            type="text"
            value={formData.name || ''}
            onChange={handleInputChange}
            placeholder="First and last name"
            required
            error={getFieldError('name', errors)}
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
            value={formData.service_type || 'notary'}
            onChange={handleInputChange}
            options={[
              { value: 'notary', label: 'Notary Services' },
              { value: 'loan-signing', label: 'Loan Signing' },
              { value: 'apostille', label: 'Apostille' },
            ]}
            required
            error={getFieldError('service_type', errors)}
            disabled={loading}
          />
        </div>
      </div>

      {/* Service Details Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-charcoal mb-4">Service Details</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <SelectField
            id="document_type"
            label="Document Type"
            name="document_type"
            value={formData.document_type || ''}
            onChange={handleInputChange}
            options={documentTypeOptions}
            placeholder="Select a document type"
            disabled={loading}
          />

          <InputField
            id="appointment_datetime"
            label="Preferred Date & Time"
            name="appointment_datetime"
            type="datetime-local"
            value={formData.appointment_datetime || ''}
            onChange={handleInputChange}
            error={getFieldError('appointment_datetime', errors)}
            disabled={loading}
          />
        </div>

        <TextAreaField
          id="location"
          label="Location / Address"
          name="location"
          value={formData.location || ''}
          onChange={handleInputChange}
          placeholder="Where should we meet for the notarization? (In-person only)"
          rows={3}
          disabled={loading}
        />
      </div>

      {/* Additional Information Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-charcoal mb-4">Additional Information</h3>

        <TextAreaField
          id="notes"
          label="Notes & Special Instructions"
          name="notes"
          value={formData.notes || ''}
          onChange={handleInputChange}
          placeholder="Any additional details we should know about your notary request?"
          rows={4}
          disabled={loading}
        />
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
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              Submit Request
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default NotaryRequestForm;
