import React from 'react';
import { Code2, PenTool, Smartphone, Wrench } from 'lucide-react';
import { skills } from '../data/mock';

const SkillList = ({ title, description, items, icon: Icon }) => (
  <div className="border-t border-white/10 pt-6">
    <div className="mb-5 flex items-start gap-3">
      <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
      <div>
        <h3 className="text-xl font-semibold tracking-[-0.015em] text-white">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-gray-400">{description}</p>
      </div>
    </div>

    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((skill) => (
        <div key={skill.name} className="flex items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-3">
            <span className="text-lg" aria-hidden="true">{skill.icon}</span>
            <span className="font-medium text-white">{skill.name}</span>
          </div>
          <span className="text-xs text-gray-500 sm:text-sm">Uso en proyectos reales</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="habilidades" className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 sm:text-sm">
            Habilidades
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.025em] text-white sm:text-4xl md:text-5xl">
            Herramientas que uso para diseñar y construir producto.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            Prefiero mostrar dónde aplico una tecnología antes que asignarle un porcentaje arbitrario.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SkillList
            title="Frameworks y herramientas"
            description="Stack que utilizo para construir interfaces, prototipos y productos web o móviles."
            items={skills.frameworks}
            icon={Wrench}
          />

          <SkillList
            title="Lenguajes"
            description="Lenguajes que forman parte de mi trabajo de frontend, datos y lógica de aplicación."
            items={skills.languages}
            icon={Code2}
          />
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3">
          <div>
            <PenTool className="mb-4 h-6 w-6 text-purple-400" />
            <h3 className="font-semibold text-white">UX/UI</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Arquitectura de información, flujos, prototipos y diseño visual en Figma.
            </p>
          </div>

          <div>
            <Smartphone className="mb-4 h-6 w-6 text-blue-400" />
            <h3 className="font-semibold text-white">Mobile</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              React Native, Expo y diseño responsive pensado para interacción táctil real.
            </p>
          </div>

          <div>
            <Code2 className="mb-4 h-6 w-6 text-gray-300" />
            <h3 className="font-semibold text-white">Implementación</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Del diseño a código mantenible, cuidando rendimiento, accesibilidad y detalle visual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
