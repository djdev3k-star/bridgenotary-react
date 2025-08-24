import React from 'react';

const steps = [
  {
    step: "1",
    title: "Book Online",
    description: "Schedule your preferred date and time through our easy booking system",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    step: "2",
    title: "Confirmation",
    description: "Receive immediate confirmation and preparation instructions",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    step: "3",
    title: "Signing",
    description: "We arrive at your location with all necessary materials",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
      </svg>
    )
  },
  {
    step: "4",
    title: "Completion",
    description: "Documents are processed and delivered same-day",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function Process() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures a smooth and efficient signing experience
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="text-center">
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto">
                  {item.icon}
                </div>
                {/* Connector line */}
                {item.step !== "4" && (
                  <div className="hidden md:block absolute top-1/2 left-[60%] w-full h-0.5 bg-gray-200"></div>
                )}
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-xl font-semibold text-gray-900 mb-2">{item.title}</div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
