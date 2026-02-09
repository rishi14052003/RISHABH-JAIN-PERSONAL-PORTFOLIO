import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Button from './Button';
import type { ProjectCardProps } from '../types';
import '../styles/ProjectCard.css';

/**
 * Project card component with image overlay, tech stack badges, and metrics
 * Features hover effects and responsive design
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  animated = true,
  lazy = true,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const cardClasses = [
    'project-card',
    animated && isVisible ? 'project-card--visible' : '',
    project.featured ? 'project-card--featured' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div ref={ref} className={cardClasses} data-testid={`project-card-${project.id}`}>
      {/* Project Image */}
      {project.image && (
        <div className="project-card__image-container">
          <img
            src={project.image}
            alt={project.title}
            className={`project-card__image ${isImageLoaded ? 'project-card__image--loaded' : ''}`}
            loading={lazy ? 'lazy' : 'eager'}
            onLoad={handleImageLoad}
            onError={handleImageLoad}
          />
          <div className="project-card__image-overlay">
            {project.category && (
              <span className="project-card__category">
                {project.category.toUpperCase()}
              </span>
            )}
            {project.featured && (
              <span className="project-card__featured-badge">
                ⭐ Featured
              </span>
            )}
          </div>
        </div>
      )}

      {/* Project Content */}
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="project-card__metrics">
            {project.metrics.map((metric, index) => (
              <div key={index} className="project-card__metric">
                <span className="project-card__metric-value">{metric.value}</span>
                <span className="project-card__metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="project-card__tech-stack">
            {project.techStack.slice(0, 4).map((tech, index) => (
              <span key={index} className="project-card__tech-badge">
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="project-card__tech-badge project-card__tech-badge--more">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="project-card__actions">
          {project.githubLink && (
            <Button
              variant="outline"
              size="small"
              onClick={() => window.open(project.githubLink, '_blank')}
              ariaLabel={`View ${project.title} source code on GitHub`}
            >
              View Code
            </Button>
          )}
          {project.liveLink && (
            <Button
              variant="primary"
              size="small"
              onClick={() => window.open(project.liveLink, '_blank')}
              ariaLabel={`View live demo of ${project.title}`}
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
