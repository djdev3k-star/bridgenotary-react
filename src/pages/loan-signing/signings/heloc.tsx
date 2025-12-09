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
      title="HELOC / Equity Loans"
      subtitle="Keeping Access to Funds on Schedule"
      heroSummary="Home equity lines of credit and fixed-term equity loans give borrowers access to property equity, but closing packages must be executed correctly to avoid delaying account activation or funding."
      heroBullets={[
        "Prevent redraws by capturing every signature, initial, and date.",
        "Handle credit agreements, security instruments, riders, and disclosures cleanly.",
        "Texas homestead-aware for equity loans and lines on primary residences."
      ]}
      sections={[
        {
          title: "Why equity accuracy matters",
          paragraphs: [
            "HELOC documents may include a credit agreement, security instrument, rider pages, and various disclosures that can require initials and signatures on many separate sections.",
            "In Texas, certain home equity loans and lines on homestead property must comply with constitutional rules and location restrictions similar to other homestead-secured loans."
          ]
        },
        {
          title: "How we keep funding on track",
          paragraphs: [
            "A qualified signing agent helps borrowers navigate the package efficiently, ensuring that every required signature, initial, and date appears where needed before the documents return to the lender.",
            "This reduces the risk of redraws or post-closing corrections, helping borrowers gain access to funds for renovations, debt consolidation, or other purposes without unnecessary delays."
          ]
        }
      ]}
      highlights={[
        { title: "Funding certainty", description: "Stop redraws by completing every field correctly." },
        { title: "Texas homestead aware", description: "Equity loans handled with state-specific rules in mind." },
        { title: "Borrower clarity", description: "Guide through riders, draws, and obligations efficiently." }
      ]}
      ctaText="Book a HELOC Signing"
      ctaLink="/book"
      relatedLinks={relatedLinks}
    />
  );
};

export default HELOCSigningPage;
