import { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur z-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl tracking-tighter text-proof font-logo">Bridge Notary</Link>
        <nav className="hidden md:flex gap-8 items-center">
          <Link to="/pricing" className="text-neutral-700 hover:text-proof transition text-base font-medium">Pricing</Link>
          <Link to="/faq" className="text-neutral-700 hover:text-proof transition text-base font-medium">FAQ</Link>
          <Link to="/ron" className="text-neutral-700 hover:text-proof transition text-base font-medium">Remote Notarization</Link>
          <Link to="/pro" className="text-neutral-700 hover:text-proof transition text-base font-medium">Bridge Notary Pro</Link>
          <Link to="/contact" className="text-neutral-700 hover:text-proof transition text-base font-medium">Contact</Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+14696298932" className="text-neutral-700 hover:text-proof transition text-base font-medium">
            (469) 629-8932
          </a>
          <Link to="/book">
            <Button variant="primary" className="">
              Start Signing
            </Button>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-neutral-700 hover:text-proof focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur">
          <nav className="px-6 pt-2 pb-4 flex flex-col gap-4">
            <Link to="/pricing" className="text-neutral-700 hover:text-proof transition text-base font-medium">Pricing</Link>
            <Link to="/faq" className="text-neutral-700 hover:text-proof transition text-base font-medium">FAQ</Link>
            <Link to="/ron" className="text-neutral-700 hover:text-proof transition text-base font-medium">Remote Notarization</Link>
            <Link to="/pro" className="text-neutral-700 hover:text-proof transition text-base font-medium">Bridge Notary Pro</Link>
            <Link to="/contact" className="text-neutral-700 hover:text-proof transition text-base font-medium">Contact</Link>
            <a href="tel:+17135550123" className="text-neutral-700 hover:text-proof transition text-base font-medium">
              (713) 555-0123
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

export default Navbar;
