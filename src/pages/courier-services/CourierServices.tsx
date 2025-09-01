import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/common';
import { SecureCourierOptions } from '@/components/courier';
import BookingSidebar from '@/components/layout/BookingSidebar';

const CourierServicesPage: React.FC = () => {
  const benefits = [
    {
      title: 'Secure Document Transport',
      description: 'Professional handling of sensitive legal documents with tamper-evident packaging and full insurance coverage.',
      icon: '🔒'
    },
    {
      title: 'Time-Critical Delivery',
      description: 'Same-day and next-day delivery options for urgent documents that can\'t wait for standard mail.',
      icon: '⚡'
    },
    {
      title: 'Real-Time Tracking',
      description: 'Track your documents every step of the way with GPS monitoring and instant status updates.',
      icon: '📍'
    },
    {
      title: 'Professional Couriers',
      description: 'Bonded and insured couriers trained in handling confidential legal and financial documents.',
      icon: '👨‍💼'
    }
  ];

  const industries = [
    {
      industry: 'Real Estate',
      documents: 'Purchase agreements, closing documents, title transfers, escrow papers',
      urgency: 'Critical for meeting closing deadlines',
      icon: '🏠'
    },
    {
      industry: 'Legal Services',
      documents: 'Court filings, contracts, depositions, legal briefs, settlement documents',
      urgency: 'Court deadlines and filing requirements',
      icon: '⚖️'
    },
    {
      industry: 'Financial Services',
      documents: 'Loan documents, mortgage papers, investment agreements, banking forms',
      urgency: 'Regulatory compliance and funding deadlines',
      icon: '💰'
    },
    {
      industry: 'Healthcare',
      documents: 'Medical records, HIPAA forms, insurance documents, patient consent forms',
      urgency: 'Patient care and insurance authorization',
      icon: '🏥'
    },
    {
      industry: 'Corporate',
      documents: 'Contracts, merger documents, board resolutions, compliance filings',
      urgency: 'Business continuity and regulatory requirements',
      icon: '🏢'
    },
    {
      industry: 'Government',
      documents: 'Permits, licenses, regulatory filings, official correspondence',
      urgency: 'Regulatory deadlines and public service',
      icon: '🏛️'
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-proof/10 to-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-proof mb-6">
                Secure Courier Services
              </h1>
              <p className="text-xl text-neutral-600 mb-8 max-w-3xl">
                Professional document delivery you can trust. Our bonded couriers provide secure, 
                tracked transport for your most important legal, financial, and business documents 
                when standard mail isn't fast or secure enough.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book" className="button-primary text-lg py-4 px-8 text-center">
                  Schedule Courier Pickup
                </Link>
                <a href="tel:+14696298932" className="button-outline text-lg py-4 px-8 text-center">
                  Call (469) 629-8932
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-neutral-100 rounded-lg aspect-4/3 flex items-center justify-center">
                <div className="text-6xl">📦</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Our Courier Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                title={benefit.title}
                content={
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{benefit.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-neutral-600">{benefit.description}</p>
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="bg-neutral-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card
                key={index}
                title={industry.industry}
                content={
                  <div>
                    <div className="text-4xl mb-4 text-center">{industry.icon}</div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-neutral-800 mb-2">Typical Documents:</h4>
                      <p className="text-neutral-600 text-sm">{industry.documents}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-neutral-800 mb-2">Why Speed Matters:</h4>
                      <p className="text-neutral-600 text-sm">{industry.urgency}</p>
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <SecureCourierOptions />

      {/* How It Works Section */}
      <section className="bg-neutral-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">How Our Courier Service Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2">1. Schedule Pickup</h3>
              <p className="text-neutral-600">Call us or book online to schedule your document pickup with pickup location and timing.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-2">2. Secure Packaging</h3>
              <p className="text-neutral-600">Our courier securely packages your documents in tamper-evident containers with tracking.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-semibold mb-2">3. Safe Transport</h3>
              <p className="text-neutral-600">Bonded courier transports your documents with real-time GPS tracking and status updates.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">4. Confirmed Delivery</h3>
              <p className="text-neutral-600">Signature-required delivery ensures your documents reach the right hands safely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-proof text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Secure Document Delivery?</h2>
          <p className="text-lg mb-8">
            Don't trust your important documents to chance. Our professional couriers ensure 
            your sensitive paperwork arrives safely, on time, and with full accountability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/book" className="button-primary bg-white text-proof text-lg py-4 px-8">
              Schedule Courier Now
            </Link>
            <div className="text-center">
              <p className="mb-2">Need immediate pickup?</p>
              <a href="tel:+14696298932" className="text-xl font-semibold hover:text-white/80">
                (469) 629-8932
              </a>
              <p className="text-sm mt-1">Same-day service available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar for large screens */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 hidden xl:block z-40">
        <BookingSidebar />
      </div>
    </div>
  );
};

export default CourierServicesPage;