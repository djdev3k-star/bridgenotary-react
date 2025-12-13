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
            "Purchase packages include the Note, Deed of Trust, Closing Disclosure, affidavits, and lender-specific forms. Each requires correct signatures, dates, and notarization. A missed initial, wrong date, or incomplete acknowledgment can delay funding, keys, and possession—sometimes by days.",
            "For Texas transactions, acknowledgments must comply with state law. Non-borrowing spouses must sign certain documents on homestead properties, and identification must satisfy lender and title requirements. A trained signing agent prevents these common re-sign triggers."
          ]
        },
        {
          title: "How we support buyer closings",
          paragraphs: [
            "Our agents arrive prepared with a quality checklist, verify document completeness, guide signers through the proper sequence, and align every signature with title and lender instructions. We flag inconsistencies in real time, preventing funding delays.",
            "Professional buyer-side signing service adds quality control that protects title and lender teams while giving buyers peace of mind. The result: closing day confidence and timely keys."
          ]
        },
        {
          title: "Coordination with all parties",
          paragraphs: [
            "We communicate directly with lender, title, and real estate agents to confirm document packages, signing instructions, and delivery deadlines. This multi-party coordination is what keeps closings on track."
          ]
        }
      ]}
      highlights={[
        { title: "Funding-focused", description: "Eliminate re-signs and missed signatures that delay wires and recording." },
        { title: "Texas compliance", description: "State-specific acknowledgments, homestead rules, and spouse requirements." },
        { title: "Quality checklist", description: "Table review ensures completeness before leaving the signing table." },
        { title: "Party coordination", description: "Direct communication with lender, title, and agents for seamless timing." }
      ]}
      ctaText="Schedule a Buyer Closing"
      ctaLink="/book?service=purchase"
      relatedLinks={relatedLinks}
      serviceId="purchase"
    />
  );
};

export default PurchaseSigningPage;
