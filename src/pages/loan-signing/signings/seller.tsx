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
            "Seller deeds and acknowledgments must be notarized without error. Any mistake in the certificate delays recording, which holds up funding for title and escrow. Sellers rightfully want their proceeds on schedule.",
            "A trained signing agent verifies all required sellers are present, properly identified per lender and title requirements, and signing the exact forms prepared by the title company."
          ]
        },
        {
          title: "Texas homestead and vesting considerations",
          paragraphs: [
            "Texas law imposes strict requirements on homestead sales: marital status, vesting accuracy, and spousal signing obligations are non-negotiable. Notarial certificates must clearly identify signers and comply with state statute.",
            "A seller-side signing specialist ensures these nuances are handled correctly, preventing recording delays and post-closing corrections."
          ]
        },
        {
          title: "Streamlined seller proceeds",
          paragraphs: [
            "When deeds and acknowledgments are executed correctly the first time, funds disburse on schedule. Our focus is ensuring your closing is recording-ready so you receive your proceeds without delay."
          ]
        }
      ]}
      highlights={[
        { title: "Recording-ready", description: "Accurate deeds and acknowledgments eliminate re-signs and delays." },
        { title: "ID verification", description: "Confirm all required sellers and proper identification before signing." },
        { title: "Texas compliance", description: "Homestead, vesting, and marital status compliance built in." },
        { title: "Funds flow on time", description: "Get your sale proceeds without post-closing corrections." }
      ]}
      ctaText="Book a Seller Signing"
      ctaLink="/book?service=seller"
      relatedLinks={relatedLinks}
      serviceId="seller"
    />
  );
};

export default SellerSigningPage;
