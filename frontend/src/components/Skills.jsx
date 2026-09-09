import React from 'react';
import { Code2, PenTool, Smartphone, Wrench } from 'lucide-react';
import { skills } from '../data/mock';

const skillDetails = {
  React: ['Hooks y estado', 'Componentes reutilizables', 'Interfaces SPA'],
  'Next.js': ['Routing', 'Consumo de APIs', 'Componentes React'],
  'Vue.js': ['Componentes', 'Estado de interfaz', 'Experiencias SPA'],
  'Tailwind CSS': ['Responsive UI', 'Design tokens', 'Dark / Light mode'],
  Figma: ['Wireframes', 'Prototipos', 'Flujos de usuario'],
  Firebase: ['Authentication', 'Firestore', 'Storage'],
  Git: ['Branches', 'Control de versiones', 'GitHub'],
  'Framer Motion': ['Microinteracciones', 'Transiciones', 'Motion UI'],
  JavaScript: ['Lógica de interfaz', 'Asincronía y APIs', 'DOM'],
  TypeScript: ['Tipos e interfaces', 'React / React Native', 'Código mantenible'],
  HTML5: ['Semántica', 'Formularios', 'Accesibilidad'],
  CSS3: ['Layouts', 'Responsive', 'Animaciones'],
  Python: ['Scripts', 'Procesamiento de datos', 'Automatización'],
  SQL: ['Consultas', 'Modelo relacional', 'PostgreSQL'],
};

const SkillList = ({ title, description, items, icon: Icon }) => (
  <div className="border-t border-slate-200 pt-6 dark:border-white/10">
    <div className="mb-6 flex items-start gap-3">
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 dark:bg-blue-400/10 dark:text-blue-400">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h3 className="text-xl font-semibold tracking-[-0.015em] text-slate-950 dark:text-white">{title}</h3>
        <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-gray-400">{description}</p>
      </div>
    </div>

    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((skill) => {
        const details = skillDetails[skill.name] ?? ['Implementación', 'Práctica', 'Proyectos'];

        return (
          <article
            key={skill.name}
            className="rounded-2xl border border-slate-200 bg-white/70 p-4 transition-[border-color,box-shadow,transform] duration-150 ease-portfolio-out hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_10px_28px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-white/20 dark:hover:shadow-none"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xl dark:bg-white/[0.06]" aria-hidden="true">
                {skill.icon}
              </span>
              <h4 className="font-semibold text-slate-950 dark:text-white">{skill.name}</h4>
            </div>

            <ul className="mt-4 space-y-2 pl-1 text-sm text-slate-500 dark:text-gray-400">
              {details.map((detail) => (
                <li key={detail} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500/80" aria-hidden="true" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </article>
        );
      })}
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
            Más que porcentajes, muestro qué hago con cada herramienta y cómo forma parte de mi trabajo.
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

        <div className="mt-16 grid gap-8 border-t border-slate-200 pt-8 dark:border-white/10 md:grid-cols-3">
          <div>
            <PenTool className="mb-4 h-6 w-6 text-purple-500 dark:text-purple-400" />
            <h3 className="font-semibold text-slate-950 dark:text-white">UX/UI</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-gray-400">
              Arquitectura de información, flujos, prototipos y diseño visual en Figma.
            </p>
          </div>

          <div>
            <Smartphone className="mb-4 h-6 w-6 text-blue-500 dark:text-blue-400" />
            <h3 className="font-semibold text-slate-950 dark:text-white">Mobile</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-gray-400">
              React Native, Expo y diseño responsive pensado para interacción táctil real.
            </p>
          </div>

          <div>
            <Code2 className="mb-4 h-6 w-6 text-slate-500 dark:text-gray-300" />
            <h3 className="font-semibold text-slate-950 dark:text-white">Implementación</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-gray-400">
              Del diseño a código mantenible, cuidando rendimiento, accesibilidad y detalle visual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
