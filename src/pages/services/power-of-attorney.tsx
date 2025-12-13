import NotaryServicePage from "@/features/notary-services/components/NotaryServicePage";

const sections = [
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

const highlights = [
  {
    title: "All POA Types",
    description: "Financial, medical, limited, durable, and springing power of attorney.",
  },
  {
    title: "Mobile Service",
    description: "We come to your home, office, hospital, or attorney's location.",
  },
  {
    title: "Legal Compliance",
    description: "Every notarization meets Texas legal requirements for POA execution.",
  },
  {
    title: "Experienced Notaries",
    description: "Our notaries specialize in estate planning and legal document notarization.",
  },
  {
    title: "Fast Turnaround",
    description: "Same-day service available for urgent POA notarization needs.",
  },
];

const PowerOfAttorneyPage = () => {
  return (
    <NotaryServicePage
      title="Power of Attorney Notarization"
      subtitle="Expert POA Document Services"
      heroSummary="Grant trusted individuals the authority to act on your behalf with properly notarized power of attorney documents. We handle financial, medical, and legal POA documents with precision and ensure your wishes are legally protected."
      sections={sections}
      highlights={highlights}
      ctaText="Book POA Notarization"
      ctaLink="/book?service=power-of-attorney"
    />
  );
};

export default PowerOfAttorneyPage;
