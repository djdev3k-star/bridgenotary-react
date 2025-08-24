import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop
 * When the pathname changes, ensure the window is scrolled to the top.
 */
export default function ScrollToTop(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use instant scrolling to avoid janky transitions on route change
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch (e) {
      // fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
