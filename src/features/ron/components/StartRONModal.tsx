/**
 * Schedule RON Modal Component
 * Collects signer information and schedules a RON session
 */

import React, { useState } from 'react';
import ronService from '@/services/ronService';

interface ScheduleRONModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleRONModal: React.FC<ScheduleRONModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    signerName: '',
    signerEmail: '',
    signerPhone: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Call backend to schedule RON transaction
      const response = await ronService.startRON({
        signerName: formData.signerName,
        signerEmail: formData.signerEmail,
        signerPhone: formData.signerPhone || undefined,
        transactionName: `Scheduled RON - ${formData.signerName} - ${new Date().toLocaleDateString()}`,
      });

      if (response.success && response.signerUrl) {
        // Redirect to Proof's scheduling link (or confirmation page)
        window.location.href = response.signerUrl;
      } else {
        throw new Error(response.error || 'Failed to schedule RON session');
      }
    } catch (err: any) {
      console.error('Error scheduling RON:', err);
      setError(err.message || 'Failed to schedule RON session. Please try again.');
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="modal max-w-md w-full p-8 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors"
          disabled={isLoading}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal content */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-proof mb-2">Schedule RON Session</h2>
          <p className="text-neutral-600">Enter your information to schedule your remote online notarization. We’ll send you a secure link to join at your chosen time.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name field */}
          <div>
            <label htmlFor="signerName" className="block text-sm font-semibold text-proof mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="signerName"
              name="signerName"
              value={formData.signerName}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="w-full px-4 py-3 border border-neutral-300 rounded focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all disabled:bg-neutral-100"
              placeholder="John Doe"
            />
          </div>

          {/* Email field */}
          <div>
            <label htmlFor="signerEmail" className="block text-sm font-semibold text-proof mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="signerEmail"
              name="signerEmail"
              value={formData.signerEmail}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="w-full px-4 py-3 border border-neutral-300 rounded focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all disabled:bg-neutral-100"
              placeholder="john@example.com"
            />
          </div>

          {/* Phone field (optional) */}
          <div>
            <label htmlFor="signerPhone" className="block text-sm font-semibold text-proof mb-2">
              Phone Number <span className="text-neutral-400 font-normal">(optional)</span>
            </label>
            <input
              type="tel"
              id="signerPhone"
              name="signerPhone"
              value={formData.signerPhone}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-4 py-3 border border-neutral-300 rounded focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all disabled:bg-neutral-100"
              placeholder="(555) 123-4567"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-electric-blue text-white font-semibold py-4 px-6 rounded hover:bg-hover-blue transition-all disabled:bg-neutral-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Scheduling Session...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Schedule RON Session
              </>
            )}
          </button>
        </form>

        {/* Info text */}
        <p className="mt-6 text-xs text-neutral-500 text-center">
          By continuing, you agree to our Terms of Service and Privacy Policy. You’ll receive a secure link to your scheduled notarization session.
        </p>
      </div>
    </div>
  );
};
