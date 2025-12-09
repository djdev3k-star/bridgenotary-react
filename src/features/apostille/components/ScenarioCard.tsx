import React from 'react';
import { ApostilleScenarioProps } from './apostilleComponents.types';

export const ScenarioCard: React.FC<ApostilleScenarioProps> = ({ situation, documents, gotcha, icon }) => (
  <div className="card p-6">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{situation}</h3>
    <p className="text-neutral-600 mb-2">
      <strong>Typical Documents:</strong><br />
      {documents}
    </p>
    <p className="text-red-600 text-sm">
      <strong>Watch Out:</strong><br />
      {gotcha}
    </p>
  </div>
);
