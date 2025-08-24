const faqs = [
  {
    q: "What areas do you serve?",
    a: "We serve [City/County] and all major metro regions in Central & North Texas. For other areas, please contact us!",
  },
  {
    q: "Are you certified and insured?",
    a: "Yes, Bridge Notary is NNA certified, background screened, and fully bonded & insured (minimum $25,000 E&O coverage).",
  },
  {
    q: "What loan types do you handle?",
    a: "All residential and commercial loan documents including refinance, purchase, reverse mortgage, HELOC, equity, and more.",
  },
  {
    q: "Do you offer after-hours or weekend appointments?",
    a: "Yes! We work evenings and weekends by appointment for urgent closings and convenience.",
  },
  {
    q: "How do I book?",
    a: "Use the Book Appointment page, email us, or call. We'll confirm availability and details promptly.",
  },
  {
    q: "What are your fees?",
    a: "See our Pricing page for standard rates. Add-ons and travel may apply based on your request.",
  }
];

const FAQ = () => (
  <div className="section">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-proof mb-6">Frequently Asked Questions</h1>
      <p className="text-xl text-neutral-700 mb-12">
        Have questions? We’ve got answers. Here are some of the most common questions we receive from our clients.
      </p>
    </div>
    <div className="space-y-8 text-left">
      {faqs.map((item, idx) => (
        <div key={idx} className="card">
          <h2 className="text-xl font-bold text-proof mb-2">{item.q}</h2>
          <p className="text-neutral-700">{item.a}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FAQ;
