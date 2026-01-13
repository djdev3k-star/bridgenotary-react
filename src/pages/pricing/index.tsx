// Service pricing data
import { Link } from 'react-router-dom';

const coreServices = [
  { name: 'Refinance', fee: '$125–$150', notes: 'Per closing package' },
  { name: 'Purchase (Buyer)', fee: '$100–$125', notes: 'Per closing package' },
  { name: 'Seller', fee: '$75–$100', notes: 'Per closing package' },
  { name: 'Reverse Mortgage', fee: '$125–$175', notes: 'Application & Closing' },
  { name: 'HELOC / Equity Loans', fee: '$100–$150', notes: 'Varies by complexity' },
  { name: 'Loan Modifications', fee: '$40–$60', notes: 'Basic notarization' },
  { name: 'Commercial Closings', fee: '$200+', notes: 'Based on document count' },
  { name: 'TX Property Tax Loans', fee: '$125', notes: 'Flat rate' },
];

const addOnServices = [
  { name: 'Scanbacks', fee: '$15', notes: 'Per signing package' },
  { name: 'Printing', fee: '$10–$25', notes: 'Based on page count' },
  { name: 'Additional Signers', fee: '$25', notes: 'Per additional signer' },
  { name: 'Weekend/After Hours', fee: '$50', notes: 'Additional fee' },
  { name: 'Travel', fee: 'Varies', notes: 'Based on distance' },
  { name: 'Facility Fee (TX Equity Loans)', fee: '$25', notes: 'If applicable' },
];

// Main pricing tiers
const pricingTiers = [
  {
    name: 'Standard Closing',
    description: 'In-person signing with professional notarization',
    price: '$125',
    period: 'per closing',
    popular: true,
    features: [
      'In-person signing at your location',
      'Full document review',
      'Complete ID verification',
      'Electronic delivery',
      '24-hour rescheduling',
      'Travel within 15 miles included'
    ],
    cta: 'Book Now'
  },
  {
    name: 'Premium In-Person',
    description: 'Concierge service for complex transactions',
    price: '$200',
    period: 'per signing',
    popular: false,
    features: [
      'Priority scheduling',
      'Extended appointment time',
      'Pre-review of documents',
      'Digital & physical copies',
      'Travel up to 25 miles',
      'After-hours available'
    ],
    cta: 'Book Now'
  },
  {
    name: 'Remote Online (RON)',
    description: 'Secure video notarization from anywhere',
    price: '$100',
    period: 'per session',
    popular: false,
    features: [
      'Two-way video conferencing',
      'Digital document signing',
      'Identity verification',
      'Electronic journal entry',
      'Outside business hours available',
      'No travel required'
    ],
    cta: 'Learn More'
  },
];

const Pricing = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-professional-blue via-professional-blue/95 to-professional-blue/90 text-white w-screen left-1/2 -translate-x-1/2 py-20 md:py-32 lg:py-40">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.08) 0%, transparent 50%)'}}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-professional-blue/20 rounded-full -ml-40 -mb-40"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full mb-6 border border-white/20">
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

      {/* Main Pricing Tiers */}
      <section id="pricing-tiers" className="py-20 lg:py-28 bg-white scroll-mt-20" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Choose Your Service Level</h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">Three professional packages designed for your needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
            {/* Geometric overlays for off-center effect */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-professional-blue/5 -z-10"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-professional-blue/8 -z-10"></div>
            
            {pricingTiers.map((tier, idx) => (
              <div 
                key={idx}
                className={`relative pl-6 py-8 pr-8 border-l-2 border-professional-blue transition-all group hover:bg-professional-blue/5 ${
                  tier.popular 
                    ? 'bg-professional-blue/5 transform md:scale-105' 
                    : 'bg-white'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-6">
                    <span className="bg-professional-blue text-white text-xs font-bold py-1 px-4">MOST POPULAR</span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-charcoal mb-2">{tier.name}</h3>
                <p className="text-charcoal/70 text-sm mb-6 leading-relaxed">{tier.description}</p>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold text-professional-blue">{tier.price}</div>
                  <div className="text-sm text-charcoal/70">{tier.period}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-charcoal/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={tier.cta === 'Learn More' ? '/ron' : '/book'}
                  className={`block w-full py-3 px-6 font-semibold text-center transition-all ${
                    tier.popular
                      ? 'bg-professional-blue text-white hover:bg-professional-blue/90'
                      : 'border-2 border-professional-blue text-professional-blue hover:bg-professional-blue/5'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 lg:py-28 bg-off-white" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Service Details</h2>
            <p className="text-lg text-charcoal/70">Comprehensive pricing for all our notary and signing services.</p>
          </div>

          {/* Loan Signing Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-charcoal mb-8">Loan Signing Services</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {coreServices.map((service, idx) => (
                <div key={idx} className="p-4 border-l-4 border-professional-blue group hover:bg-professional-blue/5 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-base font-bold text-charcoal">{service.name}</h4>
                    <div className="font-bold text-professional-blue whitespace-nowrap ml-2">{service.fee}</div>
                  </div>
                  <p className="text-xs text-charcoal/70">{service.notes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Add-On Services */}
          <div>
            <h3 className="text-2xl font-bold text-charcoal mb-2">Add-On Services</h3>
            <p className="text-charcoal/70 mb-8">Optional services to enhance your signing experience.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {addOnServices.map((service, idx) => (
                <div key={idx} className="p-4 border-l-4 border-professional-blue group hover:bg-professional-blue/5 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-base font-bold text-charcoal">{service.name}</h4>
                    <div className="font-bold text-professional-blue whitespace-nowrap ml-2">{service.fee}</div>
                  </div>
                  <p className="text-xs text-charcoal/70">{service.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-0">
            <div className="p-6 border-l-4 border-professional-blue group hover:bg-professional-blue/5 transition-colors">
              <h3 className="text-lg font-bold text-charcoal mb-3">Do your fees include travel?</h3>
              <p className="text-charcoal/70 leading-relaxed">Our standard fees include travel within 10-15 miles depending on service type. For distances beyond that, we charge a small additional fee based on distance. Always ask about travel during booking.</p>
            </div>

            <div className="p-6 border-l-4 border-professional-blue group hover:bg-professional-blue/5 transition-colors">
              <h3 className="text-lg font-bold text-charcoal mb-3">Are there additional fees for weekends?</h3>
              <p className="text-charcoal/70 leading-relaxed">Yes, weekend and after-hours appointments (before 8 AM or after 6 PM) incur a $50 additional fee. This helps us accommodate urgent requests outside standard business hours.</p>
            </div>

            <div className="p-6 border-l-4 border-professional-blue group hover:bg-professional-blue/5 transition-colors">
              <h3 className="text-lg font-bold text-charcoal mb-3">What payment methods do you accept?</h3>
              <p className="text-charcoal/70 leading-relaxed">We accept all major credit cards, Cash App, Venmo, and cash. Payment is due at the time of service. For corporate accounts, we can arrange invoicing.</p>
            </div>

            <div className="p-6 border-l-4 border-professional-blue group hover:bg-professional-blue/5 transition-colors">
              <h3 className="text-lg font-bold text-charcoal mb-3">What's your cancellation policy?</h3>
              <p className="text-charcoal/70 leading-relaxed">We offer free rescheduling with 24 hours notice. Cancellations with less than 24 hours notice may incur a $25 fee. No-shows incur the full service fee.</p>
            </div>

            <div className="p-6 border-l-4 border-professional-blue group hover:bg-professional-blue/5 transition-colors">
              <h3 className="text-lg font-bold text-charcoal mb-3">Do you offer bulk or volume discounts?</h3>
              <p className="text-charcoal/70 leading-relaxed">Yes! For title companies, lenders, and other high-volume clients, we offer custom pricing. Contact us to discuss your specific needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-white w-full flex items-center justify-center" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
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
