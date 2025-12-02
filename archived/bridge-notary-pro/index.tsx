

const BridgeNotaryPro = () => {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-proof rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                  </path>
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-proof">Bridge Notary Pro</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Maintenance Message */}
      <main className="flex-grow flex items-center justify-center bg-gradient-to-b from-proof/5 to-proof/10">
        <div className="max-w-2xl mx-auto px-6 py-16 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-proof/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-proof" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0-11V3"></path>
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-proof mb-4">Temporarily Offline</h2>
            <p className="text-xl text-neutral-600 mb-8">
              Bridge Notary Pro is currently undergoing maintenance and will be back soon with exciting new features.
            </p>
            <div className="text-sm text-neutral-500">
              Thank you for your patience.
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-neutral-500 text-sm">© 2025 Bridge Notary Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BridgeNotaryPro;
