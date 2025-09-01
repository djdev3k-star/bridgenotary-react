import React from 'react';
import SecureCourierOptions from '@/components/SecureCourierOptions';
import BookingSidebar from '@/components/layout/BookingSidebar';

const CourierPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-proof mb-6">
            Secure Courier Services
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Advanced document security for sensitive legal, real estate, and financial transactions. 
            Our encrypted courier solutions ensure your confidential documents remain protected throughout 
            the entire delivery process.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <SecureCourierOptions />
          </div>
          <div className="lg:w-1/3">
            <BookingSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourierPage;