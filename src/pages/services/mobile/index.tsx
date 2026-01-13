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
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10m-12 8h14a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "On-Site Convenience",
    description: "We come to your home, office, or neutral location.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l9-7 9 7v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8z" />
      </svg>
    ),
  },
  {
    title: "Professional Validations",
    description: "IDs, acknowledgments, and required journal entries handled properly.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function MobileNotaryPage() {
  return (
    <div>
      {/* Breadcrumb Navigation */}
      <div className="bg-professional-blue/5 border-b border-professional-blue/10">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-professional-blue hover:text-professional-blue/70">Home</Link>
            <span className="text-charcoal/40">/</span>
            <Link to="/services" className="text-professional-blue hover:text-professional-blue/70">General Notary Services</Link>
            <span className="text-charcoal/40">/</span>
            <span className="text-charcoal/70 font-medium">Mobile Compatible</span>
          </div>
        </div>
      </div>

      {/* Hero section - Redesigned */}
      <section className="relative overflow-hidden w-screen left-1/2 -translate-x-1/2">
        <div className="relative bg-gradient-to-br from-professional-blue via-professional-blue/98 to-professional-blue/95 text-white min-h-[600px] flex items-center">
          {/* Background pattern - diagonal stripes */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`,
          }}></div>

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-24 md:py-32">
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <div className="mb-6">
                <span className="inline-block text-sm font-semibold text-white/80 uppercase tracking-widest">Professional Services</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Notary<br />Wherever<br />You Are
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-white/85 leading-relaxed mb-10 max-w-xl">
                We handle the logistics. You get notarized. Same-day appointments, flexible hours, proven reliability.
              </p>

              {/* Simple CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Link to="/book" className="bg-white text-professional-blue hover:bg-white/95 font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Book Now
                </Link>
                <a href="#details" className="text-white/90 hover:text-white font-semibold py-4 px-8 inline-flex items-center gap-2 group">
                  Details
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>

              {/* Trust element */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-sm text-white/70 mb-3">Trusted by DFW families and businesses</p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-white/20 border border-white/40"></div>
                    ))}
                  </div>
                  <span className="text-white/80 text-sm font-medium">500+ satisfied clients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating accent - right side */}
          <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section id="details" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {features.map((f) => (
              <div key={f.title} className="group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 p-3 bg-professional-blue/10 rounded-lg group-hover:bg-professional-blue/15 transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold text-charcoal pt-1">{f.title}</h3>
                </div>
                <p className="text-charcoal/70 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left: What We Notarize */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-8">What We Notarize</h2>
              <ul className="space-y-4">
                {[
                  "Power of Attorney",
                  "Affidavits & Statements",
                  "Title & Deed Transfers",
                  "Estate & Trust Documents",
                  "School Permission Forms",
                  "Medical Authorization",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-professional-blue flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-charcoal/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: How It Works */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-8">How It Works</h2>
              <div className="space-y-6">
                {[
                  { num: 1, text: "Book your appointment and share document details" },
                  { num: 2, text: "Prepare valid government-issued ID(s)" },
                  { num: 3, text: "We arrive on time and perform notarization" },
                  { num: 4, text: "Receive your notarized documents and receipt" },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-professional-blue/15 flex-shrink-0">
                      <span className="text-professional-blue font-bold">{step.num}</span>
                    </div>
                    <p className="text-charcoal/80 leading-relaxed pt-1">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-professional-blue/5 rounded-xl p-8 border border-professional-blue/10 mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-8">Transparent Pricing</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {[
                { label: "Standard Notarization", price: "$10", desc: "Per notarial act" },
                { label: "Travel Fee", price: "From $25", desc: "Local DFW area" },
                { label: "After-Hours / Weekend", price: "+$20", desc: "Premium availability" },
              ].map((item, idx) => (
                <div key={idx}>
                  <p className="text-sm font-semibold text-professional-blue uppercase tracking-wide mb-2">{item.label}</p>
                  <p className="text-3xl font-bold text-charcoal mb-1">{item.price}</p>
                  <p className="text-charcoal/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-charcoal/70 text-sm">Exact pricing depends on location, document count, and timing. <Link to="/pricing" className="text-professional-blue hover:underline font-semibold">View full pricing →</Link></p>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <Link to="/book" className="inline-flex items-center gap-2 bg-professional-blue text-white hover:bg-professional-blue/90 font-semibold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule Your Mobile Notary
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
