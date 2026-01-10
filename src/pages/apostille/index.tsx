import React, { useState } from 'react';
import { ApostilleHero } from '@/features/apostille/components/ApostilleHero';
import ApostilleServices from './ApostilleServices';

const ApostillePage: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <React.Fragment>
      <ApostilleHero onContactClick={() => setShowContactForm(true)} />
      <ApostilleServices />

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white max-w-xl w-full p-6">
            <h3 className="text-2xl font-semibold mb-4">Start Your Apostille Process</h3>
            {/* Add your contact form here */}
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700"
              aria-label="Close contact form"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ApostillePage;
