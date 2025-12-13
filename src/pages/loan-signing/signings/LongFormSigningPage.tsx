import React from "react";
import { Link } from "react-router-dom";
import LoanSigningSidebar from "@/features/loan-signing/components/LoanSigningSidebar";

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
        <div className="max-w-7xl mx-auto px-6">
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
              <LoanSigningSidebar currentService={title} />
            </aside>
          </div>
        </div>
      </section>

      {highlights && highlights.length > 0 && (
        <section className="py-20 md:py-24 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-proof mb-4">How We Help</h2>
              <p className="text-lg text-neutral-600">Solutions tailored to your closing needs</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item) => (
                <div key={item.title} className="bg-white rounded p-6 shadow-sm border border-neutral-200 hover:shadow-md hover:border-electric-blue/30 transition-all">
                  <p className="font-bold text-proof text-base mb-2">{item.title}</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
        <section className="py-16 md:py-20 bg-gradient-to-b from-neutral-50 to-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-widest text-electric-blue font-semibold mb-2">Related Services</p>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">You May Also Need</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group relative bg-white hover:bg-electric-blue/5 rounded-lg p-6 border border-neutral-200 hover:border-electric-blue/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <p className="text-lg font-semibold mb-2 text-proof group-hover:text-electric-blue transition-colors flex items-center gap-2">
                      {link.label}
                      <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </p>
                    <p className="text-sm text-neutral-600 group-hover:text-neutral-700 transition-colors">{link.description}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-electric-blue to-proof w-0 group-hover:w-full transition-all duration-300 rounded-br-lg"></div>
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
