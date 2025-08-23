import Sidebar from "./Sidebar";

const Contact = () => (
  <div className="section">
    <div className="flex flex-col md:flex-row gap-12">
      <main className="w-full md:w-2/3 lg:w-3/4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-proof mb-6">Contact Us</h1>
        <p className="text-lg text-neutral-700 mb-8">
          Have a question or need a custom quote? Fill out the form below, and we'll get back to you promptly. For immediate assistance, please call or email us directly.
        </p>
        <form className="card space-y-6">
          <div>
            <label htmlFor="name" className="block text-neutral-800 font-semibold mb-1">Name</label>
            <input id="name" type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-lg bg-neutral-100 text-neutral-800 border border-neutral-300 focus:border-proof focus:ring-proof outline-none" />
          </div>
          <div>
            <label htmlFor="email" className="block text-neutral-800 font-semibold mb-1">Email</label>
            <input id="email" type="email" placeholder="your@email.com" className="w-full px-4 py-2 rounded-lg bg-neutral-100 text-neutral-800 border border-neutral-300 focus:border-proof focus:ring-proof outline-none" />
          </div>
          <div>
            <label htmlFor="message" className="block text-neutral-800 font-semibold mb-1">Message</label>
            <textarea id="message" rows={5} placeholder="How can we help you?" className="w-full px-4 py-2 rounded-lg bg-neutral-100 text-neutral-800 border border-neutral-300 focus:border-proof focus:ring-proof outline-none" />
          </div>
          <button type="submit" className="btn btn-primary w-full">Send Message</button>
        </form>
      </main>
      <Sidebar />
    </div>
  </div>
);

export default Contact;
