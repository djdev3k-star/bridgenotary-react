import React from 'react';
import { Outlet } from 'react-router-dom';
import ApostilleSidebar from '@/features/apostille/components/ApostilleSidebar';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

const ApostilleLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <Navigation />
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-3">
              <Outlet />
            </div>
            <div className="md:col-span-1">
              <ApostilleSidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApostilleLayout;
