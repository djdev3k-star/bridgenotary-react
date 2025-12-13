import { Link } from "react-router-dom";
import Layout from '@/components/layout/Layout';

const MobileNotaryPage = () => {
  return (
    <Layout>
      {/* Hero Section - Left-aligned with overlay image */}
      <section className="relative overflow-hidden text-white min-h-[70vh] flex items-center">
        {/* Deep blue gradient background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-proof via-electric-blue to-proof"></div>

        {/* Background image overlay */}
        <div className="absolute inset-0 z-0 opacity-60">
          <img
            src="/images/loanFlyers.png"
            alt="Mobile notary services"
            className="w-full h-full object-cover brightness-110 saturate-110"
          />
        </div>
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-proof/60 via-electric-blue/50 to-proof/65 mix-blend-multiply"></div><div className="absolute inset-0 bg-electric-blue/20"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto py-20 px-6 relative z-20 w-full">
          <div className="max-w-3xl text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-white/50"></span>
              <span className="text-xs uppercase tracking-[0.25em] text-white/90">Mobile Notary</span>
              <span className="h-px w-12 bg-white/50"></span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Professional Notary Services at Your Location
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed drop-shadow-sm">
              We come to your home, office, hospital, or any location. Same-day and evening appointments available with certified, insured notaries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book" className="bg-white text-proof hover:bg-neutral-100 transition-all rounded text-lg py-3 px-8 font-semibold shadow-lg hover:shadow-xl">
                Book Mobile Notary
              </Link>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-proof transition-all rounded text-lg py-3 px-8 font-semibold shadow-lg hover:shadow-xl">
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="section bg-white">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-neutral-300"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-700">Why Mobile Notary</span>
            <span className="h-px w-12 bg-neutral-300"></span>
          </div>
          <h2 className="text-3xl font-bold text-proof">Convenient, Professional, On Your Schedule</h2>
          <p className="text-lg text-neutral-600 mt-3">
            Skip the trip to a notary office. Our mobile notaries bring certified services directly to your location—fast, reliable, and on-demand. Need <Link to="/apostille" className="text-neutral-600 hover:text-proof underline">apostille services</Link>? We handle that too.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'We Come to You', desc: 'Home, office, hospital, or anywhere you need notarization services.' },
            { title: 'Same-Day Available', desc: 'Urgent documents? We offer same-day and rush appointments throughout DFW.' },
            { title: 'All Document Types', desc: 'Real estate, legal, business, medical, and personal documents handled.' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-proof mb-2">{item.title}</h3>
              <p className="text-neutral-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="section bg-neutral-50">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-neutral-300"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-700">Common Situations</span>
            <span className="h-px w-12 bg-neutral-300"></span>
          </div>
          <h2 className="text-3xl font-bold text-proof">When You Need Mobile Notary</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-proof mb-2">Real Estate Closings</h3>
            <p className="text-neutral-700">
              <Link to="/loan-signing" className="text-neutral-700 hover:text-proof underline">Loan signings</Link>, refinance documents, purchase agreements at your home or office.
            </p>
          </div>
          {[
            { title: 'Legal Documents', desc: 'Affidavits, power of attorney, trusts, wills, and estate planning documents.' },
            { title: 'Business Contracts', desc: 'Corporate agreements, vendor contracts, employment documents, and more.' },
            { title: 'Medical & Healthcare', desc: 'Hospital visits, assisted living facilities, HIPAA authorizations, advance directives.' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-proof mb-2">{item.title}</h3>
              <p className="text-neutral-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-electric-blue to-proof text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Schedule?</h2>
          <p className="text-xl mb-8 text-white/95">
            Book your mobile notary appointment today—we'll come to you at your preferred time and location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="bg-white text-proof hover:bg-neutral-100 transition-all rounded text-lg py-3 px-8 font-semibold shadow-lg hover:shadow-xl">
              Schedule Now
            </Link>
            <Link to="/services" className="border-2 border-white text-white hover:bg-white hover:text-proof transition-all rounded text-lg py-3 px-8 font-semibold shadow-lg hover:shadow-xl">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MobileNotaryPage;
