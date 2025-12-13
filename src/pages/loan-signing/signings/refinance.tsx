import React from "react";
import LongFormSigningPage from "./LongFormSigningPage";

const relatedLinks = [
  { label: "Purchase Signings", path: "/loan-signing/purchase", description: "Protect funding and move-in dates." },
  { label: "HELOC & Home Equity", path: "/loan-signing/heloc", description: "Keep equity access on schedule." },
  { label: "Reverse Mortgages", path: "/loan-signing/reverse", description: "Senior-focused support with compliance." }
];

const RefinanceSigningPage: React.FC = () => {
  return (
    <LongFormSigningPage
      title="Refinance Signings"
      subtitle="Lock in Your New Rate with Confidence"
      heroSummary="Refinancing your mortgage is a major financial decision. Our experienced signing agents ensure every document is executed correctly, protecting your funding timeline and getting you to your new loan terms quickly and securely."
      heroBullets={[
        "Avoid funding delays from missing signatures or incorrect dates.",
        "Coordinate with lender and title for seamless execution.",
        "Texas-compliant notarization on every document."
      ]}
      sections={[
        {
          title: "Why refinance accuracy matters",
          paragraphs: [
            "Refinance packages require careful attention to detail—the Note, Deed of Trust, Closing Disclosure, rescission notices, and lender-specific forms all require proper signatures, dates, and notarization. Missing signatures, incorrect dates, or incomplete acknowledgments can delay funding by days.",
            "Rate locks have expiration dates, and delays mean potential loss of favorable terms. A trained signing agent prevents these common issues that trigger redraws and costly delays."
          ]
        },
        {
          title: "How we support refinance closings",
          paragraphs: [
            "Our agents arrive prepared with a quality checklist, verify document completeness, guide signers through the proper sequence, and align every signature with title and lender instructions. We flag inconsistencies in real time, preventing funding delays.",
            "We coordinate with your lender and title company to ensure all documents are properly signed and notarized the first time, so your refinance funds on schedule and you lock in your new terms."
          ]
        },
        {
          title: "Texas compliance requirements",
          paragraphs: [
            "Texas refinance transactions have specific compliance requirements including proper acknowledgments, spousal signatures on homestead properties, and accurate vesting. Our specialists ensure every document meets state and lender requirements."
          ]
        }
      ]}
      highlights={[
        { title: "Funding certainty", description: "Complete, accurate execution protects your rate lock." },
        { title: "Texas compliant", description: "Proper acknowledgments and homestead requirements." },
        { title: "Lender coordination", description: "Seamless communication with title and lender teams." },
        { title: "Same-day turnaround", description: "Documents scanned and returned promptly." }
      ]}
      ctaText="Book a Refinance Signing"
      ctaLink="/book"
      relatedLinks={relatedLinks}
      serviceId="refinance"
    />
  );
};

export default RefinanceSigningPage;
