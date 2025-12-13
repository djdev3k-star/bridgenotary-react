import React from "react";
import LongFormSigningPage from "./LongFormSigningPage";

const relatedLinks = [
  { label: "HELOC & Home Equity", path: "/loan-signing/heloc", description: "Equity access with compliant execution." },
  { label: "Loan Modifications", path: "/loan-signing/modification", description: "Document relief accurately and on time." },
  { label: "Purchase Signings", path: "/loan-signing/purchase", description: "Protect buyer funding and move-in dates." }
];

const ReverseMortgageSigningPage: React.FC = () => {
  return (
    <LongFormSigningPage
      title="Reverse Mortgages (HECM & Application)"
      subtitle="Patient Expertise for Senior Borrowers"
      heroSummary="Reverse mortgages serve an important role for retirement-age homeowners. Application and closing packages are large, detailed, and require patient explanation alongside accurate, notary-verified execution."
      heroBullets={[
        "Experienced guidance through large, complex packages with clear explanations.",
        "Accurate notarization of affidavits, occupancy certifications, and lender requirements.",
        "Compliance focus to prevent underwriting delays or funding holds."
      ]}
      sections={[
        {
          title: "Complex, senior-focused packages",
          paragraphs: [
            "Reverse mortgage applications and closings are large and technically dense. Senior borrowers deserve patient, clear explanation of each step while the signing agent maintains a neutral, professional role.",
            "These packages include counseling confirmations, occupancy affidavits, HECM disclosures, note and deed forms, and lender-specific documents—all requiring precise execution and accurate notarization."
          ]
        },
        {
          title: "Compliance and accuracy under review",
          paragraphs: [
            "Reverse mortgages are heavily regulated and frequently audited. Notarial certificate errors, missing signatures, incorrect dates, or incomplete acknowledgments can trigger funding delays or additional underwriting scrutiny.",
            "Our reverse mortgage specialists ensure every document is correctly completed, guide borrowers through key concepts without providing advice, and confirm proper execution for lender and investor confidence."
          ]
        },
        {
          title: "Supporting the retirement milestone",
          paragraphs: [
            "Reverse mortgages help seniors access home equity and achieve financial security in retirement. Our role is ensuring this important transaction progresses smoothly, with confidence and accurate documentation."
          ]
        }
      ]}
      highlights={[
        { title: "Patient guidance", description: "Clear explanations and calm support through complex packages." },
        { title: "HECM expertise", description: "Familiar with counseling confirmations, occupancy forms, and HECM rules." },
        { title: "Audit-safe execution", description: "Clean certificates and precise dates to avoid funding delays." },
        { title: "Respectful professionalism", description: "Neutral role supporting senior borrowers with dignity." }
      ]}
      ctaText="Schedule a Reverse Mortgage Signing"
      ctaLink="/book?service=reverse"
      relatedLinks={relatedLinks}
      serviceId="reverse"
    />
  );
};

export default ReverseMortgageSigningPage;
