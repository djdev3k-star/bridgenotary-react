import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/common';

const LoanSigningPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section (same pattern as Apostille / RON) */}
      <section className="bg-gradient-to-b from-proof/10 to-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-proof mb-6">Mobile Notary & Loan Signing Services You Can Count On — On-Time, Every Time.</h1>
              <p className="text-xl text-neutral-600 mb-8 max-w-3xl">
                Certified signing agents, bonded & insured, trusted by title companies and lenders for accurate, timely closings. Same-day and rush availability in many areas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book" className="button-primary text-lg py-4 px-8 inline-block text-center">📅 Schedule Your Signing</Link>
                <a href="tel:+17135550123" className="button-outline text-lg py-4 px-8 inline-block text-center">📞 Call Now</a>
                <Link to="/contact" className="button-secondary text-lg py-4 px-8 inline-block text-center">🔍 Get Availability</Link>
              </div>

              <div className="mt-6 text-sm text-neutral-600">
                <strong>Trust:</strong> NNA Certified • E&O Insured • Background-checked • 99% on-time rate
              </div>
            </div>

            <div className="hidden md:block">
              <div className="bg-neutral-100 rounded-lg aspect-4/3" />
            </div>
          </div>
        </div>
      </section>

      {/* Body content */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="prose prose-lg max-w-none mb-8">
          <p>
            Our professional loan signing agents are certified and experienced in handling all types of loan documents.
            We provide mobile notary services for real estate transactions, refinancing, and more. We focus on accuracy, clear communication, and fast turnarounds — so you can close on time.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <Card
            title="Residential Loans"
            content={
              <ul className="space-y-2 text-gray-600">
                <li>Purchase Agreements</li>
                <li>Refinancing Documents</li>
                <li>Home Equity Loans</li>
                <li>Reverse Mortgages</li>
              </ul>
            }
          />
          <Card
            title="Commercial Loans"
            content={
              <ul className="space-y-2 text-gray-600">
                <li>Commercial Mortgages</li>
                <li>Construction Loans</li>
                <li>Business Loans</li>
                <li>SBA Loan Documents</li>
              </ul>
            }
          />
        </div>

        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Ready to Schedule?</h2>
          <p className="text-blue-700 mb-6">
            We offer flexible scheduling and can meet at your preferred location. Trusted by title companies and lenders for punctual, accurate signings.
          </p>
          <Link to="/book" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">Schedule a Signing</Link>
        </div>
      </div>
    </div>
  );
};

export default LoanSigningPage;
