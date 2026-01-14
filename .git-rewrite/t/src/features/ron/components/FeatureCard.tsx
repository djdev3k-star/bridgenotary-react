import React from 'react';
import { RONFeatureCardProps } from './RONComponents.types';

export const FeatureCard: React.FC<RONFeatureCardProps> = ({ icon, title, desc }) => (
  <div className="card text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-proof mb-2">{title}</h3>
    <p className="text-neutral-600">{desc}</p>
  </div>
);
