import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';

const RouteLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
  <ScrollToTop />
      <NavBar />
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
  </main>
  <Footer />
    </div>
  );
};

export default RouteLayout;
