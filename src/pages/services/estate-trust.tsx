import { Link } from "react-router-dom";
import genNotaryFlyerImg from "@/assets/images/genNotaryFlyers.png";
import genNotaryStripImg from "@/assets/images/genNotarystripFlyers- Bridge Notary .png";

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
  { text: "Expert notarization for wills, trusts, and estate documents" },
  { text: "Mobile service to homes, hospitals, or care facilities" },
  { text: "Sensitive handling of confidential family matters" },
  { text: "Flexible scheduling including evenings and weekends" },
];

const sections: Section[] = [
  {
    title: "Trusted Estate & Trust Notarization Services",
    paragraphs: [
      "Estate planning is one of the most important steps you can take to protect your family's future. At Bridge Notary, we specialize in providing professional notarization services for wills, trusts, powers of attorney, healthcare directives, and other critical estate documents.",
      "Our notaries understand the sensitive nature of estate planning and approach every appointment with discretion, professionalism, and respect. Whether you're working with an attorney or handling documents independently, we ensure that every signature is properly witnessed and notarized according to Texas law.",
      "We offer mobile notary services, meaning we come to you—whether that's your home, your attorney's office, a hospital, or a care facility. This convenience is especially valuable when dealing with elderly family members or individuals with mobility challenges.",
    ],
  },
  {
    title: "Comprehensive Estate Document Support",
    paragraphs: [
      "Estate and trust documents require precision and legal compliance. Our notaries are experienced in handling a wide range of estate planning instruments, including revocable and irrevocable trusts, last wills and testaments, living wills, and medical powers of attorney.",
      "We work closely with estate planning attorneys, financial advisors, and family members to ensure that all notarization requirements are met. Our goal is to provide a seamless, stress-free experience during what can often be an emotionally challenging time.",
      "Each notarization is performed with meticulous attention to detail, ensuring that all parties understand the documents they're signing and that every legal requirement is satisfied. We maintain strict confidentiality and handle all documents with the highest level of care.",
    ],
  },
  {
    title: "Mobile Notary for Senior Care & Hospice",
    paragraphs: [
      "When family members are in hospitals, nursing homes, or receiving hospice care, traveling to a notary office may not be feasible. Our mobile notary services bring professional notarization directly to the bedside.",
      "We've worked with countless families during difficult times, providing compassionate and efficient notary services for estate documents, healthcare directives, and final wishes. Our notaries are trained to work respectfully in healthcare settings and can accommodate special circumstances.",
      "Whether it's an urgent situation or a planned estate planning session, we respond promptly and handle every appointment with sensitivity and professionalism. We understand that timing can be critical, and we make ourselves available to meet your family's needs.",
    ],
  },
  {
    title: "Why Choose Bridge Notary for Estate Planning?",
    paragraphs: [
      "Estate planning requires a notary who not only understands the legal requirements but also appreciates the personal significance of these documents. Our notaries bring both expertise and empathy to every appointment.",
      "We've earned the trust of estate planning attorneys, financial planners, and families throughout the DFW area. Our reputation is built on reliability, professionalism, and a genuine commitment to serving our community during life's most important moments.",
      "From initial estate planning documents to amendments and updates, we're here to provide notarization services whenever you need them. With flexible scheduling, mobile service, and a deep understanding of estate law requirements, Bridge Notary is your trusted partner in protecting your family's legacy.",
    ],
  },
];

const highlights: Highlight[] = [
  {
    title: "✓ Wills & Trusts",
    description: "Professional notarization for all types of wills and trust documents.",
  },
  {
    title: "✓ Mobile Service",
    description: "We come to your home, hospital, or care facility for your convenience.",
  },
  {
    title: "✓ Confidential",
    description: "All estate documents handled with strict confidentiality and discretion.",
  },
  {
    title: "✓ Legal Compliance",
    description: "Every notarization meets Texas estate planning legal requirements.",
  },
  {
    title: "✓ Compassionate Care",
    description: "Sensitive handling of family matters during challenging times.",
  },
];

const relatedLinks: RelatedLink[] = [
  { title: "Mobile Notary Services", to: "/services/mobile" },
  { title: "Power of Attorney", to: "/services/power-of-attorney" },
  { title: "Witness Services", to: "/services/witness" },
  { title: "All Notary Services", to: "/services" },
];

const EstateTrustPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - White background, no gradient */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-proof mb-6">
            Estate & Trust Notarization
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            Professional, compassionate notary services for wills, trusts, and estate planning documents—handled with care and confidentiality.
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
              Schedule Estate Notarization
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

              {/* Flyer Images Section */}
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-3xl font-bold text-proof mb-6">
                  Trusted by DFW Families & Attorneys
                </h2>
                <div className="space-y-6 mb-6">
                  <img
                    src={genNotaryFlyerImg}
                    alt="Bridge Notary Estate Services"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <img
                    src={genNotaryStripImg}
                    alt="Bridge Notary Professional Services"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Our estate notarization services are trusted by families, attorneys, and financial planners throughout the Dallas-Fort Worth area. We bring professionalism and compassion to every appointment.
                </p>
              </div>
            </div>

            {/* Sidebar - Sticky Highlights */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-2xl font-bold text-proof mb-6">
                  Key Features
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
                    Book Now
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
            Protect Your Family's Future with Professional Estate Notarization
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule your estate document notarization today. We handle every appointment with professionalism, confidentiality, and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book"
              className="bg-white text-electric-blue hover:bg-neutral-100 font-semibold py-4 px-10 rounded-lg text-lg transition-colors"
            >
              Schedule Appointment
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-electric-blue font-semibold py-4 px-10 rounded-lg text-lg transition-colors"
            >
              Ask a Question
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

export default EstateTrustPage;
