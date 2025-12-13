import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout";
import { ErrorBoundary } from "@/components/common";
import { LoadingSpinner } from "@/components/common";
import React, { Suspense } from 'react';

// Lazy load components
const HomePage = React.lazy(() => import("@/pages/home"));
const Home1Page = React.lazy(() => import("@/pages/home1"));
const RONPage = React.lazy(() => import("@/pages/ron"));
const ApostillePage = React.lazy(() => import("@/pages/apostille"));
const ApostilleLayout = React.lazy(() => import("@/pages/apostille/ApostilleLayout"));
const ApostilleQuizPage = React.lazy(() => import("@/pages/apostille/quiz"));
const ApostilleQuizStartPage = React.lazy(() => import("@/pages/apostille/quiz/quiz-start"));
const ApostilleQuizResultsPage = React.lazy(() => import("@/pages/apostille/quiz/quiz-results"));
const StudyAbroadPage = React.lazy(() => import("@/pages/study-abroad"));
const DualCitizenshipPage = React.lazy(() => import("@/pages/dual-citizenship"));
const InternationalAdoptionPage = React.lazy(() => import("@/pages/international-adoption"));
const OverseasPropertyPage = React.lazy(() => import("@/pages/overseas-property"));
const DestinationWeddingPage = React.lazy(() => import("@/pages/destination-wedding"));
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
              <Route path="/apostille" element={<ApostillePage />} />
            </Route>
            
            {/* Apostille section with custom layout */}
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
              <Route path="/why" element={<WhyBridgeNotaryPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/mobile" element={<MobileNotaryPage />} />
              <Route path="/services/estate-trust" element={<EstateTrustPage />} />
              <Route path="/services/power-of-attorney" element={<PowerOfAttorneyPage />} />
              <Route path="/services/witness" element={<WitnessPage />} />
              <Route path="/pricing" element={<Pricing />} />
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
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
