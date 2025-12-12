// Layout wrapper removed — App routes render Layout via Outlet
import { useState } from 'react';
import { StartRONModal } from '@/features/ron/components';

export default function RONPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="w-full bg-white">
      {/* Hero Section - Full Viewport Width with Deep Blue Gradient */}
      <section className="relative overflow-hidden text-white min-h-[85vh] flex items-center w-screen left-1/2 -translate-x-1/2">
        {/* Deep blue gradient background covering full viewport */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-proof via-electric-blue to-proof"></div>
        
        {/* Background image with overlay - cycling dual images */}
        <div className="absolute inset-0 z-0 opacity-45">
          <img 
            src="/src/assets/images/ronsession.jpg" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover ron-cycle-primary"
          />
          <img 
            src="/src/assets/images/ronsession.jpg" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover ron-cycle-secondary"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-electric-blue/40"></div>
        
        <div className="max-w-7xl mx-auto py-28 px-6 relative z-20">
          {/* Main Content */}
          <div className="text-left max-w-3xl mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
              Remote Online <span className="text-gold">Notarization</span>
            </h1>
            <p className="text-xl text-white mb-10 drop-shadow-md">
              Complete your notarization securely from anywhere, in minutes. Our platform ensures a legally-binding process with enterprise-grade security.
            </p>

            <div className="mb-12">
              <button
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-white text-white hover:bg-white hover:text-proof transition-all rounded text-lg py-4 px-8 font-semibold shadow-xl pulse-button"
              >
                <div className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Start RON Session
                </div>
              </button>
            </div>

            {/* RON Modal */}
            <StartRONModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-neutral-300"></div>
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Simple Process</span>
              <div className="h-px flex-1 bg-neutral-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-proof mb-6">How Remote Online Notarization Works</h2>
            <p className="text-xl text-neutral-600 max-w-3xl">
              Our streamlined 3-step process makes remote notarization as easy as meeting in person, but from the comfort of your home or office.
            </p>
          </div>

          {/* Three-column process cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1: Upload */}
            <div className="rounded p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-electric-blue/10 rounded-md p-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-semibold text-electric-blue">Step 1</span>
                  <h3 className="text-xl font-bold text-proof">Upload Documents</h3>
                </div>
              </div>

              <div className="mb-6">
                <img
                  src="/images/upload-documents.png"
                  alt="Upload and prepare documents" 
                  className="w-full h-40 object-cover rounded"
                />
              </div>

              <p className="text-neutral-700 mb-4">
                Upload your documents securely through our encrypted platform. We support all common file formats including PDF, DOCX, and images.
              </p>

              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Bank-grade encryption</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Multiple file formats supported</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Instant upload confirmation</span>
                </li>
              </ul>
            </div>

            {/* Step 2: Verify */}
            <div className="rounded p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-electric-blue/10 rounded-md p-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-semibold text-electric-blue">Step 2</span>
                  <h3 className="text-xl font-bold text-proof">Verify Identity</h3>
                </div>
              </div>

              <div className="mb-6">
                <img
                  src="/images/Verify-identity.png"
                  alt="Verify your identity" 
                  className="w-full h-40 object-cover rounded"
                />
              </div>

              <p className="text-neutral-700 mb-4">
                Complete secure identity verification with your government-issued ID through our advanced, automated validation system.
              </p>

              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Government ID verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Knowledge-based authentication</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Compliant with state requirements</span>
                </li>
              </ul>
            </div>

            {/* Step 3: Notarize */}
            <div className="rounded p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-electric-blue/10 rounded-md p-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-semibold text-electric-blue">Step 3</span>
                  <h3 className="text-xl font-bold text-proof">Live Notarization</h3>
                </div>
              </div>

              <div className="mb-6">
                <img
                  src="/images/secure-video-signing.png"
                  alt="Meet with notary and sign documents" 
                  className="w-full h-40 object-cover rounded"
                />
              </div>

              <p className="text-neutral-700 mb-4">
                Connect with a certified notary via secure HD video call and complete your notarization session in real time.
              </p>

              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Secure video conferencing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Digital signature & seal applied</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Instant document delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Session Preparation Section */}
      <section className="section bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-neutral-300"></div>
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Session Checklist</span>
              <div className="h-px flex-1 bg-neutral-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-proof mb-6">Prepare for Your Session</h2>
            <p className="text-xl text-neutral-600 max-w-3xl">
              Follow these simple steps to ensure your remote notarization goes smoothly and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Documents */}
            <div className="rounded p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-all bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-electric-blue/10 rounded-md p-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-proof">Gather Your Documents</h3>
              </div>
              <div className="mb-4">
                <img
                  src="/src/assets/images/stack-loan-documents.jpg"
                  alt="Stack of documents ready for notarization"
                  className="w-full h-48 object-cover rounded border border-neutral-200"
                />
              </div>
              <p className="text-neutral-700 mb-4">
                Have your government-issued photo ID and documents ready in digital format (PDF or images).
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Driver's license, passport, or state ID</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Documents to be notarized (PDF preferred)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Clear, legible scans or photos</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Tech Check */}
            <div className="rounded p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-all bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-electric-blue/10 rounded-md p-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-proof">Check Your Technology</h3>
              </div>
              <div className="mb-4">
                <img
                  src="/images/happy customer using video conference conveniently from mobile device.jpg"
                  alt="Customer using video conference on mobile device"
                  className="w-full h-48 object-cover rounded border border-neutral-200"
                />
              </div>
              <p className="text-neutral-700 mb-4">
                Ensure your device, camera, microphone, and internet connection are working properly.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Minimum 1 Mbps upload/download speed</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Working webcam and microphone</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Updated browser (Chrome, Firefox, Safari)</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Session Tips */}
            <div className="rounded p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-all bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-electric-blue/10 rounded-md p-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-proof">Join Your Session</h3>
              </div>
              <div className="mb-4">
                <img
                  src="/src/assets/images/secure-video-signing.png"
                  alt="Secure video notarization session"
                  className="w-full h-48 object-cover rounded border border-neutral-200"
                />
              </div>
              <p className="text-neutral-700 mb-4">
                Click the session link at your scheduled time, verify your identity, and follow the notary's guidance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Join 2-3 minutes early to test connection</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Close other apps using camera/microphone</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Use a quiet, well-lit space</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RON Section - Consolidated */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-neutral-300"></div>
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Why Choose RON</span>
              <div className="h-px flex-1 bg-neutral-300"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-proof mb-6">Enterprise-Grade Remote Notarization</h2>
            <p className="text-xl text-neutral-600 max-w-3xl">
              Our certified remote online notaries provide secure, legally-binding notarization services from anywhere in the United States with enterprise-grade security and compliance.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="rounded p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-all bg-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-electric-blue/10 rounded-md p-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-proof">Bank-Grade Security</h3>
              </div>
              <p className="text-neutral-700 mb-4">
                End-to-end encryption with tamper-evident digital certificates and secure video sessions for complete protection.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">256-bit encryption for all transfers</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Tamper-evident digital certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Complete digital audit trail</span>
                </li>
              </ul>
            </div>

            <div className="rounded p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-all bg-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-electric-blue/10 rounded-md p-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-proof">Available 24/7</h3>
              </div>
              <p className="text-neutral-700 mb-4">
                Connect with a certified notary anytime, anywhere. No appointments needed for most services.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Notaries available round-the-clock</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Valid in all 50 states</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Instant session start</span>
                </li>
              </ul>
            </div>

            <div className="rounded p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-all bg-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-electric-blue/10 rounded-md p-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-proof">Lightning Fast</h3>
              </div>
              <p className="text-neutral-700 mb-4">
                Complete your notarization in just 5 minutes on average with our streamlined process.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">5-minute average session time</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Multi-factor authentication</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Instant document delivery</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="rounded p-6 shadow-sm border border-neutral-200 bg-white text-center">
              <div className="text-4xl font-bold text-electric-blue mb-2">24/7</div>
              <div className="text-neutral-600 font-medium">Available</div>
            </div>
            <div className="rounded p-6 shadow-sm border border-neutral-200 bg-white text-center">
              <div className="text-4xl font-bold text-electric-blue mb-2">50</div>
              <div className="text-neutral-600 font-medium">States</div>
            </div>
            <div className="rounded p-6 shadow-sm border border-neutral-200 bg-white text-center">
              <div className="text-4xl font-bold text-electric-blue mb-2">5 min</div>
              <div className="text-neutral-600 font-medium">Average</div>
            </div>
            <div className="rounded p-6 shadow-sm border border-neutral-200 bg-white text-center">
              <div className="text-4xl font-bold text-electric-blue mb-2">100%</div>
              <div className="text-neutral-600 font-medium">Secure</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-electric-blue"></div>
        {/* Background image with overlay */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/src/assets/images/stack-loan-documents.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-electric-blue/70"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Start Your RON Session?</h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Experience the future of notarization with secure, convenient remote online notarization.
            Available 24/7 with certified notaries nationwide.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-proof hover:bg-neutral-100 transition-all font-semibold rounded text-lg py-5 px-10 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Start RON Session
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}