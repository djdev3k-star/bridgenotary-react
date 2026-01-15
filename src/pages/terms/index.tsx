import { Link } from 'react-router-dom';
import { featureFlags } from '@/utils/featureFlags';

const Terms = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20 border-b border-professional-blue/20" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Terms of Service</h1>
          <p className="text-lg text-charcoal/70">Please read these terms carefully before using Bridge Notary services.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-white" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">1. Acceptance of Terms</h2>
              <p className="text-charcoal/70 leading-relaxed">
                By accessing and using Bridge Notary services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">2. Notarization Services</h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Bridge Notary provides professional notarization services including:
              </p>
              <ul className="list-disc list-inside text-charcoal/70 space-y-2">
                <li>Mobile notarization at client location</li>
                <li>Remote online notarization (RON)</li>
                {featureFlags.enableApostille && <li>Apostille services</li>}
                <li>Document authentication</li>
              </ul>
              <p className="text-charcoal/70 leading-relaxed mt-4">
                All services are performed in accordance with applicable state and federal laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">3. Client Responsibilities</h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc list-inside text-charcoal/70 space-y-2">
                <li>Provide accurate and truthful information</li>
                <li>Present valid government-issued identification</li>
                <li>Ensure documents are legal and not fraudulent</li>
                <li>Provide clear access to signing location (for mobile notarization)</li>
                <li>Follow all instructions from the notary</li>
                <li>Pay applicable fees upon service completion</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">4. Payment Terms</h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Payment is due at the time of service unless alternative arrangements are made. We accept:
              </p>
              <ul className="list-disc list-inside text-charcoal/70 space-y-2">
                <li>Credit/Debit cards</li>
                <li>Cash</li>
                <li>Venmo and Cash App</li>
                <li>Bank transfer (for corporate accounts)</li>
              </ul>
              <p className="text-charcoal/70 leading-relaxed mt-4">
                Pricing is based on service type, location, and complexity. All fees are provided before service initiation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">5. Cancellation Policy</h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Cancellations must be made with at least 24 hours notice to avoid fees. Cancellations with less than 24 hours notice will incur a $25 administrative fee. No-shows will be charged the full service fee.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">6. Limitation of Liability</h2>
              <p className="text-charcoal/70 leading-relaxed">
                Bridge Notary provides notarization services in accordance with applicable laws. We are not liable for consequences of notarization, including issues arising from document rejection by third parties or regulatory bodies. The notary acts as an impartial witness only.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">7. Disclaimer</h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Bridge Notary does not provide legal advice. Notaries are not attorneys and cannot advise on legal matters. If legal advice is needed, clients should consult with a licensed attorney.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">8. Confidentiality</h2>
              <p className="text-charcoal/70 leading-relaxed">
                Bridge Notary maintains strict confidentiality regarding client information and documents, except as required by law or court order.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">9. Prohibited Activities</h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Clients agree not to:
              </p>
              <ul className="list-disc list-inside text-charcoal/70 space-y-2">
                <li>Provide false or misleading information</li>
                <li>Request notarization of fraudulent documents</li>
                <li>Attempt to coerce or intimidate the notary</li>
                <li>Use services for illegal purposes</li>
                <li>Harass or abuse Bridge Notary staff</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">10. Dispute Resolution</h2>
              <p className="text-charcoal/70 leading-relaxed">
                Any disputes arising from these terms or services shall be resolved through good faith negotiation. If negotiation fails, disputes will be resolved through binding arbitration in accordance with Texas law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">11. Modifications</h2>
              <p className="text-charcoal/70 leading-relaxed">
                Bridge Notary reserves the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of services following changes indicates acceptance of new terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">12. Contact Information</h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                For questions about these Terms of Service:
              </p>
              <div className="bg-professional-blue/5 border-l-4 border-professional-blue p-6 rounded-r">
                <p className="text-charcoal font-semibold mb-2">Bridge Notary</p>
                <p className="text-charcoal/70">Email: <a href="mailto:contact@bridgenotary.com" className="text-professional-blue hover:underline">contact@bridgenotary.com</a></p>
                <p className="text-charcoal/70">Phone: <a href="tel:+14696298932" className="text-professional-blue hover:underline">(469) 629-8932</a></p>
              </div>
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
      <section className="py-20 lg:py-28 bg-professional-blue/5 border-t border-professional-blue/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border-l-4 border-professional-blue p-8 mb-12 rounded-sm">
            <h2 className="text-2xl font-bold text-charcoal mb-4">IMPORTANT LEGAL DISCLAIMER</h2>
            <div className="space-y-4 text-charcoal/70 leading-relaxed text-sm md:text-base">
              <p>
                <span className="font-semibold text-charcoal">Bridge Notary is NOT a law firm.</span> Our notaries are NOT licensed attorneys. We do NOT provide legal advice, legal representation, legal review, or legal interpretation of documents.
              </p>
              
              <div>
                <p className="font-semibold text-charcoal mb-2">Services Bridge Notary DOES provide:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Notarization (witnessing and authenticating signatures)</li>
                  <li>Identity verification per Texas notary law</li>
                  <li>Remote online notarization (RON) services</li>
                  <li>Apostille coordination and secure courier services</li>
                  <li>Loan document signing services (as notary only)</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-charcoal mb-2">Services Bridge Notary does NOT provide:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Legal advice of any kind</li>
                  <li>Document interpretation or analysis</li>
                  <li>Legal representation</li>
                  <li>Will, estate, or probate planning</li>
                  <li>Power of attorney guidance</li>
                  <li>Immigration or tax advice</li>
                  <li>Determination of document validity or legality</li>
                </ul>
              </div>

              <p>
                <span className="font-semibold text-charcoal">For legal questions,</span> consult a Texas-licensed attorney. We are happy to notarize documents you prepare with legal counsel, but we cannot advise you on legal matters.
              </p>

              <p className="pt-2 border-t border-charcoal/20">
                <span className="font-semibold text-charcoal">RON Limitations:</span> Remote online notarization cannot be used for certain documents (such as some powers of attorney and certain financial instruments). Contact us to confirm if your specific documents can be notarized remotely.
              </p>

              <p>
                <span className="font-semibold text-charcoal">Bonding & Insurance:</span> All Texas notaries are bonded as required by law. Notary bonding covers errors in the notarial act itself, not document validity, legal interpretation, or client outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-white border-t border-professional-blue/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-charcoal/70 mb-8">Book your notarization appointment or contact us with any questions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="inline-flex items-center justify-center gap-2 bg-professional-blue text-white hover:bg-professional-blue/90 font-semibold py-4 px-8 transition-all">
              Book Now
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-professional-blue text-professional-blue hover:bg-professional-blue hover:text-white font-semibold py-4 px-8 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
