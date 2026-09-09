import React from 'react';
import { Braces, LayoutTemplate, MousePointerClick, PanelsTopLeft, Search, Workflow } from 'lucide-react';
import '../styles/skills-logos.css';

const logo = (slug, hex) => `https://cdn.simpleicons.org/${slug}/${hex}`;

const groups = [
  {
    index: '01',
    title: 'Frontend',
    items: [
      { name: 'React', logo: logo('react', '61DAFB') },
      { name: 'Next.js', logo: logo('nextdotjs', '111111') },
      { name: 'Vue.js', logo: logo('vuedotjs', '4FC08D') },
      { name: 'TypeScript', logo: logo('typescript', '3178C6') },
      { name: 'JavaScript', logo: logo('javascript', 'F7DF1E') },
      { name: 'Tailwind CSS', logo: logo('tailwindcss', '06B6D4') },
    ],
    note: 'Interfaces, componentes, estados y sistemas responsive.',
  },
  {
    index: '02',
    title: 'Web',
    items: [
      { name: 'React', logo: logo('react', '61DAFB') },
      { name: 'Next.js', logo: logo('nextdotjs', '111111') },
      { name: 'Vite', logo: logo('vite', '646CFF') },
      { name: 'HTML5', logo: logo('html5', 'E34F26') },
      { name: 'CSS', logo: logo('css', '663399') },
      { name: 'APIs REST', Icon: Braces },
    ],
    note: 'Aplicaciones web, landing pages y productos conectados a servicios.',
  },
  {
    index: '03',
    title: 'Mobile',
    items: [
      { name: 'React Native', logo: logo('react', '61DAFB') },
      { name: 'Expo', logo: logo('expo', '000020') },
      { name: 'TypeScript', logo: logo('typescript', '3178C6') },
      { name: 'Firebase', logo: logo('firebase', 'DD2C00') },
      { name: 'Firestore', logo: logo('firebase', 'FFCA28') },
    ],
    note: 'Experiencias táctiles y aplicaciones Android/multiplataforma.',
  },
  {
    index: '04',
    title: 'Design',
    items: [
      { name: 'Figma', logo: logo('figma', 'F24E1E') },
      { name: 'UX Research', Icon: Search },
      { name: 'UI Design', Icon: PanelsTopLeft },
      { name: 'User Flows', Icon: Workflow },
      { name: 'Wireframing', Icon: LayoutTemplate },
      { name: 'Prototyping', Icon: MousePointerClick },
    ],
    note: 'De arquitectura y flujo a prototipo y sistema visual.',
  },
  {
    index: '05',
    title: 'Data / Services',
    items: [
      { name: 'Firebase', logo: logo('firebase', 'DD2C00') },
      { name: 'Firestore', logo: logo('firebase', 'FFCA28') },
      { name: 'Supabase', logo: logo('supabase', '3FCF8E') },
      { name: 'Cloudinary', logo: logo('cloudinary', '3448C5') },
      { name: 'SQL', logo: logo('postgresql', '4169E1') },
    ],
    note: 'Autenticación, persistencia, imágenes y datos.',
  },
  {
    index: '06',
    title: 'Tools',
    items: [
      { name: 'Git', logo: logo('git', 'F05032') },
      { name: 'GitHub', logo: logo('github', '181717') },
      { name: 'Framer Motion', logo: logo('framer', '0055FF') },
    ],
    note: 'Versionado, colaboración y motion cuando aporta a la interacción.',
  },
];

const TechMark = ({ item }) => {
  const Icon = item.Icon;
  const fallback = item.name.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase();

  return (
    <span className="skill-tech">
      <span className="skill-tech-mark" aria-hidden="true">
        {item.logo ? (
          <>
            <img
              src={item.logo}
              alt=""
              loading="lazy"
              decoding="async"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
                event.currentTarget.nextElementSibling.style.display = 'grid';
              }}
            />
            <span className="skill-tech-fallback">{fallback}</span>
          </>
        ) : (
          <Icon />
        )}
      </span>
      <span className="skill-tech-name">{item.name}</span>
    </span>
  );
};

const Skills = () => (
  <section id="habilidades" className="skills-section">
    <div className="editorial-container">
      <div className="section-index" data-reveal>
        <span>04 — Stack</span>
        <span>Grouped by how I work</span>
      </div>

      <div className="skills-heading" data-reveal>
        <h2>Herramientas al servicio del producto.</h2>
        <p>
          No trabajo la web y el mobile como mundos separados: comparten criterio de interfaz, arquitectura y calidad de implementación.
        </p>
      </div>

      <div className="skills-groups">
        {groups.map((group) => (
          <article key={group.title} className="skill-group" data-reveal>
            <span className="skill-group-index">{group.index}</span>
            <h3>{group.title}</h3>
            <p>{group.note}</p>
            <div className="skill-group-items" aria-label={`Tecnologías de ${group.title}`}>
              {group.items.map((item) => <TechMark key={item.name} item={item} />)}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
