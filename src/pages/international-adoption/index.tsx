import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';

const InternationalAdoptionPage: React.FC = () => {
  return (
    <Layout>
      {/* Breadcrumbs */}
      <section className="bg-off-white border-b border-professional-blue/20 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-charcoal/70 flex items-center gap-2">
            <Link to="/" className="hover:text-professional-blue transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-professional-blue transition-colors">Services</Link>
            <span>/</span>
            <span className="text-charcoal font-medium">International Adoption</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden text-charcoal min-h-[70vh] flex items-center bg-professional-blue/10 py-24 md:py-32">
        {/* Background image overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/src/assets/images/international-adoption.png"
            alt="International adoption"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-10 pointer-events-none bg-professional-blue/60"></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto py-20 px-6 relative z-20 w-full">
          <div className="max-w-3xl text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Apostille Support for International Adoption
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed">
              Authenticate home studies, vital records, and legal documents for adoption dossiers with reliable apostille and legalization support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apostille" className="inline-flex items-center justify-center bg-white text-professional-blue hover:bg-off-white transition-all rounded text-lg py-3 px-8 font-semibold shadow-lg">
                View Apostille Services
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-professional-blue transition-all rounded text-lg py-3 px-8 font-semibold">
                Talk to a Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info blocks */}
      <section className="bg-off-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Common International Adoption Documents</h2>
          <p className="text-lg text-charcoal/70 mb-12 max-w-3xl">We help compile and authenticate documents required by foreign central authorities and courts.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Vital Records', desc: 'Birth certificates, marriage certificates, divorce decrees' },
              { title: 'Home Study & Legal', desc: 'Home studies, background checks, notarized statements, court orders' },
              { title: 'Dossier Requirements', desc: 'Agency letters, medical letters, financial statements, consent forms' },
            ].map((item) => (
              <div key={item.title} className="p-6 border-l-2 border-professional-blue group hover:bg-professional-blue/5 transition-colors">
                <h3 className="text-xl font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-charcoal/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InternationalAdoptionPage;
