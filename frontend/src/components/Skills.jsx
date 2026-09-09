import React from 'react';

const groups = [
  {
    index: '01',
    title: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    note: 'Interfaces, componentes, estados y sistemas responsive.',
  },
  {
    index: '02',
    title: 'Web',
    items: ['React', 'Next.js', 'Vite', 'HTML5', 'CSS3', 'APIs REST'],
    note: 'Aplicaciones web, landing pages y productos conectados a servicios.',
  },
  {
    index: '03',
    title: 'Mobile',
    items: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Firestore'],
    note: 'Experiencias táctiles y aplicaciones Android/multiplataforma.',
  },
  {
    index: '04',
    title: 'Design',
    items: ['Figma', 'UX Research', 'UI Design', 'User Flows', 'Wireframing', 'Prototyping'],
    note: 'De arquitectura y flujo a prototipo y sistema visual.',
  },
  {
    index: '05',
    title: 'Data / Services',
    items: ['Firebase', 'Firestore', 'Supabase', 'Cloudinary', 'SQL'],
    note: 'Autenticación, persistencia, imágenes y datos.',
  },
  {
    index: '06',
    title: 'Tools',
    items: ['Git', 'GitHub', 'Framer Motion'],
    note: 'Versionado, colaboración y motion cuando aporta a la interacción.',
  },
];

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
            <div className="skill-group-items">
              {group.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
