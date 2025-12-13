import React from "react";
import LongFormSigningPage from "./LongFormSigningPage";

const relatedLinks = [
  { label: "Purchase Signings", path: "/loan-signing/purchase", description: "Protect funding and move-in dates." },
  { label: "Loan Modifications", path: "/loan-signing/modification", description: "Execute relief agreements correctly." },
  { label: "Reverse Mortgages", path: "/loan-signing/reverse", description: "Senior-focused support with compliance." }
];

const HELOCSigningPage: React.FC = () => {
  return (
    <LongFormSigningPage
      title="HELOC & Home Equity Loans"
      subtitle="Accurate Execution Protects Your Funding Timeline"
      heroSummary="Equity and HELOC packages span multiple documents with scattered signature requirements. Missing even one signature or notarial certificate can trigger redraws or funding delays. In Texas, homestead transactions add constitutional compliance requirements—precision is non-negotiable."
      heroBullets={[
        "Complete, accurate execution avoids costly redraws.",
        "Texas homestead compliance built into every package.",
        "Careful coordination keeps funding on schedule."
      ]}
      sections={[
        {
          title: "Why equity accuracy matters",
          paragraphs: [
            "Equity and HELOC packages span multiple documents with scattered signature requirements—promissory notes, security agreements, disclosures, and compliance forms. Missing a single signature or notarial certificate triggers redraws or delays funding.",
            "In Texas, homestead transactions add constitutional compliance requirements: proper spousal consent, correct vesting, and accurate acknowledgments are non-negotiable."
          ]
        },
        {
          title: "Precision keeps funding on schedule",
          paragraphs: [
            "Our agents arrive with a complete package checklist, verify signatures are in the right places, ensure correct dates and notarial certificates, and guide borrowers through documents clearly.",
            "Correct execution the first time means clean files, faster lender processing, and borrowers access funds without unexpected delays or re-signs."
          ]
        },
        {
          title: "Texas homestead and spousal requirements",
          paragraphs: [
            "Texas constitutional property rights require careful attention to spousal signature lines, vesting accuracy, and proper acknowledgments on homestead liens. Our specialists ensure compliance to prevent post-closing corrections."
          ]
        }
      ]}
      highlights={[
        { title: "Funding certainty", description: "Complete, accurate execution eliminates expensive redraws." },
        { title: "Texas homestead compliant", description: "Spousal consent, vesting, and acknowledgments done right." },
        { title: "Borrower clarity", description: "Smooth guidance through each document and obligation." },
        { title: "Speed and accuracy", description: "Fast processing and faster fund access with clean files." }
      ]}
      ctaText="Book a HELOC Signing"
      ctaLink="/book"
      relatedLinks={relatedLinks}
    />
  );
};

export default HELOCSigningPage;
