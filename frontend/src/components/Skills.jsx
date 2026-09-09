import React from 'react';
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

const accents = ['#3157ff', '#7c3aed', '#d946ef', '#6ea8ff'];

const SkillRow = ({ skill, index }) => {
  const details = skillDetails[skill.name] ?? ['Implementación', 'Práctica', 'Proyectos'];
  const accent = accents[index % accents.length];

  return (
    <article data-reveal className="reveal-up group border-b border-black/15 py-6 dark:border-white/15 sm:py-7">
      <div className="grid items-start gap-4 sm:grid-cols-[60px_1fr_1fr] sm:gap-8">
        <span className="text-xs font-black" style={{ color }}>{String(index + 1).padStart(2, '0')}</span>
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full text-xl text-white shadow-sm" style={{ backgroundColor: accent }} aria-hidden="true">
            {skill.icon}
          </span>
          <h4 className="text-2xl font-semibold tracking-[-.035em] transition-transform duration-200 ease-portfolio-out group-hover:translate-x-1 sm:text-3xl">{skill.name}</h4>
        </div>
        <p className="text-sm uppercase leading-relaxed tracking-[.08em] text-black/42 dark:text-white/42 sm:text-right">
          {details.join(' · ')}
        </p>
      </div>
    </article>
  );
};

const Skills = () => {
  const allSkills = [...skills.frameworks, ...skills.languages];

  return (
    <section id="habilidades" className="bg-[#eeeaff] py-24 text-black dark:bg-[#120d1b] dark:text-white sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div data-reveal className="reveal-up grid gap-8 border-t border-black/15 pt-5 dark:border-white/15 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
          <p className="text-xs font-black uppercase tracking-[.22em] text-[#3157ff] dark:text-[#8bb6ff]">03 — Stack</p>
          <h2 className="max-w-5xl text-[clamp(3rem,7.5vw,8.4rem)] font-black uppercase leading-[.86] tracking-[-.07em]">
            Herramientas para <span className="text-[#7c3aed] dark:text-[#c47aff]">diseñar</span>, construir y lanzar.
          </h2>
        </div>

        <div className="mt-20 border-t border-black/15 dark:border-white/15 sm:mt-28">
          {allSkills.map((skill, index) => (
            <SkillRow key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        <div className="mt-24 grid overflow-hidden rounded-[30px] border border-black/10 bg-white/55 dark:border-white/10 dark:bg-white/[.035] md:grid-cols-3">
          <div data-reveal className="reveal-up p-7 sm:p-9">
            <span className="text-xs font-black uppercase tracking-[.16em] text-[#7c3aed] dark:text-[#c47aff]">Design</span>
            <h3 className="mt-4 text-3xl font-black uppercase tracking-[-.04em]">UX/UI</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-black/50 dark:text-white/50">Arquitectura de información, flujos, prototipos y sistemas visuales en Figma.</p>
          </div>
          <div data-reveal className="reveal-up reveal-delay-1 border-t border-black/10 p-7 dark:border-white/10 md:border-l md:border-t-0 sm:p-9">
            <span className="text-xs font-black uppercase tracking-[.16em] text-[#3157ff] dark:text-[#8bb6ff]">Build</span>
            <h3 className="mt-4 text-3xl font-black uppercase tracking-[-.04em]">Frontend</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-black/50 dark:text-white/50">Interfaces web mantenibles, responsive y conectadas a servicios reales.</p>
          </div>
          <div data-reveal className="reveal-up reveal-delay-2 border-t border-black/10 bg-[#b96cff] p-7 text-[#0b0b0f] dark:border-white/10 md:border-l md:border-t-0 sm:p-9">
            <span className="text-xs font-black uppercase tracking-[.16em] text-black/55">Ship</span>
            <h3 className="mt-4 text-3xl font-black uppercase tracking-[-.04em]">Mobile</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-black/60">React Native, Expo y experiencias pensadas para interacción táctil y dispositivos reales.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;