import React from 'react';

export interface ScenarioType {
  situation: string;
  documents: string;
  gotcha: string;
  icon: React.ReactNode;
}

export interface SolutionType {
  action: string;
  benefit: string;
  icon: React.ReactNode;
}

export const commonScenarios: ScenarioType[] = [
  {
    situation: 'Destination Wedding',
    documents: 'Birth certificates, single-status affidavit',
    gotcha: 'Foreign consulate may reject if not apostilled',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Destination Wedding icon">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    situation: 'Study or Work Abroad',
    documents: 'Diplomas, FBI background checks',
    gotcha: 'Each state/federal doc follows a different route',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Study Abroad icon">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    situation: 'International Adoption',
    documents: 'Home-study, medical exams',
    gotcha: 'Tight embassy deadlines & translations',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="International Adoption icon">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    situation: 'Dual Citizenship',
    documents: 'Naturalization records, vital records',
    gotcha: 'Wrong seal = entire application delayed',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Dual Citizenship icon">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    )
  },
  {
    situation: 'Overseas Property Purchase',
    documents: 'Power of Attorney',
    gotcha: 'Needs both notarization and apostille in sequence',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-proof" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Overseas Property Purchase icon">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  }
];

export const solutions: SolutionType[] = [
  {
    action: 'Door-to-door courier or priority mail service',
    benefit: 'No office visits—handle everything from your couch',
    icon: (
      <div className="bg-electric-blue/10 rounded-md p-3 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Courier service icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      </div>
    )
  },
  {
    action: 'Pre-review & triple-check of every document',
    benefit: 'Zero rejections or do-overs',
    icon: (
      <div className="bg-electric-blue/10 rounded-md p-3 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Document review icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      </div>
    )
  },
  {
    action: 'Same-day dispatch to correct authority',
    benefit: '3- to 5-day turnaround (rush options available)',
    icon: (
      <div className="bg-electric-blue/10 rounded-md p-3 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Fast dispatch icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
    )
  },
  {
    action: 'Real-time tracking portal + SMS updates',
    benefit: 'Total visibility—know when each seal is applied',
    icon: (
      <div className="bg-electric-blue/10 rounded-md p-3 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Tracking portal icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      </div>
    )
  },
  {
    action: 'Secure return in tamper-evident pouch',
    benefit: 'Documents arrive flight-ready and pristine',
    icon: (
      <div className="bg-electric-blue/10 rounded-md p-3 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Secure delivery icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>
    )
  }
];

export const painPoints = [
  "Confusing Guidelines – Every state (and the U.S. State Dept.) has its own forms, fees, and mailing quirks.",
  "Time-Sensitive Deadlines – Visas, court dates, and wedding planners don't wait for slow mail.",
  "Costly Rejections – One missing seal and you pay for re-shipping, new copies, even trip rescheduling.",
  "No Status Visibility – Government offices rarely tell you where your paperwork sits in the pile.",
  "Lost Workdays – Queueing at county clerks or FedEx counters steals hours you could spend planning your move."
];