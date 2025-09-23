import React, { useState } from 'react';
import ApostilleServices from './ApostilleServices';

const ApostillePage: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <React.Fragment>
      {/* Hero Section */}
      <section className="relative bg-electric-blue overflow-hidden text-white">
          {/* Background with apostille document image */}
          <div className="absolute inset-0 z-0 opacity-15">
            <img
              src="/src/assets/images/apostillebg.png"
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="max-w-7xl mx-auto py-28 px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in backdrop-blur-sm bg-white/10 p-8 rounded-md shadow-2xl border border-white/20">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
                  Document <span className="text-gold">Apostille</span> Services
                </h1>
                
                <div className="bg-proof/70 backdrop-blur-sm text-white p-5 rounded-md shadow-lg mb-8 border border-white/20">
                  <p className="text-xl font-semibold">
                    Avoid Rejection. Avoid Delays. Get It Right the First Time.
                  </p>
                </div>
                
                <p className="text-xl text-white mb-10 max-w-3xl drop-shadow-md">
                  Whether it's for a destination wedding in Italy, teaching in Japan, or adopting from Colombia, we get your documents stamped, sealed, and ready—without the guesswork.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="bg-white text-proof hover:bg-neutral-100 transition-all rounded-md text-lg py-3 px-6 inline-block text-center font-semibold shadow-lg"
                  >
                    <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Start My Apostille
                    </span>
                  </button>
                  <button 
                    className="bg-transparent border-2 border-white hover:bg-white/10 transition-all rounded-md text-lg py-3 px-6 inline-block text-center text-white font-semibold shadow-lg"
                  >
                    <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Chat With an Expert
                    </span>
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-md px-4 py-3 text-center border border-white/20 shadow-lg">
                    <div className="flex justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <span className="text-sm text-white font-medium drop-shadow-sm">Guaranteed</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-md px-4 py-3 text-center border border-white/20 shadow-lg">
                    <div className="flex justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-sm text-white font-medium drop-shadow-sm">Fast</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-md px-4 py-3 text-center border border-white/20 shadow-lg">
                    <div className="flex justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm text-white font-medium drop-shadow-sm">Global</span>
                  </div>
                </div>
              </div>
              
              {/* Right side content */}
              <div className="hidden lg:block fade-in-delay">
                <div className="backdrop-blur-sm bg-proof/20 p-8 rounded-md shadow-2xl border border-white/20 relative overflow-hidden">
                  {/* Background image with overlay */}
                  <div className="absolute inset-0 z-0 opacity-15">
                    <img
                      src="/src/assets/images/apostille_A person signing important legal documents in the presence of a notary public. The notary is seen from the side, with a clear view of the signature, documents, and notary seal._.jpg"
                      alt="A person signing important legal documents in the presence of a notary public"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {/* Content */}
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-sm">Why Choose Our Service?</h2>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="bg-white/30 rounded-full p-1 flex-shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white">Same-day dispatch to authorities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-white/30 rounded-full p-1 flex-shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white drop-shadow-sm">Door-to-door courier service</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-white/30 rounded-full p-1 flex-shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white drop-shadow-sm">Triple-checked documents</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-white/30 rounded-full p-1 flex-shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white drop-shadow-sm">Real-time tracking portal</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-white/30 rounded-full p-1 flex-shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white drop-shadow-sm">100% approval guarantee</span>
                      </li>
                    </ul>
                    <div className="mt-8 bg-white/30 backdrop-blur-sm rounded-md p-4 border border-white/30">
                      <p className="text-white text-center font-medium">
                        "If any apostille we process is rejected, we fix it free—shipping included."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <ApostilleServices />

        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-md max-w-xl w-full p-6">
              <h3 className="text-2xl font-semibold mb-4">Start Your Apostille Process</h3>
              {/* Add your contact form here */}
              <button 
                onClick={() => setShowContactForm(false)}
                className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700"
                aria-label="Close contact form"
              >
                ✕
              </button>
            </div>
          </div>
        )}
    </React.Fragment>
  );
};

export default ApostillePage;
