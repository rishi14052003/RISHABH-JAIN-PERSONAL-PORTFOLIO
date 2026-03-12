import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToHash from './components/ScrollToHash';
import Home from './pages/home';
import Skills from './pages/skills';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Publications from './pages/publications';
import Certifications from './pages/certifications';
import Contact from './pages/Contact';
import './design/style.css';

/**
 * Main App component with routing and theme provider
 * Features navigation between different sections and pages
 */
const App: React.FC = () => {
  
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="app">
        <Navbar />
          
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
          
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
