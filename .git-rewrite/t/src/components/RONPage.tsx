import React from 'react';
import { Link } from 'react-router-dom';
import Image from './shared/Image';

// Import images
import uploadDocsImg from '../assests/upload-documents.png';
import verifyIdentityImg from '../assests/Verify-identity.png';
import secureVideoImg from '../assests/secure-video-signing.png';
import notarySessionImg from '../assests/A professional notary conducting a video conference with a client for online notary services. The image shows the notary on a laptop screen, with a legal document visible in the foreground._.jpg';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc }) => (
  <div className="card text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-proof mb-2">{title}</h3>
    <p className="text-neutral-600">{desc}</p>
  </div>
);

interface StatProps {
  number: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ number, label }) => (
  <div className="text-center card p-6">
    <p className="text-3xl font-bold text-proof">{number}</p>
    <p className="text-neutral-600 mt-1">{label}</p>
  </div>
);

const CheckIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export default function RONPage() {
  return (
    <div className="w-full bg-white text-neutral-900 pt-20">
      {/* Hero Section with Primary CTA */}
      <section className="bg-gradient-to-b from-proof/10 to-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-proof mb-6">
                Start Your Remote Online Notarization Session
              </h1>
              <p className="text-xl text-neutral-600 mb-8">
                Complete your notarization securely from anywhere, in minutes. Our platform ensures a legally-binding process with enterprise-grade security.
              </p>
            </div>
            <div className="order-first md:order-last">
              <Image
                src={notarySessionImg}
                alt="Professional online notary session in progress"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <Link to="/book" className="button-primary text-lg py-4 px-8">Start Notarization Session</Link>
            <Link to="/schedule" className="button-outline text-lg py-4 px-8">Schedule for Later</Link>
          </div>
          
          {/* Session Requirements Quick Check */}
          <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">Quick Session Checklist</h3>
            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-2">
                <CheckIcon />
                <span>Valid Government ID</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon />
                <span>Webcam & Microphone</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon />
                <span>Document Ready</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon />
                <span>Stable Internet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section">
        <h2 className="text-3xl font-semibold text-center mb-12">How Online Notarization Works</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="relative">
            <Image
              src={uploadDocsImg}
              alt="Document upload and preparation process"
              className="rounded-lg shadow-sm mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">1. Upload & Prepare</h3>
            <p className="text-neutral-600">Upload your documents and prepare them for signing. We support all common file formats.</p>
          </div>
          
          <div className="relative">
            <Image
              src={verifyIdentityImg}
              alt="Identity verification process"
              className="rounded-lg shadow-sm mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">2. Verify Identity</h3>
            <p className="text-neutral-600">Complete our secure identity verification process with your government-issued ID.</p>
          </div>
          
          <div className="relative">
            <Image
              src={secureVideoImg}
              alt="Secure video signing session"
              className="rounded-lg shadow-sm mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">3. Meet & Sign</h3>
            <p className="text-neutral-600">Connect with a notary via secure video call to complete your signing session.</p>
          </div>
        </div>
      </section>

      {/* Session Preparation */}
      <section className="bg-neutral-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Prepare for Your Session</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Required Documents</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <div>
                    <span className="font-medium block">Government-Issued Photo ID</span>
                    <span className="text-neutral-600">Driver's license, passport, or state ID card</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <div>
                    <span className="font-medium block">Documents to be Notarized</span>
                    <span className="text-neutral-600">In PDF, Word, or image format</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <div>
                    <span className="font-medium block">Supporting Documentation</span>
                    <span className="text-neutral-600">If required for your specific notarization</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Requirements</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <div>
                    <span className="font-medium block">Working Camera</span>
                    <span className="text-neutral-600">Built-in or external webcam</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <div>
                    <span className="font-medium block">Microphone & Speakers</span>
                    <span className="text-neutral-600">For clear audio communication</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <div>
                    <span className="font-medium block">Stable Internet</span>
                    <span className="text-neutral-600">Minimum 1 Mbps upload/download</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section 
      <section className="bg-neutral-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-12">Trusted Nationwide</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <Stat number="24/7" label="Available" />
          <Stat number="50" label="States" />
          <Stat number="5 min" label="Average Session" />
          <Stat number="100%" label="Secure" />
        </div>
      </section>
        */}

      {/* Final CTA */}
      <section className=" text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8">Join thousands of satisfied customers who trust Bridge Notary for their online notarization needs.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link to="/book" className="button-primary text-lg py-4 px-8">Begin Notarization</Link>
            <Link to="/demo" className="button-outline text-lg py-4 px-8">View Demo</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
