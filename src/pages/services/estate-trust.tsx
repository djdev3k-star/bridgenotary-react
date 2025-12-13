import NotaryServicePage from "@/features/notary-services/components/NotaryServicePage";

const sections = [
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

const highlights = [
  {
    title: "Wills & Trusts",
    description: "Professional notarization for all types of wills and trust documents.",
  },
  {
    title: "Mobile Service",
    description: "We come to your home, hospital, or care facility for your convenience.",
  },
  {
    title: "Confidential",
    description: "All estate documents handled with strict confidentiality and discretion.",
  },
  {
    title: "Legal Compliance",
    description: "Every notarization meets Texas estate planning legal requirements.",
  },
  {
    title: "Compassionate Care",
    description: "Sensitive handling of family matters during challenging times.",
  },
];

const EstateTrustPage = () => {
  return (
    <NotaryServicePage
      title="Estate & Trust Notarization"
      subtitle="Professional, Compassionate Care"
      heroSummary="Protect your family's future with expert notarization of wills, trusts, healthcare directives, and powers of attorney. We handle sensitive estate documents with discretion and bring our services directly to your location."
      sections={sections}
      highlights={highlights}
      ctaText="Schedule Estate Notarization"
      ctaLink="/book?service=estate-trust"
    />
  );
};

export default EstateTrustPage;
