import React from 'react';
import { RONIndustryCardProps } from './RONComponents.types';

export const IndustryCard: React.FC<RONIndustryCardProps> = ({ title, desc }) => (
  <div className="card">
    <h3 className="text-xl font-semibold text-proof mb-2">{title}</h3>
    <p className="text-neutral-600">{desc}</p>
  </div>
);
