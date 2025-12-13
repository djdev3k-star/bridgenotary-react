import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceLink {
  to: string;
  label: string;
}

interface NotaryServicesSidebarProps {
  currentService?: string;
}

const NotaryServicesSidebar: React.FC<NotaryServicesSidebarProps> = ({ currentService }) => {
  const notaryServices: ServiceLink[] = [
    { to: '/book', label: 'Book a Notary Now' },
    { to: '/ron', label: 'Remote Online Notarization' },
    { to: '/services/mobile', label: 'Mobile Notary' },
    { to: '/services/estate-trust', label: 'Estate & Trust Documents' },
    { to: '/services/power-of-attorney', label: 'Power of Attorney' },
    { to: '/services/witness', label: 'Witness Services' },
    { to: '/services', label: 'All Services' }
  ];

  return (
    <div className="w-full space-y-6">
      {/* Quick Navigation Card */}
      <div className="bg-white shadow-md rounded overflow-hidden">
        <h3 className="bg-proof text-white font-semibold px-4 py-3">Notary Services</h3>
        <div className="divide-y">
          {notaryServices.map((service) => (
            <Link
              key={service.to}
              to={service.to}
              className={`block px-4 py-3 transition-colors ${
                currentService === service.label
                  ? 'bg-electric-blue/10 text-proof font-semibold border-l-4 border-electric-blue'
                  : 'hover:bg-neutral-50 text-neutral-700'
              }`}
            >
              {service.label}
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Card */}
      <div className="bg-gradient-to-br from-electric-blue/5 to-proof/5 rounded p-6 border border-electric-blue/20">
        <h3 className="font-semibold text-proof mb-2 flex items-center gap-2">
          <svg className="w-5 h-5 text-electric-blue" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
          Professional Notarization
        </h3>
        <p className="text-neutral-600 text-sm mb-4">Expert notary services with flexibility and discretion.</p>
        <Link
          to="/book"
          className="inline-block button-primary w-full text-center text-sm py-2"
        >
          Schedule an Appointment
        </Link>
      </div>

      {/* Info Card */}
      <div className="bg-proof/5 rounded p-6 border border-proof/20">
        <h4 className="font-semibold text-proof mb-3 text-sm uppercase tracking-wide">Why Bridge Notary?</h4>
        <ul className="space-y-2 text-sm text-neutral-700">
          <li className="flex items-start gap-2">
            <span className="text-electric-blue font-bold mt-0.5">✓</span>
            <span>Texas-certified notary professionals</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-electric-blue font-bold mt-0.5">✓</span>
            <span>Same-day mobile and in-office availability</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-electric-blue font-bold mt-0.5">✓</span>
            <span>Discreet, professional, and reliable</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NotaryServicesSidebar;
