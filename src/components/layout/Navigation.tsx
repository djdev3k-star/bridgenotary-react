import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/Button';
import DropdownMenu from '@/components/ui/DropdownMenu';
import { NavigationMenuItems, NavigationProps } from './Navigation.types';

const Navigation: React.FC<NavigationProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const solutionsMenuItems: NavigationMenuItems[] = [
    {
      label: 'Remote Online Notarization',
      path: '/ron',
      description: 'Notarize documents remotely from anywhere'
    },
    {
      label: 'Apostille Services',
      path: '/apostille',
      description: 'Document authentication for international use'
    },
    {
      label: 'Loan Signing Services',
      path: '/loan-signing',
      description: 'Professional notary services for loan documents'
    }
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur z-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl tracking-tighter text-proof">Bridge Notary</Link>
        <nav className="hidden md:flex gap-8 items-center">
          <DropdownMenu
            trigger={
              <span className="text-neutral-700 hover:text-proof transition text-base font-medium flex items-center gap-1">
                Solutions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            }
            items={solutionsMenuItems}
          />
          <Link to="/pricing" className="text-neutral-700 hover:text-proof transition text-base font-medium">Pricing</Link>
          <Link to="/pro" className="text-neutral-700 hover:text-proof transition text-base font-medium">Bridge Notary Pro</Link>
          <Link to="/contact" className="text-neutral-700 hover:text-proof transition text-base font-medium">Contact</Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+14696298932" className="text-neutral-700 hover:text-proof transition text-base font-medium">
            (469) 629-8932
          </a>
          <Link to="/book">
            <Button variant="primary" className="pulse-button">
              Start a Signing
            </Button>
          </Link>
        </div>
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-neutral-700 hover:text-proof focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur">
          <nav className="px-6 pt-2 pb-4 flex flex-col gap-4">
            {solutionsMenuItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className="text-neutral-700 hover:text-proof transition text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/pricing" className="text-neutral-700 hover:text-proof transition text-base font-medium">Pricing</Link>
            <Link to="/pro" className="text-neutral-700 hover:text-proof transition text-base font-medium">Bridge Notary Pro</Link>
            <Link to="/contact" className="text-neutral-700 hover:text-proof transition text-base font-medium">Contact</Link>
            <a href="tel:+14696298932" className="text-neutral-700 hover:text-proof transition text-base font-medium">
              (469) 629-8932
            </a>
            <Link to="/book">
              <Button variant="primary" className="w-full pulse-button">
                Start a Signing
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
