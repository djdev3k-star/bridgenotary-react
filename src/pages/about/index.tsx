import { Link } from "react-router-dom";

const About = () => (
  <div className="w-full">
    {/* Hero Section */}
    <section className="relative overflow-hidden bg-white text-charcoal w-screen left-1/2 -translate-x-1/2 py-32 md:py-40 lg:py-48 min-h-[600px] flex items-center">
      {/* Spectral Pattern Background */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `
          linear-gradient(90deg, 
            transparent 0%, 
            rgba(59, 130, 246, 0.15) 15%, 
            rgba(99, 102, 241, 0.15) 35%, 
            rgba(139, 92, 246, 0.15) 55%,
            rgba(168, 85, 247, 0.15) 75%,
            rgba(168, 85, 247, 0.12) 100%),
          radial-gradient(circle at 20% 50%, rgba(0, 85, 230, 0.08) 0%, transparent 45%),
          radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.06) 0%, transparent 50%)
        `,
        backgroundSize: '100% 100%, 100% 100%, 100% 100%',
        backgroundAttachment: 'fixed'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-professional-blue/10 px-4 py-2 text-sm font-medium mb-8 border border-professional-blue/20">
            <svg className="w-4 h-4 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-professional-blue">About Bridge</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-[1.5] mb-8">
            Our approach is straightforward: show up on time, prepare thoroughly, communicate clearly, and deliver documents that are correct on the first attempt.
          </h1>
        </div>
      </div>
    </section>

    {/* Our Story */}
    <section className="py-12 lg:py-28 bg-white relative" style={{backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(0, 85, 230, 0.05) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.03) 0%, transparent 40%)'}}>'
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Our Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          {/* Why Bridge */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">Why "Bridge"?</h3>
            <p className="text-charcoal/70 text-base md:text-lg leading-relaxed">
              We connect your paperwork to outcomes. Documents don't close transactions on their own—they need proper notarization, verification, and delivery. We bridge that gap, ensuring every signature, seal, and detail moves you forward without delays.
            </p>
          </div>
          
          {/* Three Pillars */}
          <div className="space-y-4 md:space-y-6">
            <div className="p-4 md:p-6 border-l border-professional-blue group hover:bg-professional-blue/5 transition-all">
              <h4 className="font-bold text-charcoal text-lg mb-2">Punctuality</h4>
              <p className="text-charcoal/70 leading-relaxed text-sm">We arrive when scheduled and come prepared. No delays, no excuses.</p>
            </div>
            <div className="p-4 md:p-6 border-l border-professional-blue group hover:bg-professional-blue/5 transition-all">
              <h4 className="font-bold text-charcoal text-lg mb-2">Accuracy</h4>
              <p className="text-charcoal/70 leading-relaxed text-sm">Correct documents on the first attempt. Missing signatures and errors are preventable—we prevent them.</p>
            </div>
            <div className="p-4 md:p-6 border-l border-professional-blue group hover:bg-professional-blue/5 transition-all">
              <h4 className="font-bold text-charcoal text-lg mb-2">Communication</h4>
              <p className="text-charcoal/70 leading-relaxed text-sm">From booking to completion, you know what to expect. Clear updates, no surprises.</p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center mb-12 fade-in-up">
          <p className="text-3xl md:text-5xl lg:text-5xl font-bold text-charcoal leading-[1.4]">
            <span className="text-professional-blue">This is how notary services should work.</span>
          </p>
        </div>

        {/* Who We Serve */}
        <div className="bg-professional-blue/5 border-l-4 border-professional-blue p-6 md:p-8 rounded-r-lg">
          <p className="text-charcoal/70 text-base md:text-lg leading-relaxed">
            Whether you're a title company coordinating closings, a lender managing compliance, or an individual needing document authentication, Bridge Notary is built to handle the work efficiently and professionally.
          </p>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-24 lg:py-32 bg-professional-blue/10 text-charcoal w-full flex items-center justify-center relative" style={{backgroundImage: 'radial-gradient(circle at 20% 40%, rgba(0, 85, 230, 0.05) 0%, transparent 40%), radial-gradient(circle at 80% 60%, rgba(255, 215, 0, 0.03) 0%, transparent 40%)'}}>'
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-charcoal">
          Ready to Work With Us?
        </h2>
        <p className="text-xl text-charcoal/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          Simple scheduling, professional execution. Let's handle your notarization needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/book" 
            className="inline-flex items-center justify-center gap-3 bg-professional-blue text-white hover:bg-professional-blue/90 transition-all text-lg py-4 px-8 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book an Appointment
          </Link>
          <Link 
            to="/services" 
            className="inline-flex items-center justify-center gap-3 border-2 border-professional-blue text-professional-blue hover:bg-professional-blue hover:text-white transition-all text-lg py-4 px-8 font-semibold hover:shadow-md"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default About;
