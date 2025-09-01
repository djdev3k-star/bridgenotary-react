import React from 'react';
import { Card } from '@/components/common';

const SecureCourierOptions: React.FC = () => {
  const securityFeatures = [
    {
      title: 'Tamper-Evident Packaging',
      description: 'All documents are secured in tamper-evident pouches that show any unauthorized access attempts.',
      icon: '🔐'
    },
    {
      title: 'Real-Time GPS Tracking',
      description: 'Track your documents every step of the way with live GPS monitoring from pickup to delivery.',
      icon: '📍'
    },
    {
      title: 'Chain of Custody Documentation',
      description: 'Complete documentation of who handled your documents and when, ensuring accountability.',
      icon: '📋'
    },
    {
      title: 'Insured Transport',
      description: 'All courier services include comprehensive insurance coverage for your valuable documents.',
      icon: '🛡️'
    },
    {
      title: 'Signature Required Delivery',
      description: 'Documents are only delivered to authorized recipients with signature confirmation.',
      icon: '✍️'
    },
    {
      title: 'Time-Sensitive Priority',
      description: 'Rush delivery options available for urgent documents with same-day and next-day service.',
      icon: '⚡'
    }
  ];

  return (
    <section className="section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Secure Courier Security Features</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Your sensitive documents deserve the highest level of security. Our courier services provide 
            multiple layers of protection to ensure your documents arrive safely and intact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              content={
                <div>
                  <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                  <p className="text-neutral-600">{feature.description}</p>
                </div>
              }
            />
          ))}
        </div>

        <div className="mt-12 bg-proof/5 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-proof mb-4">24/7 Customer Support</h3>
            <p className="text-neutral-700 mb-6">
              Our courier team is available around the clock to provide updates, answer questions, 
              and ensure your documents are handled with the utmost care.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+14696298932" 
                className="button-primary"
              >
                Call (469) 629-8932
              </a>
              <button className="button-outline">
                Track Your Delivery
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecureCourierOptions;