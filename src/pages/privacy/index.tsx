import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20 border-b border-professional-blue/20 relative" style={{backgroundImage: 'radial-gradient(circle at 20% 40%, rgba(0, 85, 230, 0.05) 0%, transparent 40%), radial-gradient(circle at 80% 60%, rgba(255, 215, 0, 0.03) 0%, transparent 40%)'}}>'
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Privacy Policy</h1>
          <p className="text-lg text-charcoal/70">Your privacy is important to us. Learn how Bridge Notary protects your personal information.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-white relative" style={{backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(0, 85, 230, 0.05) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.03) 0%, transparent 40%)'}}>'
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">1. Information We Collect</h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                When you use Bridge Notary services, we collect information necessary to provide notarization services, including:
              </p>
              <ul className="list-disc list-inside text-charcoal/70 space-y-2">
                <li>Name, address, phone number, and email address</li>
                <li>Government-issued identification information</li>
                <li>Document details and signing information</li>
                <li>Payment information for services rendered</li>
                <li>Communication records with our team</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">2. How We Use Your Information</h2>
              <p className="text-charcoal/70 leading-relaxed">
                We use the information collected to:
              </p>
              <ul className="list-disc list-inside text-charcoal/70 space-y-2 mt-4">
                <li>Provide notarization and related services</li>
                <li>Verify identity and prevent fraud</li>
                <li>Process payments and send invoices</li>
                <li>Maintain notarial records as required by law</li>
                <li>Communicate with you about your services</li>
                <li>Improve our services and website</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">3. Data Security</h2>
              <p className="text-charcoal/70 leading-relaxed">
                We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and access controls. However, no transmission method over the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">4. Information Sharing</h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information. We may share information with:
              </p>
              <ul className="list-disc list-inside text-charcoal/70 space-y-2">
                <li>Service providers who assist in providing notarization services</li>
                <li>Legal entities when required by law or court order</li>
                <li>Your designated recipients for document delivery</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">5. Your Rights</h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside text-charcoal/70 space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">6. Cookies and Tracking</h2>
              <p className="text-charcoal/70 leading-relaxed">
                Our website uses cookies to enhance your experience. You can control cookie settings through your browser. Disabling cookies may affect website functionality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">7. Third-Party Links</h2>
              <p className="text-charcoal/70 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. We encourage you to review their privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">8. Contact Us</h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-professional-blue/5 border-l-4 border-professional-blue p-6 rounded-r">
                <p className="text-charcoal font-semibold mb-2">Bridge Notary</p>
                <p className="text-charcoal/70">Email: <a href="mailto:contact@bridgenotary.com" className="text-professional-blue hover:underline">contact@bridgenotary.com</a></p>
                <p className="text-charcoal/70">Phone: <a href="tel:+14696298932" className="text-professional-blue hover:underline">(469) 629-8932</a></p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">9. Policy Changes</h2>
              <p className="text-charcoal/70 leading-relaxed">
                We may update this Privacy Policy periodically. Changes will be effective upon posting to the website. We encourage you to review this policy regularly.
              </p>
            </div>

            <div className="pt-8 border-t border-professional-blue/20">
              <p className="text-sm text-charcoal/60">
                Last updated: January 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-white border-t border-professional-blue/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Questions About Our Policies?</h2>
          <p className="text-lg text-charcoal/70 mb-8">Contact us for clarification on how we protect your information.</p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-professional-blue text-white hover:bg-professional-blue/90 font-semibold py-4 px-8 transition-all">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
