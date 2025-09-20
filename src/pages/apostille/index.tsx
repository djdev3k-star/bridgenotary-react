import React, { useState } from 'react';

interface SolutionType {
  action: string;
  benefit: string;
  icon: React.ReactNode;
}

const ApostillePage: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const solutions: SolutionType[] = [
    {
      action: 'Door-to-door courier or priority mail service',
      benefit: 'No office visits—handle everything from your couch',
      icon: (
        <div className="bg-electric-blue/10 rounded-full p-3 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
        </div>
      )
    },
    {
      action: 'Pre-review & triple-check of every document',
      benefit: 'Zero rejections or do-overs',
      icon: (
        <div className="bg-electric-blue/10 rounded-full p-3 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
      )
    },
    {
      action: 'Same-day dispatch to correct authority',
      benefit: '3- to 5-day turnaround (rush options available)',
      icon: (
        <div className="bg-electric-blue/10 rounded-full p-3 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      )
    },
    {
      action: 'Real-time tracking portal + SMS updates',
      benefit: 'Total visibility—know when each seal is applied',
      icon: (
        <div className="bg-electric-blue/10 rounded-full p-3 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        </div>
      )
    },
    {
      action: 'Secure return in tamper-evident pouch',
      benefit: 'Documents arrive flight-ready and pristine',
      icon: (
        <div className="bg-electric-blue/10 rounded-full p-3 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

  // Important tips from the scenarios (repurposed)
  const importantTips = [
    {
      scenario: 'Destination Wedding',
      tip: 'Foreign consulate may reject if not apostilled'
    },
    {
      scenario: 'Study or Work Abroad',
      tip: 'Each state/federal doc follows a different route'
    },
    {
      scenario: 'International Adoption',
      tip: 'Tight embassy deadlines & translations need special attention'
    },
    {
      scenario: 'Dual Citizenship',
      tip: 'Wrong seal = entire application delayed'
    },
    {
      scenario: 'Overseas Property Purchase',
      tip: 'Needs both notarization and apostille in sequence'
    }
  ];

  return (
      <div className="w-full bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-proof/10 to-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-proof mb-6">
                  Need Your U.S. Documents Accepted Abroad?
                </h1>
                <p className="text-xl text-neutral-600 mb-8">
                  Skip the Paperwork Maze—We'll Apostille It for You. Whether it's for a destination wedding in Italy, teaching in Japan, or adopting from Colombia, we get your documents stamped, sealed, and ready—without the guesswork.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="button-primary text-lg py-4 px-8"
                  >
                    Start My Apostille
                  </button>
                  <button className="button-outline text-lg py-4 px-8">
                    Chat With an Expert
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-neutral-100 rounded-xl shadow-md w-full h-96 p-6 flex flex-col items-center justify-center">
                  <div className="bg-proof/10 rounded-full p-6 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-proof mb-2">Document Apostille</h3>
                  <p className="text-neutral-600 text-center">Professional document authentication services for international use</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Scenarios Section */}
        <section className="section">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12">Common Scenarios We Handle</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card p-6 hover:shadow-lg transition-all overflow-hidden">
                <div className="flex justify-center mb-4 h-48 overflow-hidden">
                  <img 
                    src="/src/assets/images/destination-wedding.png" 
                    alt="Destination Wedding" 
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Destination Wedding</h3>
                <div className="bg-neutral-50 rounded-lg p-4">
                  <p className="text-neutral-700 mb-2">
                    <span className="text-proof font-medium">Typical Documents:</span>
                  </p>
                  <p className="text-neutral-600">Birth certificates, single-status affidavit</p>
                </div>
              </div>
              
              <div className="card p-6 hover:shadow-lg transition-all overflow-hidden">
                <div className="flex justify-center mb-4 h-48 overflow-hidden">
                  <img 
                    src="/src/assets/images/study-abroad.png" 
                    alt="Study or Work Abroad" 
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Study or Work Abroad</h3>
                <div className="bg-neutral-50 rounded-lg p-4">
                  <p className="text-neutral-700 mb-2">
                    <span className="text-proof font-medium">Typical Documents:</span>
                  </p>
                  <p className="text-neutral-600">Diplomas, FBI background checks</p>
                </div>
              </div>
              
              <div className="card p-6 hover:shadow-lg transition-all overflow-hidden">
                <div className="flex justify-center mb-4 h-48 overflow-hidden">
                  <img 
                    src="/src/assets/images/international-adoption.png" 
                    alt="International Adoption" 
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">International Adoption</h3>
                <div className="bg-neutral-50 rounded-lg p-4">
                  <p className="text-neutral-700 mb-2">
                    <span className="text-proof font-medium">Typical Documents:</span>
                  </p>
                  <p className="text-neutral-600">Home-study, medical exams</p>
                </div>
              </div>
              
              <div className="card p-6 hover:shadow-lg transition-all overflow-hidden">
                <div className="flex justify-center mb-4 h-48 overflow-hidden">
                  <img 
                    src="/src/assets/images/dual-citizenship.png" 
                    alt="Dual Citizenship" 
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Dual Citizenship</h3>
                <div className="bg-neutral-50 rounded-lg p-4">
                  <p className="text-neutral-700 mb-2">
                    <span className="text-proof font-medium">Typical Documents:</span>
                  </p>
                  <p className="text-neutral-600">Naturalization records, vital records</p>
                </div>
              </div>
              
              <div className="card p-6 hover:shadow-lg transition-all overflow-hidden">
                <div className="flex justify-center mb-4 h-48 overflow-hidden">
                  <img 
                    src="/src/assets/images/overseas-property.png" 
                    alt="Overseas Property Purchase" 
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Overseas Property Purchase</h3>
                <div className="bg-neutral-50 rounded-lg p-4">
                  <p className="text-neutral-700 mb-2">
                    <span className="text-proof font-medium">Typical Documents:</span>
                  </p>
                  <p className="text-neutral-600">Power of Attorney</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Tips Section - Repurposed from the "gotchas" */}
        <section className="bg-electric-blue/5 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-semibold text-center mb-8">Important Tips For Your Apostille</h2>
              <div className="divide-y">
                {importantTips.map((item, index) => (
                  <div key={index} className="py-4 flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-electric-blue/10 rounded-full flex items-center justify-center text-electric-blue mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-proof">{item.scenario}:</h3>
                      <p className="text-neutral-600">{item.tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="bg-neutral-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12">Pain Points We Eliminate</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {painPoints.map((point, index) => (
                <div key={index} className="card p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-electric-blue/10 rounded-full flex items-center justify-center text-electric-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-neutral-700">{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Solution Section */}
        <section className="section">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12">Our Precision Apostille Solution</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="card p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    {solution.icon}
                    <div>
                      <h3 className="font-semibold text-xl text-proof mb-2">{solution.action}</h3>
                      <p className="text-neutral-600">{solution.benefit}</p>
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
              <div className="card p-6 hover:shadow-lg transition-all text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-electric-blue/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <span className="text-electric-blue font-bold text-xl">1</span>
                  </div>
                </div>
                <div className="mb-4 h-40 flex items-center justify-center">
                  <img 
                    src="/src/assets/images/upload-documents.png" 
                    alt="Upload your documents" 
                    className="h-32 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload or Snap</h3>
                <p className="text-neutral-600">Upload or take a photo of your document—we'll confirm if it's apostille-eligible.</p>
              </div>
              <div className="card p-6 hover:shadow-lg transition-all text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-electric-blue/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <span className="text-electric-blue font-bold text-xl">2</span>
                  </div>
                </div>
                <div className="mb-4 h-40 flex items-center justify-center">
                  <img 
                    src="/src/assets/images/Verify-identity.png" 
                    alt="Verify your identity" 
                    className="h-32 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ship It</h3>
                <p className="text-neutral-600">Receive your prepaid mailer—drop it in any USPS box or use our courier.</p>
              </div>
              <div className="card p-6 hover:shadow-lg transition-all text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-electric-blue/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <span className="text-electric-blue font-bold text-xl">3</span>
                  </div>
                </div>
                <div className="mb-4 h-40 flex items-center justify-center">
                  <img 
                    src="/src/assets/images/secure-video-signing.png" 
                    alt="Secure document handling" 
                    className="h-32 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Track & Receive</h3>
                <p className="text-neutral-600">Get your apostilled originals back at your door—or forwarded to the embassy.</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <div className="card p-6 inline-block border-l-4 border-green-500">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <p className="text-green-800 font-medium">
                    Guarantee: If any apostille we process is rejected, we fix it free—shipping included.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Quiz Section */}
        <section className="section">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-12">Still Unsure If You Need an Apostille?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-6 hover:shadow-lg transition-all text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-proof/10 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-proof mb-4">Take Our Apostille Quiz</h3>
                <p className="text-neutral-600 mb-4">Test your knowledge about apostilles with our interactive quiz</p>
                <a href="/apostille/quiz" className="button-primary inline-block">Start Quiz</a>
              </div>
              <div className="card p-6 hover:shadow-lg transition-all text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-proof/10 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-proof mb-4">Browse Knowledge Base</h3>
                <p className="text-neutral-600 mb-4">Find answers to common questions</p>
                <button className="button-outline">View Articles</button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-100">
              <div className="md:flex items-center">
                <div className="md:w-1/3 p-8 overflow-hidden hidden md:block">
                  <div className="bg-gradient-to-r from-proof/10 to-electric-blue/10 rounded-lg shadow-md h-full flex items-center justify-center p-6">
                    <div className="text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-proof mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                      <h4 className="text-lg font-medium text-proof">Global Document Services</h4>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-proof mb-6">Ready to make your paperwork world-ready?</h2>
                  <p className="text-lg text-neutral-600 mb-8">Stop guessing. Start traveling, marrying, studying, or doing business abroad—confident your documents will cross borders as smoothly as you do.</p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => setShowContactForm(true)}
                      className="button-primary py-3 px-6 text-lg"
                    >
                      Get My Apostille Now
                    </button>
                    <a href="tel:+14696298932" className="button-outline py-3 px-6 text-lg flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      (469) 629-8932
                    </a>
                  </div>
                  <p className="text-sm mt-4 text-neutral-600">Free 5-minute phone consult available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

  {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl max-w-xl w-full p-8 relative">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-proof mb-2">Start Your Apostille Process</h3>
                <p className="text-neutral-600">Fill out the form below and we'll get back to you within 1 business day.</p>
              </div>
              
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      placeholder="Your first name"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue" 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      placeholder="Your last name"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="your@email.com" 
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue" 
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="(123) 456-7890" 
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue" 
                  />
                </div>
                
                <div>
                  <label htmlFor="documents" className="block text-sm font-medium text-neutral-700 mb-1">What documents need apostille?</label>
                  <textarea 
                    id="documents" 
                    name="documents" 
                    rows={3} 
                    placeholder="List the documents you need apostilled"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-neutral-700 mb-1">Destination Country</label>
                  <select 
                    id="country" 
                    name="country" 
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue"
                    aria-label="Select destination country"
                  >
                    <option value="">Select a country</option>
                    <option>Mexico</option>
                    <option>United Kingdom</option>
                    <option>Spain</option>
                    <option>Italy</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="pt-2">
                  <button className="w-full button-primary py-3">Submit Request</button>
                </div>
              </div>
              
              <button 
                onClick={() => setShowContactForm(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 p-2 rounded-full hover:bg-neutral-100 transition-colors"
                aria-label="Close form"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
  </div>
  );
};

export default ApostillePage;
