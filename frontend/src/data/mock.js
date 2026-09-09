import countryExplorerImg from "../images/project-covers/country-explorer.svg";
import musicPlayerImg from "../images/project-covers/music-player.svg";
import agroinnovaImg from "../images/project-covers/agroinnova-cover.svg";
import cafecomUxImg from "../images/project-covers/cafecom-ux.svg";
import hoteliaImg from "../images/project-covers/hotelia-cover.svg";
import manageImg from "../images/project-covers/manage-cover.svg";
import virtuosaWebImg from "../images/project-covers/virtuosa-web.svg";
import virtuosaUxImg from "../images/project-covers/virtuosa-ux.svg";
import pensumImg from "../images/project-covers/pensum-cover.svg";
import cafecomMobileImg from "../images/cafecom-mobile.svg";
import servichatMobileImg from "../images/servichat-mobile.svg";

// Datos del portafolio de Sara Duque
export const personalInfo = {
    name: "Sara Duque",
    title: "Frontend Developer · UX/UI · Mobile Apps",
    slogan: "Diseño interfaces y las llevo a código: productos web, experiencias UX/UI y aplicaciones móviles.",
    bio: "Trabajo entre diseño y desarrollo. Puedo empezar en Figma definiendo flujos, jerarquía y comportamiento, y continuar hasta una implementación funcional en React, TypeScript o React Native.",
    extendedBio: "Me interesa que una interfaz no solo se vea bien: debe responder rápido, adaptarse al dispositivo y mantener una lógica visual consistente. En mis proyectos combino frontend, UX/UI y producto para reducir la distancia entre la idea, el prototipo y lo que finalmente usa una persona.",
    motivation: "Me interesa convertir problemas reales en interfaces claras y funcionales, cuidando tanto la experiencia como la implementación.",
    philosophy: "Cada decisión visual debe tener una razón: comunicar jerarquía, facilitar una acción, mejorar la comprensión o reforzar la identidad del producto.",
    avatar: "https://customer-assets.emergentagent.com/job_futuredev-hub/artifacts/luotwcgt_Sara.gif",
    email: "luciaduque248@gmail.com",
    linkedin: "https://www.linkedin.com/in/sara-duque-desarrolladora-frontend",
    github: "https://github.com/luciaduque248"
};

export const projects = [
    {
        id: 6,
        name: "Country Explorer",
        description: "Sitio web para explorar países del mundo, con filtros por nombre y región,",
        image: countryExplorerImg,
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        demoUrl: "https://countries-app-eta-seven.vercel.app/",
        githubUrl: "https://github.com/luciaduque248/CountriesApp.git",
        category: "Web App"
    },
    {
        id: 7,
        name: "Music Player",
        description: "Reproductor de música desarrollado con HTML, CSS y JavaScript. Permite reproducir, pausar, cambiar de canción y controlar el progreso de audio con una interfaz moderna y responsive.",
        image: musicPlayerImg,
        technologies: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://luciaduque248.github.io/ReproductorDeMusica/",
        githubUrl: "https://github.com/luciaduque248/ReproductorDeMusica.git",
        category: "Web App"
    },
    {
        id: 8,
        name: "AgroInnova",
        description:
            "Plataforma digital orientada a la innovación agropecuaria. Integra marketplace, gestión de emprendimientos y procesos de incubación, con interfaces diferenciadas para clientes, emprendedores, mentores, coordinadores y administradores.",
        image: agroinnovaImg,
        technologies: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "Firebase",
            "APIs REST"
        ],
        demoUrl: "https://agro-innova-demo.vercel.app/",
        githubUrl: null,
        category: "Web App",
        requiresDemoNotice: true
    },
    {
        id: 9,
        name: "CafeCom",
        description: "Diseño UX/UI de una plataforma digital orientada al sector cafetero. El proyecto fue desarrollado en Figma, enfocándose en investigación de usuarios, arquitectura de información y diseño de interfaces para la comercialización y gestión de productos de café. Actualmente en fase de diseño, sin implementación en código.",
        image: cafecomUxImg,
        technologies: ["Figma", "UX Research", "UI Design", "Prototyping"],
        demoUrl: "https://www.figma.com/proto/F9Fljzi1eZS5S76IIiQtAC/CafeCom?node-id=3-4&p=f&t=1ARjMevGkg2cU5OT-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A20",
        githubUrl: null,
        category: "UX/UI"
    },
    {
        id: 10,
        name: "HOTELIA",
        description: "Diseño UX/UI de una plataforma web para reservas hoteleras. El proyecto aborda el flujo completo de búsqueda, selección de habitaciones, reservas y gestión de estancias, priorizando usabilidad, claridad visual y experiencia del usuario. Desarrollado en Figma como prototipo interactivo.",
        image: hoteliaImg,
        technologies: ["Figma", "UX/UI Design", "User Flows", "Wireframing", "Prototyping"],
        demoUrl: "https://www.figma.com/proto/aGuHBirVEIo2JphyaklEcw/Hotelia?node-id=86-142&p=f&t=72XCj9WGnym9XwA2-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=86%3A142&show-proto-sidebar=1",
        githubUrl: "https://github.com/luciaduque248/HoteliaHL.git",
        category: "UX/UI"
    },
    {
        id: 11,
        name: "Manage — Landing Page",
        description:
            "Landing page minimalista para presentar Manage. Communica de forma clara el valor del producto: “Manage makes it simple for software teams to plan day-to-day tasks while keeping the large team goals in view”.",
        image: manageImg,
        technologies: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://luciaduque248.github.io/Proyecto-Manage/",
        githubUrl: "https://github.com/luciaduque248/Proyecto-Manage.git",
        category: "Web App"
    },
    {
        id: 12,
        name: "Virtuosa",
        description:
            "Tienda online de ropa y maquillaje orientada a una experiencia de compra elegante y sencilla. Diseño enfocado en identidad de marca, navegación intuitiva y presentación visual de productos.",
        image: virtuosaWebImg,
        technologies: ["React", "Tailwind CSS", "E-commerce UI"],
        demoUrl: "https://virtuosa-crud.vercel.app/VirtuosaCrud/",
        githubUrl: "https://github.com/luciaduque248/VirtuosaCrud.git",
        category: "Web App"
    },
    {
        id: 13,
        name: "Virtuosa",
        description:
            "Tienda online de ropa y maquillaje orientada a una experiencia de compra elegante y sencilla. Diseño enfocado en identidad de marca, navegación intuitiva y presentación visual de productos.",
        image: virtuosaUxImg,
        technologies: ["Figma", "UX/UI Design", "Prototyping"],
        category: "UX/UI",
        demoUrl: "https://www.figma.com/proto/77kBTXLVhpGbghkWRoRINb/VIRTUOSA?node-id=439-1931&p=f&t=hJKfr0Oc8jl4GpZk-9&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=439%3A1931&show-proto-sidebar=1",
        githubUrl: null
    },
    {
        id: 14,
        name: "Mi Pensum Interactivo",
        description:
            "Plataforma web para gestionar el progreso académico de Ingeniería Electrónica y Telecomunicaciones en la Universidad del Cauca. Permite consultar el pensum, prerrequisitos, notas, horarios e historial académico, con persistencia de datos e integración por voz mediante Alexa.",
        image: pensumImg,
        technologies: [
            "React",
            "TypeScript",
            "Vite",
            "Supabase",
            "Alexa Skill"
        ],
        demoUrl: "https://pensum-unicauca.vercel.app/",
        githubUrl: "https://github.com/luciaduque248/PensumUnicauca",
        category: "Web App"
    },
    {
        id: 15,
        name: "CafeCom — Mobile App",
        description:
            "Aplicación móvil Android orientada a caficultores registrados en la plataforma. Integra autenticación, perfiles, gestión de lotes, protocolos e información del café, con Firebase/Firestore y carga de imágenes en Cloudinary. El desarrollo prioriza una experiencia usable en contextos rurales y conectividad limitada.",
        image: cafecomMobileImg,
        technologies: [
            "React Native",
            "Expo",
            "TypeScript",
            "Firebase",
            "Firestore",
            "Cloudinary"
        ],
        demoUrl: null,
        githubUrl: null,
        category: "Mobile App"
    },
    {
        id: 16,
        name: "ServiChat — Mobile App",
        description:
            "Aplicación móvil para la gestión y comunicación de clínicas y consultorios. El proyecto adapta la experiencia de WhatSender a móvil e integra recordatorios, toma de citas, envíos masivos y diagnóstico, con flujos diferenciados para propietarios, administradores, profesionales y pacientes. Actualmente se encuentra en fase de diseño funcional y UX/UI.",
        image: servichatMobileImg,
        technologies: [
            "Figma",
            "UX/UI Design",
            "Mobile UX",
            "User Flows",
            "Prototyping"
        ],
        demoUrl: null,
        githubUrl: null,
        category: "Mobile App"
    }
];

export const skills = {
    frameworks: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "▲" },
        { name: "Vue.js", level: 85, icon: "💚" },
        { name: "Tailwind CSS", level: 95, icon: "🎨" },
        { name: "Figma", level: 90, icon: "🎭" },
        { name: "Firebase", level: 80, icon: "🔥" },
        { name: "Git", level: 85, icon: "📦" },
        { name: "Framer Motion", level: 85, icon: "🎬" }
    ],
    languages: [
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "TypeScript", level: 90, icon: "🔷" },
        { name: "HTML5", level: 98, icon: "🧡" },
        { name: "CSS3", level: 95, icon: "💙" },
        { name: "Python", level: 70, icon: "🐍" },
        { name: "SQL", level: 75, icon: "🗄️" }
    ]
};

export const roles = [
    {
        title: "Frontend",
        description: "Implementación de interfaces responsive, componentes y flujos de producto en web.",
        skills: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
        title: "UX/UI",
        description: "Diseño de flujos, jerarquía visual, prototipos y sistemas de interfaz en Figma.",
        skills: ["Figma", "User Flows", "Prototyping"]
    },
    {
        title: "Mobile Apps",
        description: "Experiencias móviles con foco en interacción táctil, Android y adaptación entre dispositivos.",
        skills: ["React Native", "Expo", "Firebase"]
    }
];

export const achievements = [
    {
        number: "3+",
        label: "Años construyendo interfaces",
        description: "Diseño y desarrollo en proyectos web y móviles"
    },
    {
        number: "10+",
        label: "Proyectos en portafolio",
        description: "Producto, frontend, UX/UI y aplicaciones"
    },
    {
        number: "3",
        label: "Áreas conectadas",
        description: "Frontend · UX/UI · Mobile"
    }
];

export const values = [
    {
        title: "Diseño antes de decorar",
        description: "La jerarquía, el flujo y el propósito de cada elemento deben estar claros antes de añadir efectos visuales."
    },
    {
        title: "Interacción que responde",
        description: "Los controles deben dar feedback inmediato y el movimiento debe acompañar la intención de la persona, no competir con ella."
    },
    {
        title: "Código que sostiene el diseño",
        description: "La implementación debe conservar el detalle visual sin sacrificar accesibilidad, rendimiento ni mantenimiento."
    }
];