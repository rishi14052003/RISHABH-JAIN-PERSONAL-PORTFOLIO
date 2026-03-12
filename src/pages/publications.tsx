import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from '../components/SectionHeader';
import { Github, FileText } from 'lucide-react';
import '../styles/Projects.css';

const Publications: React.FC = () => {
  const { ref: publicationsRef, isVisible: publicationsVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const publications = [
    {
      id: 'lipnet-publication',
      title: 'LIPNET: Deep Learning for Visual Speech Recognition',
      description: 'A groundbreaking deep learning architecture that revolutionizes visual speech recognition by leveraging advanced neural networks to interpret lip movements and convert them into text. This cutting-edge system combines state-of-the-art computer vision techniques with deep learning models to achieve unprecedented accuracy in lip-reading applications. Perfect for accessibility solutions, silent communication systems, and multi-modal speech recognition platforms.',
      techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'NumPy', 'Keras', 'Scikit-Learn', 'Deep Learning'],
      publicationLink: 'http://ijset.in/lipnet-deep-learning-visual-speech-recognitions/',
      githubLink: 'https://github.com/rishi14052003/lip_parser',
      publicationTitle: 'IJSET Publication',
      featured: true,
    },
  ];

  return (
    <section id="publications" className="scroll-section" aria-label="Publications">
      <div className="container">
        <SectionHeader
          title="Publications & Research"
          subtitle="Peer-reviewed research and innovative deep learning projects"
          align="center"
          gradient
        />

        <div
          ref={publicationsRef}
          className={`projects__grid ${publicationsVisible ? 'projects__grid--visible' : ''}`}
          style={{ marginTop: '3rem' }}
        >
          {publications.map((pub) => (
            <div
              key={pub.id}
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                border: '2px solid var(--color-accent)',
                borderRadius: '12px',
                padding: '2rem',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              {/* Header with Title */}
              <div>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.5rem' }}>
                  <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: '700', color: 'var(--color-text-primary)', flex: 1 }}>
                    {pub.title}
                  </h3>
                </div>
                <p style={{ margin: '0.5rem 0', fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>
                  Published in: <strong>{pub.publicationTitle}</strong>
                </p>
              </div>

              {/* Description */}
              <p style={{
                lineHeight: '1.7',
                color: 'var(--color-text-primary)',
                margin: 0,
                fontSize: '0.95rem',
              }}>
                {pub.description}
              </p>

              {/* Tech Stack */}
              <div>
                <p style={{ margin: '0.5rem 0', fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-text-secondary)' }}>
                  Technologies Used:
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {pub.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.3rem 0.8rem',
                        backgroundColor: 'var(--color-primary)',
                        color: 'var(--color-text-inverse)',
                        borderRadius: '16px',
                        fontSize: '0.8rem',
                        fontWeight: '500',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                <a
                  href={pub.publicationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.6rem 1.2rem',
                    backgroundColor: 'var(--color-accent)',
                    color: 'var(--color-text-inverse)',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                    border: '2px solid var(--color-accent)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--color-accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                    e.currentTarget.style.color = 'var(--color-text-inverse)';
                  }}
                >
                  <FileText size={18} />
                  Read Publication
                </a>
                <a
                  href={pub.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.6rem 1.2rem',
                    backgroundColor: 'var(--color-primary)',
                    color: 'var(--color-text-inverse)',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                    border: '2px solid var(--color-primary)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--color-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                    e.currentTarget.style.color = 'var(--color-text-inverse)';
                  }}
                >
                  <Github size={18} />
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;