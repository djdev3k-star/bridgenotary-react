// Layout wrapper removed — App routes render Layout via Outlet
import { Link } from 'react-router-dom';
import InfoCard from '@/components/common/InfoCard';

export default function RONPage() {

  return (
    <div className="w-full bg-white">
      {/* Sub-Navigation */}
      <section className="bg-professional-blue/10 border-b border-professional-blue/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-charcoal/70 font-medium">Remote Notarization:</span>
            <a href="#how-it-works" className="text-professional-blue hover:text-professional-blue/80 hover:underline transition-colors font-medium">How It Works</a>
            <span className="text-charcoal/30">•</span>
            <a href="#preparation" className="text-professional-blue hover:text-professional-blue/80 hover:underline transition-colors font-medium">Preparation</a>
            <span className="text-charcoal/30">•</span>
            <a href="#benefits" className="text-professional-blue hover:text-professional-blue/80 hover:underline transition-colors font-medium">Benefits</a>
            <span className="text-charcoal/30">•</span>
            <a href="#schedule" className="text-professional-blue hover:text-professional-blue/80 hover:underline transition-colors font-medium">Schedule</a>
          </div>
        </div>
      </section>

      {/* Hero Section - Full Viewport Width with Professional Blue Gradient */}
      <section className="relative overflow-hidden text-white min-h-[85vh] flex items-center w-screen left-1/2 -translate-x-1/2">
        {/* Professional blue gradient background covering full viewport */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-professional-blue via-professional-blue/80 to-professional-blue"></div>
        
        {/* Background image with overlay - cycling dual images */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/images/secure-video-signing.png" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover ron-cycle-primary"
          />
          <img 
            src="/images/happy customer using video conference conveniently from mobile device.jpg" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover ron-cycle-secondary"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-professional-blue/80"></div>
        
        <div className="max-w-7xl mx-auto py-16 md:py-28 px-4 md:px-6 relative z-20">
          {/* Main Content */}
          <div className="text-left max-w-3xl mb-12 md:mb-16">
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight drop-shadow-lg">
              Remote Online <span className="text-white">Notarization</span>
            </h1>
            <p className="text-base md:text-xl text-white mb-8 md:mb-10 drop-shadow-md">
              Complete your notarization securely from anywhere, in minutes. Our platform ensures a legally-binding process with enterprise-grade security.
            </p>

            <div className="mb-8 md:mb-12">
              <Link
                to="/book?service=ron&mode=online"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-professional-blue transition-all text-base md:text-lg py-3 md:py-4 px-6 md:px-8 font-semibold pulse-button whitespace-nowrap"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a Session
              </Link>
            </div>

            {/* RON Modal - kept for backward compatibility but not used */}
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-5xl text-center md:text-left">
            <div className="p-3 md:p-4">
              <div className="p-2 md:p-3 w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Legally Binding</h3>
              <p className="text-white/80 text-sm font-medium">Valid in all 50 states</p>
            </div>

            <div className="p-4 text-center">
              <div className="p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">24/7 Available</h3>
              <p className="text-white/80 text-sm font-medium">Notarize anytime</p>
            </div>

            <div className="p-4 text-left">
              <div className="p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Enterprise Security</h3>
              <p className="text-white/80 text-sm font-medium">Bank-grade encryption</p>
            </div>

            <div className="p-4 text-center">
              <div className="p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M13 10V3L4 14h7v7l9-11h-7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Quick Process</h3>
              <p className="text-white/80 text-sm font-medium">5-minute average</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 lg:py-28 bg-white scroll-mt-20" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest text-professional-blue uppercase mb-3 bg-professional-blue/10 px-4 py-2">Simple Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">How Remote Online Notarization Works</h2>
            <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
              Our streamlined 3-step process makes remote notarization as easy as meeting in person, but from the comfort of your home or office.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1: Upload */}
            <div className="border-l border-professional-blue pl-6 group hover:bg-professional-blue/5 transition-all">
              <div className="mb-4">
                <span className="text-xs font-semibold text-professional-blue uppercase tracking-wide">Step 1</span>
                <h3 className="text-xl font-bold text-charcoal group-hover:text-professional-blue transition-colors">Secure Document Upload</h3>
              </div>
              <div className="mb-4">
                <img
                  src="/images/upload-documents.png"
                  alt="Upload and prepare documents" 
                  className="w-full h-32 object-cover border border-professional-blue/20"
                />
              </div>
              <p className="text-charcoal/70 mb-3 text-sm">Your documents are transmitted and stored using encrypted, financial-grade security.</p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Only Bridge Notary can access your files</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">AES-256 encryption at rest and in transit</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">PDF, DOCX, images supported</span>
                </li>
              </ul>
            </div>

            {/* Step 2: Verify */}
            <div className="border-l border-professional-blue pl-6 group">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 text-professional-blue group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-semibold text-professional-blue uppercase tracking-wide">Step 2</span>
                  <h3 className="text-xl font-bold text-charcoal">Verify Identity</h3>
                </div>
              </div>
              <div className="mb-6">
                <img
                  src="/images/Verify-identity.png"
                  alt="Verify your identity" 
                  className="w-full h-40 object-cover"
                />
              </div>
              <p className="text-charcoal/70 mb-4">
                Complete secure identity verification with your government-issued ID through our advanced, automated validation system.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Government ID verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Knowledge-based authentication</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Compliant with state requirements</span>
                </li>
              </ul>
            </div>

            {/* Step 3: Notarize */}
            <div className="border-l border-professional-blue pl-6 group">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 text-professional-blue group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-semibold text-professional-blue uppercase tracking-wide">Step 3</span>
                  <h3 className="text-xl font-bold text-charcoal">Live Notarization</h3>
                </div>
              </div>
              <div className="mb-6">
                <img
                  src="/images/secure-video-signing.png"
                  alt="Meet with notary and sign documents" 
                  className="w-full h-40 object-cover"
                />
              </div>
              <p className="text-charcoal/70 mb-4">
                Connect with a certified notary via secure HD video call and complete your notarization session in real time.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Secure video conferencing</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Digital signature & seal applied</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Instant document delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Session Preparation Section */}
      <section className="w-full bg-white py-20 md:py-28" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-professional-blue/30"></div>
              <span className="text-sm font-medium text-professional-blue uppercase tracking-wider">Session Checklist</span>
              <div className="h-px flex-1 bg-professional-blue/30"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Prepare for Your Session</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl">
              Follow these simple steps to ensure your remote notarization goes smoothly and efficiently.
            </p>
          </div>

          {/* Stacked InfoCards only (right column removed) */}
          <div className="space-y-6">
            {/* Card 1: Prepare Your Documents (using shared InfoCard) */}
            <InfoCard
              title="Gather Your Documents"
              icon={(
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h8a2 2 0 012 2v2m4 0h-4m0 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8m12 0H6" />
                </svg>
              )}
              imageSrc="/images/stack-loan-documents.jpg"
              imageAlt="Stack of documents ready for notarization"
            >
              <p className="text-charcoal/70 mb-4">
                Have your government-issued photo ID and documents ready in digital format (PDF or images).
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Accepted ID: Driver's license, passport, state ID</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Ensure documents are legible and complete</span>
                </li>
              </ul>
            </InfoCard>
            {/* Card 2: Tech Check (InfoCard) */}
            <InfoCard
              title="Check Your Technology"
              icon={(
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
              imageSrc="/images/happy customer using video conference conveniently from mobile device.jpg"
              imageAlt="Customer using video conference on mobile device"
            >
              <p className="text-charcoal/70 mb-4">
                Ensure your device, camera, microphone, and internet connection are working properly.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Minimum 1 Mbps upload/download speed</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Working webcam and microphone</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Updated browser (Chrome, Firefox, Safari)</span>
                </li>
              </ul>
            </InfoCard>

            {/* Card 3: Session Tips (InfoCard) */}
            <InfoCard
              title="Join Your Session"
              icon={(
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              imageSrc="/images/ronsession.jpg"
              imageAlt="Live remote notarization session"
            >
              <p className="text-charcoal/70 mb-4">
                Click the session link at your scheduled time, verify your identity, and follow the notary's guidance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Join 2-3 minutes early to test connection</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Close other apps using camera/microphone</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Use a quiet, well-lit space</span>
                </li>
              </ul>
            </InfoCard>
            </div>
        </div>
      </section>

      {/* Important Limitations & Restrictions Section */}
      <section className="py-20 lg:py-28 bg-professional-blue/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-professional-blue" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold tracking-widest text-professional-blue uppercase">Important Information</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">RON Limitations & Document Restrictions</h2>
            <p className="text-lg text-charcoal/70 max-w-3xl">
              Not all documents can be notarized remotely. Some Texas documents require in-person notarization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {/* Documents We CAN Notarize Remotely */}
            <div className="border-l border-professional-blue pl-6">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Documents We CAN Notarize Remotely</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-charcoal/70">Powers of Attorney (Limited POA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-charcoal/70">Affidavits and Declarations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-charcoal/70">Loan Documents & Mortgage Applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-charcoal/70">Rental & Lease Agreements</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-charcoal/70">Certified Copies & Acknowledgments</span>
                </li>
              </ul>
            </div>

            {/* Documents That CANNOT Be Notarized Remotely */}
            <div className="border-l border-professional-blue pl-6">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Documents Requiring In-Person Notarization</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M13.707 1.293a1 1 0 00-1.414 0L.293 13.293a1 1 0 000 1.414l1.414 1.414a1 1 0 001.414 0L15.414 4.121a1 1 0 000-1.414l-1.707-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-charcoal/70">Wills & Testamentary Documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M13.707 1.293a1 1 0 00-1.414 0L.293 13.293a1 1 0 000 1.414l1.414 1.414a1 1 0 001.414 0L15.414 4.121a1 1 0 000-1.414l-1.707-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-charcoal/70">Healthcare Powers of Attorney (HIPAA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M13.707 1.293a1 1 0 00-1.414 0L.293 13.293a1 1 0 000 1.414l1.414 1.414a1 1 0 001.414 0L15.414 4.121a1 1 0 000-1.414l-1.707-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-charcoal/70">General Durable Powers of Attorney (DPOA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M13.707 1.293a1 1 0 00-1.414 0L.293 13.293a1 1 0 000 1.414l1.414 1.414a1 1 0 001.414 0L15.414 4.121a1 1 0 000-1.414l-1.707-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-charcoal/70">Deed of Trust & Mortgages (Real Estate)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M13.707 1.293a1 1 0 00-1.414 0L.293 13.293a1 1 0 000 1.414l1.414 1.414a1 1 0 001.414 0L15.414 4.121a1 1 0 000-1.414l-1.707-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-charcoal/70">Custody or Guardianship Documents</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white border-l border-professional-blue rounded">
            <p className="text-charcoal/80 mb-3">
              <strong>Not Sure About Your Document?</strong> The restrictions on remote notarization are complex and specific to Texas law. We strongly recommend contacting us before your session to confirm whether your specific document(s) can be notarized remotely.
            </p>
            <p className="text-charcoal/70 text-sm">
              For questions about document eligibility, call us at <a href="tel:+14696298932" className="text-professional-blue hover:underline font-semibold">(469) 629-8932</a> or contact a licensed attorney for legal advice about your specific notarization needs.
            </p>
          </div>
        </div>
      </section>

      {/* Notary Role in RON section removed per request */}

      {/* Why Choose RON Section - Consolidated */}
      <section id="benefits" className="py-20 lg:py-28 bg-white scroll-mt-20" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-3">Why Choose Remote Online Notarization?</h2>
            <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
              Experience the convenience and security of digital notarization with legal validity in all 50 states.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="border-l border-professional-blue pl-6 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-professional-blue group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal">Bank-Grade Security</h3>
              </div>
              <p className="text-charcoal/70 mb-4">
                End-to-end encryption with tamper-evident digital certificates and secure video sessions for complete protection.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">256-bit encryption for all transfers</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Tamper-evident digital certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Complete digital audit trail</span>
                </li>
              </ul>
            </div>

            <div className="border-l border-professional-blue pl-6 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-professional-blue group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal">Available 24/7</h3>
              </div>
              <p className="text-charcoal/70 mb-4">
                Connect with a certified notary anytime, anywhere. No appointments needed for most services.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Notaries available round-the-clock</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Valid in all 50 states</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Instant session start</span>
                </li>
              </ul>
            </div>

            <div className="border-l border-professional-blue pl-6 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-professional-blue group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal">Lightning Fast</h3>
              </div>
              <p className="text-charcoal/70 mb-4">
                Complete your notarization in just 5 minutes on average with our streamlined process.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">5-minute average session time</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Multi-factor authentication</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Instant document delivery</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats Row removed per request */}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-professional-blue/10">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-professional-blue/5"></div>
        {/* Background image with overlay */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/images/stack-loan-documents.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-professional-blue/10"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-8">Ready to Start Your RON Session?</h2>
          <p className="text-xl text-charcoal/70 mb-12 max-w-3xl mx-auto">
            Experience the future of notarization with secure, convenient remote online notarization.
            Available 24/7 with certified notaries nationwide.
          </p>
          <div className="flex justify-center">
            <Link
              to="/book?service=ron&mode=online"
              className="inline-block bg-professional-blue text-white hover:bg-professional-blue/90 transition-all font-semibold text-lg py-5 px-10"
            >
              Schedule RON Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}