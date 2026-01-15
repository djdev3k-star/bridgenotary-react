import React from "react";
import { Link } from "react-router-dom";
import LoanSigningBreadcrumb from "@/features/loan-signing/components/LoanSigningBreadcrumb";
import commLoanImage from '@/assets/images/commloanFlyers3.png';
import stackLoanImage from '@/assets/images/stack-loan-documents.jpg';
import commLoanFlyers from '@/assets/images/commloanFlyers.png';

interface ContentSection {
  title: string;
  paragraphs: string[];
}

interface HighlightItem {
  title: string;
  description: string;
}

interface LongFormSigningPageProps {
  title: string;
  subtitle: string;
  heroSummary: string;
  heroBullets?: string[];
  sections: ContentSection[];
  highlights?: HighlightItem[];
  ctaText: string;
  ctaLink: string;
  relatedLinks?: { label: string; path: string; description: string }[];
  serviceId?: string; // Service ID for booking flow query param
}

const LongFormSigningPage: React.FC<LongFormSigningPageProps> = ({
  title,
  subtitle,
  heroSummary,
  heroBullets = [],
  sections,
  highlights,
  ctaText,
  ctaLink,
  relatedLinks,
  serviceId,
}) => {
  // Build CTA link with service query param if serviceId is provided
  const bookingLink = serviceId 
    ? `${ctaLink}${ctaLink.includes('?') ? '&' : '?'}service=${serviceId}`
    : ctaLink;

  return (
    <div className="w-full bg-white">
      <LoanSigningBreadcrumb />
      
      <section className="relative overflow-hidden w-screen left-1/2 -translate-x-1/2 bg-white border-b border-professional-blue/20" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
        {/* Background Image with Blob Mask */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-60">
            <img 
              src={commLoanImage} 
              alt="" 
              className="w-full h-full object-cover"
              style={{
                maskImage: `radial-gradient(ellipse 100% 100% at 50% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0) 70%)`,
                WebkitMaskImage: `radial-gradient(ellipse 100% 100% at 50% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0) 70%)`
              }}
            />
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24 z-10">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-charcoal/60 mb-4">Loan Signing Services</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-charcoal">{title}</h1>
          <p className="text-2xl md:text-3xl text-professional-blue font-semibold mb-6">{subtitle}</p>
          <p className="text-xl md:text-2xl text-charcoal/70 max-w-4xl leading-relaxed mb-8">{heroSummary}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={bookingLink} className="bg-professional-blue text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl hover:bg-professional-blue/90 transition-all">
              {ctaText}
            </Link>
            <Link to="/contact" className="border-2 border-professional-blue text-professional-blue font-semibold px-8 py-4 text-lg hover:bg-professional-blue hover:text-white transition-all">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-32 bg-gradient-to-b from-white to-professional-blue/5 space-y-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-24">
            {sections.map((section, idx) => (
              <article key={section.title} className="group">
                {/* Header with number */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-professional-blue/25 to-professional-blue/15 border-2 border-professional-blue/30 group-hover:border-professional-blue/50 transition-colors">
                      <span className="text-professional-blue font-bold text-2xl">{idx + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight group-hover:text-professional-blue transition-colors">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* Content with borders */}
                <div className="border-l-4 border-professional-blue/30 pl-8 py-2 space-y-6">
                  {section.paragraphs.map((paragraph, pIdx) => (
                    <p key={`${section.title}-${pIdx}`} className="text-charcoal/80 leading-relaxed text-lg font-normal">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Value proposition bar */}
                <div className="mt-8 pt-8 border-t-2 border-professional-blue/10">
                  <div className="bg-professional-blue/5 rounded-lg p-6 border-l-4 border-professional-blue/50">
                    <p className="text-sm font-semibold text-professional-blue uppercase tracking-widest mb-3">Key benefit</p>
                    <p className="text-charcoal/85 leading-relaxed">Reduces delays, protects all parties, and establishes legal certainty across jurisdictions</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <a href="#" className="inline-flex items-center gap-3 text-professional-blue hover:text-professional-blue/70 font-semibold text-base group/link transition-colors">
                    <span>Get started today</span>
                    <svg className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Divider between sections */}
                {idx < sections.length - 1 && (
                  <div className="mt-12 pt-12 border-t-2 border-professional-blue/10" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {highlights && highlights.length > 0 && (
        <section className="py-20 md:py-24 bg-professional-blue/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-professional-blue mb-3">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">What Sets Bridge Notary Apart</h2>
              <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">Experience, precision, and reliability—delivered by NNA-certified signing agents who understand your transaction.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((item, index) => (
                <div key={item.title} className="border-l border-professional-blue pl-6 py-4 group hover:bg-white/50 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-professional-blue font-bold text-lg flex-shrink-0">{index + 1}.</span>
                    <h3 className="font-bold text-charcoal text-lg">{item.title}</h3>
                  </div>
                  <p className="text-charcoal/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 p-8 border-l border-professional-blue pl-6 bg-white">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <svg className="w-12 h-12 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-charcoal text-lg mb-1">Independent & Impartial</h4>
                  <p className="text-charcoal/70">As a commissioned notary, we serve as an impartial witness to the signing—verifying signer identity, ensuring documents are signed voluntarily, and providing legally required notarization. We do not provide legal advice or represent any party in the transaction.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 md:py-28 bg-professional-blue text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to move forward?</h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">We keep your timeline on track with accurate, compliant signings.</p>
          <Link to={bookingLink} className="inline-block border-2 border-white text-white hover:bg-white hover:text-professional-blue font-bold py-5 px-12 text-xl shadow-2xl hover:shadow-xl hover:scale-105 transition-all">
            {ctaText}
          </Link>
        </div>
      </section>
      {relatedLinks && relatedLinks.length > 0 && (
        <section className="py-16 md:py-20 bg-white" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-widest text-professional-blue font-semibold mb-2">Related Services</p>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal">You May Also Need</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group border-l border-professional-blue/50 pl-6 py-4 hover:border-professional-blue hover:bg-professional-blue/5 transition-all"
                >
                  <p className="text-lg font-semibold mb-2 text-charcoal group-hover:text-professional-blue transition-colors flex items-center gap-2">
                    {link.label}
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </p>
                  <p className="text-sm text-charcoal/70 group-hover:text-charcoal transition-colors">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default LongFormSigningPage;
