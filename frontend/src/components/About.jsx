import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { scrollToId } from '../utils/motion';
import saraAbout from '../sara_pc.png';

const profileMeta = [
  ['FOCUS', 'Web + Mobile'],
  ['ROLE', 'Frontend Developer'],
  ['DESIGN', 'UX/UI + Product'],
  ['BUILD', 'Software'],
];

const About = () => (
  <section id="sobre-mi" className="about-section">
    <div className="editorial-container">
      <div className="section-index section-index-light" data-reveal>
        <span>01 — About</span>
        <span>Frontend · UX/UI · Software</span>
      </div>

      <div className="about-grid">
        <div className="about-photo-wrap" data-reveal>
          <img src={saraAbout} alt="Sara Duque en retrato profesional para la sección About" loading="lazy" decoding="async" />
          <span className="about-photo-caption">Sara Duque — Colombia</span>
        </div>

        <div className="about-copy">
          <p className="eyebrow about-eyebrow" data-reveal>Frontend Developer</p>
          <h2 data-reveal>
            Diseño interfaces y las convierto en productos funcionales para <em>web</em> y <em>mobile</em>.
          </h2>
          <p className="about-lead" data-reveal>{personalInfo.bio}</p>
          <p className="about-body" data-reveal>{personalInfo.extendedBio}</p>

          <div className="about-meta-grid" data-reveal>
            {profileMeta.map(([label, value], index) => (
              <div key={label} className={`about-meta-item about-meta-${index + 1}`}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <button type="button" className="editorial-link-button about-cta" onClick={() => scrollToId('proyectos')} data-reveal>
            Explore selected work <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default About;
