import React from 'react';

interface ApostilleHeroProps {
  onContactClick: () => void;
}

export const ApostilleHero: React.FC<ApostilleHeroProps> = ({ onContactClick }) => (
  <section className="relative overflow-hidden text-white min-h-screen flex flex-col items-center justify-center">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="/images/apostillebg.png"
        alt="Apostille Service Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-proof/85 via-proof/75 to-proof/60" />
      <div className="absolute inset-0 bg-black/20" />
    </div>

    {/* Hero Content */}
    <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        {/* Left Column: Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Document <span className="text-gold">Apostille</span> Services
          </h1>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg border border-white/30 mb-6 inline-block md:w-full">
            <p className="text-lg md:text-xl text-gold font-semibold drop-shadow-sm">
              Avoid Rejection. Avoid Delays. Get It Right the First Time.
            </p>
          </div>
          <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed drop-shadow-sm">
            Whether it's for a destination wedding in Italy, teaching in Japan, or adopting from Colombia, we get your documents stamped, sealed, and ready—without the guesswork.
          </p>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/30 shadow-lg">
              <div className="flex justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-white drop-shadow-sm">Guaranteed</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/30 shadow-lg">
              <div className="flex justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V15a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-white drop-shadow-sm">Fast</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/30 shadow-lg">
              <div className="flex justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-white drop-shadow-sm">Global</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onContactClick}
              className="bg-white text-proof hover:bg-neutral-100 transition-all rounded-lg text-lg py-3 px-8 font-semibold shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Start My Apostille
              </span>
            </button>
            <button
              onClick={onContactClick}
              className="bg-electric-blue text-white hover:bg-hover-blue transition-all rounded-lg text-lg py-3 px-8 font-semibold shadow-lg hover:shadow-xl"
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

        {/* Right Column: Use Case Images */}
        <div className="hidden md:block">
          <img
            src="/images/apostilleFlyersstrip.png"
            alt="Apostille use cases: Passport, Destination Wedding, Adoption"
            className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white/30 drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Mobile Use Case Images */}
      <div className="md:hidden mb-8">
        <img
          src="/images/apostilleFlyersstrip.png"
          alt="Apostille use cases: Passport, Destination Wedding, Adoption"
          className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white/30 drop-shadow-2xl"
        />
      </div>
    </div>
  </section>
);