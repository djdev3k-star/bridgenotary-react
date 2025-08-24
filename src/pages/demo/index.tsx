import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoadingSpinner } from '@/components/common/Loading';

const DemoPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleNext = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  return (
    <div className="w-full bg-white text-neutral-900 pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-proof mb-8">Interactive Demo</h1>
        
        {/* Progress Bar */}
        <div className="relative mb-8">
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-proof rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-4">
            <span className={currentStep >= 1 ? 'text-proof' : 'text-gray-400'}>Upload</span>
            <span className={currentStep >= 2 ? 'text-proof' : 'text-gray-400'}>Verify</span>
            <span className={currentStep >= 3 ? 'text-proof' : 'text-gray-400'}>Sign</span>
          </div>
        </div>

        {/* Demo Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {isLoading ? (
            <div className="h-64 flex items-center justify-center">
              <LoadingSpinner size="large" />
            </div>
          ) : (
            <>
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Document Upload</h2>
                  <p className="text-neutral-600">
                    Experience how easy it is to upload and prepare your documents for notarization.
                    Our platform supports various file formats including PDF, Word, and images.
                  </p>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <p className="text-neutral-600">Drag and drop your documents here</p>
                    <p className="text-sm text-neutral-500 mt-2">or</p>
                    <button className="mt-2 px-4 py-2 bg-proof text-white rounded-md">
                      Browse Files
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Identity Verification</h2>
                  <p className="text-neutral-600">
                    See how our secure identity verification process works. We use advanced
                    technology to verify your government-issued ID and ensure your identity.
                  </p>
                  <div className="border rounded-lg p-8">
                    <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                      [Camera Preview Placeholder]
                    </div>
                    <p className="text-center text-neutral-600">
                      Position your ID card within the frame
                    </p>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Video Session & Signing</h2>
                  <p className="text-neutral-600">
                    Preview how the live video session works with our notaries. Experience
                    the electronic signing process and receive your notarized documents instantly.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4 aspect-video bg-gray-100 flex items-center justify-center">
                      [Notary Video Feed]
                    </div>
                    <div className="border rounded-lg p-4 aspect-video bg-gray-100 flex items-center justify-center">
                      [Your Video Feed]
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            className={`px-6 py-2 rounded-md ${
              currentStep === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            disabled={currentStep === 1}
          >
            Previous
          </button>
          
          {currentStep === 3 ? (
            <Link
              to="/book"
              className="px-6 py-2 bg-proof text-white rounded-md hover:bg-proof-dark"
            >
              Start Real Session
            </Link>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-proof text-white rounded-md hover:bg-proof-dark"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Next'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
