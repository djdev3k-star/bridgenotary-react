/**
 * General Inquiry Form Page
 */

import GeneralInquiryForm from '@/components/forms/GeneralInquiryForm';

const GeneralInquiryPage = () => (
  <div className="w-full bg-white">
    {/* Hero Section */}
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 bg-off-white" style={{
      backgroundImage: `
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px),
        radial-gradient(circle at 20% 30%, rgba(0, 85, 230, 0.05) 0%, transparent 40%), 
        radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.03) 0%, transparent 40%)
      `,
      backgroundSize: '100% 100%, 100% 100%, 100% 100%',
      backgroundAttachment: 'fixed'
    }}>
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-charcoal">
            General Inquiry
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto">
            Have a question or need something specific? Send us a message and our team will get back to you promptly.
          </p>
        </div>
      </div>
    </section>

    {/* Form Section */}
    <section className="py-12 md:py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-6">
        <GeneralInquiryForm />
      </div>
    </section>

    {/* FAQ Section */}
    <section className="w-full bg-professional-blue/10 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 border-l-4 border-professional-blue">
            <h3 className="text-lg font-semibold text-charcoal mb-3">How quickly will I hear back?</h3>
            <p className="text-charcoal/70">We typically respond to all inquiries within 24 business hours. Most responses come much faster during business days.</p>
          </div>

          <div className="bg-white p-8 border-l-4 border-professional-blue">
            <h3 className="text-lg font-semibold text-charcoal mb-3">What areas do you serve?</h3>
            <p className="text-charcoal/70">We primarily serve the Dallas-Fort Worth metroplex area. Contact us to discuss your specific location needs.</p>
          </div>

          <div className="bg-white p-8 border-l-4 border-professional-blue">
            <h3 className="text-lg font-semibold text-charcoal mb-3">Do you offer after-hours services?</h3>
            <p className="text-charcoal/70">Yes! We can arrange after-hours and weekend services for urgent needs. Let us know your availability.</p>
          </div>

          <div className="bg-white p-8 border-l-4 border-professional-blue">
            <h3 className="text-lg font-semibold text-charcoal mb-3">What payment methods do you accept?</h3>
            <p className="text-charcoal/70">We accept all major credit cards, ACH transfers, and check payments. We'll discuss payment options when confirming your service.</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
          Still Have Questions?
        </h2>
        <p className="text-lg text-charcoal/70 mb-8">
          Call us directly or use the form above to submit your inquiry.
        </p>
        <a
          href="tel:+14696298932"
          className="button-primary inline-flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Now: (469) 629-8932
        </a>
      </div>
    </section>
  </div>
);

export default GeneralInquiryPage;
