import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to handle automatic scrolling to hash anchors
 * Useful for deep linking to specific sections of a page
 */
export const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    // First, scroll to top on every navigation change
    window.scrollTo(0, 0);

    // Then, if there's a hash, scroll to it
    if (location.hash) {
      // Wait for the page to render
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);
};
