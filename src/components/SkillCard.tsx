import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { SkillCardProps } from '../types';
import '../styles/SkillCard.css';

/**
 * Skill card component with circular progress indicator and hover effects
 * Shows proficiency, years of experience, and projects where skill was used
 */
export const SkillCard: React.FC<SkillCardProps> = ({ 
  skill, 
  animated = true,
  showProgress = true,
  showProjects = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const cardClasses = [
    'skill-card',
    animated && isVisible ? 'skill-card--visible' : '',
    isHovered ? 'skill-card--hovered' : '',
  ]
    .filter(Boolean)
    .join(' ');

  // Calculate circle progress
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (skill.proficiency / 100) * circumference;

  // Get first letter for icon if no icon provided
  const iconContent = skill.icon || skill.name.charAt(0).toUpperCase();

  return (
    <div 
      ref={ref}
      className={cardClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Icon and Progress */}
      <div className="skill-card__header">
        <div className="skill-card__icon-container">
          {showProgress ? (
            <svg className="skill-card__progress-circle" viewBox="0 0 100 100">
              <circle
                className="skill-card__progress-background"
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke="var(--color-border)"
                strokeWidth="8"
              />
              <circle
                className="skill-card__progress-fill"
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={animated && isVisible ? strokeDashoffset : circumference}
                style={{
                  transition: 'stroke-dashoffset 1s ease-in-out',
                }}
              />
            </svg>
          ) : null}
          <div className="skill-card__icon">
            {skill.icon ? (
              typeof skill.icon === 'string' ? (
                <img src={skill.icon} alt={skill.name} />
              ) : (
                <div className="skill-card__icon-react">
                  {skill.icon}
                </div>
              )
            ) : (
              <span>{iconContent}</span>
            )}
          </div>
        </div>
        
        {showProgress && (
          <div className="skill-card__proficiency">
            <span className="skill-card__proficiency-value">{skill.proficiency}%</span>
          </div>
        )}
      </div>

      {/* Skill Info */}
      <div className="skill-card__content">
        <h3 className="skill-card__name">{skill.name}</h3>
        
        {skill.yearsOfExperience && (
          <div className="skill-card__experience">
            <span className="skill-card__experience-value">{skill.yearsOfExperience}</span>
            <span className="skill-card__experience-label">
              {skill.yearsOfExperience === 1 ? 'year' : 'years'}
            </span>
          </div>
        )}
      </div>

      {/* Projects Tooltip */}
      {showProjects && skill.projectsUsed && skill.projectsUsed.length > 0 && (
        <div className={`skill-card__projects ${isHovered ? 'skill-card__projects--visible' : ''}`}>
          <div className="skill-card__projects-header">
            <span>Used in:</span>
          </div>
          <ul className="skill-card__projects-list">
            {skill.projectsUsed.slice(0, 3).map((project, index) => (
              <li key={index}>{project}</li>
            ))}
            {skill.projectsUsed.length > 3 && (
              <li className="skill-card__projects-more">
                +{skill.projectsUsed.length - 3} more
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SkillCard;
