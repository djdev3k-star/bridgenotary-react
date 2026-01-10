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
    <div className="w-full bg-professional-blue/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-professional-blue/10 text-charcoal w-screen left-1/2 -translate-x-1/2 py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.1em] uppercase text-professional-blue mb-4">Simple & Transparent</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-deep-navy">
              Professional Pricing You Can Trust
            </h1>
            <p className="text-xl text-charcoal/80 leading-relaxed">
              Flat-rate pricing with no hidden fees. Know exactly what you're paying before you book.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing Tiers */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">Choose Your Service Level</h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">Three professional packages designed for your needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Geometric overlays for off-center effect */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-professional-blue/5 -z-10"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-professional-blue/8 -z-10"></div>
            
            {pricingTiers.map((tier, idx) => (
              <div 
                key={idx}
                className={`relative p-8 border-2 transition-all ${
                  tier.popular 
                    ? 'border-professional-blue bg-professional-blue/5 transform md:scale-105 shadow-lg' 
                    : 'border-neutral-200 bg-white hover:border-professional-blue hover:shadow-md'
                }`}
              >
                {/* Geometric accent for popular tier */}
                {tier.popular && (
                  <>
                    <div className="absolute -top-px -right-px w-32 h-32 bg-professional-blue/10"></div>
                    <div className="absolute -bottom-px -left-px w-24 h-24 bg-professional-blue/5"></div>
                  </>
                )}
                
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-professional-blue text-white text-xs font-bold py-1 px-4">MOST POPULAR</span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-deep-navy mb-2 relative z-10">{tier.name}</h3>
                <p className="text-charcoal text-sm mb-6 leading-relaxed relative z-10">{tier.description}</p>
                
                <div className="mb-6 relative z-10">
                  <div className="text-4xl font-bold text-professional-blue">{tier.price}</div>
                  <div className="text-sm text-soft-gray">{tier.period}</div>
                </div>

                <ul className="space-y-3 mb-8 relative z-10">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-charcoal text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={tier.cta === 'Learn More' ? '/ron' : '/book'}
                  className={`block w-full py-3 px-6 font-semibold text-center transition-all relative z-10 ${
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
      <section className="py-20 lg:py-28 bg-professional-blue/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">Service Details</h2>
            <p className="text-lg text-charcoal">Comprehensive pricing for all our notary and signing services.</p>
          </div>

          {/* Loan Signing Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-deep-navy mb-6">Loan Signing Services</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {coreServices.map((service, idx) => (
                <div key={idx} className="bg-white p-6 border border-neutral-200 hover:border-professional-blue hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-base font-semibold text-deep-navy">{service.name}</h4>
                    <div className="text-2xl font-bold text-professional-blue">{service.fee}</div>
                  </div>
                  <p className="text-xs text-soft-gray">{service.notes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Add-On Services */}
          <div>
            <h3 className="text-2xl font-bold text-deep-navy mb-6">Add-On Services</h3>
            <p className="text-charcoal mb-6">Optional services to enhance your signing experience.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {addOnServices.map((service, idx) => (
                <div key={idx} className="bg-white p-5 border border-neutral-200 hover:bg-off-white transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-sm font-semibold text-deep-navy">{service.name}</h4>
                    <div className="text-lg font-bold text-professional-blue">{service.fee}</div>
                  </div>
                  <p className="text-xs text-soft-gray">{service.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div className="pb-8 border-b border-neutral-200 last:border-b-0 last:pb-0">
              <h3 className="text-lg font-bold text-deep-navy mb-3">Do your fees include travel?</h3>
              <p className="text-charcoal leading-relaxed">Our standard fees include travel within 10-15 miles depending on service type. For distances beyond that, we charge a small additional fee based on distance. Always ask about travel during booking.</p>
            </div>

            <div className="pb-8 border-b border-neutral-200 last:border-b-0 last:pb-0">
              <h3 className="text-lg font-bold text-deep-navy mb-3">Are there additional fees for weekends?</h3>
              <p className="text-charcoal leading-relaxed">Yes, weekend and after-hours appointments (before 8 AM or after 6 PM) incur a $50 additional fee. This helps us accommodate urgent requests outside standard business hours.</p>
            </div>

            <div className="pb-8 border-b border-neutral-200 last:border-b-0 last:pb-0">
              <h3 className="text-lg font-bold text-deep-navy mb-3">What payment methods do you accept?</h3>
              <p className="text-charcoal leading-relaxed">We accept all major credit cards, Cash App, Venmo, and cash. Payment is due at the time of service. For corporate accounts, we can arrange invoicing.</p>
            </div>

            <div className="pb-8 border-b border-neutral-200 last:border-b-0 last:pb-0">
              <h3 className="text-lg font-bold text-deep-navy mb-3">What's your cancellation policy?</h3>
              <p className="text-charcoal leading-relaxed">We offer free rescheduling with 24 hours notice. Cancellations with less than 24 hours notice may incur a $25 fee. No-shows incur the full service fee.</p>
            </div>

            <div className="pb-8 border-b border-neutral-200 last:border-b-0 last:pb-0">
              <h3 className="text-lg font-bold text-deep-navy mb-3">Do you offer bulk or volume discounts?</h3>
              <p className="text-charcoal leading-relaxed">Yes! For title companies, lenders, and other high-volume clients, we offer custom pricing. Contact us to discuss your specific needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-deep-navy text-off-white w-screen left-1/2 -translate-x-1/2 flex items-center justify-center">
        <div className="max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-off-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book your appointment or request a custom quote for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              className="inline-flex items-center justify-center gap-3 border-2 border-off-white text-off-white hover:bg-off-white hover:text-deep-navy transition-all text-lg py-4 px-8 font-semibold"
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
