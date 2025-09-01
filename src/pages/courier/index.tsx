import React from 'react';
import SecureCourierOptions from './SecureCourierOptions';

const CourierPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-proof mb-6 text-center">Secure Courier Services</h1>
        <p className="text-xl text-neutral-600 text-center leading-relaxed">
          Professional courier services with advanced security protocols to protect your sensitive documents throughout the entire delivery process.
        </p>
      </div>
      <SecureCourierOptions />
    </div>
  );
};

export default CourierPage;