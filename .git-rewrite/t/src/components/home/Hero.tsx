import React from 'react';

export default function HomeHero() {
  return (
    <section className=/*"bg-gradient-to-r from-primary to-primary-dark*/ "py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2"></span>
              Available Now in Greater Dallas Area
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Professional Mobile Notary & Loan Signing Agent
            </h1>
            
            <p className="text-xl">
              Experienced, reliable notary services at your location. 
              Available 7 days a week for residential and commercial signings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule a Signing
              </button>
              <button className="bg-white/10 text-white hover:bg-white/20 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Services & Rates
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.9/5 Rating</span>
              </div>
              <div className="text-white/40">|</div>
              <div>500+ Signings Completed</div>
            </div>
          </div>

          {/* Right Column - Quick Booking Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Booking</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg">
                    <option>Refinance Signing</option>
                    <option>Purchase Signing</option>
                    <option>Other Notary Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <input type="date" className="w-full p-3 border border-gray-200 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full p-3 border border-gray-200 rounded-lg" placeholder="your@email.com" />
                </div>
                <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                  Check Availability
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
