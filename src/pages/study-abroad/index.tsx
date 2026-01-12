import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';

const StudyAbroadPage: React.FC = () => {
  return (
    <Layout>
      {/* Breadcrumbs */}
      <section className="bg-off-white border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-charcoal/70">
            <Link to="/" className="hover:text-professional-blue">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-professional-blue">Services</Link>
            <span>/</span>
            <span className="text-charcoal font-medium">Study Abroad</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48 bg-professional-blue">
        {/* Background image overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/images/study-abroad.png"
            alt="Study abroad"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-professional-blue/70"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="max-w-3xl text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Document Authentication for Study Abroad
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Prepare your transcripts, diplomas, and identity documents for international programs with reliable apostille and legalization support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apostille" className="inline-flex items-center justify-center gap-3 bg-white text-professional-blue hover:bg-off-white transition-all text-lg py-4 px-8 font-semibold">
                View Apostille Services
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-professional-blue transition-all text-lg py-4 px-8 font-semibold">
                Talk to a Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info blocks */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-professional-blue uppercase tracking-widest bg-professional-blue/10 px-4 py-2">What You May Need</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Common Study Abroad Documents</h2>
          <p className="text-xl text-charcoal/70 max-w-3xl">We help prepare and route the right documents for your destination country.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Academic Records */}
          <div className="border-l-2 border-professional-blue pl-6 py-4 group">
            <div className="mb-4 text-professional-blue group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-charcoal mb-2">Academic Records</h3>
            <ul className="text-charcoal/70 text-sm space-y-1">
              <li>Transcripts</li>
              <li>Diplomas</li>
              <li>Enrollment letters</li>
            </ul>
          </div>
          {/* Identity & Legal */}
          <div className="border-l-2 border-professional-blue pl-6 py-4 group">
            <div className="mb-4 text-professional-blue group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-charcoal mb-2">Identity & Legal</h3>
            <ul className="text-charcoal/70 text-sm space-y-1">
              <li>Birth certificates</li>
              <li>Notarized copies</li>
              <li>Affidavits</li>
            </ul>
          </div>
          {/* Program Materials */}
          <div className="border-l-2 border-professional-blue pl-6 py-4 group">
            <div className="mb-4 text-professional-blue group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a1 1 0 011 1v8a1 1 0 01-1 1H8a1 1 0 01-1-1V8a1 1 0 011-1h8zm-2 4H8m0 0V8m0 3v3m0-3h8" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-charcoal mb-2">Program Materials</h3>
            <ul className="text-charcoal/70 text-sm space-y-1">
              <li>Acceptance letters</li>
              <li>Visa application support documents</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StudyAbroadPage;