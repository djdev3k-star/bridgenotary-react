import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface ServiceLink {
  to: string;
  label: string;
}

const LoanSigningBreadcrumb: React.FC = () => {
  const location = useLocation();
  
  const loanSigningServices: ServiceLink[] = [
    { to: '/loan-signing/purchase', label: 'Purchase' },
    { to: '/loan-signing/seller', label: 'Seller' },
    { to: '/loan-signing/refinance', label: 'Refinance' },
    { to: '/loan-signing/reverse', label: 'Reverse' },
    { to: '/loan-signing/heloc', label: 'HELOC' },
    { to: '/loan-signing/commercial', label: 'Commercial' },
    { to: '/loan-signing/modification', label: 'Modification' },
    { to: '/loan-signing/property-tax', label: 'Property Tax' }
  ];

  return (
    <div className="w-full bg-white border-b border-professional-blue/10 sticky top-16 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          <span className="text-sm font-semibold text-charcoal whitespace-nowrap">Services:</span>
          <div className="flex gap-3 overflow-x-auto">
            {loanSigningServices.map((service, index) => (
              <React.Fragment key={service.to}>
                <Link
                  to={service.to}
                  className={`whitespace-nowrap text-sm font-medium px-3 py-1 transition-colors ${
                    location.pathname === service.to
                      ? 'text-professional-blue border-b-2 border-professional-blue'
                      : 'text-charcoal/70 hover:text-professional-blue'
                  }`}
                >
                  {service.label}
                </Link>
                {index < loanSigningServices.length - 1 && (
                  <span className="text-charcoal/30">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanSigningBreadcrumb;
