// Service pricing data
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// Loan Signing Services
const loanSigningServices = [
  { name: 'Refinance', fee: '$125–$150', notes: 'Per closing package' },
  { name: 'Purchase (Buyer)', fee: '$100–$125', notes: 'Per closing package' },
  { name: 'Seller', fee: '$75–$100', notes: 'Per closing package' },
  { name: 'Reverse Mortgage', fee: '$125–$175', notes: 'Application & Closing' },
  { name: 'HELOC / Equity Loans', fee: '$100–$150', notes: 'Varies by complexity' },
  { name: 'Loan Modifications', fee: '$40–$60', notes: 'Basic notarization' },
  { name: 'Commercial Closings', fee: '$200+', notes: 'Based on document count' },
  { name: 'TX Property Tax Loans', fee: '$125', notes: 'Flat rate' },
];

// Mobile Notary Services
const mobileNotaryServices = [
  { name: 'General Documents (1-3 docs)', fee: '$75', notes: 'Affidavits, POAs, contracts' },
  { name: 'Multiple Documents (4-10 docs)', fee: '$100', notes: 'Estate planning packages' },
  { name: 'Complex Notarization (10+ docs)', fee: '$125', notes: 'Business agreements, trusts' },
  { name: 'Witness Services', fee: '$50', notes: 'Plus notary fees' },
  { name: 'I-9 Verification', fee: '$50', notes: 'Employment verification' },
  { name: 'Hospital/Jail Signing', fee: '$100', notes: 'Includes travel time' },
];

// Remote Online Notarization (RON)
const ronServices = [
  { name: 'Single Document RON', fee: '$50', notes: '1-3 signatures' },
  { name: 'Multi-Document RON', fee: '$75', notes: '4-8 signatures' },
  { name: 'Complex RON Session', fee: '$100', notes: '9+ signatures or multiple signers' },
  { name: 'After-Hours RON', fee: '$75', notes: 'Evenings, weekends, holidays' },
  { name: 'International RON', fee: '$100', notes: 'Cross-border transactions' },
];

// Specialty Services
const specialtyServices = [
  { name: 'Apostille Partner Network', fee: '$150+', notes: 'Connect with local notary partners + TX SOS courier service' },
  { name: 'International POA', fee: 'Contact', notes: 'Complex international documents via partner network' },
  { name: 'Estate Planning Package', fee: '$200+', notes: 'Wills, trusts, POAs together' },
  { name: 'Business Formation Docs', fee: '$150+', notes: 'Corporate agreements, partnerships' },
];

// Add-On Services
const addOnServices = [
  { name: 'Scanbacks', fee: '$15', notes: 'Per signing package' },
  { name: 'Printing', fee: '$10–$25', notes: 'Based on page count' },
  { name: 'Additional Signers', fee: '$25', notes: 'Per additional signer' },
  { name: 'Weekend/After Hours', fee: '$50', notes: 'Additional fee' },
  { name: 'Travel (15+ miles)', fee: '$1/mile', notes: 'Beyond standard radius' },
  { name: 'Facility Fee (TX Equity)', fee: '$25', notes: 'If applicable' },
];



const Pricing = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Handle anchor navigation on page load
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);
  
  return (
    <div className="w-full bg-white">
      {/* Sub-Navigation Links */}
      <section className="bg-professional-blue/5 border-b border-professional-blue/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-charcoal/70 font-medium">Pricing By Service:</span>
            <a href="#loan-signing" className="text-professional-blue hover:text-professional-blue/80 hover:underline transition-colors font-medium">Loan Signing</a>
            <span className="text-charcoal/30">•</span>
            <a href="#mobile-notary" className="text-professional-blue hover:text-professional-blue/80 hover:underline transition-colors font-medium">Mobile Notary</a>
            <span className="text-charcoal/30">•</span>
            <a href="#remote-online" className="text-professional-blue hover:text-professional-blue/80 hover:underline transition-colors font-medium">Remote Online</a>
            <span className="text-charcoal/30">•</span>
            <a href="#specialty-services" className="text-professional-blue hover:text-professional-blue/80 hover:underline transition-colors font-medium">Specialty Services</a>
            <span className="text-charcoal/30">•</span>
            <a href="#faq" className="text-professional-blue hover:text-professional-blue/80 hover:underline transition-colors font-medium">FAQs</a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative overflow-hidden bg-gradient-to-br from-professional-blue via-professional-blue/95 to-professional-blue/90 text-white w-screen left-1/2 -translate-x-1/2 py-20 md:py-24 lg:py-28 min-h-[400px] flex items-center">
        {/* Spectral Pattern Background */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `
            linear-gradient(90deg, 
              transparent 0%, 
              rgba(59, 130, 246, 0.25) 15%, 
              rgba(99, 102, 241, 0.25) 35%, 
              rgba(139, 92, 246, 0.25) 55%,
              rgba(168, 85, 247, 0.25) 75%,
              rgba(168, 85, 247, 0.2) 100%),
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.12) 0%, transparent 45%),
            radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.08) 0%, transparent 50%)
          `,
          backgroundSize: '100% 100%, 100% 100%, 100% 100%',
          backgroundAttachment: 'fixed'
        }}></div>
        
        {/* Geometric Overlays */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-none -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-professional-blue/20 rounded-none -ml-40 -mb-40"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-lg mb-6 border border-white/20">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold text-white">Transparent & Competitive Pricing</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Professional Pricing<br />You Can Trust
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 max-w-2xl">
              Flat-rate pricing with zero hidden fees. Know exactly what you're paying before you book.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#pricing-tiers" className="inline-flex items-center justify-center gap-2 bg-white text-professional-blue hover:bg-white/95 font-semibold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                View Pricing Plans
              </a>
              <a href="/quote" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-lg transition-all">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3v3m-6-1v-7a2 2 0 012-2h12a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Get Custom Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories - Reorganized */}
      <section id="pricing-tiers" className="py-20 lg:py-28 bg-white scroll-mt-20 relative" style={{backgroundImage: `
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px),
        radial-gradient(circle at 20% 30%, rgba(0, 85, 230, 0.05) 0%, transparent 40%), 
        radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.03) 0%, transparent 40%)
      `,
        backgroundSize: '100% 100%, 100% 100%, 100% 100%',
        backgroundAttachment: 'fixed'
      }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest text-professional-blue uppercase mb-3 bg-professional-blue/10 px-4 py-2 rounded">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Professional Notary Services</h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">Transparent pricing for all your notarization needs.</p>
          </div>

          {/* Loan Signing Services */}
          <div id="loan-signing" className="mb-20 scroll-mt-20">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-charcoal mb-3">Loan Signing Services</h3>
              <p className="text-charcoal/70 text-lg">Real estate closings and mortgage document signings.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-professional-blue">
                    <th className="text-left py-4 px-6 font-bold text-charcoal text-lg">Service</th>
                    <th className="text-center py-4 px-6 font-bold text-charcoal text-lg min-w-[120px]">Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {loanSigningServices.map((service) => (
                    <tr key={service.name} className="border-b border-professional-blue/20 hover:bg-professional-blue/5 transition-colors group">
                      <td className="py-4 px-6">
                        <div className="font-semibold text-charcoal group-hover:text-professional-blue transition-colors">{service.name}</div>
                        <div className="text-sm text-charcoal/70 mt-1">{service.notes}</div>
                      </td>
                      <td className="py-4 px-6 text-center text-professional-blue text-lg">{service.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Notary Services */}
          <div id="mobile-notary" className="mb-20 scroll-mt-20">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-charcoal mb-3">Mobile Notary Services</h3>
              <p className="text-charcoal/70 text-lg">We come to you for general notarization needs.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-professional-blue">
                    <th className="text-left py-4 px-6 font-bold text-charcoal text-lg">Service</th>
                    <th className="text-center py-4 px-6 font-bold text-charcoal text-lg min-w-[120px]">Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {mobileNotaryServices.map((service, idx) => (
                    <tr key={idx} className="border-b border-professional-blue/20 hover:bg-professional-blue/5 transition-colors group">
                      <td className="py-4 px-6">
                        <div className="font-semibold text-charcoal group-hover:text-professional-blue transition-colors">{service.name}</div>
                        <div className="text-sm text-charcoal/70 mt-1">{service.notes}</div>
                      </td>
                      <td className="py-4 px-6 text-center text-professional-blue text-lg">{service.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Remote Online Notarization */}
          <div id="remote-online" className="mb-20 scroll-mt-20">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-charcoal mb-3">Remote Online Notarization (RON)</h3>
              <p className="text-charcoal/70 text-lg">Secure video notarization available 24/7.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-professional-blue">
                    <th className="text-left py-4 px-6 font-bold text-charcoal text-lg">Service</th>
                    <th className="text-center py-4 px-6 font-bold text-charcoal text-lg min-w-[120px]">Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {ronServices.map((service, idx) => (
                    <tr key={idx} className="border-b border-professional-blue/20 hover:bg-professional-blue/5 transition-colors group">
                      <td className="py-4 px-6">
                        <div className="font-semibold text-charcoal group-hover:text-professional-blue transition-colors">{service.name}</div>
                        <div className="text-sm text-charcoal/70 mt-1">{service.notes}</div>
                      </td>
                      <td className="py-4 px-6 text-center text-professional-blue text-lg">{service.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Specialty Services */}
          <div className="scroll-mt-20">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-charcoal mb-3">Specialty Services</h3>
              <p className="text-charcoal/70 text-lg">International documents and complex notarization.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-professional-blue">
                    <th className="text-left py-4 px-6 font-bold text-charcoal text-lg">Service</th>
                    <th className="text-center py-4 px-6 font-bold text-charcoal text-lg min-w-[120px]">Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {specialtyServices.map((service, idx) => (
                    <tr key={idx} className="border-b border-professional-blue/20 hover:bg-professional-blue/5 transition-colors group">
                      <td className="py-4 px-6">
                        <div className="font-semibold text-charcoal group-hover:text-professional-blue transition-colors">{service.name}</div>
                        <div className="text-sm text-charcoal/70 mt-1">{service.notes}</div>
                      </td>
                      <td className="py-4 px-6 text-center text-professional-blue text-lg">{service.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 lg:py-28 bg-professional-blue/5 relative" style={{backgroundImage: 'radial-gradient(circle at 20% 40%, rgba(0, 85, 230, 0.05) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.03) 0%, transparent 40%)'}}>'
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-charcoal mb-3">Add-On Services</h3>
            <p className="text-charcoal/70 text-lg">Optional services to enhance your notarization experience.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-professional-blue">
                  <th className="text-left py-4 px-6 font-bold text-charcoal text-lg">Service</th>
                  <th className="text-center py-4 px-6 font-bold text-charcoal text-lg min-w-[120px]">Fee</th>
                </tr>
              </thead>
              <tbody>
                {addOnServices.map((service, idx) => (
                  <tr key={idx} className="border-b border-professional-blue/20 hover:bg-professional-blue/5 transition-colors group">
                    <td className="py-4 px-6">
                      <div className="font-semibold text-charcoal group-hover:text-professional-blue transition-colors">{service.name}</div>
                      <div className="text-sm text-charcoal/70 mt-1">{service.notes}</div>
                    </td>
                    <td className="py-4 px-6 text-center text-professional-blue text-lg">{service.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ - Compact Layout */}
      <section id="faq" className="py-12 bg-professional-blue/3 border-t border-professional-blue/10 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl">
            <h3 className="text-2xl font-bold text-charcoal mb-6">Common Questions</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/80 border-l border-professional-blue/40 hover:bg-white transition-colors">
                <h4 className="text-base font-semibold text-charcoal mb-2">Do your fees include travel?</h4>
                <p className="text-charcoal/70 text-sm leading-relaxed">Standard fees include travel within 10-15 miles. Beyond that, we charge a small distance-based fee.</p>
              </div>

              <div className="p-4 bg-white/80 border-l border-professional-blue/40 hover:bg-white transition-colors">
                <h4 className="text-base font-semibold text-charcoal mb-2">Are there additional fees for weekends?</h4>
                <p className="text-charcoal/70 text-sm leading-relaxed">Yes, weekend and after-hours appointments incur a $50 additional fee for urgent requests.</p>
              </div>

              <div className="p-4 bg-white/80 border-l border-professional-blue/40 hover:bg-white transition-colors">
                <h4 className="text-base font-semibold text-charcoal mb-2">What payment methods do you accept?</h4>
                <p className="text-charcoal/70 text-sm leading-relaxed">All major credit cards, Cash App, Venmo, and cash. Corporate accounts can arrange invoicing.</p>
              </div>

              <div className="p-4 bg-white/80 border-l border-professional-blue/40 hover:bg-white transition-colors">
                <h4 className="text-base font-semibold text-charcoal mb-2">What's your cancellation policy?</h4>
                <p className="text-charcoal/70 text-sm leading-relaxed">Free rescheduling with 24 hours notice. Less than 24 hours may incur a $25 fee.</p>
              </div>

              <div className="p-4 bg-white/80 border-l border-professional-blue/40 hover:bg-white transition-colors md:col-span-2">
                <h4 className="text-base font-semibold text-charcoal mb-2">Do you offer bulk or volume discounts?</h4>
                <p className="text-charcoal/70 text-sm leading-relaxed">Yes! For title companies, lenders, and high-volume clients, we offer custom pricing. Contact us to discuss your specific needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-white w-full flex items-center justify-center relative" style={{backgroundImage: `
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px),
        radial-gradient(circle at 20% 30%, rgba(0, 85, 230, 0.05) 0%, transparent 40%), 
        radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.03) 0%, transparent 40%)
      `,
        backgroundSize: '100% 100%, 100% 100%, 100% 100%',
        backgroundAttachment: 'fixed'
      }}>'
        <div className="max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-charcoal">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-charcoal/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book your appointment or request a custom quote for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/book"
              className="inline-flex items-center justify-center gap-3 bg-professional-blue text-white hover:bg-professional-blue/90 transition-all text-lg py-4 px-8 font-semibold"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book an Appointment
            </Link>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center gap-3 border-2 border-professional-blue text-professional-blue hover:bg-professional-blue hover:text-white transition-all text-lg py-4 px-8 font-semibold"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get a Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
