import React from 'react';
import { Link } from 'react-router-dom';
import type { FooterProps, SocialLink } from '../types';
import '../styles/Footer.css';

/**
 * Footer component with social links, navigation, and copyright
 * Responsive layout with 3-column desktop, 2-column tablet, 1-column mobile
 */
export const Footer: React.FC<FooterProps> = ({ 
  socialLinks = [
    {
      platform: 'github',
      url: 'https://github.com/rishi14052003',
      label: 'GitHub Profile',
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/rishabh-jain-14052003',
      label: 'LinkedIn Profile',
    },
    {
      platform: 'email',
      url: 'mailto:siddh2606@gmail.com',
      label: 'Email Contact',
    },
  ],
}) => {
  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Publications', path: '/publications' },
    { name: 'Certifications', path: '/certifications' },
  ];

  const SocialIcon = ({ platform }: { platform: SocialLink['platform'] }) => {
    switch (platform) {
      case 'github':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'email':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-10 5L2 7"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__content">
          {/* Social Links */}
          <div className="footer__section footer__social">
            <h3 className="footer__title">Connect</h3>
            <div className="footer__social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="footer__social-link"
                  aria-label={link.label}
                  target={link.platform === 'email' ? '_self' : '_blank'}
                  rel={link.platform === 'email' ? undefined : 'noopener noreferrer'}
                >
                  <SocialIcon platform={link.platform} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="footer__section footer__nav">
            <h3 className="footer__title">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="footer__nav-list">
                {navigationItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="footer__nav-link"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact & Copyright */}
          <div className="footer__section footer__info">
            <h3 className="footer__title">Contact</h3>
            <div className="footer__contact">
              <a 
                href="mailto:siddh2606@gmail.com" 
                className="footer__email"
              >
                siddh2606@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer> 
  );
};

export default Footer;
  