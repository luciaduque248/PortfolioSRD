import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Manifesto from './Manifesto';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import ScrollReveal from './ScrollReveal';
import Preloader from './Preloader';
import CustomCursor from './CustomCursor';

const Portfolio = () => (
  <div className="portfolio-shell">
    <Preloader />
    <CustomCursor />
    <ScrollReveal />
    <Navbar />
    <main>
      <Hero />
      <Manifesto />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Contact />
    </main>
  </div>
);

export default Portfolio;
