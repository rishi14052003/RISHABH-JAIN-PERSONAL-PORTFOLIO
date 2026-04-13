import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from '../components/SectionHeader';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import '../styles/Summary.css';

const Education: React.FC = () => {
  const { ref: educationRef, isVisible: educationVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const education = [
    {
      id: 'vit-btech',
      institution: 'Vellore Institute of Technology',
      degree: 'B.Tech',
      field: 'Computer Science',
      location: 'Vellore, Tamil Nadu',
      duration: 'Sept 2021 – Aug 2025',
      cgpa: '7.70',
      description: 'Comprehensive computer science education covering core subjects including Data Structures, Algorithms, Operating Systems, Database Management Systems, Computer Networks, Information Security, and advanced topics in Machine Learning, AI, and Cloud Computing. Hands-on experience with web development, full-stack applications, and automation technologies.',
      highlights: [
        'Strong foundation in core computer science principles',
        'Practical experience with multiple programming languages',
        'Projects in Full-Stack Development and Machine Learning',
        'AWS Certified while pursuing degree',
        'Internship experience in MERN stack development',
      ],
      coursework: [
        'Data Structures & Algorithms',
        'Operating Systems',
        'Database Management Systems',
        'Machine Learning',
        'Artificial Intelligence',
        'Computer Networks',
        'Information Security',
        'Compiler Design',
        'Web Development',
        'Cloud Computing'
      ]
    }
  ];

  return (
    <section id="education" className="scroll-section" aria-label="Education">
      <div className="container">
        <SectionHeader
          title="Education"
          subtitle="Academic Background and Learning Journey"
          align="center"
          gradient
        />

        <div
          ref={educationRef}
          className={`experience__timeline ${educationVisible ? 'experience__visible' : ''}`}
          style={{ maxWidth: '800px', margin: '3rem auto' }}
        >
          {education.map((edu) => (
            <div key={edu.id} className="experience__item" style={{
              padding: '2rem',
              borderRadius: '12px',
              backgroundColor: 'var(--color-bg-secondary)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--color-border)',
              marginBottom: '2rem',
              transition: 'all 0.3s ease',
            }}>
              {/* Header with Degree and Institution */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <GraduationCap size={24} style={{ color: 'var(--color-primary)' }} />
                  <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '600', color: 'var(--color-text-primary)' }}>
                    {edu.degree} in {edu.field}
                  </h3>
                </div>
                <p style={{ margin: '0.25rem 0', fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}>
                  {edu.institution}
                </p>
              </div>

              {/* Location, Duration, and CGPA */}
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)' }}>
                  <MapPin size={16} />
                  {edu.location}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)' }}>
                  <Calendar size={16} />
                  {edu.duration}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)' }}>
                  <Award size={16} />
                  CGPA: {edu.cgpa}
                </div>
              </div>

              {/* Description */}
              <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--color-text-primary)' }}>
                {edu.description}
              </p>

              {/* Highlights */}
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ margin: '0.5rem 0', fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-text-secondary)' }}>
                  Key Achievements:
                </p>
                <ul style={{ margin: '0.5rem 0', paddingLeft: '1.5rem', color: 'var(--color-text-primary)' }}>
                  {edu.highlights.map((highlight, index) => (
                    <li key={index} style={{ marginBottom: '0.5rem', lineHeight: '1.5' }}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coursework */}
              <div>
                <p style={{ margin: '0.5rem 0', fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-text-secondary)' }}>
                  Relevant Coursework:
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      style={{
                        padding: '0.35rem 0.9rem',
                        backgroundColor: 'rgba(var(--color-primary-rgb), 0.1)',
                        color: 'var(--color-primary)',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        border: '1px solid var(--color-primary)',
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
