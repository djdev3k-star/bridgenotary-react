/**
 * Notary Request Form Page
 */

import NotaryRequestForm from '@/components/forms/NotaryRequestForm';

const NotaryRequestPage = () => (
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
            Request Notary Services
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto">
            Submit your notarization request below. Our team will review your information and contact you soon to confirm and schedule your service.
          </p>
        </div>
      </div>
    </section>

    {/* Form Section */}
    <section className="py-12 md:py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-6">
        <NotaryRequestForm />
      </div>
    </section>

    {/* Info Cards Section */}
    <section className="w-full bg-professional-blue/10 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">
          What to Expect
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 border-l-4 border-professional-blue">
            <div className="flex items-center justify-center w-12 h-12 bg-professional-blue/10 rounded-lg mb-4">
              <svg className="w-6 h-6 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-2">We'll Contact You</h3>
            <p className="text-charcoal/70">Our team will call or email you within 24 hours to confirm your request and discuss available times.</p>
          </div>

          <div className="bg-white p-8 border-l-4 border-professional-blue">
            <div className="flex items-center justify-center w-12 h-12 bg-professional-blue/10 rounded-lg mb-4">
              <svg className="w-6 h-6 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-2">Schedule Your Time</h3>
            <p className="text-charcoal/70">Choose a convenient time for your notarization. We offer flexible scheduling to fit your needs.</p>
          </div>

          <div className="bg-white p-8 border-l-4 border-professional-blue">
            <div className="flex items-center justify-center w-12 h-12 bg-professional-blue/10 rounded-lg mb-4">
              <svg className="w-6 h-6 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-2">Complete Service</h3>
            <p className="text-charcoal/70">We'll handle your notarization professionally and securely. Your documents are in safe hands.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default NotaryRequestPage;
