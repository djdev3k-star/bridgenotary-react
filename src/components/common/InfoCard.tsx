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
    <div className="rounded p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-all bg-white">
      <div className="flex items-center gap-3 mb-4">
        {icon && <div className="bg-electric-blue/10 rounded-md p-3 flex-shrink-0">{icon}</div>}
        <h3 className="text-xl font-bold text-proof">{title}</h3>
      </div>
      {imageSrc && (
        <div className="mb-4">
          <img
            src={imageSrc}
            alt={imageAlt || ''}
            className="w-full h-48 object-cover rounded border border-neutral-200"
          />
        </div>
      )}
      {children}
    </div>
  );
};

export default InfoCard;
