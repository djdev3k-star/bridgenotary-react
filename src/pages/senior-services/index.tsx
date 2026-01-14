import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const seniorsImage = '/images/seniors.png';

interface LeadForm {
  facilityName: string;
  contactName: string;
  email: string;
  phone: string;
  residents: string;
  services: string[];
  message: string;
}

const SeniorServicesLanding: React.FC = () => {
  const [formData, setFormData] = useState<LeadForm>({
    facilityName: '',
    contactName: '',
    email: '',
    phone: '',
    residents: '',
    services: [],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    {
      icon: (
        <svg className="h-8 w-8 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 12a5 5 0 1110 0A5 5 0 017 12z" />
        </svg>
      ),
      title: 'Power of Attorney',
      description: 'Legal authority documents executed with proper notarization',
      benefit: 'Ensure financial & healthcare decisions are protected'
    },
    {
      icon: (
        <svg className="h-8 w-8 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: 'Healthcare Documents',
      description: 'Living wills, healthcare proxies, HIPAA authorizations',
      benefit: 'Peace of mind for medical decision-making'
    },
    {
      icon: (
        <svg className="h-8 w-8 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Estate Planning',
      description: 'Wills, trusts, and transfer documents',
      benefit: 'Protect assets and legacy with proper execution'
    },
    {
      icon: (
        <svg className="h-8 w-8 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: 'Affidavits & Declarations',
      description: 'Sworn statements for legal proceedings',
      benefit: 'Handle complex legal matters without courthouse visits'
    },
    {
      icon: (
        <svg className="h-8 w-8 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4.5m-4-15V8a2 2 0 012 2v4m6-6v4a2 2 0 01-2 2h-2.5" />
        </svg>
      ),
      title: 'Identity Verification',
      description: 'Verification services for documents & applications',
      benefit: 'Streamline processes for residents and families'
    },
    {
      icon: (
        <svg className="h-8 w-8 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Appointment Flexibility',
      description: 'On-site visits at your convenience, weekends available',
      benefit: 'No disruption to facility operations'
    }
  ];

  const benefits = [
    {
      number: '500+',
      label: 'Senior Clients Served',
      icon: (
        <svg className="h-8 w-8 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10h.01M13 20h4a2 2 0 002-2v-6a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a2 2 0 002 2zm-5.5-9h.01M7 20H4a2 2 0 01-2-2v-6a2 2 0 012-2h4a2 2 0 012 2v6a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: '99%',
      label: 'On-Time Delivery',
      icon: (
        <svg className="h-8 w-8 text-professional-blue" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: '24/7',
      label: 'Availability',
      icon: (
        <svg className="h-8 w-8 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: '$0',
      label: 'Travel Fees Within DFW',
      icon: (
        <svg className="h-8 w-8 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        </svg>
      )
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        facilityName: '',
        contactName: '',
        email: '',
        phone: '',
        residents: '',
        services: [],
        message: '',
      });
    }, 3000);
  };

  return (
    <div className="w-full bg-off-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32 bg-gradient-to-br from-professional-blue/10 to-professional-blue/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-charcoal">
              <div className="inline-flex items-center gap-2 bg-professional-blue/10 px-4 py-2 border border-professional-blue/30 mb-6">
                <svg className="w-4 h-4 text-professional-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-semibold text-professional-blue">Trusted Senior Services Partner</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-charcoal">
                Notary Services for Senior Living Communities
              </h1>

              <p className="text-base md:text-lg text-charcoal/70 mb-8 leading-relaxed max-w-lg font-light">
                On-site document authentication for power of attorney, healthcare directives, wills, and estate planning. Professional notarization without resident disruption.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#lead-form" className="group inline-flex items-center justify-center gap-2 bg-professional-blue text-white hover:bg-professional-blue/90 font-semibold py-4 px-8 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex-1">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Get Free Consultation
                </a>
                <a href="tel:+14696298932" className="group inline-flex items-center justify-center gap-2 border-2 border-charcoal/20 text-charcoal hover:border-professional-blue hover:bg-professional-blue/5 font-semibold py-4 px-8 transition-all flex-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (469) 629-8932
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden md:block relative">
              <img 
                src={seniorsImage} 
                alt="Senior living community"
                className="w-full h-auto rounded-2xl shadow-xl object-cover border border-charcoal/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-professional-blue font-semibold text-sm uppercase tracking-wider mb-2">Our Expertise</p>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Services Tailored for Your Facility</h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">One-stop notarization solutions that reduce burden on staff and residents</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="p-6 border-l-4 border-professional-blue bg-white hover:bg-professional-blue/3 transition-all duration-300 shadow-sm hover:shadow-md group">
                <div className="mb-4 group-hover:scale-125 transition-transform duration-300 inline-block">{service.icon}</div>
                <h3 className="text-lg font-bold text-charcoal mb-2">{service.title}</h3>
                <p className="text-charcoal/70 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-charcoal/70 font-medium">{service.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-professional-blue font-semibold text-sm uppercase tracking-wider mb-2">Hassle-Free Partnerships</p>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-8">Why Facilities Choose Us</h2>
              
              <ul className="space-y-4">
                {[
                  'NNA Certified & Background Screened',
                  'Fully Insured ($25,000+ E&O Coverage)',
                  'On-site Service - Residents Never Leave Facility',
                  'Flexible Scheduling - Evenings & Weekends',
                  'Respectful & Patient Service',
                  'Bulk Service Discounts Available',
                  'Electronic Records Management',
                  'Same-Day Service in Most Cases'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-charcoal/70 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/book" className="inline-flex items-center justify-center gap-2 bg-professional-blue text-white hover:bg-professional-blue/90 font-bold py-4 px-8 rounded-lg transition-all mt-10 shadow-lg hover:shadow-xl">
                Schedule Service Today
              </Link>
            </div>

            <div className="bg-professional-blue/10 rounded-lg p-8 border border-professional-blue/20">
              <p className="text-charcoal/70 italic text-lg leading-relaxed">
                "Bridge Notary has been instrumental in helping our residents with estate planning and healthcare documents. Their on-site service eliminates the stress of travel, and their compassionate approach puts everyone at ease."
              </p>
              <div className="mt-6">
                <p className="font-bold text-charcoal">Margaret Chen</p>
                <p className="text-sm text-charcoal/60">Administrator, Shady Oaks Senior Living</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="lead-form" className="py-20 md:py-28 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-gradient-to-br from-professional-blue/5 to-professional-blue/10 rounded-xl shadow-lg p-8 md:p-12 border border-professional-blue/20">
            <div className="text-center mb-10">
              <p className="text-professional-blue font-semibold text-sm uppercase tracking-wider mb-2">Get Started</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-2">Free Consultation Request</h2>
              <p className="text-charcoal/70">Tell us about your facility and get a custom proposal within 24 hours</p>
            </div>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <svg className="w-12 h-12 text-green-500 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-bold text-charcoal mb-1">Thank You!</h3>
                <p className="text-charcoal/70">We'll contact you within 24 hours with pricing and availability.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="facilityName"
                    placeholder="Facility Name *"
                    value={formData.facilityName}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 border border-professional-blue/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-professional-blue bg-white transition-all"
                  />
                  <input
                    type="text"
                    name="contactName"
                    placeholder="Your Name *"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 border border-professional-blue/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-professional-blue bg-white transition-all"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 border border-professional-blue/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-professional-blue bg-white transition-all"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 border border-professional-blue/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-professional-blue bg-white transition-all"
                  />
                </div>

                <select
                  name="residents"
                  value={formData.residents}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-professional-blue/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-professional-blue bg-white transition-all"
                >
                  <option value="">Approximate Number of Residents *</option>
                  <option value="under50">Under 50</option>
                  <option value="50-100">50-100</option>
                  <option value="100-200">100-200</option>
                  <option value="200+">200+</option>
                </select>

                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-3">Services Needed:</label>
                  <div className="space-y-2">
                    {['Power of Attorney', 'Healthcare Documents', 'Estate Planning', 'Affidavits', 'Identity Verification'].map(service => (
                      <label key={service} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="w-4 h-4 accent-professional-blue"
                        />
                        <span className="text-charcoal/70">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <textarea
                  name="message"
                  placeholder="Additional Details (optional)"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-professional-blue/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-professional-blue resize-none bg-white transition-all"
                />

                <button
                  type="submit"
                  className="w-full bg-professional-blue text-white hover:bg-professional-blue/90 font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
                >
                  Get Free Consultation
                </button>

                <p className="text-xs text-charcoal/60 text-center">We respect your privacy. Your information will be kept confidential.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-professional-blue/3">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-professional-blue font-semibold text-sm uppercase tracking-wider mb-2">Questions?</p>
            <h2 className="text-4xl font-bold text-charcoal">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Do you come to our facility?',
                a: 'Yes! We provide on-site notarization at your facility. No residents need to travel. We accommodate your schedule and work around your operations.'
              },
              {
                q: 'What documents can you notarize?',
                a: 'We notarize powers of attorney, healthcare directives, living wills, affidavits, estate planning documents, and more. Most documents relating to seniors are eligible.'
              },
              {
                q: 'How much does this cost?',
                a: 'Pricing is based on volume and service type. We offer competitive rates and bulk discounts for facilities. Contact us for a custom quote.'
              },
              {
                q: 'How quickly can you respond?',
                a: 'We typically respond within 24 hours. Same-day and next-day service is available in many cases. Emergency service can be arranged.'
              },
              {
                q: 'Do residents need to provide ID?',
                a: 'Yes, proper identification is required for legal notarization. We accept government-issued IDs. If residents don\'t have proper ID, we can discuss alternatives.'
              },
              {
                q: 'Are your services insured?',
                a: 'Yes, we carry $25,000+ in Errors & Omissions insurance and are fully bonded. Your facility is protected.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="border-l-4 border-professional-blue p-6 bg-professional-blue/2 hover:bg-professional-blue/5 transition-colors">
                <h3 className="font-bold text-charcoal mb-2">{faq.q}</h3>
                <p className="text-charcoal/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-professional-blue to-professional-blue/90 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Serve Your Community?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Contact us today for a free consultation and custom pricing for your senior living facility.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#lead-form" className="inline-flex items-center justify-center gap-2 bg-white text-professional-blue hover:bg-white/95 font-bold py-4 px-8 rounded-lg transition-all">
              Request Consultation
            </a>
            <a href="tel:+14696298932" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (469) 629-8932
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeniorServicesLanding;
