import React from 'react';
import { Link } from 'react-router-dom';
import LoanSigningHero from './Hero';

const LoanSigningPage: React.FC = () => {
  

  const loanTypes = [
    {
      title: "Residential Loans",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      items: ["Purchase Agreements", "Refinancing Documents", "Home Equity Loans", "Reverse Mortgages"]
    },
    {
      title: "Commercial Loans",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      items: ["Commercial Mortgages", "Construction Loans", "Business Loans", "SBA Loan Documents"]
    }
  ];
  
  const benefits = [
    {
      title: "Professional Signing Agents",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: "NNA Certified, E&O Insured, Background-checked signing agents"
    },
    {
      title: "Reliable Service",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: "99% on-time rate, clear communication throughout the process"
    },
    {
      title: "Flexible Scheduling",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      description: "Same-day and rush availability in many areas"
    }
  ];
  
  return (
    <>
      {/* Hero Section - Full Width Cover Style with Video Background */}
      <LoanSigningHero />

      <div className="w-full bg-white">
      {/* Preparation Cards Section - Full Width Background */}
      <section className="w-full bg-white py-20 md:py-28 relative" style={{backgroundImage: `
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px),
        radial-gradient(circle at 20% 30%, rgba(0, 85, 230, 0.08) 0%, transparent 40%), 
        radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.04) 0%, transparent 40%)
      `,
        backgroundSize: '100% 100%, 100% 100%, 100% 100%',
        backgroundAttachment: 'fixed'
      }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
            <span className="text-professional-blue font-semibold text-xs uppercase tracking-[0.2em]">Why Choose Bridge Notary</span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mt-4 mb-6">Trusted by Title Companies & Lenders</h2>
            <p className="text-lg text-charcoal/70">
              We deliver reliability, precision, and professionalism on every signing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Geometric overlays */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-professional-blue/3 -z-10"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-muted-gold/3 -z-10"></div>
            
            {benefits.map((benefit, index) => (
              <div key={index} className="border-l border-professional-blue pl-6 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-professional-blue group-hover:scale-110 transition-transform flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">{benefit.title}</h3>
                </div>
                <p className="text-charcoal/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="w-full bg-white py-20 md:py-28 relative" style={{backgroundImage: `
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px),
        radial-gradient(circle at 20% 40%, rgba(0, 85, 230, 0.05) 0%, transparent 40%), 
        radial-gradient(circle at 80% 60%, rgba(255, 215, 0, 0.03) 0%, transparent 40%)
      `,
        backgroundSize: '100% 100%, 100% 100%, 100% 100%',
        backgroundAttachment: 'fixed'
      }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
            <span className="text-professional-blue font-semibold text-xs uppercase tracking-[0.2em]">Document Types</span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mt-4 mb-6">Loan Documents We Handle</h2>
            <p className="text-lg text-charcoal/70">
              From residential purchases to complex commercial loans, our certified agents are experienced with all document types.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 relative">
            {/* Geometric overlays */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-professional-blue/5 -z-10"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-muted-gold/5 -z-10"></div>
            
            {loanTypes.map((type, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-professional-blue flex-shrink-0 group-hover:scale-110 transition-transform">
                    {type.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-charcoal">{type.title}</h3>
                </div>
                
                <ul className="space-y-2 ml-14">
                  {type.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-professional-blue flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-base text-charcoal/80 leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full bg-off-white py-20 md:py-28 relative" style={{backgroundImage: `
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px),
        radial-gradient(circle at 20% 30%, rgba(0, 85, 230, 0.05) 0%, transparent 40%), 
        radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.03) 0%, transparent 40%)
      `,
        backgroundSize: '100% 100%, 100% 100%, 100% 100%',
        backgroundAttachment: 'fixed'
      }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
            <span className="text-professional-blue font-semibold text-xs uppercase tracking-[0.2em]">Simple Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mt-4 mb-6">How It Works</h2>
            <p className="text-lg text-charcoal/70">
              Three simple steps to a successful loan signing — from scheduling to completion.
            </p>
          </div>
          
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-20 left-1/4 right-1/4 h-1 bg-gradient-to-r from-professional-blue via-professional-blue/50 to-professional-blue" />
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="relative text-center group p-8 border-l border-professional-blue hover:bg-professional-blue/5 transition-colors">
                <div className="mb-6 text-4xl font-bold text-professional-blue">
                  1
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">Schedule</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Book online or call us. Choose your preferred time and location — we come to you.
                </p>
              </div>
              
              <div className="relative text-center group p-8 border-l border-professional-blue hover:bg-professional-blue/5 transition-colors">
                <div className="mb-6 text-4xl font-bold text-professional-blue">
                  2
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">Sign</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Our certified agent arrives prepared, reviews documents, and guides you through each signature.
                </p>
              </div>
              
              <div className="relative text-center group p-8 border-l border-professional-blue hover:bg-professional-blue/5 transition-colors">
                <div className="mb-6 text-4xl font-bold text-professional-blue">
                  3
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">Close</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Documents are notarized, scanned, and returned same-day. Your closing is complete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-gradient-to-br from-proof via-electric-blue to-proof py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,215,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,70,250,0.15),transparent_50%)]" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Schedule Your Signing?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Trusted by title companies and lenders nationwide. Same-day availability with certified, professional signing agents.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 bg-white text-proof hover:bg-neutral-100 transition-all font-semibold text-lg px-10 py-5 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule Your Signing
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default LoanSigningPage;
