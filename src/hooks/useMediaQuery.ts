import { useState, useEffect } from 'react';

/**
 * Custom hook for responding to media query changes
 * Returns boolean indicating whether the media query matches
 * Automatically updates on window resize and orientation change
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if window is available (SSR safety)
    if (typeof window === 'undefined') return;

    // Create media query list
    const mediaQueryList = window.matchMedia(query);
    
    // Set initial value
    setMatches(mediaQueryList.matches);

    // Define event handler
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add event listener (supports both old and new APIs)
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQueryList.addListener(handleChange);
    }

    // Cleanup
    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', handleChange);
      } else {
        // Fallback for older browsers
        mediaQueryList.removeListener(handleChange);
      }
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
