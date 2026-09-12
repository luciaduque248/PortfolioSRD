import React, { useMemo, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowRight, ArrowUpRight, Building2, ExternalLink, Github, X } from 'lucide-react';
import { projects } from '../data/mock';

// Orden editorial de los proyectos destacados del portafolio.
const spotlightOrder = [20, 19, 18, 17, 15, 8, 10, 14, 16, 13, 6, 9, 12, 11, 7];

const categoryLabel = (category) => {
  if (category === 'Web App') return 'WEB APPLICATION';
  if (category === 'Landing Page') return 'LANDING PAGE';
  if (category === 'Mobile App') return 'MOBILE APPLICATION';
  return 'UX/UI DESIGN';
};

const roleLabel = (category) => {
  if (category === 'Web App') return 'Frontend Development';
  if (category === 'Landing Page') return 'Frontend · Conversion Landing';
  if (category === 'Mobile App') return 'Frontend · Mobile Product';
  return 'UX/UI · Product Design';
};

const ProjectVisual = ({ project }) => (
  <div className="work-v2-full-canvas">
    {project.image && (
      <img
        src={project.image}
        alt={`${categoryLabel(project.category)} — ${project.name}`}
        loading="lazy"
        className="work-v2-full-art"
      />
    )}
  </div>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [demoModalProject, setDemoModalProject] = useState(null);

  const orderedProjects = useMemo(() => {
    const ranks = new Map(spotlightOrder.map((id, index) => [id, index]));
    return [...projects].sort((a, b) => (ranks.get(a.id) ?? 999) - (ranks.get(b.id) ?? 999));
  }, []);

  const categories = useMemo(() => ['All', 'Web App', 'Landing Page', 'Mobile App', 'UX/UI'], []);
  const filteredProjects = activeFilter === 'All'
    ? orderedProjects
    : orderedProjects.filter((project) => project.category === activeFilter);

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
      <section id="proyectos" className="projects-section work-v2-section">
        <div className="editorial-container">
          <div className="section-index section-index-dark" data-reveal>
            <span>03 — Selected work</span>
            <span>Web Apps · Landing Pages · Mobile · UX/UI</span>
          </div>

          <div className="work-v2-heading" data-reveal>
            <div>
              <p className="work-v2-kicker">Selected projects</p>
              <h2>
                Trabajo real, presentado según <em>su formato.</em>
              </h2>
            </div>
            <p>
              Cada proyecto se presenta como una pieza de producto: portada protagonista, jerarquía clara y suficiente contexto para entender diseño, implementación y alcance.
            </p>
          </div>

          <div className="work-v2-toolbar" data-reveal>
            <div className="project-filters work-v2-filters" aria-label="Filtrar proyectos">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveFilter(category)}
                  aria-pressed={activeFilter === category}
                  className={activeFilter === category ? 'is-active' : ''}
                >
                  {category === 'All' ? 'All work' : categoryLabel(category)}
                </button>
              ))}
            </div>
            <span className="work-v2-count">{String(filteredProjects.length).padStart(2, '0')} projects</span>
          </div>

          <div className="work-v2-mobile-hint" aria-hidden="true">
            <span>Desliza para explorar</span>
            <ArrowRight />
          </div>

          <div className="work-v2-grid" role="list">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className={`work-v2-card work-v2-card--${project.category.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                data-project-id={project.id}
                data-reveal
                data-cursor={project.category === 'Mobile App' ? undefined : project.demoUrl ? 'VIEW PROJECT' : project.inDevelopment ? 'IN PROGRESS' : 'COMPLETED'}
                role="listitem"
              >
                <div className="work-v2-media">
                  <ProjectVisual project={project} />
                </div>

                <div className="work-v2-body">
                  <div className="work-v2-topline">
                    <span>{String(index + 1).padStart(2, '0')} / {String(filteredProjects.length).padStart(2, '0')}</span>
                    <span>{categoryLabel(project.category)}</span>
                  </div>

                  <div className="work-v2-title-row">
                    <h3>{project.name}</h3>
                    {project.requiresDemoNotice && <Building2 aria-label="Proyecto empresarial" />}
                  </div>

                  <p className="work-v2-role">{roleLabel(project.category)}</p>
                  <p className="work-v2-description">{project.description}</p>
                  {project.note && (
                    <p className="work-v2-description">
                      <strong>Nota:</strong> {project.note}
                    </p>
                  )}

                  <div className="work-v2-stack-line">
                    <span>Stack</span>
                    <p>{project.technologies.slice(0, 5).join(' · ')}</p>
                  </div>

                  <div className="work-v2-actions">
                    {project.demoUrl ? (
                      <button type="button" onClick={() => openProjectDemo(project)} className="work-v2-primary-action">
                        View project <ArrowUpRight />
                      </button>
                    ) : project.inDevelopment ? (
                      <span className="work-v2-status">En desarrollo</span>
                    ) : (
                      <span className="work-v2-status">Finalizado</span>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="work-v2-code-link">
                        <Github /> Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Dialog.Root open={Boolean(demoModalProject)} onOpenChange={(open) => !open && setDemoModalProject(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="modal-overlay" />
          {demoModalProject && (
            <Dialog.Content className="project-modal">
              <div className="project-modal-head">
                <div>
                  <span>Proyecto empresarial</span>
                  <Dialog.Title>Antes de abrir {demoModalProject.name}</Dialog.Title>
                </div>
                <Dialog.Close asChild>
                  <button type="button" aria-label="Cerrar"><X /></button>
                </Dialog.Close>
              </div>
              <Dialog.Description>
                Esta demo es una adaptación pública para portafolio y no contiene información privada del cliente.
              </Dialog.Description>
              <div className="project-modal-actions">
                <Dialog.Close asChild><button type="button">Cancelar</button></Dialog.Close>
                <button type="button" onClick={continueToDemo} className="project-primary-action"><ExternalLink /> Continuar</button>
              </div>
            </Dialog.Content>
          )}
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default Projects;
