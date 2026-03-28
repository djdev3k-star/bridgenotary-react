import React from 'react';
import { Link } from 'react-router-dom';

// Export component to be used as layout
export const ApostilleSidebar: React.FC = () => {
  return (
    <div className="w-full">
      <div className="bg-white shadow-md rounded overflow-hidden mb-6">
        <h3 className="bg-proof text-white font-semibold px-4 py-3">Apostille Resources</h3>
        <div className="divide-y">
          <Link 
            to="/apostille" 
            className="block px-4 py-3 hover:bg-neutral-50 transition-colors"
          >
            Overview
          </Link>
          <Link 
            to="/apostille/quiz" 
            className="block px-4 py-3 hover:bg-neutral-50 transition-colors"
          >
            Apostille Quiz
          </Link>
          <Link 
            to="/apostille" 
            className="block px-4 py-3 hover:bg-neutral-50 transition-colors"
          >
            Our Services
          </Link>
          <Link 
            to="/contact" 
            className="block px-4 py-3 hover:bg-neutral-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
      
      <div className="bg-electric-blue/10 rounded p-6">
        <h3 className="font-semibold text-electric-blue mb-3">Need Apostille Services?</h3>
        <p className="text-neutral-700 mb-4">
          We provide notarization and apostille coordination services for documents requiring international authentication.
        </p>
        <Link 
          to="/contact" 
          className="button-primary w-full text-center block"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ApostilleSidebar;
