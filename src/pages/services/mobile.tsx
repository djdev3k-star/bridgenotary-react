import { Link } from "react-router-dom";
import loanFlyerImg from "@/assets/images/loanFlyers.png";

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
  { text: "We come to your home, office, or preferred location" },
  { text: "Same-day and next-day appointments available" },
  { text: "Professional notary service at your convenience" },
  { text: "All document types handled with care and precision" },
];

const sections: Section[] = [
  {
    title: "Mobile Notary Services That Come to You",
    paragraphs: [
      "Skip the trip to a notary office. Our mobile notary services bring certified notarization directly to your doorstep—whether you're at home, at work, or anywhere in between.",
      "With Bridge Notary's mobile service, you get the same level of professionalism and attention to detail you'd expect from a traditional notary office, but with the added convenience of choosing when and where your documents are notarized.",
      "We understand that your schedule is demanding. That's why we offer flexible appointment times, including evenings and weekends, ensuring you never have to rearrange your day just to get a signature notarized.",
    ],
  },
  {
    title: "Why Choose Mobile Notary?",
    paragraphs: [
      "Mobile notary services are ideal for individuals and businesses who value time and convenience. Whether you're closing on a home, executing estate documents, or finalizing business contracts, having a notary come to you eliminates travel time and scheduling conflicts.",
      "Our mobile notaries are commissioned, insured, and background-checked, ensuring your documents are handled with the utmost care and confidentiality. We arrive prepared with all necessary equipment and supplies—you just provide the documents that need notarization.",
      "From real estate closings to legal affidavits, power of attorney forms to trust documents, our mobile notaries handle a wide range of notarization needs with professionalism and efficiency.",
    ],
  },
  {
    title: "Same-Day Service When You Need It",
    paragraphs: [
      "Time-sensitive documents require fast action. Our same-day mobile notary service ensures that urgent notarizations happen on your timeline, not ours.",
      "Simply contact us with your location and document type, and we'll dispatch a certified notary to meet you within hours. Whether it's an unexpected business deal or a last-minute legal requirement, we're ready to respond quickly.",
      "Our mobile notaries are strategically located throughout the DFW area, allowing us to reach you promptly regardless of your location—from downtown offices to suburban homes and everything in between.",
    ],
  },
  {
    title: "Trusted by Businesses & Individuals Alike",
    paragraphs: [
      "Businesses rely on our mobile notary services for contract signings, corporate documents, and employee verifications. We understand the importance of confidentiality and professionalism in a business setting.",
      "Individuals trust us for estate planning documents, real estate transactions, and personal legal matters. Our notaries take the time to ensure every signature is witnessed correctly and every document is completed accurately.",
      "With thousands of successful mobile notarizations under our belt, we've built a reputation for reliability, punctuality, and exceptional service. When you book with Bridge Notary, you're choosing a partner who understands the critical nature of your documents.",
    ],
  },
];

const highlights: Highlight[] = [
  {
    title: "✓ Travel to You",
    description: "No need to leave your home or office—we bring notary services to your location.",
  },
  {
    title: "✓ Flexible Scheduling",
    description: "Evening, weekend, and same-day appointments available to fit your schedule.",
  },
  {
    title: "✓ All Document Types",
    description: "From real estate to legal documents, we handle every notarization need.",
  },
  {
    title: "✓ Certified Notaries",
    description: "All mobile notaries are commissioned, insured, and background-checked.",
  },
  {
    title: "✓ Fast Response",
    description: "Same-day service available for urgent notarization requests.",
  },
];

const relatedLinks: RelatedLink[] = [
  { title: "Book a Mobile Notary", to: "/book" },
  { title: "Estate & Trust Services", to: "/services/estate-trust" },
  { title: "Power of Attorney", to: "/services/power-of-attorney" },
  { title: "All Notary Services", to: "/services" },
];

const MobileNotaryPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - overlay style for consistency */}
      <section className="relative overflow-hidden text-white min-h-[70vh] flex items-center">
        {/* Gradient base */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-proof via-electric-blue to-proof"></div>

        {/* Background image overlay */}
        <div className="absolute inset-0 z-0 opacity-55">
          <img
            src={loanFlyerImg}
            alt="Mobile notary services"
            className="w-full h-full object-cover brightness-105 saturate-110"
          />
        </div>
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-proof/60 via-electric-blue/45 to-proof/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-electric-blue/15"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto py-20 px-6 relative z-20 w-full">
          <div className="max-w-4xl text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-white/50"></span>
              <span className="text-xs uppercase tracking-[0.25em] text-white/90">Mobile Notary</span>
              <span className="h-px w-12 bg-white/50"></span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              On-Demand Mobile Notary Services
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed drop-shadow-sm max-w-2xl">
              Professional notarization at your home, office, hospital, or any location—fast, reliable, and on your schedule with certified, insured agents.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/book" className="bg-white text-proof hover:bg-neutral-100 transition-all rounded text-lg py-3 px-8 font-semibold shadow-lg hover:shadow-xl">
                Book Mobile Notary Now
              </Link>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-proof transition-all rounded text-lg py-3 px-8 font-semibold shadow-lg hover:shadow-xl">
                Talk to a Specialist
              </Link>
            </div>

            {/* Hero bullets glass card */}
            <div className="bg-white/10 border border-white/20 backdrop-blur rounded p-6 shadow-lg max-w-3xl">
              <ul className="grid md:grid-cols-2 gap-4 text-left">
                {heroBullets.map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-white mr-3 flex-shrink-0 mt-0.5"
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
                    <span className="text-white/95 text-lg leading-snug">{bullet.text}</span>
                  </li>
                ))}
              </ul>
            </div>
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

              {/* Flyer Image Section */}
              <div className="bg-white rounded shadow-sm p-8">
                <h2 className="text-3xl font-bold text-proof mb-6">
                  Our Service Areas
                </h2>
                <div className="mb-6">
                  <img
                    src={loanFlyerImg}
                    alt="Bridge Notary Mobile Service Areas"
                    className="w-full h-auto rounded shadow-md"
                  />
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  We serve the entire Dallas-Fort Worth metroplex and surrounding areas. No matter where you're located, we'll come to you with professional mobile notary services.
                </p>
              </div>
            </div>

            {/* Sidebar - Sticky Highlights */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded shadow-sm p-8">
                <h3 className="text-2xl font-bold text-proof mb-6">
                  Key Benefits
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
            Ready to Schedule Your Mobile Notary?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the convenience of professional notary services at your location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book"
              className="bg-white text-electric-blue hover:bg-neutral-100 font-semibold py-4 px-10 rounded text-lg transition-colors"
            >
              Book Your Appointment
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-electric-blue font-semibold py-4 px-10 rounded text-lg transition-colors"
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

export default MobileNotaryPage;
