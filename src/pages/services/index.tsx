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
      { name: "Apostille Partner Network", link: "/apostille", price: "$150+" },
      { name: "International POA", link: "/apostille", price: "Contact" },
    ],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("loan-signing");
  const activeCategory = serviceCategories.find(cat => cat.id === activeTab);

  return (
    <div className="w-full bg-white">
      {/* Hero Section - Elegant & Purpose-Driven */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-professional-blue/5 to-white border-b border-professional-blue/10" style={{backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(0, 85, 230, 0.08) 0%, transparent 40%), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
        <div className="max-w-5xl mx-auto px-6">
          {/* Header Section */}
          <div className="mb-12 md:mb-16">
            <span className="inline-block text-xs font-semibold text-professional-blue uppercase tracking-widest mb-4 bg-professional-blue/10 px-4 py-2 rounded-full">Professional Services</span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
              Every Document.
              <br />
              <span className="text-professional-blue">Perfectly Notarized.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl leading-relaxed">
              From loan closings to international apostilles—we provide precision notarization services trusted by lenders, attorneys, and individuals across Texas.
            </p>
          </div>

          {/* Trust Markers - Redesigned */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 py-8 md:py-12 border-y border-professional-blue/10">
            <div className="flex items-start gap-3">
              <svg className="h-6 w-6 text-professional-blue flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold text-charcoal text-sm md:text-base">NNA Certified</h3>
                <p className="text-charcoal/60 text-xs md:text-sm">National Notary Association</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="h-6 w-6 text-professional-blue flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold text-charcoal text-sm md:text-base">$100K E&O Insurance</h3>
                <p className="text-charcoal/60 text-xs md:text-sm">Errors & Omissions covered</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="h-6 w-6 text-professional-blue flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold text-charcoal text-sm md:text-base">Texas Commissioned</h3>
                <p className="text-charcoal/60 text-xs md:text-sm">Licensed & bonded notary</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <Link 
              to="/book" 
              className="bg-professional-blue text-white hover:bg-professional-blue/90 font-semibold py-4 px-8 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 rounded-sm"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Service
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-professional-blue/40 text-professional-blue hover:border-professional-blue/70 hover:bg-professional-blue/5 font-semibold py-4 px-8 transition-all flex items-center justify-center gap-2 rounded-sm"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Tabbed Service Categories */}
      <section className="py-16 md:py-24 bg-white relative" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Tabs */}
          <div className="flex gap-1 mb-12 md:mb-16 overflow-x-auto pb-3 md:pb-0 relative z-10 justify-center">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 md:px-8 py-3 md:py-4 font-medium text-sm md:text-base whitespace-nowrap transition-all relative group ${
                  activeTab === category.id
                    ? "text-professional-blue"
                    : "text-charcoal/70 hover:text-professional-blue"
                }`}
              >
                {category.title}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-professional-blue transition-all ${
                  activeTab === category.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                }`}></div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeCategory && (
            <div className="bg-white border-l border-professional-blue pl-4 md:pl-6 py-6 md:py-12 pr-4 md:pr-8 relative z-10">
              <div className="mb-6 md:mb-8">
                <h2 className="text-xl md:text-3xl font-bold text-charcoal mb-2">{activeCategory.title}</h2>
                <p className="text-charcoal/70 text-base md:text-lg">{activeCategory.description}</p>
              </div>

              {/* Services Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-professional-blue">
                      <th className="text-left py-4 px-6 font-bold text-charcoal text-lg">Service</th>
                      <th className="text-center py-4 px-6 font-bold text-charcoal text-lg min-w-[120px]">Starting Price</th>
                      <th className="text-center py-4 px-6 font-bold text-charcoal text-lg w-12"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeCategory.services.map((service, idx) => (
                      <tr key={service.name} className="border-b border-professional-blue/20 hover:bg-professional-blue/5 transition-colors group">
                        <td className="py-4 px-6">
                          <Link to={service.link} className="font-semibold text-charcoal group-hover:text-professional-blue transition-colors">
                            {service.name}
                          </Link>
                        </td>
                        <td className="py-4 px-6 text-center text-professional-blue text-lg">{service.price}</td>
                        <td className="py-4 px-6 text-center">
                          <Link to={service.link} className="inline-block">
                            <svg className="w-5 h-5 text-professional-blue opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
