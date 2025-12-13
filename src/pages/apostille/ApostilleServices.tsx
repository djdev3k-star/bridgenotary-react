import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ScenarioType {
  situation: string;
  documents: string;
  gotcha: string;
  icon: React.ReactNode;
}

interface SolutionType {
  action: string;
  benefit: string;
  icon: React.ReactNode;
}

const ApostilleServices: React.FC = () => {
  const navigate = useNavigate();
  const [showContactForm, setShowContactForm] = useState(false);

  const commonScenarios: ScenarioType[] = [
    {
      situation: 'Destination Wedding',
      documents: 'Birth certificates, single-status affidavit',
      gotcha: 'Foreign consulate may reject if not apostilled',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Destination Wedding icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      situation: 'Study or Work Abroad',
      documents: 'Diplomas, FBI background checks',
      gotcha: 'Each state/federal doc follows a different route',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Study Abroad icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      situation: 'International Adoption',
      documents: 'Home-study, medical exams',
      gotcha: 'Tight embassy deadlines & translations',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="International Adoption icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      situation: 'Dual Citizenship',
      documents: 'Naturalization records, vital records',
      gotcha: 'Wrong seal = entire application delayed',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Dual Citizenship icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
      )
    },
    {
      situation: 'Overseas Property Purchase',
      documents: 'Power of Attorney',
      gotcha: 'Needs both notarization and apostille in sequence',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Overseas Property Purchase icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    }
  ];

  const solutions: SolutionType[] = [
    {
      action: 'Door-to-door courier or priority mail service',
      benefit: 'No office visits—handle everything from your couch',
      icon: (
        <div className="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Courier service icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
        </div>
      )
    },
    {
      action: 'Pre-review & triple-check of every document',
      benefit: 'Zero rejections or do-overs',
      icon: (
        <div className="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Document review icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
      )
    },
    {
      action: 'Same-day dispatch to correct authority',
      benefit: '3- to 5-day turnaround (rush options available)',
      icon: (
        <div className="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Fast dispatch icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      )
    },
    {
      action: 'Real-time tracking portal + SMS updates',
      benefit: 'Total visibility—know when each seal is applied',
      icon: (
        <div className="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Tracking portal icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        </div>
      )
    },
    {
      action: 'Secure return in tamper-evident pouch',
      benefit: 'Documents arrive flight-ready and pristine',
      icon: (
        <div className="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Secure delivery icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
      )
    }
  ];

  const painPoints = [
    "Confusing Guidelines – Every state (and the U.S. State Dept.) has its own forms, fees, and mailing quirks.",
    "Time-Sensitive Deadlines – Visas, court dates, and wedding planners don't wait for slow mail.",
    "Costly Rejections – One missing seal and you pay for re-shipping, new copies, even trip rescheduling.",
    "No Status Visibility – Government offices rarely tell you where your paperwork sits in the pile.",
    "Lost Workdays – Queueing at county clerks or FedEx counters steals hours you could spend planning your move."
  ];

  return (
    <div className="w-full bg-white">

      {/* Pain Points Section - Simplified to list format */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-12 bg-neutral-300"></span>
              <span className="text-xs uppercase tracking-[0.25em] text-neutral-700">Pain Points We Eliminate</span>
              <span className="h-px w-12 bg-neutral-300"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-proof">What We Remove From Your Process</h2>
          </div>
          <ul className="space-y-4 max-w-2xl mx-auto">
            {painPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-neutral-800">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our Solution Section - Simplified to list format */}
      <section className="section bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-12 bg-neutral-300"></span>
              <span className="text-xs uppercase tracking-[0.25em] text-neutral-700">Our Solution</span>
              <span className="h-px w-12 bg-neutral-300"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-proof">How We Make Complex Simple</h2>
          </div>
          <ul className="space-y-4 max-w-2xl mx-auto">
            {solutions.map((solution, index) => (
              <li key={index} className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-proof">{solution.action}</span>
                  <span className="text-neutral-600"> — {solution.benefit}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How It Works Section - Simplified horizontal steps */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-proof text-center mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex-1 text-center">
              <span className="text-electric-blue font-bold text-2xl">1.</span>
              <h3 className="text-lg font-semibold mt-2 mb-1">Upload or Snap</h3>
              <p className="text-neutral-600 text-sm">Send your document—we confirm eligibility.</p>
            </div>
            <div className="hidden md:block text-neutral-300 text-2xl">→</div>
            <div className="flex-1 text-center">
              <span className="text-electric-blue font-bold text-2xl">2.</span>
              <h3 className="text-lg font-semibold mt-2 mb-1">Ship It</h3>
              <p className="text-neutral-600 text-sm">Drop in prepaid mailer or use our courier.</p>
            </div>
            <div className="hidden md:block text-neutral-300 text-2xl">→</div>
            <div className="flex-1 text-center">
              <span className="text-electric-blue font-bold text-2xl">3.</span>
              <h3 className="text-lg font-semibold mt-2 mb-1">Track & Receive</h3>
              <p className="text-neutral-600 text-sm">Apostilled documents delivered to your door.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Quiz CTA - Simplified inline */}
      <section className="section bg-neutral-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-proof mb-4">Still Unsure If You Need an Apostille?</h2>
          <p className="text-neutral-600 mb-6">Take our 30-second quiz to find out.</p>
          <button 
            onClick={() => navigate('/apostille/quiz')}
            className="button-primary"
            aria-label="Start apostille need assessment quiz"
          >
            Start Quiz
          </button>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0">
          <img 
            src="/images/study-abroad.png" 
            alt="Study Abroad Documents" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-proof to-electric-blue opacity-85"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 fade-in">Make Your Documents World-Ready</h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto fade-in-delay leading-relaxed">
            Stop guessing. Start traveling, marrying, studying, or doing business abroad—confident your documents will cross borders as smoothly as you do.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 fade-in-delay">
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-white text-proof hover:bg-neutral-100 transition-all font-semibold rounded text-lg py-5 px-10 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 relative z-50"
            >
              Get My Apostille Now
            </button>
            {/* TODO: Add phone contact for future development */}
            {/* <a 
              href="tel:+14696298932" 
              className="bg-transparent border-2 border-white hover:bg-white/10 transition-all font-semibold rounded text-lg py-5 px-10 text-white relative z-50 flex flex-col items-center"
            >
              <span className="text-sm text-white/80">Free 5-min Consult</span>
              <span>(469) 629-8932</span>
            </a> */}
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-md max-w-xl w-full p-6">
            <h3 className="text-2xl font-semibold mb-4">Start Your Apostille Process</h3>
            {/* Add your contact form here */}
            <button 
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700"
              aria-label="Close contact form"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApostilleServices;
