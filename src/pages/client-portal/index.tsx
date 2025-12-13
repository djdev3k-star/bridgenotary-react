import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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
}

// Tawk.to chat component
const TawkChat: React.FC = () => {
  useEffect(() => {
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

  return null;
};

const ClientPortal: React.FC = () => {
  const [clientEmail, setClientEmail] = useState("");
  const [clientName, setClientName] = useState("");
  const [isIdentified, setIsIdentified] = useState(false);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [newFile, setNewFile] = useState<File | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      sender: "support",
      message: "Welcome to Bridge Notary Client Portal! How can we help you today?",
      timestamp: new Date(Date.now() - 5 * 60000),
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

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
      setChatMessages(prev => [...prev, {
        id: Date.now().toString(),
        sender: "support",
        message: `Great to meet you, ${clientName}! Ready to send your documents securely. What can we help with?`,
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
      setFiles(prev => [...prev, {
        name: newFile.name,
        size: newFile.size,
        uploadedAt: new Date(),
      }]);
      setNewFile(null);
      setChatMessages(prev => [...prev, {
        id: Date.now().toString(),
        sender: "client",
        message: `Uploaded: ${newFile.name}`,
        timestamp: new Date(),
      }, {
        id: (Date.now() + 1).toString(),
        sender: "support",
        message: "File received! Our team will review it and get back to you shortly.",
        timestamp: new Date(Date.now() + 2000),
      }]);
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
      <div className="min-h-screen bg-gradient-to-b from-proof/5 to-white py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-electric-blue mb-4">No account needed</p>
            <h1 className="text-4xl md:text-5xl font-bold text-proof leading-tight mb-4">Secure Client Portal</h1>
            <p className="text-lg text-neutral-600">Send documents and chat with our team—no login required. Just enter your details to get started.</p>
          </div>

          <div className="bg-white rounded-lg border border-neutral-200 shadow-lg p-8">
            <form onSubmit={handleIdentify} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-electric-blue"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-electric-blue"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="bg-electric-blue/5 border border-electric-blue/20 rounded-lg p-4">
                <p className="text-sm text-neutral-700">
                  <span className="font-semibold text-proof">🔒 Secure & Private:</span> Your information is encrypted (AES-256 at rest) and only shared with our team on a need-to-know basis.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white font-semibold py-3 rounded-lg transition"
              >
                Continue to Portal
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-neutral-200 text-center text-sm text-neutral-600">
              <p>Or <Link to="/book" className="text-electric-blue hover:text-proof font-medium">book a notary appointment</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-8 px-4 md:px-6">
      <TawkChat />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="bg-white rounded-lg border border-neutral-200 shadow-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric-blue">Welcome</p>
              <h1 className="text-2xl md:text-3xl font-bold text-proof mt-1">{clientName}</h1>
              <p className="text-neutral-600 text-sm mt-1">{clientEmail}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsIdentified(false)}
                className="border border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg hover:bg-neutral-50 transition text-sm font-medium"
              >
                Different user
              </button>
              <Link to="/" className="bg-proof text-white px-4 py-2 rounded-lg hover:bg-proof/90 transition text-sm font-medium">
                Back to site
              </Link>
            </div>
          </div>
        </div>

        {/* Main content: Document upload and Chat */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Left column: Document upload */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg border border-neutral-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-proof mb-4">Send Documents</h3>
              
              <label className="block border-2 border-dashed border-neutral-300 rounded-lg p-6 text-center cursor-pointer hover:border-electric-blue hover:bg-electric-blue/5 transition">
                <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx,.jpg,.png,.jpeg" />
                <div className="flex flex-col items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <div>
                    <p className="text-neutral-800 font-medium text-sm">Click or drag files</p>
                    <p className="text-xs text-neutral-500">PDF, DOCX, images</p>
                  </div>
                </div>
              </label>

              {newFile && (
                <div className="mt-4 p-3 bg-electric-blue/5 border border-electric-blue/20 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-electric-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-neutral-700">{newFile.name}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleUploadFile}
                    type="button"
                    className="w-full mt-3 bg-electric-blue hover:bg-electric-blue/90 text-white font-semibold py-2 rounded text-sm transition"
                  >
                    Upload
                  </button>
                </div>
              )}

              {files.length > 0 && (
                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <p className="text-sm font-medium text-neutral-700 mb-3">Uploaded ({files.length})</p>
                  <ul className="space-y-2">
                    {files.map((file, idx) => (
                      <li key={idx} className="flex items-start gap-2 p-2 bg-neutral-50 rounded text-sm">
                        <svg className="h-4 w-4 text-electric-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div className="flex-1 min-w-0">
                          <p className="text-neutral-700 truncate font-medium">{file.name}</p>
                          <p className="text-xs text-neutral-500">{(file.size / 1024).toFixed(2)} KB</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Info card */}
            <div className="bg-proof/5 border border-proof/20 rounded-lg p-5">
              <h4 className="font-semibold text-proof mb-3 text-sm uppercase tracking-wide">Security Info</h4>
              <ul className="space-y-2 text-xs text-neutral-700">
                <li className="flex gap-2">
                  <span className="text-electric-blue flex-shrink-0">✓</span>
                  <span>AES-256 encryption</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-electric-blue flex-shrink-0">✓</span>
                  <span>Secure connection (HTTPS)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-electric-blue flex-shrink-0">✓</span>
                  <span>Only shared with notary team</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right column: Chat - FULL HEIGHT SCROLLABLE */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden h-[600px] md:h-[700px] flex flex-col">
              {/* Chat header */}
              <div className="p-4 border-b border-neutral-200 bg-gradient-to-r from-proof to-electric-blue text-white">
                <h4 className="text-base font-semibold">Chat with Support</h4>
                <p className="text-xs text-white/80 mt-0.5">Questions about your documents? Message us anytime</p>
              </div>

              {/* Chat messages - SCROLLABLE */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "client" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-3 rounded-lg ${
                        msg.sender === "client"
                          ? "bg-electric-blue text-white rounded-br-none"
                          : "bg-neutral-100 text-neutral-800 rounded-bl-none border border-neutral-200"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.message}</p>
                      <p className={`text-xs mt-1 ${msg.sender === "client" ? "text-white/70" : "text-neutral-500"}`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              {/* Chat input */}
              <form onSubmit={handleSendMessage} className="p-4 border-t border-neutral-200 bg-neutral-50">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-electric-blue text-sm"
                  />
                  <button
                    type="submit"
                    className="bg-electric-blue hover:bg-electric-blue/90 text-white font-semibold px-4 py-2 rounded-lg transition text-sm"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
