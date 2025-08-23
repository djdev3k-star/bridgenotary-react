import React from 'react';
import { Link } from 'react-router-dom';

interface SitemapItem {
  path: string;
  title: string;
  component?: string;
  children?: SitemapItem[];
}

const Sitemap: React.FC = () => {
  const sitemapData: SitemapItem[] = [
    {
      path: '/',
      title: 'Home Page',
      component: 'HomePage'
    },
    {
      path: '/ron',
      title: 'Remote Online Notary',
      component: 'RONPage'
    },
    {
      path: '/why',
      title: 'Why Bridge Notary',
      component: 'WhyBridgeNotaryPage'
    },
    {
      path: '/book',
      title: 'Book Appointment',
      component: 'BookAppointment'
    },
    {
      path: '/schedule',
      title: 'Schedule',
      component: 'SchedulePage'
    },
    {
      path: '/demo',
      title: 'Request Demo',
      component: 'DemoPage'
    },
    {
      path: '/about',
      title: 'About Us',
      component: 'About'
    },
    {
      path: '/services',
      title: 'Our Services',
      component: 'Services'
    },
    {
      path: '/contact',
      title: 'Contact Us',
      component: 'Contact'
    },
    {
      path: '/testimonials',
      title: 'Testimonials',
      component: 'Testimonials'
    },
    {
      path: '/faq',
      title: 'FAQ',
      component: 'FAQ'
    },
    {
      path: '/resources',
      title: 'Resources',
      component: 'Resources'
    },
    {
      path: '/pro',
      title: 'Bridge Notary Pro',
      component: 'BridgeNotaryPro'
    }
  ];

  const renderSitemapItem = (item: SitemapItem) => {
    return (
      <div key={item.path} className="py-3 border-b border-neutral-100 last:border-0">
        <div className="flex items-center gap-4">
          <Link 
            to={item.path}
            className="text-lg font-medium text-neutral-900 hover:text-proof"
          >
            {item.title}
          </Link>
          {item.component && (
            <span className="text-sm text-neutral-500">
              Component: <code className="bg-neutral-100 px-2 py-1 rounded">{item.component}</code>
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-proof mb-8">Site Map</h1>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Pages & Routes</h2>
            <div className="bg-white rounded-lg shadow-sm border border-neutral-100 divide-y divide-neutral-100">
              {sitemapData.map(item => renderSitemapItem(item))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Shared Components</h2>
            <div className="bg-white rounded-lg shadow-sm border border-neutral-100 p-6">
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <h3 className="font-medium text-neutral-900 mb-3">Layout Components</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <code className="text-sm bg-neutral-100 px-2 py-1 rounded">Layout</code>
                      <span className="text-sm text-neutral-500">Main layout wrapper</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <code className="text-sm bg-neutral-100 px-2 py-1 rounded">Sidebar</code>
                      <span className="text-sm text-neutral-500">Navigation sidebar</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <code className="text-sm bg-neutral-100 px-2 py-1 rounded">Footer</code>
                      <span className="text-sm text-neutral-500">Site footer</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-neutral-900 mb-3">Common UI Components</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <code className="text-sm bg-neutral-100 px-2 py-1 rounded">ErrorBoundary</code>
                      <span className="text-sm text-neutral-500">Error handling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <code className="text-sm bg-neutral-100 px-2 py-1 rounded">LoadingSpinner</code>
                      <span className="text-sm text-neutral-500">Loading states</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
