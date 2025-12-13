import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SERVICE_TYPES, getServiceById, type ServiceTypeConfig } from '@/types/services';

interface ServiceOption {
  id: 'mobile' | 'online' | 'appointment';
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  documentType: string;
  preferredDate: string;
  preferredTime: string;
  location?: string;
  additionalNotes: string;
}

// Document type options grouped by category
const DOCUMENT_TYPE_OPTIONS = [
  { value: '', label: 'Select document type', category: '' },
  // Loan Signing
  { value: 'refinance', label: 'Refinance Signing', category: 'Loan Signing' },
  { value: 'purchase', label: 'Purchase Signing (Buyer)', category: 'Loan Signing' },
  { value: 'seller', label: 'Seller Signing', category: 'Loan Signing' },
  { value: 'reverse', label: 'Reverse Mortgage', category: 'Loan Signing' },
  { value: 'heloc', label: 'HELOC / Home Equity', category: 'Loan Signing' },
  { value: 'modification', label: 'Loan Modification', category: 'Loan Signing' },
  { value: 'commercial', label: 'Commercial Closing', category: 'Loan Signing' },
  { value: 'property-tax', label: 'TX Property Tax Loan', category: 'Loan Signing' },
  // General Notary
  { value: 'general', label: 'General Notary', category: 'General Notary' },
  { value: 'power-of-attorney', label: 'Power of Attorney', category: 'General Notary' },
  { value: 'estate-trust', label: 'Estate & Trust Documents', category: 'General Notary' },
  { value: 'witness', label: 'Witness Services', category: 'General Notary' },
  { value: 'i9-verification', label: 'I-9 Verification', category: 'General Notary' },
  // Specialty
  { value: 'apostille', label: 'Apostille Services', category: 'Specialty' },
  { value: 'other', label: 'Other', category: 'Other' },
];

const BookAppointment: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedService, setSelectedService] = useState<ServiceOption['id'] | null>(null);
  const [preselectedDocType, setPreselectedDocType] = useState<ServiceTypeConfig | null>(null);
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    email: '',
    phone: '',
    documentType: '',
    preferredDate: '',
    preferredTime: '',
    location: '',
    additionalNotes: ''
  });

  // Handle query params for service pre-selection
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const modeParam = searchParams.get('mode'); // 'mobile' or 'online'
    
    if (serviceParam) {
      const service = getServiceById(serviceParam);
      if (service) {
        setPreselectedDocType(service);
        setFormData(prev => ({ ...prev, documentType: serviceParam }));
        
        // Auto-select mobile if service is in-person only
        if (service.inPersonOnly) {
          setSelectedService('mobile');
        } else if (modeParam === 'online' && service.ronCapable) {
          navigate('/ron');
        } else if (modeParam === 'mobile') {
          setSelectedService('mobile');
        }
      }
    }
  }, [searchParams, navigate]);

  const serviceOptions: ServiceOption[] = [
    {
      id: 'mobile',
      title: 'Mobile Signing',
      description: 'We come to your preferred location',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      benefits: [
        'Convenient in-person signing at your location',
        'Perfect for real estate closings',
        'Available for group signings',
        'Flexible scheduling options'
      ]
    },
    {
      id: 'online',
      title: 'Schedule Online Session',
      description: 'Remote Online Notarization via secure video',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      benefits: [
        'Notarize from anywhere with internet access',
        'Secure video conferencing technology',
        'Digital document signing and storage',
        'Schedule at your convenience'
      ]
    }
  ];

  const handleServiceSelection = (serviceId: ServiceOption['id']) => {
    // Check if the selected document type requires in-person signing
    if (serviceId === 'online' && preselectedDocType?.inPersonOnly) {
      // Don't allow online for in-person-only services
      return;
    }
    
    setSelectedService(serviceId);
    if (serviceId === 'online') {
      navigate('/ron');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission based on selectedService
    // You would typically send this to your backend
    console.log('Form submitted:', { selectedService, formData });
  };

  const renderServiceSelection = () => (
    <div>
      {/* Service context notice */}
      {preselectedDocType && (
        <div className="max-w-4xl mx-auto mb-8">
          <div className={`p-4 rounded-lg border ${preselectedDocType.inPersonOnly 
            ? 'bg-amber-50 border-amber-200' 
            : 'bg-electric-blue/5 border-electric-blue/20'}`}>
            <div className="flex items-start gap-3">
              <span className="text-2xl">{preselectedDocType.inPersonOnly ? '📍' : '✓'}</span>
              <div>
                <p className="font-semibold text-proof">
                  {preselectedDocType.label}
                </p>
                {preselectedDocType.inPersonOnly ? (
                  <p className="text-sm text-amber-800">
                    {preselectedDocType.notes || 'This service requires an in-person signing.'}
                  </p>
                ) : (
                  <p className="text-sm text-neutral-600">
                    {preselectedDocType.ronCapable 
                      ? 'Available for both mobile signing and remote online notarization.' 
                      : preselectedDocType.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
        {serviceOptions.map((option) => {
          const isDisabled = option.id === 'online' && preselectedDocType?.inPersonOnly;
          
          return (
            <button
              key={option.id}
              onClick={() => handleServiceSelection(option.id)}
              disabled={isDisabled}
              className={`p-6 rounded border-2 text-left transition-all
                ${isDisabled 
                  ? 'border-neutral-200 bg-neutral-50 opacity-60 cursor-not-allowed'
                  : selectedService === option.id 
                    ? 'border-electric-blue bg-electric-blue/5 hover:shadow-lg' 
                    : 'border-neutral-200 hover:border-electric-blue/50 hover:shadow-lg'}`}
            >
              <div className={`mb-4 ${isDisabled ? 'text-neutral-400' : selectedService === option.id ? 'text-electric-blue' : 'text-proof'}`}>
                {option.icon}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className={`text-xl font-semibold ${isDisabled ? 'text-neutral-400' : 'text-proof'}`}>
                  {option.title}
                </h3>
                {option.id === 'online' && preselectedDocType?.inPersonOnly && (
                  <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">
                    Not Available
                  </span>
                )}
              </div>
              <p className={`mb-4 ${isDisabled ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {option.description}
              </p>
              <ul className="space-y-2">
                {option.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className={`h-5 w-5 mt-1 flex-shrink-0 ${isDisabled ? 'text-neutral-300' : 'text-electric-blue'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${isDisabled ? 'text-neutral-400' : 'text-neutral-600'}`}>{benefit}</span>
                  </li>
                ))}
              </ul>
              {isDisabled && (
                <p className="mt-4 text-xs text-amber-700 bg-amber-50 p-2 rounded">
                  {preselectedDocType?.notes || 'This document type requires in-person signing.'}
                </p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderAppointmentForm = () => (
    <div className="card">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded focus:ring-2 focus:ring-electric-blue focus:border-electric-blue"
              required
              aria-label="Full Name"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded focus:ring-2 focus:ring-electric-blue focus:border-electric-blue"
              required
              aria-label="Email Address"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded focus:ring-2 focus:ring-electric-blue focus:border-electric-blue"
              required
              aria-label="Phone Number"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Document Type</label>
            <select
              name="documentType"
              value={formData.documentType}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded focus:ring-2 focus:ring-electric-blue focus:border-electric-blue"
              required
              aria-label="Document Type"
              title="Select the type of document you need notarized"
            >
              <option value="">Select document type</option>
              <optgroup label="Loan Signing">
                <option value="refinance">Refinance Signing</option>
                <option value="purchase">Purchase Signing (Buyer)</option>
                <option value="seller">Seller Signing</option>
                <option value="reverse">Reverse Mortgage</option>
                <option value="heloc">HELOC / Home Equity</option>
                <option value="modification">Loan Modification</option>
                <option value="commercial">Commercial Closing</option>
                <option value="property-tax">TX Property Tax Loan</option>
              </optgroup>
              <optgroup label="General Notary">
                <option value="general">General Notary</option>
                <option value="power-of-attorney">Power of Attorney</option>
                <option value="estate-trust">Estate & Trust Documents</option>
                <option value="witness">Witness Services</option>
                <option value="i9-verification">I-9 Verification</option>
              </optgroup>
              <optgroup label="Specialty">
                <option value="apostille">Apostille Services</option>
                <option value="other">Other</option>
              </optgroup>
            </select>
            {/* RON availability indicator */}
            {formData.documentType && SERVICE_TYPES[formData.documentType] && (
              <div className="mt-2">
                {SERVICE_TYPES[formData.documentType].inPersonOnly ? (
                  <span className="text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded inline-flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    In-Person Only
                  </span>
                ) : SERVICE_TYPES[formData.documentType].ronCapable ? (
                  <span className="text-xs text-electric-blue bg-electric-blue/10 px-2 py-1 rounded inline-flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    RON Available
                  </span>
                ) : null}
              </div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Preferred Date</label>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded focus:ring-2 focus:ring-electric-blue focus:border-electric-blue"
              required
              aria-label="Preferred Date"
              title="Select your preferred date"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Preferred Time</label>
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded focus:ring-2 focus:ring-electric-blue focus:border-electric-blue"
              required
              aria-label="Preferred Time"
              title="Select your preferred time slot"
            >
              <option value="">Select preferred time</option>
              <option value="morning">Morning (9AM - 12PM)</option>
              <option value="afternoon">Afternoon (12PM - 5PM)</option>
              <option value="evening">Evening (5PM - 8PM)</option>
            </select>
          </div>
        </div>

        {selectedService === 'mobile' && (
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Enter address for mobile signing"
              className="w-full px-4 py-2 border border-neutral-300 rounded focus:ring-2 focus:ring-electric-blue focus:border-electric-blue"
              required
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">Additional Notes</label>
          <textarea
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-2 border border-neutral-300 rounded focus:ring-2 focus:ring-electric-blue focus:border-electric-blue"
            placeholder="Any special requirements or additional information..."
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => setSelectedService(null)}
            className="px-6 py-2 border border-neutral-300 rounded hover:bg-neutral-50"
          >
            Back
          </button>
          <button
            type="submit"
            className="button-primary"
          >
            Confirm Appointment
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="section">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-proof mb-6">Schedule Your Appointment</h1>
          <div className="h-1 w-20 bg-neutral-900 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-700">
            Choose your preferred notary service. Schedule a mobile signing at your location or 
            a remote online notarization session via secure video conference.
          </p>
        </div>
        
        {!selectedService && renderServiceSelection()}
        {selectedService && selectedService !== 'online' && renderAppointmentForm()}
      </div>
    </div>
  );
};

export default BookAppointment;
