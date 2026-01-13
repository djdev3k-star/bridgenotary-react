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
    <div className="w-full bg-white" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
      {/* Hero Section */}
      <section className="py-12 md:py-20 border-b border-professional-blue/20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <span className="inline-block text-sm font-semibold text-professional-blue uppercase tracking-wider mb-3">Services</span>
          <h1 className="text-3xl md:text-5xl font-bold text-charcoal mb-3 md:mb-4 leading-tight">
            Our Professional Services
          </h1>
          <p className="text-base md:text-xl text-charcoal/70 max-w-3xl leading-relaxed mb-6 md:mb-8">
            From mortgage closings to international document authentication—we handle every notarization need with expertise and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/book" className="button-primary inline-flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book an Appointment
            </Link>
            <Link to="/contact" className="button-outline inline-flex items-center justify-center gap-2 hover:shadow-md transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
              </svg>
              Contact Us
            </Link>
          </div>

          {/* Trust Markers */}
          <div className="flex flex-wrap gap-4 md:gap-6 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-professional-blue/20">
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
      <section className="py-8 md:py-20 bg-white relative" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Tabs */}
          <div className="flex gap-2 mb-8 md:mb-12 overflow-x-auto pb-3 md:pb-0 relative z-10">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 md:px-6 py-2 md:py-3 font-semibold text-sm md:text-base whitespace-nowrap transition-all ${
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
            <div className="bg-white border-l-2 border-professional-blue pl-4 md:pl-6 py-6 md:py-12 pr-4 md:pr-8 relative z-10">
              <div className="mb-6 md:mb-8">
                <h2 className="text-xl md:text-3xl font-bold text-charcoal mb-2">{activeCategory.title}</h2>
                <p className="text-charcoal/70 text-base md:text-lg">{activeCategory.description}</p>
              </div>

              {/* Services Grid */}
              <div className="space-y-1 max-w-3xl">
                {activeCategory.services.map((service, idx) => (
                  <Link
                    key={service.name}
                    to={service.link}
                    className="flex items-center justify-between px-4 py-2 group hover:bg-professional-blue/6 transition-all rounded-sm fade-in-up"
                    style={{animationDelay: `${idx * 0.05}s`}}
                  >
                    <h3 className="font-medium text-base tracking-tight text-charcoal group-hover:text-professional-blue transition-colors flex-1">{service.name}</h3>
                    <p className="text-professional-blue font-semibold text-sm tracking-wide flex-shrink-0 ml-2">{service.price}</p>
                    <svg className="w-4 h-4 text-professional-blue opacity-0 group-hover:opacity-100 transition-opacity ml-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-professional-blue text-white w-full">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Schedule Your Notarization Today
              </h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Same-day appointments available. Most signings can be scheduled within 2 hours. Whether mobile, remote, or in-office—we handle it all with professional precision.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-white/80 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/90">No hidden fees. Transparent pricing on every service.</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-white/80 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/90">Available 7 days a week for mobile services.</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-white/80 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/90">RON available 24/7 for remote online notarization.</span>
                </div>
              </div>
            </div>

            {/* Right: Action */}
            <div className="space-y-4">
              <Link 
                to="/book" 
                className="flex items-center justify-center gap-2 bg-white text-professional-blue hover:bg-white/90 font-bold py-5 px-8 text-lg shadow-xl transition-all rounded w-full group"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="group-hover:translate-x-1 transition-transform">Book Your Appointment</span>
              </Link>
              <a 
                href="tel:+14696298932" 
                className="flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-bold py-5 px-8 text-lg transition-all rounded w-full group"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="group-hover:translate-x-1 transition-transform">Call (469) 629-8932</span>
              </a>
              <p className="text-center text-white/70 text-sm pt-2">
                Available for same-day appointments in most cases
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
