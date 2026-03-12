import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from '../components/SectionHeader';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import '../styles/Summary.css';

const Experience: React.FC = () => {
  const { ref: experienceRef, isVisible: experienceVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      id: 'mern-developer-igeektech',
      position: 'MERN Stack Developer',
      company: 'iGeekTech',
      location: 'Surat, Gujarat',
      duration: 'Sept 2025 – Present',
      description: 'Developing full-stack web applications using the MERN Stack. Led development of multiple projects including an Online Restaurant Booking System with real-time reservations, an Expense Calculator with analytics, a feature-rich E-commerce Website with payment integration, and a professional networking platform (Workaholic) similar to LinkedIn. Collaborated with cross-functional teams to design scalable architectures and implemented responsive user interfaces using React and Redux.',
      techStack: ['React', 'Redux', 'Node.js', 'Express.js', 'MySQL', 'Full-Stack Development'],
      highlights: [
        'Built responsive UI components using React',
        'Developed RESTful APIs with Express.js and Node.js',
        'Designed relational databases with MySQL',
        'Implemented real-time features and notifications',
        'Optimized application performance and user experience'
      ]
    }
  ];

  return (
    <section id="experience" className="scroll-section" aria-label="Experience">
      <div className="container">
        <SectionHeader
          title="Professional Experience"
          subtitle="Roles, responsibilities, and technical contributions"
          align="center"
          gradient
        />

        <div
          ref={experienceRef}
          className={`experience__timeline ${experienceVisible ? 'experience__visible' : ''}`}
          style={{ maxWidth: '800px', margin: '3rem auto' }}
        >
          {experiences.map((exp) => (
            <div key={exp.id} className="experience__item" style={{
              padding: '2rem',
              borderRadius: '12px',
              backgroundColor: 'var(--color-bg-secondary)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--color-border)',
              marginBottom: '2rem',
              transition: 'all 0.3s ease',
            }}>
              {/* Header with Position and Company */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Briefcase size={20} style={{ color: 'var(--color-primary)' }} />
                  <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '600', color: 'var(--color-text-primary)' }}>
                    {exp.position}
                  </h3>
                </div>
                <p style={{ margin: '0.25rem 0', fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}>
                  {exp.company}
                </p>
              </div>

              {/* Location and Duration */}
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)' }}>
                  <MapPin size={16} />
                  {exp.location}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)' }}>
                  <Calendar size={16} />
                  {exp.duration}
                </div>
              </div>

              {/* Description */}
              <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--color-text-primary)' }}>
                {exp.description}
              </p>

              {/* Tech Stack */}
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ margin: '0.5rem 0', fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-text-secondary)' }}>
                  Tech Stack:
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.35rem 0.9rem',
                        backgroundColor: 'var(--color-primary)',
                        color: 'var(--color-text-inverse)',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '500',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <p style={{ margin: '0.5rem 0', fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-text-secondary)' }}>
                  Key Highlights:
                </p>
                <ul style={{
                  margin: '0.5rem 0',
                  paddingLeft: '1.5rem',
                  listStyle: 'none',
                }}>
                  {exp.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      style={{
                        margin: '0.4rem 0',
                        paddingLeft: '1.5rem',
                        position: 'relative',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '0.35rem',
                        width: '6px',
                        height: '6px',
                        backgroundColor: 'var(--color-primary)',
                        borderRadius: '50%',
                      }} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;