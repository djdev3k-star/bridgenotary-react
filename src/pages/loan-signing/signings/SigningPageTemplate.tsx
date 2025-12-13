import React from 'react';
import { Link } from 'react-router-dom';

interface SigningPageProps {
  title: string;
  subtitle: string;
  intro: string;
  benefit: string;
  idealFor: string;
  ctaText: string;
  ctaLink: string;
  icon: React.ReactNode;
}

const SigningPageTemplate: React.FC<SigningPageProps> = ({
  title,
  subtitle,
  intro,
  benefit,
  idealFor,
  ctaText,
  ctaLink,
  icon,
}) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white min-h-screen flex items-center overflow-hidden w-screen left-1/2 -translate-x-1/2">
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-proof to-electric-blue opacity-90 z-10"></div>
          <div className="absolute inset-0 bg-black/20 z-10"></div>
        </div>

        <div className="w-full relative z-30 px-6 py-24">
          <div className="mx-auto text-center max-w-4xl">
            <div className="fade-in mb-8">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 border border-white/30">
                  {icon}
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                {title}
              </h1>
              <p className="text-2xl md:text-3xl text-gold mb-8 drop-shadow-md font-semibold">
                {subtitle}
              </p>
              <p className="text-lg md:text-xl text-white/90 mb-12 drop-shadow-md max-w-3xl mx-auto leading-relaxed">
                {intro}
              </p>

              <Link to={ctaLink} className="inline-block bg-white text-proof hover:bg-neutral-100 transition-all rounded text-lg py-5 px-12 font-semibold shadow-2xl transform hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center justify-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {ctaText}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-white">
        {/* Benefits Section */}
        <section className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-proof mb-6">Why Choose Bridge Notary?</h2>
                <div className="h-1 w-20 bg-gold mb-8"></div>
                <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                  {benefit}
                </p>
              </div>

              <div className="fade-in-delay grid grid-cols-1 gap-4">
                <div className="bg-proof/5 rounded p-6 border-l-4 border-electric-blue">
                  <h3 className="text-xl font-bold text-proof mb-3">Professional Agents</h3>
                  <p className="text-neutral-700">NNA Certified, bonded, insured, and background-checked signing agents</p>
                </div>
                <div className="bg-proof/5 rounded p-6 border-l-4 border-electric-blue">
                  <h3 className="text-xl font-bold text-proof mb-3">99% On-Time Rate</h3>
                  <p className="text-neutral-700">Clear communication and reliable service you can count on</p>
                </div>
                <div className="bg-proof/5 rounded p-6 border-l-4 border-electric-blue">
                  <h3 className="text-xl font-bold text-proof mb-3">Flexible Options</h3>
                  <p className="text-neutral-700">Mobile, in-person, and remote signings with same-day availability</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Cover Section */}
        <section className="py-20 lg:py-28 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-neutral-300"></div>
                <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">What We Cover</span>
                <div className="h-px flex-1 bg-neutral-300"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-proof mb-6">Signing Agent Role</h2>
              <p className="text-lg text-neutral-600 max-w-3xl">
                Our professional agents ensure precision, compliance, and efficiency at every signing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded p-6 shadow-sm border border-neutral-200 bg-white">
                <h3 className="text-lg font-bold text-proof mb-2">Verify identities and authority</h3>
                <p className="text-neutral-700 text-sm">Confirm signer identities, match names to documents, and verify authority to sign for corporations, LLCs, trusts, or partnerships.</p>
              </div>

              <div className="rounded p-6 shadow-sm border border-neutral-200 bg-white">
                <h3 className="text-lg font-bold text-proof mb-2">Execute with precision</h3>
                <p className="text-neutral-700 text-sm">Guide signers through document packages in proper sequence, ensure all required signatures and initials are captured in correct locations.</p>
              </div>

              <div className="rounded p-6 shadow-sm border border-neutral-200 bg-white">
                <h3 className="text-lg font-bold text-proof mb-2">Meet lender requirements</h3>
                <p className="text-neutral-700 text-sm">Ensure documents align with lender, title, and investor guidelines, flag inconsistencies, and coordinate completion for timely funding.</p>
              </div>

              <div className="rounded p-6 shadow-sm border border-neutral-200 bg-white">
                <h3 className="text-lg font-bold text-proof mb-2">Deliver error-free results</h3>
                <p className="text-neutral-700 text-sm">Manage document flow, coordinate with all parties, and deliver properly executed packages with minimal post-closing corrections.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ideal For Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-neutral-50 rounded shadow-lg p-10 border-l-4 border-electric-blue">
              <h3 className="text-2xl md:text-3xl font-bold text-proof mb-4">Ideal For</h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {idealFor}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-proof mb-8">Ready to Get Started?</h2>
            <p className="text-lg text-neutral-600 mb-12 max-w-2xl mx-auto">
              Our experienced signing agents are ready to handle your documents with precision and care.
            </p>
            <Link to={ctaLink} className="inline-block bg-electric-blue hover:bg-electric-blue/90 text-white font-semibold py-4 px-12 rounded text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              {ctaText} Now
            </Link>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="py-20 lg:py-28 bg-proof text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Other Signing Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/loan-signing/refinance" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded p-6 border border-white/20 transition-all transform hover:scale-105">
                <h3 className="font-bold mb-2">Refinance Signings</h3>
                <p className="text-white/80 text-sm">Mortgage rate reduction and loan term adjustments</p>
              </Link>
              <Link to="/loan-signing/purchase" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded p-6 border border-white/20 transition-all transform hover:scale-105">
                <h3 className="font-bold mb-2">Purchase Signings</h3>
                <p className="text-white/80 text-sm">Home buyer closing documents and agreements</p>
              </Link>
              <Link to="/loan-signing/seller" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded p-6 border border-white/20 transition-all transform hover:scale-105">
                <h3 className="font-bold mb-2">Seller Signings</h3>
                <p className="text-white/80 text-sm">Property sale documentation and execution</p>
              </Link>
              <Link to="/loan-signing/reverse" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded p-6 border border-white/20 transition-all transform hover:scale-105">
                <h3 className="font-bold mb-2">Reverse Mortgages</h3>
                <p className="text-white/80 text-sm">Senior-focused HECM and equity access programs</p>
              </Link>
              <Link to="/loan-signing/heloc" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded p-6 border border-white/20 transition-all transform hover:scale-105">
                <h3 className="font-bold mb-2">HELOC / Home Equity</h3>
                <p className="text-white/80 text-sm">Home equity line and loan documentation</p>
              </Link>
              <Link to="/loan-signing/commercial" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded p-6 border border-white/20 transition-all transform hover:scale-105">
                <h3 className="font-bold mb-2">Commercial Closings</h3>
                <p className="text-white/80 text-sm">Business property transactions and agreements</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SigningPageTemplate;
