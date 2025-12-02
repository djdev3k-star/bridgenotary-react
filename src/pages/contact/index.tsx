import BookingSidebar from "@/components/layout/BookingSidebar";
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
    <div className="section">
      <div className="flex flex-col md:flex-row gap-12">
        <main className="w-full md:w-2/3 lg:w-3/4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-proof mb-6">Contact Us</h1>
          <p className="text-lg text-neutral-700 mb-8">
            Have a question or need a custom quote? Fill out the form below, and we'll get back to you promptly. For immediate assistance, please call or email us directly.
          </p>

          <form className="card space-y-6" onSubmit={handleSubmit} noValidate>
            {error && <div className="text-sm text-red-600 p-3 rounded bg-red-50">{error}</div>}
            {success && <div className="text-sm text-green-700 p-3 rounded bg-green-50">{success}</div>}

            <div>
              <label htmlFor="name" className="block text-neutral-800 font-semibold mb-1">Name</label>
              <input id="name" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-lg bg-neutral-100 text-neutral-800 border border-neutral-300 focus:border-proof focus:ring-proof outline-none" />
            </div>
            <div>
              <label htmlFor="email" className="block text-neutral-800 font-semibold mb-1">Email</label>
              <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your@email.com" className="w-full px-4 py-2 rounded-lg bg-neutral-100 text-neutral-800 border border-neutral-300 focus:border-proof focus:ring-proof outline-none" />
            </div>
            <div>
              <label htmlFor="message" className="block text-neutral-800 font-semibold mb-1">Message</label>
              <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder="How can we help you?" className="w-full px-4 py-2 rounded-lg bg-neutral-100 text-neutral-800 border border-neutral-300 focus:border-proof focus:ring-proof outline-none" />
            </div>
            <button type="submit" className="btn btn-primary w-full" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
          </form>
        </main>
        <BookingSidebar />
      </div>
    </div>
  );
};

export default Contact;
