import Sidebar from "./Sidebar";

const coreServices = [
  'Refinance',
  'Purchase (Buyer)',
  'Seller',
  'Reverse Mortgage (Application & Closing)',
  'HELOC / Equity Loans',
  'Loan Modifications',
  'Commercial Closings',
  'TX Property Tax Loans',
];

const addOnServices = [
  'Scanbacks',
  'Printing',
  'Additional Signers',
  'Weekend/After Hours',
  'Travel',
  'Facility Fee (TX Equity Loans)',
];

const Services = () => (
  <div>
    {/* Hero section aligned with Apostille / RON layout */}
    <section className="bg-gradient-to-b from-proof/10 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-proof mb-6">Our Services</h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl">
              Professional loan signing and mobile notary services tailored for lenders, title companies, and legal teams — delivered reliably and on your schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/book" className="button-primary text-lg py-4 px-8 inline-block text-center">Book a Signing</a>
              <a href="/contact" className="button-outline text-lg py-4 px-8 inline-block text-center">Contact Sales</a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-neutral-100 rounded-lg aspect-4/3" />
          </div>
        </div>
      </div>
    </section>

    <div className="section">
      <div className="flex flex-col md:flex-row gap-12">
  <main className="w-full md:w-2/3 lg:w-3/4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-proof mb-6">Our Services</h1>
        <p className="text-lg text-neutral-700 mb-10">
          Bridge Notary specializes in a comprehensive suite of loan signings and mobile notarial work for real estate, lending, and legal professionals.
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-proof mb-4">Core Signing Services</h2>
            <ul className="list-disc list-inside text-neutral-700 space-y-2 text-lg">
              {coreServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-proof mb-4">Value-Added Services</h2>
            <ul className="list-disc list-inside text-neutral-700 space-y-2 text-lg">
              {addOnServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Sidebar />
      </div>
    </div>
  </div>
);

export default Services;
