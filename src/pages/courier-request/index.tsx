/**
 * Courier Request Form Page
 */

import CourierRequestForm from '@/components/forms/CourierRequestForm';

const CourierRequestPage = () => (
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
            Courier & Delivery Services
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto">
            Need documents picked up and delivered? Submit your courier request and we'll handle the logistics with care.
          </p>
        </div>
      </div>
    </section>

    {/* Form Section */}
    <section className="py-12 md:py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-6">
        <CourierRequestForm />
      </div>
    </section>

    {/* Info Cards Section */}
    <section className="w-full bg-professional-blue/10 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">
          Why Choose Bridge Notary Courier?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 border-l-4 border-professional-blue">
            <div className="flex items-center justify-center w-12 h-12 bg-professional-blue/10 rounded-lg mb-4">
              <svg className="w-6 h-6 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-2">Fast & Reliable</h3>
            <p className="text-charcoal/70">Quick pickup and delivery service with tracking so you always know where your documents are.</p>
          </div>

          <div className="bg-white p-8 border-l-4 border-professional-blue">
            <div className="flex items-center justify-center w-12 h-12 bg-professional-blue/10 rounded-lg mb-4">
              <svg className="w-6 h-6 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-2">Secure Handling</h3>
            <p className="text-charcoal/70">Your sensitive documents are handled with care and security throughout the entire process.</p>
          </div>

          <div className="bg-white p-8 border-l-4 border-professional-blue">
            <div className="flex items-center justify-center w-12 h-12 bg-professional-blue/10 rounded-lg mb-4">
              <svg className="w-6 h-6 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-2">Professional Service</h3>
            <p className="text-charcoal/70">Backed by Bridge Notary's reputation for excellence in the Dallas-Fort Worth area.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default CourierRequestPage;
