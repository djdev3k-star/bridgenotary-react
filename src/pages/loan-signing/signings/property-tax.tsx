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
      subtitle="Deadline-Critical Relief with Compliant Execution"
      heroSummary="Property tax loans help Texas borrowers resolve delinquent taxes and avoid foreclosure. These transactions are deadline-driven and require notarized loan agreements, disclosures, and assignments that meet Texas notarial and lending standards."
      heroBullets={[
        "Compliant, notarized loan and disclosure execution under tight timelines.",
        "Texas notarial standards applied to every form and certificate.",
        "Mobile availability to meet borrowers facing foreclosure deadlines."
      ]}
      sections={[
        {
          title: "Deadline-driven relief for Texas borrowers",
          paragraphs: [
            "Property tax loans help Texas borrowers resolve delinquent taxes and prevent tax foreclosure. These transactions operate under strict timelines and require notarized loan agreements, disclosures, promissory notes, and assignments that comply with Texas lending and notarial law.",
            "Any error or delay in notarization, missing signatures, or incomplete certificates can hold up loan funding and leave tax obligations unresolved."
          ]
        },
        {
          title: "Expert, mobile execution to beat the clock",
          paragraphs: [
            "A dedicated property tax loan signing specialist understands the urgency behind these transactions and the unique requirements of Texas property tax loans. We prioritize accurate, timely notarization at locations convenient for the borrower—whether mobile, in-office, or remote.",
            "Clean, compliant execution ensures lenders fund on time, tax authorities receive payment, and borrowers avoid foreclosure."
          ]
        },
        {
          title: "Compliance that protects all parties",
          paragraphs: [
            "Property tax loans carry heightened regulatory scrutiny. Correct notarization, clear disclosures, and documented consent protect the borrower, lender, and tax loan servicer from regulatory challenges or future disputes."
          ]
        }
      ]}
      highlights={[
        { title: "Deadline-first", description: "Speed without sacrificing compliance or accuracy." },
        { title: "Texas compliant", description: "Loan, disclosure, and assignment notarization done right." },
        { title: "Mobile availability", description: "Meet borrowers at urgent timelines, wherever needed." },
        { title: "Foreclosure prevention", description: "Ensure funding arrives in time to prevent tax sale." }
      ]}
      ctaText="Book a Property Tax Loan Signing"
      ctaLink="/book?service=property-tax"
      relatedLinks={relatedLinks}
      serviceId="property-tax"
    />
   );
 };
 
 export default PropertyTaxLoanSigningPage;
