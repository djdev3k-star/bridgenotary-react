// Layout wrapper removed — App routes render Layout via Outlet
import { Link } from 'react-router-dom';
import { FeatureCard } from '@/features/ron/components';
import { HeroBackground } from '@/components/ui/HeroBackground';

export default function RONPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section - Full Width with Image Background */}
      <section className="relative overflow-hidden text-white min-h-[85vh] flex items-center">
        {/* Background variations - change variant prop to try different styles */}
        <HeroBackground variant="gradient" opacity={0.98} />
        <div className="max-w-7xl mx-auto py-28 px-6 relative z-20">
          {/* Main Content */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
              Remote Online <span className="text-gold">Notarization</span>
            </h1>
            <p className="text-xl text-white mb-10 drop-shadow-md">
              Complete your notarization securely from anywhere, in minutes. Our platform ensures a legally-binding process with enterprise-grade security.
            </p>

            <div className="flex justify-center mb-12">
              <Link to="/book" className="bg-white text-proof hover:bg-neutral-100 transition-all rounded-lg text-lg py-4 px-8 inline-block text-center font-semibold shadow-xl pulse-button">
                <div className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Start RON Session
                </div>
              </Link>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl shadow-2xl border border-white/20 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
              <div className="bg-electric-blue/80 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white drop-shadow-md">Legally Binding</h3>
              <p className="text-white text-sm font-medium drop-shadow">Valid in all 50 states</p>
            </div>

            <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl shadow-2xl border border-white/20 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
              <div className="bg-electric-blue/80 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white drop-shadow-md">24/7 Available</h3>
              <p className="text-white text-sm font-medium drop-shadow">Notarize anytime</p>
            </div>

            <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl shadow-2xl border border-white/20 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
              <div className="bg-electric-blue/80 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white drop-shadow-md">Enterprise Security</h3>
              <p className="text-white text-sm font-medium drop-shadow">Bank-grade encryption</p>
            </div>

            <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl shadow-2xl border border-white/20 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
              <div className="bg-electric-blue/80 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M13 10V3L4 14h7v7l9-11h-7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white drop-shadow-md">Quick Process</h3>
              <p className="text-white text-sm font-medium drop-shadow">5-minute average</p>
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
                <div className="bg-electric-blue rounded-full p-4 text-white">
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
                <div className="bg-electric-blue rounded-full p-4 text-white">
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
                <div className="bg-electric-blue rounded-full p-4 text-white">
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
      <section className="bg-neutral-50 py-24 px-6">
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
                <div className="bg-electric-blue/80 rounded-full p-4 mr-4">
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
                <div className="bg-electric-blue/80 rounded-full p-4 mr-4">
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
                <div className="bg-electric-blue/80 rounded-full p-4 mr-4">
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

      {/* Session Preparation - Timeline / Stepper Layout (Option D) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-proof mb-4">Prepare for Your Session</h2>
            <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-neutral-600">
              Follow these simple steps to make sure your remote notarization goes smoothly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: vertical stepper */}
            <div className="relative">
              <ol className="space-y-8">
                {/* Step 1 */}
                <li className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-electric-blue text-white flex items-center justify-center font-semibold shadow">1</div>
                    <div className="h-full w-px bg-neutral-200 mt-2"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-proof">Gather Your Documents</h3>
                    <p className="text-neutral-600">Have your government-issued photo ID and documents ready in PDF or image format.</p>
                    <ul className="mt-3 ml-4 list-disc text-neutral-600">
                      <li>Driver's license, passport, or state ID</li>
                      <li>Documents to be notarized (PDF preferred)</li>
                    </ul>
                  </div>
                </li>

                {/* Step 2 */}
                <li className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-electric-blue text-white flex items-center justify-center font-semibold shadow">2</div>
                    <div className="h-full w-px bg-neutral-200 mt-2"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-proof">Check Your Tech</h3>
                    <p className="text-neutral-600">Ensure your camera, microphone, and internet connection are working properly.</p>
                    <div className="mt-3 text-neutral-600">
                      <strong className="font-medium">Minimum:</strong> 1 Mbps upload/download, working webcam, and speakers.
                    </div>
                  </div>
                </li>

                {/* Step 3 */}
                <li className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-electric-blue text-white flex items-center justify-center font-semibold shadow">3</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-proof">Join the Session</h3>
                    <p className="text-neutral-600">Click the session link at your scheduled time, verify your identity, and follow the notary's instructions to sign.</p>
                    <div className="mt-3 text-neutral-600">
                      <strong className="font-medium">Tip:</strong> Close other apps that may use your camera or microphone for best results.
                    </div>
                  </div>
                </li>
              </ol>
            </div>

            {/* Right: illustrative image (md+) */}
            <div className="flex items-center justify-center">
              <div className="w-full rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/src/assets/images/happy customer using video conference conveniently from mobile device.jpg"
                  alt="Customer preparing for a remote notary session"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-neutral-50 py-24 px-6">
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
        <div className="absolute inset-0 bg-electric-blue"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Start Your RON Session?</h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Experience the future of notarization with secure, convenient remote online notarization.
            Available 24/7 with certified notaries nationwide.
          </p>
          <div className="flex justify-center">
            <Link to="/book" className="bg-white text-proof hover:bg-neutral-100 transition-all font-semibold rounded-lg text-lg py-5 px-10 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Start RON Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}