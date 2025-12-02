import { Link } from "react-router-dom";

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

const Services = () => (
  <div>
    {/* Hero section */}
    <section className="bg-proof/10 py-20 px-6">
      <div className="max-w-6xl mx-auto">
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
            <div className="bg-neutral-100 rounded-xl shadow-md w-full h-96 p-8 flex flex-col items-center justify-center">
              <div className="bg-proof/10 rounded-full p-6 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-proof mb-2">Professional Notary Services</h3>
              <p className="text-neutral-600 text-center">Secure, reliable document signing for all your important transactions</p>
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
                <li key={item}>{item}</li>
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
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-electric-blue mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-neutral-700">(469) 629-8932</span>
                </div>
              </div>
            </div>
            // Booking button section (right side of quick action card)
           {/* <div className="md:w-1/3 flex justify-center">
                 
              <Link to="/book" className="button-primary py-4 px-8 flex items-center justify-center gap-2 text-lg font-medium">
                
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a Signing
              </Link>
            </div>*/}
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

    {/* Related Services Section */}
    <section className="py-16 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-proof mb-10 text-center">Related Services</h2>
        <div className="grid md:grid-cols-3 gap-8">

          <Link to="/ron" className="card hover:border-electric-blue hover:shadow-md transition-all">

            <h3 className="text-xl font-bold text-proof mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Remote Online Notarization
            </h3>
            <p className="text-neutral-600">Complete your notarization securely from anywhere, in minutes.</p>
          </Link>

          <Link to="/apostille" className="card hover:border-electric-blue hover:shadow-md transition-all">

            <h3 className="text-xl font-bold text-proof mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
              Apostille Services
            </h3>
            <p className="text-neutral-600">Document authentication for international use.</p>
          </Link>

          <Link to="/loan-signing" className="card hover:border-electric-blue hover:shadow-md transition-all">

            <h3 className="text-xl font-bold text-proof mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Loan Signing Services
            </h3>
            <p className="text-neutral-600">Specialized notary services for real estate transactions.</p>
          </Link>
        </div>
      </div>
    </section>

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
