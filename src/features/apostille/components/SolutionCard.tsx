import React from 'react';
import { ApostilleSolutionProps } from './apostilleComponents.types';

export const SolutionCard: React.FC<ApostilleSolutionProps> = ({ action, benefit, icon }) => (
  <div className="card p-6">
    <div className="flex items-start gap-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="font-semibold mb-2">{action}</h3>
        <p className="text-neutral-600">{benefit}</p>
      </div>
    </div>
  </div>
);
