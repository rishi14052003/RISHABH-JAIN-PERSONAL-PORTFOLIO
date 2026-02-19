import React from 'react';
import SectionHeader from '../components/SectionHeader';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="scroll-section" aria-label="Experience">
      <div className="container">
        <SectionHeader
          title="Experience"
          subtitle="Roles and impact"
          align="center"
          gradient
        />
        <p className="text-secondary text-center">
          Experience content coming soon...
        </p>
      </div>
    </section>
  );
};

export default Experience;