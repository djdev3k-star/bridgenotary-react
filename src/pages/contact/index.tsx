import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
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
      const formData = new FormData();
      formData.append('form-name', 'contact');
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('message', message);

      const resp = await fetch('/', {
        method: 'POST',
        body: formData,
      });
      if (!resp.ok) throw new Error(`Server responded ${resp.status}`);
      setSuccess('Thanks — your message was sent. We will reply shortly.');
      setName(''); setEmail(''); setPhone(''); setMessage('');
    } catch (err: unknown) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white">
      {/* Main Content */}
      <section className="py-8 lg:py-16" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {/* Left Column - Form */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-charcoal mb-2">Get in Touch</h1>
                <p className="text-charcoal/70">Ready to schedule or have questions? Send us a message and we'll respond quickly.</p>
              </div>
              
              <form 
                className="bg-white border border-professional-blue/20 p-6 md:p-8" 
                onSubmit={handleSubmit} 
                noValidate
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                
                {error && (
                  <div className="text-sm text-red-700 p-4 bg-red-50 border border-red-200 mb-6 flex items-center gap-3">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {error}
                  </div>
                )}
                {success && (
                  <div className="text-sm text-green-700 p-4 bg-green-50 border border-green-200 mb-6 flex items-center gap-3">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {success}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">Full Name *</label>
                    <input 
                      id="name"
                      name="name"
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      type="text" 
                      placeholder="Your name" 
                      className="w-full px-4 py-3 bg-white text-charcoal border border-professional-blue/20 focus:border-professional-blue focus:ring-2 focus:ring-professional-blue/20 outline-none transition" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">Email Address *</label>
                    <input 
                      id="email"
                      name="email"
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      type="email" 
                      placeholder="you@example.com" 
                      className="w-full px-4 py-3 bg-white text-charcoal border border-professional-blue/20 focus:border-professional-blue focus:ring-2 focus:ring-professional-blue/20 outline-none transition" 
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2">Phone Number</label>
                  <input 
                    id="phone"
                    name="phone"
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    type="tel" 
                    placeholder="(555) 123-4567" 
                    className="w-full px-4 py-3 bg-white text-charcoal border border-professional-blue/20 focus:border-professional-blue focus:ring-2 focus:ring-professional-blue/20 outline-none transition" 
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">Message *</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    rows={5} 
                    placeholder="How can we help you?" 
                    className="w-full px-4 py-3 bg-white text-charcoal border border-professional-blue/20 focus:border-professional-blue focus:ring-2 focus:ring-professional-blue/20 outline-none transition resize-none" 
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-professional-blue hover:bg-professional-blue/90 text-white font-semibold py-4 transition flex items-center justify-center gap-2" 
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <div className="border-l-2 border-professional-blue pl-6 py-4 group">
                <h3 className="text-lg font-bold text-charcoal mb-6">Direct Contact</h3>
                <div className="space-y-5">
                  <a href="tel:+14696298932" className="flex items-center gap-4 hover:translate-x-1 transition-transform">
                    <svg className="w-5 h-5 text-professional-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-charcoal/70 text-xs uppercase tracking-wider">Phone</p>
                      <p className="font-semibold text-charcoal">(469) 629-8932</p>
                    </div>
                  </a>
                  
                  <a href="mailto:contact@bridgenotary.com" className="flex items-center gap-4 hover:translate-x-1 transition-transform">
                    <svg className="w-5 h-5 text-professional-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-charcoal/70 text-xs uppercase tracking-wider">Email</p>
                      <p className="font-semibold text-charcoal">contact@bridgenotary.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-professional-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-charcoal/70 text-xs uppercase tracking-wider">Service Area</p>
                      <p className="font-semibold text-charcoal">Dallas-Fort Worth Metroplex</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="border-l-2 border-professional-blue pl-6 py-4 group">
                <h3 className="text-lg font-bold text-charcoal mb-4">Availability</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-charcoal/70">Mobile Notary</span>
                    <span className="font-semibold text-charcoal">7 Days/Week</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal/70">RON Sessions</span>
                    <span className="font-semibold text-charcoal">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal/70">Response Time</span>
                    <span className="font-semibold text-charcoal">Under 2 Hours</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-professional-blue/20">
                  <p className="text-xs text-charcoal/70">Same-day & rush appointments available</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="border-l-2 border-professional-blue pl-6 py-4 group">
                <h3 className="text-lg font-bold text-charcoal mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link to="/book" className="flex items-center gap-3 text-professional-blue hover:text-professional-blue/80 transition group">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium group-hover:translate-x-1 transition-transform">Book Appointment</span>
                  </Link>
                  <Link to="/ron" className="flex items-center gap-3 text-professional-blue hover:text-professional-blue/80 transition group">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium group-hover:translate-x-1 transition-transform">Start RON Session</span>
                  </Link>
                  <Link to="/pricing" className="flex items-center gap-3 text-professional-blue hover:text-professional-blue/80 transition group">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium group-hover:translate-x-1 transition-transform">View Pricing</span>
                  </Link>
                  <Link to="/faq" className="flex items-center gap-3 text-professional-blue hover:text-professional-blue/80 transition group">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium group-hover:translate-x-1 transition-transform">FAQs</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area - Compact Layout */}
      <section className="py-8 bg-professional-blue/5 border-t border-professional-blue/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-charcoal mb-1">DFW Metroplex Service</h3>
              <p className="text-charcoal/70 text-sm">Professional notary services throughout Dallas-Fort Worth</p>
            </div>
            <div className="flex gap-3">
              <a 
                href="tel:+14696298932" 
                className="inline-flex items-center gap-2 bg-professional-blue hover:bg-professional-blue/90 text-white font-medium py-3 px-6 transition text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <Link 
                to="/services" 
                className="inline-flex items-center gap-2 border border-professional-blue text-professional-blue hover:bg-professional-blue hover:text-white font-medium py-3 px-6 transition text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
