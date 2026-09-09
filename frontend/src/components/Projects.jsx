import React, { useMemo, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowUpRight, Building2, ExternalLink, Github, X } from 'lucide-react';
import { projects } from '../data/mock';

const accents = ['#3157ff', '#7c3aed', '#d946ef', '#6ea8ff'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [demoModalProject, setDemoModalProject] = useState(null);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((project) => project.category)))],
    []
  );

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

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

  return (
    <>
      <section id="proyectos" className="bg-[#0c0913] py-24 text-white sm:py-32">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div data-reveal className="reveal-up grid gap-8 border-t border-white/20 pt-5 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8bb6ff]">02 — Selected work</p>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                {categories.map((category) => {
                  const active = activeFilter === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveFilter(category)}
                      className={`text-xs font-semibold uppercase tracking-[.14em] transition-colors ${active ? 'text-[#c98bff]' : 'text-white/35 hover:text-white/75'}`}
                      aria-pressed={active}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            <h2 className="max-w-5xl text-[clamp(3rem,7.7vw,8.7rem)] font-black uppercase leading-[.86] tracking-[-.07em]">
              Proyectos con <span className="text-[#8f63ff]">identidad</span> propia.
            </h2>
          </div>

          <div className="mt-20 space-y-8 sm:mt-28 sm:space-y-12">
            {filteredProjects.map((project, index) => {
              const accent = accents[index % accents.length];

              return (
                <article
                  key={project.id}
                  data-reveal
                  className="portfolio-panel-editorial reveal-up overflow-hidden rounded-[28px] border border-white/15 border-t-[7px] bg-[#13101a] shadow-[0_30px_90px_rgba(0,0,0,.38)]"
                  style={{ '--panel-top': `${92 + Math.min(index, 5) * 5}px`, borderTopColor: accent }}
                >
                  <div className={`grid min-h-[620px] ${index % 2 === 0 ? 'lg:grid-cols-[1.25fr_.75fr]' : 'lg:grid-cols-[.75fr_1.25fr]'}`}>
                    <div className={`relative min-h-[300px] overflow-hidden bg-[#1a1a1a] sm:min-h-[420px] ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <img
                        src={project.image}
                        alt={`Portada de ${project.name}`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                      <div
                        className="absolute left-5 top-5 rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[.16em] text-white shadow-lg sm:left-7 sm:top-7"
                        style={{ backgroundColor: accent }}
                      >
                        {project.category}
                      </div>
                    </div>

                    <div className={`flex flex-col justify-between p-6 sm:p-9 lg:p-10 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div>
                        <div className="flex items-start justify-between gap-5">
                          <span className="text-xs font-black uppercase tracking-[.16em]" style={{ color: accent }}>
                            {String(index + 1).padStart(2, '0')} / {String(filteredProjects.length).padStart(2, '0')}
                          </span>
                          {project.requiresDemoNotice && (
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[.12em] text-white/45">
                              <Building2 className="h-3.5 w-3.5" /> Empresarial
                            </span>
                          )}
                        </div>

                        <h3 className="mt-10 text-[clamp(2.2rem,4.4vw,5.3rem)] font-black uppercase leading-[.9] tracking-[-.055em]">
                          {project.name}
                        </h3>
                        <p className="mt-7 text-sm leading-relaxed text-white/58 sm:text-base">
                          {project.description}
                        </p>
                        <p className="mt-6 border-t border-white/15 pt-5 text-xs font-semibold uppercase leading-relaxed tracking-[.11em] text-white/38">
                          {project.technologies.join(' · ')}
                        </p>
                      </div>

                      <div className="mt-10 flex flex-wrap items-center gap-3">
                        {project.demoUrl ? (
                          <button type="button" onClick={() => openProjectDemo(project)} className="editorial-cta-inverse">
                            Ver proyecto <ArrowUpRight className="h-4 w-4" />
                          </button>
                        ) : (
                          <span className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-5 text-xs font-semibold uppercase tracking-[.12em] text-white/42">
                            En desarrollo
                          </span>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 text-xs font-semibold uppercase tracking-[.12em] text-white/65 transition-colors hover:border-white/35 hover:text-white"
                          >
                            <Github className="h-4 w-4" /> Código
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Dialog.Root open={Boolean(demoModalProject)} onOpenChange={(open) => !open && setDemoModalProject(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm" />
          {demoModalProject && (
            <Dialog.Content className="fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-[#8f63ff]/35 bg-[#13101a] p-6 text-white shadow-2xl outline-none sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[.16em] text-[#9ec4ff]">Proyecto empresarial</p>
                  <Dialog.Title className="mt-3 text-3xl font-black uppercase leading-none tracking-[-.04em]">
                    Antes de abrir {demoModalProject.name}
                  </Dialog.Title>
                </div>
                <Dialog.Close asChild>
                  <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/60 hover:text-white" aria-label="Cerrar">
                    <X className="h-5 w-5" />
                  </button>
                </Dialog.Close>
              </div>
              <Dialog.Description className="mt-6 text-sm leading-relaxed text-white/58">
                Esta demo es una adaptación pública para portafolio y no contiene información privada del cliente.
              </Dialog.Description>
              <div className="mt-8 flex flex-wrap justify-end gap-3">
                <Dialog.Close asChild>
                  <button type="button" className="min-h-11 rounded-full px-5 text-xs font-semibold uppercase tracking-[.12em] text-white/50 hover:text-white">Cancelar</button>
                </Dialog.Close>
                <button type="button" onClick={continueToDemo} className="editorial-cta-inverse">
                  <ExternalLink className="h-4 w-4" /> Continuar
                </button>
              </div>
            </Dialog.Content>
          )}
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default Projects;