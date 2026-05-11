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
      id: 'geosync',
      title: 'GeoSync — Real-time Map Synchronization',
      description: 'Built a cutting-edge full-stack application enabling instant real-time map synchronization across multiple users with role-based access control. Tracker users broadcast map changes to multiple Tracked users with optimized performance. Features professional HUD interface, mobile-responsive design, Google Maps integration, and Socket.io powered real-time communication delivering seamless collaborative mapping and location sharing experiences.',
      techStack: ['React', 'Node.js', 'Express.js', 'Socket.io', 'Google Maps API', 'Tailwind CSS', 'Vite'],
      githubLink: 'https://github.com/rishi14052003/REAL-TIME-GEO-SYNC',
      category: 'fullstack' as const,
      featured: true,
      metrics: [
        { value: '10/sec', label: 'Update Rate' },
        { value: 'Multi-user', label: 'Real-time Sync' },
        { value: 'Responsive', label: 'Mobile Ready' },
      ],
    },
    {
      id: 'movie-booking',
      title: 'Movie Ticket Booking Website',
      description: 'Engineered a full-stack booking platform managing 50+ movie listings and 100+ user accounts. Implemented high-performance RESTful APIs that improved query response times by 30% and delivered a responsive UI that enhanced user interaction speed by 25%, significantly increasing session duration and customer engagement.',
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Full-Stack'],
      githubLink: 'https://github.com/rishi14052003/ShowTimeBooker',
      category: 'fullstack' as const,
      featured: true,
      metrics: [
        { value: '50+', label: 'Movie Listings' },
        { value: '30%', label: 'Faster Responses' },
        { value: '25%', label: 'Better UX' },
      ],
    },
    {
      id: 'ai-image-generator',
      title: 'AI Image Generator using GANs',
      description: 'Built a cutting-edge generative AI model capable of creating 1,000+ unique synthetic images from random seeds and text prompts. Leveraged advanced deep learning techniques to reduce design workload by 80%, enabling lightning-fast image prototyping for creative applications in gaming and digital media.',
      techStack: ['Python', 'TensorFlow', 'PyTorch', 'GANs', 'VAEs', 'Machine Learning', 'Deep Learning'],
      githubLink: 'https://github.com/rishi14052003/Ai-Image-Generator',
      category: 'ai' as const,
      featured: true,
      metrics: [
        { value: '1000+', label: 'Unique Images' },
        { value: '80%', label: 'Workload Reduction' },
      ],
    },
    {
      id: 'lead-intelligence',
      title: 'Lead Intelligence Platform',
      description: 'Developed a B2B lead intelligence platform using Go (Golang) and React + TypeScript that extracts key decision-makers — CEO, CTO, HR — from company domains in real time. Designed a scalable Go backend handling concurrent domain lookups with optimized performance, paired with an intuitive Tailwind CSS frontend deployed on Netlify for instant accessibility.',
      techStack: ['React', 'TypeScript', 'Go (Golang)', 'Tailwind CSS', 'Netlify', 'B2B APIs', 'Concurrent Systems'],
      githubLink: 'https://github.com/rishi14052003/lead-intelligence-platform',
      category: 'fullstack' as const,
      featured: true,
      metrics: [
        { value: 'Real-time', label: 'Decision-Maker Extraction' },
        { value: 'Concurrent', label: 'Domain Lookups' },
        { value: 'Deployed', label: 'On Netlify' },
      ],
    },
  ];

  return (
    <section id="projects" className="projects scroll-section" aria-label="Projects">
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
    </section>
  );
};

export default Projects;