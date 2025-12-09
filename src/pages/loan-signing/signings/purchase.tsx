import React from "react";
import LongFormSigningPage from "./LongFormSigningPage";

const relatedLinks = [
  { label: "Seller Signings", path: "/loan-signing/seller", description: "Protect funding timelines and recording." },
  { label: "HELOC & Home Equity", path: "/loan-signing/heloc", description: "Keep equity access on schedule." },
  { label: "Commercial Closings", path: "/loan-signing/commercial", description: "Complex deals with zero margin for error." }
];

const PurchaseSigningPage: React.FC = () => {
  return (
    <LongFormSigningPage
      title="Purchase (Buyer) Signings"
      subtitle="Protecting Your Closing Day"
      heroSummary="Buyer closings involve strict timelines, wire cutoffs, and coordination between lender, title, agents, and the buyer—one document error can delay funding and move-in dates."
      heroBullets={[
        "Prevent redraws from missed signatures or incorrect dates.",
        "Coordinate with lender, title, and agents to keep funding on track.",
        "Texas-compliant acknowledgments for borrowers and non-borrowing spouses."
      ]}
      sections={[
        {
          title: "Why precision matters",
          paragraphs: [
            "Purchase packages typically include the Note, Deed of Trust, Closing Disclosure, affidavits, and lender-specific forms that must be signed and sometimes notarized in a precise way. A trained signing agent helps prevent missed signatures, incorrect dates, or incomplete notarial certificates that could hold up keys and possession.",
            "For Texas transactions, acknowledgments must comply with state law and identification must be satisfactory for all signers, including any non-borrowing spouses who must sign certain documents for homestead properties."
          ]
        },
        {
          title: "How we support buyer closings",
          paragraphs: [
            "We quality-check documents at the table, guide signers through the sequence, and align with title and lender instructions to avoid funding delays.",
            "Working with a professional buyer-side signing service provides additional quality control for title and lender teams, while giving buyers confidence that the final step of their home purchase is handled correctly."
          ]
        }
      ]}
      highlights={[
        { title: "Funding-focused", description: "Keep wire and recording timelines intact by eliminating re-signs." },
        { title: "Texas compliance", description: "State-specific acknowledgments and homestead considerations." },
        { title: "Move-in ready", description: "Prevent closing day surprises with thorough table checks." }
      ]}
      ctaText="Schedule a Buyer Closing"
      ctaLink="/book"
      relatedLinks={relatedLinks}
    />
  );
};

export default PurchaseSigningPage;
