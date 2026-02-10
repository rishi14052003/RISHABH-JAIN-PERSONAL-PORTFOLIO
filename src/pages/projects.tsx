import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      id: 'ai-image-generator',
      title: 'AI Image Generator',
      description: 'Advanced AI-powered image generation system using Generative Adversarial Networks (GANs) and Variational Autoencoders (VAEs). Built with TensorFlow and PyTorch for creating high-quality synthetic images.',
      techStack: ['Python', 'TensorFlow', 'PyTorch', 'GANs', 'VAEs', 'Machine Learning'],
      githubLink: 'https://github.com/rishi14052003/Ai-Image-Generator',
      category: 'ai' as const,
      featured: true,
    },
  ];

  return (
    <main id="projects" className="projects">
      <div className="container">
        <SectionHeader
          title="Featured Projects"
          subtitle="Innovative solutions showcasing AI/ML expertise and full-stack development"
          align="center"
          gradient
        />

        <div
          ref={projectsRef}
          className={`projects__grid ${projectsVisible ? 'projects__grid--visible' : ''}`}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              animated={true}
              lazy={true}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;