import React from 'react';
import { Link } from 'react-router-dom';

const DualCitizenshipPage: React.FC = () => {
  return (
    <>
      {/* Quick Links to Other Apostille Services */}
      <section className="bg-professional-blue/5 border-b border-professional-blue/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-charcoal/70 font-medium">Apostille Services:</span>
            <Link to="/overseas-property" className="text-professional-blue hover:text-professional-blue/80 hover:underline transition-colors font-medium">Overseas Property</Link>
            <span className="text-charcoal/30">•</span>
            <Link to="/study-abroad" className="text-professional-blue hover:text-professional-blue/80 hover:underline transition-colors font-medium">Study Abroad</Link>
            <span className="text-charcoal/30">•</span>
            <Link to="/international-adoption" className="text-professional-blue hover:text-professional-blue/80 hover:underline transition-colors font-medium">International Adoption</Link>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="bg-off-white border-b border-professional-blue/20">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-professional-blue hover:text-professional-blue/80 transition-colors">Home</Link>
            <svg className="w-4 h-4 text-charcoal/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/apostille" className="text-professional-blue hover:text-professional-blue/80 transition-colors">Apostille</Link>
            <svg className="w-4 h-4 text-charcoal/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-charcoal/70">Dual Citizenship</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white text-charcoal w-full py-24 md:py-32" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-professional-blue/10 px-4 py-2 text-sm font-medium mb-6 border border-professional-blue/20">
              <svg className="w-4 h-4 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.5 3.5 10.5 3.5 15S6.5 23.5 12 23.5s8.5-4 8.5-8.5-3-8.5-8.5-8.5z" />
              </svg>
              <span className="text-professional-blue">Apostille Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-charcoal">
              Apostille Support for Dual Citizenship
            </h1>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Prepare birth certificates, marriage records, background checks, and other civil documents for dual citizenship applications worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 bg-white" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Common Dual Citizenship Documents</h2>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
              We help authenticate the core records required by consulates and embassies worldwide.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="border-l-2 border-professional-blue pl-6 py-4">
                <h3 className="text-lg font-bold text-charcoal mb-3">Vital Records</h3>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Birth Certificates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Marriage Records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Divorce Decrees</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-professional-blue pl-6 py-4">
                <h3 className="text-lg font-bold text-charcoal mb-3">Identity & Background</h3>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Passports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Background Checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Notarized Copies</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-2 border-professional-blue pl-6 py-4">
              <h3 className="text-lg font-bold text-charcoal mb-3">Consular Requirements</h3>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Affidavits</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Residency Proofs</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Parental Consent & Lineage Documents</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Apostille Services */}
      <section className="py-20 lg:py-28 bg-white border-t border-professional-blue/20 w-full">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Other Apostille Services</h2>
            <p className="text-lg text-charcoal/70">Explore our other international document authentication services</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/overseas-property" className="border-l-2 border-professional-blue pl-6 py-6 group hover:scale-105 transition-transform cursor-pointer">
              <h3 className="text-xl font-bold text-charcoal mb-2">Overseas Property</h3>
              <p className="text-charcoal/70 mb-4 text-sm">Authenticate property deeds and real estate documents</p>
              <span className="inline-flex items-center gap-2 text-professional-blue text-sm font-semibold group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link to="/study-abroad" className="border-l-2 border-professional-blue pl-6 py-6 group hover:scale-105 transition-transform cursor-pointer">
              <h3 className="text-xl font-bold text-charcoal mb-2">Study Abroad</h3>
              <p className="text-charcoal/70 mb-4 text-sm">Certify educational records for international university applications</p>
              <span className="inline-flex items-center gap-2 text-professional-blue text-sm font-semibold group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link to="/international-adoption" className="border-l-2 border-professional-blue pl-6 py-6 group hover:scale-105 transition-transform cursor-pointer">
              <h3 className="text-xl font-bold text-charcoal mb-2">International Adoption</h3>
              <p className="text-charcoal/70 mb-4 text-sm">Authenticate legal documents for international adoption proceedings</p>
              <span className="inline-flex items-center gap-2 text-professional-blue text-sm font-semibold group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-professional-blue/10 w-full">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Ready to Apply for Dual Citizenship?</h2>
          <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
            Our apostille experts handle all your authentication needs. Get started today with our simple booking process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="inline-flex items-center justify-center bg-professional-blue text-white hover:bg-professional-blue/90 transition-all rounded text-lg py-3 px-8 font-semibold">
              Book Your Service
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center border-2 border-professional-blue text-professional-blue hover:bg-professional-blue hover:text-white transition-all rounded text-lg py-3 px-8 font-semibold">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DualCitizenshipPage;
