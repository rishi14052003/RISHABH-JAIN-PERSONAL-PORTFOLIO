import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SkillCard from '../components/SkillCard';
import SectionHeader from '../components/SectionHeader';
import { 
  Code2 as ReactIcon, 
  Hexagon as NodejsIcon, 
  Leaf as MongoIcon,
  Cloud as AWSIcon,
  Workflow as N8nIcon,
  FileCode as HTMLIcon,
  Palette as CSSIcon,
  Terminal as TerminalIcon,
  Code as JSIcon,
  Coffee as JavaIcon,
  Square as CIcon,
  Triangle as CppIcon,
  GitBranch as GitIcon,
  Globe as GithubIcon,
  Triangle as VercelIcon,
  Layers as NetlifyIcon,
  Box as RenderIcon,
  Grid3x3 as AirtableIcon,
  Store as WixIcon,
  Sparkles as TensorFlowIcon,
  Zap as PyTorchIcon,
  BarChart as ScikitIcon,
  Eye as GANIcon,
  Layers3 as VAEIcon,
  MessageSquare as NaiveBayesIcon,
  FileText as NLPIcon,
  Network as NetworkingIcon,
  HardDrive as DBMSIcon,
  Database as MySQLIcon,
} from 'lucide-react';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillsList = [
    // Frontend Development
    {
      name: 'HTML',
      category: 'Frontend Development',
      proficiency: 0,
      icon: <HTMLIcon size={16} />,
      projectsUsed: ['Web Development', 'Semantic Markup', 'SEO Optimization'],
    },
    {
      name: 'CSS',
      category: 'Frontend Development',
      proficiency: 0,
      icon: <CSSIcon size={16} />,
      projectsUsed: ['Responsive Design', 'Styling', 'Animation'],
    },
    {
      name: 'JavaScript',
      category: 'Frontend Development',
      proficiency: 0,
      icon: <JSIcon size={16} />,
      projectsUsed: ['Interactive UI', 'DOM Manipulation', 'Event Handling'],
    },
    {
      name: 'React.js',
      category: 'Frontend Development',
      proficiency: 0,
      icon: <ReactIcon size={16} />,
      projectsUsed: ['Portfolio Website', 'E-commerce Platform', 'Dashboard Applications'],
    },

    // Backend Development
    {
      name: 'Node.js',
      category: 'Backend Development',
      proficiency: 0,
      icon: <NodejsIcon size={16} />,
      projectsUsed: ['REST APIs', 'Microservices', 'Authentication Systems'],
    },
    {
      name: 'Express.js',
      category: 'Backend Development',
      proficiency: 0,
      icon: <NodejsIcon size={16} />,
      projectsUsed: ['API Development', 'Server-side Logic', 'Middleware'],
    },

    // Programming Languages
    {
      name: 'Python',
      category: 'Backend Development',
      proficiency: 0,
      icon: <TerminalIcon size={16} />,
      projectsUsed: ['Machine Learning', 'Data Analysis', 'Automation Scripts'],
    },
    {
      name: 'Java',
      category: 'Backend Development',
      proficiency: 0,
      icon: <JavaIcon size={16} />,
      projectsUsed: ['Object-Oriented Programming', 'Desktop Applications', 'Backend Systems'],
    },
    {
      name: 'C',
      category: 'Core Computer Science',
      proficiency: 0,
      icon: <CIcon size={16} />,
      projectsUsed: ['System Programming', 'Embedded Systems', 'Performance Optimization'],
    },
    {
      name: 'C++',
      category: 'Core Computer Science',
      proficiency: 0,
      icon: <CppIcon size={16} />,
      projectsUsed: ['Game Development', 'High-Performance Computing', 'System Design'],
    },

    // Databases
    {
      name: 'MongoDB',
      category: 'Databases',
      proficiency: 0,
      icon: <MongoIcon size={16} />,
      projectsUsed: ['NoSQL Databases', 'Data Modeling', 'MERN Stack'],
    },
    {
      name: 'MySQL',
      category: 'Databases',
      proficiency: 0,
      icon: <MySQLIcon size={16} />,
      projectsUsed: ['Relational Databases', 'SQL Queries', 'Database Design'],
    },

    // Automation & Low-Code
    {
      name: 'n8n',
      category: 'Automation & Low-Code',
      proficiency: 0,
      icon: <N8nIcon size={16} />,
      projectsUsed: ['Workflow Automation', 'Data Integration', 'API Orchestration'],
    },
    {
      name: 'Airtable',
      category: 'Automation & Low-Code',
      proficiency: 0,
      icon: <AirtableIcon size={16} />,
      projectsUsed: ['Database Management', 'Project Tracking', 'Data Organization'],
    },
    {
      name: 'Wix',
      category: 'Automation & Low-Code',
      proficiency: 0,
      icon: <WixIcon size={16} />,
      projectsUsed: ['Website Development', 'E-commerce Solutions', 'Client Projects'],
    },

    // Machine Learning
    {
      name: 'TensorFlow',
      category: 'Machine Learning',
      proficiency: 0,
      icon: <TensorFlowIcon size={16} />,
      projectsUsed: ['Neural Networks', 'Deep Learning', 'AI Image Generator'],
    },
    {
      name: 'PyTorch',
      category: 'Machine Learning',
      proficiency: 0,
      icon: <PyTorchIcon size={16} />,
      projectsUsed: ['GANs', 'VAEs', 'Computer Vision'],
    },
    {
      name: 'Scikit-Learn',
      category: 'Machine Learning',
      proficiency: 0,
      icon: <ScikitIcon size={16} />,
      projectsUsed: ['Classification', 'Regression', 'Data Preprocessing'],
    },
    {
      name: 'GANs',
      category: 'Machine Learning',
      proficiency: 0,
      icon: <GANIcon size={16} />,
      projectsUsed: ['Image Generation', 'Style Transfer', 'Data Augmentation'],
    },
    {
      name: 'VAEs',
      category: 'Machine Learning',
      proficiency: 0,
      icon: <VAEIcon size={16} />,
      projectsUsed: ['Dimensionality Reduction', 'Image Generation', 'Feature Learning'],
    },
    {
      name: 'Naive Bayes',
      category: 'Machine Learning',
      proficiency: 0,
      icon: <NaiveBayesIcon size={16} />,
      projectsUsed: ['Text Classification', 'Spam Detection', 'Sentiment Analysis'],
    },

    // NLP
    {
      name: 'NLP Pipelines',
      category: 'Natural Language Processing',
      proficiency: 0,
      icon: <NLPIcon size={16} />,
      projectsUsed: ['Text Processing', 'Sentiment Analysis', 'Language Models'],
    },

    // Cloud Computing
    {
      name: 'AWS',
      category: 'Cloud Computing',
      proficiency: 0,
      icon: <AWSIcon size={16} />,
      projectsUsed: ['Cloud Deployment', 'AWS Services', 'Infrastructure Management'],
    },

    // Core Computer Science
    {
      name: 'Data Structures & Algorithms',
      category: 'Core Computer Science',
      proficiency: 0,
      icon: <ReactIcon size={16} />,
      projectsUsed: ['Problem Solving', 'Optimization', 'System Design'],
    },
    {
      name: 'Operating Systems',
      category: 'Core Computer Science',
      proficiency: 0,
      icon: <CIcon size={16} />,
      projectsUsed: ['System Programming', 'Process Management', 'Memory Management'],
    },
    {
      name: 'Networking',
      category: 'Core Computer Science',
      proficiency: 0,
      icon: <NetworkingIcon size={16} />,
      projectsUsed: ['Network Protocols', 'Socket Programming', 'Distributed Systems'],
    },
    {
      name: 'DBMS',
      category: 'Core Computer Science',
      proficiency: 0,
      icon: <DBMSIcon size={16} />,
      projectsUsed: ['Database Design', 'Query Optimization', 'Transaction Management'],
    },

    // DevOps & Deployment
    {
      name: 'Git',
      category: 'DevOps & Deployment',
      proficiency: 0,
      icon: <GitIcon size={16} />,
      projectsUsed: ['Version Control', 'Collaboration', 'Code Management'],
    },
    {
      name: 'GitHub',
      category: 'DevOps & Deployment',
      proficiency: 0,
      icon: <GithubIcon size={16} />,
      projectsUsed: ['Repository Management', 'CI/CD', 'Open Source'],
    },
    {
      name: 'Vercel',
      category: 'DevOps & Deployment',
      proficiency: 0,
      icon: <VercelIcon size={16} />,
      projectsUsed: ['Frontend Deployment', 'Serverless Functions', 'Static Sites'],
    },
    {
      name: 'Netlify',
      category: 'DevOps & Deployment',
      proficiency: 0,
      icon: <NetlifyIcon size={16} />,
      projectsUsed: ['Static Site Deployment', 'Continuous Deployment', 'Forms'],
    },
    {
      name: 'Render',
      category: 'DevOps & Deployment',
      proficiency: 0,
      icon: <RenderIcon size={16} />,
      projectsUsed: ['Application Deployment', 'Backend Services', 'Databases'],
    },
  ];

  return (
    <section id="skills" className="skills scroll-section" aria-label="Skills">
      <div className="container">
        <SectionHeader
          title="Technical Skills"
          subtitle="Automation & Low-Code, Full-Stack Development, DevOps & Deployment, Machine Learning, NLP, Cloud, and Core CS"
          align="center"
          gradient
        />

        <div
          ref={skillsRef}
          className={`skills__content ${skillsVisible ? 'skills__content--visible' : ''}`}
        >
          <div className="skills__grid">
            {skillsList.map((skill) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                animated={true}
                showProgress={false}
                showProjects={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
