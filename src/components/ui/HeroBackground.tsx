import React from 'react';

interface HeroBackgroundProps {
  variant?: 'default' | 'gradient' | 'pattern' | 'mesh';
  opacity?: number;
  className?: string;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ variant = 'default', opacity = 0.95, className = '' }) => {
  const getBackground = () => {
    switch (variant) {
      case 'gradient':
        return (
          <div className={`absolute inset-0 z-0 ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-proof via-electric-blue to-proof opacity-95"></div>
            <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
          </div>
        );

      case 'pattern':
        return (
          <div className={`absolute inset-0 z-0 ${className}`}>
            <div className="absolute inset-0 bg-proof" style={{ opacity }}></div>
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%">
                <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="white" />
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-proof/50"></div>
          </div>
        );

      case 'mesh':
        return (
          <div className={`absolute inset-0 z-0 ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-proof to-electric-blue" style={{ opacity }}></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMC41IiBmaWxsPSIjZmZmZmZmMjAiLz48L3N2Zz4=')] opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-proof/50 via-transparent to-transparent"></div>
          </div>
        );

      default:
        return (
          <div className={`absolute inset-0 z-0 ${className}`}>
            <img
              src="/src/assets/images/A professional notary conducting a video conference with a client for online notary services. The image shows the notary on a laptop screen, with a legal document visible in the foreground._.jpg"
              alt="Professional notary conducting remote session"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-proof/95 to-electric-blue/95 mix-blend-multiply"></div>
          </div>
        );
    }
  };

  return getBackground();
};