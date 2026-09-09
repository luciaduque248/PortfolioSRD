import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Frontend Development',
    label: '01',
    description: 'Construcción de interfaces modernas, responsive y funcionales, cuidando detalle visual, accesibilidad y rendimiento.',
    meta: 'React · TypeScript · Tailwind CSS',
  },
  {
    title: 'Web Applications',
    label: '02',
    description: 'Experiencias y aplicaciones web con navegación clara, estados de interfaz y conexión con servicios reales.',
    meta: 'React · Next.js · Vite · APIs',
  },
  {
    title: 'Mobile Applications',
    label: '03',
    description: 'Aplicaciones y experiencias móviles pensadas para interacción táctil y adaptación entre dispositivos.',
    meta: 'React Native · Expo · Firebase',
  },
  {
    title: 'UX/UI & Product Design',
    label: '04',
    description: 'Flujos, arquitectura de información, prototipos y sistemas visuales que conectan intención de producto y uso real.',
    meta: 'Figma · User Flows · Prototyping',
  },
  {
    title: 'Software Development',
    label: '05',
    description: 'Construcción de soluciones funcionales donde interfaz, datos y lógica trabajan como un producto coherente.',
    meta: 'Git · Firebase · Firestore · SQL',
  },
];

const Services = () => (
  <section id="servicios" className="services-section">
    <div className="editorial-container">
      <div className="section-index section-index-dark" data-reveal>
        <span>02 — What I do</span>
        <span>Web and mobile have equal weight</span>
      </div>

      <div className="services-heading" data-reveal>
        <h2>Design. Build. Ship.</h2>
        <p>
          Trabajo desde la interfaz hasta la implementación, sin encerrar mi perfil en una sola plataforma.
        </p>
      </div>

      <div className="services-list">
        {services.map((service) => (
          <article key={service.label} className="service-row" data-reveal data-cursor="EXPLORE">
            <span className="service-number">{service.label}</span>
            <div className="service-main">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <div className="service-meta">
              <span>{service.meta}</span>
              <ArrowUpRight />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
