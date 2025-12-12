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
  { text: "Financial, healthcare, and general power of attorney" },
  { text: "Mobile notary service to your preferred location" },
  { text: "Experienced with all POA document types" },
  { text: "Same-day appointments for urgent situations" },
];

const sections: Section[] = [
  {
    title: "Professional Power of Attorney Notarization",
    paragraphs: [
      "A Power of Attorney (POA) is one of the most important legal documents you can have. It grants someone you trust the authority to make decisions on your behalf—whether those decisions involve finances, healthcare, property, or other critical matters.",
      "At Bridge Notary, we provide expert notarization services for all types of power of attorney documents. Our notaries understand the legal requirements for POA execution in Texas and ensure that every signature is properly witnessed, notarized, and legally valid.",
      "Whether you're creating a durable power of attorney for financial matters, a medical power of attorney for healthcare decisions, or a limited power of attorney for specific transactions, we're here to help you complete the process correctly and efficiently.",
    ],
  },
  {
    title: "Types of Power of Attorney We Handle",
    paragraphs: [
      "Financial Power of Attorney grants your agent the authority to manage your financial affairs—paying bills, managing investments, handling real estate transactions, and more. This is essential for estate planning and ensuring your finances are managed if you become incapacitated.",
      "Medical Power of Attorney (also called Healthcare Proxy) allows your designated agent to make healthcare decisions on your behalf if you're unable to do so. This document is crucial for ensuring your medical wishes are respected.",
      "Limited or Special Power of Attorney grants authority for specific tasks or time periods—such as selling a property, signing documents while you're traveling, or handling a particular business transaction. These POAs expire once the task is completed or the time period ends.",
      "Durable Power of Attorney remains in effect even if you become mentally incapacitated, making it a cornerstone of comprehensive estate planning. Non-durable POAs expire if you become incapacitated.",
    ],
  },
  {
    title: "Mobile Notary for Power of Attorney Documents",
    paragraphs: [
      "Creating or updating a power of attorney often happens during times of transition—planning for surgery, preparing for travel, or addressing aging parent concerns. Our mobile notary services bring professional notarization directly to you, eliminating the stress of traveling to an office.",
      "We come to your home, office, hospital, or attorney's office at a time that works for your schedule. This is especially valuable when dealing with elderly family members or individuals with mobility challenges who need POA documents notarized.",
      "Our notaries arrive prepared with all necessary equipment and documentation. We take the time to verify identities, ensure all parties understand the documents they're signing, and complete the notarization with full legal compliance.",
    ],
  },
  {
    title: "Why Proper POA Notarization Matters",
    paragraphs: [
      "Power of attorney documents must be executed correctly to be legally valid. Improper notarization can lead to rejected documents, legal challenges, and situations where your agent's authority is questioned at critical moments.",
      "Our notaries are experienced in handling POA documents and understand the specific requirements under Texas law. We ensure that all witnesses (when required) are present, that signatures are affixed in the correct order, and that the notarial certificate is completed accurately.",
      "We work closely with estate planning attorneys, financial advisors, and healthcare providers to ensure seamless execution of POA documents. Whether you're working with a professional or handling documents independently, we provide the notarization expertise you need.",
    ],
  },
];

const highlights: Highlight[] = [
  {
    title: "✓ All POA Types",
    description: "Financial, medical, limited, durable, and springing power of attorney.",
  },
  {
    title: "✓ Mobile Service",
    description: "We come to your home, office, hospital, or attorney's location.",
  },
  {
    title: "✓ Legal Compliance",
    description: "Every notarization meets Texas legal requirements for POA execution.",
  },
  {
    title: "✓ Experienced Notaries",
    description: "Our notaries specialize in estate planning and legal document notarization.",
  },
  {
    title: "✓ Fast Turnaround",
    description: "Same-day service available for urgent POA notarization needs.",
  },
];

const relatedLinks: RelatedLink[] = [
  { title: "Estate & Trust Services", to: "/services/estate-trust" },
  { title: "Mobile Notary Services", to: "/services/mobile" },
  { title: "Witness Services", to: "/services/witness" },
  { title: "All Notary Services", to: "/services" },
];

const PowerOfAttorneyPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - White background, no gradient */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-proof mb-6">
            Power of Attorney Notarization
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            Expert notarization for financial, medical, and legal power of attorney documents—ensuring your wishes are legally protected.
          </p>

          {/* Hero bullets in card-style list on neutral background */}
          <div className="bg-neutral-50 rounded p-8 mt-8">
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
              Book POA Notarization
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
                  className={index % 2 === 0 ? "bg-white rounded shadow-sm p-8" : ""}
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
              <div className="sticky top-24 bg-white rounded shadow-sm p-8">
                <h3 className="text-2xl font-bold text-proof mb-6">
                  What We Offer
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
            Ready to Notarize Your Power of Attorney?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Protect your interests and ensure your wishes are legally documented. Schedule your POA notarization today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book"
              className="bg-white text-electric-blue hover:bg-neutral-100 font-semibold py-4 px-10 rounded text-lg transition-colors"
            >
              Book Appointment
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-electric-blue font-semibold py-4 px-10 rounded text-lg transition-colors"
            >
              Have Questions?
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
                className="bg-neutral-50 hover:bg-neutral-100 rounded p-6 text-center transition-colors border border-neutral-200"
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

export default PowerOfAttorneyPage;
