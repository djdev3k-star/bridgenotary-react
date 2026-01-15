import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

interface QuoteLineItem {
  id: string;
  category: string;
  service: string;
  price: number;
  quantity: number;
}

interface Package {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  includedServices: string[];
  savings?: number;
}

const servicesByCategory = {
  'Core Services': [
    { name: 'Refinance', price: 137.5, note: '$125–$150' },
    { name: 'Purchase (Buyer)', price: 112.5, note: '$100–$125' },
    { name: 'Seller Signing', price: 87.5, note: '$75–$100' },
    { name: 'Reverse Mortgage', price: 150, note: '$125–$175' },
    { name: 'HELOC / Equity Loans', price: 125, note: '$100–$150' },
    { name: 'Loan Modification', price: 50, note: '$40–$60' },
    { name: 'Commercial Closing', price: 200, note: '$200+' },
    { name: 'TX Property Tax Loan', price: 125, note: '$125' },
  ],
  'Add-On Services': [
    { name: 'Scanbacks', price: 15, note: 'Per package' },
    { name: 'Printing', price: 17.5, note: '$10–$25' },
    { name: 'Additional Signer', price: 25, note: 'Per signer' },
    { name: 'Weekend/After Hours', price: 50, note: 'Surcharge' },
    { name: 'Extended Travel', price: 40, note: 'Beyond 15 miles' },
    { name: 'Facility Fee (TX Equity)', price: 25, note: 'If applicable' },
  ],
  'Service Options': [
    { name: 'Remote Online Notarization (RON)', price: 100, note: 'Video session' },
    { name: 'Priority Scheduling', price: 35, note: 'Rush availability' },
    { name: 'Document Pre-Review', price: 30, note: 'Before appointment' },
  ],
};

const premiumPackages: Package[] = [
  {
    id: 'standard',
    name: 'Standard Closing',
    description: 'Essential notarization services',
    basePrice: 125,
    includedServices: ['Professional Signing Agent', 'Full Document Review', 'ID Verification', '24hr Rescheduling'],
  },
  {
    id: 'premium',
    name: 'Premium In-Person',
    description: 'Concierge service for complex transactions',
    basePrice: 200,
    includedServices: ['Priority Scheduling', 'Extended Time', 'Pre-Review', 'Digital & Physical', 'Travel (25 mi)', 'After-Hours'],
    savings: 30,
  },
  {
    id: 'ron',
    name: 'Remote Online Notarization',
    description: 'Secure video notarization',
    basePrice: 100,
    includedServices: ['Video Conferencing', 'Digital Signing', 'ID Verification', 'Electronic Journal', 'Outside Hours'],
  },
];

const QuoteCalculator: React.FC = () => {
  const [lineItems, setLineItems] = useState<QuoteLineItem[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');

  const addLineItem = (category: string, service: string, price: number) => {
    const newItem: QuoteLineItem = {
      id: `${category}-${service}-${Date.now()}`,
      category,
      service,
      price,
      quantity: 1,
    };
    setLineItems([...lineItems, newItem]);
  };

  const removeLineItem = (id: string) => {
    setLineItems(lineItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setLineItems(lineItems.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const subtotal = useMemo(() => {
    const itemsTotal = lineItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const packagePrice = selectedPackage 
      ? premiumPackages.find(p => p.id === selectedPackage)?.basePrice || 0
      : 0;
    return itemsTotal + packagePrice;
  }, [lineItems, selectedPackage]);

  const tax = subtotal * 0.08; // 8% tax estimate
  const total = subtotal + tax;

  const generateQuote = () => {
    const quoteData = {
      client: clientName,
      email: clientEmail,
      package: selectedPackage ? premiumPackages.find(p => p.id === selectedPackage)?.name : 'À la carte',
      lineItems,
      subtotal,
      tax,
      total,
      generatedAt: new Date().toLocaleDateString(),
    };
    
    console.log('Quote generated:', quoteData);
    alert(`Quote generated for ${clientName}!\n\nSubtotal: $${subtotal.toFixed(2)}\nTax: $${tax.toFixed(2)}\nTotal: $${total.toFixed(2)}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-professional-blue to-professional-blue/90 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold px-3 py-1 mb-4 bg-white/15 rounded-full">Quote Calculator</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Build Your Custom Quote</h1>
            <p className="text-lg text-white/90">Select premium packages or mix-and-match services à la carte. Transparent pricing, zero hidden fees.</p>
          </div>
        </div>
      </section>

      {/* Main Calculator */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column: Service Selection */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Premium Packages */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-6">Premium Packages</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {premiumPackages.map(pkg => (
                    <div
                      key={pkg.id}
                      onClick={() => {
                        setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id);
                      }}
                      className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedPackage === pkg.id
                          ? 'border-professional-blue bg-professional-blue/5'
                          : 'border-professional-blue/20 hover:border-professional-blue/40'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-charcoal">{pkg.name}</h3>
                          <p className="text-xs text-charcoal/60 mt-1">{pkg.description}</p>
                        </div>
                        {selectedPackage === pkg.id && (
                          <svg className="w-5 h-5 text-professional-blue" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <p className="text-2xl font-bold text-professional-blue mb-3">${pkg.basePrice}</p>
                      {pkg.savings && (
                        <p className="text-xs text-green-600 font-semibold mb-2">Save ${pkg.savings} vs à la carte</p>
                      )}
                      <ul className="space-y-1">
                        {pkg.includedServices.map((service, idx) => (
                          <li key={idx} className="text-xs text-charcoal/70 flex items-center gap-2">
                            <svg className="w-3 h-3 text-professional-blue" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* À La Carte Services */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-6">À La Carte Services</h2>
                <div className="space-y-4">
                  {Object.entries(servicesByCategory).map(([category, services]) => (
                    <div key={category} className="border border-professional-blue/20 rounded-lg overflow-hidden">
                      <div className="bg-professional-blue/5 px-4 py-3">
                        <h3 className="font-semibold text-charcoal text-sm">{category}</h3>
                      </div>
                      <div className="space-y-2 p-4">
                        {services.map(service => (
                          <button
                            key={service.name}
                            onClick={() => addLineItem(category, service.name, service.price)}
                            className="w-full text-left flex items-center justify-between p-3 hover:bg-professional-blue/5 rounded transition group"
                          >
                            <div className="flex-1">
                              <p className="font-medium text-charcoal">{service.name}</p>
                              <p className="text-xs text-charcoal/60">{service.note}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <p className="font-bold text-professional-blue">${service.price}</p>
                              <svg className="w-5 h-5 text-professional-blue opacity-0 group-hover:opacity-100 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Quote Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 bg-professional-blue/5 border border-professional-blue/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-charcoal mb-6">Quote Summary</h3>

                {/* Client Info */}
                <div className="space-y-3 mb-6 pb-6 border-b border-professional-blue/20">
                  <input
                    type="text"
                    placeholder="Client Name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3 py-2 border border-professional-blue/20 rounded text-sm text-charcoal placeholder-charcoal/50"
                  />
                  <input
                    type="email"
                    placeholder="Client Email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-professional-blue/20 rounded text-sm text-charcoal placeholder-charcoal/50"
                  />
                </div>

                {/* Line Items */}
                <div className="space-y-2 mb-6 max-h-48 overflow-y-auto">
                  {selectedPackage && (
                    <div className="flex items-start justify-between text-sm pb-2 border-b border-professional-blue/20">
                      <div>
                        <p className="font-semibold text-charcoal">
                          {premiumPackages.find(p => p.id === selectedPackage)?.name}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-charcoal">
                          ${premiumPackages.find(p => p.id === selectedPackage)?.basePrice}
                        </p>
                        <button
                          onClick={() => setSelectedPackage(null)}
                          className="text-xs text-red-500 hover:text-red-700 mt-1"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {lineItems.map(item => (
                    <div key={item.id} className="flex items-center justify-between text-sm pb-2 border-b border-professional-blue/10">
                      <div className="flex-1">
                        <p className="font-medium text-charcoal">{item.service}</p>
                        <p className="text-xs text-charcoal/60">{item.category}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                          className="w-12 px-2 py-1 border border-professional-blue/20 rounded text-xs text-center"
                        />
                        <p className="font-bold text-charcoal min-w-[60px] text-right">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeLineItem(item.id)}
                          className="text-red-500 hover:text-red-700 ml-1"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}

                  {lineItems.length === 0 && !selectedPackage && (
                    <p className="text-sm text-charcoal/60 italic py-4">Select services to build your quote</p>
                  )}
                </div>

                {/* Totals */}
                <div className="space-y-2 pb-6 border-b border-professional-blue/20">
                  <div className="flex justify-between text-sm">
                    <span className="text-charcoal/70">Subtotal</span>
                    <span className="font-semibold text-charcoal">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-charcoal/70">Tax (est. 8%)</span>
                    <span className="font-semibold text-charcoal">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6 pt-4">
                  <span className="text-lg font-bold text-charcoal">Total</span>
                  <span className="text-3xl font-bold text-professional-blue">${total.toFixed(2)}</span>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <button
                    onClick={generateQuote}
                    disabled={lineItems.length === 0 && !selectedPackage}
                    className="w-full bg-professional-blue hover:bg-professional-blue/90 disabled:bg-professional-blue/50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded transition"
                  >
                    Generate Quote
                  </button>
                  <Link
                    to="/book"
                    className="w-full text-center border-2 border-professional-blue text-professional-blue hover:bg-professional-blue hover:text-white font-semibold py-3 rounded transition"
                  >
                    Schedule Service
                  </Link>
                </div>

                <p className="text-xs text-charcoal/60 text-center mt-4">
                  No hidden fees. Prices subject to change based on specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 md:py-20 bg-professional-blue/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-charcoal mb-2">✓ Transparent Pricing</h3>
              <p className="text-sm text-charcoal/70">Know exactly what you're paying before booking.</p>
            </div>
            <div>
              <h3 className="font-bold text-charcoal mb-2">✓ Flexible Packages</h3>
              <p className="text-sm text-charcoal/70">Choose premium packages or build your own combination.</p>
            </div>
            <div>
              <h3 className="font-bold text-charcoal mb-2">✓ Expert Service</h3>
              <p className="text-sm text-charcoal/70">NNA certified, insured, and background-checked agents.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuoteCalculator;
