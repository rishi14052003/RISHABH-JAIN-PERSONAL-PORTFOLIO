import React, { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Summary from './pages/summary';
import Skills from './pages/skills';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Publications from './pages/publications';
import Education from './pages/education';
import Contact from './pages/Contact';
import './design/style.css';

/**
 * Main App component with routing and theme provider
 * Features navigation between different sections and pages
 */
const App: React.FC = () => {
  
  return (
    <StrictMode>
      <BrowserRouter>
        <div className="app">
          <Navbar />
            
          <main>
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
            
          <Footer />
        </div>
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
