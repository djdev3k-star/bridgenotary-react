import React from 'react';
import SigningPageTemplate from './SigningPageTemplate';

const RefinanceSigningPage: React.FC = () => {
  const icon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
  );

  return (
    <SigningPageTemplate
      title="Refinance Signings"
      subtitle="Lock in Your New Rate with Confidence"
      intro="Refinancing your mortgage is a major financial decision. Our experienced signing agents ensure every document is executed correctly, protecting your funding timeline and getting you to your new loan terms quickly and securely."
      benefit="Refinance packages require careful attention to detail—missing signatures, incorrect dates, or incomplete acknowledgments can delay funding by days. We coordinate with your lender and title company to ensure all documents are properly signed and notarized the first time, so your refinance funds on schedule."
      idealFor="Homeowners refinancing to lower rates, adjust loan terms, consolidate debt, or access home equity."
      ctaText="Book a Refinance Signing"
      ctaLink="/book"
      icon={icon}
    />
  );
};

export default RefinanceSigningPage;
