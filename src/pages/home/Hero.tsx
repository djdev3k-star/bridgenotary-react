import { Link } from "react-router-dom";

const Hero = () => (
  <section className="relative bg-electric-blue overflow-hidden">
    {/* Background pattern overlay - removed diagonal pattern */}
    
    {/* Floating decorative elements */}
    {/* Removed floating orbs */}
    
    <div className="max-w-7xl mx-auto py-28 px-6 relative z-10">
      <div className="text-center max-w-4xl mx-auto fade-in">
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white">
          Your Trusted Partner for{" "}
          <span className="text-gold">
            Secure Closings
          </span>
        </h1>
        <p className="text-xl text-white/90 mb-10 leading-relaxed mx-auto max-w-3xl">
          Bridge Notary offers professional, reliable, and convenient mobile notary and loan signing services for title companies, lenders, and real estate professionals. We bring expert notarial services directly to you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 mb-12 justify-center">
          <Link to="/book" className="cta-button rounded-lg text-lg py-4 px-8 inline-block text-center text-white font-semibold pulse-button">
            <div className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Start a Signing
            </div>
          </Link>
          <Link to="/pricing" className="secondary-button rounded-lg text-lg py-4 px-8 inline-block text-center text-white font-semibold">
            <div className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              View Services & Pricing
            </div>
          </Link>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="trust-badge rounded-xl px-4 py-3 text-center">
            <div className="flex justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-sm text-white font-medium">Trusted by Lenders</span>
          </div>
          <div className="trust-badge rounded-xl px-4 py-3 text-center">
            <div className="flex justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-sm text-white font-medium">NNA Certified</span>
          </div>
          <div className="trust-badge rounded-xl px-4 py-3 text-center">
            <div className="flex justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-sm text-white font-medium">Available 7 Days</span>
          </div>
        </div>
      </div>
    </div>
    
    {/* Wave separator */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff" preserveAspectRatio="none">
        <path d="M0,32L80,53.3C160,75,320,117,480,117.3C640,117,800,75,960,58.7C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
      </svg>
    </div>
  </section>
);

export default Hero;
