import { Link } from "react-router-dom";

// Service categories with all services
const serviceCategories = [
  {
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
    ctaLink: "/loan-signing",
    ctaText: "View All Loan Signings",
  },
  {
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
    ctaLink: "/book?service=general",
    ctaText: "Book General Notary",
  },
  {
    title: "Specialty Services",
    description: "International documents and remote notarization",
    services: [
      { name: "Remote Online Notarization", link: "/ron", price: "$50+" },
      { name: "Apostille Services", link: "/apostille", price: "$150+" },
      { name: "International POA", link: "/apostille", price: "Contact" },
    ],
    ctaLink: "/ron",
    ctaText: "Explore RON",
  },
];

const Services = () => (
  <div className="w-full bg-white">
    {/* Hero Section */}
    <section className="relative overflow-hidden w-screen left-1/2 -translate-x-1/2 bg-white border-b border-neutral-200">
      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-proof/60 mb-4">
          Bridge Notary
        </p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-proof">
          Our Services
        </h1>
        <p className="text-2xl md:text-3xl text-electric-blue font-semibold mb-6">
          Professional Notary Solutions
        </p>
        <p className="text-xl md:text-2xl text-neutral-700 max-w-3xl leading-relaxed mb-8">
          From mortgage closings to international document authentication—we handle every notarization need with expertise and reliability.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/book"
            className="bg-electric-blue text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl hover:bg-electric-blue/90 transition-all"
          >
            Book an Appointment
          </Link>
          <Link
            to="/contact"
            className="border-2 border-proof text-proof font-semibold px-8 py-4 text-lg hover:bg-proof hover:text-white transition-all"
          >
            Contact Us
          </Link>
        </div>

        {/* Credentials inline */}
        <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-neutral-200">
          <div className="flex items-center gap-2 text-neutral-700">
            <svg className="h-5 w-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
            </svg>
            <span>NNA Certified</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-700">
            <svg className="h-5 w-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
            </svg>
            <span>E&O Insured ($100K)</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-700">
            <svg className="h-5 w-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
            </svg>
            <span>Texas Commissioned</span>
          </div>
        </div>
      </div>
    </section>

    {/* Service Categories */}
    <section className="py-20 md:py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-16">
          {serviceCategories.map((category, catIdx) => (
            <div key={category.title} className={catIdx > 0 ? "pt-16 border-t border-neutral-200" : ""}>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-proof mb-2">
                    {category.title}
                  </h2>
                  <p className="text-lg text-neutral-600">{category.description}</p>
                </div>
                <Link
                  to={category.ctaLink}
                  className="text-electric-blue font-semibold hover:underline flex items-center gap-2 shrink-0"
                >
                  {category.ctaText}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.link}
                    className="group bg-white p-5 border border-neutral-200 hover:border-electric-blue/50 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-proof group-hover:text-electric-blue transition-colors">
                        {service.name}
                      </span>
                      <span className="text-sm text-neutral-500">{service.price}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Value-Added Services - Simple List */}
    <section className="py-16 px-6 bg-white border-t border-neutral-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold text-proof mb-4">Add-On Services</h2>
            <p className="text-neutral-600">
              Additional services available with any signing appointment.
            </p>
          </div>
          <div className="md:w-2/3">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {[
                { name: "Scanbacks", desc: "Same-day digital delivery" },
                { name: "Printing", desc: "On-site document printing" },
                { name: "Additional Signers", desc: "Multiple party signings" },
                { name: "Weekend/After Hours", desc: "Flexible scheduling" },
                { name: "Travel Fee", desc: "Extended service area" },
                { name: "Facility Fee", desc: "TX equity loan locations" },
              ].map((item) => (
                <div key={item.name} className="flex items-start gap-3 py-2">
                  <svg className="w-5 h-5 text-electric-blue mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                  <div>
                    <span className="font-medium text-proof">{item.name}</span>
                    <span className="text-neutral-500 text-sm ml-2">— {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* What to Bring - Inline */}
    <section className="py-16 px-6 bg-electric-blue/5 border-t border-electric-blue/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-proof mb-8 text-center">What to Bring to Your Appointment</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-electric-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 7h.01M3.5 7v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-13a2 2 0 0 0-2 2z"/>
              <path d="M3.5 7H6m11 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
            <span className="text-proof font-medium">Valid Photo ID</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-electric-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
            </svg>
            <span className="text-proof font-medium">Your Documents</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-electric-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <path d="M22 4 12 14.01l-3-3"/>
            </svg>
            <span className="text-proof font-medium">Supporting Paperwork</span>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 md:py-28 bg-electric-blue text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Schedule your appointment today. Same-day service available throughout DFW.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/book"
            className="inline-block bg-white text-proof hover:bg-neutral-100 font-bold py-5 px-12 text-xl shadow-2xl hover:shadow-xl hover:scale-105 transition-all"
          >
            Book an Appointment
          </Link>
          <a
            href="mailto:info@bridgenotary.com"
            className="inline-block border-2 border-white text-white hover:bg-white hover:text-electric-blue font-bold py-5 px-12 text-xl transition-all"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Services;
