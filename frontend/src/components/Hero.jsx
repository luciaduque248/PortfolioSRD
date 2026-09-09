import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { scrollToId } from '../utils/motion';
import saraHeroPhoto from '../images/portraits/Portrait_Sara_sinfondo.PNG';
import '../styles/hero-meta-refinements.css';

const introLabel = "Hello, I'm Sara";

const Hero = () => {
  const sectionRef = useRef(null);
  const frontendRef = useRef(null);
  const developerRef = useRef(null);
  const portraitRef = useRef(null);
  const progressRef = useRef(null);
  const [typedIntro, setTypedIntro] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      setTypedIntro(introLabel);
      setTypingComplete(true);
      return undefined;
    }

    let intervalId;
    const startId = window.setTimeout(() => {
      let index = 0;
      intervalId = window.setInterval(() => {
        index += 1;
        setTypedIntro(introLabel.slice(0, index));

        if (index >= introLabel.length) {
          window.clearInterval(intervalId);
          setTypedIntro(introLabel);
          setTypingComplete(true);
        }
      }, 72);
    }, 480);

    return () => {
      window.clearTimeout(startId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const frontend = frontendRef.current;
    const developer = developerRef.current;
    const portrait = portraitRef.current;
    const progressLine = progressRef.current;
    if (!section || !frontend || !developer || !portrait || !progressLine) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frameId = null;

    const playIntro = () => {
      if (reduceMotion.matches) return;

      frontend.animate(
        [
          { opacity: 0, clipPath: 'inset(100% 0 0 0)' },
          { opacity: 1, clipPath: 'inset(0 0 0 0)' },
        ],
        { duration: 620, easing: 'cubic-bezier(.23,1,.32,1)', fill: 'both' }
      );

      developer.animate(
        [
          { opacity: 0, clipPath: 'inset(100% 0 0 0)' },
          { opacity: 1, clipPath: 'inset(0 0 0 0)' },
        ],
        { duration: 620, delay: 90, easing: 'cubic-bezier(.23,1,.32,1)', fill: 'both' }
      );

      portrait.animate(
        [
          { opacity: 0 },
          { opacity: 1 },
        ],
        { duration: 520, delay: 190, easing: 'cubic-bezier(.23,1,.32,1)', fill: 'both' }
      );
    };

    const render = () => {
      frameId = null;

      const rect = section.getBoundingClientRect();
      const viewport = Math.max(window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / (viewport * 0.82)));

      progressLine.style.transform = `scaleX(${progress})`;

      if (reduceMotion.matches) {
        frontend.style.transform = 'translate3d(0, 0, 0)';
        developer.style.transform = 'translate3d(0, 0, 0)';
        portrait.style.transform = 'translate3d(-50%, 0, 0)';
        return;
      }

      const mobile = window.innerWidth < 768;
      const maxTravel = mobile
        ? Math.min(window.innerWidth * 0.16, 54)
        : Math.min(window.innerWidth * 0.19, 285);

      frontend.style.transform = `translate3d(${-maxTravel * progress}px, 0, 0)`;
      developer.style.transform = `translate3d(${maxTravel * progress}px, 0, 0)`;
      portrait.style.transform = `translate3d(-50%, ${mobile ? 0 : 6 * progress}px, 0)`;
    };

    const requestRender = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(render);
    };

    playIntro();
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
    <section
      ref={sectionRef}
      id="inicio"
      className="hero-stage"
      style={{ height: '100svh', minHeight: '100svh', overflow: 'clip' }}
    >
      <div
        className="hero-sticky"
        style={{ position: 'relative', top: 'auto', height: '100svh', minHeight: '100svh' }}
      >
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

        <div ref={portraitRef} className="hero-person" style={{ background: 'transparent' }}>
          <img
            src={saraHeroPhoto}
            alt="Sara Duque, Frontend Developer"
            className="hero-person-image"
            style={{ background: 'transparent' }}
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <aside className="hero-intro-panel hero-intro-panel-right" data-hero-detail>
          <p className="eyebrow hero-typewriter" aria-label={introLabel}>
            <span aria-hidden="true" className={typingComplete ? 'is-complete' : ''}>{typedIntro}</span>
          </p>
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
