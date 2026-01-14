import React from 'react';
import { Link } from 'react-router-dom';
const overseasPropertyImage = '/images/overseas-property.png';

const OverseasPropertyPage: React.FC = () => {
  return (
    <>
      {/* Quick Links to Other Apostille Services */}
      <section className="bg-professional-blue/5 border-b border-professional-blue/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-charcoal/70 font-medium">Apostille Services:</span>
            <Link to="/dual-citizenship" className="text-professional-blue hover:text-professional-blue/80 hover:underline transition-colors font-medium">Dual Citizenship</Link>
            <span className="text-charcoal/30">•</span>
            <Link to="/study-abroad" className="text-professional-blue hover:text-professional-blue/80 hover:underline transition-colors font-medium">Study Abroad</Link>
            <span className="text-charcoal/30">•</span>
            <Link to="/international-adoption" className="text-professional-blue hover:text-professional-blue/80 hover:underline transition-colors font-medium">International Adoption</Link>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero-dark" style={{backgroundImage: `url(${overseasPropertyImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-gradient-to-r from-professional-blue via-professional-blue/80 to-professional-blue"></div>
        <div className="absolute inset-0 mix-blend-multiply" style={{backgroundImage: `url(${overseasPropertyImage})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.5}}></div>
        <div className="absolute inset-0 bg-professional-blue/20"></div>
        <div className="hero-content text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="hero-title text-white">
              International Real Estate Made Simple
            </h1>
            <p className="hero-subtitle text-white/90">
              Authenticate property documents and deeds for overseas real estate transactions with certified apostille support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link to="/book" className="inline-flex items-center justify-center bg-white text-professional-blue hover:bg-professional-blue hover:text-white transition-all rounded text-lg py-3 px-8 font-bold drop-shadow-lg">
                Book Apostille Service
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center bg-white/20 border-2 border-white text-white hover:bg-white hover:text-professional-blue transition-all rounded text-lg py-3 px-8 font-bold drop-shadow-lg">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Essential Property Documents for Apostille</h2>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-12">
              We authenticate and certify all property-related documents for international real estate transactions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-l-2 border-professional-blue pl-6 group">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="h-6 w-6 text-professional-blue group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-bold text-charcoal">Property Deeds</h3>
                </div>
                <ul className="space-y-2 text-charcoal/70 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Ownership Documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Title Transfers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Deed Recordings</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-professional-blue pl-6 group">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="h-6 w-6 text-professional-blue group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 6H6.28l-.31-1.243A1 1 0 005 4H3z" />
                    <path d="M16 16a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-charcoal">Purchase Agreements</h3>
                </div>
                <ul className="space-y-2 text-charcoal/70 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Sales Contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Purchase Agreements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Closing Documents</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-professional-blue pl-6 group">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="h-6 w-6 text-professional-blue group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v2a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-bold text-charcoal">Legal Certification</h3>
                </div>
                <ul className="space-y-2 text-charcoal/70 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Power of Attorney</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Notarized Declarations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Affidavits</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Apostille Process */}
          <div className="mb-16 py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">Our Apostille Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-professional-blue text-white text-lg font-bold mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">Submit Documents</h3>
                <p className="text-sm text-charcoal/70">Provide property deeds and legal documents for review</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-professional-blue text-white text-lg font-bold mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">Verification</h3>
                <p className="text-sm text-charcoal/70">We verify document authenticity with authorities</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-professional-blue text-white text-lg font-bold mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">Certification</h3>
                <p className="text-sm text-charcoal/70">Official apostille certificate is attached</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-professional-blue text-white text-lg font-bold mb-4 mx-auto">
                  4
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">Delivery</h3>
                <p className="text-sm text-charcoal/70">Documents ready for international use</p>
              </div>
            </div>
          </div>

          {/* Property Markets by Country */}
          <div className="mb-16 bg-professional-blue/5 rounded-lg p-8 border-l-2 border-professional-blue">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">Property Markets by Country</h2>
            <p className="text-lg text-charcoal/70 mb-8">
              Different countries have unique document requirements for real estate transactions. We're familiar with apostille requirements across major international markets.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded border border-professional-blue/20 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-charcoal mb-3 flex items-center gap-2">
                  <span className="text-2xl">🇲🇽</span> Mexico
                </h3>
                <p className="text-sm text-charcoal/70 mb-2"><span className="font-semibold">Timeline:</span> 5-10 business days</p>
                <p className="text-sm text-charcoal/70"><span className="font-semibold">Key Documents:</span> Property deed (escritura), identification, power of attorney</p>
              </div>
              <div className="bg-white rounded border border-professional-blue/20 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-charcoal mb-3 flex items-center gap-2">
                  <span className="text-2xl">🇨🇦</span> Canada
                </h3>
                <p className="text-sm text-charcoal/70 mb-2"><span className="font-semibold">Timeline:</span> 3-5 business days</p>
                <p className="text-sm text-charcoal/70"><span className="font-semibold">Key Documents:</span> Deed of title, mortgage documents, survey</p>
              </div>
              <div className="bg-white rounded border border-professional-blue/20 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-charcoal mb-3 flex items-center gap-2">
                  <span className="text-2xl">🇬🇧</span> United Kingdom
                </h3>
                <p className="text-sm text-charcoal/70 mb-2"><span className="font-semibold">Timeline:</span> 5-7 business days</p>
                <p className="text-sm text-charcoal/70"><span className="font-semibold">Key Documents:</span> Land Registry documents, transfer deed, proof of ownership</p>
              </div>
              <div className="bg-white rounded border border-professional-blue/20 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-charcoal mb-3 flex items-center gap-2">
                  <span className="text-2xl">🇨🇴</span> Colombia
                </h3>
                <p className="text-sm text-charcoal/70 mb-2"><span className="font-semibold">Timeline:</span> 5-10 business days</p>
                <p className="text-sm text-charcoal/70"><span className="font-semibold">Key Documents:</span> Escritura pública, certificado de libertad y tradición, identification</p>
              </div>
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
            <Link to="/dual-citizenship" className="border-l-2 border-professional-blue pl-6 py-6 group hover:bg-white hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-charcoal mb-2">Dual Citizenship</h3>
              <p className="text-charcoal/70 mb-4 text-base">Authenticate documents for citizenship and immigration purposes</p>
              <span className="inline-flex items-center gap-2 text-professional-blue text-sm font-semibold group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link to="/study-abroad" className="border-l-2 border-professional-blue pl-6 py-6 group hover:bg-white hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-charcoal mb-2">Study Abroad</h3>
              <p className="text-charcoal/70 mb-4 text-base">Certify educational records for international university applications</p>
              <span className="inline-flex items-center gap-2 text-professional-blue text-sm font-semibold group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link to="/international-adoption" className="border-l-2 border-professional-blue pl-6 py-6 group hover:bg-white hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-charcoal mb-2">International Adoption</h3>
              <p className="text-charcoal/70 mb-4 text-base">Authenticate legal documents for international adoption proceedings</p>
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
      <section className="py-20 lg:py-28 bg-professional-blue w-full">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Authenticate Your Property Documents?</h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Our experts guide you through every step of the apostille process for international real estate transactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="inline-flex items-center justify-center bg-white text-professional-blue hover:bg-professional-blue hover:text-white transition-all rounded text-lg py-3 px-8 font-bold">
              Book Your Service
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center bg-white/20 border-2 border-white text-white hover:bg-white hover:text-professional-blue transition-all rounded text-lg py-3 px-8 font-bold">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default OverseasPropertyPage;
