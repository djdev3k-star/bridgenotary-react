import React from 'react';
import { Link } from 'react-router-dom';

interface ApostilleHeroProps {
  onContactClick: () => void;
}

export const ApostilleHero: React.FC<ApostilleHeroProps> = ({ onContactClick }) => (
  <>
    {/* Hero Section - Full Viewport Width with Deep Blue Gradient */}
    <section className="relative overflow-hidden text-white min-h-[85vh] flex items-center w-screen left-1/2 -translate-x-1/2">
      {/* Deep blue gradient background covering full viewport */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-proof via-electric-blue to-proof"></div>
      
      {/* Background image with enhanced visibility and deepened blue overlay */}
      <div className="absolute inset-0 z-0 opacity-60">
        <img 
          src="/images/apostilleFlyers.png" 
          alt="" 
          className="w-full h-full object-cover brightness-110 saturate-110"
        />
      </div>
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-proof/60 via-electric-blue/50 to-proof/65 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-electric-blue/20"></div>
      </div>
      
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto py-28 px-6 relative z-20 w-full">
        <div className="max-w-3xl text-left">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Apostille Partner Network
          </h1>

          {/* Tagline */}
          <div className="mb-6">
            <p className="text-lg md:text-xl font-bold text-white drop-shadow-sm">
              Connect. Authenticate. Deliver. We Bridge You to TX SOS.
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed drop-shadow-sm">
            Bridge Notary connects you with certified notary partners in your area, then handles secure courier delivery to the Texas Secretary of State for official apostille authentication.
          </p>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-white text-proof hover:bg-neutral-100 transition-all rounded text-lg py-3 px-8 font-semibold shadow-lg hover:shadow-xl text-center"
            >
              <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Start My Apostille
              </span>
            </Link>
            <button
              onClick={onContactClick}
              className="border-2 border-white text-white hover:bg-white hover:text-proof transition-all rounded text-lg py-3 px-8 font-semibold shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Chat With an Expert
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Flyer Strip Section - full-width seamless trio with deep links */}
    <section className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-off-white">
      <div className="flex flex-col md:flex-row h-56 md:h-64 lg:h-72">
        <Link
          to="/study-abroad"
          className="relative flex-1 group block"
          aria-label="Study Abroad apostille services"
        >
          <img
            src="/src/assets/images/study-abroad.png"
            alt="Study Abroad"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-professional-blue/60 group-hover:bg-professional-blue/50 transition-colors duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <p className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">Study Abroad</p>
            <p className="text-lg md:text-xl font-bold text-white">Academic & Visa Documents</p>
          </div>
        </Link>

        <Link
          to="/international-adoption"
          className="relative flex-1 group block"
          aria-label="International Adoption apostille services"
        >
          <img
            src="/src/assets/images/international-adoption.png"
            alt="International Adoption"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-professional-blue/60 group-hover:bg-professional-blue/50 transition-colors duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <p className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">International Adoption</p>
            <p className="text-lg md:text-xl font-bold text-white">Home Studies & Dossiers</p>
          </div>
        </Link>

        <Link
          to="/destination-wedding"
          className="relative flex-1 group block"
          aria-label="Destination Wedding apostille services"
        >
          <img
            src="/src/assets/images/destination-wedding.png"
            alt="Destination Wedding"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-professional-blue/60 group-hover:bg-professional-blue/50 transition-colors duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <p className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">Destination Wedding</p>
            <p className="text-lg md:text-xl font-bold text-white">Marriage & Identity Documents</p>
          </div>
        </Link>
      </div>
    </section>
  </>
);
