import React, { useMemo, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowUpRight, Building2, ExternalLink, Github, X } from 'lucide-react';
import { projects } from '../data/mock';

const spotlightOrder = [15, 8, 10, 14, 16, 13, 6, 9, 12, 11, 7];

const categoryLabel = (category) => {
  if (category === 'Web App') return 'WEB APPLICATION';
  if (category === 'Mobile App') return 'MOBILE APPLICATION';
  return 'UX/UI DESIGN';
};

const roleLabel = (category) => {
  if (category === 'Web App') return 'Frontend Development';
  if (category === 'Mobile App') return 'Frontend · Mobile Product';
  return 'UX/UI · Product Design';
};

const ProjectVisual = ({ project }) => {
  if (project.category === 'Mobile App') {
    return (
      <div className="project-mobile-stage">
        <div className="project-phone project-phone-back"><img src={project.image} alt="" loading="lazy" /></div>
        <div className="project-phone project-phone-front"><img src={project.image} alt={`Vista de ${project.name}`} loading="lazy" /></div>
      </div>
    );
  }

  if (project.category === 'UX/UI') {
    return (
      <div className="project-design-stage">
        <div className="design-board-toolbar"><span /><span /><span /><strong>FIGMA / UX/UI</strong></div>
        <img src={project.image} alt={`Vista de diseño de ${project.name}`} loading="lazy" />
        <div className="design-board-grid" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className="project-browser-stage">
      <div className="browser-chrome">
        <div><span /><span /><span /></div>
        <span className="browser-address">{project.name.toLowerCase().replace(/\s+/g, '-')}.web</span>
        <span />
      </div>
      <img src={project.image} alt={`Vista web de ${project.name}`} loading="lazy" />
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [demoModalProject, setDemoModalProject] = useState(null);

  const orderedProjects = useMemo(() => {
    const ranks = new Map(spotlightOrder.map((id, index) => [id, index]));
    return [...projects].sort((a, b) => (ranks.get(a.id) ?? 999) - (ranks.get(b.id) ?? 999));
  }, []);

  const categories = useMemo(() => ['All', 'Web App', 'Mobile App', 'UX/UI'], []);
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
      <section id="proyectos" className="projects-section">
        <div className="editorial-container">
          <div className="section-index section-index-dark" data-reveal>
            <span>03 — Selected work</span>
            <span>Web · Mobile · UX/UI</span>
          </div>

          <div className="projects-heading" data-reveal>
            <h2>Productos digitales con formatos e identidades diferentes.</h2>
            <p>
              La presentación cambia según el tipo de trabajo: browser para web, dispositivo para mobile y artboard para UX/UI.
            </p>
          </div>

          <div className="project-filters" data-reveal aria-label="Filtrar proyectos">
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

          <div className="project-stack">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className={`project-story project-story-${project.category.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                style={{ '--project-index': index }}
                data-reveal
                data-cursor={project.demoUrl ? 'VIEW PROJECT' : 'VIEW'}
              >
                <div className="project-story-media">
                  <ProjectVisual project={project} />
                </div>

                <div className="project-story-copy">
                  <div className="project-story-topline">
                    <span>{String(index + 1).padStart(2, '0')} / {String(filteredProjects.length).padStart(2, '0')}</span>
                    <span>{categoryLabel(project.category)}</span>
                  </div>

                  <h3>{project.name}</h3>
                  <p className="project-role">{roleLabel(project.category)}</p>
                  <p className="project-description">{project.description}</p>

                  <dl className="project-meta-list">
                    <div><dt>Category</dt><dd>{categoryLabel(project.category)}</dd></div>
                    <div><dt>Role</dt><dd>{roleLabel(project.category)}</dd></div>
                    <div><dt>Stack</dt><dd>{project.technologies.slice(0, 5).join(' · ')}</dd></div>
                  </dl>

                  <div className="project-actions">
                    {project.demoUrl ? (
                      <button type="button" onClick={() => openProjectDemo(project)} className="project-primary-action">
                        View project <ArrowUpRight />
                      </button>
                    ) : (
                      <span className="project-status">En desarrollo</span>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-secondary-action">
                        <Github /> Code
                      </a>
                    )}
                    {project.requiresDemoNotice && (
                      <span className="project-enterprise"><Building2 /> Empresarial</span>
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
