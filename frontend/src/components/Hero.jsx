import React, { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { scrollToId } from '../utils/motion';
import saraHeroPhoto from '../images/portraits/Portrait_Sara_sinfondo.PNG';

const Hero = () => {
  const sectionRef = useRef(null);
  const frontendRef = useRef(null);
  const developerRef = useRef(null);
  const portraitRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const frontend = frontendRef.current;
    const developer = developerRef.current;
    const portrait = portraitRef.current;
    const progressLine = progressRef.current;
    if (!section || !frontend || !developer || !portrait || !progressLine) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frameId = null;
    let introTimer = null;

    const intro = () => {
      if (reduceMotion.matches) return;
      frontend.animate(
        [
          { transform: 'translate3d(-10vw, 110%, 0)', clipPath: 'inset(100% 0 0 0)', opacity: 0 },
          { transform: 'translate3d(0, 0, 0)', clipPath: 'inset(0 0 0 0)', opacity: 1 },
        ],
        { duration: 850, easing: 'cubic-bezier(.23,1,.32,1)', fill: 'both' }
      );
      developer.animate(
        [
          { transform: 'translate3d(10vw, 110%, 0)', clipPath: 'inset(100% 0 0 0)', opacity: 0 },
          { transform: 'translate3d(0, 0, 0)', clipPath: 'inset(0 0 0 0)', opacity: 1 },
        ],
        { duration: 850, delay: 110, easing: 'cubic-bezier(.23,1,.32,1)', fill: 'both' }
      );
      portrait.animate(
        [
          { transform: 'translate3d(-50%, 24px, 0)', opacity: 0 },
          { transform: 'translate3d(-50%, 0, 0)', opacity: 1 },
        ],
        { duration: 780, delay: 250, easing: 'cubic-bezier(.23,1,.32,1)', fill: 'both' }
      );

      introTimer = window.setTimeout(() => {
        frontend.getAnimations().forEach((animation) => animation.cancel());
        developer.getAnimations().forEach((animation) => animation.cancel());
        portrait.getAnimations().forEach((animation) => animation.cancel());
      }, 1250);
    };

    const render = () => {
      frameId = null;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      progressLine.style.transform = `scaleX(${progress})`;

      if (reduceMotion.matches) return;

      const mobile = window.innerWidth < 768;
      const maxTravel = mobile
        ? Math.min(window.innerWidth * 0.17, 62)
        : Math.min(window.innerWidth * 0.16, 250);

      frontend.style.transform = `translate3d(${-maxTravel * progress}px, 0, 0)`;
      developer.style.transform = `translate3d(${maxTravel * progress}px, 0, 0)`;
      portrait.style.transform = `translate3d(-50%, ${mobile ? 0 : 8 * progress}px, 0)`;
    };

    const requestRender = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(render);
    };

    intro();
    render();
    window.addEventListener('scroll', requestRender, { passive: true });
    window.addEventListener('resize', requestRender);

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      if (introTimer !== null) window.clearTimeout(introTimer);
      window.removeEventListener('scroll', requestRender);
      window.removeEventListener('resize', requestRender);
    };
  }, []);

  return (
    <section ref={sectionRef} id="inicio" className="hero-stage">
      <div className="hero-sticky">
        <div className="hero-background" aria-hidden="true">
          <div className="hero-orbit hero-orbit-left" />
          <div className="hero-orbit hero-orbit-right" />
        </div>

        <div className="hero-kicker">
          <span>Sara Duque</span>
          <span>Frontend Developer · Colombia</span>
        </div>

        <div className="hero-type" aria-label="Frontend Developer">
          <span ref={frontendRef} className="hero-type-word hero-type-frontend">Frontend</span>
          <span ref={developerRef} className="hero-type-word hero-type-developer">Developer</span>
        </div>

        <div ref={portraitRef} className="hero-person">
          <img
            src={saraHeroPhoto}
            alt="Sara Duque, Frontend Developer"
            className="hero-person-image"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <aside className="hero-intro-panel" data-hero-detail>
          <p className="eyebrow">Hello, I'm Sara</p>
          <p className="hero-intro-copy">
            Diseño y desarrollo productos digitales para <strong>web</strong> y <strong>mobile</strong>.
          </p>
          <div className="hero-area-list" aria-label="Áreas profesionales">
            <span>Web Applications</span>
            <span>Mobile Applications</span>
            <span>UX/UI Design</span>
            <span>Software Development</span>
          </div>
        </aside>

        <aside className="hero-meta-stack" aria-label="Perfil profesional" data-hero-detail>
          <div className="hero-meta-card hero-meta-light">
            <span>01 / Focus</span>
            <strong>Web + Mobile</strong>
          </div>
          <div className="hero-meta-card hero-meta-dark">
            <span>02 / Role</span>
            <strong>Frontend Developer</strong>
          </div>
          <div className="hero-meta-card hero-meta-violet">
            <span>03 / Design</span>
            <strong>UX/UI + Product</strong>
          </div>
        </aside>

        <div className="hero-mobile-summary" data-hero-detail>
          <p>Frontend developer building digital experiences across web & mobile.</p>
          <div className="hero-mobile-tags">
            <span>WEB</span><span>MOBILE</span><span>UX/UI</span><span>SOFTWARE</span>
          </div>
        </div>

        <div className="hero-actions" data-hero-detail>
          <button type="button" className="editorial-link-button" onClick={() => scrollToId('proyectos')}>
            View projects <ArrowUpRight className="h-4 w-4" />
          </button>
          <div className="hero-socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email"><Mail /></a>
          </div>
        </div>

        <button type="button" className="hero-scroll" onClick={() => scrollToId('manifesto')}>
          <span>Scroll to explore</span>
          <ArrowDown className="h-4 w-4" />
        </button>

        <div className="hero-progress-track" aria-hidden="true">
          <span ref={progressRef} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
