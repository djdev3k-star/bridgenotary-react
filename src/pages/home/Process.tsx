const steps = [
  {
    step: "1",
    title: "Book Online",
    description: "Schedule your preferred date and time through our easy booking system",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    step: "2",
    title: "Confirmation",
    description: "Receive immediate confirmation and preparation instructions",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    step: "3",
    title: "Signing",
    description: "We arrive at your location with all necessary materials",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
      </svg>
    )
  },
  {
    step: "4",
    title: "Completion",
    description: "Documents are processed and delivered same-day",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[90rem] mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-proof mb-6">How It Works</h2>
          <div className="h-1 w-20 bg-neutral-900 mx-auto mb-8"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Our streamlined process ensures a smooth and efficient signing experience from booking to completion
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection line - removed gradient */}
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-1 bg-electric-blue/20 z-0"></div>
          
          {steps.map((item, index) => (
            <div key={item.step} className={`text-center relative z-10 ${index % 2 === 0 ? 'fade-in' : 'fade-in-delay'}`}>
              {/* Step number circle - hidden for now */}
              {/* <div className="bg-electric-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="font-bold text-xl">{item.step}</span>
              </div> */}
              
              <div className="bg-white rounded p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-neutral-100 h-full transform hover:-translate-y-1">
                <div className="bg-electric-blue/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 text-electric-blue">
                  {item.icon}
                </div>
                <div className="text-xl font-semibold text-proof mb-3">{item.title}</div>
                <p className="text-neutral-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
  <div className="mt-28 text-center fade-in-delay">
    <a href="/book" className="inline-flex items-center gap-2 bg-electric-blue text-white px-8 py-4 rounded font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 pulse-button">
      Start Your Signing Process
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  </div>
      </div>
    </section>
  );
}
