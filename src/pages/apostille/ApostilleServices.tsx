import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await fetch('/api/apostille', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setShowContactForm(false);
          setSubmitted(false);
          setFormData({ name: '', email: '', documentTypes: [], destinationCountry: '', comments: '' });
        }, 2000);
      } else {
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting apostille form:', error);
      alert('An error occurred. Please try again or call us at (469) 629-8932.');
    }
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
    { title: "Confusing Guidelines", description: "Every state (and the U.S. State Dept.) has its own forms, fees, and mailing quirks." },
    { title: "Time-Sensitive Deadlines", description: "Visas, court dates, and wedding planners don't wait for slow mail." },
    { title: "Costly Rejections", description: "One missing seal and you pay for re-shipping, new copies, even trip rescheduling." },
    { title: "No Status Visibility", description: "Government offices rarely tell you where your paperwork sits in the pile." },
    { title: "Lost Workdays", description: "Queueing at county clerks or FedEx counters steals hours you could spend planning your move." },
    { title: "Language Barriers", description: "Many foreign consulates require specific terminology and formatting in English or translated documents." }
  ];

  return (
    <div className="w-full bg-white">

      {/* Pain Points Section - Government Document Aesthetic */}
      <section className="w-full py-20 md:py-28 bg-white border-t border-professional-blue/10 relative" style={{backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(0, 85, 230, 0.08) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.04) 0%, transparent 40%)'}}>'
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest text-professional-blue uppercase mb-3 bg-professional-blue/10 px-4 py-2">The Challenge</span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Why DIY Apostille Fails</h2>
            <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">These obstacles derail most people. We eliminate every one.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <div key={index} className="border-l border-professional-blue/30 pl-6 py-4 group hover:bg-professional-blue/3 transition-all rounded-sm">
                <div className="flex items-start gap-4\">
                  <div className="flex-shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center">
                    <svg className="h-5 w-5 text-professional-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M13.477 14.89A6 6 0 112.5 5.5a6 6 0 0110.977 9.39z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-charcoal mb-1 text-base">{point.title}</h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Network Model Section */}
      <section className="py-20 md:py-28 bg-professional-blue/5 border-y border-professional-blue/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest text-professional-blue uppercase mb-3 bg-professional-blue/10 px-4 py-2">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Partner Network Model</h2>
            <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">Bridge Notary connects you with certified partners, then handles secure delivery to Texas SOS.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-professional-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Connect with Partner</h3>
              <p className="text-charcoal/70">We match you with a certified notary partner in your area for document preparation and notarization.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-professional-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Bridge to TX SOS</h3>
              <p className="text-charcoal/70">Bridge Notary handles secure courier service directly to the Texas Secretary of State for official apostille processing.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-professional-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Secure Delivery</h3>
              <p className="text-charcoal/70">Receive your apostilled documents back via secure, trackable courier service - fully authenticated and ready for international use.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white border-l border-professional-blue p-6 max-w-2xl mx-auto">
              <p className="text-charcoal/80 font-medium">
                <span className="text-professional-blue font-semibold">Note:</span> Bridge Notary specializes in connecting clients with our trusted notary partner network and providing secure courier services to Texas SOS. We do not perform notarizations directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apostille Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Apostille Services</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">Choose your situation below to learn more about how we handle your specific apostille needs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/overseas-property" className="border-l border-professional-blue pl-6 py-6 group hover:scale-105 transition-transform cursor-pointer">
              <h3 className="text-xl font-bold text-charcoal mb-2">Overseas Property</h3>
              <p className="text-charcoal/70 mb-4 text-sm">Authenticate deeds and real estate documents for international property purchases</p>
              <span className="inline-flex items-center gap-2 text-professional-blue text-sm font-semibold group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link to="/dual-citizenship" className="border-l border-professional-blue pl-6 py-6 group hover:scale-105 transition-transform cursor-pointer">
              <h3 className="text-xl font-bold text-charcoal mb-2">Dual Citizenship</h3>
              <p className="text-charcoal/70 mb-4 text-sm">Certify vital records and legal documents for citizenship applications</p>
              <span className="inline-flex items-center gap-2 text-professional-blue text-sm font-semibold group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link to="/study-abroad" className="border-l border-professional-blue pl-6 py-6 group hover:scale-105 transition-transform cursor-pointer">
              <h3 className="text-xl font-bold text-charcoal mb-2">Study Abroad</h3>
              <p className="text-charcoal/70 mb-4 text-sm">Authenticate educational records for international university applications</p>
              <span className="inline-flex items-center gap-2 text-professional-blue text-sm font-semibold group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link to="/international-adoption" className="border-l border-professional-blue pl-6 py-6 group hover:scale-105 transition-transform cursor-pointer">
              <h3 className="text-xl font-bold text-charcoal mb-2">International Adoption</h3>
              <p className="text-charcoal/70 mb-4 text-sm">Authenticate legal documents for international adoption proceedings</p>
              <span className="inline-flex items-center gap-2 text-professional-blue text-sm font-semibold group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Solution Section - Government Document Aesthetic */}
      <section className="w-full py-20 md:py-28 bg-white relative" style={{backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(0, 85, 230, 0.08) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.04) 0%, transparent 40%)'}}>'
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest text-professional-blue uppercase mb-3 bg-professional-blue/10 px-4 py-2">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">How We Solve It</h2>
            <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">Every step handled by our expert team—you stay informed throughout.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="border-l border-professional-blue/30 pl-6 py-4 group hover:bg-professional-blue/3 transition-all rounded-sm\">
                <div className="flex items-start gap-3\">
                  <div className="flex-shrink-0 mt-0.5">
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-charcoal mb-1">{solution.action}</h3>
                    <p className="text-sm text-charcoal/70 leading-relaxed">{solution.benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courier Services & Process Section */}
      <section className="w-full bg-white py-20 md:py-28 relative" style={{backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(0, 85, 230, 0.08) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.04) 0%, transparent 40%)'}}>'
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest text-professional-blue uppercase mb-3 bg-professional-blue/10 px-4 py-2">End-to-End Delivery</span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Your Apostille Journey</h2>
            <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">From submission to delivery, we handle every step with professional expertise and complete transparency.</p>
          </div>

          {/* Four-Step Process */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              {
                step: '1',
                title: 'You Submit',
                desc: 'Upload documents securely or arrange local courier pickup in DFW.'
              },
              {
                step: '2',
                title: 'We Courier',
                desc: 'Our professional network routes documents to the correct government office.'
              },
              {
                step: '3',
                title: 'Government Issues',
                desc: 'Authority applies apostille seal and processes your documents.'
              },
              {
                step: '4',
                title: 'Return to You',
                desc: 'Authenticated documents delivered securely with full tracking.'
              }
            ].map((item, idx) => (
              <div key={idx} className="border-l border-professional-blue/40 pl-6 group hover:bg-professional-blue/5 transition-all py-1">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-professional-blue text-white flex items-center justify-center font-bold text-sm">{item.step}</div>
                </div>
                <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Why Our Network Matters */}
          <div className="border-l border-professional-blue/40 pl-6 py-8 mb-12">
            <h3 className="text-2xl font-bold text-charcoal mb-8">Why Our Courier Network Matters</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Reliable Local Pickup',
                  desc: 'Professional couriers throughout DFW. Flexible scheduling at your convenience.'
                },
                {
                  title: 'Direct Routing',
                  desc: 'We identify the correct office—no misdirected documents or processing delays.'
                },
                {
                  title: 'Real-Time Tracking',
                  desc: 'SMS updates and secure portal access from submission through delivery.'
                },
                {
                  title: 'Secure Handling',
                  desc: 'Tamper-evident packaging, chain-of-custody documentation, full accountability.'
                }
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-professional-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal mb-1">{benefit.title}</h4>
                    <p className="text-sm text-charcoal/70 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Opportunity */}
          <div className="border-l border-professional-blue/40 pl-6 py-8">
            <div className="flex items-start gap-4">
              <svg className="h-6 w-6 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v2h8v-2zM16 11a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              <div className="flex-1">
                <h4 className="font-bold text-charcoal mb-2">Join Our Professional Network</h4>
                <p className="text-sm text-charcoal/70 mb-4">We're always looking for reliable couriers and notaries in the DFW area to expand our service capability. If you're interested in partnership opportunities, we'd love to talk.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-professional-blue hover:text-professional-blue/80 font-semibold text-sm transition-colors group">
                  Explore Opportunities
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Quiz CTA - Simplified */}
      <section className="w-full bg-white py-20 md:py-28 relative" style={{backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(0, 85, 230, 0.08) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.04) 0%, transparent 40%)'}}>'
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

      {/* Final CTA Section - Make Your Documents World-Ready */}
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Apostille Services You Can Trust</h2>
          <p className="text-lg md:text-xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed">
            Every country has different apostille requirements. We handle the authentication and secure courier service. For legal questions about what documents you need, consult the relevant foreign agency or an attorney.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={() => navigate('/book')}
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
