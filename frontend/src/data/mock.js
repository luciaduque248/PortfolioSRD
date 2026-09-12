import saraAboutImg from "../images/portraits/Portrait_Sara_fondoBlanco.PNG";
import countriesCoverImg from "../images/cover_projects/countries_portada.png";
import agroinnovaCoverImg from "../images/cover_projects/agroinnova_portada.png";
import manageCoverImg from "../images/cover_projects/manage_portada.png";
import pensumCoverImg from "../images/cover_projects/pensumUnicauca__portada.png";
import cafecomCoverImg from "../images/cover_projects/cafecom_portada.png";
import cafecomUxUiCoverImg from "../images/cover_projects/cafecom_UXUI_portada.png";
import virtuosaWebCoverImg from "../images/cover_projects/virtuosa_portada.png";
import virtuosaUxUiCoverImg from "../images/cover_projects/virtuosa_portada_UXUI.png";
import novaCoverImg from "../images/cover_projects/nova_portada.png";
import musicPlayerCoverImg from "../images/cover_projects/reproductorMusica_portada.png";

export const personalInfo = {
  name: "Sara Duque",
  title: "Frontend Developer · Web + Mobile · UX/UI · Software",
  slogan: "Diseño y desarrollo interfaces y productos digitales para web y mobile.",
  bio: "Trabajo entre diseño y desarrollo. Puedo empezar en Figma definiendo flujos, jerarquía y comportamiento, y continuar hasta una implementación funcional para web o mobile con tecnologías como React, TypeScript y React Native.",
  extendedBio: "Me interesa que una interfaz no solo se vea bien: debe responder rápido, adaptarse al dispositivo y mantener una lógica visual consistente. En mis proyectos conecto frontend, aplicaciones web, experiencias móviles y UX/UI para reducir la distancia entre la idea, el prototipo y el producto que finalmente usa una persona.",
  motivation: "Me interesa convertir problemas reales en interfaces claras y funcionales, cuidando tanto la experiencia como la implementación.",
  philosophy: "Cada decisión visual debe tener una razón: comunicar jerarquía, facilitar una acción, mejorar la comprensión o reforzar la identidad del producto.",
  avatar: saraAboutImg,
  email: "luciaduque248@gmail.com",
  linkedin: "https://www.linkedin.com/in/sara-duque-desarrolladora-frontend",
  github: "https://github.com/luciaduque248"
};

export const projects = [
  {
    id: 6,
    name: "Country Explorer",
    description: "Sitio web para explorar países del mundo, con filtros por nombre y región.",
    image: countriesCoverImg,
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://countries-app-eta-seven.vercel.app/",
    githubUrl: "https://github.com/luciaduque248/CountriesApp",
    category: "Web App"
  },
  {
    id: 7,
    name: "Music Player",
    description: "Reproductor musical web desarrollado con JavaScript, HTML y CSS.",
    image: musicPlayerCoverImg,
    technologies: ["JavaScript", "HTML", "CSS"],
    demoUrl: "https://luciaduque248.github.io/ReproductorDeMusica/",
    githubUrl: "https://github.com/luciaduque248/ReproductorDeMusica",
    category: "Web App"
  },
  {
    id: 8,
    name: "AgroInnova",
    description: "Plataforma web orientada al sector agropecuario para conectar tecnología, información y usuarios.",
    image: agroinnovaCoverImg,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://agro-innova-demo.vercel.app/",
    githubUrl: null,
    category: "Web App"
  },
  {
    id: 9,
    name: "CafeCom — UX/UI",
    description: "Diseño UX/UI de la experiencia móvil de CafeCom, con flujos y pantallas para caficultores.",
    image: cafecomUxUiCoverImg,
    technologies: ["Figma", "UX/UI", "Mobile UX", "Prototyping"],
    demoUrl: "https://www.figma.com/design/F9Fljzi1eZS5S76IIiQtAC/CafeCom?node-id=0-1",
    githubUrl: null,
    category: "UX/UI"
  },
  {
    id: 10,
    name: "HOTELIA",
    description: "Experiencia web para hotelería con una interfaz editorial y enfoque responsive.",
    image: null,
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://hotelia-hl.vercel.app/",
    githubUrl: "https://github.com/luciaduque248/HoteliaHL",
    category: "Web App"
  },
  {
    id: 11,
    name: "Manage — Landing Page",
    description: "Landing page minimalista para presentar Manage. Comunica de forma clara el valor del producto y organiza la información en una experiencia web responsive.",
    image: manageCoverImg,
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://luciaduque248.github.io/Proyecto-Manage/",
    githubUrl: "https://github.com/luciaduque248/Proyecto-Manage",
    category: "Landing Page"
  },
  {
    id: 12,
    name: "Virtuosa — Web",
    description: "Sitio web de identidad visual y contenido editorial para una marca creativa.",
    image: virtuosaWebCoverImg,
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://virtuosa-crud.vercel.app/",
    githubUrl: "https://github.com/luciaduque248/VirtuosaCrud",
    category: "Web App"
  },
  {
    id: 13,
    name: "Virtuosa — UX/UI",
    description: "Propuesta UX/UI para Virtuosa, enfocada en identidad, jerarquía y experiencia visual.",
    image: virtuosaUxUiCoverImg,
    technologies: ["Figma", "UX/UI", "Visual Design"],
    demoUrl: "https://www.figma.com/design/77kBTXLVhpGbghkWRoRINb/VIRTUOSA?node-id=0-1",
    githubUrl: null,
    category: "UX/UI"
  },
  {
    id: 14,
    name: "Mi Pensum Interactivo",
    description: "Aplicación web para visualizar y explorar un pensum académico de forma interactiva.",
    image: pensumCoverImg,
    technologies: ["React", "JavaScript", "CSS"],
    demoUrl: "https://pensum-unicauca.vercel.app/",
    githubUrl: "https://github.com/luciaduque248/PensumUnicauca",
    category: "Web App"
  },
  {
    id: 15,
    name: "CafeCom — Mobile App",
    description: "Aplicación móvil Android orientada a caficultores registrados en la plataforma. Integra autenticación, perfiles, gestión de lotes, protocolos e información del café, con Firebase/Firestore y carga de imágenes en Cloudinary. El desarrollo prioriza una experiencia usable en contextos rurales y conectividad limitada.",
    image: cafecomCoverImg,
    technologies: ["React Native", "Expo", "TypeScript", "Firebase", "Firestore", "Cloudinary"],
    demoUrl: null,
    githubUrl: null,
    category: "Mobile App",
    inDevelopment: true
  },
  {
    id: 16,
    name: "ServiChat — Mobile App",
    description: "Aplicación móvil para la gestión y comunicación de clínicas y consultorios. El proyecto adapta la experiencia de WhatSender a móvil e integra recordatorios, toma de citas, envíos masivos y diagnóstico, con flujos diferenciados para propietarios, administradores, profesionales y pacientes. Actualmente se encuentra en fase de diseño funcional y UX/UI.",
    image: null,
    technologies: ["Figma", "UX/UI Design", "Mobile UX", "User Flows", "Prototyping"],
    demoUrl: null,
    githubUrl: null,
    category: "Mobile App",
    inDevelopment: true
  },
  {
    id: 17,
    name: "NOVA Residences",
    description: "Landing page inmobiliaria premium enfocada en generación de leads, experiencia responsive y una dirección visual editorial.",
    image: novaCoverImg,
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://nova-residences-landing.vercel.app/",
    githubUrl: "https://github.com/luciaduque248/nova-residences-landing",
    category: "Landing Page"
  },
  {
    id: 18,
    name: "AUREA Skin Clinic",
    description: "Landing page premium para una clínica estética, con dirección visual beauty editorial, experiencia responsive y un funnel de valoración diseñado con comunicación responsable.",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1600&q=88",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://aurea-skin-clinic-landing.vercel.app/",
    githubUrl: "https://github.com/luciaduque248/aurea-skin-clinic-landing",
    category: "Landing Page"
  }
];

export const skills = {
  frameworks: [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Vue.js", icon: "◆" },
    { name: "Tailwind CSS", icon: "◫" },
    { name: "Figma", icon: "F" },
    { name: "Firebase", icon: "F" },
    { name: "Git", icon: "G" },
    { name: "Framer Motion", icon: "M" }
  ],
  languages: [
    { name: "JavaScript", icon: "JS" },
    { name: "TypeScript", icon: "TS" },
    { name: "HTML5", icon: "H" },
    { name: "CSS3", icon: "C" },
    { name: "Python", icon: "Py" },
    { name: "SQL", icon: "SQL" }
  ]
};

export const roles = [
  {
    title: "Frontend Development",
    description: "Implementación de interfaces responsive, componentes y flujos de producto.",
    skills: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Web Applications",
    description: "Aplicaciones y experiencias web con navegación, estado y servicios reales.",
    skills: ["React", "Next.js", "Vite"]
  },
  {
    title: "Mobile Applications",
    description: "Experiencias móviles con foco en interacción táctil y adaptación entre dispositivos.",
    skills: ["React Native", "Expo", "Firebase"]
  },
  {
    title: "UX/UI & Product Design",
    description: "Flujos, jerarquía visual, prototipos y sistemas de interfaz.",
    skills: ["Figma", "User Flows", "Prototyping"]
  },
  {
    title: "Software Development",
    description: "Soluciones funcionales donde interfaz, datos y lógica trabajan juntas.",
    skills: ["Git", "Firebase", "SQL"]
  }
];

export const achievements = [
  { number: "WEB", label: "Applications", description: "Frontend y productos para navegador" },
  { number: "MOBILE", label: "Applications", description: "Experiencias táctiles y multiplataforma" },
  { number: "UX/UI", label: "Design", description: "Flujos, prototipos y sistemas visuales" }
];

export const values = [
  "Interfaces claras antes que ruido visual",
  "Diseño y código trabajando como un solo producto",
  "Responsive desde la estructura, no como parche final",
  "Interacciones con propósito y rendimiento"
];
