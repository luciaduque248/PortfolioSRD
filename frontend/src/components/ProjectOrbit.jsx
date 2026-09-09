import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { projects } from '../data/mock';

const PROJECT_ORDER = [15, 8, 10, 14, 16, 12, 13, 6, 9, 11, 7];

const ProjectOrbit = () => {
  const featuredProjects = useMemo(
    () => PROJECT_ORDER.map((id) => projects.find((project) => project.id === id)).filter(Boolean),
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    dragFree: false,
    containScroll: false,
    duration: 24,
  });

  const syncSelection = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return undefined;

    syncSelection();
    emblaApi.on('select', syncSelection);
    emblaApi.on('reInit', syncSelection);

    return () => {
      emblaApi.off('select', syncSelection);
      emblaApi.off('reInit', syncSelection);
    };
  }, [emblaApi, syncSelection]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (!featuredProjects.length) return null;

  const activeProject = featuredProjects[activeIndex] ?? featuredProjects[0];
  const visibleTechnologies = activeProject.technologies?.slice(0, 4) ?? [];

  return (
    <div className="mx-auto w-full max-w-[760px] select-none">
      <div className="mb-5 px-3 text-center sm:mb-7">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-400">
          Proyectos seleccionados
        </p>
        <p className="mx-auto max-w-md text-sm leading-relaxed text-gray-400 sm:text-base">
          Desliza para recorrer trabajo de frontend, UX/UI y aplicaciones móviles.
        </p>
      </div>

      <div ref={emblaRef} className="overflow-hidden touch-pan-y" aria-label="Carrusel de proyectos seleccionados">
        <div className="flex items-center">
          {featuredProjects.map((project, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={project.id}
                className="min-w-0 flex-[0_0_84%] px-2 sm:flex-[0_0_72%] md:flex-[0_0_58%]"
              >
                <article
                  className={`overflow-hidden rounded-[22px] border bg-gray-950 shadow-2xl transition-[opacity,transform,border-color] duration-300 ease-out ${
                    isActive
                      ? 'scale-100 border-white/15 opacity-100 shadow-black/35'
                      : 'scale-[0.92] border-white/5 opacity-45'
                  }`}
                  aria-hidden={!isActive}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                    <img
                      src={project.image}
                      alt={`Portada de ${project.name}`}
                      className="h-full w-full object-cover"
                      draggable="false"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent px-4 pb-4 pt-16">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-5 max-w-xl px-4 sm:mt-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 text-left" aria-live="polite">
            <h3 className="text-lg font-semibold leading-tight text-white sm:text-xl">
              {activeProject.name}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-gray-400 sm:text-sm">
              {visibleTechnologies.join(' · ')}
            </p>
          </div>

          <div className="flex flex-shrink-0 gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-900 text-gray-300 transition-colors hover:border-gray-500 hover:text-white active:scale-95"
              aria-label="Proyecto anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-900 text-gray-300 transition-colors hover:border-gray-500 hover:text-white active:scale-95"
              aria-label="Proyecto siguiente"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-800" />
          <span className="text-[10px] tabular-nums text-gray-500 sm:text-xs">
            {String(activeIndex + 1).padStart(2, '0')} / {String(featuredProjects.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectOrbit;
