import React from 'react';
import { Link } from 'react-router-dom';

const ServiceSidebar = () => {
  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 space-y-6">
      {/* Quick Action Card */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-neutral-200">
        <h3 className="text-xl font-bold text-proof mb-4">Ready to Schedule?</h3>
        <Link to="/book" className="w-full bg-electric-blue text-white py-3 px-4 rounded-lg mb-4 flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Book a Signing
        </Link>
        <div className="space-y-3 text-sm text-neutral-600">
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-electric-blue mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Fast response within 2 hours</span>
          </div>
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-electric-blue mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Serving the Dallas-Fort Worth area and surrounding counties</span>
          </div>
        </div>
      </div>

      {/* Contact Card */}
      <div className="bg-neutral-50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-proof mb-4">Contact Us</h3>
        <div className="space-y-4">
          {/* TODO: Add phone contact for future development */}
          {/* <a href="tel:+14696298932" className="flex items-center gap-2 text-neutral-700 hover:text-electric-blue transition-colors"> */}
            {/* <svg className="w-4 h-4 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor"> */}
              {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /> */}
            {/* </svg> */}
            {/* <span className="font-medium">(469) 629-8932</span> */}
          {/* </a> */}
          <a href="mailto:info@bridgenotary.com" className="flex items-center gap-2 text-neutral-700 hover:text-electric-blue transition-colors">
            <svg className="w-4 h-4 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">info@bridgenotary.com</span>
          </a>
        </div>
      </div>

      {/* Document Checklist */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-neutral-200">
        <h3 className="text-xl font-bold text-proof mb-4">What to Bring</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-neutral-700">
            <div className="bg-electric-blue/10 rounded-full p-1 flex-shrink-0 mt-1">
              <svg className="w-3.5 h-3.5 text-electric-blue" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Valid Government-issued Photo ID</span>
          </li>
          <li className="flex items-start gap-2 text-neutral-700">
            <div className="bg-electric-blue/10 rounded-full p-1 flex-shrink-0 mt-1">
              <svg className="w-3.5 h-3.5 text-electric-blue" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Loan Documents (if applicable)</span>
          </li>
          <li className="flex items-start gap-2 text-neutral-700">
            <div className="bg-electric-blue/10 rounded-full p-1 flex-shrink-0 mt-1">
              <svg className="w-3.5 h-3.5 text-electric-blue" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Any supporting documentation requested by your lender or title company</span>
          </li>
        </ul>
      </div>

      {/* Testimonial */}
      <div className="bg-neutral-50 rounded-xl p-6">
        <div className="mb-2">
          <svg className="h-6 w-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
          </svg>
        </div>
        <p className="text-neutral-700 italic mb-4">
          "Bridge Notary is dependable, professional, and always communicates throughout the process. Highly recommended!"
        </p>
        <p className="text-sm font-semibold text-proof">- Escrow Officer, Dallas TX</p>
      </div>
      
      {/* Quick Links */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-neutral-200">
        <h3 className="text-xl font-bold text-proof mb-4">Related Services</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/ron" className="flex items-center gap-2 text-neutral-700 hover:text-electric-blue transition-colors">
              <svg className="w-4 h-4 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Remote Online Notarization</span>
            </Link>
          </li>
          <li>
            <Link to="/apostille" className="flex items-center gap-2 text-neutral-700 hover:text-electric-blue transition-colors">
              <svg className="w-4 h-4 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Apostille Services</span>
            </Link>
          </li>
          <li>
            <Link to="/loan-signing" className="flex items-center gap-2 text-neutral-700 hover:text-electric-blue transition-colors">
              <svg className="w-4 h-4 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Loan Signing Services</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default ServiceSidebar;
