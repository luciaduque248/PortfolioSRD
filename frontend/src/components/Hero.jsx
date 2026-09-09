import React, { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { scrollToId } from '../utils/motion';
import saraHeroPhoto from '../images/sara-hero-photo';

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

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frameId = null;
    let introTimer = null;

    const setIntroState = () => {
      if (reducedMotion.matches) {
        frontend.style.opacity = '1';
        developer.style.opacity = '1';
        portrait.style.opacity = '1';
        return;
      }

      frontend.style.transform = 'translate3d(-18vw, 0, 0)';
      developer.style.transform = 'translate3d(18vw, 0, 0)';
      frontend.style.opacity = '0';
      developer.style.opacity = '0';
      portrait.style.opacity = '0';
      portrait.style.transform = 'translate3d(-50%, 28px, 0) scale(.985)';

      requestAnimationFrame(() => {
        frontend.style.transition = 'transform 900ms var(--ease-out), opacity 520ms var(--ease-out)';
        developer.style.transition = 'transform 900ms var(--ease-out), opacity 520ms var(--ease-out)';
        portrait.style.transition = 'transform 820ms var(--ease-out) 120ms, opacity 520ms var(--ease-out) 120ms';

        frontend.style.transform = 'translate3d(0, 0, 0)';
        developer.style.transform = 'translate3d(0, 0, 0)';
        frontend.style.opacity = '1';
        developer.style.opacity = '1';
        portrait.style.opacity = '1';
        portrait.style.transform = 'translate3d(-50%, 0, 0) scale(1)';
      });

      introTimer = window.setTimeout(() => {
        frontend.style.transition = 'none';
        developer.style.transition = 'none';
        portrait.style.transition = 'none';
      }, 1080);
    };

    const render = () => {
      frameId = null;

      const rect = section.getBoundingClientRect();
      const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));

      progressLine.style.transform = `scaleX(${progress})`;

      if (reducedMotion.matches) return;

      const horizontalTravel = Math.min(window.innerWidth * 0.28, 360);
      frontend.style.transform = `translate3d(${-horizontalTravel * progress}px, 0, 0)`;
      developer.style.transform = `translate3d(${horizontalTravel * progress}px, 0, 0)`;
      portrait.style.transform = `translate3d(-50%, ${18 * progress}px, 0) scale(${1 - progress * 0.025})`;
    };

    const requestRender = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(render);
    };

    setIntroState();
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
    <section ref={sectionRef} id="inicio" className="hero-editorial relative h-[158svh] text-[#0a0a0d] dark:text-white">
      <div className="sticky top-0 h-[100svh] min-h-[620px] overflow-hidden">
        <div className="hero-color-field hero-color-field-blue" aria-hidden="true" />
        <div className="hero-color-field hero-color-field-violet" aria-hidden="true" />
        <div className="hero-arc" aria-hidden="true" />

        <div className="absolute inset-x-5 top-24 z-40 flex items-start justify-between gap-6 sm:inset-x-8 lg:inset-x-12">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] sm:text-xs">Sara Duque</p>
            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-black/45 dark:text-white/45 sm:text-[10px]">
              Portfolio · Colombia
            </p>
          </div>
          <p className="max-w-[150px] text-right text-[9px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-black/45 dark:text-white/45 sm:max-w-none sm:text-[10px]">
            Frontend · UX/UI · Mobile
          </p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-[33%] z-10 flex -translate-y-1/2 items-center justify-center gap-[clamp(.5rem,2.2vw,2.5rem)] px-2 sm:top-[35%] sm:px-6">
          <span
            ref={frontendRef}
            className="hero-word hero-word-frontend text-right"
          >
            Frontend
          </span>
          <span
            ref={developerRef}
            className="hero-word hero-word-developer text-left"
          >
            Developer
          </span>
        </div>

        <div
          ref={portraitRef}
          className="hero-portrait-shell pointer-events-none absolute bottom-0 left-1/2 z-20 h-[77svh] w-[min(92vw,700px)] origin-bottom overflow-hidden sm:h-[84vh] sm:w-[min(70vw,730px)] lg:h-[88vh] lg:w-[min(56vw,780px)]"
        >
          <div
            className="hero-portrait-photo h-full w-full"
            role="img"
            aria-label="Sara Duque, Frontend Developer"
            style={{ backgroundImage: `url(${saraHeroPhoto})` }}
          />
        </div>

        <div className="absolute inset-x-5 bottom-6 z-40 flex items-end justify-between gap-4 sm:inset-x-8 sm:bottom-8 lg:inset-x-12 lg:bottom-10">
          <div className="hidden max-w-sm md:block">
            <p className="text-sm font-black uppercase tracking-[0.15em]">Diseño → Código → Producto</p>
            <p className="mt-2 text-sm leading-relaxed text-black/55 dark:text-white/55">
              Interfaces, productos web y experiencias móviles construidas con una lógica visual clara.
            </p>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hero-icon-link" aria-label="GitHub">
              <Github className="h-[18px] w-[18px]" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hero-icon-link" aria-label="LinkedIn">
              <Linkedin className="h-[18px] w-[18px]" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hero-icon-link" aria-label="Correo">
              <Mail className="h-[18px] w-[18px]" />
            </a>
            <button type="button" onClick={() => scrollToId('proyectos')} className="editorial-cta ml-1">
              <span>Ver proyectos</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => scrollToId('sobre-mi')}
          className="absolute bottom-[5.8rem] left-1/2 z-40 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-black/45 transition-colors hover:text-black dark:text-white/45 dark:hover:text-white sm:flex"
          aria-label="Continuar a Sobre mí"
        >
          <span>Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </button>

        <div className="absolute inset-x-0 bottom-0 z-50 h-[3px] bg-black/10 dark:bg-white/10" aria-hidden="true">
          <div ref={progressRef} className="h-full origin-left bg-[#3157ff] will-change-transform" style={{ transform: 'scaleX(0)' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;