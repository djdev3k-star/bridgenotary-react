import { Link } from "react-router-dom";

const About = () => (
  <div className="w-full bg-professional-blue/10">
    {/* Hero Section */}
    <section className="relative overflow-hidden bg-professional-blue/10 text-charcoal w-screen left-1/2 -translate-x-1/2 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.1em] uppercase text-professional-blue mb-4">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-deep-navy">
            Professional Notary Services Built on Trust
          </h1>
          <p className="text-xl text-charcoal/80 leading-relaxed">
            For title companies, mortgage lenders, and individuals across the Dallas-Fort Worth area, Bridge Notary is the reliable partner they depend on.
          </p>
        </div>
      </div>
    </section>

    {/* Our Story */}
    <section className="py-20 lg:py-28 bg-professional-blue/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-lg text-charcoal leading-[1.9] mb-8">
            Bridge Notary was founded with a simple belief: <span className="font-semibold text-deep-navy">every signature tells a story</span>. Whether it's a first-time homebuyer signing their closing documents, a business owner finalizing a critical agreement, or a family handling estate matters, we recognized that these moments deserve more than just a stamp—they deserve care, professionalism, and peace of mind.
          </p>
          <p className="text-lg text-charcoal leading-[1.9] mb-8">
            Our founders saw a gap in the market. Too many notary services treated signings as transactions to rush through. Bridge Notary was created to <span className="font-semibold text-deep-navy">raise the standard</span>—making the process clear, professional, and reliable for every client and every document.
          </p>
          <p className="text-lg text-charcoal leading-[1.9] mb-8">
            Today, Bridge Notary serves as a trusted partner for title companies, mortgage lenders, real estate professionals, and individuals throughout the DFW metroplex. Our reputation is built on three pillars:
          </p>
          
          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-off-white p-6 border border-neutral-200">
              <h4 className="font-bold text-deep-navy text-lg mb-2">Reliability</h4>
              <p className="text-charcoal leading-relaxed text-sm">We show up on time, prepared, and ready. Our 99% on-time rate is our standard, not a marketing claim.</p>
            </div>
            <div className="bg-off-white p-6 border border-neutral-200">
              <h4 className="font-bold text-deep-navy text-lg mb-2">Accuracy</h4>
              <p className="text-charcoal leading-relaxed text-sm">We get documents right the first time. Missing signatures cost money—we prevent them.</p>
            </div>
            <div className="bg-off-white p-6 border border-neutral-200">
              <h4 className="font-bold text-deep-navy text-lg mb-2">Communication</h4>
              <p className="text-charcoal leading-relaxed text-sm">From booking to completion, we keep everyone informed. No surprises, no missed details.</p>
            </div>
          </div>

          <div className="bg-professional-blue/5 border-l-4 border-professional-blue p-6 rounded-r-lg mb-8">
            <p className="text-charcoal italic text-lg leading-relaxed">
              "Behind every document is a story—a new home, a business deal, a family legacy. We treat each signing with the care it deserves."
            </p>
          </div>

          <p className="text-lg text-charcoal leading-[1.9]">
            Whether you need a mobile notary to come to your location, remote online notarization from the comfort of your home, or assistance navigating the apostille process for international documents, Bridge Notary is here to make it seamless and reliable.
          </p>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">What We Strive for Every Single Day</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-professional-blue/5 p-10 border-l-4 border-professional-blue rounded-r-lg">
            <div className="flex items-start gap-4 mb-4">
              <svg className="w-7 h-7 text-professional-blue flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-2xl font-bold text-deep-navy">Our Mission</h3>
            </div>
            <p className="text-charcoal leading-[1.8] text-base">
              To offer a professional and stress-free notary experience for our clients and their customers, with unwavering focus on reliability, clear communication, and confidence at every step of every transaction.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-muted-gold/5 p-10 border-l-4 border-muted-gold rounded-r-lg">
            <div className="flex items-start gap-4 mb-4">
              <svg className="w-7 h-7 text-muted-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <h3 className="text-2xl font-bold text-deep-navy">Our Vision</h3>
            </div>
            <p className="text-charcoal leading-[1.8] text-base">
              To be the most trusted notary closing partner for complex, urgent, and high-value transactions, recognized for professionalism, punctuality, and meticulous attention to detail.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="py-20 lg:py-28 bg-professional-blue/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">What Guides Us</h2>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            These core values shape every interaction and every signing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Reliability",
              desc: "We show up on time, prepared, and ready. Our 99% on-time rate isn't a marketing claim—it's our standard.",
              icon: "✓"
            },
            {
              title: "Accuracy",
              desc: "We get documents right the first time. Missing signatures and incorrect notarizations cause costly delays—we prevent them.",
              icon: "✓"
            },
            {
              title: "Communication",
              desc: "From booking to completion, we keep everyone informed. No surprises, no missed details, no uncertainty.",
              icon: "✓"
            },
          ].map((value) => (
            <div key={value.title} className="bg-white p-8 border border-neutral-200 hover:border-professional-blue hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-professional-blue text-white flex items-center justify-center font-bold mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-deep-navy mb-3">{value.title}</h3>
              <p className="text-charcoal leading-[1.7]">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-24 lg:py-32 bg-deep-navy text-off-white w-screen left-1/2 -translate-x-1/2">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to Experience the Difference?
        </h2>
        <p className="text-xl text-off-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Let us show you what professional, reliable notary service truly means.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/book" 
            className="inline-flex items-center justify-center gap-3 bg-professional-blue text-white hover:bg-professional-blue/90 transition-all text-lg py-4 px-8 font-semibold shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book an Appointment
          </Link>
          <Link 
            to="/services" 
            className="inline-flex items-center justify-center gap-3 border-2 border-off-white text-off-white hover:bg-off-white hover:text-deep-navy transition-all text-lg py-4 px-8 font-semibold"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default About;
