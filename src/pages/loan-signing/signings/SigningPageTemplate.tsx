import React from 'react';
import { Link } from 'react-router-dom';

interface SigningPageProps {
  title: string;
  subtitle: string;
  intro: string;
  benefit: string;
  idealFor: string;
  ctaText: string;
  ctaLink: string;
  icon?: React.ReactNode;
  serviceId?: string;
}

// Related services data
const relatedServices = [
  { name: "Refinance", link: "/loan-signing/refinance", desc: "Rate reduction & term adjustment" },
  { name: "Purchase", link: "/loan-signing/purchase", desc: "Buyer closing documents" },
  { name: "Seller", link: "/loan-signing/seller", desc: "Property sale execution" },
  { name: "Reverse Mortgage", link: "/loan-signing/reverse", desc: "HECM & equity access" },
  { name: "HELOC", link: "/loan-signing/heloc", desc: "Home equity loans" },
  { name: "Modification", link: "/loan-signing/modification", desc: "Loan term changes" },
  { name: "Commercial", link: "/loan-signing/commercial", desc: "Business property" },
  { name: "TX Property Tax", link: "/loan-signing/property-tax", desc: "Property tax loans" },
];

const SigningPageTemplate: React.FC<SigningPageProps> = ({
  title,
  subtitle,
  intro,
  benefit,
  idealFor,
  ctaText,
  ctaLink,
  serviceId,
}) => {
  const bookingLink = serviceId 
    ? `${ctaLink}${ctaLink.includes('?') ? '&' : '?'}service=${serviceId}`
    : ctaLink;

  // Filter out current service from related
  const otherServices = relatedServices.filter(s => !s.link.includes(serviceId || ''));

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden w-screen left-1/2 -translate-x-1/2 bg-white border-b border-neutral-200 relative" style={{backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(0, 85, 230, 0.05) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.03) 0%, transparent 40%)'}}>'
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-proof/60 mb-4">
            Loan Signing Services
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-proof">
            {title}
          </h1>
          <p className="text-2xl md:text-3xl text-electric-blue font-semibold mb-6">
            {subtitle}
          </p>
          <p className="text-xl md:text-2xl text-neutral-700 max-w-4xl leading-relaxed mb-8">
            {intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={bookingLink}
              className="bg-electric-blue text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl hover:bg-electric-blue/90 transition-all"
            >
              {ctaText}
            </Link>
            <Link
              to="/contact"
              className="border-2 border-proof text-proof font-semibold px-8 py-4 text-lg hover:bg-proof hover:text-white transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Article Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Why Choose Us */}
              <article className="bg-white p-8 md:p-12 shadow-sm border border-neutral-200">
                <h2 className="text-3xl md:text-4xl font-bold text-proof leading-tight mb-8">
                  Why Choose Bridge Notary?
                </h2>
                <p className="text-lg text-neutral-700 leading-[1.9] mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-proof first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
                  {benefit}
                </p>
                <div className="mt-8 pt-8 border-t border-neutral-200">
                  <Link
                    to={bookingLink}
                    className="inline-flex items-center text-electric-blue font-semibold hover:underline"
                  >
                    Schedule Your Signing
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>

              {/* What We Cover */}
              <div>
                <h3 className="text-2xl font-bold text-proof mb-8">What Our Signing Agents Do</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Verify Identities", desc: "Confirm signer identities, match names to documents, verify authority for entities" },
                    { title: "Execute with Precision", desc: "Guide through document packages in proper sequence, capture all signatures" },
                    { title: "Meet Lender Requirements", desc: "Ensure compliance with lender, title, and investor guidelines" },
                    { title: "Deliver Error-Free Results", desc: "Properly executed packages with minimal post-closing corrections" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-white p-6 border border-neutral-200 hover:border-electric-blue/30 hover:shadow-md transition-all"
                    >
                      <h4 className="font-bold text-proof mb-2">{item.title}</h4>
                      <p className="text-sm text-neutral-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal For */}
              <div className="bg-electric-blue/5 p-8 border-l-4 border-electric-blue">
                <h3 className="text-xl font-bold text-proof mb-4">Ideal For</h3>
                <p className="text-lg text-neutral-700 leading-relaxed">{idealFor}</p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Quick Book Card */}
              <div className="bg-white p-6 shadow-sm border border-neutral-200 sticky top-24">
                <h4 className="font-bold text-proof mb-4">Ready to Schedule?</h4>
                <p className="text-sm text-neutral-600 mb-6">
                  Our certified signing agents are available for same-day appointments throughout DFW.
                </p>
                <Link
                  to={bookingLink}
                  className="block w-full bg-electric-blue text-white text-center font-semibold py-3 hover:bg-electric-blue/90 transition-all"
                >
                  {ctaText}
                </Link>
                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-neutral-700">
                      <svg className="w-4 h-4 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                      <span>NNA Certified</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-700">
                      <svg className="w-4 h-4 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                      <span>E&O Insured ($100K)</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-700">
                      <svg className="w-4 h-4 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                      <span>99% On-Time Rate</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Disclaimer */}
              <article className="bg-professional-blue/5 border-l-4 border-professional-blue p-8 md:p-10">
                <h3 className="text-lg font-bold text-charcoal mb-3">Important: Our Role</h3>
                <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
                  Bridge Notary provides <strong>notarization services only</strong>. We witness and authenticate signatures on loan documents. 
                  We do NOT provide legal advice, review documents for accuracy, or advise on loan terms. 
                  If you have questions about your loan documents, consult your lender, loan officer, or an attorney.
                </p>
              </article>

              {/* Other Services */}
              <div className="bg-white p-6 shadow-sm border border-neutral-200">
                <h4 className="font-bold text-proof mb-4">Other Loan Signings</h4>
                <nav className="space-y-2">
                  {otherServices.slice(0, 6).map((service) => (
                    <Link
                      key={service.name}
                      to={service.link}
                      className="block py-2 text-sm text-neutral-600 hover:text-electric-blue border-b border-neutral-100 last:border-0 transition-colors"
                    >
                      <span className="font-medium">{service.name}</span>
                      <span className="text-neutral-400 ml-1">— {service.desc}</span>
                    </Link>
                  ))}
                </nav>
                <Link
                  to="/loan-signing"
                  className="mt-4 inline-flex items-center text-sm text-electric-blue font-medium hover:underline"
                >
                  View All Services
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-electric-blue text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Our experienced signing agents handle your documents with precision and care.
          </p>
          <Link
            to={bookingLink}
            className="inline-block bg-white text-proof hover:bg-neutral-100 font-bold py-5 px-12 text-xl shadow-2xl hover:shadow-xl hover:scale-105 transition-all"
          >
            {ctaText}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SigningPageTemplate;
