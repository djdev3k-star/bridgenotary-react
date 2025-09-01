import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const KyronBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-proof to-blue-600 text-white py-3 px-6 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-2xl">🚚</div>
          <div>
            <span className="font-semibold">New: Secure Courier Services Available!</span>
            <span className="ml-2 text-blue-100">
              Professional document delivery with real-time tracking and insurance.
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Link 
            to="/courier-services" 
            className="bg-white text-proof px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Learn More
          </Link>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white text-xl leading-none"
            aria-label="Close banner"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default KyronBanner;