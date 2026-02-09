import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { TimelineItemProps } from '../types';
import '../styles/TimelineItem.css';

/**
 * Timeline item component for experience/education timeline
 * Features alternating layout on desktop and expandable descriptions
 */
export const TimelineItem: React.FC<TimelineItemProps> = ({ 
  experience, 
  index, 
  animated = true,
  alternate = true,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const isLeft = alternate && index % 2 === 0;
  const isRight = alternate && index % 2 === 1;

  const itemClasses = [
    'timeline-item',
    animated && isVisible ? 'timeline-item--visible' : '',
    isLeft ? 'timeline-item--left' : '',
    isRight ? 'timeline-item--right' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div ref={ref} className={itemClasses} data-testid={`timeline-item-${index}`}>
      {/* Timeline Dot */}
      <div className="timeline-item__dot">
        <div className="timeline-item__dot-inner" />
      </div>

      {/* Content */}
      <div className="timeline-item__content">
        {/* Header */}
        <div className="timeline-item__header">
          <div className="timeline-item__company">
            <h3 className="timeline-item__company-name">{experience.company}</h3>
            <span className="timeline-item__role">{experience.role}</span>
          </div>
          <div className="timeline-item__meta">
            <span className="timeline-item__duration">{experience.duration}</span>
            <span className="timeline-item__location">{experience.location}</span>
          </div>
        </div>

        {/* Description */}
        <div className="timeline-item__description">
          <div className={`timeline-item__description-content ${isExpanded ? 'timeline-item__description-content--expanded' : ''}`}>
            <ul className="timeline-item__description-list">
              {experience.description.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
          
          {experience.description.length > 3 && (
            <button
              className="timeline-item__toggle"
              onClick={toggleExpanded}
              aria-expanded={isExpanded}
              aria-label={isExpanded ? 'Show less' : 'Show more'}
            >
              {isExpanded ? 'Show less' : 'Show more'}
            </button>
          )}
        </div>

        {/* Technologies */}
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="timeline-item__technologies">
            <h4 className="timeline-item__technologies-title">Technologies</h4>
            <div className="timeline-item__tech-badges">
              {experience.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="timeline-item__tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {experience.projects && experience.projects.length > 0 && (
          <div className="timeline-item__projects">
            <h4 className="timeline-item__projects-title">Key Projects</h4>
            <ul className="timeline-item__projects-list">
              {experience.projects.map((project, projectIndex) => (
                <li key={projectIndex}>{project}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
