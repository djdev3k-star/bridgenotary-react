/**
 * Courier Request Form Page
 */

import CourierRequestForm from '@/components/forms/CourierRequestForm';

const CourierRequestPage = () => (
  <div className="w-full bg-white">
    {/* Header */}
    <section className="py-8 md:py-12 px-4 md:px-6 border-b border-professional-blue/20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-charcoal">Courier & Delivery Request</h1>
      </div>
    </section>

    {/* Form + Sidebar */}
    <section className="py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Form */}
        <div className="lg:col-span-2">
          <CourierRequestForm />
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact */}
          <div className="bg-off-white border-l-4 border-professional-blue p-4">
            <h3 className="text-sm font-bold text-charcoal mb-4 uppercase tracking-wide">Contact</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:+14696298932" className="flex items-center gap-3 text-charcoal hover:text-professional-blue transition">
                <svg className="w-5 h-5 text-professional-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold">(469) 629-8932</span>
              </a>
              <a href="mailto:contact@bridgenotary.com" className="flex items-start gap-3 text-charcoal hover:text-professional-blue transition">
                <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold break-all">contact@bridgenotary.com</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-off-white border-l-4 border-professional-blue p-4">
            <h3 className="text-sm font-bold text-charcoal mb-4 uppercase tracking-wide">Hours</h3>
            <div className="space-y-1 text-sm text-charcoal/70">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="font-semibold">9AM - 6PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-semibold">9AM - 4PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-semibold">By Appointment</span>
              </div>
            </div>
          </div>

          {/* Service Area */}
          <div className="bg-off-white border-l-4 border-professional-blue p-4">
            <h3 className="text-sm font-bold text-charcoal mb-4 uppercase tracking-wide">Service Area</h3>
            <p className="text-sm text-charcoal/70">Dallas-Fort Worth Metroplex</p>
            <p className="text-xs text-charcoal/60 mt-2">Same-day delivery available</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default CourierRequestPage;
