import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { SectionHeaderProps } from '../types';
import '../styles/SectionHeader.css';

/**
 * Section header component with animated underline and gradient text option
 * Supports different alignments and scroll-triggered animations
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = 'center',
  animated = true,
  gradient = false,
}) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const headerClasses = [
    'section-header',
    `section-header--${align}`,
    animated && isVisible ? 'section-header--visible' : '',
    gradient ? 'section-header--gradient' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const titleClasses = [
    'section-header__title',
    gradient ? 'section-header__title--gradient' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={headerClasses}>
      <h2 className={titleClasses}>{title}</h2>
      {subtitle && (
        <p className="section-header__subtitle">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
