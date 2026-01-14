import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../shared/Image';

interface ScenarioType {
  situation: string;
  documents: string;
  gotcha: string;
  icon: string;
}

interface SolutionType {
  action: string;
  benefit: string;
  icon: string;
}

const ApostilleServices: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const commonScenarios: ScenarioType[] = [
    {
      situation: 'Destination Wedding',
      documents: 'Birth certificates, single-status affidavit',
      gotcha: 'Foreign consulate may reject if not apostilled',
      icon: '💒'
    },
    {
      situation: 'Study or Work Abroad',
      documents: 'Diplomas, FBI background checks',
      gotcha: 'Each state/federal doc follows a different route',
      icon: '🎓'
    },
    {
      situation: 'International Adoption',
      documents: 'Home-study, medical exams',
      gotcha: 'Tight embassy deadlines & translations',
      icon: '👶'
    },
    {
      situation: 'Dual Citizenship',
      documents: 'Naturalization records, vital records',
      gotcha: 'Wrong seal = entire application delayed',
      icon: '🌎'
    },
    {
      situation: 'Overseas Property Purchase',
      documents: 'Power of Attorney',
      gotcha: 'Needs both notarization and apostille in sequence',
      icon: '🏠'
    }
  ];

  const solutions: SolutionType[] = [
    {
      action: 'Door-to-door courier or priority mail service',
      benefit: 'No office visits—handle everything from your couch',
      icon: '📦'
    },
    {
      action: 'Pre-review & triple-check of every document',
      benefit: 'Zero rejections or do-overs',
      icon: '✅'
    },
    {
      action: 'Same-day dispatch to correct authority',
      benefit: '3- to 5-day turnaround (rush options available)',
      icon: '⚡'
    },
    {
      action: 'Real-time tracking portal + SMS updates',
      benefit: 'Total visibility—know when each seal is applied',
      icon: '📱'
    },
    {
      action: 'Secure return in tamper-evident pouch',
      benefit: 'Documents arrive flight-ready and pristine',
      icon: '🔒'
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
              {/* Add appropriate hero image here */}
              <div className="bg-neutral-100 rounded-lg aspect-4/3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Scenarios Section */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Common Scenarios We Handle</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonScenarios.map((scenario, index) => (
              <div key={index} className="card p-6">
                <div className="text-4xl mb-4">{scenario.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{scenario.situation}</h3>
                <p className="text-neutral-600 mb-2">
                  <strong>Typical Documents:</strong><br />
                  {scenario.documents}
                </p>
                <p className="text-red-600 text-sm">
                  <strong>Watch Out:</strong><br />
                  {scenario.gotcha}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="bg-neutral-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Pain Points We Eliminate</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                  {index + 1}
                </div>
                <p className="text-neutral-700">{point}</p>
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
              <div key={index} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{solution.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-2">{solution.action}</h3>
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
            <div className="text-center">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-semibold mb-2">1. Upload or Snap</h3>
              <p className="text-neutral-600">Upload or take a photo of your document—we'll confirm if it's apostille-eligible.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📬</div>
              <h3 className="text-xl font-semibold mb-2">2. Ship It</h3>
              <p className="text-neutral-600">Receive your prepaid mailer—drop it in any USPS box or use our courier.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-semibold mb-2">3. Track & Receive</h3>
              <p className="text-neutral-600">Get your apostilled originals back at your door—or forwarded to the embassy.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 inline-block">
              <p className="text-green-800 font-medium">
                Guarantee: If any apostille we process is rejected, we fix it free—shipping included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Quiz Section */}
      <section className="section">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Still Unsure If You Need an Apostille?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Take Our Quick Quiz</h3>
              <p className="text-neutral-600 mb-4">30 seconds to find out if you need an apostille</p>
              <button className="button-primary">Start Quiz</button>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Browse Knowledge Base</h3>
              <p className="text-neutral-600 mb-4">Find answers to common questions</p>
              <button className="button-outline">View Articles</button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-proof text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to make your paperwork world-ready?</h2>
          <p className="text-lg mb-8">Stop guessing. Start traveling, marrying, studying, or doing business abroad—confident your documents will cross borders as smoothly as you do.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setShowContactForm(true)}
              className="button-primary bg-white text-proof text-lg py-4 px-8"
            >
              Get My Apostille Now
            </button>
            <div className="text-center">
              <p className="mb-2">Phone preference?</p>
              <a href="tel:5551234567" className="text-xl font-semibold hover:text-white/80">
                (555) 123-4567
              </a>
              <p className="text-sm mt-1">Free 5-minute consult</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg max-w-xl w-full p-6">
            <h3 className="text-2xl font-semibold mb-4">Start Your Apostille Process</h3>
            {/* Add your contact form here */}
            <button 
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700"
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
