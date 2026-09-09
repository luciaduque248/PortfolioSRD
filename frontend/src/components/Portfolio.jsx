import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import ScrollReveal from './ScrollReveal';

const Portfolio = () => {
  return (
    <div className="portfolio-shell min-h-screen bg-[#f2f2ef] text-[#0d0d0d] dark:bg-[#080808] dark:text-white">
      <ScrollReveal />
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
