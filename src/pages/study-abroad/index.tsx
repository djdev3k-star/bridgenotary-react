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
              Prepare your transcripts, diplomas, and identity documents for international programs with reliable apostille and legalization support.
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

      {/* Info blocks - sharp cards */}
      <section className="section bg-white">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-neutral-300"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-700">What You May Need</span>
            <span className="h-px w-12 bg-neutral-300"></span>
          </div>
          <h2 className="text-3xl font-bold text-proof">Common Study Abroad Documents</h2>
          <p className="text-lg text-neutral-600 mt-3">We help prepare and route the right documents for your destination country.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Academic Records', desc: 'Transcripts, diplomas, enrollment letters' },
            { title: 'Identity & Legal', desc: 'Birth certificates, notarized copies, affidavits' },
            { title: 'Program Materials', desc: 'Acceptance letters, visa application support documents' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-proof mb-2">{item.title}</h3>
              <p className="text-neutral-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default StudyAbroadPage;