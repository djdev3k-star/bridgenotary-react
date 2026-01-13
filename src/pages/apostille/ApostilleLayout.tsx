import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

const ApostilleLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Navigation />
      <ScrollToTop />
      <main className="flex-grow pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </main>

      {/* Final CTA Section - World-Ready Footer */}
      <section className="relative py-24 px-6 overflow-hidden bg-professional-blue">
        {/* Subtle accent pattern */}
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px)'}}></div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 fade-in">Make Your Documents World-Ready</h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto fade-in-delay leading-relaxed">
            Stop guessing. Start traveling, marrying, studying, or doing business abroad—confident your documents will cross borders as smoothly as you do.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 fade-in-delay">
            <Link 
              to="/book"
              className="bg-white text-professional-blue hover:bg-neutral-100 transition-all font-semibold rounded text-lg py-5 px-10 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 relative z-50"
            >
              Get My Apostille Now
            </Link>
            <Link 
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white/10 transition-all font-semibold rounded text-lg py-5 px-10 text-white relative z-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApostilleLayout;
