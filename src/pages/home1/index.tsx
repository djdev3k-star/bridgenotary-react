import React from "react";
import { Link } from "react-router-dom";

const Home1Page: React.FC = () => {
  const stats = [
    { label: "Closings Completed", value: "10k+" },
    { label: "Avg. Session", value: "5 min" },
    { label: "Coverage", value: "50 States" },
    { label: "Support", value: "24/7" }
  ];

  const services = [
    {
      title: "Remote Online Notarization",
      desc: "Legally binding video notarization with identity verification and audit trail.",
      cta: "Start RON",
      link: "/ron"
    },
    {
      title: "Apostille Services",
      desc: "Authentication for international documents with tracked courier options.",
      cta: "Get Apostille",
      link: "/apostille"
    },
    {
      title: "Loan Signing",
      desc: "Certified signing agents for purchase, refinance, HELOC, and reverse.",
      cta: "Book a Signing",
      link: "/loan-signing"
    }
  ];

  const steps = [
    {
      title: "Book",
      desc: "Choose remote or mobile. Same-day availability in most metros.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Verify",
      desc: "Secure ID verification and document pre-check to prevent rework.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Sign",
      desc: "Meet your notary via secure video or in-person and complete the session.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden text-white min-h-[80vh] flex items-center w-screen left-1/2 -translate-x-1/2">
        <div className="absolute inset-0 bg-gradient-to-br from-proof via-electric-blue to-proof"></div>
        <div className="absolute inset-0 opacity-25">
          <img src="/images/secure-video-signing.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-proof/40"></div>

        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-white/15 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide">Bridge Notary</span>
              <span className="text-white/80 text-sm">NNA Certified • Bonded • Insured</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-4">
              Bridge Notary<br />
              <span className="text-gold text-6xl md:text-7xl leading-none">Modern, Secure Signings</span>
            </h1>
            <p className="text-base md:text-lg text-white/85 max-w-2xl mb-8 leading-relaxed">
              Fast, compliant notarization and loan signings. Remote or mobile, same-day availability, and tracked documents for total peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book" className="bg-white text-proof font-semibold rounded px-6 py-4 text-base shadow-lg hover:shadow-xl transition-all">
                Book Your Appointment
              </Link>
              <Link to="/contact" className="border border-white/70 text-white font-semibold rounded px-6 py-4 text-base hover:bg-white/10 transition-all">
                Talk to a Notary
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
            {stats.map((item) => (
              <div key={item.label} className="text-left">
                <div className="text-2xl md:text-3xl font-bold text-gold">{item.value}</div>
                <div className="text-white/80 text-sm md:text-base">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-proof mb-3">Core Services</h2>
            <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
              Focused offerings for fast, accurate notarization—online or in-person.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="rounded border border-neutral-200 p-6 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-proof mb-2">{service.title}</h3>
                <p className="text-sm md:text-base text-neutral-600 mb-4 leading-relaxed">{service.desc}</p>
                <Link to={service.link} className="text-electric-blue font-semibold text-sm md:text-base inline-flex items-center gap-2">
                  {service.cta}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-neutral-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-proof mb-3">How It Works</h2>
            <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
              Simple, guided steps to a completed notarization.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.title} className="bg-white rounded border border-neutral-200 p-6 shadow-sm">
                <div className="w-11 h-11 rounded-full bg-electric-blue/10 flex items-center justify-center mb-4">{step.icon}</div>
                <h3 className="text-lg font-bold text-proof mb-2">{step.title}</h3>
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-proof to-electric-blue"></div>
        <div className="absolute inset-0 opacity-15">
          <img src="/images/notarypublic-generalimagewithstamp.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Next Signing?</h2>
          <p className="text-base md:text-lg text-white/85 mb-8 max-w-2xl mx-auto">
            Professional, reliable, and secure. Book now and keep your documents moving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="bg-white text-proof font-semibold px-6 py-4 rounded text-base shadow-lg hover:shadow-xl transition-all">
              Book Now
            </Link>
            <Link to="/pricing" className="border border-white text-white font-semibold px-6 py-4 rounded text-base hover:bg-white/10 transition-all">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home1Page;
