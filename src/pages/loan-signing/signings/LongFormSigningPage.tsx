import React from "react";
import { Link } from "react-router-dom";

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
}) => {
  return (
    <div className="w-full bg-white">
      <section className="relative overflow-hidden w-screen left-1/2 -translate-x-1/2 bg-white border-b border-neutral-200">
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-proof/60 mb-4">Loan Signing Services</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-proof">{title}</h1>
          <p className="text-2xl md:text-3xl text-electric-blue font-semibold mb-6">{subtitle}</p>
          <p className="text-xl md:text-2xl text-neutral-700 max-w-4xl leading-relaxed mb-8">{heroSummary}</p>
          {heroBullets.length > 0 && (
            <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mb-10">
              {heroBullets.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-neutral-50 rounded-xl p-4 border border-neutral-200">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-electric-blue text-white text-xs font-bold flex-shrink-0">✓</span>
                  <span className="text-base md:text-lg leading-relaxed text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={ctaLink} className="bg-electric-blue text-white font-semibold rounded-lg px-8 py-4 text-lg shadow-lg hover:shadow-xl hover:bg-electric-blue/90 transition-all">
              {ctaText}
            </Link>
            <Link to="/contact" className="border-2 border-proof text-proof font-semibold rounded-lg px-8 py-4 text-lg hover:bg-proof hover:text-white transition-all">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-16">
            {sections.map((section, idx) => (
              <article key={section.title} className={`space-y-6 ${idx % 2 === 1 ? 'bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-neutral-200' : ''}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-proof leading-tight">{section.title}</h2>
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p key={`${section.title}-${pIdx}`} className="text-lg md:text-xl text-neutral-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
          <aside className="space-y-6">
            <div className="bg-proof text-white rounded-2xl p-8 shadow-lg sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Why Bridge Notary</h3>
              <ul className="space-y-4 text-base text-white/90">
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">✓</span>
                  <span>NNA Certified, bonded, insured signing agents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">✓</span>
                  <span>99% on-time rate with clear communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">✓</span>
                  <span>Mobile, in-person, and remote options</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">✓</span>
                  <span>Texas notarial compliance and quality control</span>
                </li>
              </ul>
              {highlights && highlights.length > 0 && (
                <>
                  <div className="h-px bg-white/20 my-6"></div>
                  <h3 className="text-xl font-semibold mb-4">Key Points</h3>
                  <ul className="space-y-4 text-sm text-white/90">
                    {highlights.map((item) => (
                      <li key={item.title}>
                        <p className="font-bold text-gold text-base mb-1">{item.title}</p>
                        <p className="leading-relaxed">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </aside>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-electric-blue text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to move forward?</h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">We keep your timeline on track with accurate, compliant signings.</p>
          <Link to={ctaLink} className="inline-block bg-white text-proof hover:bg-neutral-100 font-bold py-5 px-12 rounded-lg text-xl shadow-2xl hover:shadow-xl hover:scale-105 transition-all">
            {ctaText}
          </Link>
        </div>
      </section>

      {relatedLinks && relatedLinks.length > 0 && (
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-proof">Explore Other Loan Signing Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="bg-neutral-50 hover:bg-proof hover:text-white rounded-xl p-6 border border-neutral-200 hover:border-proof transition-all group"
                >
                  <p className="text-xl font-bold mb-3 text-proof group-hover:text-white transition-colors">{link.label}</p>
                  <p className="text-neutral-600 group-hover:text-white/90 text-base leading-relaxed transition-colors">{link.description}</p>
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
