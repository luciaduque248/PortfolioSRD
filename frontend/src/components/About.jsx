import React from 'react';
import { Code, Palette, Coffee, Heart, Target, Zap } from 'lucide-react';
import { personalInfo, roles, achievements, values } from '../data/mock';

const About = () => {
  return (
    <section id="sobre-mi" className="py-16 sm:py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Sobre mí
            </span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Biography Extended */}
        <div className="mb-12 sm:mb-16">
          {/* Row 1: Texto + Imagen */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Texto */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {personalInfo.extendedBio}
              </p>
            </div>

            {/* Imagen (derecha en desktop) */}
            <div className="space-y-6 sm:space-y-8">
              <div className="relative w-fit mx-auto">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center overflow-hidden">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover"
                  />
                </div>

                {/* Floating badges */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                  3+ años
                </div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                  +10 proyectos
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Módulos debajo */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-4 sm:p-6 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-purple-500/20">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 flex items-center">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mr-2" />
                ¿Qué me motiva?
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {personalInfo.motivation}
              </p>
            </div>

            <div className="p-4 sm:p-6 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-blue-500/20">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 flex items-center">
                <Target className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2" />
                Mi filosofía
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {personalInfo.philosophy}
              </p>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8">Logros</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="text-2xl sm:text-4xl font-bold text-blue-400 mb-1 sm:mb-2">{achievement.number}</div>
                <div className="text-white font-semibold mb-1 text-sm sm:text-base">{achievement.label}</div>
                <div className="text-gray-400 text-xs sm:text-sm">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Roles Section */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8">Roles que desempeño</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {roles.map((role, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{role.icon}</div>
                <h4 className="text-white font-bold mb-2 text-sm sm:text-base">{role.title}</h4>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{role.description}</p>
                <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                  {role.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs font-medium rounded-full border border-blue-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8">Mis valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 text-center"
              >
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{value.icon}</div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{value.title}</h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-purple-500/20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">¿Trabajamos juntos?</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
              Estoy siempre emocionada por nuevos desafíos y oportunidades de colaborar en proyectos innovadores.
            </p>
            <button
              onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base"
            >
              Iniciemos una conversación
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;