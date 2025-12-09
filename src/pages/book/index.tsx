import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

const BookAppointment: React.FC = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<ServiceOption['id'] | null>(null);
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
    <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
      {serviceOptions.map((option) => (
        <button
          key={option.id}
          onClick={() => handleServiceSelection(option.id)}
          className={`p-6 rounded-lg border-2 text-left transition-all hover:shadow-lg
            ${selectedService === option.id 
              ? 'border-electric-blue bg-electric-blue/5' 
              : 'border-neutral-200 hover:border-electric-blue/50'}`}
        >
          <div className={`mb-4 ${selectedService === option.id ? 'text-electric-blue' : 'text-proof'}`}>
            {option.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-proof">{option.title}</h3>
          <p className="text-neutral-600 mb-4">{option.description}</p>
          <ul className="space-y-2">
            {option.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <svg className="h-5 w-5 text-electric-blue mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-neutral-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </button>
      ))}
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
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-electric-blue"
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
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-electric-blue"
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
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-electric-blue"
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
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-electric-blue"
              required
              aria-label="Document Type"
              title="Select the type of document you need notarized"
            >
              <option value="">Select document type</option>
              <option value="real-estate">Real Estate Documents</option>
              <option value="power-of-attorney">Power of Attorney</option>
              <option value="affidavit">Affidavit</option>
              <option value="legal">Legal Documents</option>
              <option value="other">Other</option>
            </select>
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
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-electric-blue"
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
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-electric-blue"
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
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-electric-blue"
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
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-electric-blue"
            placeholder="Any special requirements or additional information..."
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => setSelectedService(null)}
            className="px-6 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50"
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
          <div className="h-1 w-20 bg-gold mx-auto mb-8"></div>
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
