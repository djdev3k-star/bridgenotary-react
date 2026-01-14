import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';

const LoanSigningHero: React.FC = () => {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Check if video can be played
    const handleVideoError = () => {
      setVideoError(true);
    };
    
    const handleVideoLoaded = () => {
      // Video loaded successfully
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

  return (
  <section className="relative text-white min-h-screen flex items-center overflow-hidden w-screen left-1/2 -translate-x-1/2">
    {/* Video Background */}
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {videoError ? (
        <img 
          src="/images/notarypublic-generalimagewithstamp.jpg"
          alt="Notary signing documents" 
          className="absolute inset-0 object-cover w-full h-full brightness-110 contrast-105 saturate-110"
        />
      ) : (
        <video 
          ref={videoRef}
          className="absolute inset-0 object-cover w-full h-full brightness-110 contrast-105 saturate-110"
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          poster="/images/notarypublic-generalimagewithstamp.jpg"
          onError={() => setVideoError(true)}
        >
          <source src="/images/loan-signin-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Refined gradient overlay for better readability */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/50 to-transparent"></div>
      </div>
    </div>
    
    <div className="w-full relative z-20 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in">
            <div className="mb-6">
              <span className="text-professional-blue font-semibold text-sm uppercase tracking-[0.2em]">Professional Loan Signing Services</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Expert Signings
              <br />
              Every Time
            </h1>
            
            <p className="text-lg text-white/95 mb-8 leading-relaxed max-w-xl font-light">
              NNA-certified signing agents with deep expertise in residential and commercial closings. We handle complex documents with precision to keep your transactions on track.
            </p>
            
            {/* Trust Markers */}
            <div className="mb-10 space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-professional-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white/90">99% On-Time Delivery Rate</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-professional-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white/90">$100K E&O Insurance Coverage</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-professional-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white/90">DFW Mobile Service • Available 24/7</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book" className="bg-professional-blue hover:bg-professional-blue/90 text-white font-semibold py-4 px-8 inline-flex items-center justify-center gap-2 transition-all duration-300 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Your Signing
              </Link>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-charcoal font-semibold py-4 px-8 inline-flex items-center justify-center gap-2 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Right Side - Stats or Quick Info */}
          <div className="hidden md:block fade-in-delay">
            <div className="space-y-6">
              <div className="border-l-4 border-professional-blue pl-6">
                <div className="text-5xl font-bold text-white mb-2">Quick Turnaround</div>
                <p className="text-white/90 text-lg">Fast, Efficient Closings</p>
              </div>
              <div className="border-l-4 border-professional-blue pl-6">
                <div className="text-5xl font-bold text-white mb-2">Same-Day</div>
                <p className="text-white/90 text-lg">Appointments Available</p>
              </div>
              <div className="border-l-4 border-professional-blue pl-6">
                <div className="text-5xl font-bold text-white mb-2">All Types</div>
                <p className="text-white/90 text-lg">Residential & Commercial Loans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default LoanSigningHero;
