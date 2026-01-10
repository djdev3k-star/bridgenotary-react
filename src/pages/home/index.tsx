import { Link } from "react-router-dom";
import heroImage from "@/assets/images/commloanFlyers2.png";
import TrustSection from "@/components/common/TrustSection";

const HomePage = () => (
  <div className="w-full bg-white pt-20">
    {/* Hero Section - Clean Professional Design */}
    <section className="relative overflow-hidden py-20 md:py-32 w-full">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          {/* Credentials */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full text-xs font-semibold text-deep-navy">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              NNA Certified
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full text-xs font-semibold text-deep-navy">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              $100K E&O Insured
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full text-xs font-semibold text-deep-navy">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Available 24/7
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-bold text-deep-navy mb-6 leading-tight">
            Professional Notary Services You Can <span className="text-professional-blue">Trust</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-charcoal/80 mb-8 leading-relaxed max-w-lg">
            Reliable loan signings, mobile notarization, and apostille services for individuals and businesses across the Dallas-Fort Worth area.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/book" 
              className="button-primary inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book an Appointment
            </Link>
            <Link 
              to="/contact" 
              className="button-outline inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block">
          <img 
            src={heroImage} 
            alt="Professional notary services"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>

    {/* Services Overview - Card Grid */}
    <section className="py-20 md:py-28 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-professional-blue uppercase tracking-wider mb-3">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">Professional Notary Solutions</h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            From loan signings to international document authentication—we handle every notarization need with expertise and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ),
              title: "Loan Signing",
              desc: "Purchase, refinance, reverse mortgage & more",
              link: "/loan-signing"
            },
            {
              icon: (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Apostille",
              desc: "International document authentication",
              link: "/apostille"
            },
            {
              icon: (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              title: "Remote Online",
              desc: "Notarize from anywhere, anytime",
              link: "/ron"
            },
            {
              icon: (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: "Mobile Notary",
              desc: "We come to you—home, office, or hospital",
              link: "/services"
            },
          ].map((item) => (
            <Link 
              key={item.title} 
              to={item.link}
              className="service-card"
            >
              <div className="mb-4 text-professional-blue">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-deep-navy mb-2">{item.title}</h3>
              <p className="text-charcoal/70 text-sm mb-4 leading-relaxed">{item.desc}</p>
              <span className="inline-flex items-center gap-1 text-professional-blue text-sm font-semibold hover:gap-2 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Trust & Credibility Section */}
    <TrustSection />

    {/* Credentials */}
    <section className="py-20 lg:py-28 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-neutral-300"></div>
            <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Credentials</span>
            <div className="h-px w-12 bg-neutral-300"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-proof mb-4">Licensed, Bonded & Certified</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Your documents deserve professional handling. We maintain the highest standards of compliance and certification.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: (
                <svg className="w-8 h-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: "Texas Commissioned",
              desc: "Licensed Notary Public in the State of Texas"
            },
            {
              icon: (
                <svg className="w-8 h-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Bonded & Insured",
              desc: "$100,000 E&O Insurance Coverage"
            },
            {
              icon: (
                <svg className="w-8 h-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              ),
              title: "NNA Certified",
              desc: "Background Screened & Certified Signing Agent"
            },
            {
              icon: (
                <svg className="w-8 h-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              ),
              title: "TX Equity Compliant",
              desc: "Certified in Texas Equity Loan Laws"
            },
          ].map((item) => (
            <div key={item.title} className="bg-white p-6 border border-neutral-200 hover:border-electric-blue/30 hover:shadow-lg transition-all text-center group">
              <div className="mb-5 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-proof mb-2">{item.title}</h3>
              <p className="text-neutral-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-neutral-300"></div>
              <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Why Bridge Notary</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-proof mb-6">
              More Than Just a Signature
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              We understand that behind every document is a story—a new home, a business deal, a legal matter. That's why we treat every signing with the care and attention it deserves.
            </p>

            <div className="space-y-4">
              {[
                "Punctual, professional, and prepared—every time",
                "Clear communication from booking to completion",
                "Expertise in complex loan documents",
                "Flexible scheduling including evenings & weekends",
                "Same-day and rush service available",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-electric-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="bg-electric-blue/5 border border-electric-blue/10 p-8 md:p-12">
              <div className="bg-white shadow-xl p-6 md:p-8 border border-neutral-100">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-neutral-100">
                  <div className="w-16 h-16 bg-electric-blue flex items-center justify-center text-white text-2xl font-bold">
                    BN
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-proof">Bridge Notary</h4>
                    <p className="text-neutral-500">Professional Notary Services</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Client Satisfaction</span>
                    <span className="text-proof font-bold">99%</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-2">
                    <div className="bg-electric-blue h-2" style={{ width: '99%' }}></div>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-neutral-600">On-Time Rate</span>
                    <span className="text-proof font-bold">99%</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-2">
                    <div className="bg-electric-blue h-2" style={{ width: '99%' }}></div>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-neutral-600">Document Accuracy</span>
                    <span className="text-proof font-bold">100%</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-2">
                    <div className="bg-electric-blue h-2" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating badge hidden */}
            {/* <div className="absolute -top-4 -right-4 bg-gold text-proof px-4 py-2 text-sm font-bold shadow-lg">
              ⭐ 5.0 Rating
            </div> */}
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 lg:py-28 bg-gradient-to-br from-proof via-proof to-electric-blue">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Work With a Notary You Can Trust?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Whether it's a simple notarization or a complex loan signing, we're here to make it seamless.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/book" 
            className="inline-flex items-center justify-center gap-3 bg-white text-proof hover:bg-neutral-100 transition-all text-lg py-4 px-8 font-semibold shadow-xl transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule Now
          </Link>
          <a 
            href="tel:+14696298932" 
            className="inline-flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-proof transition-all text-lg py-4 px-8 font-semibold"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call (469) 629-8932
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
