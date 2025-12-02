// ServiceSidebar intentionally not used on this page - sidebar available if needed

// Fee categories
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

// Icon component helper
const icons = {
  video: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  home: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  document: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  star: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  building: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  handshake: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h-5.5m0 0L9 5m0 5l5 0m0 0a7 7 0 110 14 7 7 0 010-14z" />
    </svg>
  ),
};

// Package categories
const packageCategories = [
  {
    category: 'Online Notarization Packages',
    categoryColor: 'electric-blue',
    packages: [
      {
        type: 'Remote Online Notarization',
        icon: icons.video,
        iconColor: 'text-electric-blue',
        fee: '$100',
        period: 'per session',
        description: 'Secure digital notarization from anywhere.',
        features: [
          'Secure two-way video conferencing',
          'Digital document signing & notarization',
          'Identity verification & credential analysis',
          'Electronic journal entry',
          'Available outside standard business hours'
        ],
        cta: 'Select Remote Online'
      }
    ]
  },
  {
    category: 'Mobile Notary Packages',
    categoryColor: 'proof',
    packages: [
      {
        type: 'Basic Mobile',
        icon: icons.document,
        iconColor: 'text-proof',
        fee: '$75',
        period: 'per signing',
        description: 'Affordable option for simple in-person notarizations.',
        features: [
          'Up to 5 notarized signatures',
          'Basic ID verification',
          'Standard appointment availability',
          'Electronic copies provided',
          'Travel within 10 miles included'
        ],
        cta: 'Select Basic Mobile'
      },
      {
        type: 'Standard Mobile',
        icon: icons.home,
        iconColor: 'text-proof',
        fee: '$125',
        period: 'per signing',
        badge: 'Most Popular',
        description: 'Most popular option for general in-person document signings.',
        features: [
          'In-person signing at your location',
          'Document review & explanation',
          'Full ID verification & witnessing',
          'Electronic delivery to recipient',
          'Free 24-hour rescheduling',
          'Travel within 15 miles included'
        ],
        cta: 'Select Standard Mobile',
        primaryFeature: true
      },
      {
        type: 'Premium Mobile',
        icon: icons.star,
        iconColor: 'text-gold',
        fee: '$200',
        period: 'per signing',
        description: 'High-touch service for complex or time-sensitive appointments.',
        features: [
          'Priority scheduling & concierge support',
          'Extended appointment time',
          'Document pre-review',
          'Digital and physical copies',
          'Travel up to 25 miles included',
          'After-hours or weekend availability'
        ],
        cta: 'Select Premium Mobile'
      }
    ]
  },
  {
    category: 'Mortgage & Loan Signing Packages',
    categoryColor: 'royal-blue',
    packages: [
      {
        type: 'Standard Mortgage Signing',
        icon: icons.home,
        iconColor: 'text-royal-blue',
        fee: '$125',
        period: 'per closing',
        description: 'Ideal for most refinance and purchase closings.',
        features: [
          'In-person signing at borrower\'s location',
          'Full document explanation & review',
          'ID verification & witnessing',
          'Electronic delivery to title or lender',
          'Free 24-hour rescheduling',
          'Travel included'
        ],
        cta: 'Select Mortgage Standard'
      },
      {
        type: 'Premium Mortgage Signing',
        icon: icons.star,
        iconColor: 'text-gold',
        fee: '$200',
        period: 'per closing',
        description: 'Designed for complex loan packages, multi-borrower transactions, or tight timelines.',
        features: [
          'Priority scheduling',
          'Extended appointment time',
          'Pre-review of lender documents',
          'Physical & digital copies',
          'Travel up to 25 miles',
          'After-hours or weekend availability'
        ],
        cta: 'Select Mortgage Premium'
      },
      {
        type: 'Commercial Loan Signing',
        icon: icons.building,
        iconColor: 'text-electric-blue',
        fee: '$250+',
        period: 'per package',
        description: 'For business, commercial property, and multi-party loan transactions.',
        features: [
          'Multi-party or multi-location coordination',
          'Complex document handling',
          'Extended appointment duration',
          'Corporate identity verification protocols',
          'Priority scheduling'
        ],
        cta: 'Select Commercial'
      },
      {
        type: 'Custom Loan / Notary Packages',
        icon: icons.handshake,
        iconColor: 'text-proof',
        fee: 'Contact us',
        period: 'for quote',
        description: 'Tailored solutions for unusual, multi-site, or high-volume needs.',
        features: [
          'Flexible scheduling',
          'Multi-location coordination',
          'Bulk or corporate discounts',
          'Special document handling workflows',
          'Dedicated account manager'
        ],
        cta: 'Request Custom Quote'
      }
    ]
  }
];

const Pricing = () => {
  return (
    <div>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 border border-proof/10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-proof mb-6">Clear & Transparent Pricing</h1>
                <p className="text-xl text-neutral-600 mb-8 max-w-3xl">
                  Professional notary services with simple, flat-rate pricing. Choose the package that fits your needs or contact us for custom solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/book" className="button-primary text-lg py-4 px-8 inline-block text-center">Book Now</a>
                  <a href="/contact" className="button-outline text-lg py-4 px-8 inline-block text-center">Request Quote</a>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-white rounded-lg shadow-xl p-6">
                  <div className="text-sm text-proof uppercase tracking-wider font-semibold mb-2">Simple Fee Structure</div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">No Hidden Fees or Surprises</h2>
                  <p className="text-neutral-700 mb-4">Our pricing is straightforward and inclusive. Know exactly what you're paying for before you book.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-neutral-600">Fixed package rates</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-neutral-600">Transparent add-ons</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-neutral-600">No surprise charges</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section bg-gray-50">
        <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
          <main className="w-full md:w-2/3 lg:w-3/4">
            {/* Pricing Packages - Organized by Category */}
            <div className="mb-16">
              {packageCategories.map((categoryGroup) => (
                <div key={categoryGroup.category} className="mb-16">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-proof mb-2">{categoryGroup.category}</h2>
                    <div className={`h-1 w-16 bg-${categoryGroup.categoryColor}`}></div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryGroup.packages.map((pkg) => (
                      <div key={pkg.type} 
                        className={`flex flex-col h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border ${pkg.primaryFeature ? 'border-electric-blue border-2' : 'border-neutral-200'}`}>
                        
                        {/* Card Header with Icon */}
                        <div className={`p-6 pb-4 flex items-start gap-4 ${pkg.primaryFeature ? 'bg-electric-blue/5' : 'bg-white'}`}>
                          <div className={`flex-shrink-0 ${pkg.iconColor}`}>
                            {pkg.icon}
                          </div>
                          <div className="flex-grow">
                            {pkg.badge && (
                              <div className="bg-electric-blue text-white text-xs font-bold py-1 px-3 rounded-full inline-block mb-2">
                                {pkg.badge}
                              </div>
                            )}
                            <h3 className="text-xl font-bold text-proof">{pkg.type}</h3>
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-6 flex flex-col flex-grow">
                          <div className="flex items-baseline mb-4">
                            <span className="text-3xl font-bold text-neutral-900">{pkg.fee}</span>
                            <span className="text-sm text-neutral-500 ml-2">{pkg.period}</span>
                          </div>
                          <p className="text-neutral-600 mb-6 text-sm min-h-[50px]">{pkg.description}</p>
                          <ul className="space-y-3 mb-6">
                            {pkg.features.map((feature, i) => (
                              <li key={i} className="flex items-start text-sm">
                                <svg className="h-5 w-5 text-electric-blue mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-neutral-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Card Footer - CTA */}
                        <div className="px-6 pb-6 mt-auto">
                          <a 
                            href={pkg.fee === 'Contact us' ? '/contact' : '/book'} 
                            className={`w-full py-3 px-4 rounded-lg transition-colors text-center block font-medium 
                            ${pkg.primaryFeature 
                              ? 'bg-electric-blue text-white hover:bg-hover-blue' 
                              : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200'}`}
                          >
                            {pkg.cta}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Fee Table */}
            <div className="mb-16">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-proof mb-4">Detailed Fee Schedule</h2>
                <p className="text-lg text-neutral-600 max-w-2xl">
                  Reference our complete fee schedule for all notary services. All prices listed are base rates and may vary slightly based on location and complexity.
                </p>
              </div>

              {/* Core Services Table */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="px-6 py-4 bg-proof text-white">
                  <h3 className="text-xl font-bold">Core Notary Services</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-proof/90 border-b border-proof">
                      <tr>
                        <th className="px-6 py-3 text-left text-base font-bold text-white tracking-wide">Service</th>
                        <th className="px-6 py-3 text-right text-base font-bold text-white tracking-wide">Fee</th>
                        <th className="px-6 py-3 text-left text-base font-bold text-white tracking-wide">Notes</th>
                      </tr>
                    </thead>
                          <tbody className="divide-y divide-neutral-200">
                            {coreServices.map((service, index) => (
                              <tr key={index} className="hover:bg-neutral-50 even:bg-neutral-50">
                                <td className="px-6 py-4 text-sm font-medium text-neutral-800">{service.name}</td>
                                <td className="px-6 py-4 text-sm text-right font-semibold text-proof">{service.fee}</td>
                                <td className="px-6 py-4 text-sm text-neutral-600">{service.notes}</td>
                              </tr>
                            ))}
                          </tbody>
                  </table>
                </div>
              </div>

              {/* Add-On Services Table */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="px-6 py-4 bg-royal-blue text-white">
                  <h3 className="text-xl font-bold">Add-On Services</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-royal-blue border-b border-royal-blue">
                      <tr>
                        <th className="px-6 py-3 text-left text-base font-bold text-white tracking-wide">Service</th>
                        <th className="px-6 py-3 text-right text-base font-bold text-white tracking-wide">Fee</th>
                        <th className="px-6 py-3 text-left text-base font-bold text-white tracking-wide">Notes</th>
                      </tr>
                    </thead>
                      <tbody className="divide-y divide-neutral-200">
                        {addOnServices.map((service, index) => (
                          <tr key={index} className="hover:bg-neutral-50 even:bg-neutral-50">
                            <td className="px-6 py-4 text-sm font-medium text-neutral-800">{service.name}</td>
                            <td className="px-6 py-4 text-sm text-right font-semibold text-royal-blue">{service.fee}</td>
                            <td className="px-6 py-4 text-sm text-neutral-600">{service.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-proof mb-4">Frequently Asked Questions</h2>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Do your fees include travel?</h3>
                    <p className="text-neutral-700">Our standard fees include travel within 10 miles of our location. For distances beyond that, we charge a small additional fee based on distance.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Are there additional fees for weekends?</h3>
                    <p className="text-neutral-700">Yes, weekend and after-hours appointments (before 8am or after 6pm) incur a $50 additional fee.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">What payment methods do you accept?</h3>
                    <p className="text-neutral-700">We accept all major credit cards, Cash App, Venmo, and cash. Payment is due at the time of service.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">What if I need to cancel or reschedule?</h3>
                    <p className="text-neutral-700">We offer free rescheduling with 24 hours notice. Cancellations with less than 24 hours notice may incur a $25 fee.</p>
                  </div>
                </div>
              </div>
            </div>

           
          </main>
         {/* <ServiceSidebar /> */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
