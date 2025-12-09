import React from "react";
import LongFormSigningPage from "./LongFormSigningPage";

const relatedLinks = [
  { label: "Purchase Signings", path: "/loan-signing/purchase", description: "Protect buyer funding and move-in dates." },
  { label: "Seller Signings", path: "/loan-signing/seller", description: "Prevent delays in funding." },
  { label: "HELOC & Home Equity", path: "/loan-signing/heloc", description: "Equity access with compliant execution." }
];

const CommercialClosingSigningPage: React.FC = () => {
  return (
    <LongFormSigningPage
      title="Commercial Closings"
      subtitle="High-Stakes Documents, Zero Margin for Error"
      heroSummary="Commercial real estate transactions often involve complex loan agreements, guaranties, entity resolutions, leases, and closing certificates, many of which require notarization."
      heroBullets={[
        "Handle corporations, LLCs, partnerships, and trusts with correct capacities.",
        "Accurate acknowledgments and execution sequencing for recording offices.",
        "Reduce post-closing corrections for lenders, counsel, and title."
      ]}
      sections={[
        {
          title: "Complex parties and documents",
          paragraphs: [
            "Multiple signers may represent corporations, LLCs, partnerships, or trusts, and the notary must correctly capture capacity and name information in the certificates.",
            "Any error in acknowledgment wording, signer identification, or execution sequence can cause issues for recording offices or lenders and may delay closing or funding."
          ]
        },
        {
          title: "Experienced commercial support",
          paragraphs: [
            "An experienced commercial closing signing agent is familiar with typical commercial document structures and works closely with counsel and title to follow specific instructions for signatures and notarial language.",
            "This attention to detail supports smoother closings, fewer post-closing corrections, and better documentation for institutional lenders and investors."
          ]
        }
      ]}
      highlights={[
        { title: "Entity-ready", description: "Capture capacities and resolutions correctly." },
        { title: "Recording-safe", description: "Precise certificates to satisfy county and lender review." },
        { title: "Coordination-focused", description: "Align with counsel and title to avoid rework." }
      ]}
      ctaText="Request a Commercial Closing"
      ctaLink="/book"
      relatedLinks={relatedLinks}
    />
  );
};

export default CommercialClosingSigningPage;
