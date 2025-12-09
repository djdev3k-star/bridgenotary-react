import { Link } from "react-router-dom";

const coreServices = [
  { name: 'Refinance', link: '/loan-signing/refinance' },
  { name: 'Purchase (Buyer)', link: '/loan-signing/purchase' },
  { name: 'Seller', link: '/loan-signing/seller' },
  { name: 'Reverse Mortgage (Application & Closing)', link: '/loan-signing/reverse' },
  { name: 'HELOC / Equity Loans', link: '/loan-signing/heloc' },
  { name: 'Loan Modifications', link: '/loan-signing/modification' },
  { name: 'Commercial Closings', link: '/loan-signing/commercial' },
  { name: 'TX Property Tax Loans', link: '/loan-signing/property-tax' },
];

const addOnServices = [
  'Scanbacks',
  'Printing',
  'Additional Signers',
  'Weekend/After Hours',
  'Travel',
  'Facility Fee (TX Equity Loans)',
];

const Services = () => (
  <div>
    {/* Hero section - match Pricing style with white card */}
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8 border border-proof/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-proof mb-6">Our Services</h1>
              <p className="text-xl text-neutral-600 mb-8 max-w-3xl">
                Professional loan signing and mobile notary services tailored for lenders, title companies, and legal teams — delivered reliably and on your schedule.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book" className="button-primary text-lg py-4 px-8 inline-block text-center">Book a Signing</Link>
                <Link to="/contact" className="button-outline text-lg py-4 px-8 inline-block text-center">Contact Sales</Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white rounded-lg shadow-xl p-6">
                <div className="text-sm text-proof uppercase tracking-wider font-semibold mb-2">Trusted Notary Solutions</div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Reliable, Professional, On-Time</h2>
                <p className="text-neutral-700 mb-4">We bring expertise and clear communication to every signing. Count on punctuality and meticulous attention to detail.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-electric-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-neutral-600">NNA Certified</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-electric-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-neutral-600">E&O Insured ($100,000)</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-electric-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-neutral-600">Texas Commissioned Notary</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Image strip removed per latest content direction */}
      </div>
    </section>

      {/* Featured Service Callouts (moved up under hero) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-proof mb-10">Featured Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Stack of Loan Documents */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200">
              <img src="/images/stack-loan-documents.jpg" alt="Stack of Loan Documents" className="w-full h-64 md:h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Loan Signing Packages</h3>
                <p className="text-white/90 mb-4">Refinance, Purchase, Reverse Mortgage, HELOC — expertly handled and on-time.</p>
                <div className="flex gap-3">
                  <Link to="/loan-signing" className="bg-electric-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-hover-blue">Explore Loan Signing</Link>
                  <Link to="/book" className="bg-white/90 text-proof px-5 py-3 rounded-lg font-semibold hover:bg-white">Book Now</Link>
                </div>
              </div>
            </div>

            {/* Overseas Property / Power of Attorney */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200">
              <img src="/images/overseas-property.png" alt="Overseas Property Authorization" className="w-full h-64 md:h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">International Power of Attorney</h3>
                <p className="text-white/90 mb-4">Notarization + Apostille sequencing for overseas property transactions.</p>
                <div className="flex gap-3">
                  <Link to="/apostille" className="bg-electric-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-hover-blue">Apostille Services</Link>
                  <Link to="/contact" className="bg-white/90 text-proof px-5 py-3 rounded-lg font-semibold hover:bg-white">Ask a Specialist</Link>
                </div>
              </div>
            </div>

            {/* General Notary With Stamp */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200">
              <img src="/images/notarypublic-generalimagewithstamp.jpg" alt="General Notary with Stamp" className="w-full h-64 md:h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">General Notary Work</h3>
                <p className="text-white/90 mb-4">Affidavits, acknowledgements, jurats, and more — fast and convenient.</p>
                <div className="flex gap-3">
                  <Link to="/services" className="bg-electric-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-hover-blue">View Notary Services</Link>
                  <Link to="/book" className="bg-white/90 text-proof px-5 py-3 rounded-lg font-semibold hover:bg-white">Schedule</Link>
                </div>
              </div>
            </div>

            {/* RON Featured: Upload Documents */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200">
              <img src="/images/upload-documents.png" alt="Upload Documents for RON" className="w-full h-64 md:h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Remote Online Notarization</h3>
                <p className="text-white/90 mb-4">Upload documents, verify identity, and complete securely online.</p>
                <div className="flex gap-3">
                  <Link to="/ron" className="bg-electric-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-hover-blue">Remote Online Notary</Link>
                  <Link to="/contact" className="bg-white/90 text-proof px-5 py-3 rounded-lg font-semibold hover:bg-white">Get a Quote</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Main Services Section */}
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-lg text-neutral-700 mb-10 max-w-4xl">
          Bridge Notary specializes in a comprehensive suite of loan signings and mobile notarial work for real estate, lending, and legal professionals.
        </p>
        <div className="grid md:grid-cols-2 gap-12">

          <div className="card">

            <h2 className="text-2xl font-bold text-proof mb-6">Core Signing Services</h2>
            <ul className="list-disc list-inside text-neutral-700 space-y-3 text-lg">
              {coreServices.map((item) => (
                <li key={item.name}>
                  <Link to={item.link} className="text-electric-blue hover:text-hover-blue hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">

            <h2 className="text-2xl font-bold text-proof mb-6">Value-Added Services</h2>
            <ul className="list-disc list-inside text-neutral-700 space-y-3 text-lg">
              {addOnServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Quick Action Section */}

    <section className="py-16 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="card">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-proof mb-4">Ready to Schedule?</h2>
              <p className="text-neutral-600 mb-4">Schedule your signing appointment today. We serve the Dallas-Fort Worth area and surrounding counties.</p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-electric-blue mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-neutral-700">Fast response within 2 hours</span>
                </div>
                {/* Phone removed per latest direction */}
              </div>
            </div>
            {/* Booking button restored per latest direction */}
            <div className="md:w-1/3 flex justify-center">
              <Link to="/book" className="button-primary py-4 px-8 flex items-center justify-center gap-2 text-lg font-medium">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a Signing
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* What to Bring Section */}
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-proof mb-10 text-center">What to Bring</h2>
        <div className="grid md:grid-cols-3 gap-8">

          <div className="card flex flex-col items-center text-center">

            <div className="bg-electric-blue/10 rounded-full p-3 mb-4">
              <svg className="w-8 h-8 text-electric-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 7h.01M3.5 7v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-13a2 2 0 0 0-2 2z"/>
                <path d="M3.5 7H6m11 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-proof mb-3">Government-issued Photo ID</h3>
            <p className="text-neutral-600">Valid driver's license, passport, or state ID card</p>
          </div>

          <div className="card flex flex-col items-center text-center">

            <div className="bg-electric-blue/10 rounded-full p-3 mb-4">
              <svg className="w-8 h-8 text-electric-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-proof mb-3">Loan Documents</h3>
            <p className="text-neutral-600">Any loan documents that require notarization</p>
          </div>

          <div className="card flex flex-col items-center text-center">

            <div className="bg-electric-blue/10 rounded-full p-3 mb-4">
              <svg className="w-8 h-8 text-electric-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <path d="M22 4 12 14.01l-3-3"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-proof mb-3">Supporting Documentation</h3>
            <p className="text-neutral-600">Any additional documents requested by your lender or title company</p>
          </div>
        </div>
      </div>
    </section>

    {/* Related Services removed per latest content direction */}

    {/* Featured Service Callouts moved above; removing duplicate here */}

    {/* Contact Section */}
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="card">

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-proof mb-6">Contact Us</h2>
              <p className="text-neutral-600 mb-8">
                Have questions about our services or need assistance with your notary needs? Our team is ready to help.
              </p>
              <div className="space-y-4">
                {/* TODO: Add phone contact for future development */}
                {/* <a href="tel:+14696298932" className="flex items-center gap-3 text-neutral-700 hover:text-electric-blue transition-colors group"> */}
                  {/* <div className="bg-electric-blue/10 p-3 rounded-full group-hover:bg-electric-blue/20 transition-colors"> */}
                    {/* <svg className="w-5 h-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"> */}
                      {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /> */}
                    {/* </svg> */}
                  {/* </div> */}
                  {/* <span className="text-lg font-medium">(469) 629-8932</span> */}
                {/* </a> */}
                <a href="mailto:info@bridgenotary.com" className="flex items-center gap-3 text-neutral-700 hover:text-electric-blue transition-colors group">
                  <div className="bg-electric-blue/10 p-3 rounded-full group-hover:bg-electric-blue/20 transition-colors">

                    <svg className="w-5 h-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium">info@bridgenotary.com</span>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="space-y-6">

                <Link to="/book" className="block w-full button-primary py-4 px-8 text-center text-lg font-medium">
                  Book a Signing
                </Link>
                <Link to="/contact" className="block w-full button-outline py-4 px-8 text-center text-lg font-medium">

                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Services;
