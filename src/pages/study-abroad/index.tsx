import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';

const StudyAbroadPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section - Left-aligned with overlay image and transparent CTA */}
      <section className="relative overflow-hidden text-white min-h-[70vh] flex items-center">
        {/* Deep blue gradient background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-proof via-electric-blue to-proof"></div>

        {/* Background image overlay */}
        <div className="absolute inset-0 z-0 opacity-60">
          <img
            src="/images/study-abroad.png"
            alt="Study abroad"
            className="w-full h-full object-cover brightness-110 saturate-110"
          />
        </div>
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-proof/60 via-electric-blue/50 to-proof/65 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-electric-blue/20"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto py-20 px-6 relative z-20 w-full">
          <div className="max-w-3xl text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-white/50"></span>
              <span className="text-xs uppercase tracking-[0.25em] text-white/90">Study Abroad</span>
              <span className="h-px w-12 bg-white/50"></span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Document Authentication for Study Abroad
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed drop-shadow-sm">
              Prepare your transcripts, diplomas, and identity documents for international programs with reliable <Link to="/apostille" className="text-white/95 hover:text-white underline">apostille</Link> and legalization support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apostille" className="bg-white text-proof hover:bg-neutral-100 transition-all rounded text-lg py-3 px-8 font-semibold shadow-lg hover:shadow-xl">
                View Apostille Services
              </Link>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-proof transition-all rounded text-lg py-3 px-8 font-semibold shadow-lg hover:shadow-xl">
                Talk to a Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info blocks - modern wide cards with icons */}
      <section className="section bg-neutral-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="h-px w-12 bg-neutral-300"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-electric-blue font-semibold">What You May Need</span>
            <span className="h-px w-12 bg-neutral-300"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-proof text-center mb-4">Common Study Abroad Documents</h2>
          <p className="text-xl text-neutral-600 text-center max-w-3xl mx-auto">We help prepare and route the right documents for your destination country.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Academic Records */}
          <div className="card bg-white shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-electric-blue fade-in">
            <div className="mb-4">
              <svg className="w-10 h-10 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-proof mb-2">Academic Records</h3>
            <ul className="text-neutral-700 text-base space-y-1">
              <li>Transcripts</li>
              <li>Diplomas</li>
              <li>Enrollment letters</li>
            </ul>
          </div>
          {/* Identity & Legal */}
          <div className="card bg-white shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-gold fade-in-delay">
            <div className="mb-4">
              <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-proof mb-2">Identity & Legal</h3>
            <ul className="text-neutral-700 text-base space-y-1">
              <li>Birth certificates</li>
              <li>Notarized copies</li>
              <li>Affidavits</li>
            </ul>
          </div>
          {/* Program Materials */}
          <div className="card bg-white shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-electric-blue fade-in-delay">
            <div className="mb-4">
              <svg className="w-10 h-10 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a1 1 0 011 1v8a1 1 0 01-1 1H8a1 1 0 01-1-1V8a1 1 0 011-1h8zm-2 4H8m0 0V8m0 3v3m0-3h8" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-proof mb-2">Program Materials</h3>
            <ul className="text-neutral-700 text-base space-y-1">
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