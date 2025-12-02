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

const packages = [
  { 
    type: 'Standard',
    badge: 'Most Popular',
    fee: '$125',
    period: 'per signing',
    description: 'Perfect for most mortgage refinance or purchase closings',
    features: [
      'In-person signing at your location',
      'Document explanation & review',
      'ID verification & witnessing',
      'Electronic delivery to title',
      'Free 24-hour rescheduling'
    ],
    primaryFeature: true
  },
  { 
    type: 'Basic', 
    fee: '$75',
    period: 'per signing',
    description: 'For simple document notarization needs',
    features: [
      'Up to 5 signature notarizations',
      'Basic ID verification',
      'Standard availability',
      'Electronic copies provided',
      'Travel within 10 miles'
    ]
  },
  { 
    type: 'Premium', 
    fee: '$200',
    period: 'per signing',
    description: 'Full-service option for complex transactions',
    features: [
      'Priority scheduling',
      'Extended appointment time',
      'Document pre-review',
      'Digital & physical copies',
      'Travel up to 25 miles included',
      'After-hours availability'
    ]
  },
  { 
    type: 'Remote Online', 
    fee: '$100',
    period: 'per session',
    description: 'Convenient digital notarization from anywhere',
    features: [
      'Secure video conferencing',
      'Digital document signing',
      'Electronic journal entry',
      'Identity verification',
      'Available outside business hours'
    ]
  },
  { 
    type: 'Commercial', 
    fee: '$250+',
    period: 'per package',
    description: 'Specialized service for business transactions',
    features: [
      'Multi-party coordination',
      'Complex document handling',
      'Extended appointment duration',
      'Corporate verification protocols',
      'Priority scheduling'
    ]
  },
  { 
    type: 'Custom', 
    fee: 'Contact us',
    period: 'for quote',
    description: 'Tailored solutions for unique requirements',
    features: [
      'Custom scheduling options',
      'Multi-location coordination',
      'High-volume discounts',
      'Special handling requirements',
      'Dedicated account manager'
    ]
  },
];

const Pricing = () => {
  return (
    <div>
      <section className="bg-proof/10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
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
      </section>

      <div className="section bg-gray-50">
        <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
          <main className="w-full md:w-2/3 lg:w-3/4">
            {/* Pricing Packages */}
            <div className="mb-16">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-proof mb-4">Service Packages</h2>
                <p className="text-lg text-neutral-600 max-w-2xl">
                  Choose the service tier that best matches your needs. All packages include our professional notary expertise and dedication to excellence.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                  <div key={pkg.type} 
                    className={`flex flex-col h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border ${pkg.primaryFeature ? 'border-electric-blue' : 'border-neutral-200'}`}>
                    <div className="p-6 flex flex-col flex-grow">
                      {pkg.badge && (
                        <div className="bg-electric-blue text-white text-xs font-bold py-1 px-3 rounded-full inline-block mb-3">
                          {pkg.badge}
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-proof mb-2">{pkg.type}</h3>
                      <div className="flex items-baseline mb-4">
                        <span className="text-3xl font-bold text-neutral-900">{pkg.fee}</span>
                        <span className="text-sm text-neutral-500 ml-1">{pkg.period}</span>
                      </div>
                      <p className="text-neutral-600 mb-5 text-sm min-h-[40px]">{pkg.description}</p>
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                            </svg>
                            <span className="text-neutral-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="px-6 pb-6 mt-auto">
                      <a 
                        href="/book" 
                        className={`w-full py-3 px-4 rounded-lg transition-colors text-center block font-medium 
                        ${pkg.primaryFeature 
                          ? 'bg-electric-blue text-white hover:bg-hover-blue' 
                          : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200'}`}
                      >
                        Select {pkg.type}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
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
                        <tr key={index} className="hover:bg-neutral-50">
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
                        <tr key={index} className="hover:bg-neutral-50">
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
