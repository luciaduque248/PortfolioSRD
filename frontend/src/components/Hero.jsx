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

  useEffect(() => {
    const section = sectionRef.current;
    const frontend = frontendRef.current;
    const developer = developerRef.current;
    const portrait = portraitRef.current;
    if (!section || !frontend || !developer || !portrait) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frameId = null;
    let introTimer = null;

    if (!reducedMotion.matches) {
      frontend.style.transform = 'translate3d(calc(-50% - 12vw), 0, 0)';
      developer.style.transform = 'translate3d(calc(-50% + 12vw), 0, 0)';
      frontend.style.opacity = '0';
      developer.style.opacity = '0';
      portrait.style.opacity = '0';
      portrait.style.transform = 'translate3d(-50%, 28px, 0) scale(.985)';

      requestAnimationFrame(() => {
        frontend.style.transition = 'transform 900ms var(--ease-out), opacity 500ms var(--ease-out)';
        developer.style.transition = 'transform 900ms var(--ease-out), opacity 500ms var(--ease-out)';
        portrait.style.transition = 'transform 800ms var(--ease-out) 120ms, opacity 500ms var(--ease-out) 120ms';
        frontend.style.transform = 'translate3d(-50%, 0, 0)';
        developer.style.transform = 'translate3d(-50%, 0, 0)';
        frontend.style.opacity = '1';
        developer.style.opacity = '1';
        portrait.style.opacity = '1';
        portrait.style.transform = 'translate3d(-50%, 0, 0) scale(1)';
      });

      introTimer = window.setTimeout(() => {
        frontend.style.transition = 'none';
        developer.style.transition = 'none';
        portrait.style.transition = 'none';
      }, 1050);
    } else {
      frontend.style.opacity = '1';
      developer.style.opacity = '1';
      portrait.style.opacity = '1';
    }

    const render = () => {
      frameId = null;
      if (reducedMotion.matches) return;

      const rect = section.getBoundingClientRect();
      const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      const horizontalTravel = Math.min(window.innerWidth * 0.22, 300);

      frontend.style.transform = `translate3d(calc(-50% - ${horizontalTravel * progress}px), ${-8 * progress}px, 0)`;
      developer.style.transform = `translate3d(calc(-50% + ${horizontalTravel * progress}px), ${8 * progress}px, 0)`;
      portrait.style.transform = `translate3d(-50%, ${18 * progress}px, 0) scale(${1 - progress * 0.025})`;
    };

    const requestRender = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(render);
    };

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
    <section ref={sectionRef} id="inicio" className="relative h-[145svh] bg-[#f4f3ef] text-[#0b0b0b]">
      <div className="sticky top-0 h-[100svh] min-h-[620px] overflow-hidden bg-[#f4f3ef]">
        <div className="absolute inset-x-5 top-24 z-30 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] sm:inset-x-8 sm:text-xs lg:inset-x-12">
          <span>Sara Duque</span>
          <span className="text-right text-black/50">Frontend · UX/UI · Mobile</span>
        </div>

        <div className="pointer-events-none absolute inset-0 z-0 select-none">
          <span
            ref={frontendRef}
            className="absolute left-1/2 top-[29%] whitespace-nowrap text-[clamp(4.2rem,15vw,13.5rem)] font-black uppercase leading-none tracking-[-0.085em] text-black will-change-transform"
          >
            Frontend
          </span>
          <span
            ref={developerRef}
            className="absolute left-1/2 top-[45%] whitespace-nowrap text-[clamp(4.2rem,15vw,13.5rem)] font-black uppercase leading-none tracking-[-0.085em] text-black will-change-transform"
          >
            Developer
          </span>
        </div>

        <div
          ref={portraitRef}
          className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-[78svh] w-[min(94vw,690px)] origin-bottom will-change-transform sm:h-[84vh] sm:w-[min(72vw,720px)] lg:h-[87vh] lg:w-[min(58vw,760px)]"
        >
          <img
            src={saraHeroPhoto}
            alt="Sara Duque, Frontend Developer"
            className="h-full w-full object-contain object-bottom mix-blend-multiply"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <div className="absolute inset-x-5 bottom-6 z-30 flex items-end justify-between gap-4 sm:inset-x-8 sm:bottom-8 lg:inset-x-12 lg:bottom-10">
          <div className="hidden max-w-xs md:block">
            <p className="text-sm font-semibold uppercase tracking-[0.16em]">Diseño → Código → Producto</p>
            <p className="mt-2 text-sm leading-relaxed text-black/55">
              Interfaces, experiencias web y productos móviles construidos con intención.
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
          className="absolute bottom-[5.8rem] left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45 transition-colors hover:text-black sm:flex"
          aria-label="Continuar a Sobre mí"
        >
          <span>Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
