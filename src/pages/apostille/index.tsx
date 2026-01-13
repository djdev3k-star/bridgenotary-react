import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ApostilleHero } from '@/features/apostille/components/ApostilleHero';
import ApostilleServices from './ApostilleServices';

const ApostillePage: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <React.Fragment>
      {/* Breadcrumb Links to Sub-Services */}
      <section className="bg-professional-blue/5 border-b border-professional-blue/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-charcoal/70 font-medium">Apostille Sub-Services:</span>
            <Link to="/overseas-property" className="text-professional-blue hover:text-professional-blue/80 hover:underline transition-colors font-medium">Overseas Property</Link>
            <span className="text-charcoal/30">•</span>
            <Link to="/dual-citizenship" className="text-professional-blue hover:text-professional-blue/80 hover:underline transition-colors font-medium">Dual Citizenship</Link>
            <span className="text-charcoal/30">•</span>
            <Link to="/study-abroad" className="text-professional-blue hover:text-professional-blue/80 hover:underline transition-colors font-medium">Study Abroad</Link>
            <span className="text-charcoal/30">•</span>
            <Link to="/international-adoption" className="text-professional-blue hover:text-professional-blue/80 hover:underline transition-colors font-medium">International Adoption</Link>
          </div>
        </div>
      </section>

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
