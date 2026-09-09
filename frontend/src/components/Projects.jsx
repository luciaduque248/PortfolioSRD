import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Building2, ExternalLink, Github, X } from 'lucide-react';
import { projects } from '../data/mock';

const ITEMS_PER_PAGE = 6;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [demoModalProject, setDemoModalProject] = useState(null);
  const titleRef = useRef(null);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((project) => project.category)))],
    []
  );

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  useEffect(() => {
    if (!demoModalProject) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') setDemoModalProject(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [demoModalProject]);

  const openProjectDemo = (project) => {
    if (!project.demoUrl) return;

    if (project.requiresDemoNotice) {
      setDemoModalProject(project);
      return;
    }

    window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
  };

  const continueToDemo = () => {
    if (!demoModalProject?.demoUrl) return;
    window.open(demoModalProject.demoUrl, '_blank', 'noopener,noreferrer');
    setDemoModalProject(null);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    titleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <section id="proyectos" className="bg-gray-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div ref={titleRef} className="mb-12 max-w-3xl scroll-mt-24">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 sm:text-sm">
              Proyectos
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.025em] text-white sm:text-4xl md:text-5xl">
              Trabajo de frontend, UX/UI y aplicaciones móviles.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
              Cada proyecto conserva su propia identidad visual. Aquí muestro qué construí, con qué herramientas y en qué estado está.
            </p>
          </div>

          <div className="mb-10 flex flex-wrap gap-2" aria-label="Filtrar proyectos">
            {categories.map((category) => {
              const isActive = activeFilter === category;

              return (
                <button
                  type="button"
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  aria-pressed={isActive}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors active:scale-[0.98] ${
                    isActive
                      ? 'bg-white text-gray-950 dark:bg-white dark:text-gray-950'
                      : 'bg-transparent text-gray-400 hover:bg-white/[0.05] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {paginatedProjects.map((project) => (
              <article
                key={project.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-gray-950/55 transition-colors hover:border-white/20"
              >
                <div className="relative overflow-hidden bg-gray-950">
                  <img
                    src={project.image}
                    alt={`Portada de ${project.name}`}
                    className="h-52 w-full object-cover sm:h-60"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-5 pb-4 pt-14">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold tracking-[-0.015em] text-white sm:text-2xl">
                      {project.name}
                    </h3>

                    {project.requiresDemoNotice && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-300">
                        <Building2 className="h-3.5 w-3.5" />
                        Empresarial
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-[15px]">
                    {project.description}
                  </p>

                  <p className="mt-5 text-xs leading-relaxed text-gray-500 sm:text-sm">
                    {project.technologies.join(' · ')}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
                    {project.demoUrl ? (
                      <button
                        type="button"
                        onClick={() => openProjectDemo(project)}
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-400 active:scale-[0.98]"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Ver demo
                      </button>
                    ) : (
                      <span className="rounded-xl bg-white/[0.05] px-4 py-2.5 text-sm font-medium text-gray-500">
                        En desarrollo
                      </span>
                    )}

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-white/20 hover:text-white active:scale-[0.98]"
                      >
                        <Github className="h-4 w-4" />
                        Código
                      </a>
                    ) : (
                      <span className="text-xs text-gray-600">Código no público</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Paginación de proyectos">
              <button
                type="button"
                onClick={() => goToPage(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="rounded-lg px-3 py-2 text-sm text-gray-400 transition-colors hover:bg-white/[0.05] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 active:scale-[0.98]"
              >
                Anterior
              </button>

              {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;
                const isActive = currentPage === page;

                return (
                  <button
                    type="button"
                    key={page}
                    onClick={() => goToPage(page)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`h-9 w-9 rounded-lg text-sm font-medium transition-colors active:scale-95 ${
                      isActive
                        ? 'bg-white text-gray-950'
                        : 'text-gray-500 hover:bg-white/[0.05] hover:text-white'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => goToPage(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="rounded-lg px-3 py-2 text-sm text-gray-400 transition-colors hover:bg-white/[0.05] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 active:scale-[0.98]"
              >
                Siguiente
              </button>
            </nav>
          )}
        </div>
      </section>

      {demoModalProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-notice-title"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setDemoModalProject(null);
          }}
        >
          <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-gray-950 p-6 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-purple-300">
                  <Building2 className="h-4 w-4" />
                  Proyecto empresarial
                </div>
                <h3 id="demo-notice-title" className="text-2xl font-semibold tracking-[-0.02em] text-white">
                  Antes de abrir {demoModalProject.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setDemoModalProject(null)}
                className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-white/[0.06] hover:text-white active:scale-95"
                aria-label="Cerrar aviso"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-gray-400 sm:text-base">
              Esta demo es una adaptación pública para portafolio de un proyecto empresarial. Puede diferir de la versión de producción y no contiene información privada del cliente.
            </p>

            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setDemoModalProject(null)}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-gray-400 transition-colors hover:bg-white/[0.05] hover:text-white active:scale-[0.98]"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={continueToDemo}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-400 active:scale-[0.98]"
              >
                <ExternalLink className="h-4 w-4" />
                Continuar a la demo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
