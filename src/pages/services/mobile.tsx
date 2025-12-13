import { Link } from "react-router-dom";
import loanFlyersImg from "@/assets/images/loanFlyers.png";

const MobileNotaryPage = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section - Full Viewport Width */}
      <section className="relative overflow-hidden text-white min-h-[85vh] flex items-center w-screen left-1/2 -translate-x-1/2">
        {/* Deep blue gradient background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-proof via-electric-blue to-proof"></div>

        {/* Background image overlay */}
        <div className="absolute inset-0 z-0 opacity-50">
          <img
            src={loanFlyersImg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-proof/80 via-electric-blue/60 to-proof/70"></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto py-28 px-6 relative z-20 w-full">
          <div className="max-w-3xl text-left">
            <div className="fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Get Documents Signed <span className="text-white">Today</span>—We Come to You
              </h1>
              <p className="text-xl md:text-2xl text-black font-semibold mb-4 drop-shadow-md">
                Same-Day Mobile Notary Across DFW
              </p>
              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed drop-shadow-sm max-w-2xl">
                No more rescheduling your day. Our certified notaries arrive at your home, office, hospital, or any location—on your schedule, with documents ready to sign.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/book?service=general" 
                  className="inline-block bg-white text-proof hover:bg-neutral-100 transition-all rounded text-lg py-4 px-10 font-semibold shadow-2xl transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex items-center justify-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book Same-Day Appointment
                  </div>
                </Link>
                <a 
                  href="tel:+14696298932" 
                  className="inline-block border-2 border-white text-white hover:bg-white hover:text-proof transition-all rounded text-lg py-4 px-10 font-semibold shadow-xl"
                >
                  <div className="flex items-center justify-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call (469) 629-8932
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl fade-in-delay">
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-1">2hr</p>
              <p className="text-white/80 text-sm">Avg Response Time</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-1">99%</p>
              <p className="text-white/80 text-sm">On-Time Rate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-1">7 Days</p>
              <p className="text-white/80 text-sm">A Week Availability</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-1">DFW</p>
              <p className="text-white/80 text-sm">Full Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-neutral-300"></div>
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Why Mobile Notary</span>
              <div className="h-px flex-1 bg-neutral-300"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-proof mb-4">Skip the Office. We Handle It All On-Site.</h2>
            <p className="text-lg text-neutral-600 max-w-3xl">
              Our mobile notaries bring certified services directly to your location—fast, reliable, and on-demand. Need <Link to="/apostille" className="text-electric-blue hover:text-proof underline">apostille services</Link>? We handle that too.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'We Come to You', 
                desc: 'Home, office, hospital, nursing facility, or anywhere you need notarization services.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              { 
                title: 'Same-Day & Rush Available', 
                desc: 'Urgent documents? We offer same-day and rush appointments throughout DFW—evenings and weekends included.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              { 
                title: 'All Document Types', 
                desc: 'Real estate, legal, business, medical, and personal documents—properly executed the first time.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-8 shadow-sm border border-neutral-200 hover:shadow-md hover:border-electric-blue/30 transition-all">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-proof mb-3">{item.title}</h3>
                <p className="text-neutral-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-neutral-300"></div>
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Common Situations</span>
              <div className="h-px flex-1 bg-neutral-300"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-proof">When You Need a Notary Fast</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/loan-signing" className="group bg-white rounded-lg p-8 shadow-sm border border-neutral-200 hover:shadow-md hover:border-electric-blue/30 transition-all">
              <h3 className="text-xl font-bold text-proof mb-3 group-hover:text-electric-blue transition-colors flex items-center gap-2">
                Real Estate Closings
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </h3>
              <p className="text-neutral-700">
                Loan signings, refinance documents, purchase agreements at your home or title office.
              </p>
            </Link>
            {[
              { title: 'Legal Documents', desc: 'Affidavits, power of attorney, trusts, wills, and estate planning documents.' },
              { title: 'Business Contracts', desc: 'Corporate agreements, vendor contracts, employment documents, and organizational filings.' },
              { title: 'Medical & Healthcare', desc: 'Hospital visits, assisted living facilities, HIPAA authorizations, advance directives.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-8 shadow-sm border border-neutral-200 hover:shadow-md hover:border-electric-blue/30 transition-all">
                <h3 className="text-xl font-bold text-proof mb-3">{item.title}</h3>
                <p className="text-neutral-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-proof mb-4">Simple 3-Step Process</h2>
            <p className="text-lg text-neutral-600">From booking to signed—we make it effortless.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Book Your Time', desc: 'Choose a time that works for you—same-day, evening, or weekend appointments available.' },
              { step: '2', title: 'We Arrive Prepared', desc: 'Your notary arrives at your location with all necessary supplies, ready to execute.' },
              { step: '3', title: 'Sign & Done', desc: 'Documents are properly notarized, witnessed if needed, and you receive copies immediately.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-electric-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-proof mb-3">{item.title}</h3>
                <p className="text-neutral-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-electric-blue text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stop Rescheduling. Get It Done Today.</h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Book your mobile notary appointment now—we'll come to you at your preferred time and location across DFW.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/book?service=general" 
              className="inline-block bg-white text-proof hover:bg-neutral-100 font-bold py-5 px-12 rounded text-xl shadow-2xl hover:shadow-xl hover:scale-105 transition-all"
            >
              Book Your Appointment
            </Link>
            <Link 
              to="/ron" 
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-proof font-bold py-5 px-12 rounded text-xl transition-all"
            >
              Or Try Online Notarization
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileNotaryPage;
