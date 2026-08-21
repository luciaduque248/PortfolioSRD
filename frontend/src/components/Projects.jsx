import React, { useRef, useState, useMemo } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/mock';

/* ====== PALETA BASE ====== */
const COLOR_PALETTE = [
  'bg-blue-500/80',
  'bg-purple-500/80',
  'bg-green-500/80',
  'bg-pink-500/80',
  'bg-yellow-500/80',
  'bg-red-500/80',
  'bg-indigo-500/80',
  'bg-cyan-500/80',
  'bg-emerald-500/80',
  'bg-orange-500/80',
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const titleRef = useRef(null);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  /* ====== ASIGNACIÓN ESTABLE DE COLORES POR CATEGORÍA ====== */
  const categoryColors = useMemo(() => {
    const map = {};
    let colorIndex = 0;

    projects.forEach((project) => {
      const category = project.category;
      if (!map[category]) {
        map[category] = COLOR_PALETTE[colorIndex % COLOR_PALETTE.length];
        colorIndex++;
      }
    });

    return map;
  }, []);

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter(project => project.category === activeFilter);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page) => {
    setCurrentPage(page);
    titleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="proyectos" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Proyectos
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Una selección de proyectos que reflejan mi pasión por crear experiencias digitales excepcionales
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveFilter(category);
                goToPage(1);
              }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeFilter === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white scale-105'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {paginatedProjects.map((project, index) => {
            const categoryColor = categoryColors[project.category];

            return (
              <div
                key={project.id}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 text-white text-xs font-medium rounded-full backdrop-blur-sm ${categoryColor}`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Links */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-transform hover:scale-110"
                    >
                      <ExternalLink className="h-5 w-5 text-white" />
                    </a>

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-transform hover:scale-110"
                      >
                        <Github className="h-5 w-5 text-white" />
                      </a>
                    ) : (
                      <span className="p-3 bg-gray-800 rounded-full opacity-70">
                        <Github className="h-5 w-5 text-gray-400" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-lg text-center"
                    >
                      Ver Demo
                    </a>

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-gray-700/50 text-gray-300 text-sm rounded-lg text-center"
                      >
                        Código
                      </a>
                    ) : (
                      <span className="flex-1 px-4 py-2 bg-gray-800/60 text-gray-400 text-sm rounded-lg text-center">
                        Privado
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            <button
              onClick={() => goToPage(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-800/60 text-gray-300 rounded-lg disabled:opacity-50"
            >
              Anterior
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`px-4 py-2 rounded-lg ${currentPage === i + 1
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-gray-800/50 text-gray-300'
                  }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => goToPage(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-800/60 text-gray-300 rounded-lg disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;