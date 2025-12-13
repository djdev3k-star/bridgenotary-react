import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface TawkChatProps {
  /** Whether to render the embedded container (for inline display) */
  embedded?: boolean;
  /** Custom container ID for embedded mode */
  containerId?: string;
  /** Custom height for embedded container */
  height?: string;
}

declare global {
  interface Window {
    Tawk_API?: {
      embedded?: string;
      maximize?: () => void;
      minimize?: () => void;
      toggle?: () => void;
      hideWidget?: () => void;
      showWidget?: () => void;
      onLoad?: () => void;
      customStyle?: {
        visibility?: {
          desktop?: { position?: string; xOffset?: string | number; yOffset?: string | number };
          mobile?: { position?: string; xOffset?: number; yOffset?: number };
          bubble?: { rotate?: string; xOffset?: number; yOffset?: number };
        };
        zIndex?: string | number;
      };
    };
    Tawk_LoadStart?: Date;
  }
}

const TAWK_PROPERTY_ID = '693c5584e0ccea197d8fdf4c';
const TAWK_WIDGET_ID = '1jc9ra8th';

// Pages where the floating widget should be hidden
const HIDDEN_ON_PAGES = ['/client-portal', '/portal'];

/**
 * Tawk.to Chat Component
 * 
 * Floating widget that appears site-wide (except on client portal)
 * Widget is customized with Bridge Notary blue theme
 */
export const TawkChat: React.FC<TawkChatProps> = ({ 
  embedded = false, 
  containerId = `tawk_${TAWK_PROPERTY_ID}`,
  height = '400px'
}) => {
  const location = useLocation();
  const shouldHide = HIDDEN_ON_PAGES.some(page => location.pathname.startsWith(page));

  useEffect(() => {
    // Only initialize once
    if (!window.Tawk_API) {
      window.Tawk_API = {};
      window.Tawk_LoadStart = new Date();
      
      if (embedded) {
        window.Tawk_API.embedded = containerId;
      }

      // Custom styling for the widget position
      window.Tawk_API.customStyle = {
        visibility: {
          desktop: {
            position: 'br', // bottom-right
            xOffset: '20',
            yOffset: '20'
          },
          mobile: {
            position: 'br',
            xOffset: 15,
            yOffset: 15
          }
        },
        zIndex: '999'
      };

      const script = document.createElement('script');
      script.async = true;
      script.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      document.body.appendChild(script);

      // Note: Widget color (blue) should be set in Tawk.to dashboard:
      // Dashboard > Administration > Chat Widget > Appearance > Widget Color
      // Set to: #0046fa (electric-blue)

      return () => {
        // Cleanup on unmount if needed
        // Note: Tawk.to doesn't provide a clean destroy method
      };
    }
  }, [embedded, containerId]);

  // Show/hide widget based on current page
  useEffect(() => {
    if (shouldHide) {
      window.Tawk_API?.hideWidget?.();
    } else {
      window.Tawk_API?.showWidget?.();
    }
  }, [shouldHide]);

  if (embedded) {
    return (
      <div 
        id={containerId} 
        className="overflow-hidden rounded-lg border border-neutral-200"
        style={{ height }}
      />
    );
  }

  // For floating widget mode, we don't render anything
  return null;
};

/**
 * Hook to control the Tawk.to widget programmatically
 */
export const useTawkChat = () => {
  const maximize = () => window.Tawk_API?.maximize?.();
  const minimize = () => window.Tawk_API?.minimize?.();
  const toggle = () => window.Tawk_API?.toggle?.();
  const hide = () => window.Tawk_API?.hideWidget?.();
  const show = () => window.Tawk_API?.showWidget?.();

  return { maximize, minimize, toggle, hide, show };
};

export default TawkChat;
