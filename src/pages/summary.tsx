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
  Flame as Fire,
  Code as Code2,  
  Bot as N8nIcon
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
    { name: 'Python', icon: <Code2 size={32} /> },
    { name: 'MongoDB', icon: <Database size={32} /> },
    { name: 'n8n', icon: <Fire size={32} /> },
    { name: 'AWS', icon: <N8nIcon size={32} /> },
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
            Results-driven Full Stack Developer and Automation Specialist with expertise in React.js, Node.js, and Python, delivering scalable web applications and AI-powered solutions. Proven track record in building financial tools, including automated trading bots and high-efficiency workflow pipelines using n8n and Airtable.
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

      <section className="summary__cta">
        <div className="container">
          <div className="summary__cta-content">
            <h2 className="summary__cta-title">Let's build something together</h2>
            <p className="summary__cta-description">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="summary__cta-actions">
              <a
                href="mailto:siddh2606@gmail.com"
                className="summary__cta-email"
              >
                siddh2606@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Summary;
