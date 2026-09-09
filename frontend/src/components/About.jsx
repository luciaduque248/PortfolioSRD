import React from 'react';
import { personalInfo, achievements, roles, values } from '../data/mock';
import { scrollToId } from '../utils/motion';

const About = () => {
  return (
    <section id="sobre-mi" className="bg-gradient-to-b from-black to-gray-900 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl sm:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 sm:text-sm">
            Sobre mí
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.025em] text-white sm:text-4xl md:text-5xl">
            Diseño interfaces y las llevo a producto.
          </h2>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="space-y-5">
            <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
              {personalInfo.bio}
            </p>
            <p className="text-base leading-relaxed text-gray-400 sm:text-lg">
              {personalInfo.extendedBio}
            </p>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-gray-950">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 border-y border-white/10 sm:mt-16">
          <div className="grid sm:grid-cols-3">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.label}
                className={`py-6 text-left sm:px-6 ${index > 0 ? 'border-t border-white/10 sm:border-l sm:border-t-0' : ''}`}
              >
                <div className="text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
                  {achievement.number}
                </div>
                <div className="mt-1 text-sm font-medium text-gray-300">
                  {achievement.label}
                </div>
                <div className="mt-1 text-xs leading-relaxed text-gray-500 sm:text-sm">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="mb-6 text-2xl font-semibold tracking-[-0.02em] text-white">
              Áreas en las que trabajo
            </h3>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {roles.map((role) => (
                <div key={role.title} className="py-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-semibold text-white">{role.title}</h4>
                    <span className="text-sm text-gray-500">{role.skills.join(' · ')}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-semibold tracking-[-0.02em] text-white">
              Cómo tomo decisiones de diseño
            </h3>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {values.map((value) => (
                <div key={value.title} className="py-5">
                  <h4 className="font-semibold text-white">{value.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">¿Tienes un proyecto en mente?</h3>
            <p className="mt-1 text-sm text-gray-400">Podemos hablar de producto, interfaz o implementación.</p>
          </div>
          <button
            onClick={() => scrollToId('contacto')}
            className="rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-[background-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-blue-400 active:scale-[0.98]"
          >
            Hablemos
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
