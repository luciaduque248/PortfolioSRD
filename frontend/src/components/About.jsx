import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { scrollToId } from '../utils/motion';
import saraAbout from '../images/portraits/Portrait_Sara_fondoBlanco.PNG';

const profileMeta = [
  ['FOCUS', 'Web + Mobile'],
  ['ROLE', 'Frontend Developer'],
  ['DESIGN', 'UX/UI + Product'],
  ['BUILD', 'Software'],
];

const About = () => {
  const sectionRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const photo = photoRef.current;
    if (!section || !photo) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frameId = null;

    const render = () => {
      frameId = null;

      if (reduceMotion.matches) {
        photo.style.transform = 'translate3d(0, 0, 0)';
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const travel = Math.max(rect.height + viewport * 0.25, 1);
      const progress = Math.min(1, Math.max(0, (viewport * 0.75 - rect.top) / travel));
      const maxTravel = window.innerWidth < 768 ? 34 : window.innerWidth < 1100 ? 68 : 110;

      photo.style.transform = `translate3d(0, ${maxTravel * progress}px, 0)`;
    };

    const requestRender = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(render);
    };

    render();
    window.addEventListener('scroll', requestRender, { passive: true });
    window.addEventListener('resize', requestRender);

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', requestRender);
      window.removeEventListener('resize', requestRender);
    };
  }, []);

  return (
    <section ref={sectionRef} id="sobre-mi" className="about-section">
      <div className="editorial-container">
        <div className="section-index section-index-light" data-reveal>
          <span>01 — About</span>
          <span>Frontend · UX/UI · Software</span>
        </div>

        <div className="about-grid">
          <div className="about-photo-column">
            <div ref={photoRef} className="about-photo-wrap" data-reveal>
              <img src={saraAbout} alt="Sara Duque en retrato profesional para la sección About" loading="lazy" decoding="async" />
              <span className="about-photo-caption">Sara Duque — Colombia</span>
            </div>
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
};

export default About;
