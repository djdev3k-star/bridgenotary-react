import React from 'react';
import { RONStatProps } from './RONComponents.types';

export const Stat: React.FC<RONStatProps> = ({ number, label }) => (
  <div className="text-center card p-6">
    <p className="text-3xl font-bold text-proof">{number}</p>
    <p className="text-neutral-600 mt-1">{label}</p>
  </div>
);
