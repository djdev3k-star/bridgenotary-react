import { Link } from "react-router-dom";
import { featureFlags } from "@/utils/featureFlags";

const MobileNotaryPage = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-28 md:pt-32 md:pb-40 bg-gradient-to-br from-professional-blue to-professional-blue/90" style={{backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255, 215, 0, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 40%)'}}>
        <div className="max-w-6xl mx-auto px-6 text-white relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/30">Mobile Notary Services</span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              We Come to<br />You—On Your<br />Schedule
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed">
              Same-day notarization anywhere across DFW. No more rescheduling your day. Our certified notaries arrive ready to sign.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/book?service=general" 
                className="inline-flex items-center justify-center gap-2 bg-white text-professional-blue hover:bg-off-white transition-colors font-semibold py-4 px-8 text-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                </svg>
                Book Now
              </Link>
              <a 
                href="tel:+14696298932" 
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 transition-colors font-semibold py-4 px-8 text-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.823.912c.487 1.566 1.457 3.457 3.181 5.181s3.615 2.694 5.181 3.181l.912-1.823a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (469) 629-8932
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-professional-blue/5 relative" style={{backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(0, 85, 230, 0.08) 0%, transparent 40%)'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-professional-blue mb-2">2 hrs</div>
              <p className="text-charcoal/70 font-medium">Avg Response</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-professional-blue mb-2">99%</div>
              <p className="text-charcoal/70 font-medium">On-Time Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-professional-blue mb-2">7/7</div>
              <p className="text-charcoal/70 font-medium">Days Available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-professional-blue mb-2">DFW</div>
              <p className="text-charcoal/70 font-medium">Full Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-white relative" style={{backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(0, 85, 230, 0.05) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.03) 0%, transparent 40%)'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest text-professional-blue uppercase mb-3 bg-professional-blue/10 px-4 py-2 rounded">Why Choose Mobile</span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Notarization Without the Hassle</h2>
            <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">Skip the drive. No waiting rooms. Just certified notarization on your terms.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-professional-blue group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2.646-2.646a4.5 4.5 0 016.708 0l2.646 2.646m-6.708 5l2.646 2.646a4.5 4.5 0 006.708 0l2.646-2.646m-6-6h.01M9 21h6a2 2 0 002-2V5a2 2 0 00-2-2H9a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: "We Come to You",
                desc: "Home, office, hospital, nursing facility—anywhere you need us, we'll be there."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-professional-blue group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Same-Day & Rush",
                desc: "Urgent documents? We offer same-day service including evenings and weekends."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-professional-blue group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: "All Document Types",
                desc: "Real estate, legal, business, medical, and personal documents handled expertly."
              }
            ].map((item, idx) => (
              <div key={idx} className="border-l-2 border-professional-blue pl-6 group hover:bg-professional-blue/5 transition-all p-6">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="py-20 lg:py-28 bg-professional-blue/10 relative" style={{backgroundImage: 'radial-gradient(circle at 20% 40%, rgba(0, 85, 230, 0.08) 0%, transparent 40%), radial-gradient(circle at 80% 60%, rgba(255, 215, 0, 0.03) 0%, transparent 40%)'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest text-professional-blue uppercase mb-3 bg-professional-blue/10 px-4 py-2 rounded">Common Needs</span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">When to Call a Mobile Notary</h2>
            <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">We handle the documents you need, at the time that works for you.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Real Estate Closings",
                desc: "Loan signings, refinances, purchase agreements at your home or title office.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2.646-2.646a4.5 4.5 0 016.708 0l2.646 2.646m-6.708 5l2.646 2.646a4.5 4.5 0 006.708 0l2.646-2.646m-6-6h.01M9 21h6a2 2 0 002-2V5a2 2 0 00-2-2H9a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: "Legal Documents",
                desc: "Affidavits, power of attorney, trusts, wills, and estate planning documents.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              {
                title: "Business Contracts",
                desc: "Corporate agreements, vendor contracts, employment docs, and organizational filings.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Medical & Healthcare",
                desc: "Hospital visits, assisted living, HIPAA authorizations, and advance directives.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                )
              },
              {
                title: "School & Education",
                desc: "Parental consent forms, field trip permissions, and school enrollment documents.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5m0 0l-2 1m2-1v10l9 5 9-5V9m-9 5l9-5" />
                  </svg>
                )
              },
              {
                title: "Financial",
                desc: "Loan applications, bank documents, investment accounts, and financial agreements.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-professional-blue/20 hover:border-professional-blue/50 group hover:shadow-md transition-all">
                <div className="text-professional-blue mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-charcoal/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-white relative" style={{backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(0, 85, 230, 0.05) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.03) 0%, transparent 40%)'}}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest text-professional-blue uppercase mb-3 bg-professional-blue/10 px-4 py-2 rounded">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Book to Sign in 3 Simple Steps</h2>
            <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">Fast, professional, and stress-free from start to finish.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-professional-blue/0 via-professional-blue/30 to-professional-blue/0 z-0" />
            
            {[
              {
                num: "1",
                title: "Book Online or Call",
                desc: "Choose your date, time, and location. We offer same-day appointments and flexible hours."
              },
              {
                num: "2",
                title: "We Arrive Ready",
                desc: "Your notary arrives on time with all supplies and expertise to handle your documents."
              },
              {
                num: "3",
                title: "Sign & Receive Copies",
                desc: "Documents notarized, witnessed if needed, and you get copies immediately."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 text-center">
                <div className="w-16 h-16 bg-professional-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.num}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-charcoal/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Quick Reference */}
      <section className="py-20 lg:py-28 bg-professional-blue/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest text-professional-blue uppercase mb-3 bg-professional-blue/10 px-4 py-2 rounded">Frequently Asked</span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal">Got Questions? We Have Answers</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "How much does mobile notary cost?",
                a: "Service fees vary based on document complexity and travel distance. Call (469) 629-8932 for an instant quote."
              },
              {
                q: "How fast can you arrive?",
                a: "We offer same-day appointments in most cases, with average response time of 2 hours from booking."
              },
              {
                q: "Do you notarize any document type?",
                a: "Yes, we notarize personal, business, legal, medical, and real estate documents. We cannot notarize unethical or illegal documents."
              },
              {
                q: "Are you available evenings/weekends?",
                a: "Absolutely! We offer appointments 7 days a week, including early mornings and evenings for your convenience."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-professional-blue/20">
                <h3 className="text-lg font-bold text-charcoal mb-3">{item.q}</h3>
                <p className="text-charcoal/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-professional-blue to-professional-blue/90 text-white relative" style={{backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255, 215, 0, 0.1) 0%, transparent 40%)'}}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stop Rescheduling. Book Today.</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Same-day mobile notarization across DFW. We come to you at your preferred time and location.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/book?service=general" 
              className="inline-flex items-center justify-center gap-2 bg-white text-professional-blue hover:bg-off-white transition-colors font-semibold py-4 px-10 text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
              </svg>
              Book Your Appointment
            </Link>
            <a 
              href="tel:+14696298932" 
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 transition-colors font-semibold py-4 px-10 text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.823.912c.487 1.566 1.457 3.457 3.181 5.181s3.615 2.694 5.181 3.181l.912-1.823a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (469) 629-8932
            </a>
          </div>

          <div className="mt-12 pt-12 border-t border-white/20">
            <p className="text-white/80 text-sm">Available 7 days a week • Same-day appointments • Full DFW coverage • No hidden fees</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileNotaryPage;
