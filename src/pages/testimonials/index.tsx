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
  <div className="section">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-proof mb-6">What Our Clients Say</h1>
      <p className="text-xl text-neutral-700 mb-12">
        We pride ourselves on providing a professional and reliable service. Here’s what our clients have to say about their experience with Bridge Notary.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
      {testimonials.map((t) => (
        <div key={t.name} className="card h-full flex flex-col">
          <p className="text-neutral-700 italic mb-6 flex-grow">“{t.quote}”</p>
          <div>
            <div className="font-bold text-proof">{t.name}</div>
            <div className="text-neutral-600 text-sm">{t.role}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;
