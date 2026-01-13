import React from 'react';
import { Link } from 'react-router-dom';

const InternationalAdoptionPage: React.FC = () => {
  return (
    <>
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
            <span className="text-charcoal/70">International Adoption</span>
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
              Apostille Support for International Adoption
            </h1>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Authenticate home studies, vital records, and legal documents for adoption dossiers with reliable apostille and legalization support.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 bg-white" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Common International Adoption Documents</h2>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
              We help compile and authenticate documents required by foreign central authorities and courts.
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
                    <span>Marriage Certificates</span>
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
                <h3 className="text-lg font-bold text-charcoal mb-3">Home Study & Legal</h3>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Home Studies</span>
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
                    <span>Court Orders</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-2 border-professional-blue pl-6 py-4">
              <h3 className="text-lg font-bold text-charcoal mb-3">Dossier Requirements</h3>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Agency Letters</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Medical Letters</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Financial Statements & Consent Forms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-professional-blue/10 w-full">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Streamline Your Adoption Journey</h2>
          <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
            Let our experts handle your document authentication. We understand the urgency of adoption dossiers.
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

export default InternationalAdoptionPage;
