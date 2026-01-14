import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const RouteLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navigation />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RouteLayout;
