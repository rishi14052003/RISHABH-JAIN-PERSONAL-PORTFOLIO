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
      position: 'Software Engineer',
      company: 'iGeek',
      location: 'Surat, Gujarat',
      duration: 'Sept 2025 – Present',
      descriptionPoints: [
        'Engineered a full-stack Restaurant Booking System that enables seamless table reservations with real-time availability tracking and comprehensive admin controls — transforming manual booking processes into instant, automated reservations across multiple locations',
        'Crafted a dynamic frontend for a Trading Platform that brings market data to life through interactive live price charts, personalized portfolio dashboards, and intuitive order placement interfaces — making financial trading accessible and engaging',
        'Orchestrated an intelligent n8n automation pipeline for enterprise lead generation that intelligently scrapes and aggregates critical business intelligence—emails, phone numbers, and decision-maker details—seamlessly routing qualified leads through webhook integrations'
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'n8n', 'REST APIs', 'Real-time Systems'],
      highlights: [
        'Built real-time reservation system handling concurrent bookings with instant availability updates',
        'Designed intuitive financial dashboards simplifying complex market data visualization',
        'Created scalable REST APIs delivering 99%+ uptime for mission-critical operations',
        'Engineered intelligent automation pipeline generating high-quality B2B leads at scale',
        'Implemented responsive, animation-rich UIs that boosted user engagement and retention'
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

              {/* Description - Bullet Points */}
              {exp.descriptionPoints && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <ul style={{
                    margin: '0.5rem 0',
                    paddingLeft: '1.5rem',
                    listStyle: 'none',
                  }}>
                    {exp.descriptionPoints.map((point, idx) => (
                      <li
                        key={idx}
                        style={{
                          margin: '0.6rem 0',
                          paddingLeft: '1.5rem',
                          position: 'relative',
                          color: 'var(--color-text-primary)',
                          lineHeight: '1.6',
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          top: '0.5rem',
                          width: '6px',
                          height: '6px',
                          backgroundColor: 'var(--color-primary)',
                          borderRadius: '50%',
                        }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

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