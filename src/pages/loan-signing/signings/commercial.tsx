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
      subtitle="Complex Transactions Demand Expert Execution"
      heroSummary="Commercial real estate closings involve loans, guaranties, entity resolutions, leases, and certificates—many notarized. Signers may represent corporations, LLCs, partnerships, or trusts. One capacity error, one missing signature, or one misaligned acknowledgment can delay closing or create liability."
      heroBullets={[
        "Correctly capture entity signers, titles, and notarial capacities.",
        "Execute in proper sequence to meet recording office and lender standards.",
        "Prevent post-closing corrections and liability exposure."
      ]}
      sections={[
        {
          title: "Complex parties and documents",
          paragraphs: [
            "Commercial signers may represent corporations, LLCs, partnerships, or trusts. Each requires correct capacity identification in notarial certificates. A single error in acknowledgment wording, signer title, or entity name can delay recording or create liability.",
            "Commercial packages often include loans, guaranties, corporate resolutions, leases, assignment agreements, and closing certificates—some notarized, all interdependent."
          ]
        },
        {
          title: "Expert execution and coordination",
          paragraphs: [
            "Commercial closing signing agents are familiar with typical commercial document structures, entity signing protocols, and precise notarial language requirements. We work directly with counsel and title to follow exact instructions.",
            "This attention to detail prevents post-closing corrections, protects all parties, and ensures institutional lenders and investors receive clean documentation."
          ]
        },
        {
          title: "Liability protection through precision",
          paragraphs: [
            "One misaligned signature, one incorrect capacity, or one missing acknowledgment can expose the borrower, guarantor, or lender to liability. Professional commercial signing reduces these risks significantly."
          ]
        }
      ]}
      highlights={[
        { title: "Entity-ready", description: "Correct capacity identification and corporate resolution review." },
        { title: "Recording-safe", description: "Precise notarial certificates to satisfy county and lender requirements." },
        { title: "Coordination-expert", description: "Work seamlessly with counsel, title, and institutional lenders." },
        { title: "Liability protection", description: "Professional execution protects all parties and investors." }
      ]}
      ctaText="Request a Commercial Closing"
      ctaLink="/book?service=commercial"
      relatedLinks={relatedLinks}
      serviceId="commercial"
    />
  );
};

export default CommercialClosingSigningPage;
