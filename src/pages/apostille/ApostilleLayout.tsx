import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import ApostilleSidebar from '@/features/apostille/components/ApostilleSidebar';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

const ApostilleLayout: React.FC = () => {
  const location = useLocation();
  const hideSidebar = location.pathname.startsWith('/apostille/quiz');

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <Navigation />
      <main className="pt-32 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className={hideSidebar ? 'md:col-span-4' : 'md:col-span-3'}>
              <Outlet />
            </div>
            {!hideSidebar && (
              <div className="md:col-span-1">
                <ApostilleSidebar />
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Final CTA Section - World-Ready Footer */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-proof to-electric-blue opacity-90"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 fade-in">Make Your Documents World-Ready</h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto fade-in-delay leading-relaxed">
            Stop guessing. Start traveling, marrying, studying, or doing business abroad—confident your documents will cross borders as smoothly as you do.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 fade-in-delay">
            <Link 
              to="/book"
              className="bg-white text-proof hover:bg-neutral-100 transition-all font-semibold rounded text-lg py-5 px-10 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 relative z-50"
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
