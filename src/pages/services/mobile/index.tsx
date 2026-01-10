import React from "react";
import { Link } from 'react-router-dom';

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    title: "Flexible Scheduling",
    description: "Evenings and weekends available to fit your timeline.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10m-12 8h14a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "On-Site Convenience",
    description: "We come to your home, office, or neutral location.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l9-7 9 7v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8z" />
      </svg>
    ),
  },
  {
    title: "Professional Validations",
    description: "IDs, acknowledgments, and required journal entries handled properly.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function MobileNotaryPage() {
  return (
    <div>
      {/* Hero section widened to full viewport width */}
      <div className="relative overflow-hidden text-white min-h-[75vh] md:min-h-[85vh] flex items-center w-screen left-1/2 -translate-x-1/2">
        <div className="absolute inset-0">
          <img src="/images/loan-signing-bg.jpg" alt="Mobile Notary" className="w-full h-full object-cover opacity-70" />
        </div>
        <div className="absolute inset-0 bg-electric-blue/50"></div>
        <div className="relative z-10 section w-full">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-10 bg-white/60"></span>
              <span className="text-xs uppercase tracking-[0.25em] text-white/90">Mobile Notary</span>
              <span className="h-px w-10 bg-white/60"></span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Mobile Notary Services</h1>
            <p className="text-lg text-white/90 mt-4">Reliable, on-site notarization anywhere in the DFW metroplex.</p>
            <div className="mt-6">
              <Link to="/book" className="button-primary">Book Your Appointment</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((f) => (
              <div key={f.title} className="card">
                <div className="flex items-center gap-3 mb-2">
                  {f.icon}
                  <h3 className="text-xl font-semibold text-proof">{f.title}</h3>
                </div>
                <p className="text-neutral-700">{f.description}</p>
              </div>
            ))}
          </div>

          <div className="card mb-10">
            <h2 className="text-2xl font-bold text-proof mb-3">Common Documents We Notarize</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Power of Attorney",
                "Affidavits & Statements",
                "Title & Deed Transfers",
                "Estate & Trust Documents",
                "School Permission Forms",
                "Medical Authorization",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="card md:w-1/2">
              <h3 className="text-xl font-semibold text-proof mb-2">How It Works</h3>
              <ol className="space-y-3">
                {[
                  "Book your appointment and share document details",
                  "Prepare valid government-issued ID(s)",
                  "We arrive on time and perform notarization",
                  "Receive your notarized documents and receipt",
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="text-electric-blue font-bold">{i + 1}.</span>
                    <span className="text-neutral-800">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="card md:w-1/2">
              <h3 className="text-xl font-semibold text-proof mb-2">Pricing Snapshot</h3>
              <ul className="space-y-2">
                <li className="flex justify-between"><span className="text-neutral-800">Standard Notarial Act</span><span className="text-neutral-900 font-semibold">$10</span></li>
                <li className="flex justify-between"><span className="text-neutral-800">Travel (local)</span><span className="text-neutral-900 font-semibold">From $25</span></li>
                <li className="flex justify-between"><span className="text-neutral-800">After-hours / Weekend</span><span className="text-neutral-900 font-semibold">+ $20</span></li>
              </ul>
              <p className="text-neutral-700 mt-3 text-sm">Exact pricing depends on location, document count, and timing. See full pricing for details.</p>
              <div className="mt-4">
                <Link to="/pricing" className="button-outline">View Full Pricing</Link>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link to="/book" className="button-primary">Book Your Mobile Notary</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
