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
      subtitle="Streamline Your Mortgage Refinancing"
      intro="Refinancing your mortgage should be simple and stress-free. Our certified notary signing agents handle your refinance documents with precision and ensure each signature meets lender and state requirements."
      benefit="We coordinate directly with your lender or title company to ensure all pages are correctly executed and returned promptly. Whether you're reducing your rate or tapping into equity, we make the signing process seamless."
      idealFor="Homeowners lowering mortgage rates, adjusting loan terms, or consolidating debt."
      ctaText="Book a Refinance Signing"
      ctaLink="/book"
      icon={icon}
    />
  );
};

export default RefinanceSigningPage;
