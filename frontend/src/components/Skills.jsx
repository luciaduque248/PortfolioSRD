import React from 'react';
import { Code, Wrench } from 'lucide-react';
import { skills } from '../data/mock';

const SkillBar = ({ skill }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-white font-medium flex items-center">
          <span className="mr-2">{skill.icon}</span>
          {skill.name}
        </span>
        <span className="text-blue-400 font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="habilidades" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear experiencias digitales excepcionales
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Frameworks & Tools */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center lg:justify-start">
                <Wrench className="h-8 w-8 text-purple-400 mr-3" />
                Frameworks & Herramientas
              </h3>
              <p className="text-gray-400 mb-8">
                Tecnologías modernas que uso para construir aplicaciones robustas y escalables
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
              <div className="space-y-6">
                {skills.frameworks.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="opacity-0 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                  >
                    <SkillBar skill={skill} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center lg:justify-start">
                <Code className="h-8 w-8 text-blue-400 mr-3" />
                Lenguajes
              </h3>
              <p className="text-gray-400 mb-8">
                Lenguajes de programación que manejo para el desarrollo frontend y backend
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
              <div className="space-y-6">
                {skills.languages.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="opacity-0 animate-fade-in"
                    style={{ animationDelay: `${(index + skills.frameworks.length) * 0.1}s`, animationFillMode: 'forwards' }}
                  >
                    <SkillBar skill={skill} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Otras competencias
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="text-white font-semibold mb-2">UI/UX Design</h4>
              <p className="text-gray-400 text-sm">Diseño centrado en el usuario con herramientas como Figma</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-white font-semibold mb-2">Performance</h4>
              <p className="text-gray-400 text-sm">Optimización de aplicaciones para máximo rendimiento</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-gray-500/20 hover:border-gray-400/40 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-white font-semibold mb-2">Deployment</h4>
              <p className="text-gray-400 text-sm">Despliegue y CI/CD con Vercel, Netlify y GitHub Actions</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Skills;