import { Link } from "react-router-dom";
import { useMemo } from "react";
import { featureFlags } from "@/utils/featureFlags";

// Direct image paths
const generalImages = {
  notaryPublicStamp: '/images/notarypublic-generalimagewithstamp.jpg',
  genNotaryFlyer: '/images/genNotaryFlyers.png',
  genNotaryStripFlyer: '/images/genNotarystripFlyers- Bridge Notary .png',
};

const ronImages = {
  remoteNotaryProfessional: '/images/A professional notary conducting a video conference with a client for online notary services. The image shows the notary on a laptop screen, with a legal document visible in the foreground._.jpg',
  happyCustomer: '/images/happy customer using video conference conveniently from mobile device.jpg',
};

const apostilleImages = {
  apostilleDocument: '/images/apostille_A person signing important legal documents in the presence of a notary public. The notary is seen from the side, with a clear view of the signature, documents, and notary seal._.jpg',
  apostilleFlyer: '/images/apostilleFlyers.png',
  apostilleFlyerStrip: '/images/apostilleFlyersstrip.png',
};

const travelImages = {
  destinationWedding: '/images/destination-wedding.png',
  dualCitizenship: '/images/dual-citizenship.png',
  internationalAdoption: '/images/international-adoption.png',
  overseasProperty: '/images/overseas-property.png',
  studyAbroad: '/images/study-abroad.png',
};

const loanSigningImages = {
  stackLoanDocuments: '/images/stack-loan-documents.jpg',
  loanFlyer: '/images/loanFlyers.png',
  commLoanFlyer: '/images/commloanFlyers.png',
  commSignFlyer: '/images/commsignFlyer.png'
};

const notFoundImages = [
  generalImages.notaryPublicStamp,
  generalImages.genNotaryFlyer,
  generalImages.genNotaryStripFlyer,
  ronImages.remoteNotaryProfessional,
  ronImages.happyCustomer,
  ...(featureFlags.enableApostille ? [
    apostilleImages.apostilleDocument,
    apostilleImages.apostilleFlyer,
    apostilleImages.apostilleFlyerStrip,
    travelImages.destinationWedding,
    travelImages.dualCitizenship,
    travelImages.internationalAdoption,
    travelImages.overseasProperty,
    travelImages.studyAbroad,
  ] : []),
  loanSigningImages.stackLoanDocuments,
  loanSigningImages.loanFlyer,
  loanSigningImages.commLoanFlyer,
  loanSigningImages.commSignFlyer
].filter(Boolean);

const NotFound = () => {
  // Pick a random image on each render
  const bgImage = useMemo(() => {
    const idx = Math.floor(Math.random() * notFoundImages.length);
    return notFoundImages[idx];
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative px-4"
      style={{
        background: `linear-gradient(rgba(255,255,255,0.85),rgba(0,70,250,0.08)), url('${bgImage}') center/cover no-repeat`,
        transition: 'background-image 0.5s',
      }}
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" aria-hidden="true"></div>
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold mb-4 text-proof drop-shadow">404 - Page Not Found</h1>
        <p className="mb-6 text-lg text-gray-700 max-w-xl text-center">
          Oops! The page you’re looking for doesn’t exist or has moved.<br/>
          But your notary needs are just a click away.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Link to="/" className="button-primary">Return Home</Link>
          <Link to="/book" className="button-outline">Book an Appointment</Link>
          <Link to="/contact" className="button-outline">Contact Us</Link>
        </div>
        <div className="text-sm text-gray-500">Need help? Call <a href="tel:+14696298932" className="underline hover:text-electric-blue">(469) 629-8932</a></div>
      </div>
    </div>
  );
};
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout";
import { ErrorBoundary } from "@/components/common";
import { LoadingSpinner } from "@/components/common";
import React, { Suspense } from 'react';

// Lazy load components
const HomePage = React.lazy(() => import("@/pages/home"));
const Home1Page = React.lazy(() => import("@/pages/home1"));
const RONPage = React.lazy(() => import("@/pages/ron"));
const ApostillePage = featureFlags.enableApostille ? React.lazy(() => import("@/pages/apostille")) : null;
const ApostilleLayout = featureFlags.enableApostille ? React.lazy(() => import("@/pages/apostille/ApostilleLayout")) : null;
const ApostilleQuizPage = featureFlags.enableApostille ? React.lazy(() => import("@/pages/apostille/quiz")) : null;
const ApostilleQuizStartPage = featureFlags.enableApostille ? React.lazy(() => import("@/pages/apostille/quiz/quiz-start")) : null;
const ApostilleQuizResultsPage = featureFlags.enableApostille ? React.lazy(() => import("@/pages/apostille/quiz/quiz-results")) : null;
const StudyAbroadPage = featureFlags.enableApostille ? React.lazy(() => import("@/pages/study-abroad")) : null;
const DualCitizenshipPage = featureFlags.enableApostille ? React.lazy(() => import("@/pages/dual-citizenship")) : null;
const InternationalAdoptionPage = featureFlags.enableApostille ? React.lazy(() => import("@/pages/international-adoption")) : null;
const OverseasPropertyPage = featureFlags.enableApostille ? React.lazy(() => import("@/pages/overseas-property")) : null;
const DestinationWeddingPage = featureFlags.enableApostille ? React.lazy(() => import("@/pages/destination-wedding")) : null;
const LoanSigningPage = React.lazy(() => import("@/pages/loan-signing"));
const RefinanceSigningPage = React.lazy(() => import("@/pages/loan-signing/signings/refinance"));
const PurchaseSigningPage = React.lazy(() => import("@/pages/loan-signing/signings/purchase"));
const SellerSigningPage = React.lazy(() => import("@/pages/loan-signing/signings/seller"));
const ReverseMortgageSigningPage = React.lazy(() => import("@/pages/loan-signing/signings/reverse"));
const HELOCSigningPage = React.lazy(() => import("@/pages/loan-signing/signings/heloc"));
const LoanModificationSigningPage = React.lazy(() => import("@/pages/loan-signing/signings/modification"));
const CommercialClosingSigningPage = React.lazy(() => import("@/pages/loan-signing/signings/commercial"));
const PropertyTaxLoanSigningPage = React.lazy(() => import("@/pages/loan-signing/signings/property-tax"));
const About = React.lazy(() => import("@/pages/about"));
const Services = React.lazy(() => import("@/pages/services"));
const MobileNotaryPage = React.lazy(() => import("@/pages/services/mobile"));
const EstateTrustPage = React.lazy(() => import("@/pages/services/estate-trust"));
const PowerOfAttorneyPage = React.lazy(() => import("@/pages/services/power-of-attorney"));
const WitnessPage = React.lazy(() => import("@/pages/services/witness"));
const WhyBridgeNotaryPage = React.lazy(() => import("@/pages/why-bridge-notary"));
const Pricing = React.lazy(() => import("@/pages/pricing"));
const QuoteCalculator = React.lazy(() => import("@/pages/quote-calculator"));
const SeniorServicesLanding = React.lazy(() => import("@/pages/senior-services"));
const BookAppointment = React.lazy(() => import("@/pages/book"));
const Contact = React.lazy(() => import("@/pages/contact"));
const Testimonials = React.lazy(() => import("@/pages/testimonials"));
const FAQ = React.lazy(() => import("@/pages/faq"));
const Resources = React.lazy(() => import("@/pages/resources"));
const SchedulePage = React.lazy(() => import("@/pages/schedule"));
const DemoPage = React.lazy(() => import("@/pages/demo"));
const LoginPage = React.lazy(() => import("@/pages/login"));
const ClientPortal = React.lazy(() => import("@/pages/client-portal"));
const Sitemap = React.lazy(() => import("@/pages/sitemap"));
const Privacy = React.lazy(() => import("@/pages/privacy"));
const Terms = React.lazy(() => import("@/pages/terms"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner className="w-8 h-8" />
  </div>
);

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/home1" element={<Home1Page />} />
              <Route path="/ron" element={<RONPage />} />
              <Route path="/remote-notarization" element={<RONPage />} />
              {featureFlags.enableApostille && <Route path="/apostille" element={<ApostillePage />} />}
            </Route>
            
            {/* Apostille section with custom layout - conditionally rendered */}
            {featureFlags.enableApostille && (
              <Route element={<ApostilleLayout />}>
                <Route path="/apostille/quiz" element={<ApostilleQuizPage />} />
                <Route path="/apostille/quiz-start" element={<ApostilleQuizStartPage />} />
                <Route path="/apostille/quiz-results" element={<ApostilleQuizResultsPage />} />
                <Route path="/study-abroad" element={<StudyAbroadPage />} />
                <Route path="/dual-citizenship" element={<DualCitizenshipPage />} />
                <Route path="/international-adoption" element={<InternationalAdoptionPage />} />
                <Route path="/overseas-property" element={<OverseasPropertyPage />} />
                <Route path="/destination-wedding" element={<DestinationWeddingPage />} />
              </Route>
            )}
            
            <Route element={<Layout />}>
              <Route path="/loan-signing" element={<LoanSigningPage />} />
              <Route path="/loan-signing/refinance" element={<RefinanceSigningPage />} />
              <Route path="/loan-signing/purchase" element={<PurchaseSigningPage />} />
              <Route path="/loan-signing/seller" element={<SellerSigningPage />} />
              <Route path="/loan-signing/reverse" element={<ReverseMortgageSigningPage />} />
              <Route path="/loan-signing/heloc" element={<HELOCSigningPage />} />
              <Route path="/loan-signing/modification" element={<LoanModificationSigningPage />} />
              <Route path="/loan-signing/commercial" element={<CommercialClosingSigningPage />} />
              <Route path="/loan-signing/property-tax" element={<PropertyTaxLoanSigningPage />} />
              <Route path="/why-bridge-notary" element={<WhyBridgeNotaryPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/mobile" element={<MobileNotaryPage />} />
              <Route path="/services/estate-trust" element={<EstateTrustPage />} />
              <Route path="/services/power-of-attorney" element={<PowerOfAttorneyPage />} />
              <Route path="/services/witness" element={<WitnessPage />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/quote" element={<QuoteCalculator />} />
              <Route path="/senior-services" element={<SeniorServicesLanding />} />
              <Route path="/book" element={<BookAppointment />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/client-portal" element={<ClientPortal />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Route>
            {/* 404 catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
