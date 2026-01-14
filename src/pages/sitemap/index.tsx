import React from 'react';
import { Link } from 'react-router-dom';

interface SitemapRoute {
  path: string;
  title: string;
  component?: string;
  status: 'active' | 'inactive' | 'alias';
  children?: SitemapRoute[];
}

const Sitemap: React.FC = () => {
  const routes: SitemapRoute[] = [
    {
      path: '/',
      title: 'Home Page',
      component: 'HomePage',
      status: 'active'
    },
    {
      path: '/home1',
      title: 'Home Page (Alternative)',
      component: 'Home1Page',
      status: 'inactive'
    },
    {
      path: '/ron',
      title: 'Remote Online Notarization',
      component: 'RONPage',
      status: 'active'
    },
    {
      path: '/remote-notarization',
      title: 'Remote Notarization (Alias)',
      component: 'RONPage',
      status: 'alias'
    },
    {
      path: '/apostille',
      title: 'Apostille Services',
      component: 'ApostillePage',
      status: 'active',
      children: [
        {
          path: '/apostille/quiz',
          title: 'Apostille Quiz',
          component: 'ApostilleQuizPage',
          status: 'active'
        },
        {
          path: '/apostille/quiz-start',
          title: 'Apostille Quiz Start',
          component: 'ApostilleQuizStartPage',
          status: 'active'
        },
        {
          path: '/apostille/quiz-results',
          title: 'Apostille Quiz Results',
          component: 'ApostilleQuizResultsPage',
          status: 'active'
        },
        {
          path: '/destination-wedding',
          title: 'Document Authentication for Destination Weddings',
          component: 'DestinationWeddingPage',
          status: 'active'
        },
        {
          path: '/study-abroad',
          title: 'Apostille & Document Certification for Study Abroad',
          component: 'StudyAbroadPage',
          status: 'active'
        },
        {
          path: '/international-adoption',
          title: 'International Adoption Document Authentication',
          component: 'InternationalAdoptionPage',
          status: 'active'
        },
        {
          path: '/overseas-property',
          title: 'Overseas Property Document Authentication',
          component: 'OverseasPropertyPage',
          status: 'active'
        },
        {
          path: '/dual-citizenship',
          title: 'Dual Citizenship Document Authentication',
          component: 'DualCitizenshipPage',
          status: 'active'
        }
      ]
    },
    {
      path: '/loan-signing',
      title: 'Loan Signing Services',
      component: 'LoanSigningPage',
      status: 'active',
      children: [
        {
          path: '/loan-signing/refinance',
          title: 'Refinance Signings',
          component: 'RefinanceSigningPage',
          status: 'active'
        },
        {
          path: '/loan-signing/purchase',
          title: 'Purchase Signings',
          component: 'PurchaseSigningPage',
          status: 'active'
        },
        {
          path: '/loan-signing/seller',
          title: 'Seller Signings',
          component: 'SellerSigningPage',
          status: 'active'
        },
        {
          path: '/loan-signing/reverse',
          title: 'Reverse Mortgage Signings',
          component: 'ReverseMortgageSigningPage',
          status: 'active'
        },
        {
          path: '/loan-signing/heloc',
          title: 'HELOC / Equity Loan Signings',
          component: 'HELOCSigningPage',
          status: 'active'
        },
        {
          path: '/loan-signing/modification',
          title: 'Loan Modification Signings',
          component: 'LoanModificationSigningPage',
          status: 'active'
        },
        {
          path: '/loan-signing/commercial',
          title: 'Commercial Closing Signings',
          component: 'CommercialClosingSigningPage',
          status: 'active'
        },
        {
          path: '/loan-signing/property-tax',
          title: 'Property Tax Loan Signings',
          component: 'PropertyTaxLoanSigningPage',
          status: 'active'
        }
      ]
    },
    {
      path: '/services',
      title: 'All Services',
      component: 'Services',
      status: 'active',
      children: [
        {
          path: '/services/mobile',
          title: 'Mobile Notary Services',
          component: 'MobileNotaryPage',
          status: 'active'
        },
        {
          path: '/services/estate-trust',
          title: 'Estate & Trust Services',
          component: 'EstateTrustPage',
          status: 'active'
        },
        {
          path: '/services/power-of-attorney',
          title: 'Power of Attorney Services',
          component: 'PowerOfAttorneyPage',
          status: 'active'
        },
        {
          path: '/services/witness',
          title: 'Witness Services',
          component: 'WitnessPage',
          status: 'active'
        }
      ]
    },
    {
      path: '/why',
      title: 'Why Bridge Notary',
      component: 'WhyBridgeNotaryPage',
      status: 'active'
    },
    {
      path: '/about',
      title: 'About Us',
      component: 'About',
      status: 'active'
    },
    {
      path: '/pricing',
      title: 'Pricing',
      component: 'Pricing',
      status: 'active'
    },
    {
      path: '/book',
      title: 'Book Appointment',
      component: 'BookAppointment',
      status: 'active'
    },
    {
      path: '/login',
      title: 'Client Login',
      component: 'LoginPage',
      status: 'active'
    },
    {
      path: '/schedule',
      title: 'Schedule',
      component: 'SchedulePage',
      status: 'active'
    },
    {
      path: '/demo',
      title: 'Request Demo',
      component: 'DemoPage',
      status: 'active'
    },
    {
      path: '/contact',
      title: 'Contact Us',
      component: 'Contact',
      status: 'active'
    },
    {
      path: '/testimonials',
      title: 'Testimonials',
      component: 'Testimonials',
      status: 'active'
    },
    {
      path: '/faq',
      title: 'Frequently Asked Questions',
      component: 'FAQ',
      status: 'active'
    },
    {
      path: '/resources',
      title: 'Resources',
      component: 'Resources',
      status: 'active'
    },
    {
      path: '/sitemap',
      title: 'Site Map',
      component: 'Sitemap',
      status: 'active'
    }
  ];

  const getStatusBadge = (status: 'active' | 'inactive' | 'alias') => {
    const badges = {
      active: 'bg-professional-blue/10 text-professional-blue border-professional-blue/30',
      inactive: 'bg-charcoal/10 text-charcoal/60 border-charcoal/20',
      alias: 'bg-professional-blue/5 text-professional-blue border-professional-blue/20'
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded border ${badges[status]}`}>
        {status}
      </span>
    );
  };

  const renderRoute = (route: SitemapRoute, level: number = 0) => {
    const isChild = level > 0;
    
    return (
      <div key={route.path}>
        <div className={`py-4 ${isChild ? 'ml-8 pl-4 border-l-2 border-neutral-200' : ''}`}>
          <div className="flex items-center gap-3 mb-2">
            <Link 
              to={route.path}
              className="text-lg font-medium text-professional-blue hover:text-professional-blue/80 transition"
            >
              {route.title}
            </Link>
            {getStatusBadge(route.status)}
          </div>
          
          <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
            <code className="bg-neutral-100 px-2 py-1 rounded font-mono text-xs">
              {route.path}
            </code>
            {route.component && (
              <>
                <span>→</span>
                <code className="bg-professional-blue/10 text-professional-blue px-2 py-1 rounded font-mono text-xs">
                  {route.component}
                </code>
              </>
            )}
          </div>
        </div>
        
        {route.children && route.children.length > 0 && (
          <div className="space-y-0">
            {route.children.map(child => renderRoute(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  const activeRoutes = routes.filter(r => r.status === 'active');
  const inactiveRoutes = routes.filter(r => r.status === 'inactive');
  const aliasRoutes = routes.filter(r => r.status === 'alias');
  
  const totalRoutes = routes.reduce((acc, route) => {
    return acc + 1 + (route.children?.length || 0);
  }, 0);

  return (
    <div className="min-h-screen bg-neutral-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-neutral-300"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-700">
              Site Map
            </span>
            <span className="h-px w-12 bg-neutral-300"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Site Map</h1>
          <div className="h-1 w-20 bg-professional-blue mb-6"></div>
          <p className="text-lg text-charcoal/70 max-w-3xl">
            Complete directory of all routes and pages in the Bridge Notary application. 
            Updated January 2026 with professional-blue/charcoal design refresh, spectral pattern enhancements, 
            and consistent navigation across apostille service categories.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded border border-professional-blue/20 p-6 shadow-sm">
            <div className="text-3xl font-bold text-professional-blue mb-1">{totalRoutes}</div>
            <div className="text-sm text-charcoal/70">Total Routes</div>
          </div>
          <div className="bg-white rounded border border-professional-blue/20 p-6 shadow-sm">
            <div className="text-3xl font-bold text-professional-blue mb-1">{activeRoutes.length}</div>
            <div className="text-sm text-charcoal/70">Active Pages</div>
          </div>
          <div className="bg-white rounded border border-professional-blue/20 p-6 shadow-sm">
            <div className="text-3xl font-bold text-charcoal/50 mb-1">{inactiveRoutes.length}</div>
            <div className="text-sm text-charcoal/70">Inactive Pages</div>
          </div>
          <div className="bg-white rounded border border-professional-blue/20 p-6 shadow-sm">
            <div className="text-3xl font-bold text-professional-blue mb-1">{aliasRoutes.length}</div>
            <div className="text-sm text-charcoal/70">Route Aliases</div>
          </div>
        </div>

        {/* All Routes */}
        <div className="bg-white rounded border border-professional-blue/20 shadow-sm p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-charcoal">All Routes</h2>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                {getStatusBadge('active')}
                <span className="text-charcoal/70">Active</span>
              </div>
              <div className="flex items-center gap-2">
                {getStatusBadge('inactive')}
                <span className="text-charcoal/70">Inactive</span>
              </div>
              <div className="flex items-center gap-2">
                {getStatusBadge('alias')}
                <span className="text-charcoal/70">Alias</span>
              </div>
            </div>
          </div>
          
          <div className="divide-y divide-professional-blue/10">
            {routes.map(route => renderRoute(route))}
          </div>
        </div>

        {/* Route Categories */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Primary Services */}
          <div className="bg-white rounded border border-professional-blue/20 shadow-sm p-6">
            <h3 className="text-xl font-semibold text-charcoal mb-4">Primary Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ron" className="text-professional-blue hover:text-professional-blue/80">Remote Online Notarization</Link></li>
              <li><Link to="/apostille" className="text-professional-blue hover:text-professional-blue/80">Apostille Services</Link></li>
              <li><Link to="/loan-signing" className="text-professional-blue hover:text-professional-blue/80">Loan Signing Services</Link></li>
              <li><Link to="/services/mobile" className="text-professional-blue hover:text-professional-blue/80">Mobile Notary</Link></li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="bg-white rounded border border-professional-blue/20 shadow-sm p-6">
            <h3 className="text-xl font-semibold text-charcoal mb-4">Company Information</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-professional-blue hover:text-professional-blue/80">About Us</Link></li>
              <li><Link to="/why-bridge-notary" className="text-professional-blue hover:text-professional-blue/80">Why Bridge Notary</Link></li>
              <li><Link to="/testimonials" className="text-professional-blue hover:text-professional-blue/80">Testimonials</Link></li>
              <li><Link to="/pricing" className="text-professional-blue hover:text-professional-blue/80">Pricing</Link></li>
            </ul>
          </div>

          {/* Actions */}
          <div className="bg-white rounded border border-professional-blue/20 shadow-sm p-6">
            <h3 className="text-xl font-semibold text-charcoal mb-4">Take Action</h3>
            <ul className="space-y-2">
              <li><Link to="/login" className="text-professional-blue hover:text-professional-blue/80">Client Login</Link></li>
              <li><Link to="/book" className="text-professional-blue hover:text-professional-blue/80">Book Appointment</Link></li>
              <li><Link to="/schedule" className="text-professional-blue hover:text-professional-blue/80">Schedule</Link></li>
              <li><Link to="/demo" className="text-professional-blue hover:text-professional-blue/80">Request Demo</Link></li>
              <li><Link to="/contact" className="text-professional-blue hover:text-professional-blue/80">Contact Us</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="bg-white rounded border border-professional-blue/20 shadow-sm p-6">
            <h3 className="text-xl font-semibold text-charcoal mb-4">Resources & Help</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-professional-blue hover:text-professional-blue/80">FAQ</Link></li>
              <li><Link to="/resources" className="text-professional-blue hover:text-professional-blue/80">Resources</Link></li>
              <li><Link to="/services" className="text-professional-blue hover:text-professional-blue/80">All Services</Link></li>
            </ul>
          </div>
        </div>

        {/* Technical Note */}
        <div className="mt-8 bg-professional-blue/10 border border-professional-blue/30 rounded p-6">
          <h3 className="text-lg font-semibold text-professional-blue mb-2">Recent Updates (January 2026)</h3>
          <ul className="text-sm text-charcoal/70 space-y-1">
            <li>✓ Professional-blue (#0055E6) & charcoal (#192252) design system implemented across all pages</li>
            <li>✓ Left-border card design pattern (border-l-4 border-professional-blue) standardized</li>
            <li>✓ Nearly invisible spectral lines pattern applied to 15+ major white sections</li>
            <li>✓ Apostille layout unified with Navigation & Footer components for consistency</li>
            <li>✓ Travel & Apostille services (Destination Wedding, Study Abroad, International Adoption, etc.) reorganized under ApostilleLayout</li>
            <li>✓ Form styling refreshed with professional-blue borders and charcoal labels</li>
            <li>✓ All deprecated color tokens removed (proof, electric-blue, muted-gold, neutral-*)</li>
            <li>✓ Sitemap updated with complete route directory and accurate descriptions</li>
          </ul>
        </div>

        {/* Technical Note */}
        <div className="mt-4 bg-professional-blue/5 border border-professional-blue/20 rounded p-6">
          <h3 className="text-lg font-semibold text-charcoal mb-2">Technical Architecture</h3>
          <ul className="text-sm text-charcoal/70 space-y-1">
            <li>• All routes use React Router v7 with lazy loading for optimal performance</li>
            <li>• Apostille & travel pages use ApostilleLayout wrapper for consistent presentation</li>
            <li>• Primary routes use standard Layout component with Navigation and Footer</li>
            <li>• RON and Home pages use custom layouts for unique hero sections</li>
            <li>• Inactive routes are defined but not currently linked in navigation</li>
            <li>• Alias routes redirect to the same component as their primary route</li>
            <li>• Responsive design with mobile-first approach using Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
