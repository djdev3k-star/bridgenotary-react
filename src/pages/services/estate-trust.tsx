import NotaryServicePage from "@/features/notary-services/components/NotaryServicePage";

const sections = [
  {
    title: "Professional Estate Document Notarization",
    paragraphs: [
      "Estate planning documents—including wills, trusts, powers of attorney, and healthcare directives—often require notarization to be valid. At Bridge Notary, we provide professional notarization services for estate documents prepared by you or your attorney.",
      "Our notaries approach every appointment with discretion, professionalism, and respect. We understand that estate documents involve sensitive family matters and handle each signing with appropriate care.",
      "Important: We do not provide legal advice, prepare estate documents, or recommend specific documents for your situation. Estate planning involves complex legal considerations—we strongly recommend working with a licensed Texas attorney for document preparation and legal guidance.",
    ],
  },
  {
    title: "Estate Documents We Notarize",
    paragraphs: [
      "We notarize a wide range of estate planning documents, including revocable and irrevocable trusts, last wills and testaments, living wills, medical powers of attorney, and financial powers of attorney.",
      "Each document type has specific notarization requirements under Texas law. Our notaries are trained in proper procedures to ensure documents are notarized correctly.",
      "Note: While we can notarize your estate documents, we cannot advise you on whether a particular document is appropriate for your situation, explain the legal effect of document provisions, or make changes to documents. For these services, please consult an estate planning attorney.",
    ],
  },
  {
    title: "Mobile Notary for Hospitals & Care Facilities",
    paragraphs: [
      "When family members are in hospitals, nursing homes, or receiving hospice care, traveling to a notary office may not be possible. Our mobile notary services bring professional notarization directly to the bedside or care facility.",
      "We respond promptly to urgent requests and can coordinate with healthcare facilities for after-hours access when needed. Our notaries are experienced in working respectfully in healthcare settings.",
      "Please note: We cannot determine whether a signer is mentally competent to sign documents. If there are concerns about a signer's capacity, we recommend consulting with healthcare providers and legal counsel before scheduling a notarization.",
    ],
  },
  {
    title: "Working with Estate Planning Attorneys",
    paragraphs: [
      "We coordinate regularly with estate planning attorneys throughout DFW. If you're working with an attorney, we can notarize documents at their office or come to a location convenient for you and your family.",
      "For clients who do not have an attorney, we recommend consulting with a licensed Texas estate planning attorney before preparing estate documents. While we can notarize documents you prepare yourself, proper legal guidance helps ensure your documents accomplish your intended goals.",
      "The Texas State Bar offers lawyer referral services, and many estate planning attorneys offer initial consultations. Do not rely on a notary for legal advice about estate planning matters.",
    ],
  },
];

const highlights = [
  {
    title: "Wills & Trusts",
    description: "Professional notarization for wills, trusts, and related estate documents.",
  },
  {
    title: "Mobile Service",
    description: "We come to your home, hospital, care facility, or attorney's office.",
  },
  {
    title: "Confidential",
    description: "All documents handled with strict confidentiality and discretion.",
  },
  {
    title: "Texas Compliant",
    description: "Notarization performed according to Texas notary law requirements.",
  },
  {
    title: "Sensitive Approach",
    description: "Respectful handling of family matters during challenging times.",
  },
];

const EstateTrustPage = () => {
  return (
    <NotaryServicePage
      title="Estate & Trust Notarization"
      breadcrumbLabel="Estate & Trust"
      subtitle="Professional Document Notarization"
      heroSummary="Have your estate planning documents professionally notarized at your location. We notarize wills, trusts, healthcare directives, and powers of attorney prepared by you or your attorney. Note: We do not provide legal advice or prepare documents—please consult a licensed attorney for estate planning guidance."
      sections={sections}
      highlights={highlights}
      ctaText="Schedule Notarization"
      ctaLink="/book?service=estate-trust"
      showSidebar={false}
    />
  );
};

export default EstateTrustPage;
