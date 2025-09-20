// Layout wrapper removed — App routes render Layout via Outlet
import { Link } from 'react-router-dom';
import { FeatureCard } from '@/features/ron/components';

export default function RONPage() {

  return (
    <div className="w-full bg-white">
      {/* Hero Section - Full Width with Gradient Background */}
      <section className="relative bg-gradient-to-r from-proof to-electric-blue overflow-hidden text-white">
        {/* Simple background without orbs or patterns */}
        <div className="max-w-7xl mx-auto py-28 px-6 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in backdrop-blur-sm bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
                Remote Online <span className="text-gold">Notarization</span>
              </h1>
              <p className="text-xl text-white mb-10 max-w-3xl drop-shadow-md">
                Complete your notarization securely from anywhere, in minutes. Our platform ensures a legally-binding process with enterprise-grade security.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/book" className="bg-white text-proof hover:bg-neutral-100 transition-all rounded-lg text-lg py-4 px-8 inline-block text-center font-semibold shadow-xl pulse-button">
                  <div className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Start RON Session
                  </div>
                </Link>
                <a href="tel:+14696298932" className="bg-transparent border-2 border-white hover:bg-white/10 transition-all rounded-lg text-lg py-4 px-8 inline-block text-center text-white font-semibold shadow-lg">
                  <div className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </div>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 text-center border border-white/20 shadow-lg">
                  <div className="flex justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-sm text-white font-medium drop-shadow-sm">Secure</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 text-center border border-white/20 shadow-lg">
                  <div className="flex justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-sm text-white font-medium drop-shadow-sm">Fast</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 text-center border border-white/20 shadow-lg">
                  <div className="flex justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm text-white font-medium drop-shadow-sm">24/7</span>
                </div>
              </div>
            </div>

            {/* Right side content */}
            <div className="hidden lg:block fade-in-delay">
              <div className="backdrop-blur-sm bg-proof/20 p-8 rounded-2xl shadow-2xl border border-white/20 relative overflow-hidden">
                {/* Background image with overlay */}
                <div className="absolute inset-0 z-0 opacity-15">
                  <img
                    src="/src/assets/images/A professional notary conducting a video conference with a client for online notary services. The image shows the notary on a laptop screen, with a legal document visible in the foreground._.jpg"
                    alt="Professional notary conducting remote session"
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-sm">Why Choose RON?</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="bg-white/30 rounded-full p-1 flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white">Legally binding nationwide</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-white/30 rounded-full p-1 flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white drop-shadow-sm">Available 24/7</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-white/30 rounded-full p-1 flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white drop-shadow-sm">Enterprise security</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-white/30 rounded-full p-1 flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white drop-shadow-sm">5-minute average session</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff" preserveAspectRatio="none">
            <path d="M0,32L80,53.3C160,75,320,117,480,117.3C640,117,800,75,960,58.7C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-proof mb-6">Professional Remote Online Notarization</h2>
            <div className="h-1 w-20 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-neutral-600 mb-4">
              Our certified remote online notaries provide secure, legally-binding notarization services from anywhere in the United States.
              Experience the future of notarization with enterprise-grade security and convenience.
            </p>
            <p className="text-xl text-neutral-600 mb-12">
              Connect with a live notary via secure video call, verify your identity, and complete your notarization in minutes.
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="stats-card rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-proof to-electric-blue rounded-full p-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-proof mb-4">Bank-Grade Security</h3>
              <p className="text-neutral-600">End-to-end encryption with tamper-evident digital certificates and secure video sessions.</p>
            </div>
            <div className="stats-card rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-proof to-electric-blue rounded-full p-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-proof mb-4">Available 24/7</h3>
              <p className="text-neutral-600">Connect with a live notary anytime, anywhere. No appointments needed for most services.</p>
            </div>
            <div className="stats-card rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-proof to-electric-blue rounded-full p-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-proof mb-4">Lightning Fast</h3>
              <p className="text-neutral-600">Complete your notarization in just 5 minutes on average with our streamlined process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gradient-to-b from-neutral-50 to-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-proof mb-6">How Remote Online Notarization Works</h2>
            <div className="h-1 w-20 bg-gold mx-auto mb-8"></div>
            <p className="text-lg text-neutral-600">
              Our simple 3-step process makes remote notarization as easy as meeting in person, but from the comfort of your home or office.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-100 hover:shadow-2xl transition-all duration-300 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-proof/10 rounded-full p-4 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-proof">1. Upload</h3>
              </div>
              
              <div className="mb-6 flex items-center justify-center">
                <img
                  src="/src/assets/images/upload-documents.png" 
                  alt="Upload and prepare documents" 
                  className="h-32 object-contain"
                />
              </div>

              <div className="pl-4 border-l-4 border-electric-blue">
                <p className="text-lg text-neutral-700 mb-6">Upload your documents securely through our encrypted platform. We support all common file formats.</p>
                <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-1 inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-100 hover:shadow-2xl transition-all duration-300 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-proof/10 rounded-full p-4 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-proof">2. Verify</h3>
              </div>
              
              <div className="mb-6 flex items-center justify-center">
                <img
                  src="/src/assets/images/Verify-identity.png" 
                  alt="Verify your identity" 
                  className="h-32 object-contain"
                />
              </div>

              <div className="pl-4 border-l-4 border-electric-blue">
                <p className="text-lg text-neutral-700 mb-6">Complete secure identity verification with your government-issued ID through our advanced validation system.</p>
                <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-1 inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-100 hover:shadow-2xl transition-all duration-300 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-proof/10 rounded-full p-4 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-proof">3. Notarize</h3>
              </div>
              
              <div className="mb-6 flex items-center justify-center">
                <img
                  src="/src/assets/images/secure-video-signing.png" 
                  alt="Meet with notary and sign documents" 
                  className="h-32 object-contain"
                />
              </div>

              <div className="pl-4 border-l-4 border-electric-blue">
                <p className="text-lg text-neutral-700 mb-6">Connect with a certified notary via secure video call and complete your notarization session.</p>
                <div className="bg-electric-blue rounded-full p-1 flex-shrink-0 mt-1 inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Preparation */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-proof mb-6">Prepare for Your Session</h2>
            <div className="h-1 w-20 bg-gold mx-auto mb-8"></div>
            <p className="text-lg text-neutral-600">
              Get ready for your remote online notarization session with our comprehensive preparation guide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-100 hover:shadow-2xl transition-all">
              <h3 className="text-xl font-semibold text-proof mb-6">Required Documents</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-electric-blue/10 rounded-full p-2 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium block text-proof">Government-Issued Photo ID</span>
                    <span className="text-neutral-600">Driver's license, passport, or state ID card</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-electric-blue/10 rounded-full p-2 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium block text-proof">Documents to be Notarized</span>
                    <span className="text-neutral-600">In PDF, Word, or image format</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-electric-blue/10 rounded-full p-2 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium block text-proof">Supporting Documentation</span>
                    <span className="text-neutral-600">If required for your specific notarization</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <img
                src="/src/assets/images/happy customer using video conference conveniently from mobile device.jpg" 
                alt="Customer preparing for a remote notary session" 
                className="rounded-lg shadow-md w-full h-64 md:h-auto object-cover"
              />
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-100 hover:shadow-2xl transition-all">
              <h3 className="text-xl font-semibold text-proof mb-6">Technical Requirements</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-electric-blue/10 rounded-full p-2 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium block text-proof">Working Camera</span>
                    <span className="text-neutral-600">Built-in or external webcam</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-electric-blue/10 rounded-full p-2 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium block text-proof">Microphone & Speakers</span>
                    <span className="text-neutral-600">For clear audio communication</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-electric-blue/10 rounded-full p-2 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-electric-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium block text-proof">Stable Internet</span>
                    <span className="text-neutral-600">Minimum 1 Mbps upload/download</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-neutral-50 to-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-proof mb-6">Enterprise-Grade Security & Compliance</h2>
            <div className="h-1 w-20 bg-gold mx-auto mb-8"></div>
            <p className="text-lg text-neutral-600">
              Our remote online notarization platform meets the highest standards of security and legal compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-proof"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>}
              title="Bank-Grade Security"
              desc="End-to-end encryption for all document transfers and video sessions with tamper-evident digital certificates."
            />
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-proof"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>}
              title="Identity Verification"
              desc="Multi-factor authentication and advanced ID validation technology ensures your identity is properly verified."
            />
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-proof"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>}
              title="Digital Audit Trail"
              desc="Complete digital record of your notarization session with timestamped verification and legal compliance."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-proof mb-6">Trusted Nationwide</h2>
            <div className="h-1 w-20 bg-gold mx-auto mb-8"></div>
            <p className="text-lg text-neutral-600 mb-12">
              Join thousands of satisfied customers who trust Bridge Notary for their remote online notarization needs.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">24/7</div>
              <div className="text-neutral-600">Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">50</div>
              <div className="text-neutral-600">States</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">5 min</div>
              <div className="text-neutral-600">Average Session</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">100%</div>
              <div className="text-neutral-600">Secure</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-proof to-electric-blue"></div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonalHatch" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M-10,10 l20,-20 M0,40 l40,-40 M30,50 l20,-20" stroke="white" strokeWidth="3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalHatch)" />
          </svg>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 bg-white/10 backdrop-blur-sm rounded-full w-40 h-40 floating-element"></div>
        <div className="absolute bottom-1/4 right-10 bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 floating-element"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Start Your RON Session?</h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Experience the future of notarization with secure, convenient remote online notarization.
            Available 24/7 with certified notaries nationwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/book" className="bg-white text-proof hover:bg-neutral-100 transition-all font-semibold rounded-lg text-lg py-5 px-10 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Start RON Session
            </Link>
            <a href="tel:+14696298932" className="bg-transparent border-2 border-white hover:bg-white/10 transition-all font-semibold rounded-lg text-lg py-5 px-10 text-white">
              Call (469) 629-8932
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">99%</div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">10K+</div>
              <div className="text-white/80">RON Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">5★</div>
              <div className="text-white/80">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">50</div>
              <div className="text-white/80">States Served</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
