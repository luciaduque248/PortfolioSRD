import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { scrollToId } from '../utils/motion';
import saraHeroPrimary from '../images/sara-hero-primary.svg';
import saraHeroSecondary from '../images/sara-hero-secondary.svg';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const portraitRef = useRef(null);
  const storyRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    const section = sectionRef.current;
    const title = titleRef.current;
    const portrait = portraitRef.current;
    const story = storyRef.current;

    if (!section || !title || !portrait || !story) return undefined;

    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
    let frameId = null;

    const renderScrollState = () => {
      frameId = null;

      if (reducedMotion.matches) {
        title.style.transform = 'translate3d(-50%, 0, 0) scale(1)';
        portrait.style.transform = 'translate3d(-50%, 0, 0) scale(1)';
        story.style.opacity = '1';
        story.style.transform = 'translate3d(0, 0, 0)';
        return;
      }

      const rect = section.getBoundingClientRect();
      const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      const titleScale = 1 - progress * 0.1;
      const portraitScale = 1 - progress * 0.025;

      title.style.transform = `translate3d(-50%, ${progress * -5.5}vh, 0) scale(${titleScale})`;
      portrait.style.transform = `translate3d(-50%, ${progress * 2.5}vh, 0) scale(${portraitScale})`;

      const storyProgress = Math.min(1, Math.max(0, (progress - 0.28) / 0.42));
      story.style.opacity = String(0.35 + storyProgress * 0.65);
      story.style.transform = `translate3d(0, ${(1 - storyProgress) * 12}px, 0)`;
    };

    const requestRender = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(renderScrollState);
    };

    renderScrollState();
    window.addEventListener('scroll', requestRender, { passive: true });
    window.addEventListener('resize', requestRender);
    reducedMotion.addEventListener?.('change', requestRender);

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', requestRender);
      window.removeEventListener('resize', requestRender);
      reducedMotion.removeEventListener?.('change', requestRender);
    };
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative h-[132svh] overflow-visible bg-[#f2f2ef] text-slate-950 dark:bg-[#050507] dark:text-white sm:h-[145vh]"
    >
      <div className="sticky top-0 isolate h-[100svh] min-h-[620px] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-1/2 top-[46%] h-[52vw] max-h-[620px] min-h-[320px] w-[52vw] max-w-[620px] min-w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/75 blur-3xl dark:bg-white/[0.045]" />
        </div>

        <div
          className={`absolute left-5 top-24 z-30 transition-[opacity,transform] duration-500 ease-portfolio-out sm:left-8 lg:left-12 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-gray-500 sm:text-xs">
            Sara Duque · Portfolio
          </p>
        </div>

        <div
          className={`absolute right-5 top-24 z-30 text-right transition-[opacity,transform] duration-500 ease-portfolio-out sm:right-8 lg:right-12 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
          style={{ transitionDelay: mounted ? '80ms' : '0ms' }}
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-gray-500 sm:text-xs">
            Frontend · UX/UI · Mobile
          </p>
        </div>

        <h1
          ref={titleRef}
          className={`pointer-events-none absolute left-1/2 top-[27%] z-10 w-[112%] origin-center text-center font-black uppercase leading-[0.78] tracking-[-0.075em] text-slate-950 will-change-transform dark:text-white sm:top-[25%] ${
            mounted ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500 ease-portfolio-out`}
          style={{ fontSize: 'clamp(4.15rem, 13.7vw, 12.5rem)' }}
        >
          <span className="block">Frontend</span>
          <span className="block">Developer</span>
        </h1>

        <div
          ref={portraitRef}
          className={`pointer-events-none absolute bottom-0 left-1/2 z-20 h-[76svh] w-[min(94vw,680px)] origin-bottom will-change-transform sm:h-[82vh] sm:w-[min(72vw,720px)] lg:h-[86vh] lg:w-[min(58vw,760px)] ${
            mounted ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500 ease-portfolio-out`}
          style={{ transitionDelay: mounted ? '120ms' : '0ms' }}
        >
          <picture>
            <source media="(max-width: 767px)" srcSet={saraHeroSecondary} />
            <img
              src={saraHeroPrimary}
              alt="Sara Duque, Frontend Developer"
              className="h-full w-full object-contain object-bottom drop-shadow-[0_28px_42px_rgba(15,23,42,0.12)] dark:drop-shadow-[0_28px_42px_rgba(0,0,0,0.42)]"
              style={{
                clipPath:
                  'polygon(31% 3%, 43% 1%, 57% 2%, 68% 6%, 74% 12%, 78% 20%, 81% 27%, 86% 33%, 91% 40%, 95% 50%, 98% 63%, 99% 76%, 97% 88%, 92% 96%, 88% 100%, 8% 100%, 5% 92%, 3% 80%, 4% 66%, 5% 52%, 8% 42%, 14% 35%, 20% 30%, 24% 21%, 26% 12%)',
              }}
            />
          </picture>
        </div>

        <div
          ref={storyRef}
          className="absolute inset-x-5 bottom-6 z-30 flex items-end justify-between gap-4 sm:inset-x-8 sm:bottom-8 lg:inset-x-12 lg:bottom-10"
        >
          <div className="hidden max-w-sm md:block">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 dark:text-white">
              Diseño → Código → Producto
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-400">
              Diseño interfaces, construyo experiencias web y desarrollo productos móviles con una lógica visual consistente.
            </p>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-slate-700 backdrop-blur-md transition-[background-color,border-color,color,transform] duration-150 ease-portfolio-out hover:border-slate-400 hover:bg-white active:scale-95 dark:border-white/15 dark:bg-black/25 dark:text-gray-200 dark:hover:bg-white/10"
              aria-label="GitHub"
            >
              <Github className="h-[18px] w-[18px]" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-slate-700 backdrop-blur-md transition-[background-color,border-color,color,transform] duration-150 ease-portfolio-out hover:border-slate-400 hover:bg-white active:scale-95 dark:border-white/15 dark:bg-black/25 dark:text-gray-200 dark:hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-[18px] w-[18px]" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-slate-700 backdrop-blur-md transition-[background-color,border-color,color,transform] duration-150 ease-portfolio-out hover:border-slate-400 hover:bg-white active:scale-95 dark:border-white/15 dark:bg-black/25 dark:text-gray-200 dark:hover:bg-white/10"
              aria-label="Correo"
            >
              <Mail className="h-[18px] w-[18px]" />
            </a>
            <button
              type="button"
              onClick={() => scrollToId('proyectos')}
              className="ml-1 inline-flex h-11 items-center gap-2 rounded-full bg-slate-950 px-4 text-sm font-semibold text-white transition-[background-color,transform] duration-150 ease-portfolio-out hover:bg-slate-800 active:scale-[0.98] dark:bg-white dark:text-slate-950 dark:hover:bg-gray-200 sm:px-5"
            >
              <span>Ver proyectos</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => scrollToId('sobre-mi')}
          className="absolute bottom-[5.6rem] left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 transition-colors hover:text-slate-900 dark:text-gray-500 dark:hover:text-white sm:flex"
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
