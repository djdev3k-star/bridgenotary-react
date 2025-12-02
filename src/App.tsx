import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout";
import { ErrorBoundary } from "@/components/common";
import { LoadingSpinner } from "@/components/common";
import React, { Suspense } from 'react';

// Lazy load components
const HomePage = React.lazy(() => import("@/pages/home"));
const RONPage = React.lazy(() => import("@/pages/ron"));
const ApostillePage = React.lazy(() => import("@/pages/apostille"));
const ApostilleLayout = React.lazy(() => import("@/pages/apostille/ApostilleLayout"));
const ApostilleQuizPage = React.lazy(() => import("@/pages/apostille/quiz"));
const ApostilleQuizStartPage = React.lazy(() => import("@/pages/apostille/quiz/quiz-start"));
const ApostilleQuizResultsPage = React.lazy(() => import("@/pages/apostille/quiz/quiz-results"));
const LoanSigningPage = React.lazy(() => import("@/pages/loan-signing"));
const About = React.lazy(() => import("@/pages/about"));
const Services = React.lazy(() => import("@/pages/services"));
const WhyBridgeNotaryPage = React.lazy(() => import("@/pages/why-bridge-notary"));
const Pricing = React.lazy(() => import("@/pages/pricing"));
const BookAppointment = React.lazy(() => import("@/pages/book"));
const Contact = React.lazy(() => import("@/pages/contact"));
const Testimonials = React.lazy(() => import("@/pages/testimonials"));
const FAQ = React.lazy(() => import("@/pages/faq"));
const Resources = React.lazy(() => import("@/pages/resources"));
const SchedulePage = React.lazy(() => import("@/pages/schedule"));
const DemoPage = React.lazy(() => import("@/pages/demo"));
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
              <Route path="/ron" element={<RONPage />} />
              <Route path="/remote-notarization" element={<RONPage />} />
              <Route path="/apostille" element={<ApostillePage />} />
            </Route>
            
            {/* Apostille section with custom layout */}
            <Route element={<ApostilleLayout />}>
              <Route path="/apostille/quiz" element={<ApostilleQuizPage />} />
              <Route path="/apostille/quiz-start" element={<ApostilleQuizStartPage />} />
              <Route path="/apostille/quiz-results" element={<ApostilleQuizResultsPage />} />
            </Route>
            
            <Route element={<Layout />}>
              <Route path="/loan-signing" element={<LoanSigningPage />} />
              <Route path="/why" element={<WhyBridgeNotaryPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/book" element={<BookAppointment />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/sitemap" element={<Sitemap />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
