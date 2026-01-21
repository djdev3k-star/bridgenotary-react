import React, { useState } from 'react';
import { NotaryRequestForm } from '@/components/forms';

interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  documentType: string;
  serviceType: 'mobile' | 'online';
  preferredDate: string;
}

const BookAppointment: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState<'mobile' | 'online' | null>(null);

  return (
    <div className="w-full bg-white">
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12 md:mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Schedule Your Notary</h1>
            <p className="text-lg text-charcoal/70">Choose your preferred service and let us help.</p>
          </div>

          {!showForm ? (
            <>
              {/* Service Selection - Clean & Simple */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Mobile Service */}
                <button
                  onClick={() => {
                    setSelectedService('mobile');
                    setShowForm(true);
                  }}
                  className={`border-l-4 p-8 text-left transition-all group ${
                    selectedService === 'mobile'
                      ? 'border-professional-blue bg-professional-blue/5'
                      : 'border-charcoal/20 hover:border-professional-blue hover:bg-professional-blue/5'
                  }`}
                >
                  <div className="mb-3 text-professional-blue">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">Mobile Signing</h3>
                  <p className="text-charcoal/70 text-sm">We come to your location. Perfect for closings and in-person signings.</p>
                  <p className="text-xs text-professional-blue font-semibold mt-4 group-hover:translate-x-1 transition-transform">Get Started →</p>
                </button>

                {/* Online Service */}
                <button
                  onClick={() => {
                    setSelectedService('online');
                    setShowForm(true);
                  }}
                  className={`border-l-4 p-8 text-left transition-all group ${
                    selectedService === 'online'
                      ? 'border-professional-blue bg-professional-blue/5'
                      : 'border-charcoal/20 hover:border-professional-blue hover:bg-professional-blue/5'
                  }`}
                >
                  <div className="mb-3 text-professional-blue">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">Online Session</h3>
                  <p className="text-charcoal/70 text-sm">Remote Online Notarization via secure video. Available 24/7.</p>
                  <p className="text-xs text-professional-blue font-semibold mt-4 group-hover:translate-x-1 transition-transform">Get Started →</p>
                </button>
              </div>

              {/* Info Box */}
              <div className="bg-professional-blue/5 border-l-4 border-professional-blue p-6">
                <p className="text-sm text-charcoal/70">
                  <span className="font-semibold text-charcoal">Questions?</span> Call us at <a href="tel:+14696298932" className="text-professional-blue hover:underline">(469) 629-8932</a> or visit our <a href="/faq" className="text-professional-blue hover:underline">FAQ page</a>.
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Form Header */}
              <div className="mb-8">
                <button
                  onClick={() => {
                    setShowForm(false);
                    setSelectedService(null);
                  }}
                  className="text-professional-blue hover:text-professional-blue/70 text-sm font-medium mb-6 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
                <h2 className="text-2xl font-bold text-charcoal">
                  {selectedService === 'mobile' ? 'Schedule Mobile Signing' : 'Schedule Online Session'}
                </h2>
              </div>

              {/* Simple Form */}
              <div className="bg-off-white border-l-4 border-professional-blue p-8 max-w-2xl">
                <NotaryRequestForm
                  serviceType={selectedService}
                  onSuccess={() => {
                    setShowForm(false);
                    setSelectedService(null);
                  }}
                />
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;
