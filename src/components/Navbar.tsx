import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { useMediaQuery } from '../hooks/useMediaQuery';
import type { NavbarProps } from '../types';
import '../styles/Navbar.css';

/**
 * Navigation bar with responsive design and theme toggle
 * Features sticky header, mobile menu, and active page indicators
 */
export const Navbar: React.FC<NavbarProps> = ({ 
  currentPath,
  onNavigate 
}) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isMobile = useMediaQuery('(max-width: 640px)');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const currentRoute = currentPath || location.pathname;

  const navigationItems = [
    { name: 'Home', path: '/', label: 'Navigate to home section' },
    { name: 'Skills', path: '/skills', label: 'Go to Skills page' },
    { name: 'Experience', path: '/experience', label: 'Go to Experience page' },
    { name: 'Projects', path: '/projects', label: 'Go to Projects page' },
    { name: 'Publications', path: '/publications', label: 'Go to Publications page' },
    { name: 'Certifications', path: '/certifications', label: 'Go to Certifications page' },
  ];

  const isActiveLink = (path: string) => {
    return currentRoute === path;
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentRoute]);

  // Handle navigation
  const handleNavigate = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    }
    setIsMenuOpen(false);
  };

  // Handle resume download
  const handleResumeDownload = () => {
    // Google Drive file ID from the sharing link
    const fileId = '1I1Ri3_W2VZd51sIqgR_nmznMhGMTlFD0';
    // Use Google Drive's export/download endpoint for direct download
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    // Open in new tab/window for download
    window.open(downloadUrl, '_blank');
  };

  // Theme icon
  const ThemeIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {theme === 'light' ? (
        // Moon icon for dark mode
        <path
          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
          fill="currentColor"
        />
      ) : (
        // Sun icon for light mode
        <>
          <circle cx="12" cy="12" r="5" fill="currentColor" />
          <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" />
          <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" />
          <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" />
          <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" />
        </>
      )}
    </svg>
  );

  // Hamburger menu icon
  const HamburgerIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y={isMenuOpen ? "11" : "6"}
        width="18"
        height="2"
        rx="1"
        fill="currentColor"
        transform={isMenuOpen ? "rotate(45 12 12)" : "none"}
      />
      <rect
        x="3"
        y={isMenuOpen ? "11" : "12"}
        width="18"
        height="2"
        rx="1"
        fill="currentColor"
        style={{ opacity: isMenuOpen ? 0 : 1 }}
      />
      <rect
        x="3"
        y={isMenuOpen ? "11" : "18"}
        width="18"
        height="2"
        rx="1"
        fill="currentColor"
        transform={isMenuOpen ? "rotate(-45 12 12)" : "none"}
      />
    </svg>
  );

  return (
    <>
      {/* Skip to main content link */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <nav 
        className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} ${isMenuOpen ? 'navbar--menu-open' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container">
          <div className="navbar__content">
            {/* Logo */}
            <Link 
              to="/" 
              className="navbar__logo"
              aria-label="Rishabh Jain - Home"
              onClick={() => handleNavigate('/')}
            >
              <span className="navbar__logo-text">Rishabh Jain</span>
            </Link>

            {/* Desktop Navigation */}
            {!isMobile && (
              <div className="navbar__nav">
                <ul className="navbar__list">
                  {navigationItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`navbar__link ${isActiveLink(item.path) ? 'navbar__link--active' : ''}`}
                        aria-label={item.label}
                        aria-current={isActiveLink(item.path) ? 'page' : undefined}
                        onClick={() => handleNavigate(item.path)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="navbar__actions">
              {/* Resume Download Button */}
              <button
                className="navbar__resume-btn"
                onClick={handleResumeDownload}
                aria-label="Download resume"
              >
                Resume
              </button>

              {/* Theme Toggle */}
              <button
                className="navbar__theme-toggle"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                <ThemeIcon />
              </button>

              {/* Mobile Menu Toggle */}
              {isMobile && (
                <button
                  className="navbar__menu-toggle"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={isMenuOpen}
                >
                  <HamburgerIcon />
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobile && (
            <div className={`navbar__mobile-menu ${isMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
              <ul className="navbar__mobile-list">
                {navigationItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`navbar__mobile-link ${isActiveLink(item.path) ? 'navbar__mobile-link--active' : ''}`}
                      aria-label={item.label}
                      aria-current={isActiveLink(item.path) ? 'page' : undefined}
                      onClick={() => handleNavigate(item.path)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Menu Overlay */}
        {isMobile && isMenuOpen && (
          <div 
            className="navbar__overlay"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
