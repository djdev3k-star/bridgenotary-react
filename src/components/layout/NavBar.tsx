import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from '@/components/common/Dropdown';

const solutions = [
  {
    label: 'Remote Notarization',
    href: '/remote-notarization',
    description: 'Notarize documents remotely with secure video conferencing',
  },
  {
    label: 'Apostille',
    href: '/apostille',
    description: 'Document authentication for international use',
  },
  {
    label: 'Loan Signing Agent',
    href: '/loan-signing',
    description: 'Professional loan document notarization services',
  },
];

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-blue-600">
                BridgeNotary
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Dropdown 
                label="Solutions" 
                items={solutions}
                className="flex items-center h-full px-1 pt-1 border-b-2 border-transparent"
              />
              <Link
                to="/about"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              to="/get-started"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
