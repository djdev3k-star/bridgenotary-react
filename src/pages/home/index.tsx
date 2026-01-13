import { Link } from "react-router-dom";
import heroImage from "@/assets/images/commloanFlyers2.png";
import TrustSection from "@/components/common/TrustSection";

const HomePage = () => (
  <div className="w-full bg-off-white">
    {/* Hero Section */}
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-32 md:pb-48 bg-off-white" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
        {/* Left Content */}
        <div className="text-charcoal">
          {/* Credentials */}
          <div className="flex flex-wrap gap-2 mb-6 md:mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-professional-blue/10 border border-professional-blue/30 text-xs font-semibold text-professional-blue">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              NNA Certified
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-professional-blue/10 border border-professional-blue/30 text-xs font-semibold text-professional-blue">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              $100K E&O Insured
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight text-charcoal">
            Professional Notary Services <span className="text-professional-blue">You Can Trust</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-charcoal/70 mb-8 md:mb-10 leading-relaxed max-w-lg font-light">
            Reliable loan signings, mobile notarization, and apostille services for individuals and businesses across the Dallas-Fort Worth area.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/book" 
              className="group inline-flex items-center justify-center gap-2 bg-professional-blue text-white hover:bg-professional-blue/90 font-semibold py-4 px-8 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book an Appointment
            </Link>
            <Link 
              to="/contact" 
              className="group inline-flex items-center justify-center gap-2 border-2 border-charcoal/20 text-charcoal hover:border-professional-blue hover:bg-professional-blue/5 font-semibold py-4 px-8 transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block relative">
          <img 
            src={heroImage} 
            alt="Professional notary services"
            className="w-full h-auto rounded-2xl shadow-xl object-cover border border-charcoal/10"
          />
        </div>
      </div>
    </section>

    {/* Services Overview */}
    <section className="py-24 md:py-36 bg-off-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-professional-blue uppercase tracking-widest bg-professional-blue/10 px-4 py-2">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Professional Notary Solutions</h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto font-light">
            From loan signings to international document authentication—we handle every notarization need with expertise and reliability.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 relative">
          {/* Geometric overlays */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-professional-blue/3 -z-10"></div>
          
          {[
            {
              icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ),
              title: "Loan Signing",
              desc: "Purchase, refinance, reverse mortgage & more",
              link: "/loan-signing",
              color: "from-professional-blue/5 to-transparent",
              borderColor: "border-professional-blue/20",
              iconColor: "text-professional-blue"
            },
            {
              icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0110.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Apostille",
              desc: "International document authentication",
              link: "/apostille",
              color: "from-professional-blue/5 to-transparent",
              borderColor: "border-professional-blue/20",
              iconColor: "text-professional-blue"
            },
            {
              icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              title: "Remote Online",
              desc: "Notarize from anywhere, anytime",
              link: "/ron",
              color: "from-professional-blue/5 to-transparent",
              borderColor: "border-professional-blue/20",
              iconColor: "text-professional-blue"
            },
            {
              icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: "Mobile Notary",
              desc: "We come to you—home, office, or hospital",
              link: "/services/mobile",
              color: "from-professional-blue/5 to-transparent",
              borderColor: "border-professional-blue/20",
              iconColor: "text-professional-blue"
            },
          ].map((item, idx) => (
            <Link 
              key={item.title} 
              to={item.link}
              className={`group border-l-2 border-professional-blue pl-6 py-6 transition-all hover:scale-105 cursor-pointer fade-in-up fade-in-up-delay-${idx + 1}`}
              style={{animationDelay: `${idx * 0.1}s`}}
            >
              <div className="relative z-10">
                <div className="mb-6 text-professional-blue group-hover:scale-110 transition-transform origin-left">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-charcoal/70 text-sm mb-6 leading-relaxed">{item.desc}</p>
                <span className="inline-flex items-center gap-2 text-professional-blue text-sm font-semibold group-hover:gap-3 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <TrustSection />

    {/* Why Choose Us */}
    <section className="py-20 lg:py-28 bg-white border-t border-charcoal/10" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-charcoal">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-professional-blue/40"></div>
              <span className="text-sm font-medium text-professional-blue uppercase tracking-wider">Why Bridge Notary</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-charcoal">
              More Than Just a Signature
            </h2>
            <p className="text-lg text-charcoal/70 mb-8 font-light">
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
                  <svg className="w-5 h-5 text-professional-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-charcoal/80 font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="border-l-2 border-professional-blue pl-6 py-4">
              <div className="space-y-4">
                <div className="flex items-center gap-4 pb-4 border-b border-professional-blue/20">
                  <div className="w-12 h-12 bg-professional-blue flex items-center justify-center text-white text-lg font-bold">
                    BN
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-charcoal">Bridge Notary</h4>
                    <p className="text-charcoal/70 text-sm">Professional Services</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-charcoal/70">Client Satisfaction</span>
                      <span className="text-professional-blue font-bold">99%</span>
                    </div>
                    <div className="w-full bg-professional-blue/20 h-2">
                      <div className="bg-professional-blue h-2" style={{ width: '99%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-charcoal/70">On-Time Rate</span>
                      <span className="text-professional-blue font-bold">99%</span>
                    </div>
                    <div className="w-full bg-professional-blue/20 h-2">
                      <div className="bg-professional-blue h-2" style={{ width: '99%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-charcoal/70">Document Accuracy</span>
                      <span className="text-professional-blue font-bold">100%</span>
                    </div>
                    <div className="w-full bg-professional-blue/20 h-2">
                      <div className="bg-professional-blue h-2" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-24 lg:py-32 bg-white" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
          Ready to Work With a Notary You Can Trust?
        </h2>
        <p className="text-xl text-charcoal/70 mb-10 max-w-2xl mx-auto">
          Whether it's a simple notarization or a complex loan signing, we're here to make it seamless.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/book" 
            className="inline-flex items-center justify-center gap-3 bg-professional-blue text-white hover:bg-professional-blue/90 transition-all text-lg py-4 px-8 font-semibold"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule Now
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
