import { Card, CardBody } from "@/components/ui/Card"

// SVG Icons adapted from Lucide icons used in the component
const ShieldCheckIcon = () => (
  <svg className="h-12 w-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 12 2 2 4-4"/>
  </svg>
);

const LockIcon = () => (
  <svg className="h-12 w-12 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V9a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="m7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const PrinterIcon = () => (
  <svg className="h-12 w-12 text-purple-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
  </svg>
);

export default function SecureCourierOptions() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">How Secure Courier Solutions Work</h2>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Our secure delivery methods combine encryption, hardware security keys, and controlled printing to protect sensitive loan, escrow, and real estate documents. Here's how each option functions in practice:
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="rounded-2xl shadow-md">
          <CardBody className="p-6 flex flex-col items-center text-center">
            <ShieldCheckIcon />
            <h3 className="text-xl font-semibold mb-2">Hardware Security Keys</h3>
            <p className="text-gray-600">
              YubiKeys or similar tokens act as the "physical key" to unlock encrypted documents. The sender encrypts files and ties access to the recipient's hardware key. When the package arrives, only the authorized staff member with the key can unlock and use the documents — including releasing them for printing.
            </p>
          </CardBody>
        </Card>
        <Card className="rounded-2xl shadow-md">
          <CardBody className="p-6 flex flex-col items-center text-center">
            <LockIcon />
            <h3 className="text-xl font-semibold mb-2">End-to-End Encrypted Transfer</h3>
            <p className="text-gray-600">
              Files are encrypted before leaving the sender and remain protected while in transit. Systems like secure client portals, encrypted cloud lockers, or S/MIME email ensure only designated recipients with the right credentials can open the files — preventing unauthorized access by couriers or intermediaries.
            </p>
          </CardBody>
        </Card>
        <Card className="rounded-2xl shadow-md">
          <CardBody className="p-6 flex flex-col items-center text-center">
            <PrinterIcon />
            <h3 className="text-xl font-semibold mb-2">Secure Print-on-Arrival</h3>
            <p className="text-gray-600">
              Instead of printing before transit, documents stay encrypted until reaching the office. Authorized staff authenticate to release the job on a secure printer. This ensures that the first time documents are seen is when they're safely in the custody of the intended professionals.
            </p>
          </CardBody>
        </Card>
      </div>
      <p className="text-lg text-gray-700 mt-10 text-center">
        Together, these safeguards guarantee that notary courier services can deliver critical packages without exposing sensitive client information at any stage of the process.
      </p>
    </section>
  )
}