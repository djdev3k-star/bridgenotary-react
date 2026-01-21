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
} from '@/components/forms/FormFields';
import { validateRequestForm, getFieldError, formatPhoneNumber } from '@/utils/formValidation';
import { submitRequestForm } from '@/services/formSubmissionService';
import type { NotaryRequestFormData, FormFieldError } from '@/types/forms';

interface NotaryRequestFormProps {
  onSuccess?: (message: string) => void;
  onError?: (error: string) => void;
  serviceType?: 'mobile' | 'online';
}

const NotaryRequestForm: React.FC<NotaryRequestFormProps> = ({ onSuccess, onError }) => {
  const [formData, setFormData] = useState<Partial<NotaryRequestFormData>>({
    full_name: '',
    email: '',
    phone: '',
    service_type: 'notary_general',
    appointment_datetime: '',
    location: '',
    notes: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormFieldError[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<NotaryRequestFormData | null>(null);

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
        full_name: formData.full_name || '',
        email: formData.email || '',
        phone: formattedPhone,
        service_type: 'notary_general',
        appointment_datetime: formData.appointment_datetime || undefined,
        location: formData.location || '',
        notes: formData.notes || '',
        consent: formData.consent || false,
      };

      const response = await submitRequestForm(completeFormData, 'notary');

      if (response.success) {
        // Store submitted data for confirmation display
        setSubmittedData(completeFormData);
        setSuccess('Your notary request has been submitted successfully!');
        if (onSuccess) onSuccess('Form submitted successfully');
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
    <>
      {/* Confirmation Screen - Show after successful submission */}
      {submittedData && success && (
        <div className="bg-white border border-professional-blue/20 p-8 md:p-12 rounded-lg">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-charcoal mb-2">Request Submitted!</h2>
            <p className="text-lg text-charcoal/70">Thank you for your notary request. We'll review your information and contact you soon.</p>
          </div>

          {/* Submitted Information */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-charcoal mb-4">Submitted Information</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-charcoal/70 font-medium">Full Name</p>
                <p className="text-charcoal">{submittedData.full_name}</p>
              </div>
              <div>
                <p className="text-charcoal/70 font-medium">Email</p>
                <p className="text-charcoal break-all">{submittedData.email}</p>
              </div>
              <div>
                <p className="text-charcoal/70 font-medium">Phone</p>
                <p className="text-charcoal">{submittedData.phone}</p>
              </div>
              {submittedData.appointment_datetime && (
                <div>
                  <p className="text-charcoal/70 font-medium">Preferred Date & Time</p>
                  <p className="text-charcoal">{new Date(submittedData.appointment_datetime).toLocaleString()}</p>
                </div>
              )}
              {submittedData.location && (
                <div className="md:col-span-2">
                  <p className="text-charcoal/70 font-medium">Location</p>
                  <p className="text-charcoal">{submittedData.location}</p>
                </div>
              )}
              {submittedData.notes && (
                <div className="md:col-span-2">
                  <p className="text-charcoal/70 font-medium">Additional Notes</p>
                  <p className="text-charcoal">{submittedData.notes}</p>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => {
                setSubmittedData(null);
                setSuccess(null);
                setFormData({
                  full_name: '',
                  email: '',
                  phone: '',
                  service_type: 'notary_general',
                  appointment_datetime: '',
                  location: '',
                  notes: '',
                  consent: false,
                });
              }}
              className="button-outline px-8"
            >
              Submit Another Request
            </button>
            <a href="/" className="button-primary px-8 text-center">
              Return Home
            </a>
          </div>

          {/* Reference Number Info */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-charcoal/70">
              We've received your request and will contact you within 24 business hours.
            </p>
          </div>
        </div>
      )}

      {/* Form - Show when not submitted */}
      {!submittedData && (
    <form onSubmit={handleSubmit} className="bg-white border-2 border-professional-blue/15 rounded-xl shadow-sm p-8 md:p-10 hover:border-professional-blue/25 transition-all" noValidate>
      {generalError && <ErrorAlert message={generalError} />}
      {success && <SuccessAlert message={success} />}

      {/* Personal Information Section */}
      <div className="mb-8 pb-8 border-b border-professional-blue/10">
        <h3 className="text-lg font-bold text-charcoal mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-professional-blue rounded"></span>
          Personal Information
        </h3>

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
      <div className="mb-8 pb-8 border-b border-professional-blue/10">
        <h3 className="text-lg font-bold text-charcoal mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-professional-blue rounded"></span>
          Service Details
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
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
      <div className="mb-8 pb-8 border-b border-professional-blue/10">
        <h3 className="text-lg font-bold text-charcoal mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-professional-blue rounded"></span>
          Additional Information
        </h3>

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
      )}
    </>
  );
};

export default NotaryRequestForm;
