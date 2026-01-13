/**
 * Trust & Credibility Section
 * Displays professional credentials and trust markers for B2B and B2C visitors
 */

interface TrustMarker {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TrustSection = () => {
  const trustMarkers: TrustMarker[] = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "24/7 Availability",
      description: "Last-minute appointments honored. Evening & weekend service available."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.657 0 3-.895 3-2s-1.343-2-3-2-3 .895-3 2 1.343 2 3 2zm0 0c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2zm0 0c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2z" />
        </svg>
      ),
      title: "NNA Certified Professional",
      description: "Latest industry standards maintained. Continuing education completed."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "$100K E&O Insurance",
      description: "Full liability coverage. Your transactions protected."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "100% Accuracy Rate",
      description: "Zero re-signings in 2024. Precise attention to detail."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Secure Digital Platform",
      description: "RON compliant with all state laws. Full audit trail & e-journal."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Professional Communication",
      description: "Same-day confirmation & status updates. Direct notary contact."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-professional-blue/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-professional-blue uppercase tracking-wider mb-3">Why Partners Trust Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Built for Professional Excellence</h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Trusted by lenders, title companies, and individuals throughout DFW. We maintain the highest standards of professionalism and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustMarkers.map((marker, index) => (
            <div key={index} className="py-4 group fade-in-up" style={{animationDelay: `${index * 0.08}s`}}>
              <div className="mb-4 text-professional-blue group-hover:scale-110 transition-transform duration-300">
                {marker.icon}
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">{marker.title}</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">{marker.description}</p>
            </div>
          ))}
        </div>

        {/* B2B CTA */}
        <div className="mt-12 pt-12 border-t border-professional-blue/20 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-bold text-charcoal mb-2">Volume & Partnership Opportunities</h3>
            <p className="text-charcoal/70">We work with title companies and lenders on customized rates and dedicated support.</p>
          </div>
          <div className="flex gap-4 whitespace-nowrap">
            <a href="mailto:contact@bridgenotary.com" className="inline-flex items-center justify-center gap-3 bg-professional-blue text-white hover:bg-professional-blue/90 transition-all text-lg py-4 px-8 font-semibold hover:shadow-lg hover:-translate-y-0.5">
              Contact B2B Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
