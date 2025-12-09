import { useEffect, useRef } from 'react';

const BridgeNotaryPro = () => {
  const leadFormRef = useRef(null);

  const scrollToForm = () => {
    leadFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const downloadKit = () => {
    const firstNameInput = document.getElementById('firstName') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const firstName = firstNameInput.value;
    const email = emailInput.value;

    if (!firstName || !email) {
      alert('Please fill in both your name and email address.');
      return;
    }

    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    alert(`Thanks ${firstName}! Your Success Kit is being prepared. Check your email (${email}) in the next few minutes for your download link.`);

    firstNameInput.value = '';
    emailInput.value = '';
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-delay');
    fadeElements.forEach(el => observer.observe(el));

    return () => fadeElements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="bg-neutral-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-proof rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                  </path>
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-proof">Bridge Notary Pro</h1>
            </div>
            <div className="text-sm text-neutral-600">Your Success Solution Kit</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-proof text-white py-16">
        {/* Background image with overlay */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/src/assets/images/stack-loan-documents.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-proof/70"></div>
        
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Stop Losing Clients to More Professional Notaries
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white">
              Get your <strong className="text-white">FREE Beginner Success Kit</strong> and start attracting clients who see you as the
              trusted professional you already are.
            </p>
            <button onClick={scrollToForm}
              className="cta-button text-white px-8 py-4 rounded-xl text-lg font-semibold">
              Get My Free Success Kit
            </button>
            <p className="text-white mt-4">No commitment • Instant download</p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section">
        <div className="text-center mb-12 fade-in">
          <h3 className="text-4xl font-bold text-proof mb-4">Does This Sound Familiar?</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="card fade-in">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-neutral-800 mb-4">"I'll call you back..."</h4>
            <p className="text-neutral-700">
              Sarah was excited—her first real client call! But when asked for a website and business card,
              she didn't have either. The client found someone else with a polished presence and clear
              communication.
            </p>
          </div>

          <div className="card fade-in-delay">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H10a2 2 0 00-2-2V6m8 0h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2"></path>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-neutral-800 mb-4">The Client That Slipped Away</h4>
            <p className="text-neutral-700">
              Mike got certified and ready—but after months, barely booked any signings. His peer, Jennifer,
              was fully booked... because she looked ready from day one.
            </p>
          </div>

          <div className="card fade-in">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-neutral-800 mb-4">"Am I Doing This Right?"</h4>
            <p className="text-neutral-700">
              Lisa second-guessed everything. She was professional, but lacked tools, confidence, and clarity.
              She didn't just want to notarize—she wanted to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section ref={leadFormRef} className="relative bg-proof text-white py-16">
        {/* Background image with overlay */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/src/assets/images/stack-loan-documents.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-proof/70"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center fade-in">
            <div className="flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <h3 className="text-4xl font-bold">Download Your Kit</h3>
            </div>

            <div className="card text-neutral-800">
              <div className="space-y-6">
                <div>
                  <label htmlFor="firstName" className="block text-left font-semibold mb-2">First Name</label>
                  <input type="text" id="firstName"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                    placeholder="Enter your first name" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-left font-semibold mb-2">Email Address</label>
                  <input type="email" id="email"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                    placeholder="Enter your email address" />
                </div>

                <button onClick={downloadKit}
                  className="w-full cta-button text-white px-8 py-4 rounded-xl text-lg font-semibold">
                  Get My Free Success Kit
                </button>

                <p className="text-sm text-neutral-600">100% Free • No spam • Instant access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-4">
            <h4 className="text-2xl font-bold">Bridge Notary Pro</h4>
            <p className="text-neutral-400">Helping notaries build professional, profitable businesses from day one.</p>
          </div>
          <p className="text-neutral-500 text-sm">© 2025 Bridge Notary Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BridgeNotaryPro;
