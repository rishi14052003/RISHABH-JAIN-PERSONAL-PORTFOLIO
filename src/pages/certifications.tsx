import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from '../components/SectionHeader';
import { Award, Calendar, Link as LinkIcon, FileText } from 'lucide-react';
import '../styles/Projects.css';

const Certifications: React.FC = () => {
  const { ref: certificationsRef, isVisible: certificationsVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const certifications = [
    {
      id: 'aws-certified',
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      issueDate: 'February 25, 2024',
      expirationDate: 'February 25, 2027',
      credentialId: 'f11139fa33404101817f6ef31e5d3412',
      description: 'Professional certification validating comprehensive understanding of AWS Cloud services, core AWS services, security, compliance, and billing concepts. Demonstrates expertise in cloud computing fundamentals and AWS ecosystem.',
      status: 'Active',
      credentialUrl: 'https://drive.google.com/file/d/1lvtuUVR_sP9giYQzXzOJl7mD4e2kVBnl/view?usp=sharing',
      verificationUrl: 'https://aws.amazon.com/verification',
      badgeColor: '#FF9900',
      skills: ['Cloud Computing', 'AWS Services', 'Cloud Security', 'Infrastructure'],
    },
    {
      id: 'mern-internship',
      title: 'MERN Full Stack Internship Program',
      issuer: 'Ethnus',
      issueDate: 'December 8, 2023',
      duration: '100 Hours',
      programDates: 'Aug 2023 - Nov 2023',
      regNumber: '21BCE2953',
      description: 'Comprehensive full-stack development internship covering MongoDB, Express.js, React.js, and Node.js. Built production-ready applications with focus on modern web development practices, RESTful APIs, and responsive UI design.',
      status: 'Completed',
      credentialUrl: 'https://drive.google.com/file/d/1sDdQD8ghI3uKKgIkxaYMLus1NNtBmB9g/view?usp=drive_link',
      badgeColor: '#4CAF50',
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Full-Stack Development'],
    },
  ];

  return (
    <section id="certifications" className="scroll-section" aria-label="Certifications">
      <div className="container">
        <SectionHeader
          title="Certifications & Credentials"
          subtitle="Professional certifications and verified credentials"
          align="center"
          gradient
        />

        <div
          ref={certificationsRef}
          className={`projects__grid ${certificationsVisible ? 'projects__grid--visible' : ''}`}
          style={{ marginTop: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}
        >
          {certifications.map((cert) => (
            <div
              key={cert.id}
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                border: `2px solid ${cert.badgeColor}`,
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
              {/* Header with Badge */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: cert.badgeColor,
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Award size={28} color="white" />
                </div>
                <div>
                  <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.3rem', fontWeight: '700', color: 'var(--color-text-primary)' }}>
                    {cert.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '0.4rem 1rem',
                    backgroundColor: cert.badgeColor,
                    color: 'white',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                  }}
                >
                  {cert.status}
                </span>
              </div>

              {/* Description */}
              <p style={{
                margin: 0,
                lineHeight: '1.6',
                color: 'var(--color-text-primary)',
                fontSize: '0.95rem',
              }}>
                {cert.description}
              </p>

              {/* Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <Calendar size={16} style={{ color: cert.badgeColor }} />
                  <span style={{ color: 'var(--color-text-secondary)' }}>
                    <strong>Issue Date:</strong> {cert.issueDate}
                  </span>
                </div>
                {cert.expirationDate && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                    <Calendar size={16} style={{ color: cert.badgeColor }} />
                    <span style={{ color: 'var(--color-text-secondary)' }}>
                      <strong>Expires:</strong> {cert.expirationDate}
                    </span>
                  </div>
                )}
                {cert.programDates && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                    <Calendar size={16} style={{ color: cert.badgeColor }} />
                    <span style={{ color: 'var(--color-text-secondary)' }}>
                      <strong>Program:</strong> {cert.programDates}
                    </span>
                  </div>
                )}
                {cert.duration && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                    <Calendar size={16} style={{ color: cert.badgeColor }} />
                    <span style={{ color: 'var(--color-text-secondary)' }}>
                      <strong>Duration:</strong> {cert.duration}
                    </span>
                  </div>
                )}
                {cert.credentialId && (
                  <div style={{ fontSize: '0.85rem' }}>
                    <strong style={{ color: 'var(--color-text-secondary)' }}>Credential ID:</strong>
                    <code style={{
                      display: 'block',
                      marginTop: '0.25rem',
                      padding: '0.5rem',
                      backgroundColor: 'var(--color-bg-tertiary)',
                      borderRadius: '4px',
                      color: 'var(--color-primary)',
                      wordBreak: 'break-all',
                      fontFamily: 'monospace',
                    }}>
                      {cert.credentialId}
                    </code>
                  </div>
                )}
                {cert.regNumber && (
                  <div style={{ fontSize: '0.85rem' }}>
                    <strong style={{ color: 'var(--color-text-secondary)' }}>Registration No:</strong>
                    <code style={{
                      display: 'block',
                      marginTop: '0.25rem',
                      padding: '0.5rem',
                      backgroundColor: 'var(--color-bg-tertiary)',
                      borderRadius: '4px',
                      color: 'var(--color-primary)',
                      fontFamily: 'monospace',
                    }}>
                      {cert.regNumber}
                    </code>
                  </div>
                )}
              </div>

              {/* Skills */}
              <div>
                <p style={{ margin: '0 0 0.75rem 0', fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-text-secondary)' }}>
                  Key Skills:
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: '0.35rem 0.8rem',
                        backgroundColor: cert.badgeColor,
                        color: 'white',
                        borderRadius: '16px',
                        fontSize: '0.8rem',
                        fontWeight: '500',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)', flexWrap: 'wrap' }}>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.6rem 1.2rem',
                    backgroundColor: cert.badgeColor,
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                    border: `2px solid ${cert.badgeColor}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = cert.badgeColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = cert.badgeColor;
                    e.currentTarget.style.color = 'white';
                  }}
                >
                  <FileText size={18} />
                  View Credential
                </a>
                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.6rem 1.2rem',
                      backgroundColor: 'transparent',
                      color: cert.badgeColor,
                      textDecoration: 'none',
                      borderRadius: '8px',
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease',
                      border: `2px solid ${cert.badgeColor}`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = cert.badgeColor;
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = cert.badgeColor;
                    }}
                  >
                    <LinkIcon size={18} />
                    Verify
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
