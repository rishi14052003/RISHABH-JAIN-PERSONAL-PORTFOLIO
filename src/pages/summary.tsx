import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTypewriter } from '../hooks/useTypewriter';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import { 
  Code2 as ReactIcon, 
  Server as NodejsIcon, 
  Database, 
  Code as Code2,  
  Zap,
  Package,
  Cloud,
  Brain
} from 'lucide-react';
import '../styles/Summary.css';

const Summary: React.FC = () => {
  const { text: currentRole } = useTypewriter({
    strings: [
      'MERN Stack Developer',
      'Full Stack Developer',
      'Automation Engineer (n8n, Airtable)'
    ],
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDuration: 2000,
    loop: true,
  });

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const featuredSkills = [
    { name: 'React.js', icon: <ReactIcon size={32} /> },
    { name: 'Node.js', icon: <NodejsIcon size={32} /> },
    { name: 'Express.js', icon: <Zap size={32} /> },
    { name: 'MongoDB', icon: <Database size={32} /> },
    { name: 'TypeScript', icon: <Code2 size={32} /> },
    { name: 'Python', icon: <Code2 size={32} /> },
    { name: 'AWS', icon: <Cloud size={32} /> },
    { name: 'Docker', icon: <Package size={32} /> },
    { name: 'MySQL', icon: <Database size={32} /> },
    { name: 'TensorFlow', icon: <Brain size={32} /> },
  ];

  return (
    <main id="main" className="summary">
      <section
        ref={heroRef}
        className={`summary__hero ${heroVisible ? 'summary__hero--visible' : ''}`}
      >
        <div className="summary__hero-content">
          <h1 className="summary__hero-title">
            Hi, I'm <span className="summary__hero-name">Rishabh Jain</span>
          </h1>

          <div className="summary__hero-role">
            <span className="summary__role-static">I'm a </span>
            <span className="summary__role-typewriter">{currentRole}</span>
            <span className="summary__role-cursor">|</span>
          </div>

          <p className="summary__hero-description">
            Full Stack Developer with proven expertise in building scalable web applications using the MERN stack. AWS Certified Cloud Practitioner with hands-on experience in real-time systems, RESTful APIs, and cloud infrastructure. Passionate about leveraging cutting-edge technologies to deliver high-performance solutions that enhance user experience and operational efficiency.
          </p>

          <div className="summary__hero-actions">
            <Button
              variant="primary"
              size="large"
              onClick={() => window.location.assign('/projects')}
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="large"
              onClick={() => {
                window.open('https://drive.google.com/file/d/1Q5pw6dOg887IEsOvPfUNx4u8zXYrUtzB/view?usp=sharing', '_blank');
              }}
            >
              Download Resume
            </Button>
          </div>
        </div>

        <div className="summary__hero-background">
          <div className="summary__hero-particle summary__hero-particle--1" />
          <div className="summary__hero-particle summary__hero-particle--2" />
          <div className="summary__hero-particle summary__hero-particle--3" />
          <div className="summary__hero-particle summary__hero-particle--4" />
          <div className="summary__hero-particle summary__hero-particle--5" />
        </div>
      </section>

      <section
        ref={skillsRef}
        className={`summary__skills ${skillsVisible ? 'summary__skills--visible' : ''}`}
      >
        <div className="container">
          <SectionHeader
            title="Core Technologies"
            subtitle="Technologies I work with daily"
            align="center"
            gradient
          />

          <div className="summary__skills-grid">
            {featuredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="summary__skill-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="summary__skill-icon">{skill.icon}</div>
                <span className="summary__skill-name">{skill.name}</span>
              </div>
            ))}
          </div>

          <div className="summary__skills-actions">
            <Link to="/skills">
              <Button variant="secondary" size="medium">
                View All Skills
              </Button>
            </Link>
          </div>
        </div>
      </section>


    </main>
  );
};

export default Summary;
