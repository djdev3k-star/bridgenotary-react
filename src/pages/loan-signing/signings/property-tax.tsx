import React from "react";
import LongFormSigningPage from "./LongFormSigningPage";

const relatedLinks = [
  { label: "Loan Modifications", path: "/loan-signing/modification", description: "Execute relief agreements correctly." },
  { label: "Purchase Signings", path: "/loan-signing/purchase", description: "Protect buyer funding and move-in dates." },
  { label: "Seller Signings", path: "/loan-signing/seller", description: "Prevent delays in funding." }
];

const PropertyTaxLoanSigningPage: React.FC = () => {
  return (
    <LongFormSigningPage
      title="Texas Property Tax Loans"
      subtitle="Beating Deadlines and Maintaining Compliance"
      heroSummary="Texas property tax loans help borrowers handle delinquent taxes and avoid escalating penalties or foreclosure, so timing and documentation are critical."
      heroBullets={[
        "Compliant notarization for loan agreements, disclosures, and assignments.",
        "Texas notarial standards applied to keep funding on schedule.",
        "Mobile options to meet borrowers where they are under deadline."
      ]}
      sections={[
        {
          title: "Deadline-driven transactions",
          paragraphs: [
            "These transactions often require notarized loan agreements, disclosures, and assignments that must comply with both state lending laws and Texas notarial standards.",
            "Mistakes in notarization or missing signatures can delay loan funding and leave tax obligations unresolved longer than necessary."
          ]
        },
        {
          title: "How we keep them moving",
          paragraphs: [
            "A dedicated Texas property tax loan signing service understands the urgency behind these transactions and prioritizes accurate, timely notarization at locations that work for the borrower.",
            "By ensuring that documents are executed correctly the first time, the signing agent supports lenders, tax loan companies, and borrowers in meeting deadlines and staying compliant with applicable requirements."
          ]
        }
      ]}
      highlights={[
        { title: "Deadline-first", description: "Prioritize speed without sacrificing compliance." },
        { title: "Texas compliant", description: "Loan agreements and assignments notarized correctly." },
        { title: "Borrower-friendly", description: "Mobile options to meet urgent timelines." }
      ]}
      ctaText="Book a Property Tax Loan Signing"
      ctaLink="/book"
      relatedLinks={relatedLinks}
    />
   );
 };
 
 export default PropertyTaxLoanSigningPage;
