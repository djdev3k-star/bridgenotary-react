import React from 'react';
import { Link } from 'react-router-dom';
import studyAbroadImage from '@/assets/images/study-abroad.png';

const StudyAbroadPage: React.FC = () => {
  return (
    <>
      {/* Quick Links to Other Apostille Services */}
      <section className="bg-professional-blue/5 border-b border-professional-blue/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-charcoal/70 font-medium">Apostille Services:</span>
            <Link to="/overseas-property" className="text-professional-blue hover:text-professional-blue/80 hover:underline transition-colors font-medium">Overseas Property</Link>
            <span className="text-charcoal/30">•</span>
            <Link to="/dual-citizenship" className="text-professional-blue hover:text-professional-blue/80 hover:underline transition-colors font-medium">Dual Citizenship</Link>
            <span className="text-charcoal/30">•</span>
            <Link to="/international-adoption" className="text-professional-blue hover:text-professional-blue/80 hover:underline transition-colors font-medium">International Adoption</Link>
          </div>
        </div>
      </section>

      {/* Hero Section - Full Width with Blue Gradient & Background Image */}
      <section className="relative overflow-hidden text-white min-h-[600px] flex items-center w-screen left-1/2 -translate-x-1/2">
        {/* Gradient Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-professional-blue via-professional-blue/80 to-professional-blue"></div>
        
        {/* Background Image with Opacity */}
        <div className="absolute inset-0 z-0 opacity-50">
          <img src={studyAbroadImage} alt="" className="w-full h-full object-cover" />
        </div>
        
        {/* Overlay Divs for Deepened Effect */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-professional-blue/60 via-professional-blue/50 to-professional-blue/65 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-professional-blue/20"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto py-32 md:py-40 px-6 relative z-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 text-sm font-medium mb-6 border border-white/40 rounded-full backdrop-blur-sm">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.5 3.5 10.5 3.5 15S6.5 23.5 12 23.5s8.5-4 8.5-8.5-3-8.5-8.5-8.5z" />
              </svg>
              <span className="text-white">Apostille Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
              Study Abroad Apostilles
            </h1>
            <p className="text-xl text-white/90 leading-relaxed drop-shadow">
              Professional certification of academic credentials for international universities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/book" className="inline-flex items-center justify-center bg-white text-professional-blue hover:bg-white/90 transition-all rounded font-bold py-3 px-8">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Academic Documents We Apostille</h2>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-12 max-w-3xl">
              From undergraduate transcripts to graduate diplomas, we handle all types of academic credentials for international universities and educational institutions worldwide.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="border-l border-professional-blue pl-6 group">
                <div className="mb-4">
                  <svg className="w-10 h-10 text-professional-blue group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C6.5 6.5 3.5 10.5 3.5 15S6.5 23.5 12 23.5s8.5-4 8.5-8.5-3-8.5-8.5-8.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Academic Records</h3>
                <ul className="space-y-2 text-charcoal/70 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Diplomas & Degrees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Official Transcripts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Course Certificates</span>
                  </li>
                </ul>
              </div>

              <div className="border-l border-professional-blue pl-6 group">
                <div className="mb-4">
                  <svg className="w-10 h-10 text-professional-blue group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">University Programs</h3>
                <ul className="space-y-2 text-charcoal/70 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Undergraduate Admission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Graduate Studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Exchange Programs</span>
                  </li>
                </ul>
              </div>

              <div className="border-l border-professional-blue pl-6 group">
                <div className="mb-4">
                  <svg className="w-10 h-10 text-professional-blue group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">International Standards</h3>
                <ul className="space-y-2 text-charcoal/70 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Hague Apostille Cert.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Fast Turnaround</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-professional-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Expert Guidance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Process Section */}
            <div className="bg-professional-blue/5 border border-professional-blue/20 rounded-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold text-charcoal mb-8">Our Apostille Process</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-professional-blue text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">1</div>
                  <h4 className="font-semibold text-charcoal mb-2">Submit Docs</h4>
                  <p className="text-sm text-charcoal/70">Provide copies of academic records needing apostille</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-professional-blue text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">2</div>
                  <h4 className="font-semibold text-charcoal mb-2">Verification</h4>
                  <p className="text-sm text-charcoal/70">We verify with your school or institution</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-professional-blue text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">3</div>
                  <h4 className="font-semibold text-charcoal mb-2">Certification</h4>
                  <p className="text-sm text-charcoal/70">Official apostille certificate is issued</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-professional-blue text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">4</div>
                  <h4 className="font-semibold text-charcoal mb-2">Delivery</h4>
                  <p className="text-sm text-charcoal/70">Documents delivered to your university</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Element: Application Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Key Deadlines for Study Abroad</h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">Plan ahead with important application timelines. Start your apostille process early to meet university requirements.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-professional-blue rounded-full border-4 border-white"></div>
              <div className="bg-professional-blue/5 border border-professional-blue/20 rounded-lg p-6 pl-12">
                <h4 className="text-sm font-semibold text-professional-blue mb-2 uppercase tracking-wide">6-12 Months Before</h4>
                <h3 className="text-lg font-bold text-charcoal mb-3">Research & Prepare</h3>
                <p className="text-sm text-charcoal/70">Start reviewing universities. Request official transcripts from your institution.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-professional-blue rounded-full border-4 border-white"></div>
              <div className="bg-professional-blue/5 border border-professional-blue/20 rounded-lg p-6 pl-12">
                <h4 className="text-sm font-semibold text-professional-blue mb-2 uppercase tracking-wide">4-6 Months Before</h4>
                <h3 className="text-lg font-bold text-charcoal mb-3">Document Gathering</h3>
                <p className="text-sm text-charcoal/70">Collect all academic records. We handle apostille certification.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-professional-blue rounded-full border-4 border-white"></div>
              <div className="bg-professional-blue/5 border border-professional-blue/20 rounded-lg p-6 pl-12">
                <h4 className="text-sm font-semibold text-professional-blue mb-2 uppercase tracking-wide">2-4 Months Before</h4>
                <h3 className="text-lg font-bold text-charcoal mb-3">Application Submission</h3>
                <p className="text-sm text-charcoal/70">Submit certified documents to your chosen universities.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-professional-blue rounded-full border-4 border-white"></div>
              <div className="bg-professional-blue/5 border border-professional-blue/20 rounded-lg p-6 pl-12">
                <h4 className="text-sm font-semibold text-professional-blue mb-2 uppercase tracking-wide">1-2 Months Before</h4>
                <h3 className="text-lg font-bold text-charcoal mb-3">Admission & Enrollment</h3>
                <p className="text-sm text-charcoal/70">Receive acceptance letters and finalize your enrollment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study Abroad - Benefits Section */}
      <section className="py-20 lg:py-28 bg-professional-blue/5 border-t border-professional-blue/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Why Choose Study Abroad?</h2>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
                Pursuing education internationally opens doors to global opportunities, diverse perspectives, and world-class institutions. We make the documentation process seamless.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-professional-blue flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-charcoal">Global Education Quality</h4>
                    <p className="text-sm text-charcoal/70">Access top-ranked universities and specialized programs worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-professional-blue flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-charcoal">Career Advancement</h4>
                    <p className="text-sm text-charcoal/70">International degrees enhance employment prospects globally</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-professional-blue flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-charcoal">Cultural Experience</h4>
                    <p className="text-sm text-charcoal/70">Immerse yourself in diverse cultures and perspectives</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-professional-blue flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-charcoal">Network Building</h4>
                    <p className="text-sm text-charcoal/70">Connect with students and professionals worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-professional-blue/10 rounded-lg p-8 md:p-12 border border-professional-blue/20">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-8 h-8 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <h3 className="text-lg font-bold text-charcoal">Fast Document Processing</h3>
                  </div>
                  <p className="text-sm text-charcoal/70">Same-day apostille available for urgent submissions</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-8 h-8 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-lg font-bold text-charcoal">100% Accuracy Guaranteed</h3>
                  </div>
                  <p className="text-sm text-charcoal/70">Every document verified for compliance with international standards</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-8 h-8 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h3 className="text-lg font-bold text-charcoal">Expert Support</h3>
                  </div>
                  <p className="text-sm text-charcoal/70">Dedicated support team to guide you through the entire process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Apostille Services */}
      <section className="py-20 lg:py-28 bg-professional-blue/5 border-t border-professional-blue/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Other Apostille Services</h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">Explore our complete range of international document authentication services</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/overseas-property" className="border-l border-professional-blue pl-6 py-6 group hover:bg-white hover:shadow-md rounded transition-all">
              <h3 className="text-2xl font-bold text-charcoal mb-3">Overseas Property</h3>
              <p className="text-charcoal/70 mb-6 text-base leading-relaxed">Authenticate deeds, purchase agreements, and real estate documentation for international transactions</p>
              <span className="inline-flex items-center gap-2 text-professional-blue font-semibold group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link to="/dual-citizenship" className="border-l border-professional-blue pl-6 py-6 group hover:bg-white hover:shadow-md rounded transition-all">
              <h3 className="text-2xl font-bold text-charcoal mb-3">Dual Citizenship</h3>
              <p className="text-charcoal/70 mb-6 text-base leading-relaxed">Authenticate civil records and documents for citizenship and immigration applications</p>
              <span className="inline-flex items-center gap-2 text-professional-blue font-semibold group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link to="/international-adoption" className="border-l border-professional-blue pl-6 py-6 group hover:bg-white hover:shadow-md rounded transition-all">
              <h3 className="text-2xl font-bold text-charcoal mb-3">International Adoption</h3>
              <p className="text-charcoal/70 mb-6 text-base leading-relaxed">Authenticate birth certificates, court orders, and legal documents for adoption proceedings</p>
              <span className="inline-flex items-center gap-2 text-professional-blue font-semibold group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* DFW Community College Partners */}
      <section className="py-16 lg:py-20 bg-white border-t border-professional-blue/10">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-charcoal/60 text-sm font-medium mb-10 uppercase tracking-wide">Trusted by DFW Area Institutions</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10">
            {/* DCCCD */}
            <div className="flex flex-col items-center gap-2 opacity-75 hover:opacity-100 transition-opacity">
              <div className="relative p-3 bg-professional-blue/5 rounded-lg border border-professional-blue/20 hover:bg-professional-blue/10 transition-colors">
                <svg className="w-10 h-10 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C6.5 6.5 3.5 10.5 3.5 15S6.5 23.5 12 23.5s8.5-4 8.5-8.5-3-8.5-8.5-8.5z" />
                </svg>
              </div>
              <span className="text-xs font-bold text-charcoal/70">DCCCD</span>
            </div>
            {/* NCTC */}
            <div className="flex flex-col items-center gap-2 opacity-75 hover:opacity-100 transition-opacity">
              <div className="relative p-3 bg-professional-blue/5 rounded-lg border border-professional-blue/20 hover:bg-professional-blue/10 transition-colors">
                <svg className="w-10 h-10 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xs font-bold text-charcoal/70">NCTC</span>
            </div>
            {/* TCCD */}
            <div className="flex flex-col items-center gap-2 opacity-75 hover:opacity-100 transition-opacity">
              <div className="relative p-3 bg-professional-blue/5 rounded-lg border border-professional-blue/20 hover:bg-professional-blue/10 transition-colors">
                <svg className="w-10 h-10 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V3m0 18v-3M6 12H3m18 0h-3M8.59 8.59l-2.12-2.12m15.06 15.06l-2.12-2.12M8.59 15.41l-2.12 2.12m15.06-15.06l-2.12 2.12" />
                </svg>
              </div>
              <span className="text-xs font-bold text-charcoal/70">TCCD</span>
            </div>
            {/* CCCD */}
            <div className="flex flex-col items-center gap-2 opacity-75 hover:opacity-100 transition-opacity">
              <div className="relative p-3 bg-professional-blue/5 rounded-lg border border-professional-blue/20 hover:bg-professional-blue/10 transition-colors">
                <svg className="w-10 h-10 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xs font-bold text-charcoal/70">CCCD</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-professional-blue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get Your Academic Credentials Certified</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Our apostille experts ensure your academic records meet university requirements worldwide. Complete the process with confidence and clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="inline-flex items-center justify-center bg-white text-professional-blue hover:bg-white/90 transition-all rounded font-bold py-3 px-10 text-lg">
              Book Apostille Service
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-professional-blue transition-all rounded font-bold py-3 px-10 text-lg">
              Chat with Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudyAbroadPage;