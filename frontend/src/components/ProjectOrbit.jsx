import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  LayoutTemplate,
  Monitor,
  Palette,
  Smartphone,
} from 'lucide-react';
import { projects } from '../data/mock';

const PROJECT_ORDER = [15, 8, 10, 14, 16, 12, 6, 9, 11, 7];

const ORBIT_NODES = [
  {
    label: 'Frontend',
    icon: Code2,
    className: 'top-[4%] left-[4%] sm:left-[8%] md:left-[12%]',
  },
  {
    label: 'UX/UI',
    icon: Palette,
    className: 'top-[5%] right-[4%] sm:right-[8%] md:right-[12%]',
  },
  {
    label: 'Mobile Apps',
    icon: Smartphone,
    className: 'top-[41%] left-0 sm:left-[3%] md:left-[7%]',
  },
  {
    label: 'Web Apps',
    icon: Monitor,
    className: 'top-[43%] right-0 sm:right-[3%] md:right-[7%]',
  },
  {
    label: 'Product Design',
    icon: LayoutTemplate,
    className: 'bottom-[3%] left-1/2 -translate-x-1/2',
  },
];

const ProjectOrbit = () => {
  const featuredProjects = useMemo(
    () => PROJECT_ORDER.map((id) => projects.find((project) => project.id === id)).filter(Boolean),
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const resumeTimer = useRef(null);

  const activeProject = featuredProjects[activeIndex];

  useEffect(() => {
    if (paused || featuredProjects.length <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % featuredProjects.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [paused, featuredProjects.length]);

  useEffect(() => () => {
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
  }, []);

  const pauseTemporarily = () => {
    setPaused(true);

    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);

    resumeTimer.current = window.setTimeout(() => {
      setPaused(false);
    }, 8000);
  };

  const changeProject = (direction) => {
    pauseTemporarily();
    setActiveIndex((current) => {
      const next = current + direction;
      return (next + featuredProjects.length) % featuredProjects.length;
    });
  };

  const goToProject = (index) => {
    pauseTemporarily();
    setActiveIndex(index);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const difference = touchStartX.current - endX;
    touchStartX.current = null;

    if (Math.abs(difference) < 36) return;
    changeProject(difference > 0 ? 1 : -1);
  };

  if (!activeProject) return null;

  const isMobileProject = activeProject.category === 'Mobile App';
  const isUxProject = activeProject.category === 'UX/UI';
  const visibleTechnologies = activeProject.technologies?.slice(0, 4) ?? [];

  return (
    <div className="relative mx-auto w-full max-w-[720px] select-none">
      <style>{`
        @keyframes projectOrbitFloat {
          0%, 100% { transform: translateY(0px) rotateX(4deg) rotateY(-7deg); }
          50% { transform: translateY(-10px) rotateX(2deg) rotateY(7deg); }
        }
        @keyframes projectOrbitPulse {
          0%, 100% { opacity: .28; transform: scale(.96); }
          50% { opacity: .55; transform: scale(1.04); }
        }
      `}</style>

      <div className="mb-3 text-center">
        <span className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-purple-300 sm:text-xs">
          Project Orbit
        </span>
        <p className="mt-2 text-sm text-gray-400 sm:text-base">
          Un vistazo a proyectos de frontend, mobile y UX/UI.
        </p>
      </div>

      <div
        className="relative h-[330px] sm:h-[390px] md:h-[430px] touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => setPaused(false)}
      >
        <div
          className="absolute left-1/2 top-1/2 h-[235px] w-[235px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-fuchsia-500/10 blur-2xl sm:h-[300px] sm:w-[300px]"
          style={{ animation: 'projectOrbitPulse 5.8s ease-in-out infinite' }}
        />

        <svg
          className="absolute inset-0 h-full w-full opacity-45"
          viewBox="0 0 700 430"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="orbitLine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.25" />
            </linearGradient>
          </defs>
          <ellipse cx="350" cy="214" rx="245" ry="145" fill="none" stroke="url(#orbitLine)" strokeWidth="1.2" strokeDasharray="7 10" />
          <ellipse cx="350" cy="214" rx="175" ry="185" fill="none" stroke="url(#orbitLine)" strokeWidth="1" strokeDasharray="4 12" />
          <path d="M120 55 C210 105 255 130 350 214" fill="none" stroke="url(#orbitLine)" strokeWidth="1" />
          <path d="M585 65 C490 115 450 145 350 214" fill="none" stroke="url(#orbitLine)" strokeWidth="1" />
          <path d="M70 220 C175 215 245 215 350 214" fill="none" stroke="url(#orbitLine)" strokeWidth="1" />
          <path d="M630 226 C525 220 450 218 350 214" fill="none" stroke="url(#orbitLine)" strokeWidth="1" />
          <path d="M350 395 C350 330 350 280 350 214" fill="none" stroke="url(#orbitLine)" strokeWidth="1" />
        </svg>

        {ORBIT_NODES.map(({ label, icon: Icon, className }) => (
          <div key={label} className={`absolute z-20 ${className}`}>
            <div className="flex items-center gap-1.5 rounded-full border border-gray-700/70 bg-gray-950/80 px-2.5 py-1.5 text-[10px] font-medium text-gray-300 shadow-lg shadow-black/30 backdrop-blur-md sm:px-3 sm:py-2 sm:text-xs">
              <Icon className="h-3.5 w-3.5 text-purple-300 sm:h-4 sm:w-4" />
              <span>{label}</span>
            </div>
          </div>
        ))}

        <div className="absolute inset-0 z-10 flex items-center justify-center px-12 sm:px-20">
          <div
            key={activeProject.id}
            className="relative"
            style={{
              perspective: '1100px',
              animation: 'projectOrbitFloat 5.5s ease-in-out infinite',
              transformStyle: 'preserve-3d',
            }}
          >
            {isMobileProject ? (
              <div className="relative h-[245px] w-[132px] rounded-[28px] border border-white/15 bg-gray-950 p-2 shadow-2xl shadow-purple-950/50 sm:h-[292px] sm:w-[158px] sm:rounded-[32px] sm:p-2.5 md:h-[320px] md:w-[174px]">
                <div className="absolute left-1/2 top-2 z-20 h-4 w-14 -translate-x-1/2 rounded-full bg-black sm:top-2.5 sm:h-5 sm:w-16" />
                <div className="h-full w-full overflow-hidden rounded-[21px] bg-gray-900 sm:rounded-[24px]">
                  <img
                    src={activeProject.image}
                    alt={`Vista previa de ${activeProject.name}`}
                    className="h-full w-full object-cover"
                    draggable="false"
                  />
                </div>
                <div className="absolute -right-1 top-20 h-12 w-1 rounded-full bg-purple-400/50" />
              </div>
            ) : isUxProject ? (
              <div className="relative w-[224px] rounded-[22px] border border-white/15 bg-gray-950 p-2.5 shadow-2xl shadow-purple-950/50 sm:w-[300px] sm:p-3 md:w-[340px]">
                <div className="mb-2 flex items-center justify-between px-1">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-gray-600" />
                    <span className="h-2 w-2 rounded-full bg-gray-600" />
                    <span className="h-2 w-2 rounded-full bg-gray-600" />
                  </div>
                  <span className="text-[8px] uppercase tracking-[0.2em] text-purple-300 sm:text-[9px]">Design frame</span>
                </div>
                <div className="aspect-[16/10] overflow-hidden rounded-[14px] bg-gray-900">
                  <img
                    src={activeProject.image}
                    alt={`Vista previa de ${activeProject.name}`}
                    className="h-full w-full object-cover"
                    draggable="false"
                  />
                </div>
              </div>
            ) : (
              <div className="relative w-[235px] rounded-[18px] border border-white/15 bg-gray-950 p-2.5 shadow-2xl shadow-blue-950/50 sm:w-[320px] sm:p-3 md:w-[365px]">
                <div className="mb-2 flex items-center gap-1.5 px-1">
                  <span className="h-2 w-2 rounded-full bg-gray-600" />
                  <span className="h-2 w-2 rounded-full bg-gray-600" />
                  <span className="h-2 w-2 rounded-full bg-gray-600" />
                  <div className="ml-2 h-4 flex-1 rounded-full bg-gray-800" />
                </div>
                <div className="aspect-[16/9] overflow-hidden rounded-[11px] bg-gray-900">
                  <img
                    src={activeProject.image}
                    alt={`Vista previa de ${activeProject.name}`}
                    className="h-full w-full object-cover"
                    draggable="false"
                  />
                </div>
                <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500/60 to-purple-500/60" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto -mt-1 max-w-xl rounded-2xl border border-gray-800/80 bg-gray-950/65 p-4 backdrop-blur-md sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 text-left">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-purple-200 sm:text-xs">
                {activeProject.category}
              </span>
              <span className="text-[10px] tabular-nums text-gray-500 sm:text-xs">
                {String(activeIndex + 1).padStart(2, '0')} / {String(featuredProjects.length).padStart(2, '0')}
              </span>
            </div>
            <h3 className="truncate text-base font-semibold text-white sm:text-lg">
              {activeProject.name}
            </h3>
          </div>

          <div className="flex flex-shrink-0 gap-2">
            <button
              type="button"
              onClick={() => changeProject(-1)}
              className="rounded-full border border-gray-700 bg-gray-900/90 p-2 text-gray-300 transition hover:border-purple-500/50 hover:text-white"
              aria-label="Proyecto anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => changeProject(1)}
              className="rounded-full border border-gray-700 bg-gray-900/90 p-2 text-gray-300 transition hover:border-purple-500/50 hover:text-white"
              aria-label="Proyecto siguiente"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {visibleTechnologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2 py-1 text-[10px] text-blue-200 sm:text-xs"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex max-w-[78%] gap-1.5 overflow-hidden">
            {featuredProjects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => goToProject(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-6 bg-gradient-to-r from-blue-400 to-purple-500'
                    : 'w-1.5 bg-gray-700 hover:bg-gray-500'
                }`}
                aria-label={`Mostrar ${project.name}`}
              />
            ))}
          </div>
          <span className="whitespace-nowrap text-[10px] text-gray-500 sm:text-xs">Desliza para explorar</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectOrbit;
