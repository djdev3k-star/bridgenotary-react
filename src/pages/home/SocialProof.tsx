import React from 'react';

const testimonials = [
  {
    quote: "Professional, punctual, and thoroughly explained everything. Made our refinance signing stress-free.",
    author: "Sarah M.",
    role: "Refinance Client",
    image: "/testimonials/sarah-m.jpg"
  },
  {
    quote: "Outstanding service! Accommodated our late evening closing and made the process seamless.",
    author: "Michael R.",
    role: "Home Buyer",
    image: "/testimonials/michael-r.jpg"
  },
  {
    quote: "Very knowledgeable and efficient. Perfect for our commercial property closing needs.",
    author: "David K.",
    role: "Business Owner",
    image: "/testimonials/david-k.jpg"
  }
];

export default function SocialProof() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Trusted by Hundreds of Clients
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded">
              <div className="flex h-6 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <div className="font-medium text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600">Signings Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">15min</div>
            <div className="text-gray-600">Response Time</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">7/7</div>
            <div className="text-gray-600">Days Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
