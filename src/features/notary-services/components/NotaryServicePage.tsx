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
  breadcrumbLabel?: string;
  showSidebar?: boolean;
}

const NotaryServicePage: React.FC<NotaryServicePageProps> = ({
  title,
  subtitle,
  heroSummary,
  sections,
  highlights,
  ctaText = "Schedule an Appointment",
  ctaLink = "/book",
  breadcrumbLabel = title,
  showSidebar = true,
}) => {
  return (
    <div className="w-full bg-white">
      {/* Breadcrumbs */}
      <div className="w-full bg-off-white border-b border-professional-blue/20">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-professional-blue hover:text-professional-blue/80 transition-colors">Home</Link>
            <svg className="w-4 h-4 text-charcoal/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/services" className="text-professional-blue hover:text-professional-blue/80 transition-colors">Services</Link>
            <svg className="w-4 h-4 text-charcoal/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-charcoal/70">{breadcrumbLabel}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden w-screen left-1/2 -translate-x-1/2 bg-white border-b border-professional-blue/20">
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24">
          <p className="text-sm font-semibold tracking-wider uppercase text-professional-blue mb-4">Notary Services</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-charcoal">{title}</h1>
          <p className="text-2xl md:text-3xl text-professional-blue font-semibold mb-6">{subtitle}</p>
          <p className="text-xl md:text-2xl text-charcoal/70 max-w-4xl leading-relaxed mb-8">{heroSummary}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={ctaLink} className="bg-professional-blue text-white font-semibold px-8 py-4 text-lg hover:bg-professional-blue/90 transition-all">
              {ctaText}
            </Link>
            <Link to="/contact" className="border-2 border-professional-blue text-professional-blue font-semibold px-8 py-4 text-lg hover:bg-professional-blue hover:text-white transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className={showSidebar ? "grid lg:grid-cols-3 gap-12" : "grid gap-12"}>
            <div className={showSidebar ? "lg:col-span-2 space-y-12" : "space-y-12"}>
              {sections.map((section) => (
                <article key={section.title} className="space-y-6 border-l-2 border-professional-blue pl-6 py-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight">{section.title}</h2>
                  {section.paragraphs.map((paragraph, pIdx) => (
                    <p key={`${section.title}-${pIdx}`} className="text-lg text-charcoal/70 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </article>
              ))}
            </div>
            {showSidebar && (
              <aside className="space-y-6">
                <NotaryServicesSidebar currentService={title} />
              </aside>
            )}
          </div>
        </div>
      </section>

      {highlights && highlights.length > 0 && (
        <section className="py-20 md:py-24 bg-professional-blue/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Our Approach</h2>
              <p className="text-lg text-charcoal/70">Professional expertise with personal care</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((item) => (
                <div key={item.title} className="border-l-2 border-professional-blue pl-6 py-4 group">
                  <p className="font-bold text-charcoal text-base mb-2">{item.title}</p>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-professional-blue/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Ready to get notarized?</h2>
          <p className="text-xl md:text-2xl text-charcoal/70 mb-10 max-w-3xl mx-auto leading-relaxed">Professional, discreet notary services available when you need them.</p>
          <Link to={ctaLink} className="inline-block bg-professional-blue text-white hover:bg-professional-blue/90 font-bold py-5 px-12 text-xl transition-all">
            {ctaText}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotaryServicePage;
