import { Link } from "react-router-dom";
import { useMemo } from "react";
import { featureFlags } from "@/utils/featureFlags";

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
          Oops! The page you're looking for doesn't exist or has moved.<br/>
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

export default NotFound;
