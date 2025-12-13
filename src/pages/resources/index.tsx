// BookingSidebar retired; remove sidebar usage

const resources = [
  { name: "Fee Sheet (PDF)", link: "/downloads/fee-sheet.pdf" },
  { name: "Sample Service Agreement (PDF)", link: "/downloads/service-agreement.pdf" },
  { name: "Client Closing Checklist (PDF)", link: "/downloads/closing-checklist.pdf" },
];

const Resources = () => (
  <div className="section">
    <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-proof mb-6">Resources (Archived)</h1>
          <p className="text-neutral-700 mb-6">This section is currently archived and not linked in navigation. If you need any of the previous documents, please contact us or visit the RON page for current information.</p>
          <div className="card">
            <p className="text-neutral-800">Looking for Remote Online Notarization details? Visit our updated RON page.</p>
            <div className="mt-4">
              <a href="/ron" className="button-primary inline-block">Go to RON</a>
            </div>
          </div>
    </div>
  </div>
);

export default Resources;
