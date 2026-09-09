import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, skills } from '../data/mock';
import SplineScene from './SplineScene';
import ProjectOrbit from './ProjectOrbit';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Medición real del contenedor 3D de escritorio
  const containerRef = useRef(null);
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setMounted(true);

    const el = containerRef.current;
    if (!el) return;

    const ro = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;
      if (!rect) return;
      setContainerDimensions({ width: rect.width, height: rect.height });
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const heroSection = document.getElementById('hero-interactive-area');
    if (!heroSection) return;

    heroSection.addEventListener('mousemove', handleMouseMove);
    heroSection.addEventListener('mouseenter', handleMouseEnter);
    heroSection.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      heroSection.removeEventListener('mousemove', handleMouseMove);
      heroSection.removeEventListener('mouseenter', handleMouseEnter);
      heroSection.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

  const scrollToProjects = () => {
    const element = document.getElementById('proyectos');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const allSkills = useMemo(() => [
    ...skills.frameworks.map(skill => ({ ...skill, category: 'framework' })),
    ...skills.languages.map(skill => ({ ...skill, category: 'language' }))
  ], []);

  const skillBubbles = useMemo(() => {
    const positions = [
      { x: 20, y: 20 }, { x: 50, y: 15 }, { x: 80, y: 25 },
      { x: 15, y: 40 }, { x: 85, y: 45 }, { x: 25, y: 60 },
      { x: 75, y: 65 }, { x: 45, y: 80 }, { x: 60, y: 35 },
      { x: 35, y: 75 }, { x: 70, y: 20 }, { x: 30, y: 50 }
    ];

    return allSkills.map((skill, index) => ({
      ...skill,
      id: index,
      baseX: positions[index % positions.length].x,
      baseY: positions[index % positions.length].y
    }));
  }, [allSkills]);

  const detectionRadius = useMemo(() => {
    const w = containerDimensions.width || 0;
    if (w < 360) return 110;
    if (w < 520) return 140;
    return 180;
  }, [containerDimensions.width]);

  return (
    <section id="inicio" className="relative overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] md:w-[600px] aspect-square bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-10 sm:py-16 min-h-screen">
          {/* Left */}
          <div
            className={`space-y-6 lg:space-y-8 text-center lg:text-left transition-all duration-1000 mt-20 sm:mt-24 lg:mt-0 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Hola, soy</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light">
                {personalInfo.title}
              </h2>

              <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {personalInfo.slogan}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base"
              >
                Ver Proyectos
              </button>

              <button
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 sm:px-8 py-3 sm:py-4 border border-purple-500/50 hover:border-purple-400 text-white font-medium rounded-lg transition-all duration-300 hover:bg-purple-500/10 backdrop-blur-sm text-sm sm:text-base"
              >
                Contactar
              </button>
            </div>

            <div className="flex space-x-6 justify-center lg:justify-start">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110">
                <Github className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300 hover:text-white" />
              </a>

              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110">
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300 hover:text-white" />
              </a>

              <a href={`mailto:${personalInfo.email}`}
                className="p-2 sm:p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className={`relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Mobile + tablet: showcase optimizado y táctil */}
            <div className="xl:hidden pb-8">
              <ProjectOrbit />
            </div>

            {/* Desktop: conserva la experiencia 3D original */}
            <div className="hidden xl:block">
              <div
                id="hero-interactive-area"
                className="relative mx-auto w-full max-w-[600px] xl:max-w-[700px] aspect-square overflow-visible"
                ref={containerRef}
              >
                <div
                  className={`absolute inset-0 overflow-visible transition-all duration-500 ${isHovered ? 'brightness-150 contrast-125 saturate-150' : ''}`}
                >
                  <SplineScene />
                </div>

                {isHovered && containerDimensions.width >= 520 && (
                  <div className="absolute inset-0 pointer-events-none">
                    {skillBubbles
                      .filter((skill) => {
                        const bubbleX = (skill.baseX / 100) * containerDimensions.width;
                        const bubbleY = (skill.baseY / 100) * containerDimensions.height;
                        const dx = mousePosition.x - bubbleX;
                        const dy = mousePosition.y - bubbleY;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        return distance < detectionRadius;
                      })
                      .slice(0, 3)
                      .map((skill) => {
                        const bubbleX = (skill.baseX / 100) * containerDimensions.width;
                        const bubbleY = (skill.baseY / 100) * containerDimensions.height;

                        const dx = mousePosition.x - bubbleX;
                        const dy = mousePosition.y - bubbleY;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        const opacity = Math.max(0.3, 1 - distance / detectionRadius);
                        const scale = 0.9 + (1 - distance / detectionRadius) * 0.2;

                        return (
                          <div
                            key={skill.id}
                            className="absolute transition-opacity duration-300 ease-out"
                            style={{
                              left: `${skill.baseX}%`,
                              top: `${skill.baseY}%`,
                              opacity,
                              transform: `translate(-50%, -50%) scale(${scale})`,
                              zIndex: 15
                            }}
                          >
                            <div className="bg-gradient-to-r from-blue-600/95 to-purple-600/95 backdrop-blur-md border border-blue-500/60 rounded-full px-3 py-2 shadow-xl flex items-center space-x-2 min-w-[120px] whitespace-nowrap">
                              <span className="text-lg flex-shrink-0">{skill.icon}</span>
                              <div className="flex flex-col min-w-0">
                                <span className="text-white text-sm font-medium truncate">{skill.name}</span>
                                <span className="text-xs text-gray-200">{skill.level}%</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                )}

                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-75 pointer-events-none">
                  <p className="text-gray-400 text-sm animate-pulse text-center px-4">
                    {isHovered
                      ? 'Mueve el mouse para descubrir mis habilidades ✨'
                      : 'Pasa el mouse por encima ✨'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
