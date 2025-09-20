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
    popular: true,
    color: "from-electric-blue to-proof"
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
    ],
    color: "from-gold to-proof"
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
    ],
    color: "from-proof to-electric-blue"
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-50 pointer-events-none">
        <div className="absolute -top-10 -right-10 bg-electric-blue/5 rounded-full w-64 h-64"></div>
        <div className="absolute top-1/3 -left-20 bg-gold/5 rounded-full w-80 h-80"></div>
        <div className="absolute -bottom-20 right-1/3 bg-proof/5 rounded-full w-72 h-72"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-proof mb-6">Popular Services</h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Choose from our most requested notary services, all available at your preferred location with professional, experienced signing agents
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className={`relative group ${index === 0 ? 'fade-in' : index === 1 ? 'fade-in-delay' : 'fade-in'}`}
            >
              {service.popular && (
                <div className="absolute -top-3 right-4 z-10">
                  <span className="bg-gradient-to-r from-proof to-electric-blue text-white text-sm px-4 py-1 rounded-full shadow-md font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col transform group-hover:-translate-y-2">
                <div className="mb-6">
                  <div className={`bg-gradient-to-r ${service.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-4`}>
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-proof mb-2">{service.title}</h3>
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-proof mb-3">{service.price}</div>
                  <p className="text-neutral-600 mb-6">{service.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8 grow">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="bg-electric-blue/10 rounded-full p-1 flex-shrink-0 mr-3">
                        <svg className="w-4 h-4 text-electric-blue" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="/book" 
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-center mt-auto 
                    ${service.popular 
                      ? 'bg-gradient-to-r from-proof to-electric-blue text-white hover:shadow-lg pulse-button' 
                      : 'bg-white border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white'
                    } transition-all duration-300`}
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 fade-in-delay">
          <a href="/services" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-white shadow-md border border-neutral-200 text-proof hover:shadow-lg transition-all hover:bg-proof/5">
            View All Services
            <svg className="w-5 h-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
