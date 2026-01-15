import React from 'react';
import { Link } from 'react-router-dom';
import { featureFlags } from '@/utils/featureFlags';

const DestinationWeddingPage: React.FC = () => {
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
            {featureFlags.enableApostille ? (
              <>
                <Link to="/apostille" className="text-professional-blue hover:text-professional-blue/80 transition-colors">Apostille</Link>
                <svg className="w-4 h-4 text-charcoal/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </>
            ) : (
              <>
                <Link to="/services" className="text-professional-blue hover:text-professional-blue/80 transition-colors">Services</Link>
                <svg className="w-4 h-4 text-charcoal/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </>
            )}
            <span className="text-charcoal/70">Destination Wedding</span>
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
              <span className="text-professional-blue">
                {featureFlags.enableApostille ? 'Apostille Services' : 'Document Services'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-charcoal">
              {featureFlags.enableApostille 
                ? 'Document Authentication for Destination Weddings'
                : 'Notary Services for Destination Weddings'
              }
            </h1>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              {featureFlags.enableApostille
                ? 'Authenticate marriage licenses, birth certificates, and legal documents for international wedding celebrations with certified apostille support.'
                : 'Professional notarization and document authentication for international wedding celebrations and legal requirements.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 bg-white" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Common Destination Wedding Documents</h2>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
              We help authenticate and certify documents for international wedding ceremonies and legal recognition abroad.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="border-l-2 border-professional-blue pl-6 py-4">
                <h3 className="text-lg font-bold text-charcoal mb-3">Marriage Documents</h3>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Marriage Licenses</span>
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
                    <span>Divorce Decrees & Name Change Documents</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-professional-blue pl-6 py-4">
                <h3 className="text-lg font-bold text-charcoal mb-3">Identity & Legal</h3>
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
                    <span>Passports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Notarized Declarations & Affidavits</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-2 border-professional-blue pl-6 py-4">
              <h3 className="text-lg font-bold text-charcoal mb-3">Wedding Materials</h3>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Power of Attorney</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Consent Forms</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Wedding Service Contracts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-professional-blue/10 w-full">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Plan Your International Wedding With Confidence</h2>
          <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
            Let our experts handle your document authentication. We understand the importance of your special day.
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

export default DestinationWeddingPage;
