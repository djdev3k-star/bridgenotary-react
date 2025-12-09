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
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-bold text-white mb-4">Bridge Notary</h3>
            <p className="text-gray-300 mb-6">
              Professional mobile notary and loan signing services in the Greater Houston area.
            </p>
            <div className="space-y-4">
              {/* TODO: Add phone contact for future development */}
              {/* <a href="tel:+14696298932" className="flex items-center text-gray-300 hover:text-white transition-colors"> */}
                {/* <span className="text-lg">(469) 629-8932</span> */}
              {/* </a> */}
              <a href="mailto:contact@bridgenotary.com" className="text-gray-300 hover:text-white transition-colors">
                contact@bridgenotary.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-base font-semibold text-gray-200 uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-base font-semibold text-gray-200 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div className="md:col-span-4">
            <div className="bg-gray-800 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-2">Ready to get started?</h4>
              <p className="text-gray-300 mb-4">
                Book your signing appointment now or contact us for special requests.
              </p>
              <Link to="/book">
                <Button variant="primary" className="w-full mb-3">
                  Schedule a Signing
                </Button>
              </Link>
              <p className="text-sm text-gray-300 text-center">
                Available 7 days a week
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Bridge Notary. All rights reserved.
            </p>
            <ul className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.legal.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 hover:text-white text-sm transition-colors">
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
