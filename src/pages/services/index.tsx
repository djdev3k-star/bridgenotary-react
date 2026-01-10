import { Link } from "react-router-dom";
import { useState } from "react";

// Service categories with all services
const serviceCategories = [
  {
    id: "loan-signing",
    title: "Loan Signing",
    description: "Mortgage and real estate closings handled with precision",
    services: [
      { name: "Refinance", link: "/loan-signing/refinance", price: "$125–$150" },
      { name: "Purchase (Buyer)", link: "/loan-signing/purchase", price: "$100–$125" },
      { name: "Seller Signing", link: "/loan-signing/seller", price: "$75–$100" },
      { name: "Reverse Mortgage", link: "/loan-signing/reverse", price: "$125–$175" },
      { name: "HELOC / Home Equity", link: "/loan-signing/heloc", price: "$100–$150" },
      { name: "Loan Modification", link: "/loan-signing/modification", price: "$40–$60" },
      { name: "Commercial Closing", link: "/loan-signing/commercial", price: "$200+" },
      { name: "TX Property Tax Loan", link: "/loan-signing/property-tax", price: "$125" },
    ],
  },
  {
    id: "general-notary",
    title: "General Notary",
    description: "Essential notarization for personal and legal documents",
    services: [
      { name: "Mobile Notary", link: "/services/mobile", price: "$75+" },
      { name: "Power of Attorney", link: "/services/power-of-attorney", price: "$50+" },
      { name: "Estate & Trust", link: "/services/estate-trust", price: "$50+" },
      { name: "Witness Services", link: "/services/witness", price: "$50+" },
      { name: "Affidavits & Jurats", link: "/book?service=general", price: "$25+" },
      { name: "I-9 Verification", link: "/book?service=i9-verification", price: "$50+" },
    ],
  },
  {
    id: "specialty",
    title: "Specialty Services",
    description: "International documents and remote notarization",
    services: [
      { name: "Remote Online Notarization", link: "/ron", price: "$50+" },
      { name: "Apostille Services", link: "/apostille", price: "$150+" },
      { name: "International POA", link: "/apostille", price: "Contact" },
    ],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("loan-signing");
  const activeCategory = serviceCategories.find(cat => cat.id === activeTab);

  return (
    <div className="w-full bg-professional-blue/10 pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-20 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block text-sm font-semibold text-professional-blue uppercase tracking-wider mb-3">Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4 leading-tight">
            Our Professional Services
          </h1>
          <p className="text-xl text-charcoal/70 max-w-3xl leading-relaxed mb-8">
            From mortgage closings to international document authentication—we handle every notarization need with expertise and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/book" className="button-primary inline-flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book an Appointment
            </Link>
            <Link to="/contact" className="button-outline inline-flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
              </svg>
              Contact Us
            </Link>
          </div>

          {/* Trust Markers */}
          <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-neutral-200">
            <div className="flex items-center gap-2 text-charcoal">
              <svg className="h-5 w-5 text-professional-blue" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">NNA Certified</span>
            </div>
            <div className="flex items-center gap-2 text-charcoal">
              <svg className="h-5 w-5 text-professional-blue" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">$100K E&O Insurance</span>
            </div>
            <div className="flex items-center gap-2 text-charcoal">
              <svg className="h-5 w-5 text-professional-blue" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Texas Commissioned</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Service Categories */}
      <section className="py-12 md:py-20 bg-professional-blue/10 relative">
        <div className="max-w-6xl mx-auto px-6">
          {/* Geometric overlays */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-professional-blue/3 -z-10"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-muted-gold/3 -z-10"></div>
          
          {/* Tabs */}
          <div className="flex gap-2 mb-12 overflow-x-auto pb-4 md:pb-0 relative z-10">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 font-semibold text-base whitespace-nowrap transition-all ${
                  activeTab === category.id
                    ? "bg-professional-blue text-white shadow-md"
                    : "bg-white text-charcoal border border-professional-blue/20 hover:border-professional-blue"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeCategory && (
            <div className="bg-white p-8 md:p-12 border border-professional-blue/20 relative z-10">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-2">{activeCategory.title}</h2>
                <p className="text-charcoal/70 text-lg">{activeCategory.description}</p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {activeCategory.services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.link}
                    className="p-4 bg-neutral-50 border border-neutral-200 hover:border-professional-blue hover:shadow-md transition-all group"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-deep-navy group-hover:text-professional-blue transition-colors">{service.name}</h3>
                        <p className="text-professional-blue font-bold mt-1">{service.price}</p>
                      </div>
                      <svg className="w-5 h-5 text-professional-blue opacity-0 group-hover:opacity-100 transition-opacity mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-deep-navy to-professional-blue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-off-white/90 mb-10 max-w-2xl mx-auto">
            Book your appointment in just a few minutes, or call us to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="inline-flex items-center justify-center gap-2 bg-white text-deep-navy hover:bg-neutral-100 font-bold py-4 px-8 text-lg shadow-lg transition-all">
              Book Online Now
            </Link>
            <a href="tel:+14696298932" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 text-lg transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (469) 629-8932
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
