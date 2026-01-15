import React from 'react';
import { Link } from 'react-router-dom';
import Image from '@/components/ui/Image';

// Import images
import verifyIdentityImg from '../assests/Verify-identity.png';
import uploadDocumentsImg from '../assests/upload-documents.png';
import secureVideoImg from '../assests/secure-video-signing.png';
import { CheckIcon } from '@heroicons/react/24/solid';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="p-6 border-l-2 border-professional-blue group hover:bg-professional-blue/5 transition-colors">
    <div className="flex items-start gap-4">
      <div className="text-professional-blue flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-charcoal">{title}</h3>
        <p className="text-charcoal/70">{description}</p>
      </div>
    </div>
  </div>
);

const BenefitItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-start gap-2">
    <CheckIcon className="h-5 w-5 text-professional-blue mt-1 flex-shrink-0" />
    <span className="text-charcoal/70">{children}</span>
  </div>
);

const WhyBridgeNotaryPage: React.FC = () => {
  return (
    <div className="w-full bg-off-white text-charcoal" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
      {/* Hero Section */}
      <section className="bg-professional-blue/10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Why Bridge Notary?
          </h1>
          <p className="text-lg text-charcoal/70 max-w-3xl mx-auto mb-8">
            The Smarter, Safer Way to Notarize
          </p>
          <p className="text-base text-charcoal/70 max-w-3xl mx-auto">
            When it comes to notarizing your most important documents, you deserve a process that's
            <strong> secure</strong>, <strong>simple</strong>, and <strong>trusted</strong> — no matter where you are.
            Bridge Notary was built to connect people with modern, remote notarization services without
            sacrificing the legal protection and human professionalism that notarization was built on.
          </p>
        </div>
      </section>

      {/* Remote But Personal Section */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">Remote, But Personal</h2>
              <p className="text-lg text-charcoal/70 mb-6">
                We combine cutting-edge technology with real, certified notaries to deliver a remote
                experience that's just as valid — and far more convenient — than going in person.
              </p>
              <p className="text-lg text-charcoal/70">
                You can notarize your documents online from home, work, or anywhere, with no printing,
                mailing, or travel.
              </p>
            </div>
            <div className="bg-professional-blue/10 aspect-video rounded">
              <div className="flex items-center justify-center h-full text-charcoal/40">
                [Infographic: Remote Notarization Process]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="bg-white py-20 lg:py-28 px-6" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-6 text-center">Security & Compliance First</h2>
          <p className="text-lg text-charcoal/70 text-center mb-12 max-w-3xl mx-auto">
            Bridge Notary meets or exceeds the standards for Remote Online Notarization (RON) laws in the U.S.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Biometric Verification"
              description="Advanced identity verification using facial recognition and ID validation"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
            />
            <FeatureCard
              title="Secure Video Sessions"
              description="End-to-end encrypted video conferencing for safe document signing"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>}
            />
            <FeatureCard
              title="Digital Seals"
              description="Tamper-evident seals and signatures that ensure document integrity"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
            />
          </div>
        </div>
      </section>

      {/* Fast & Flexible Section */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">Fast, Flexible & On Your Time</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-4">
              <BenefitItem>Available 24/7 with on-demand notaries</BenefitItem>
              <BenefitItem>Same-day appointments or instant sessions</BenefitItem>
              <BenefitItem>Works across all your devices</BenefitItem>
              <BenefitItem>Support for individuals and businesses</BenefitItem>
            </div>
            <div className="space-y-4">
              <BenefitItem>Transparent pricing – no hidden fees</BenefitItem>
              <BenefitItem>State-commissioned, background-checked notaries</BenefitItem>
              <BenefitItem>Multilingual services available</BenefitItem>
              <BenefitItem>Exceptional customer support</BenefitItem>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-white text-charcoal py-20 px-6 w-full flex items-center justify-center" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Start Your Notarization Now</h2>
          <p className="text-lg text-charcoal/70 mb-8">
            Whether you're notarizing one page or one hundred, Bridge Notary is here to simplify the process.
            Experience how easy remote notarization can be.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Link to="/book" className="inline-flex items-center justify-center bg-professional-blue text-white hover:bg-professional-blue/90 transition-all text-lg py-4 px-8 font-semibold shadow-lg">
              Get Started
            </Link>
            <Link to="/book?service=ron&mode=online" className="inline-flex items-center justify-center border-2 border-professional-blue text-professional-blue hover:bg-professional-blue hover:text-white transition-all text-lg py-4 px-8 font-semibold">
              Schedule RON Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyBridgeNotaryPage;
