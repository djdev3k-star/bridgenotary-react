import React, { useState } from 'react';

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
        <div className="bg-electric-blue/10 rounded-md p-3 flex-shrink-0">
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
        <div className="bg-electric-blue/10 rounded-md p-3 flex-shrink-0">
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
        <div className="bg-electric-blue/10 rounded-md p-3 flex-shrink-0">
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
        <div className="bg-electric-blue/10 rounded-md p-3 flex-shrink-0">
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
        <div className="bg-electric-blue/10 rounded-md p-3 flex-shrink-0">
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

      {/* Pain Points Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-proof/5 to-electric-blue/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/stack-loan-documents.jpg" 
            alt="Stack of Documents" 
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-proof to-electric-blue bg-clip-text text-transparent">
              Pain Points We Eliminate
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Common frustrations our clients faced before finding us
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-red-100 flex items-start gap-6 transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Pain point X icon">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-neutral-800 font-medium">{point}</p>
                  <div className="mt-2 h-1 w-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-24 relative overflow-hidden bg-proof text-white">
        <div className="absolute inset-0 bg-[url('/assets/images/secure-video-signing.png')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-proof to-electric-blue opacity-90"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Our Precision Apostille Solution
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              How we make the complex simple
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white">{solution.action}</h3>
                    <p className="text-white/80 text-lg">{solution.benefit}</p>
                    <div className="mt-4 h-1 w-20 bg-gradient-to-r from-gold to-white/50 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-neutral-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">How It Works (3 Simple Steps)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-proof/10 rounded-full p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Camera icon for Upload or Snap">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Upload or Snap</h3>
              <p className="text-neutral-600">Upload or take a photo of your document—we'll confirm if it's apostille-eligible.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-proof/10 rounded-full p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Location icon for Ship It">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Ship It</h3>
              <p className="text-neutral-600">Receive your prepaid mailer—drop it in any USPS box or use our courier.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-proof/10 rounded-full p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Checkmark icon for Track & Receive">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Track & Receive</h3>
              <p className="text-neutral-600">Get your apostilled originals back at your door—or forwarded to the embassy.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <div className="bg-green-50 border border-green-200 rounded-md p-6 inline-block">
              <p className="text-green-800 font-medium">
                Guarantee: If any apostille we process is rejected, we fix it free—shipping included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Quiz Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-neutral-50"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-proof to-electric-blue bg-clip-text text-transparent">
              Still Unsure If You Need an Apostille?
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Let us help you find the right path forward
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-100 hover:shadow-2xl transition-all duration-300">
              <div className="bg-proof/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-proof text-center">Take Our Quick Quiz</h3>
              <p className="text-neutral-600 mb-6 text-center">30 seconds to find out if you need an apostille</p>
              <button 
                className="w-full bg-proof text-white hover:bg-proof/90 transition-all rounded-lg py-3 px-6 font-semibold shadow-lg hover:shadow-xl"
                aria-label="Start apostille need assessment quiz"
              >
                Start Quiz
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-100 hover:shadow-2xl transition-all duration-300">
              <div className="bg-electric-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-electric-blue text-center">Browse Knowledge Base</h3>
              <p className="text-neutral-600 mb-6 text-center">Find answers to common questions</p>
              <button 
                className="w-full bg-transparent border-2 border-electric-blue text-electric-blue hover:bg-electric-blue/5 transition-all rounded-lg py-3 px-6 font-semibold"
                aria-label="Browse apostille knowledge base articles"
              >
                View Articles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-proof to-electric-blue"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 fade-in">Make Your Documents World-Ready</h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto fade-in-delay leading-relaxed">
            Stop guessing. Start traveling, marrying, studying, or doing business abroad—confident your documents will cross borders as smoothly as you do.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 fade-in-delay">
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-white text-proof hover:bg-neutral-100 transition-all font-semibold rounded-lg text-lg py-5 px-10 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 relative z-50"
            >
              Get My Apostille Now
            </button>
            {/* TODO: Add phone contact for future development */}
            {/* <a 
              href="tel:+14696298932" 
              className="bg-transparent border-2 border-white hover:bg-white/10 transition-all font-semibold rounded-lg text-lg py-5 px-10 text-white relative z-50 flex flex-col items-center"
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
