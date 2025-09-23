import Hero from './Hero';
import Process from './Process';
import Services from './Services';
import { Link } from 'react-router-dom';

// Final CTA component
const FinalCTA = () => (
  <section className="relative py-24 px-6 overflow-hidden">
    {/* Background color */}
    <div className="absolute inset-0 bg-electric-blue"></div>
    
    {/* Background pattern - removed diagonal pattern */}
    
    {/* Floating elements */}
    {/* Removed floating orbs */}
    
    <div className="max-w-5xl mx-auto relative z-10 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 fade-in">Ready For Your Next Signing?</h2>
      <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto fade-in-delay">
        Join thousands of satisfied clients who trust Bridge Notary for their most important documents.
        Professional, reliable, and convenient mobile notary services.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6 fade-in-delay">
        <Link to="/book" className="bg-white text-proof hover:bg-neutral-100 transition-all font-semibold rounded-lg text-lg py-5 px-10 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 pulse-button">
          Book Your Appointment
        </Link>
        <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white/10 transition-all font-semibold rounded-lg text-lg py-5 px-10 text-white">
          Contact Us
        </Link>
      </div>
      
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-white fade-in-delay">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-gold mb-2">10+</div>
          <div className="text-white/80">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-gold mb-2">1000+</div>
          <div className="text-white/80">Satisfied Clients</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-gold mb-2">5★</div>
          <div className="text-white/80">Google Rating</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-gold mb-2">24/7</div>
          <div className="text-white/80">Support</div>
        </div>
      </div>
    </div>
  </section>
);

// SocialProof and AboutSection are commented out to hide them as requested
// import SocialProof from './SocialProof';

/* 
// Commented out AboutSection component as it's currently not being used
const AboutSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Your Partner in Professional Notary Services
      </h2>
      <p className="text-xl text-gray-600 mb-12">
        Bridge Notary is dedicated to providing reliable, accurate, and professional notarial services to title companies, lenders, and real estate professionals. Our mission is to deliver seamless closings with confidence and integrity.
      </p>

      <div className="grid md:grid-cols-2 gap-10 text-left mt-12">
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-gray-600 mb-6">
            To offer a professional and stress-free notary experience for our clients and their customers, with a focus on reliability, clear communication, and unwavering confidence at every step.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
          <p className="text-gray-600">
            To be the most trusted notary closing partner for complex, urgent, and high-value transactions, recognized for our professionalism, punctuality, and meticulous attention to detail.
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Credentials & Compliance</h3>
          <ul className="space-y-3">
            {[
              'Commissioned Notary Public in Texas',
              'Bonded & E&O Insured ($25,000+)',
              'NNA Certified & Background Screened',
              'Texas Equity Loan Law Compliant'
            ].map((item) => (
              <li key={item} className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
*/

const HomePage = () => (
  <div className="w-full bg-white">
    <Hero />
    <Process />
    <Services />
    <FinalCTA />
    {/* SocialProof and AboutSection are hidden as requested */}
    {/* <SocialProof /> */}
    {/* <AboutSection /> */}
  </div>
);

export default HomePage;
