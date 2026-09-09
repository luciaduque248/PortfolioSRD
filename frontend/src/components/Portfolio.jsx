import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const Portfolio = () => {
  return (
    <div className="portfolio-shell min-h-screen bg-slate-50 text-slate-900 dark:bg-black dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Portfolio;
