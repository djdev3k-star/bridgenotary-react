import React from 'react';

const services = [
  {
    title: "Refinance Signing",
    price: "From $125",
    description: "Complete loan document signing service at your location",
    features: [
      "Full document review",
      "ID verification",
      "Same-day processing",
      "Digital delivery"
    ],
    popular: true
  },
  {
    title: "Purchase Signing",
    price: "From $100",
    description: "Comprehensive closing service for home purchases",
    features: [
      "Buyer/Seller coordination",
      "Flexible scheduling",
      "Mobile service",
      "Witness services"
    ]
  },
  {
    title: "Loan Modifications",
    price: "From $75",
    description: "Efficient loan modification document processing",
    features: [
      "Quick turnaround",
      "Expert guidance",
      "Complete documentation",
      "Affordable rates"
    ]
  }
];

export default function Services() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our most requested notary services, all available at your preferred location
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.title} 
              className={`relative border rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
                service.popular ? 'border-primary' : 'border-gray-200'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <div className="text-2xl font-bold text-primary mb-2">{service.price}</div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-2 px-4 rounded-lg font-semibold transition-colors border border-primary
                ${service.popular ? 'bg-primary text-white hover:bg-primary-dark' : 'text-primary hover:bg-primary hover:text-white'}">
                Book Now
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/services" className="inline-flex items-center text-primary hover:text-primary-dark">
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
