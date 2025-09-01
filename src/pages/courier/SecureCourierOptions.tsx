import { Card, CardBody } from "@/components/ui/Card"
import { ShieldCheck, Lock, Printer } from "lucide-react"

export default function SecureCourierOptions() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">How Secure Courier Solutions Work</h2>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Our secure delivery methods combine encryption, hardware security keys, and controlled printing to protect sensitive loan, escrow, and real estate documents. Here's how each option functions in practice:
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="rounded-2xl shadow-md">
          <CardBody className="flex flex-col items-center text-center">
            <ShieldCheck className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Hardware Security Keys</h3>
            <p className="text-gray-600">
              YubiKeys or similar tokens act as the "physical key" to unlock encrypted documents. The sender encrypts files and ties access to the recipient's hardware key. When the package arrives, only the authorized staff member with the key can unlock and use the documents — including releasing them for printing.
            </p>
          </CardBody>
        </Card>
        <Card className="rounded-2xl shadow-md">
          <CardBody className="flex flex-col items-center text-center">
            <Lock className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">End-to-End Encrypted Transfer</h3>
            <p className="text-gray-600">
              Files are encrypted before leaving the sender and remain protected while in transit. Systems like secure client portals, encrypted cloud lockers, or S/MIME email ensure only designated recipients with the right credentials can open the files — preventing unauthorized access by couriers or intermediaries.
            </p>
          </CardBody>
        </Card>
        <Card className="rounded-2xl shadow-md">
          <CardBody className="flex flex-col items-center text-center">
            <Printer className="h-12 w-12 text-purple-600 mb-4" />
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