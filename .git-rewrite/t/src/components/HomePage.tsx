import Hero from './home/Hero';
import SocialProof from './home/SocialProof';
import Process from './home/Process';
import Services from './home/Services';

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

const HomePage = () => (
  <div className="min-h-screen">
    <Hero />
    <SocialProof />
    <AboutSection />
    <Process />
    <Services />
  </div>
);

export default HomePage;
