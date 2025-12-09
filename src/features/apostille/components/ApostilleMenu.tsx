import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkType {
  to: string;
  label: string;
}

const ApostilleMenu: React.FC = () => {
  const apostilleLinks: NavLinkType[] = [
    { to: '/apostille', label: 'Overview' },
    { to: '/apostille/quiz', label: 'Apostille Quiz' },
    { to: '/apostille', label: 'Our Services' },
    { to: '/contact', label: 'Contact Us' }
  ];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
      <h3 className="bg-proof text-white font-semibold px-4 py-3">Apostille Resources</h3>
      <div className="divide-y">
        {apostilleLinks.map((link) => (
          <Link 
            key={link.to}
            to={link.to}
            className="block px-4 py-3 hover:bg-neutral-50 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ApostilleMenu;
