import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';

const DualCitizenshipPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section - Left-aligned with overlay image and transparent CTA */}
      <section className="relative overflow-hidden text-white min-h-[70vh] flex items-center">
        {/* Deep blue gradient background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-proof via-electric-blue to-proof"></div>

        {/* Background image overlay */}
        <div className="absolute inset-0 z-0 opacity-60">
          <img
            src="/src/assets/images/dual-citizenship.png"
            alt="Dual citizenship"
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
              <span className="text-xs uppercase tracking-[0.25em] text-white/90">Dual Citizenship</span>
              <span className="h-px w-12 bg-white/50"></span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Apostille Support for Dual Citizenship
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed drop-shadow-sm">
              Prepare birth certificates, marriage records, background checks, and other civil documents for dual citizenship applications worldwide.
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
          <h2 className="text-3xl font-bold text-proof">Common Dual Citizenship Documents</h2>
          <p className="text-lg text-neutral-600 mt-3">We help authenticate the core records required by consulates and embassies.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Vital Records', desc: 'Birth certificates, marriage certificates, divorce decrees' },
            { title: 'Identity & Background', desc: 'Passports, FBI/state background checks, notarized copies' },
            { title: 'Consular Requirements', desc: 'Affidavits, residency proofs, parental consent or lineage documents' },
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

export default DualCitizenshipPage;
