import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo, achievements, roles, values } from '../data/mock';
import { scrollToId } from '../utils/motion';

const About = () => {
  return (
    <section id="sobre-mi" className="bg-[#3157ff] text-white">
      <div className="mx-auto max-w-[1600px] px-5 pb-24 pt-28 sm:px-8 sm:pb-32 sm:pt-36 lg:px-12">
        <div data-reveal className="reveal-up border-t border-white/30 pt-5">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/55">
              01 — About me
            </p>
            <h2 className="max-w-5xl text-[clamp(2.9rem,7vw,7.8rem)] font-black uppercase leading-[.88] tracking-[-.065em]">
              Diseño experiencias digitales y las llevo hasta producto.
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-12 border-t border-white/30 pt-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div data-reveal className="reveal-up max-w-xl">
            <p className="text-xl leading-relaxed sm:text-2xl">
              {personalInfo.bio}
            </p>
            <p className="mt-7 text-base leading-relaxed text-white/68 sm:text-lg">
              {personalInfo.extendedBio}
            </p>
          </div>

          <div data-reveal className="reveal-up reveal-delay-1">
            <div className="grid border-y border-white/30 sm:grid-cols-3">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.label}
                  className={`py-6 ${index > 0 ? 'border-t border-white/30 sm:border-l sm:border-t-0 sm:pl-6' : ''}`}
                >
                  <div className="text-4xl font-black tracking-[-.05em] text-[#d9b8ff] sm:text-5xl">{achievement.number}</div>
                  <div className="mt-2 text-sm font-semibold uppercase tracking-[.08em]">{achievement.label}</div>
                  <p className="mt-2 text-xs leading-relaxed text-white/55">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-16 lg:grid-cols-2">
          <div data-reveal className="reveal-up">
            <div className="mb-5 flex items-center justify-between border-b border-white/30 pb-4">
              <h3 className="text-xl font-black uppercase tracking-[-.02em]">What I do</h3>
              <span className="text-xs text-white/45">01—{String(roles.length).padStart(2, '0')}</span>
            </div>
            <div>
              {roles.map((role, index) => (
                <article key={role.title} className="group border-b border-white/30 py-5">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 text-xs font-black text-[#d9b8ff]">0{index + 1}</span>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-2xl font-semibold tracking-[-.03em] sm:text-3xl">{role.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-white/65">{role.description}</p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[.12em] text-white/45">
                        {role.skills.join(' · ')}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div data-reveal className="reveal-up reveal-delay-1">
            <div className="mb-5 flex items-center justify-between border-b border-white/30 pb-4">
              <h3 className="text-xl font-black uppercase tracking-[-.02em]">How I decide</h3>
              <span className="text-xs text-white/45">Principles</span>
            </div>
            <div>
              {values.map((value, index) => (
                <article key={value.title} className="border-b border-white/30 py-5">
                  <div className="flex gap-4">
                    <span className="mt-1 text-xs font-black text-[#d9b8ff]">0{index + 1}</span>
                    <div>
                      <h4 className="text-xl font-semibold tracking-[-.02em] sm:text-2xl">{value.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-white/65">{value.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#b96cff] text-[#0b0b0f]">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div data-reveal className="reveal-up flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h3 className="max-w-5xl text-[clamp(2.7rem,7vw,7rem)] font-black uppercase leading-[.88] tracking-[-.065em]">
              Las ideas se vuelven reales cuando diseño y código trabajan juntos.
            </h3>
            <button type="button" onClick={() => scrollToId('contacto')} className="editorial-cta shrink-0">
              Hablemos
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;