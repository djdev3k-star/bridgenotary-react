import React, { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getServiceById } from "@/types/services";

interface ChatMessage {
  id: string;
  sender: "client" | "support";
  message: string;
  timestamp: Date;
}

interface UploadedFile {
  name: string;
  size: number;
  uploadedAt: Date;
  status: "pending" | "received" | "reviewed";
}

const ClientPortal: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [clientEmail, setClientEmail] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [isIdentified, setIsIdentified] = useState(false);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [newFile, setNewFile] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState<"chat" | "documents">("chat");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      sender: "support",
      message: "Welcome to Bridge Notary! How can we help you today?",
      timestamp: new Date(Date.now() - 5 * 60000),
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Get service context from URL params
  const serviceParam = searchParams.get("service");
  const preselectedService = serviceParam ? getServiceById(serviceParam) : null;

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const handleIdentify = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientName && clientEmail) {
      setIsIdentified(true);
      
      let welcomeMessage = `Great to meet you, ${clientName}! I'm here to help.`;
      if (preselectedService) {
        welcomeMessage += ` I see you're interested in ${preselectedService.label}. Feel free to upload any documents or ask questions.`;
      } else {
        welcomeMessage += " You can upload documents securely or ask any questions about our notary services.";
      }
      
      setChatMessages(prev => [...prev, {
        id: Date.now().toString(),
        sender: "support",
        message: welcomeMessage,
        timestamp: new Date(),
      }]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewFile(file);
    }
  };

  const handleUploadFile = () => {
    if (newFile) {
      const fileName = newFile.name;
      setFiles(prev => [...prev, {
        name: fileName,
        size: newFile.size,
        uploadedAt: new Date(),
        status: "pending",
      }]);
      
      setChatMessages(prev => [...prev, {
        id: Date.now().toString(),
        sender: "client",
        message: `📎 Uploaded: ${fileName}`,
        timestamp: new Date(),
      }]);
      
      setNewFile(null);
      
      // Simulate file processing
      setTimeout(() => {
        setFiles(prev => prev.map(f => 
          f.name === fileName ? { ...f, status: "received" as const } : f
        ));
        setChatMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          sender: "support",
          message: "✓ File received! Our team will review it shortly.",
          timestamp: new Date(),
        }]);
      }, 1500);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatInput.trim()) {
      setChatMessages(prev => [...prev, {
        id: Date.now().toString(),
        sender: "client",
        message: chatInput,
        timestamp: new Date(),
      }]);
      setChatInput("");
      
      // Simulate support response
      setTimeout(() => {
        setChatMessages(prev => [...prev, {
          id: (Date.now() + Math.random()).toString(),
          sender: "support",
          message: "Thanks for your message! We've noted that and will get back to you shortly.",
          timestamp: new Date(),
        }]);
      }, 1500);
    }
  };

  if (!isIdentified) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-professional-blue/5 to-white">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-professional-blue to-professional-blue text-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Secure & Encrypted
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Portal</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Send documents securely and chat with our team—no account required.
            </p>
          </div>
        </div>

        {/* Entry Form */}
        <div className="max-w-xl mx-auto px-6 -mt-8">
          <div className="bg-white rounded-xl border border-neutral-200 shadow-xl p-8">
            {preselectedService && (
              <div className="mb-6 p-4 bg-professional-blue/5 border border-professional-blue/20 rounded-lg">
                <p className="text-sm font-medium text-charcoal">
                  📋 Service: <span className="text-professional-blue">{preselectedService.label}</span>
                </p>
                {preselectedService.ronCapable && (
                  <p className="text-xs text-charcoal/70 mt-1">
                    This service is available for Remote Online Notarization
                  </p>
                )}
              </div>
            )}
            
            <form onSubmit={handleIdentify} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-professional-blue focus:border-professional-blue transition"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-professional-blue focus:border-professional-blue transition"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-professional-blue focus:border-professional-blue transition"
                  placeholder="(555) 123-4567"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-professional-blue hover:bg-professional-blue/90 text-white font-semibold py-4 rounded-lg transition transform hover:scale-[1.02] shadow-lg"
              >
                Continue to Portal
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-neutral-200">
              <div className="flex items-start gap-3 text-sm text-neutral-600">
                <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p>
                  <span className="font-semibold text-charcoal">Bank-level security:</span> Your information is encrypted (AES-256) and only shared with our notary team.
                </p>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-neutral-600">
              <p>
                Need to schedule an appointment?{" "}
                <Link to="/book" className="text-professional-blue hover:text-charcoal font-medium">
                  Book Now →
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/book?service=general" className="group bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-lg hover:border-professional-blue/30 transition">
              <div className="w-12 h-12 bg-professional-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-professional-blue/20 transition">
                <svg className="w-6 h-6 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Book Mobile Notary</h3>
              <p className="text-sm text-charcoal/70">Schedule an in-person signing at your location</p>
            </Link>
            
            <Link to="/ron" className="group bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-lg hover:border-professional-blue/30 transition">
              <div className="w-12 h-12 bg-professional-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-professional-blue/20 transition">
                <svg className="w-6 h-6 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Start RON Session</h3>
              <p className="text-sm text-charcoal/70">Notarize online via secure video</p>
            </Link>
            
            <a href="tel:+14696298932" className="group bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-lg hover:border-professional-blue/30 transition">
              <div className="w-12 h-12 bg-professional-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-professional-blue/20 transition">
                <svg className="w-6 h-6 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Call Us</h3>
              <p className="text-sm text-charcoal/70">(469) 629-8932 — Same-day available</p>
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Main Portal View
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-white border-b border-neutral-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-professional-blue to-professional-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                {clientName.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-semibold text-charcoal">{clientName}</p>
                <p className="text-xs text-neutral-500">{clientEmail}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a 
                href="tel:+14696298932" 
                className="hidden md:flex items-center gap-2 text-sm text-neutral-600 hover:text-professional-blue transition"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (469) 629-8932
              </a>
              <button
                onClick={() => setIsIdentified(false)}
                className="text-sm text-neutral-600 hover:text-charcoal transition"
              >
                Switch User
              </button>
              <Link to="/" className="bg-professional-blue text-white px-4 py-2 rounded-lg hover:bg-professional-blue/90 transition text-sm font-medium">
                Exit
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Service Context Banner */}
      {preselectedService && (
        <div className="bg-gradient-to-r from-professional-blue/10 to-professional-blue/10 border-b border-professional-blue/20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="bg-professional-blue text-white text-xs font-semibold px-2 py-1 rounded">SERVICE</span>
                <span className="font-medium text-charcoal">{preselectedService.label}</span>
                {preselectedService.ronCapable && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">RON Available</span>
                )}
              </div>
              <Link to="/book?service=general" className="text-sm text-professional-blue hover:underline font-medium">
                Change Service →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Tab Navigation */}
      <div className="lg:hidden sticky top-16 z-30 bg-white border-b border-neutral-200">
        <div className="flex">
          <button
            onClick={() => setActiveTab("chat")}
            className={`flex-1 py-3 text-sm font-medium text-center transition ${
              activeTab === "chat" 
                ? "text-professional-blue border-b-2 border-professional-blue bg-professional-blue/5" 
                : "text-charcoal/70 hover:text-charcoal"
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Chat
            </span>
          </button>
          <button
            onClick={() => setActiveTab("documents")}
            className={`flex-1 py-3 text-sm font-medium text-center transition ${
              activeTab === "documents" 
                ? "text-professional-blue border-b-2 border-professional-blue bg-professional-blue/5" 
                : "text-charcoal/70 hover:text-charcoal"
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Documents {files.length > 0 && <span className="bg-professional-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{files.length}</span>}
            </span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          
          {/* Left Column: Documents Panel */}
          <div className={`lg:col-span-1 space-y-6 ${activeTab === "documents" ? "block" : "hidden lg:block"}`}>
            {/* Upload Card */}
            <div className="bg-white rounded-xl border border-professional-blue/20 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-professional-blue to-professional-blue/95 p-6">
                <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Secure Document Upload
                </h3>
                <p className="text-white/90 text-sm">Encrypted, financial-grade security</p>
              </div>
              
              <div className="p-6">
                <div className="mb-4 p-3 bg-professional-blue/5 border border-professional-blue/20 rounded-lg flex items-start gap-2">
                  <svg className="w-5 h-5 text-professional-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs font-semibold text-professional-blue">Only Bridge Notary can access your files</span>
                </div>

                <label className="block border-2 border-dashed border-professional-blue/30 rounded-xl p-6 text-center cursor-pointer hover:border-professional-blue hover:bg-professional-blue/3 transition group">
                  <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx,.jpg,.png,.jpeg" />
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-professional-blue/10 rounded-full flex items-center justify-center group-hover:bg-professional-blue/20 transition">
                      <svg className="w-6 h-6 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-charcoal font-semibold">Upload Signing Documents</p>
                      <p className="text-xs text-charcoal/60 mt-1">Drag & drop or click (PDF, DOCX, images)</p>
                    </div>
                  </div>
                </label>

                {newFile && (
                  <div className="mt-4 p-4 bg-professional-blue/5 border border-professional-blue/20 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-professional-blue/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
<p className="text-sm font-medium text-charcoal truncate">{newFile.name}</p>
                      <p className="text-xs text-neutral-500">{(newFile.size / 1024).toFixed(1)} KB</p>
                      </div>
                    </div>
                    <button
                      onClick={handleUploadFile}
                      type="button"
                      className="w-full bg-professional-blue hover:bg-professional-blue/90 text-white font-semibold py-2.5 rounded-lg text-sm transition"
                    >
                      Upload File
                    </button>
                  </div>
                )}

                {/* Uploaded Files List */}
                {files.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-neutral-200">
                    <p className="text-sm font-semibold text-charcoal mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Uploaded ({files.length})
                    </p>
                    <ul className="space-y-2">
                      {files.map((file, idx) => (
                        <li key={idx} className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg border border-neutral-100">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            file.status === "reviewed" 
                              ? "bg-green-100" 
                              : file.status === "received" 
                                ? "bg-professional-blue/10" 
                                : "bg-neutral-200"
                          }`}>
                            {file.status === "reviewed" ? (
                              <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            ) : file.status === "received" ? (
                              <svg className="w-4 h-4 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <svg className="w-4 h-4 text-neutral-400 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                              </svg>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-charcoal truncate">{file.name}</p>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-xs text-neutral-500">{(file.size / 1024).toFixed(1)} KB</span>
                              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                                file.status === "reviewed" 
                                  ? "bg-green-100 text-green-700" 
                                  : file.status === "received" 
                                    ? "bg-professional-blue/10 text-professional-blue" 
                                    : "bg-neutral-200 text-neutral-600"
                              }`}>
                                {file.status === "reviewed" ? "Reviewed" : file.status === "received" ? "Received" : "Uploading..."}
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5">
              <h4 className="font-semibold text-charcoal mb-4 text-sm">Quick Actions</h4>
              <div className="space-y-2">
                <Link to="/book?service=general" className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 transition group">
                  <div className="w-8 h-8 bg-professional-blue/10 rounded-lg flex items-center justify-center group-hover:bg-professional-blue/20 transition">
                    <svg className="w-4 h-4 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-charcoal">Book Appointment</span>
                </Link>
                <Link to="/ron" className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 transition group">
                  <div className="w-8 h-8 bg-professional-blue/10 rounded-lg flex items-center justify-center group-hover:bg-professional-blue/20 transition">
                    <svg className="w-4 h-4 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-charcoal">Start RON Session</span>
                </Link>
                <a href="tel:+14696298932" className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 transition group">
                  <div className="w-8 h-8 bg-professional-blue/10 rounded-lg flex items-center justify-center group-hover:bg-professional-blue/20 transition">
                    <svg className="w-4 h-4 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-charcoal">Call Now</span>
                </a>
              </div>
            </div>

            {/* Security Info */}
            <div className="bg-professional-blue/5 border border-professional-blue/20 rounded-xl p-5">
              <h4 className="font-semibold text-charcoal mb-3 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Security Info
              </h4>
              <ul className="space-y-2 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AES-256 encryption
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Secure connection (HTTPS)
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Only shared with notary team
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Chat Panel */}
          <div className={`lg:col-span-2 ${activeTab === "chat" ? "block" : "hidden lg:block"}`}>
            <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden h-[calc(100vh-200px)] min-h-[500px] max-h-[800px] flex flex-col">
              {/* Chat Header */}
              <div className="p-5 border-b border-neutral-200 bg-gradient-to-r from-professional-blue via-professional-blue to-professional-blue">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6 text-professional-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Document Messaging</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></span>
                        <span className="text-sm text-white/90 font-medium">Bridge Notary Team</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-white/80 hidden md:block bg-white/10 px-3 py-1.5 rounded-full">
                    Replies in minutes
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50/50">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "client" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.sender === "support" && (
                      <div className="w-8 h-8 bg-gradient-to-br from-professional-blue to-professional-blue rounded-full flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0">
                        BN
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] px-4 py-3 ${
                        msg.sender === "client"
                          ? "bg-professional-blue text-white rounded-2xl rounded-br-md"
                          : "bg-white text-neutral-800 rounded-2xl rounded-bl-md border border-neutral-200 shadow-sm"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.message}</p>
                      <p className={`text-xs mt-1.5 ${msg.sender === "client" ? "text-white/70" : "text-neutral-500"}`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                    {msg.sender === "client" && (
                      <div className="w-8 h-8 bg-charcoal rounded-full flex items-center justify-center text-white text-xs font-bold ml-2 flex-shrink-0">
                        {clientName.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="p-4 border-t border-neutral-200 bg-white">
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => document.querySelector<HTMLInputElement>('input[type="file"]')?.click()}
                    className="p-3 text-neutral-500 hover:text-professional-blue hover:bg-professional-blue/5 rounded-xl transition"
                    title="Attach file"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </button>
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 bg-neutral-100 border-0 rounded-xl focus:ring-2 focus:ring-professional-blue focus:bg-white transition"
                  />
                  <button
                    type="submit"
                    disabled={!chatInput.trim()}
                    className="bg-professional-blue hover:bg-professional-blue/90 disabled:bg-neutral-300 disabled:cursor-not-allowed text-white font-semibold px-5 py-3 rounded-xl transition flex items-center gap-2"
                  >
                    <span className="hidden md:inline">Send</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
                <p className="text-xs text-neutral-500 mt-2 text-center">
                  Secure document messaging • <a href="tel:+14696298932" className="text-professional-blue hover:underline">Call (469) 629-8932</a> for urgent requests
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
