// Layout wrapper removed — App routes render Layout via Outlet
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FeatureCard, Stat } from '@/features/ron/components';
import { Card, CardBody } from '@/components/ui/Card';
import RonUpload from '@/assets/images/upload-documents.png'


export default function RONPage() {
  // State for live agent availability (toggle for demo purposes)
  const [liveAgentsAvailable, setLiveAgentsAvailable] = useState(true);
  return (
    <div className="w-full bg-white text-neutral-900">
        {/* Hero Section with Primary CTA */}
        <section className="bg-gradient-to-b from-proof/10 to-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-proof mb-6">
              Remote Online Notarization
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Complete your notarization securely from anywhere, in minutes. Our platform ensures a legally-binding process with enterprise-grade security.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-12 max-w-4xl mx-auto">
              {/* Start Session Card - Only visible when agents are available */}
              {liveAgentsAvailable && (
                <Card hover={true} shadow="lg" className="flex-1 cursor-pointer">
                  <CardBody className="text-center p-8">
                    {/* Live Agent Indicator */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                      <span className="text-success font-medium text-sm">Live Agents Available</span>
                    </div>
                    <h3 className="text-xl font-semibold text-proof mb-3">Start Notarization Session</h3>
                    <p className="text-neutral-600 mb-4">Connect with an available notary right now</p>
                    <button className="button-primary w-full">Begin Session</button>
                  </CardBody>
                </Card>
              )}
              
              {/* Schedule Card - Always visible */}
              <Card hover={true} shadow="lg" className="flex-1 cursor-pointer">
                <CardBody className="text-center p-8">
                  <div className="flex justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-proof">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-proof mb-3">Schedule for Later</h3>
                  <p className="text-neutral-600 mb-4">Book an appointment at your convenience</p>
                  <button className="button-outline w-full">Schedule Session</button>
                </CardBody>
              </Card>
            </div>
            
            {/* Demo Toggle for Live Agent Availability (Development Only) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="text-center mb-12">
                <button 
                  onClick={() => setLiveAgentsAvailable(!liveAgentsAvailable)}
                  className="text-sm text-neutral-500 hover:text-neutral-700 underline"
                >
                  Demo: Toggle Agent Availability (Currently: {liveAgentsAvailable ? 'Available' : 'Unavailable'})
                </button>
              </div>
            )}
            
            {/* Session Requirements Quick Check */}
            <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-4">Quick Session Checklist</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="bg-electric-blue/10 rounded-full p-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Valid Government ID</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-electric-blue/10 rounded-full p-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Webcam & Microphone</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-electric-blue/10 rounded-full p-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Document Ready</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-electric-blue/10 rounded-full p-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Stable Internet</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section">
          <h2 className="text-3xl font-semibold text-center mb-12">How Online Notarization Works</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <div className="bg-electric-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-electric-blue font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Upload & Prepare</h3>
              <p className="text-neutral-600">Upload your documents and prepare them for signing. We support all common file formats.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <div className="bg-electric-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-electric-blue font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Verify Identity</h3>
              <p className="text-neutral-600">Complete our secure identity verification process with your government-issued ID.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <div className="bg-electric-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-electric-blue font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Meet & Sign</h3>
              <p className="text-neutral-600">Connect with a notary via secure video call to complete your signing session.</p>
            </div>
          </div>
        </section>

        {/* Session Preparation */}
        <section className="bg-neutral-50 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">Prepare for Your Session</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-semibold text-proof mb-6">Required Documents</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-electric-blue/10 rounded-full p-2 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium block text-proof">Government-Issued Photo ID</span>
                      <span className="text-neutral-600">Driver's license, passport, or state ID card</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-electric-blue/10 rounded-full p-2 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium block text-proof">Documents to be Notarized</span>
                      <span className="text-neutral-600">In PDF, Word, or image format</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-electric-blue/10 rounded-full p-2 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium block text-proof">Supporting Documentation</span>
                      <span className="text-neutral-600">If required for your specific notarization</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-semibold text-proof mb-6">Technical Requirements</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-electric-blue/10 rounded-full p-2 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium block text-proof">Working Camera</span>
                      <span className="text-neutral-600">Built-in or external webcam</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-electric-blue/10 rounded-full p-2 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium block text-proof">Microphone & Speakers</span>
                      <span className="text-neutral-600">For clear audio communication</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-electric-blue/10 rounded-full p-2 flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium block text-proof">Stable Internet</span>
                      <span className="text-neutral-600">Minimum 1 Mbps upload/download</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section">
          <h2 className="text-3xl font-semibold text-center mb-12">How We Protect Your Documents</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-proof"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>} 
              title="Secure Notarization" 
              desc="End-to-end encryption for all document transfers and video sessions."
            />
            <FeatureCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-proof"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>} 
              title="Identity Verification" 
              desc="Multi-factor authentication and ID validation technology."
            />
            <FeatureCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-proof"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>} 
              title="Digital Certificate" 
              desc="Tamper-evident seal and digital audit trail for every session."
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-neutral-50 py-20 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12">Trusted Nationwide</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <Stat number="24/7" label="Available" />
            <Stat number="50" label="States" />
            <Stat number="5 min" label="Average Session" />
            <Stat number="100%" label="Secure" />
          </div>
        </section>

        {/* Final CTA */}
        <section className="from-proof to-electric-blue text-white py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto">Join thousands of satisfied customers who trust Bridge Notary for their online notarization needs.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/book" className="bg-white text-proof hover:bg-neutral-100 transition-all font-semibold rounded-lg text-lg py-4 px-8 shadow-lg">
                Begin Notarization
              </Link>
              <Link to="/demo" className="bg-transparent border-2 border-white hover:bg-white/10 transition-all font-semibold rounded-lg text-lg py-4 px-8">
                View Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
}
