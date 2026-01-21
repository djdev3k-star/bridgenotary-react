import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GeneralInquiryForm } from '@/components/forms';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="w-full bg-white">
      {/* Main Content */}
      <section className="py-8 lg:py-16 relative" style={{backgroundImage: `
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px),
        radial-gradient(circle at 20% 30%, rgba(0, 85, 230, 0.05) 0%, transparent 40%), 
        radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.03) 0%, transparent 40%)
      `,
        backgroundSize: '100% 100%, 100% 100%, 100% 100%',
        backgroundAttachment: 'fixed'
      }}>
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {/* Left Column - Form */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-charcoal mb-2">Get in Touch</h1>
                <p className="text-charcoal/70">Ready to schedule or have questions? Send us a message and we'll respond quickly.</p>
              </div>
              
              <GeneralInquiryForm onSuccess={() => setFormSubmitted(true)} />
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <div className="border-l border-professional-blue pl-6 py-4 group">
                <h3 className="text-lg font-bold text-charcoal mb-6">Direct Contact</h3>
                <div className="space-y-5">
                  <a href="tel:+14696298932" className="flex items-center gap-4 hover:translate-x-1 transition-transform">
                    <svg className="w-5 h-5 text-professional-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-charcoal/70 text-xs uppercase tracking-wider">Phone</p>
                      <p className="font-semibold text-charcoal">(469) 629-8932</p>
                    </div>
                  </a>
                  
                  <a href="mailto:contact@bridgenotary.com" className="flex items-center gap-4 hover:translate-x-1 transition-transform">
                    <svg className="w-5 h-5 text-professional-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-charcoal/70 text-xs uppercase tracking-wider">Email</p>
                      <p className="font-semibold text-charcoal">contact@bridgenotary.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-professional-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-charcoal/70 text-xs uppercase tracking-wider">Service Area</p>
                      <p className="font-semibold text-charcoal">Dallas-Fort Worth Metroplex</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="border-l border-professional-blue pl-6 py-4 group">
                <h3 className="text-lg font-bold text-charcoal mb-4">Availability</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-charcoal/70">Mobile Notary</span>
                    <span className="font-semibold text-charcoal">7 Days/Week</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal/70">RON Sessions</span>
                    <span className="font-semibold text-charcoal">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal/70">Response Time</span>
                    <span className="font-semibold text-charcoal">Under 2 Hours</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-professional-blue/20">
                  <p className="text-xs text-charcoal/70">Same-day & rush appointments available</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="border-l border-professional-blue pl-6 py-4 group">
                <h3 className="text-lg font-bold text-charcoal mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link to="/book" className="flex items-center gap-3 text-professional-blue hover:text-professional-blue/80 transition group">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium group-hover:translate-x-1 transition-transform">Book Appointment</span>
                  </Link>
                  <Link to="/ron" className="flex items-center gap-3 text-professional-blue hover:text-professional-blue/80 transition group">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium group-hover:translate-x-1 transition-transform">Start RON Session</span>
                  </Link>
                  <Link to="/pricing" className="flex items-center gap-3 text-professional-blue hover:text-professional-blue/80 transition group">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium group-hover:translate-x-1 transition-transform">View Pricing</span>
                  </Link>
                  <Link to="/faq" className="flex items-center gap-3 text-professional-blue hover:text-professional-blue/80 transition group">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium group-hover:translate-x-1 transition-transform">FAQs</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area - Compact Layout */}
      <section className="py-8 bg-professional-blue/5 border-t border-professional-blue/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-charcoal mb-1">DFW Metroplex Service</h3>
              <p className="text-charcoal/70 text-sm">Professional notary services throughout Dallas-Fort Worth</p>
            </div>
            <div className="flex gap-3">
              <a 
              
                className="inline-flex items-center gap-2 bg-professional-blue hover:bg-professional-blue/90 text-white font-medium py-3 px-6 transition text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <Link 
                to="/services" 
                className="inline-flex items-center gap-2 border border-professional-blue text-professional-blue hover:bg-professional-blue hover:text-white font-medium py-3 px-6 transition text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
