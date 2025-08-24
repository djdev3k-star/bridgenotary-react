const About = () => (
  <div className="section">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-proof mb-6">Your Partner in Professional Notary Services</h1>
      <p className="text-xl text-neutral-700 mb-12">
        Bridge Notary is dedicated to providing reliable, accurate, and professional notarial services to title companies, lenders, and real estate professionals. Our mission is to deliver seamless closings with confidence and integrity.
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-10 text-left mt-12 card">
      <div>
        <h2 className="text-2xl font-bold text-proof mb-4">Our Mission</h2>
        <p className="text-neutral-700 mb-6">
          To offer a professional and stress-free notary experience for our clients and their customers, with a focus on reliability, clear communication, and unwavering confidence at every step.
        </p>
        <h2 className="text-2xl font-bold text-proof mb-4">Our Vision</h2>
        <p className="text-neutral-700">
          To be the most trusted notary closing partner for complex, urgent, and high-value transactions, recognized for our professionalism, punctuality, and meticulous attention to detail.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-proof mb-4">Credentials & Compliance</h2>
        <ul className="list-disc list-inside text-neutral-700 space-y-2 text-lg">
          <li>Commissioned Notary Public in [State]</li>
          <li>Bonded & E&O Insured ($25,000+)</li>
          <li>NNA Certified & Background Screened</li>
          <li>Texas Equity Loan Law Compliant</li>
        </ul>
      </div>
    </div>
  </div>
);

export default About;
