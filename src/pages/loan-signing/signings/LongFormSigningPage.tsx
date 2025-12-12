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
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={ctaLink} className="bg-electric-blue text-white font-semibold rounded px-8 py-4 text-lg shadow-lg hover:shadow-xl hover:bg-electric-blue/90 transition-all">
              {ctaText}
            </Link>
            <Link to="/contact" className="border-2 border-proof text-proof font-semibold rounded px-8 py-4 text-lg hover:bg-proof hover:text-white transition-all">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          {heroBullets.length > 0 && (
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-proof mb-4">What We Cover</h2>
                <div className="h-1 w-20 bg-electric-blue mx-auto"></div>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {heroBullets.map((item, index) => (
                  <li key={item} className="group relative bg-gradient-to-br from-white to-neutral-50 rounded p-8 shadow-lg border-2 border-transparent hover:border-electric-blue hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric-blue to-proof rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="absolute inset-0 bg-electric-blue rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-electric-blue text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="text-lg font-semibold text-neutral-800 leading-relaxed group-hover:text-proof transition-colors">{item}</p>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-6 h-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {sections.map((section, idx) => (
              <article key={section.title} className="space-y-6 bg-white rounded p-8 md:p-10 shadow-sm border border-neutral-200">
                <h2 className="text-3xl md:text-4xl font-bold text-proof leading-tight">{section.title}</h2>
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p key={`${section.title}-${pIdx}`} className="text-lg text-neutral-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
          <aside className="space-y-6">
            <div className="bg-proof text-white rounded p-8 shadow-lg sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Why Bridge Notary</h3>
              <ul className="space-y-4 text-base text-white/90">
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">✓</span>
                  <span>NNA Certified, bonded, insured signing agents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">✓</span>
                  <span>99% on-time rate with clear communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">✓</span>
                  <span>Mobile, in-person, and remote options</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">✓</span>
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
                        <p className="font-bold text-white text-base mb-1">{item.title}</p>
                        <p className="leading-relaxed">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </aside>
        </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-electric-blue text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to move forward?</h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">We keep your timeline on track with accurate, compliant signings.</p>
          <Link to={ctaLink} className="inline-block bg-white text-proof hover:bg-neutral-100 font-bold py-5 px-12 rounded text-xl shadow-2xl hover:shadow-xl hover:scale-105 transition-all">
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
                  className="bg-neutral-50 hover:bg-proof hover:text-white rounded p-6 border border-neutral-200 hover:border-proof transition-all group"
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
