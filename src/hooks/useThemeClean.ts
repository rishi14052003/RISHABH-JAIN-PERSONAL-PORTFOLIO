import { useState, useEffect } from 'react';
import type { Theme, ThemeContextType } from '../types';

/**
 * Custom hook for managing theme state
 * Handles dark/light theme switching with localStorage persistence
 * and system preference detection
 */
export const useTheme = (): ThemeContextType => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Initialize theme from localStorage or system preference
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('portfolio-theme') as Theme;
      if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
        return storedTheme;
      }
      
      // Use system preference if no stored theme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    
    // Default to light theme for SSR
    return 'light';
  });

  /**
   * Apply theme to document element
   */
  const applyTheme = (newTheme: Theme) => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.setAttribute('data-theme', newTheme);
      
      // Update meta theme-color for mobile browsers
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute(
          'content',
          newTheme === 'dark' ? '#0f172a' : '#ffffff'
        );
      }
    }
  };

  /**
   * Toggle between light and dark themes
   */
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('portfolio-theme', newTheme);
      }
      
      return newTheme;
    });
  };

  /**
   * Listen for system theme changes
   */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't manually set a preference
      const storedTheme = localStorage.getItem('portfolio-theme') as Theme;
      if (!storedTheme) {
        const systemTheme = e.matches ? 'dark' : 'light';
        setTheme(systemTheme);
      }
    };
    
    // Add event listener
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  /**
   * Apply theme to DOM whenever it changes
   */
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return {
    theme,
    toggleTheme,
    setTheme,
  };
};
