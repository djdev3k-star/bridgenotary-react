import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const LoanSigningPage: React.FC = () => {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Check if video can be played
    const handleVideoError = () => {
      console.error("Video failed to load");
      setVideoError(true);
    };
    
    const handleVideoLoaded = () => {
      console.log("Video loaded successfully");
    };
    
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('error', handleVideoError);
      videoElement.addEventListener('loadeddata', handleVideoLoaded);
    }
    
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('error', handleVideoError);
        videoElement.removeEventListener('loadeddata', handleVideoLoaded);
      }
    };
  }, []);

  const loanTypes = [
    {
      title: "Residential Loans",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      items: ["Purchase Agreements", "Refinancing Documents", "Home Equity Loans", "Reverse Mortgages"]
    },
    {
      title: "Commercial Loans",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      items: ["Commercial Mortgages", "Construction Loans", "Business Loans", "SBA Loan Documents"]
    }
  ];
  
  const benefits = [
    {
      title: "Professional Signing Agents",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: "NNA Certified, E&O Insured, Background-checked signing agents"
    },
    {
      title: "Reliable Service",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: "99% on-time rate, clear communication throughout the process"
    },
    {
      title: "Flexible Scheduling",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      description: "Same-day and rush availability in many areas"
    }
  ];
  
  return (
    <div className="w-full bg-white">
      {/* Hero Section - Full Width Cover Style */}
      <section className="relative text-white min-h-screen flex items-center overflow-visible">
        {/* Full-Width Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full overflow-visible">
            {videoError ? (
              <img 
                src="/assets/images/notarypublic-generalimagewithstamp.jpg"
                alt="Notary signing documents" 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover min-w-[120vw] h-full"
              />
            ) : (
              <video 
                ref={videoRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover min-w-[120vw] h-full"
                autoPlay 
                loop 
                muted 
                playsInline
                preload="auto"
                poster="/assets/images/notarypublic-generalimagewithstamp.jpg"
                onError={() => setVideoError(true)}
              >
                <source src="https://cdn.jsdelivr.net/gh/djdev3k-star/bridgenotary-react@c6a06b2/src/assets/images/loan-signin-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag. Please upgrade your browser for the best experience.
              </video>
            )}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-proof/80 via-proof/60 to-proof/40"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content - Centered and Wide */}
        <div className="w-full relative z-10 px-0 py-24">
          <div className="mx-auto text-center px-6">
            <div className="fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Mobile Notary & Loan Signing <span className="text-gold">Experts</span>
              </h1>
              <p className="text-lg md:text-2xl text-white/95 mb-12 drop-shadow-md max-w-3xl mx-auto">
                Certified signing agents, bonded & insured. Trusted by title companies and lenders for accurate, timely closings with same-day and rush availability.
              </p>

              {/* CTA Button */}
              <Link to="/book" className="inline-block bg-electric-blue hover:bg-electric-blue/90 transition-all rounded-lg text-lg py-5 px-12 text-white font-semibold shadow-2xl pulse-button transform hover:scale-105">
                <div className="flex items-center justify-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule Your Signing
                </div>
              </Link>

              {/* Trust Badges - Hidden */}
              <div className="hidden grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto mt-16">
                <div className="bg-white/15 backdrop-blur-md rounded-lg px-4 py-3 border border-white/20 shadow-lg">
                  <div className="flex justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 3.062v6.072A3.066 3.066 0 0117.853 17H2.147A3.066 3.066 0 010 13.934V7.862a3.066 3.066 0 012.267-2.955 3.066 3.066 0 005.219-3.034 3.066 3.066 0 001.781.432zm9.733 8.773h-4.693V9.915h4.693v1.918zM6.467 9.915v1.918H1.774V9.915h4.693z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-white font-semibold drop-shadow-sm">NNA Certified</span>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-lg px-4 py-3 border border-white/20 shadow-lg">
                  <div className="flex justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v2h8v-2zM2 15a4 4 0 008 0v2H2v-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-white font-semibold drop-shadow-sm">E&O Insured</span>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-lg px-4 py-3 border border-white/20 shadow-lg">
                  <div className="flex justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-white font-semibold drop-shadow-sm">99% On-time</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff" preserveAspectRatio="none">
            <path d="M0,32L80,53.3C160,75,320,117,480,117.3C640,117,800,75,960,58.7C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 lg:py-28 mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-proof mb-6">Professional Loan Signing Services</h2>
            <div className="h-1 w-20 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-neutral-600 mb-4">
              Our professional loan signing agents are certified and experienced in handling all types of loan documents.
              We provide mobile notary services for real estate transactions, refinancing, and more.
            </p>
            <p className="text-xl text-neutral-600 mb-12">
              We focus on accuracy, clear communication, and fast turnarounds — so you can close on time.
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="stats-card rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all">
                <div className="flex justify-center mb-6">
                  <div className="bg-electric-blue rounded-full p-4 text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-proof mb-4">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="bg-neutral-50 py-24 px-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-proof mb-6">Loan Documents We Handle</h2>
            <div className="h-1 w-20 bg-gold mx-auto mb-8"></div>
            <p className="text-lg text-neutral-600">
              Our notaries are experienced with all types of loan documents, ensuring accurate and compliant signings for your peace of mind.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {loanTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-proof/10 rounded-full p-4 mr-4">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-proof">{type.title}</h3>
                </div>
                
                <div className="pl-4 border-l-4 border-electric-blue">
                  <ul className="space-y-4">
                    {type.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-lg text-neutral-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 px-6 bg-white relative mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-proof mb-6">Our Simple 3-Step Process</h2>
            <div className="h-1 w-20 bg-gold mx-auto mb-8"></div>
            <p className="text-lg text-neutral-600">
              We've streamlined the loan signing process to be as simple and stress-free as possible for our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-0 mb-16 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/3 left-0 right-0 h-1 bg-electric-blue z-0"></div>
            
            {/* Step 1 */}
            <div className="relative z-10 px-6">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-100 hover:shadow-2xl transition-all duration-300 text-center h-full flex flex-col">
                <div className="bg-electric-blue text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <span className="font-bold text-2xl">1</span>
                </div>
                <h3 className="text-2xl font-bold text-proof mb-4">Schedule</h3>
                <p className="text-neutral-600 mb-6">Book your appointment online or by phone at your preferred time and location.</p>
                <div className="mt-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative z-10 px-6 mt-12 md:mt-0">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-100 hover:shadow-2xl transition-all duration-300 text-center h-full flex flex-col">
                <div className="bg-electric-blue text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <span className="font-bold text-2xl">2</span>
                </div>
                <h3 className="text-2xl font-bold text-proof mb-4">Meet</h3>
                <p className="text-neutral-600 mb-6">Our notary arrives on time with all necessary supplies to guide you through signing.</p>
                <div className="mt-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative z-10 px-6 mt-12 md:mt-0">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-100 hover:shadow-2xl transition-all duration-300 text-center h-full flex flex-col">
                <div className="bg-electric-blue text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <span className="font-bold text-2xl">3</span>
                </div>
                <h3 className="text-2xl font-bold text-proof mb-4">Complete</h3>
                <p className="text-neutral-600 mb-6">Documents are properly executed, notarized, and delivered as required.</p>
                <div className="mt-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-electric-blue py-24 px-6 overflow-visible mt-16">
        {/* Removed pattern overlay */}
        
        {/* Content */}
        <div className="max-w-5xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Schedule Your Signing?</h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            We offer flexible scheduling and can meet at your preferred location. 
            Trusted by title companies and lenders for punctual, accurate signings.
          </p>
          
          {/* Buttons - simplified structure */}
          <div className="relative flex flex-col sm:flex-row justify-center gap-6 mb-16 mt-8">
            <Link to="/book" className="bg-white text-proof hover:bg-neutral-100 transition-all font-semibold rounded-lg text-lg py-5 px-10 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 relative z-50">
              Schedule a Signing
            </Link>
            {/* TODO: Add phone contact for future development */}
            {/* <a href="tel:+14696298932" className="bg-transparent border-2 border-white hover:bg-white/10 transition-all font-semibold rounded-lg text-lg py-5 px-10 text-white relative z-50"> */}
              {/* Call (469) 629-8932 */}
            {/* </a> */}
          </div>
          
          {/* Stats
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">99%</div>
              <div className="text-white/80">On-time Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">1000+</div>
              <div className="text-white/80">Signings Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">5★</div>
              <div className="text-white/80">Google Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">24/7</div>
              <div className="text-white/80">Support</div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default LoanSigningPage;
