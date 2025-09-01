import { Link } from "react-router-dom";

const BookingSidebar = () => (
  <aside className="w-full md:w-1/3 lg:w-1/4 p-6 bg-neutral-100 rounded-2xl shadow-lg h-fit">
    <h3 className="text-xl font-bold text-proof mb-4">Ready to Get Started?</h3>
    <Link to="/book" className="button-primary w-full text-center mb-6 block">Book an Appointment</Link>

    {/* Prominent Courier Service Link */}
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-4 mb-6">
      <h4 className="font-semibold text-proof mb-2 flex items-center">
        🔒 Secure Courier Services
        <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-1 rounded-full">NEW</span>
      </h4>
      <p className="text-sm text-neutral-600 mb-3">
        Advanced document protection during delivery
      </p>
      <Link to="/courier" className="button-outline w-full text-center block text-sm">
        Learn More
      </Link>
    </div>

    <div className="border-t border-neutral-300 pt-6">
      <h4 className="font-semibold text-proof mb-3">Quick Links</h4>
      <ul className="space-y-2">
        <li><Link to="/services" className="text-neutral-700 hover:text-proof transition font-medium">Our Services</Link></li>
        <li><Link to="/pricing" className="text-neutral-700 hover:text-proof transition font-medium">Pricing Details</Link></li>
        <li><Link to="/faq" className="text-neutral-700 hover:text-proof transition font-medium">FAQ</Link></li>
      </ul>
    </div>

    <div className="border-t border-neutral-300 pt-6 mt-6">
        <p className="text-sm text-neutral-700 italic">
            “Bridge Notary is dependable, professional, and always communicates throughout the process. Highly recommended!”
        </p>
        <p className="text-sm font-semibold text-proof mt-2">- Escrow Officer</p>
    </div>
  </aside>
);

export default BookingSidebar;
