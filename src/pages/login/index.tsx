import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoadingSpinner } from "@/components/common/Loading";

interface LoginForm {
  email: string;
  password: string;
}

// Tawk.to chat component
const TawkChat: React.FC = () => {
  useEffect(() => {
    // Initialize Tawk.to embedded chat
    if (!(window as any).Tawk_API) {
      (window as any).Tawk_API = {};
      (window as any).Tawk_LoadStart = new Date();
      (window as any).Tawk_API.embedded = 'tawk_693c5584e0ccea197d8fdf4c';
      
      const s1 = document.createElement("script");
      s1.async = true;
      s1.src = 'https://embed.tawk.to/693c5584e0ccea197d8fdf4c/1jc9ra8th';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      document.body.appendChild(s1);
    }
  }, []);

  return (
    <div className="bg-white rounded border border-professional-blue/20 shadow-sm overflow-hidden">
      <div className="p-5 border-b border-professional-blue/20 bg-professional-blue text-white">
        <h4 className="text-lg font-semibold">Chat with Support</h4>
        <p className="text-xs text-white/80 mt-1">Questions? Message our team directly</p>
      </div>
      <div id='tawk_693c5584e0ccea197d8fdf4c' className="h-96 overflow-hidden"></div>
    </div>
  );
};

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginForm>({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 600));
    setIsSubmitting(false);
    setIsAuthenticated(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []);
    setFiles(selected);
  };

  const renderUploadArea = () => (
    <div className="bg-white rounded border border-professional-blue/20 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-charcoal">Secure Document Upload</h3>
          <p className="text-sm text-charcoal/70">PDF, DOCX, and image files are accepted.</p>
        </div>
        <span className="text-xs font-medium px-3 py-1 rounded bg-professional-blue/10 text-professional-blue border border-professional-blue/20">AES-256 at rest</span>
      </div>

      <label className="block border-2 border-dashed border-professional-blue/20 rounded p-8 text-center cursor-pointer hover:border-professional-blue transition">
        <input type="file" multiple className="hidden" onChange={handleFileChange} aria-label="Upload documents" />
        <div className="flex flex-col items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <div>
            <p className="text-charcoal font-medium">Drag & drop to upload</p>
            <p className="text-sm text-charcoal/70">or click to browse files</p>
          </div>
        </div>
      </label>

      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          <p className="text-sm font-medium text-charcoal/70">Files ready to send</p>
          <ul className="space-y-1">
            {files.map((file) => (
              <li key={file.name} className="flex items-center gap-2 text-sm text-charcoal/70">
                <svg className="h-4 w-4 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  const renderHelpResources = () => (
    <div className="bg-white rounded border border-professional-blue/20 p-5 shadow-sm">
      <h4 className="text-lg font-semibold text-charcoal mb-2">Help & Resources</h4>
      <ul className="text-sm text-charcoal/70 space-y-2">
        <li><Link to="/resources" className="text-professional-blue hover:text-professional-blue font-medium">Document prep checklist</Link></li>
        <li><Link to="/faq" className="text-professional-blue hover:text-professional-blue font-medium">FAQ</Link></li>
        <li><Link to="/contact" className="text-professional-blue hover:text-professional-blue font-medium">Email support</Link></li>
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen bg-off-white py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="space-y-3 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-professional-blue">Client Workspace</p>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight">Upload, track, and stay organized</h1>
          <p className="text-lg text-charcoal/70">Use your email and password to access your secure upload lane. You can also jump straight into booking or review resources before sending documents.</p>
        </header>

        {!isAuthenticated ? (
          <div className="bg-white rounded border border-professional-blue/20 shadow-lg p-8 max-w-2xl mx-auto w-full">
            <h2 className="text-2xl font-semibold text-charcoal mb-2">Sign in</h2>
            <p className="text-sm text-charcoal/70 mb-6">Use your client credentials. No account yet? <Link to="/book" className="text-professional-blue hover:text-professional-blue font-medium">Book a session</Link> and we will provision one.</p>

            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-professional-blue/20 rounded focus:ring-2 focus:ring-professional-blue focus:border-professional-blue"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-professional-blue/20 rounded focus:ring-2 focus:ring-professional-blue focus:border-professional-blue"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="flex items-center justify-between text-sm text-charcoal/70">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-professional-blue/20 text-professional-blue focus:ring-professional-blue" />
                    Remember me
                  </label>
                  <Link to="/contact" className="text-professional-blue hover:text-professional-blue font-medium">Need help?</Link>
                </div>

                <button
                  type="submit"
                  className="w-full bg-professional-blue hover:bg-professional-blue/90 text-white font-semibold py-3 rounded transition flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner size="small" color="white" />
                      Signing in...
                    </>
                  ) : (
                    <>Sign in securely</>
                  )}
                </button>
              </form>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-white rounded border border-professional-blue/20 shadow-lg p-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-professional-blue">Authenticated</p>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal">Welcome back. Upload and manage your docs here.</h2>
                <p className="text-charcoal/70 mt-2">Keep your uploads linked to existing bookings. Our team will confirm receipt and next steps.</p>
              </div>
              <div className="flex gap-3">
                <Link to="/contact" className="bg-professional-blue text-white px-5 py-3 rounded font-semibold hover:bg-professional-blue/90 transition">Contact Support</Link>
                {/*<Link to="/schedule" className="border border-professional-blue text-professional-blue px-5 py-3 rounded font-semibold hover:bg-professional-blue hover:text-white transition">View schedule</Link> */}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 items-start">
              <div className="lg:col-span-2 space-y-6">
                {renderUploadArea()}
                <div className="bg-white rounded border border-professional-blue/20 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-charcoal mb-2">Recent activity</h3>
                  <ul className="text-sm text-charcoal/70 space-y-2">
                    <li>• Upload channel is ready. Files will be reviewed by your notary coordinator.</li>
                    <li>• Need to add a signer? Include their ID copy and contact details.</li>
                    <li>• Looking for guidance? Review the resource links on the right.</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <TawkChat />
                {renderHelpResources()}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
