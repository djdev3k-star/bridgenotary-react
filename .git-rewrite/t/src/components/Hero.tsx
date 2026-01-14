import { Link } from "react-router-dom";

const Hero = () => (
  <section className="bg-white">
    <div className="section text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-proof">
          Your Trusted Partner for
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-gold">
            Secure Closings
          </span>
        </h1>
        <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-700 mb-6">
          Seamless, Secure Notarizations
        </h2>
        <p className="text-xl text-neutral-600 mb-8 leading-relaxed max-w-2xl mx-auto">
          Bridge Notary offers professional, reliable, and convenient mobile notary and loan signing services for title companies, lenders, and real estate professionals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/book" className="button-primary">
            Start a Signing
          </Link>
          <Link to="/pricing" className="button-outline">
            View Services & Pricing
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
