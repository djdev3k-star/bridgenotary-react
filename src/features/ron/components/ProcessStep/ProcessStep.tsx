import React from 'react';
import { ProcessStepProps } from './ProcessStep.types';
import { Button, CheckIcon } from '@/components/common';

const ProcessStep: React.FC<ProcessStepProps> = ({
  title,
  description,
  completed = false,
  active = false,
  children,
  onComplete,
  onNext,
  onBack,
  isLoading = false,
  error,
}) => {
  return (
    <div className="border-l-4 border-gray-200 pl-4">
      <div className="mb-4">
        <div className="flex items-start">
          <div className="mr-3">
            {completed ? (
              <CheckIcon />
            ) : (
              <div className={`h-5 w-5 rounded-full ${active ? 'bg-blue-600' : 'bg-gray-200'}`} />
            )}
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>
        </div>
      </div>

      {active && (
        <div className="ml-8">
          <div className="mb-4">{children}</div>
          <div className="flex space-x-4">
            {onBack && (
              <Button
                variant="outline"
                onClick={onBack}
                disabled={isLoading}
              >
                Back
              </Button>
            )}
            {onComplete && (
              <Button
                onClick={onComplete}
                disabled={isLoading}
                loading={isLoading}
              >
                Complete Step
              </Button>
            )}
            {onNext && (
              <Button
                onClick={onNext}
                disabled={isLoading}
              >
                Next Step
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessStep;
