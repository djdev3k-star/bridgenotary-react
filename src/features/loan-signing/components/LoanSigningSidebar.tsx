import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface ServiceLink {
  to: string;
  label: string;
}

interface LoanSigningSidebarProps {
  currentService?: string;
}

const LoanSigningSidebar: React.FC<LoanSigningSidebarProps> = () => {
  const location = useLocation();
  
  const loanSigningServices: ServiceLink[] = [
    { to: '/loan-signing/purchase', label: 'Purchase Signings' },
    { to: '/loan-signing/seller', label: 'Seller Signings' },
    { to: '/loan-signing/refinance', label: 'Refinance Signings' },
    { to: '/loan-signing/reverse', label: 'Reverse Mortgages' },
    { to: '/loan-signing/heloc', label: 'HELOC & Home Equity' },
    { to: '/loan-signing/commercial', label: 'Commercial Closings' },
    { to: '/loan-signing/modification', label: 'Loan Modifications' },
    { to: '/loan-signing/property-tax', label: 'Property Tax Loans' }
  ];

  return (
    <div className="w-full space-y-6">
      {/* Quick Navigation Card */}
      <div className="bg-white shadow-md rounded overflow-hidden">
        <h3 className="bg-proof text-white font-semibold px-4 py-3">Loan Signing Services</h3>
        <div className="divide-y">
          {loanSigningServices.map((service) => (
            <Link
              key={service.to}
              to={service.to}
              className={`block px-4 py-3 transition-colors ${
                location.pathname === service.to
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
          Expert Closing Service
        </h3>
        <p className="text-neutral-600 text-sm mb-4">NNA-certified agents, 99% on-time, Texas-compliant signings.</p>
        <Link
          to="/contact"
          className="inline-block button-primary w-full text-center text-sm py-2"
        >
          Schedule Your Signing
        </Link>
      </div>

      {/* Info Card */}
      <div className="bg-proof/5 rounded p-6 border border-proof/20">
        <h4 className="font-semibold text-proof mb-3 text-sm uppercase tracking-wide">Why Choose Bridge Notary?</h4>
        <ul className="space-y-2 text-sm text-neutral-700">
          <li className="flex items-start gap-2">
            <span className="text-electric-blue font-bold mt-0.5">✓</span>
            <span>Specialized loan signing expertise</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-electric-blue font-bold mt-0.5">✓</span>
            <span>Same-day and next-day appointments</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-electric-blue font-bold mt-0.5">✓</span>
            <span>Mobile, remote, and in-office options</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoanSigningSidebar;
