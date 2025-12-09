import { Link } from "react-router-dom";

interface HeroBullet {
  text: string;
}

interface Section {
  title: string;
  paragraphs: string[];
}

interface Highlight {
  title: string;
  description: string;
}

interface RelatedLink {
  title: string;
  to: string;
}

const heroBullets: HeroBullet[] = [
  { text: "Professional witness services for legal documents" },
  { text: "Mobile service to your preferred location" },
  { text: "Impartial third-party verification" },
  { text: "Same-day appointments available" },
];

const sections: Section[] = [
  {
    title: "Professional Witness Services for Legal Documents",
    paragraphs: [
      "Many legal documents require witnesses in addition to notarization. At Bridge Notary, we provide professional witness services to ensure your documents meet all legal requirements and are properly executed.",
      "Our witnesses are impartial third parties who observe document signings and provide their signatures as required by law. Whether you need witnesses for wills, trusts, contracts, or other legal instruments, we ensure compliance with Texas witness requirements.",
      "We understand that finding credible, impartial witnesses can be challenging—especially on short notice. Our professional witness services eliminate this problem by providing reliable witnesses who understand legal procedures and documentation requirements.",
    ],
  },
  {
    title: "When You Need Professional Witnesses",
    paragraphs: [
      "Wills and testaments often require two witnesses who are not beneficiaries of the estate. Our professional witnesses provide this service while maintaining complete impartiality and confidentiality.",
      "Business contracts, especially those involving significant financial transactions, may require witness signatures to validate the agreement. We provide professional witnesses who understand commercial documentation.",
      "Real estate transactions sometimes require witnesses beyond notarization, particularly for certain types of deeds or property transfers. Our witnesses are familiar with real estate documentation and can facilitate smooth closings.",
      "Healthcare directives, powers of attorney, and other estate planning documents may require witnesses depending on their specific structure and state requirements. We ensure compliance with all applicable witness regulations.",
    ],
  },
  {
    title: "Mobile Witness Services Throughout DFW",
    paragraphs: [
      "Our mobile witness services bring professional witnesses directly to your location—whether that's your home, office, attorney's office, or any other convenient meeting place.",
      "This mobile approach is especially valuable when dealing with time-sensitive documents, clients with mobility challenges, or situations where gathering all parties in one location is difficult. We coordinate with your schedule to provide seamless witness services.",
      "We arrive prepared with proper identification and documentation, ensuring that the witness process is completed efficiently and in compliance with all legal requirements. Our witnesses maintain detailed records for future verification if needed.",
    ],
  },
  {
    title: "Combining Witness & Notary Services",
    paragraphs: [
      "Many documents require both witnesses and notarization. When you book with Bridge Notary, we can provide both services in a single appointment, streamlining the process and ensuring all legal requirements are met simultaneously.",
      "Our notaries understand which documents require witnesses in addition to notarization and can guide you through the process. This eliminates confusion and ensures your documents are executed correctly the first time.",
      "Whether you're signing estate planning documents, business contracts, or real estate paperwork, we provide comprehensive witness and notarization services tailored to your specific document requirements.",
    ],
  },
];

const highlights: Highlight[] = [
  {
    title: "✓ Impartial Witnesses",
    description: "Professional third-party witnesses with no interest in your documents.",
  },
  {
    title: "✓ Legal Compliance",
    description: "All witness services meet Texas legal requirements for document execution.",
  },
  {
    title: "✓ Mobile Service",
    description: "We come to your preferred location for convenient witness services.",
  },
  {
    title: "✓ Combined Services",
    description: "Witness and notarization in a single appointment for complete documentation.",
  },
  {
    title: "✓ Fast Response",
    description: "Same-day witness services available for urgent document needs.",
  },
];

const relatedLinks: RelatedLink[] = [
  { title: "Mobile Notary Services", to: "/services/mobile" },
  { title: "Estate & Trust Services", to: "/services/estate-trust" },
  { title: "Power of Attorney", to: "/services/power-of-attorney" },
  { title: "All Notary Services", to: "/services" },
];

const WitnessPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - White background, no gradient */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-proof mb-6">
            Professional Witness Services
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            Impartial, professional witnesses for wills, contracts, and legal documents—ensuring your paperwork meets all legal requirements.
          </p>

          {/* Hero bullets in card-style list on neutral background */}
          <div className="bg-neutral-50 rounded-lg p-8 mt-8">
            <ul className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
              {heroBullets.map((bullet, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-6 w-6 text-electric-blue mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-neutral-700 text-lg">{bullet.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <Link
              to="/book"
              className="button-primary text-lg py-4 px-10 inline-block"
            >
              Book Witness Service
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {sections.map((section, index) => (
                <article
                  key={index}
                  className={index % 2 === 0 ? "bg-white rounded-lg shadow-sm p-8" : ""}
                >
                  <h2 className="text-3xl font-bold text-proof mb-6">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-lg text-neutral-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar - Sticky Highlights */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-2xl font-bold text-proof mb-6">
                  Why Choose Us
                </h3>
                <ul className="space-y-6">
                  {highlights.map((highlight, index) => (
                    <li key={index}>
                      <h4 className="font-semibold text-neutral-900 mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-neutral-600">{highlight.description}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-neutral-200">
                  <Link
                    to="/book"
                    className="button-primary w-full block text-center"
                  >
                    Schedule Now
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section - Electric Blue */}
      <section className="bg-electric-blue py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Professional Witnesses for Your Documents?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule your witness service today. We provide impartial, professional witnesses who ensure your documents are legally compliant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book"
              className="bg-white text-electric-blue hover:bg-neutral-100 font-semibold py-4 px-10 rounded-lg text-lg transition-colors"
            >
              Book Witness Service
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-electric-blue font-semibold py-4 px-10 rounded-lg text-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services - White Background Grid */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-proof mb-8 text-center">
            Related Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="bg-neutral-50 hover:bg-neutral-100 rounded-lg p-6 text-center transition-colors border border-neutral-200"
              >
                <h3 className="font-semibold text-neutral-900 text-lg">
                  {link.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WitnessPage;
