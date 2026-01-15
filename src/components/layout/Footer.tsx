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
              <a href="tel:+14696298932" className="flex items-center text-charcoal hover:text-professional-blue transition-colors font-semibold">
                (469) 629-8932
              </a>
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

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-professional-blue/10">
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
