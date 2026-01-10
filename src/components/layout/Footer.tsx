import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

const footerLinks = {
  resources: [
    { label: 'Services', path: '/services' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Remote Notary', path: '/ron' },
    { label: 'Resources', path: '/resources' },
  ],
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Bridge Notary Pro', path: '/pro' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-off-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Bridge Notary</h3>
            <p className="text-white mb-6 text-sm leading-relaxed">
              Professional mobile notary and loan signing services for individuals and businesses across DFW.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+14696298932" className="flex items-center text-white hover:text-professional-blue transition-colors">
                <span className="font-semibold">(469) 629-8932</span>
              </a>
              <a href="mailto:contact@bridgenotary.com" className="block text-white hover:text-professional-blue transition-colors">
                contact@bridgenotary.com
              </a>
            </div>
            {/* Trust Markers */}
            <div className="mt-6 pt-6 border-t border-off-white/20 space-y-2 text-xs text-off-white/90">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>NNA Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>$100K E&O Insurance</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Available 24/7</span>
              </div>
            </div>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white hover:text-professional-blue transition-colors text-sm font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white hover:text-professional-blue transition-colors text-sm font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Ready to Book?</h4>
            <p className="text-white mb-4 text-sm leading-relaxed">
              Schedule your appointment in minutes.
            </p>
            <Link to="/book" className="inline-block w-full bg-professional-blue text-white hover:bg-professional-blue/90 font-semibold py-3 px-4 rounded-lg text-center transition-all">
              Schedule Now
            </Link>
            <p className="text-xs text-off-white/80 text-center mt-4">
              Next-day availability • Flexible hours
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-off-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-off-white/75 text-xs">
              &copy; {new Date().getFullYear()} Bridge Notary. All rights reserved. | Licensed in Texas | NNA Certified
            </p>
            <ul className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.legal.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-off-white/85 hover:text-white text-xs transition-colors font-medium">
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
