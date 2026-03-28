import NotaryServicePage from "@/features/notary-services/components/NotaryServicePage";

const sections = [
  {
    title: "Professional Power of Attorney Notarization",
    paragraphs: [
      "A Power of Attorney (POA) is an important legal document that grants someone you trust the authority to act on your behalf. POA documents typically require notarization to be valid in Texas.",
      "At Bridge Notary, we provide professional notarization services for power of attorney documents prepared by you or your attorney. We follow Texas notary requirements to ensure signatures are properly witnessed and notarized.",
      "Note: Our notaries cannot provide legal advice, recommend which type of POA is right for your situation, or prepare POA documents. For legal guidance on powers of attorney, please consult a licensed Texas attorney.",
    ],
  },
  {
    title: "Types of Power of Attorney We Notarize",
    paragraphs: [
      "We notarize all types of power of attorney documents, including financial POAs, medical POAs (healthcare proxies), limited or special POAs, durable POAs, and springing POAs.",
      "Each type of POA has different legal implications and requirements. We recommend consulting with a licensed attorney to determine which documents are appropriate for your situation before scheduling a notarization appointment.",
      "Important: We cannot advise you on which type of POA to use, what powers to grant, or whether a document is suitable for your needs. These are legal questions that require an attorney.",
    ],
  },
  {
    title: "Mobile Notary for Power of Attorney Documents",
    paragraphs: [
      "Our mobile notary services bring professional notarization directly to you—at your home, office, hospital, or attorney's office—at a time that works for your schedule.",
      "This is especially convenient for elderly family members or individuals with mobility challenges who need POA documents notarized. We also coordinate with attorneys' offices for seamless document execution.",
      "Our notaries arrive prepared with all necessary equipment. We verify signer identities, confirm all parties appear willing and competent to sign, and complete the notarization according to Texas law.",
    ],
  },
  {
    title: "Why Proper POA Notarization Matters",
    paragraphs: [
      "Power of attorney documents must be executed correctly to be accepted by banks, healthcare providers, and other institutions. Improper notarization can lead to rejected documents and delays.",
      "Our notaries are trained in Texas notary law and POA notarization procedures. We ensure that required witnesses are present, signatures are affixed in the correct order, and notarial certificates are completed accurately.",
      "We coordinate with estate planning attorneys and other professionals to ensure smooth execution of POA documents. For any legal questions about your POA documents, please consult your attorney.",
    ],
  },
];

const highlights = [
  {
    title: "All POA Types",
    description: "We notarize financial, medical, limited, durable, and springing power of attorney documents.",
  },
  {
    title: "Mobile Service",
    description: "We come to your home, office, hospital, or attorney's location.",
  },
  {
    title: "Texas Compliant",
    description: "Notarization performed according to Texas notary law requirements.",
  },
  {
    title: "Trained Notaries",
    description: "Our notaries are trained in proper POA notarization procedures.",
  },
  {
    title: "Fast Turnaround",
    description: "Same-day service available for urgent notarization needs.",
  },
];

const PowerOfAttorneyPage = () => {
  return (
    <NotaryServicePage
      title="Power of Attorney Notarization"
      breadcrumbLabel="Power of Attorney"
      subtitle="Professional POA Notarization Services"
      heroSummary="Have your power of attorney documents professionally notarized at your location. We notarize POA documents prepared by you or your attorney, following Texas notary requirements. Note: We do not provide legal advice or prepare documents."
      sections={sections}
      highlights={highlights}
      ctaText="Book POA Notarization"
      ctaLink="/book?service=power-of-attorney"
      showSidebar={false}
    />
  );
};

export default PowerOfAttorneyPage;
