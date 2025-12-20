import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="proyectos" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
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

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeFilter === category
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 hover:border-purple-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-500/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay with Links */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors duration-300 transform hover:scale-110"
                  >
                    <ExternalLink className="h-5 w-5 text-white" />
                  </a>
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors duration-300 transform hover:scale-110"
                    >
                      <Github className="h-5 w-5 text-white" />
                    </a>
                  ) : (
                    <span
                      title="Repositorio privado"
                      className="p-3 bg-gray-800 rounded-full cursor-not-allowed opacity-70"
                    >
                      <Github className="h-5 w-5 text-gray-400" />
                    </span>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.name}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs font-medium rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm font-medium rounded-lg transition-all duration-300 text-center"
                  >
                    Ver Demo
                  </a>

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-300 text-center border border-gray-600/50"
                    >
                      Código
                    </a>
                  ) : (
                    <span
                      title="Repositorio privado"
                      className="flex-1 px-4 py-2 bg-gray-800/60 text-gray-400 text-sm font-medium rounded-lg text-center border border-gray-700 cursor-not-allowed opacity-80"
                    >
                      Privado
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">¿Te gusta lo que ves? Hablemos sobre tu próximo proyecto.</p>
          <button
            onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Iniciar Conversación
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;