import React from "react";
import { Link } from "react-router-dom";
import LoanSigningBreadcrumb from "@/features/loan-signing/components/LoanSigningBreadcrumb";

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
      
      <section className="relative overflow-hidden w-screen left-1/2 -translate-x-1/2 bg-white border-b border-neutral-200">
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-charcoal/60 mb-4">Loan Signing Services</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-charcoal">{title}</h1>
          <p className="text-2xl md:text-3xl text-professional-blue font-semibold mb-6">{subtitle}</p>
          <p className="text-xl md:text-2xl text-charcoal/70 max-w-4xl leading-relaxed mb-8">{heroSummary}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={bookingLink} className="bg-professional-blue text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl hover:bg-professional-blue/90 transition-all">
              {ctaText}
            </Link>
            <Link to="/contact" className="border-2 border-charcoal text-charcoal font-semibold px-8 py-4 text-lg hover:bg-charcoal hover:text-white transition-all">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            {sections.map((section, idx) => (
              <article key={section.title} className="space-y-6 bg-white p-8 md:p-10 shadow-sm border border-neutral-200">
                <h2 className="text-3xl md:text-4xl font-bold text-proof leading-tight">{section.title}</h2>
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p key={`${section.title}-${pIdx}`} className="text-lg text-neutral-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      {highlights && highlights.length > 0 && (
        <section className="py-20 md:py-24 bg-white border-t border-neutral-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-professional-blue mb-3">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">What Sets Bridge Notary Apart</h2>
              <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">Experience, precision, and reliability—delivered by NNA-certified signing agents who understand your transaction.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((item, index) => (
                <div key={item.title} className="relative">
                  <div className="absolute -top-4 -left-2 w-10 h-10 bg-professional-blue/10 flex items-center justify-center text-professional-blue font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="pt-8 pl-4">
                    <h3 className="font-bold text-charcoal text-lg mb-3">{item.title}</h3>
                    <p className="text-charcoal/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 p-8 bg-professional-blue/5 border border-professional-blue/20">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <svg className="w-12 h-12 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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

      <section className="py-20 md:py-28 bg-electric-blue text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to move forward?</h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">We keep your timeline on track with accurate, compliant signings.</p>
          <Link to={bookingLink} className="inline-block bg-white text-proof hover:bg-neutral-100 font-bold py-5 px-12 rounded text-xl shadow-2xl hover:shadow-xl hover:scale-105 transition-all">
            {ctaText}
          </Link>
        </div>
      </section>
      {relatedLinks && relatedLinks.length > 0 && (
        <section className="py-16 md:py-20 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-widest text-professional-blue font-semibold mb-2">Related Services</p>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal">You May Also Need</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group relative bg-white hover:bg-professional-blue/5 p-6 border border-neutral-200 hover:border-professional-blue/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <p className="text-lg font-semibold mb-2 text-charcoal group-hover:text-professional-blue transition-colors flex items-center gap-2">
                      {link.label}
                      <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </p>
                    <p className="text-sm text-charcoal/70 group-hover:text-charcoal transition-colors">{link.description}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-professional-blue to-muted-gold w-0 group-hover:w-full transition-all duration-300"></div>
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
