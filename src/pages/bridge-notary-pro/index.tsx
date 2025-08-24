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
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                  </path>
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">Bridge Notary Pro</h1>
            </div>
            <div className="text-sm text-gray-600">Your Success Solution Kit</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Stop Losing Clients to More Professional Notaries
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Get your <strong>FREE Beginner Success Kit</strong> and start attracting clients who see you as the
              trusted professional you already are.
            </p>
            <button onClick={scrollToForm}
              className="bg-success hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 pulse-button">
              ✅ Get My Free Success Kit
            </button>
            <p className="text-blue-200 mt-4">No commitment • Instant download</p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">❓ Does This Sound Familiar?</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100 fade-in card-hover">
              <div className="text-4xl mb-4">📞</div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">"I'll call you back..."</h4>
              <p className="text-gray-600">
                Sarah was excited—her first real client call! But when asked for a website and business card,
                she didn't have either. The client found someone else with a polished presence and clear
                communication.
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100 fade-in-delay card-hover">
              <div className="text-4xl mb-4">💼</div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">The Client That Slipped Away</h4>
              <p className="text-gray-600">
                Mike got certified and ready—but after months, barely booked any signings. His peer, Jennifer,
                was fully booked... because she looked ready from day one.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-100 fade-in card-hover">
              <div className="text-4xl mb-4">😰</div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">"Am I Doing This Right?"</h4>
              <p className="text-gray-600">
                Lisa second-guessed everything. She was professional, but lacked tools, confidence, and clarity.
                She didn't just want to notarize—she wanted to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section ref={leadFormRef} className="py-16 bg-success text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center fade-in">
            <h3 className="text-4xl font-bold mb-8">👇 Download Your Kit</h3>

            <div className="bg-white rounded-2xl p-8 text-gray-800">
              <div className="space-y-6">
                <div>
                  <label htmlFor="firstName" className="block text-left font-semibold mb-2">First Name</label>
                  <input type="text" id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-success focus:border-transparent"
                    placeholder="Enter your first name" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-left font-semibold mb-2">Email Address</label>
                  <input type="email" id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-success focus:border-transparent"
                    placeholder="Enter your email address" />
                </div>

                <button onClick={downloadKit}
                  className="w-full bg-success hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Get My Free Success Kit
                </button>

                <p className="text-sm text-gray-600">100% Free • No spam • Instant access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h4 className="text-2xl font-bold">Bridge Notary Pro</h4>
            <p className="text-gray-400">Helping notaries build professional, profitable businesses from day one.</p>
          </div>
          <p className="text-gray-500 text-sm">© 2025 Bridge Notary Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BridgeNotaryPro;
