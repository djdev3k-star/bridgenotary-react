import React, { useState } from 'react';
import { commonScenarios, solutions, painPoints } from './apostilleData';
import { ScenarioSection } from './ScenarioSection';
import { PainPointsSection } from './PainPointsSection';
import { SolutionsSection } from './SolutionsSection';
import { WorkflowSection } from './WorkflowSection';
import { QuizSection } from './QuizSection';
import { ApostilleCTA } from './ApostilleCTA';

export const ApostilleServices: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="w-full bg-white">
      <ScenarioSection scenarios={commonScenarios} />
      <PainPointsSection painPoints={painPoints} />
      <SolutionsSection solutions={solutions} />
      <WorkflowSection />
      <QuizSection />
      <ApostilleCTA onContact={() => setShowContactForm(true)} />

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-md max-w-xl w-full p-6">
            <h3 className="text-2xl font-semibold mb-4">Start Your Apostille Process</h3>
            {/* Add your contact form here */}
            <button 
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700"
              aria-label="Close contact form"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};