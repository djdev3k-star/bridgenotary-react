import React from 'react';
import ApostilleMenu from '@/features/apostille/components/ApostilleMenu';

// Export component to be used as layout
export const ApostilleSidebar: React.FC = () => {
  return (
    <div className="w-full">
      <ApostilleMenu />
      
      <div className="bg-electric-blue/10 rounded-lg p-6 mt-6">
        <h3 className="font-semibold text-electric-blue mb-3">Need Apostille Help?</h3>
        <p className="text-neutral-700 mb-4">
          Our experts can help with any document authentication needs, from simple apostilles to complex international document legalization.
        </p>
        <a 
          href="/contact" 
          className="button-primary w-full text-center block"
        >
          Get Expert Help
        </a>
      </div>
    </div>
  );
};

export default ApostilleSidebar;
