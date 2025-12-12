import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';

const Hero: React.FC = () => {
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

  return (
  <section className="relative text-white min-h-screen flex items-center overflow-hidden w-screen left-1/2 -translate-x-1/2">
    {/* Video Background */}
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {videoError ? (
        <img 
          src="/assets/images/notarypublic-generalimagewithstamp.jpg"
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
          poster="/assets/images/notarypublic-generalimagewithstamp.jpg"
          onError={() => setVideoError(true)}
        >
          <source src="/assets/images/loan-signin-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Deepened blue gradient overlay with multiply blend while preserving image detail */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-proof/80 via-electric-blue/70 to-proof/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-electric-blue/20"></div>
      </div>
    </div>
    
    <div className="w-full relative z-20 px-6 py-24">
      <div className="text-left max-w-4xl mx-auto fade-in">
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white">
          Your Trusted Partner
          <br />
          for{" "}
          <span className="text-neutral-900">
            Secure Closings
          </span>
        </h1>
        <p className="text-lg text-white/90 mb-10 leading-relaxed max-w-2xl font-light">
          Bridge Notary offers professional, reliable, and convenient mobile notary and loan signing services for title companies, lenders, and real estate professionals.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 mb-12">
          <Link to="/book" className="bg-proof hover:bg-proof/90 rounded text-lg py-4 px-8 inline-block text-center text-white font-semibold pulse-button transition-all duration-300">
            <div className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Start a Signing
            </div>
          </Link>
          <Link to="/pricing" className="border-2 border-white text-white hover:bg-white hover:text-proof rounded text-lg py-4 px-8 inline-block text-center font-semibold transition-all duration-300">
            <div className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              View Services & Pricing
            </div>
          </Link>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;
