import React from "react";
import LongFormSigningPage from "./LongFormSigningPage";

const relatedLinks = [
  { label: "HELOC & Home Equity", path: "/loan-signing/heloc", description: "Equity access with compliant execution." },
  { label: "Reverse Mortgages", path: "/loan-signing/reverse", description: "Senior-focused support with compliance." },
  { label: "Property Tax Loans", path: "/loan-signing/property-tax", description: "Beat deadlines and stay compliant." }
];

const LoanModificationSigningPage: React.FC = () => {
  return (
    <LongFormSigningPage
      title="Loan Modifications"
      subtitle="Documentation That Protects Relief"
      heroSummary="Loan modification agreements adjust terms on an existing loan, often with tight deadlines and clear effective dates that depend on proper execution."
      heroBullets={[
        "Notarized signatures that stand up to lender and servicer review.",
        "Prevent ineffective mods caused by missing or incorrect certificates.",
        "Keep deadlines and effective dates on track with accurate execution."
      ]}
      sections={[
        {
          title: "What is at stake",
          paragraphs: [
            "Lenders typically require notarized signatures on certain agreements or affidavits to confirm the borrower’s identity, consent, and understanding of new terms.",
            "If signatures are missing, improperly notarized, or inconsistent with the original loan records, the modification may not take effect as planned."
          ]
        },
        {
          title: "How we protect the mod",
          paragraphs: [
            "A professional signing service specializing in loan modifications confirms identity, carefully reviews signature requirements, and completes notarial certificates in compliance with Texas law.",
            "This support helps borrowers secure agreed-upon relief and assists servicers in documenting that the modification was executed correctly and in good order." 
          ]
        }
      ]}
      highlights={[
        { title: "Deadline-aware", description: "Meet servicer timelines with clean execution." },
        { title: "Certificate correctness", description: "Texas-compliant acknowledgments every time." },
        { title: "Borrower clarity", description: "Neutral guidance through new terms and signatures." }
      ]}
      ctaText="Schedule a Loan Modification Signing"
      ctaLink="/book"
      relatedLinks={relatedLinks}
    />
  );
};

export default LoanModificationSigningPage;
