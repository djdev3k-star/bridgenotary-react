import React from "react";
import LongFormSigningPage from "./LongFormSigningPage";

const relatedLinks = [
  { label: "HELOC & Home Equity", path: "/loan-signing/heloc", description: "Equity access with compliant execution." },
  { label: "Loan Modifications", path: "/loan-signing/modification", description: "Document relief accurately and on time." },
  { label: "Purchase Signings", path: "/loan-signing/purchase", description: "Protect buyer funding and move-in dates." }
];

const ReverseMortgageSigningPage: React.FC = () => {
  return (
    <LongFormSigningPage
      title="Reverse Mortgage (Application & Closing)"
      subtitle="Specialized Support for Senior Borrowers"
      heroSummary="Reverse mortgage applications and closings involve unique disclosures, counseling confirmations, and security instruments designed for older homeowners."
      heroBullets={[
        "Patient, neutral guidance through large packages and sensitive forms.",
        "Precise execution of affidavits, occupancy certifications, and lender specifics.",
        "Compliance-minded to prevent funding delays or additional underwriting review."
      ]}
      sections={[
        {
          title: "Complex, senior-focused packages",
          paragraphs: [
            "Senior borrowers may feel overwhelmed by the size of the package and the technical language, so a patient, experienced signing agent is critical to support understanding while maintaining a neutral role.",
            "Reverse mortgage documents often include multiple affidavits, occupancy certifications, and specific lender forms that demand precise execution and notarization."
          ]
        },
        {
          title: "Compliance and care",
          paragraphs: [
            "Because these loans are heavily regulated and frequently reviewed, errors in notarial wording, missing signatures, or incorrect dates can trigger funding delays or additional underwriting review.",
            "A professional reverse mortgage signing service ensures that each document is correctly completed, explains the general purpose of key forms, and confirms that all required parties sign, helping lenders and title companies maintain a high standard for this sensitive product."
          ]
        }
      ]}
      highlights={[
        { title: "Patient guidance", description: "Calm walkthroughs for seniors while staying neutral." },
        { title: "HECM-ready", description: "Familiar with counseling confirmations and occupancy forms." },
        { title: "Audit-safe", description: "Clean certificates and dates to avoid rework." }
      ]}
      ctaText="Schedule a Reverse Mortgage Signing"
      ctaLink="/book"
      relatedLinks={relatedLinks}
    />
  );
};

export default ReverseMortgageSigningPage;
