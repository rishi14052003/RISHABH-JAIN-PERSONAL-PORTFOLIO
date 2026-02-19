import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Smoothly scrolls to the element matching the current URL hash.
 * Works with BrowserRouter and links like "/#skills".
 */
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;

    // No hash: keep default browser behavior (do nothing).
    if (!hash) return;

    // Wait for the page/sections to render.
    const id = hash.replace('#', '');
    const handle = window.requestAnimationFrame(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    return () => window.cancelAnimationFrame(handle);
  }, [location.hash, location.pathname]);

  return null;
};

export default ScrollToHash;

