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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    documentTypes: [] as string[],
    destinationCountry: '',
    comments: '',
  });

  const documentOptions = [
    'Birth Certificate',
    'Marriage Certificate',
    'Power of Attorney',
    'Diploma / Transcript',
    'FBI Background Check',
    'Business Documents',
    'Single Status Affidavit',
    'Other',
  ];
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type, multiple, options } = e.target as HTMLInputElement & HTMLSelectElement;
    if (name === 'documentTypes' && multiple) {
      const selected: string[] = [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) selected.push(options[i].value);
      }
      setFormData((prev) => ({ ...prev, documentTypes: selected }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowContactForm(false);
      setSubmitted(false);
      setFormData({ name: '', email: '', documentTypes: [], destinationCountry: '', comments: '' });
    }, 1500);
  }

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

      {/* Pain Points Section - Redesigned with left-border cards */}
      <section className="bg-off-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Why People Get Stuck</h2>
          <p className="text-xl text-charcoal/70 mb-12 max-w-3xl">These common roadblocks stop most DIY apostille attempts. We've solved all of them.</p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {painPoints.map((point, index) => (
              <div key={index} className="p-6 border-l-4 border-professional-blue group hover:bg-professional-blue/5 transition-colors">
                <p className="text-charcoal leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution Section - Redesigned */}
      <section className="bg-white py-20 md:py-28" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">How We Solve It</h2>
          <p className="text-xl text-charcoal/70 mb-12 max-w-3xl">Every step is handled by our team so you don't have to.</p>
        </div>
        
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="p-6 border-l-4 border-professional-blue group hover:bg-professional-blue/5 transition-colors">
                <h3 className="text-lg font-bold text-charcoal mb-2">{solution.action}</h3>
                <p className="text-charcoal/70">{solution.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Redesigned */}
      <section className="bg-off-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-16 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-professional-blue text-white rounded-full font-bold text-xl mb-4">1</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Secure Upload</h3>
              <p className="text-charcoal/70">Send your documents through our encrypted portal. Only Bridge Notary accesses your files.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-professional-blue text-white rounded-full font-bold text-xl mb-4">2</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">We Handle It</h3>
              <p className="text-charcoal/70">Our team manages shipping, processing, and apostille application.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-professional-blue text-white rounded-full font-bold text-xl mb-4">3</div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Receive Complete</h3>
              <p className="text-charcoal/70">Apostilled documents delivered ready to use internationally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Quiz CTA - Simplified */}
      <section className="bg-white py-20 md:py-28" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
        <div className="max-w-3xl mx-auto px-6">
          {/* Disclaimer */}
          <div className="bg-charcoal/5 border-l-4 border-charcoal/30 p-6 mb-12 rounded-r-lg">
            <p className="text-sm text-charcoal/70 leading-relaxed">
              <span className="font-semibold text-charcoal">Important Disclaimer:</span> Bridge Notary is not a law firm and does not provide legal advice. We provide notarization and apostille services only. For questions about document requirements, visa applications, or legal implications specific to your situation, please consult with an immigration attorney or legal professional in your destination country.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Still Not Sure If You Need an Apostille?</h2>
          <p className="text-lg text-charcoal/70 mb-8">Take our quick 30-second quiz to find out what documents need authentication.</p>
          <button 
            onClick={() => navigate('/apostille/quiz')}
            className="inline-flex items-center justify-center gap-2 bg-professional-blue text-white hover:bg-professional-blue/90 font-semibold py-4 px-10 transition-all"
            aria-label="Start apostille need assessment quiz"
          >
            Start the Quiz
          </button>
        </div>
      </section>

      {/* Final CTA Section - Redesigned */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0">
          <img 
            src="/images/study-abroad.png" 
            alt="Study Abroad Documents" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-professional-blue/70"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Make Your Documents World-Ready</h2>
          <p className="text-lg md:text-xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stop worrying about apostille requirements. Let our experts handle the complexity so your documents cross borders without delays.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={() => navigate('/apostille/quiz-start')}
              className="bg-white text-professional-blue hover:bg-off-white transition-all font-semibold text-lg py-4 px-10 relative z-50"
            >
              Get Started Now
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-professional-blue transition-all font-semibold text-lg py-4 px-10 relative z-50"
            >
              Contact a Specialist
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white max-w-xl w-full p-8 relative">
            <button 
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-charcoal/40 hover:text-charcoal text-2xl"
              aria-label="Close contact form"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-charcoal mb-2">Start Your Apostille Process</h3>
            <p className="text-charcoal/70 mb-6">Fill out this quick form and our team will reach out to guide you through the next steps.</p>
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-professional-blue text-4xl mb-2">✓</div>
                <div className="text-charcoal font-semibold">Thank you! We'll be in touch soon.</div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border border-professional-blue/20 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-professional-blue/20 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-professional-blue/20 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-professional-blue/20 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="documentTypes" className="block text-sm font-medium text-charcoal mb-2">Type of Document(s)</label>
                  <select
                    id="documentTypes"
                    name="documentTypes"
                    multiple
                    value={formData.documentTypes}
                    onChange={handleInputChange}
                    className="w-full border border-professional-blue/20 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-professional-blue/20 focus:border-transparent transition-all bg-white"
                    required
                  >
                    {documentOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <p className="text-xs text-charcoal/50 mt-1">Hold Ctrl (Windows) or Cmd (Mac) to select multiple.</p>
                </div>
                <div>
                  <label htmlFor="destinationCountry" className="block text-sm font-medium text-charcoal mb-2">Destination Country</label>
                  <input
                    type="text"
                    id="destinationCountry"
                    name="destinationCountry"
                    value={formData.destinationCountry}
                    onChange={handleInputChange}
                    className="w-full border border-professional-blue/20 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-professional-blue/20 focus:border-transparent transition-all"
                    placeholder="e.g. Italy, India, Mexico"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="comments" className="block text-sm font-medium text-charcoal mb-2">Comments (optional)</label>
                  <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    className="w-full border border-professional-blue/20 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-professional-blue/20 focus:border-transparent transition-all"
                    rows={2}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-professional-blue text-white font-semibold py-3 hover:bg-professional-blue/90 transition-all mt-2"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ApostilleServices;
