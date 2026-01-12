// Layout wrapper removed — App routes render Layout via Outlet
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StartRONModal } from '@/features/ron/components';
import InfoCard from '@/components/common/InfoCard';

export default function RONPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full bg-white">
      {/* Breadcrumbs */}
      <div className="w-full bg-off-white border-b border-professional-blue/20">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-professional-blue hover:text-professional-blue/80 transition-colors">Home</Link>
            <svg className="w-4 h-4 text-charcoal/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/services" className="text-professional-blue hover:text-professional-blue/80 transition-colors">Services</Link>
            <svg className="w-4 h-4 text-charcoal/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-charcoal/70">Remote Online Notarization</span>
          </div>
        </div>
      </div>

      {/* Hero Section - Full Viewport Width with Professional Blue Gradient */}
      <section className="relative overflow-hidden text-white min-h-[85vh] flex items-center w-screen left-1/2 -translate-x-1/2">
        {/* Professional blue gradient background covering full viewport */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-professional-blue via-professional-blue/80 to-professional-blue"></div>
        
        {/* Background image with overlay - cycling dual images */}
        <div className="absolute inset-0 z-0 opacity-25">
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
        
        <div className="max-w-7xl mx-auto py-28 px-6 relative z-20">
          {/* Main Content */}
          <div className="text-left max-w-3xl mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
              Remote Online <span className="text-white">Notarization</span>
            </h1>
            <p className="text-xl text-white mb-10 drop-shadow-md">
              Complete your notarization securely from anywhere, in minutes. Our platform ensures a legally-binding process with enterprise-grade security.
            </p>

            <div className="mb-12">
              <button
                onClick={openModal}
                className="border-2 border-white text-white hover:bg-white hover:text-professional-blue transition-all text-lg py-4 px-8 font-semibold pulse-button"
              >
                <div className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Schedule RON Session
                </div>
              </button>
            </div>

            {/* RON Modal */}
            <StartRONModal isOpen={isModalOpen} onClose={closeModal} />
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl">
            <div className="p-4 text-left">
              <div className="p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
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
      <section className="w-full bg-professional-blue/10 py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-professional-blue/30"></div>
              <span className="text-sm font-medium text-professional-blue uppercase tracking-wider">Simple Process</span>
              <div className="h-px flex-1 bg-professional-blue/30"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">How Remote Online Notarization Works</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl">
              Our streamlined 3-step process makes remote notarization as easy as meeting in person, but from the comfort of your home or office.
            </p>
          </div>

          {/* Horizontal process cards (single row on desktop, similar to pricing cards) */}
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Geometric overlays */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-professional-blue/3 -z-10"></div>
            
            {/* Step 1: Upload */}
            <div className="border-l-2 border-professional-blue pl-6 group">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 text-professional-blue group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-semibold text-professional-blue uppercase tracking-wide">Step 1</span>
                  <h3 className="text-xl font-bold text-charcoal">Upload Documents</h3>
                </div>
              </div>
              <div className="mb-6">
                <img
                  src="/images/upload-documents.png"
                  alt="Upload and prepare documents" 
                  className="w-full h-40 object-cover"
                />
              </div>
              <p className="text-charcoal/70 mb-4">
                Upload your documents securely through our encrypted platform. <span className="text-sm text-charcoal/60">We support PDF, DOCX, and images.</span>
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Bank-grade encryption</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Multiple file formats supported</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-charcoal/70">Instant upload confirmation</span>
                </li>
              </ul>
            </div>

            {/* Step 2: Verify */}
            <div className="border-l-2 border-professional-blue pl-6 group">
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
            <div className="border-l-2 border-professional-blue pl-6 group">
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
      <section className="w-full bg-professional-blue/10 py-20 md:py-28">
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

      {/* Notary Role in RON section removed per request */}

      {/* Why Choose RON Section - Consolidated */}
      <section className="section bg-white" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-professional-blue/40"></div>
              <span className="text-sm font-medium text-professional-blue uppercase tracking-wider">Why Choose RON</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Enterprise-Grade Remote Notarization</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl">
              Our certified remote online notaries provide secure, legally-binding notarization services from anywhere in the United States with enterprise-grade security and compliance.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="border-l-2 border-professional-blue pl-6 group">
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

            <div className="border-l-2 border-professional-blue pl-6 group">
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

            <div className="border-l-2 border-professional-blue pl-6 group">
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
            <button
              onClick={openModal}
              className="bg-professional-blue text-white hover:bg-professional-blue/90 transition-all font-semibold text-lg py-5 px-10"
            >
              Start RON Session
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}