import React from 'react';
import { Link } from 'react-router-dom';
const dualCitizenshipImage = '/images/dual-citizenship.png';

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

      {/* Hero Section - Full Width with Blue Gradient & Background Image */}
      <section className="relative overflow-hidden text-white min-h-[600px] flex items-center w-screen left-1/2 -translate-x-1/2">
        {/* Gradient Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-professional-blue via-professional-blue/80 to-professional-blue"></div>
        
        {/* Background Image with Opacity */}
        <div className="absolute inset-0 z-0 opacity-50">
          <img src={dualCitizenshipImage} alt="" className="w-full h-full object-cover" />
        </div>
        
        {/* Overlay Divs for Deepened Effect */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-professional-blue/60 via-professional-blue/50 to-professional-blue/65 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-professional-blue/20"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto py-32 md:py-40 px-6 relative z-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 text-sm font-medium mb-6 border border-white/40 rounded-full backdrop-blur-sm">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.5 3.5 10.5 3.5 15S6.5 23.5 12 23.5s8.5-4 8.5-8.5-3-8.5-8.5-8.5z" />
              </svg>
              <span className="text-white">Apostille Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
              Dual Citizenship Apostilles
            </h1>
            <p className="text-xl text-white/90 leading-relaxed drop-shadow">
              Professional authentication of civil records for your citizenship applications worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/book" className="inline-flex items-center justify-center bg-white text-professional-blue hover:bg-white/90 transition-all rounded font-bold py-3 px-8">
                Book Now
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-professional-blue transition-all rounded font-bold py-3 px-8">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Which Documents Need Apostille?</h2>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-12 max-w-3xl">
              Consulates and embassies require authenticated copies of vital records and supporting documents. We handle the complete apostille process.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="border-l-2 border-professional-blue pl-6 group">
                <div className="mb-4">
                  <svg className="w-10 h-10 text-professional-blue group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Vital Records</h3>
                <ul className="space-y-2 text-charcoal/70 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Birth Certificates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Marriage Records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Divorce Decrees</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-professional-blue pl-6 group">
                <div className="mb-4">
                  <svg className="w-10 h-10 text-professional-blue group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v10a2 2 0 002 2h5m0 0h5a2 2 0 002-2v-10a2 2 0 00-2-2h-5m0 0V5a2 2 0 012-2h3.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V7m0 0v8m0 0V7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Identity & Background</h3>
                <ul className="space-y-2 text-charcoal/70 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Passports & IDs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Background Checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Notarized Copies</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-professional-blue pl-6 group">
                <div className="mb-4">
                  <svg className="w-10 h-10 text-professional-blue group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Consular Requirements</h3>
                <ul className="space-y-2 text-charcoal/70 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Affidavits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Residency Proofs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Lineage Documents</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-professional-blue/5 border border-professional-blue/20 rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-charcoal mb-8">Our Apostille Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-professional-blue text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">1</div>
                <h4 className="font-semibold text-charcoal mb-2">Submit Docs</h4>
                <p className="text-sm text-charcoal/70">Provide copies of documents needing apostille</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-professional-blue text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">2</div>
                <h4 className="font-semibold text-charcoal mb-2">Verification</h4>
                <p className="text-sm text-charcoal/70">We verify documents with issuing authorities</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-professional-blue text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">3</div>
                <h4 className="font-semibold text-charcoal mb-2">Certification</h4>
                <p className="text-sm text-charcoal/70">Official apostille certificate is issued</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-professional-blue text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">4</div>
                <h4 className="font-semibold text-charcoal mb-2">Delivery</h4>
                <p className="text-sm text-charcoal/70">Authenticated documents sent to you</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Apostille Services */}
      <section className="py-20 lg:py-28 bg-professional-blue/5 border-t border-professional-blue/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Other Apostille Services</h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">Explore our complete range of international document authentication services</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/overseas-property" className="border-l-2 border-professional-blue pl-6 py-6 group hover:bg-white hover:shadow-md rounded transition-all">
              <h3 className="text-2xl font-bold text-charcoal mb-3">Overseas Property</h3>
              <p className="text-charcoal/70 mb-6 text-base leading-relaxed">Authenticate deeds, purchase agreements, and real estate documentation for international transactions</p>
              <span className="inline-flex items-center gap-2 text-professional-blue font-semibold group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link to="/study-abroad" className="border-l-2 border-professional-blue pl-6 py-6 group hover:bg-white hover:shadow-md rounded transition-all">
              <h3 className="text-2xl font-bold text-charcoal mb-3">Study Abroad</h3>
              <p className="text-charcoal/70 mb-6 text-base leading-relaxed">Certify transcripts, diplomas, and academic records for international university applications</p>
              <span className="inline-flex items-center gap-2 text-professional-blue font-semibold group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link to="/international-adoption" className="border-l-2 border-professional-blue pl-6 py-6 group hover:bg-white hover:shadow-md rounded transition-all">
              <h3 className="text-2xl font-bold text-charcoal mb-3">International Adoption</h3>
              <p className="text-charcoal/70 mb-6 text-base leading-relaxed">Authenticate birth certificates, court orders, and legal documents for adoption proceedings</p>
              <span className="inline-flex items-center gap-2 text-professional-blue font-semibold group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-professional-blue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Your Dual Citizenship Journey</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Our apostille experts ensure your documents meet consulate requirements. Complete the process with confidence and clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="inline-flex items-center justify-center bg-white text-professional-blue hover:bg-white/90 transition-all rounded font-bold py-3 px-10 text-lg">
              Book Apostille Service
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-professional-blue transition-all rounded font-bold py-3 px-10 text-lg">
              Chat with Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DualCitizenshipPage;
