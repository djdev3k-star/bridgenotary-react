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
    // Form submitted: { selectedService, formData }
  };

  const renderServiceSelection = () => (
    <div>
      {/* Service context notice */}
      {preselectedDocType && (
        <div className="max-w-4xl mx-auto mb-12 p-6 border-l-4 border-professional-blue bg-professional-blue/5">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-0.5">
              <svg className="w-6 h-6 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-charcoal text-lg">
                {preselectedDocType.label}
              </p>
              <p className="text-charcoal/70 mt-1">
                {preselectedDocType.ronCapable 
                  ? 'This service is available for both mobile signing and remote online notarization.' 
                  : preselectedDocType.inPersonOnly
                    ? 'This service requires an in-person signing.'
                    : preselectedDocType.description}
              </p>
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
              className={`p-8 border-l-4 text-left transition-all ${isDisabled 
                  ? 'border-charcoal/20 bg-charcoal/5 opacity-50 cursor-not-allowed'
                  : selectedService === option.id 
                    ? 'border-professional-blue bg-professional-blue/5 hover:bg-professional-blue/10' 
                    : 'border-charcoal/20 hover:border-professional-blue hover:bg-professional-blue/5'}`}
            >
              <div className={`mb-4 ${isDisabled ? 'text-charcoal/30' : selectedService === option.id ? 'text-professional-blue' : 'text-professional-blue'}`}>
                {option.icon}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className={`text-xl font-bold ${isDisabled ? 'text-charcoal/40' : 'text-charcoal'}`}>
                  {option.title}
                </h3>
              </div>
              <p className={`mb-4 text-sm ${isDisabled ? 'text-charcoal/40' : 'text-charcoal/70'}`}>
                {option.description}
              </p>
              <ul className="space-y-2">
                {option.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className={`h-5 w-5 mt-0.5 flex-shrink-0 ${isDisabled ? 'text-charcoal/20' : 'text-professional-blue'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${isDisabled ? 'text-charcoal/40' : 'text-charcoal/70'}`}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderAppointmentForm = () => (
    <div className="bg-off-white p-8 max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-professional-blue/20 focus:ring-2 focus:ring-professional-blue/20 focus:border-transparent transition-all"
              required
              aria-label="Full Name"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-professional-blue/20 focus:ring-2 focus:ring-professional-blue/20 focus:border-transparent transition-all"
              required
              aria-label="Email Address"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-professional-blue/20 focus:ring-2 focus:ring-professional-blue/20 focus:border-transparent transition-all"
              required
              aria-label="Phone Number"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">Document Type</label>
            <select
              name="documentType"
              value={formData.documentType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-professional-blue/20 focus:ring-2 focus:ring-professional-blue/20 focus:border-transparent transition-all bg-white"
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
                  <span className="text-xs text-charcoal/70 bg-charcoal/5 px-2 py-1 inline-flex items-center gap-1 border-l-2 border-charcoal/20">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    In-Person Only
                  </span>
                ) : SERVICE_TYPES[formData.documentType].ronCapable ? (
                  <span className="text-xs text-professional-blue bg-professional-blue/10 px-2 py-1 inline-flex items-center gap-1 border-l-2 border-professional-blue">
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
            <label className="block text-sm font-medium text-charcoal mb-2">Preferred Date</label>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-professional-blue/20 focus:ring-2 focus:ring-professional-blue/20 focus:border-transparent transition-all"
              required
              aria-label="Preferred Date"
              title="Select your preferred date"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">Preferred Time</label>
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-professional-blue/20 focus:ring-2 focus:ring-professional-blue/20 focus:border-transparent transition-all bg-white"
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
            <label className="block text-sm font-medium text-charcoal mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Enter address for mobile signing"
              className="w-full px-4 py-3 border border-professional-blue/20 focus:ring-2 focus:ring-professional-blue/20 focus:border-transparent transition-all"
              required
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">Additional Notes</label>
          <textarea
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-professional-blue/20 focus:ring-2 focus:ring-professional-blue/20 focus:border-transparent transition-all"
            placeholder="Any special requirements or additional information..."
          />
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            onClick={() => setSelectedService(null)}
            className="px-8 py-3 border border-professional-blue/20 text-charcoal hover:bg-professional-blue/5 transition-colors font-medium"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-8 py-3 bg-professional-blue text-white hover:bg-professional-blue/90 transition-colors font-semibold"
          >
            Confirm Appointment
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Schedule Your Appointment</h1>
          <p className="text-lg text-charcoal/70">
            Choose your preferred notary service. Schedule a mobile signing at your location or a remote online notarization session via secure video conference.
          </p>
        </div>
        
        {!selectedService && renderServiceSelection()}
        {selectedService && selectedService !== 'online' && renderAppointmentForm()}
      </div>
    </div>
  );
};

export default BookAppointment;
