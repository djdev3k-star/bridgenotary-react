import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Button } from '@/components/ui/Button';
import DropdownMenu from '@/components/ui/DropdownMenu';
import { NavigationMenuItems, NavigationMenuGroup, NavigationProps } from './Navigation.types';

const Navigation: React.FC<NavigationProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const notarizeButtonClass = isLoginPage ? 'bg-[#10A981] hover:bg-[#0d8c6e]' : '';

  const solutionsMenuGroups: NavigationMenuGroup[] = [
    {
      title: 'Notary Services',
      items: [
        {
          label: 'Book a Notary Now',
          path: '/book',
          description: 'Schedule same-day or after-hours appointments.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          )
        },
        {
          label: 'Remote Online Notarization',
          path: '/ron',
          description: 'Secure video notarizations with ID verification.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )
        },
        {
          label: 'Mobile Notary',
          path: '/services/mobile',
          description: 'On-site notarization at your location.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 17h10m4 0h.01M5 17l1-4h11l1 4M6 13l2-7h8l2 7" />
            </svg>
          )
        },
        {
          label: 'View all services →',
          path: '/services',
          description: 'POA, witness services, affidavits, and more.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )
        }
      ]
    },
    {
      title: 'Apostille',
      items: [
        {
          label: 'Apostille Services',
          path: '/apostille',
          description: 'Authentication for international documents.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.657 0 3-.843 3-1.882C15 5.081 13.657 4 12 4s-3 1.081-3 2.118C9 7.157 10.343 8 12 8z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 20c0-2.21 2.686-4 6-4s6 1.79 6 4" />
            </svg>
          )
        },
        {
          label: 'Study Abroad',
          path: '/study-abroad',
          description: 'Diplomas, transcripts, and educational documents.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
            </svg>
          )
        },
        {
          label: 'Destination Wedding',
          path: '/destination-wedding',
          description: 'Marriage licenses, birth certificates, and legal documents.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z" />
            </svg>
          )
        },
      ]
    },
    {
      title: 'Loan Signing',
      items: [
        {
          label: 'Purchase Signing',
          path: '/loan-signing/purchase',
          description: 'Buyer closings with funding coordination.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3" />
            </svg>
          )
        },
        {
          label: 'Refinance Signing',
          path: '/loan-signing/refinance',
          description: 'Rate/term and cash-out refinance packages.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          label: 'Reverse Mortgage',
          path: '/loan-signing/reverse',
          description: 'Specialized HECM and senior borrower support.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          )
        },
        {
          label: 'View all signings →',
          path: '/loan-signing',
          description: 'Complete loan signing overview.',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )
        }
      ]
    }
  ];

  const mobileSolutionLinks: NavigationMenuItems[] = solutionsMenuGroups.flatMap((group) => group.items);

  return (
    <header className="sticky top-0 left-0 w-full bg-white shadow-sm z-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl tracking-tight text-deep-navy">Bridge Notary</Link>
        <nav className="hidden md:flex gap-8 items-center">
          <DropdownMenu
            trigger={
              <span className="text-charcoal hover:text-professional-blue transition text-base font-semibold flex items-center gap-1">
                  Solutions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            }
            groups={solutionsMenuGroups}
          />
          <Link to="/pricing" className="text-charcoal hover:text-professional-blue transition text-base font-medium">Pricing</Link>
          <Link to="/about" className="text-charcoal hover:text-professional-blue transition text-base font-medium">About</Link>
          <Link to="/contact" className="text-charcoal hover:text-professional-blue transition text-base font-medium">Contact</Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          {/* 24/7 Badge and CTA */}
          <span className="text-xs font-semibold text-professional-blue bg-professional-blue/10 px-3 py-1 rounded-full">
            Available 24/7
          </span>
          <Link to="/login" className="text-charcoal hover:text-professional-blue transition text-sm font-semibold">
            Log In
          </Link>
          <Link to="/book" className="button-primary">
            Book Now
          </Link>
        </div>
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-charcoal hover:text-professional-blue focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <nav className="px-6 pt-4 pb-4 flex flex-col gap-4">
            {mobileSolutionLinks.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className="text-charcoal hover:text-professional-blue transition text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-neutral-200 pt-4 mt-4 flex flex-col gap-4">
              <Link to="/pricing" className="text-charcoal hover:text-professional-blue transition text-base font-medium">Pricing</Link>
              <Link to="/about" className="text-charcoal hover:text-professional-blue transition text-base font-medium">About</Link>
              <Link to="/contact" className="text-charcoal hover:text-professional-blue transition text-base font-medium">Contact</Link>
              <Link to="/login" className="text-charcoal hover:text-professional-blue transition text-base font-semibold">
                Log In
              </Link>
              <Link to="/book" className="button-primary w-full text-center">
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
