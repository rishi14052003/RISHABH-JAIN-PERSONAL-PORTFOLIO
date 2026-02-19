import React from 'react';
import SectionHeader from '../components/SectionHeader';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="scroll-section" aria-label="Publications">
      <div className="container">
        <SectionHeader
          title="Publications"
          subtitle="Research and writing"
          align="center"
          gradient
        />
        <p className="text-secondary text-center">
          Publications content coming soon...
        </p>
      </div>
    </section>
  );
};

export default Publications;