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
      subtitle="Precision That Protects Your Funding"
      heroSummary="Equity and HELOC packages often span several documents with scattered signature points. Missing even one can slow funding or trigger a redraw. Texas adds another layer: homestead loans must follow specific constitutional rules, making precision essential."
      heroBullets={[
        "Complete, accurate packages avoid redraws",
        "Texas homestead requirements handled with confidence",
        "Smooth guidance through each document and obligation"
      ]}
      sections={[
        {
          title: "Why equity accuracy matters",
          paragraphs: [
            "Equity and HELOC packages often span several documents with scattered signature points. Missing even one can slow funding or trigger a redraw.",
            "Texas adds another layer: homestead loans must follow specific constitutional rules, making precision essential."
          ]
        },
        {
          title: "How we keep funding on track",
          paragraphs: [
            "We guide borrowers through the documents efficiently, making sure everything is signed correctly the first time.",
            "That means fewer corrections, cleaner files, and faster access to funds—whether for renovations, debt payoff, or anything else."
          ]
        }
      ]}
      highlights={[
        { title: "Funding certainty", description: "Complete, accurate packages avoid redraws." },
        { title: "Texas homestead aware", description: "State requirements handled with confidence." },
        { title: "Borrower clarity", description: "Smooth guidance through each document and obligation." }
      ]}
      ctaText="Book a HELOC Signing"
      ctaLink="/book"
      relatedLinks={relatedLinks}
    />
  );
};

export default HELOCSigningPage;
