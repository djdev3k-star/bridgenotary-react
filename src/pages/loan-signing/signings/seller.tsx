import React from "react";
import LongFormSigningPage from "./LongFormSigningPage";

const relatedLinks = [
  { label: "Purchase Signings", path: "/loan-signing/purchase", description: "Protect buyer funding and move-in dates." },
  { label: "Loan Modifications", path: "/loan-signing/modification", description: "Execute relief agreements correctly." },
  { label: "Commercial Closings", path: "/loan-signing/commercial", description: "Entity signers and complex docs handled right." }
];

const SellerSigningPage: React.FC = () => {
  return (
    <LongFormSigningPage
      title="Seller Signings"
      subtitle="Preventing Delays in Funding"
      heroSummary="Seller documents—deeds, affidavits, non-foreign status certifications, and title forms—must be notarized accurately before a sale can disburse funds."
      heroBullets={[
        "Get deeds and acknowledgments right the first time to avoid re-signs.",
        "Protect recording and funding timelines for title and escrow teams.",
        "Handle marital status, vesting, and homestead nuances for Texas deals."
      ]}
      sections={[
        {
          title: "Why seller accuracy matters",
          paragraphs: [
            "Errors in the seller’s deed or acknowledgment can delay recording, which in turn can delay funding schedules and closing out the file for title and escrow.",
            "A knowledgeable signing agent verifies that all required sellers are present, properly identified, and signing the correct forms as prepared by the title company."
          ]
        },
        {
          title: "Texas-specific care",
          paragraphs: [
            "In Texas, particular attention is paid to homestead issues, marital status, and vesting in the deed, so the notary must complete certificates that clearly identify the signers and comply with statutory requirements.",
            "Using a dedicated seller signing service reduces re-signs and post-closing corrections, protecting transaction timelines and helping sellers receive proceeds faster."
          ]
        }
      ]}
      highlights={[
        { title: "Recording-ready", description: "Accurate deeds and acknowledgments to keep funds moving." },
        { title: "ID certainty", description: "Confirm all required sellers and capacities before the table starts." },
        { title: "Texas compliance", description: "Homestead, vesting, and marital status handled correctly." }
      ]}
      ctaText="Book a Seller Signing"
      ctaLink="/book"
      relatedLinks={relatedLinks}
    />
  );
};

export default SellerSigningPage;
