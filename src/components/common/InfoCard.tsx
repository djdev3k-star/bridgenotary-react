import React from 'react';

interface InfoCardProps {
  title: string;
  icon?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

// Minimal shared card preserving existing classes/styles
const InfoCard: React.FC<InfoCardProps> = ({ title, icon, imageSrc, imageAlt, children }) => {
  return (
    <div className="border-l-2 border-professional-blue pl-6 group">
      <div className="flex items-start gap-3 mb-4">
        {icon && <div className="flex-shrink-0 text-professional-blue group-hover:scale-110 transition-transform">{icon}</div>}
        <h3 className="text-xl font-bold text-charcoal">{title}</h3>
      </div>
      {imageSrc && (
        <div className="mb-4">
          <img
            src={imageSrc}
            alt={imageAlt || ''}
            className="w-full h-48 object-cover rounded border border-professional-blue/20"
          />
        </div>
      )}
      {children}
    </div>
  );
};

export default InfoCard;
