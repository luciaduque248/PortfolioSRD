import React, { lazy, Suspense, useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';
import ProjectOrbit from './ProjectOrbit';
import { scrollToId } from '../utils/motion';

const LazySplineScene = lazy(() => import('./SplineScene'));
const DESKTOP_QUERY = '(min-width: 1280px)';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia(DESKTOP_QUERY).matches
  ));

  useEffect(() => {
    setMounted(true);

    const mediaQuery = window.matchMedia(DESKTOP_QUERY);
    const syncDesktop = (event) => setIsDesktop(event.matches);

    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener?.('change', syncDesktop);

    return () => mediaQuery.removeEventListener?.('change', syncDesktop);
  }, []);

  return (
    <section id="inicio" className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-blue-500/7 blur-3xl" />
        <div className="absolute bottom-[12%] right-[8%] h-64 w-64 rounded-full bg-purple-500/7 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-screen items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-14">
          <div
            className={`mt-20 space-y-7 text-center transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] sm:mt-24 lg:mt-0 lg:text-left ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400 sm:text-sm">
                Frontend · UX/UI · Mobile
              </p>

              <h1 className="text-4xl font-bold leading-[1.03] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-white">Hola, soy</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>

              <h2 className="text-lg font-medium text-gray-300 sm:text-xl md:text-2xl">
                {personalInfo.title}
              </h2>

              <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg lg:mx-0">
                {personalInfo.slogan}
              </p>
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <button
                onClick={() => scrollToId('proyectos')}
                className="rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-blue-400 active:scale-[0.98] sm:px-8 sm:text-base"
              >
                Ver proyectos
              </button>

              <button
                onClick={() => scrollToId('contacto')}
                className="rounded-xl border border-gray-700 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-[background-color,border-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-gray-500 hover:bg-white/[0.04] active:scale-[0.98] sm:px-8 sm:text-base"
              >
                Contactar
              </button>
            </div>

            <div className="flex justify-center gap-2 lg:justify-start">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition-[border-color,color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-gray-600 hover:text-white active:scale-95"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition-[border-color,color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-gray-600 hover:text-white active:scale-95"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-800 text-gray-400 transition-[border-color,color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-gray-600 hover:text-white active:scale-95"
                aria-label="Correo"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div
            className={`relative transition-opacity duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
              mounted ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {isDesktop ? (
              <div className="relative mx-auto aspect-square w-full max-w-[650px]">
                <Suspense
                  fallback={(
                    <div className="flex h-full w-full items-center justify-center text-sm text-gray-500">
                      Cargando experiencia 3D…
                    </div>
                  )}
                >
                  <LazySplineScene />
                </Suspense>
                <div className="pointer-events-none absolute inset-x-0 bottom-4 text-center">
                  <span className="text-xs font-medium tracking-[0.16em] text-gray-500">
                    DISEÑO ↔ CÓDIGO ↔ PRODUCTO
                  </span>
                </div>
              </div>
            ) : (
              <div className="pb-8 pt-2">
                <ProjectOrbit />
              </div>
            )}
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-gray-600 sm:bottom-8">
          <ChevronDown className="h-6 w-6 sm:h-7 sm:w-7" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
