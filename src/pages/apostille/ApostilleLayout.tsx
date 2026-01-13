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

      <Footer />
    </div>
  );
};

export default ApostilleLayout;
