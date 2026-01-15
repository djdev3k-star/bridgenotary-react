const testimonials = [
  {
    name: "Alice F.",
    role: "Escrow Officer",
    quote:
      "Bridge Notary is my go-to signing agent. Dependable, professional, and always communicates throughout the process. Highly recommended!",
  },
  {
    name: "Ron S.",
    role: "Real Estate Attorney",
    quote:
      "Exceptional service—accurate, punctual, and my clients always comment on the notary’s courtesy and clarity at closing.",
  },
  {
    name: "Lindsay G.",
    role: "Mortgage Lender",
    quote:
      "I've referred several clients for complex deals and each one closed smoothly. Absolutely trustworthy and efficient.",
  },
];

const Testimonials = () => (
  <div className="w-full bg-off-white py-20 lg:py-28" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 85, 230, 0.02) 2px, rgba(0, 85, 230, 0.02) 4px)'}}>
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-6">What Our Clients Say</h1>
      <p className="text-xl text-charcoal/70 mb-12">
        We pride ourselves on providing a professional and reliable service. Here’s what our clients have to say about their experience with Bridge Notary.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-6xl mx-auto px-6">
      {testimonials.map((t) => (
        <div key={t.name} className="p-6 border-l border-professional-blue group hover:bg-professional-blue/5 transition-colors h-full flex flex-col">
          <p className="text-charcoal/70 italic mb-6 flex-grow">“{t.quote}”</p>
          <div>
            <div className="font-bold text-charcoal">{t.name}</div>
            <div className="text-charcoal/70 text-sm">{t.role}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;
