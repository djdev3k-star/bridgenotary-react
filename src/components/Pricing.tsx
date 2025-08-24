import ServiceSidebar from "@/components/layout/ServiceSidebar";

const coreServices = [
  'Refinance',
  'Purchase (Buyer)',
  'Seller',
  'Reverse Mortgage (Application & Closing)',
  'HELOC / Equity Loans',
  'Loan Modifications',
  'Commercial Closings',
  'TX Property Tax Loans',
];

const addOnServices = [
  'Scanbacks',
  'Printing',
  'Additional Signers',
  'Weekend/After Hours',
  'Travel',
  'Facility Fee (TX Equity Loans)',
];

const packages = [
  { 
    type: 'Refinance', 
    fee: '$125–$150',
    description: 'Complete loan package signing with scanbacks',
    features: ['Full document review', 'ID verification', 'Digital delivery', 'Priority scheduling']
  },
  { 
    type: 'Buyer', 
    fee: '$100–$125',
    description: 'Purchase closing document signing',
    features: ['Document explanation', 'Witness services', 'Same-day processing', 'Flexible scheduling']
  },
  { 
    type: 'Seller', 
    fee: '$75–$100',
    description: 'Seller-side document signing',
    features: ['Quick turnaround', 'Multiple location options', 'Electronic delivery', 'Basic notarization']
  },
  { 
    type: 'Reverse Mortgage', 
    fee: '$125–$175',
    description: 'Specialized reverse mortgage signing',
    features: ['Extended appointment time', 'Detailed explanation', 'Multiple sessions if needed', 'Senior-friendly service']
  },
  { 
    type: 'Commercial/Business', 
    fee: '$200+',
    description: 'Complex commercial transaction signing',
    features: ['Multi-party coordination', 'Extended hours', 'Rush service available', 'Volume discounts']
  },
  { 
    type: 'Loan Modification', 
    fee: '$40–$60',
    description: 'Loan modification document signing',
    features: ['Basic notarization', 'Quick service', 'Flexible scheduling', 'Affordable rates']
  },
];

const Pricing = () => (
  <div>
    <section className="bg-gradient-to-b from-proof/10 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-proof mb-6">Services & Pricing</h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl">
              Transparent, flat-rate pricing for common services — plus tailored quotes for complex or out-of-area work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/book" className="button-primary text-lg py-4 px-8 inline-block text-center">Book Now</a>
              <a href="/contact" className="button-outline text-lg py-4 px-8 inline-block text-center">Contact Us</a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-neutral-100 rounded-lg aspect-4/3" />
          </div>
        </div>
      </div>
    </section>

    <div className="section bg-gradient-to-b from-white to-gray-50">
      <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
      <main className="w-full md:w-2/3 lg:w-3/4">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Services & Pricing
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl">
            We offer transparent, flat-rate pricing for our most common services. For custom quotes or complex assignments, please contact us directly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Signing Services</h3>
              <ul className="space-y-4">
                {coreServices.map((item) => (
                  <li key={item} className="flex items-start">
                    <svg className="h-6 w-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Value-Added Services</h3>
              <ul className="space-y-4">
                {addOnServices.map((item) => (
                  <li key={item} className="flex items-start">
                    <svg className="h-6 w-6 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing & Packages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.type} 
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.type}</h3>
                  <div className="text-2xl font-bold text-primary mb-3">{pkg.fee}</div>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6">
                  <button className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6 italic">
            * Fees may vary based on location, time, and complexity. Add-on services such as scanbacks or extra signers are quoted separately.
          </p>
        </div>
      </main>
      <ServiceSidebar />
      </div>
    </div>
  </div>
);

export default Pricing;
