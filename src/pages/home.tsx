import React from 'react';
import Summary from './summary';
import Skills from './skills';
import Experience from './experience';
import Projects from './projects';
import Publications from './publications';

const Home: React.FC = () => {
  return (
    <>
      <Summary />
      <Skills />
      <Experience />
      <Projects />
      <Publications />
    </>
  );
};

export default Home;

