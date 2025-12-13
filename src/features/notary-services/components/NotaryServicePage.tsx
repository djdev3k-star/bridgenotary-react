import React from "react";
import { Link } from "react-router-dom";
import NotaryServicesSidebar from "@/features/notary-services/components/NotaryServicesSidebar";

interface ContentSection {
  title: string;
  paragraphs: string[];
}

interface HighlightItem {
  title: string;
  description: string;
}

interface NotaryServicePageProps {
  title: string;
  subtitle: string;
  heroSummary: string;
  sections: ContentSection[];
  highlights?: HighlightItem[];
  ctaText?: string;
  ctaLink?: string;
}

const NotaryServicePage: React.FC<NotaryServicePageProps> = ({
  title,
  subtitle,
  heroSummary,
  sections,
  highlights,
  ctaText = "Schedule an Appointment",
  ctaLink = "/book",
}) => {
  return (
    <div className="w-full bg-white">
      <section className="relative overflow-hidden w-screen left-1/2 -translate-x-1/2 bg-white border-b border-neutral-200">
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-proof/60 mb-4">Notary Services</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-proof">{title}</h1>
          <p className="text-2xl md:text-3xl text-electric-blue font-semibold mb-6">{subtitle}</p>
          <p className="text-xl md:text-2xl text-neutral-700 max-w-4xl leading-relaxed mb-8">{heroSummary}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={ctaLink} className="bg-electric-blue text-white font-semibold rounded px-8 py-4 text-lg shadow-lg hover:shadow-xl hover:bg-electric-blue/90 transition-all">
              {ctaText}
            </Link>
            <Link to="/contact" className="border-2 border-proof text-proof font-semibold rounded px-8 py-4 text-lg hover:bg-proof hover:text-white transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {sections.map((section) => (
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
              <NotaryServicesSidebar currentService={title} />
            </aside>
          </div>
        </div>
      </section>

      {highlights && highlights.length > 0 && (
        <section className="py-20 md:py-24 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-proof mb-4">Our Approach</h2>
              <p className="text-lg text-neutral-600">Professional expertise with personal care</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to get notarized?</h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">Professional, discreet notary services available when you need them.</p>
          <Link to={ctaLink} className="inline-block bg-white text-proof hover:bg-neutral-100 font-bold py-5 px-12 rounded text-xl shadow-2xl hover:shadow-xl hover:scale-105 transition-all">
            {ctaText}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotaryServicePage;
