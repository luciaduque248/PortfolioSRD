import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/mock';

const PROJECT_ORDER = [15, 8, 10, 14, 16, 12, 13, 6, 9, 11, 7];

const PARTICLES = [
  ['8%', '18%', 4, .34], ['17%', '67%', 3, .24], ['29%', '11%', 3, .26],
  ['39%', '81%', 4, .20], ['52%', '7%', 2, .34], ['61%', '72%', 3, .24],
  ['72%', '18%', 4, .22], ['84%', '64%', 3, .28], ['92%', '28%', 2, .35],
  ['47%', '42%', 2, .18], ['70%', '47%', 2, .18], ['24%', '43%', 2, .18],
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

  useEffect(() => {
    if (paused || featuredProjects.length <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % featuredProjects.length);
    }, 5200);

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
    }, 9000);
  };

  const changeProject = (direction) => {
    pauseTemporarily();
    setActiveIndex((current) => {
      const next = current + direction;
      return (next + featuredProjects.length) % featuredProjects.length;
    });
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const difference = touchStartX.current - endX;
    touchStartX.current = null;

    if (Math.abs(difference) < 38) return;
    changeProject(difference > 0 ? 1 : -1);
  };

  if (!featuredProjects.length) return null;

  const activeProject = featuredProjects[activeIndex];
  const prevProject = featuredProjects[(activeIndex - 1 + featuredProjects.length) % featuredProjects.length];
  const nextProject = featuredProjects[(activeIndex + 1) % featuredProjects.length];
  const visibleTechnologies = activeProject.technologies?.slice(0, 3) ?? [];

  const cards = [
    { project: prevProject, role: 'prev' },
    { project: activeProject, role: 'active' },
    { project: nextProject, role: 'next' },
  ];

  const cardStyle = {
    prev: 'translate(-60%, -54%) rotate(-8deg) scale(.82)',
    active: 'translate(-50%, -50%) rotate(-1.5deg) scale(1)',
    next: 'translate(-40%, -45%) rotate(8deg) scale(.82)',
  };

  return (
    <div
      className="relative mx-auto w-full max-w-[720px] select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <style>{`
        @keyframes stackFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes particleBlink {
          0%, 100% { opacity: .18; }
          50% { opacity: .55; }
        }
      `}</style>

      <div className="relative h-[330px] sm:h-[380px] md:h-[410px] touch-pan-y">
        <div className="absolute left-1/2 top-1/2 h-[230px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/15 to-fuchsia-500/10 blur-3xl sm:h-[280px] sm:w-[410px]" />

        <svg
          className="absolute inset-0 h-full w-full opacity-25"
          viewBox="0 0 700 410"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="stackLine" x1="0" x2="1">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity=".25" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity=".38" />
            </linearGradient>
          </defs>
          <path d="M95 290 C185 215 245 205 350 205 C455 205 515 215 605 290" fill="none" stroke="url(#stackLine)" strokeWidth="1.2" />
          <path d="M145 125 C245 90 455 90 555 125" fill="none" stroke="url(#stackLine)" strokeWidth="1" strokeDasharray="5 12" />
          <path d="M140 325 C255 360 445 360 560 325" fill="none" stroke="url(#stackLine)" strokeWidth="1" strokeDasharray="4 11" />
        </svg>

        {PARTICLES.map(([left, top, size, opacity], index) => (
          <span
            key={`${left}-${top}`}
            className="absolute rounded-full bg-purple-300"
            style={{
              left,
              top,
              width: size,
              height: size,
              opacity,
              animation: `particleBlink ${3.4 + (index % 4) * .7}s ease-in-out infinite`,
              animationDelay: `${index * .18}s`,
            }}
          />
        ))}

        <div
          className="absolute inset-0"
          style={{
            perspective: '1200px',
            transformStyle: 'preserve-3d',
            animation: 'stackFloat 6s ease-in-out infinite',
          }}
        >
          {cards.map(({ project, role }) => {
            const isActive = role === 'active';

            return (
              <div
                key={`${project.id}-${role}`}
                className={`absolute left-1/2 top-1/2 w-[76%] max-w-[390px] overflow-hidden rounded-2xl border bg-gray-950/90 shadow-2xl transition-all duration-700 ease-out sm:w-[72%] md:max-w-[430px] ${
                  isActive
                    ? 'z-30 border-purple-400/35 shadow-purple-950/45'
                    : 'z-10 border-gray-700/40 opacity-55 saturate-75'
                }`}
                style={{
                  transform: cardStyle[role],
                  transformOrigin: 'center',
                  backfaceVisibility: 'hidden',
                }}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Portada de ${project.name}`}
                    className="h-full w-full object-cover"
                    draggable="false"
                  />
                  {isActive && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent px-4 pb-3 pt-12">
                      <span className="inline-flex rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm sm:text-[10px]">
                        {project.category}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto -mt-2 max-w-xl px-2 sm:px-5">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0 text-left">
            <div className="mb-1 text-[10px] uppercase tracking-[0.22em] text-purple-300/80 sm:text-xs">
              Selected work
            </div>
            <h3 className="truncate text-lg font-semibold text-white sm:text-xl">
              {activeProject.name}
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {visibleTechnologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-gray-700/70 bg-gray-900/70 px-2.5 py-1 text-[10px] text-gray-300 sm:text-xs"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-shrink-0 gap-2">
            <button
              type="button"
              onClick={() => changeProject(-1)}
              className="rounded-full border border-gray-700/80 bg-gray-900/80 p-2 text-gray-300 transition hover:border-purple-500/50 hover:text-white"
              aria-label="Proyecto anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => changeProject(1)}
              className="rounded-full border border-gray-700/80 bg-gray-900/80 p-2 text-gray-300 transition hover:border-purple-500/50 hover:text-white"
              aria-label="Proyecto siguiente"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-transparent" />
          <span className="text-[10px] tabular-nums text-gray-500 sm:text-xs">
            {String(activeIndex + 1).padStart(2, '0')} / {String(featuredProjects.length).padStart(2, '0')}
          </span>
          <span className="text-[10px] text-gray-600 sm:text-xs">desliza</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectOrbit;