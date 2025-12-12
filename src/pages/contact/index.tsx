import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const validate = () => {
    if (!name.trim()) return 'Please enter your name';
    if (!email.trim()) return 'Please enter your email';
    // basic email check
    const emailRe = /\S+@\S+\.\S+/;
    if (!emailRe.test(email)) return 'Please enter a valid email address';
    if (!message.trim()) return 'Please enter a message';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setLoading(true);
    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!resp.ok) throw new Error(`Server responded ${resp.status}`);
      setSuccess('Thanks — your message was sent. We will reply shortly.');
      setName(''); setEmail(''); setMessage('');
    } catch (err: any) {
      console.error(err);
      setError(err?.message || 'Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Business Card Background */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/src/assets/images/businesscard.png" 
          alt="" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95"></div>

      <div className="section relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Form */}
          <main className="w-full lg:w-2/3 space-y-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-neutral-300"></span>
              <span className="text-xs uppercase tracking-[0.25em] text-neutral-700">
                Contact
              </span>
              <span className="h-px w-10 bg-neutral-300"></span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-proof mb-6">Contact Us</h1>
            <p className="text-lg text-neutral-700 mb-8">
              Have a question or need a custom quote? Fill out the form below, and we'll get back to you promptly. For immediate assistance, please call or email us directly.
            </p>

          <form className="card space-y-6" onSubmit={handleSubmit} noValidate>
            {error && <div className="text-sm text-red-600 p-3 rounded bg-red-50">{error}</div>}
            {success && <div className="text-sm text-green-700 p-3 rounded bg-green-50">{success}</div>}

            <div>
              <label htmlFor="name" className="block text-neutral-800 font-semibold mb-1">Name</label>
              <input id="name" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded bg-neutral-100 text-neutral-800 border border-neutral-300 focus:border-proof focus:ring-proof outline-none" />
            </div>
            <div>
              <label htmlFor="email" className="block text-neutral-800 font-semibold mb-1">Email</label>
              <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your@email.com" className="w-full px-4 py-2 rounded bg-neutral-100 text-neutral-800 border border-neutral-300 focus:border-proof focus:ring-proof outline-none" />
            </div>
            <div>
              <label htmlFor="message" className="block text-neutral-800 font-semibold mb-1">Message</label>
              <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder="How can we help you?" className="w-full px-4 py-2 rounded bg-neutral-100 text-neutral-800 border border-neutral-300 focus:border-proof focus:ring-proof outline-none" />
            </div>
            <button type="submit" className="btn btn-primary w-full" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
          </form>
        </main>

        {/* Right Column - Sidebar */}
        <aside className="w-full lg:w-1/3 space-y-6">
          {/* Contact Details */}
          <div className="card bg-white">
            <h4 className="text-lg font-bold text-proof mb-4">Contact Information</h4>
            <div className="space-y-4 text-neutral-700">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-electric-blue mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-proof">Email</p>
                  <a href="mailto:contact@bridgenotary.com" className="text-electric-blue hover:underline">
                    contact@bridgenotary.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-electric-blue mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-proof">Service Area</p>
                  <p className="text-sm">Dallas-Fort Worth Metroplex</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-electric-blue mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-proof">Availability</p>
                  <p className="text-sm">Flexible scheduling available</p>
                  <p className="text-sm text-neutral-500">24/7 for RON services</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="card bg-white">
            <h4 className="text-lg font-bold text-proof mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/book" className="flex items-center gap-2 text-electric-blue hover:text-hover-blue transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book an Appointment
              </a>
              <a href="/pricing" className="flex items-center gap-2 text-electric-blue hover:text-hover-blue transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                View Pricing
              </a>
              <a href="/services" className="flex items-center gap-2 text-electric-blue hover:text-hover-blue transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Our Services
              </a>
              <a href="/faq" className="flex items-center gap-2 text-electric-blue hover:text-hover-blue transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                FAQs
              </a>
            </div>
          </div>
        </aside>
        </div>
      </div>
    </div>
  );
};

export default Contact;
