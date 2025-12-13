import { Link } from "react-router-dom";

const About = () => (
  <div className="w-full bg-white">
    {/* Hero Section */}
    <section className="relative overflow-hidden bg-white border-b border-neutral-200 w-screen left-1/2 -translate-x-1/2">
      <div className="max-w-6xl mx-auto py-20 md:py-24 px-6">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-electric-blue mb-4">About Us</p>
        <h1 className="text-4xl md:text-5xl font-bold text-proof mb-6 leading-tight">
          The Bridge Notary Story
        </h1>
        <p className="text-xl text-neutral-600 max-w-3xl leading-relaxed">
          What started as a passion for helping people navigate important life moments has grown into a trusted notary service partner for title companies, lenders, and individuals across the Dallas-Fort Worth area.
        </p>
      </div>
    </section>

    {/* Our Story */}
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-neutral-700 leading-[1.9] mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-proof first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
            Bridge Notary was founded with a simple belief: every signature tells a story. Whether it's a first-time homebuyer signing their closing documents, a business owner finalizing a critical agreement, or a family handling estate matters, we recognized that these moments deserve more than just a stamp—they deserve care, professionalism, and peace of mind.
          </p>
          <p className="text-lg text-neutral-700 leading-[1.9] mb-8">
            Our founder, with over a decade of experience in real estate and legal documentation, saw a gap in the market. Too often, notary services were treated as an afterthought—rushed, impersonal, and prone to errors that caused delays and frustration. We set out to change that.
          </p>
          <p className="text-lg text-neutral-700 leading-[1.9] mb-8">
            Today, Bridge Notary serves as a trusted partner for title companies, mortgage lenders, real estate professionals, and individuals throughout the DFW metroplex. We've built our reputation on three pillars: <strong className="text-proof">reliability</strong> (we show up on time, every time), <strong className="text-proof">accuracy</strong> (we get documents right the first time), and <strong className="text-proof">communication</strong> (we keep everyone informed throughout the process).
          </p>
          <div className="my-12 pl-6 border-l-4 border-electric-blue/30 text-neutral-800 italic text-xl leading-relaxed">
            "Behind every document is a story—a new home, a business deal, a family legacy. We treat each signing with the care it deserves."
          </div>
          <p className="text-lg text-neutral-700 leading-[1.9]">
            Whether you need a mobile notary to come to your location, remote online notarization from the comfort of your home, or assistance navigating the apostille process for international documents, Bridge Notary is here to make it seamless.
          </p>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 lg:py-28 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Mission */}
          <div className="bg-white p-8 md:p-10 border border-neutral-200">
            <div className="mb-6">
              <svg className="w-8 h-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-proof mb-4">Our Mission</h2>
            <p className="text-neutral-700 text-lg leading-relaxed">
              To offer a professional and stress-free notary experience for our clients and their customers, with a focus on reliability, clear communication, and unwavering confidence at every step.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 md:p-10 border border-neutral-200">
            <div className="mb-6">
              <svg className="w-8 h-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-proof mb-4">Our Vision</h2>
            <p className="text-neutral-700 text-lg leading-relaxed">
              To be the most trusted notary closing partner for complex, urgent, and high-value transactions, recognized for our professionalism, punctuality, and meticulous attention to detail.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-proof mb-4">What Guides Us</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            These core values shape every interaction and every signing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Reliability",
              desc: "We show up on time, prepared, and ready. Our 99% on-time rate isn't a marketing claim—it's our standard.",
              icon: (
                <svg className="w-6 h-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
              title: "Accuracy",
              desc: "We get documents right the first time. Missing signatures and incorrect notarizations cause costly delays—we prevent them.",
              icon: (
                <svg className="w-6 h-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
              title: "Communication",
              desc: "From booking to completion, we keep everyone informed. No surprises, no missed details, no uncertainty.",
              icon: (
                <svg className="w-6 h-6 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              )
            },
          ].map((value) => (
            <div key={value.title} className="text-center">
              <div className="w-12 h-12 bg-electric-blue/10 flex items-center justify-center mx-auto mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-proof mb-3">{value.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 lg:py-28 bg-electric-blue">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Experience the Difference?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Let us show you what professional notary service looks like.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/book" 
            className="inline-flex items-center justify-center gap-3 bg-white text-proof hover:bg-neutral-100 transition-all text-lg py-4 px-8 font-semibold shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book an Appointment
          </Link>
          <Link 
            to="/services" 
            className="inline-flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-proof transition-all text-lg py-4 px-8 font-semibold"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default About;
