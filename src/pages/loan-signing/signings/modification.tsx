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
      title="Loan Modifications & Relief Agreements"
      subtitle="Accuracy Ensures Relief Terms Take Effect"
      heroSummary="Loan modifications change loan terms—interest rates, amortization, or forbearance—and require notarized execution. If signatures are missing or certificates incomplete, the modification may not be effective, and relief terms won't take hold."
      heroBullets={[
        "Notarized signatures that meet servicer and investor review standards.",
        "Prevent ineffective modifications from incomplete notarization.",
        "Tight deadlines met with expert, compliant execution."
      ]}
      sections={[
        {
          title: "What is at stake",
          paragraphs: [
            "Loan modifications adjust interest rates, amortization, or introduce forbearance and require notarized execution. Servicers often require proof that the borrower was properly identified, consented to new terms, and signed in a notarized format.",
            "If signatures are missing, improperly notarized, or inconsistent with servicer requirements, the modification may not take effect—borrower relief plans stall, and deadlines pass."
          ]
        },
        {
          title: "Expert execution protects the relief",
          paragraphs: [
            "A professional modification signing specialist confirms borrower identity, reviews all signature and notarial requirements upfront, and completes Texas-compliant certificates in real time.",
            "Clean execution ensures borrowers secure agreed-upon relief and helps servicers document proper compliance, reducing rework and delays."
          ]
        },
        {
          title: "Meeting tight deadlines",
          paragraphs: [
            "Modification deadlines are often critical. Our experts prioritize timely, accurate execution so relief terms take effect on schedule and borrowers avoid financial disruption."
          ]
        }
      ]}
      highlights={[
        { title: "Deadline-aware", description: "Clean execution to meet servicer timelines without delay." },
        { title: "Certificate accuracy", description: "Texas-compliant acknowledgments that satisfy investor review." },
        { title: "Borrower clarity", description: "Neutral guidance through terms, signatures, and relief options." },
        { title: "Relief protection", description: "Ensure modification terms take effect as agreed." }
      ]}
      ctaText="Schedule a Loan Modification Signing"
      ctaLink="/book"
      relatedLinks={relatedLinks}
    />
  );
};

export default LoanModificationSigningPage;
