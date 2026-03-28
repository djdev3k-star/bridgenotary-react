import { Link } from 'react-router-dom';

const footerLinks = {
  services: [
    { label: 'Mobile Notary', path: '/services/mobile' },
    { label: 'Loan Signing', path: '/loan-signing' },
    { label: 'Apostille Services', path: '/apostille' },
    { label: 'Remote Online Notary', path: '/ron' },
  ],
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'FAQ', path: '/faq' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-professional-blue/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex flex-col gap-0.5 mb-4">
              <h3 className="text-2xl font-bold text-charcoal tracking-tight">Bridge Notary</h3>
              <div className="h-1 w-8 bg-professional-blue"></div>
            </div>
            <p className="text-charcoal/70 mb-6 text-sm leading-relaxed">
              Professional notary services throughout DFW. Licensed, certified, and insured.
            </p>
            <div className="space-y-3 text-sm">
              <span className="flex items-center text-charcoal font-semibold">
                Contact us for assistance
              </span>
              <a href="mailto:contact@bridgenotary.com" className="block text-charcoal/75 hover:text-professional-blue transition-colors text-sm">
                contact@bridgenotary.com
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs font-bold text-charcoal uppercase tracking-widest mb-6 letter-spacing">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-charcoal/75 hover:text-professional-blue transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-bold text-charcoal uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-charcoal/75 hover:text-professional-blue transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Credentials Column */}
          <div>
            <h4 className="text-xs font-bold text-charcoal uppercase tracking-widest mb-6">Credentials</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-charcoal/75">NNA Certified</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-charcoal/75">$100K E&O Insurance</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-charcoal/75">Licensed in Texas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Texas Notary Disclaimer */}
        <div className="pt-8 border-t border-professional-blue/10 mb-6">
          <div className="bg-professional-blue/5 border border-professional-blue/10 p-4 rounded text-xs text-charcoal/70 leading-relaxed">
            <p className="font-semibold text-charcoal mb-2">Texas Notary Public Disclaimer</p>
            <p className="mb-2">
              Bridge Notary is a Texas notary service. Our notaries are <strong>not attorneys</strong> and are prohibited by Texas law from providing legal advice. We cannot explain or interpret documents, recommend specific documents, advise you on the legal effect of documents, or prepare documents for you. For legal questions, consult a licensed Texas attorney.
            </p>
            <p className="mb-2">
              A notary public is a public official commissioned by the Texas Secretary of State to witness signatures, administer oaths, and certify copies of certain documents. Notarization does not validate the contents of a document or make it legally binding—it only confirms signer identity and willingness.
            </p>
            <p>
              Notary fees in Texas are set by state law. Additional charges may apply for mobile travel, after-hours service, and other non-notarial services. See our <Link to="/pricing" className="text-professional-blue hover:underline">pricing page</Link> for details.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-professional-blue/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-charcoal/70 text-xs">
              &copy; {new Date().getFullYear()} Bridge Notary. All rights reserved.
            </p>
            <ul className="flex space-x-6">
              {footerLinks.legal.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-charcoal/70 hover:text-professional-blue text-xs transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
