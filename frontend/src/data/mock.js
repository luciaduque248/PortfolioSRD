import cafecomImg from "../images/CAFECOM.png";
import MiPensumUnicauca from "../images/MiPensum.png";
import AgroinnovaDemo from "../images/agroinnova.png";
import ManageLandingPage from "../images/manageio.png";
// Mock data para el portafolio de Sara Duque
export const personalInfo = {
    name: "Sara Duque",
    title: "Frontend Developer & UI Designer",
    slogan: "Precision Code. Intentional Design. Exceptional Experiences.",
    bio: "Soy una Frontend Developer dedicada a la creación de interfaces donde el diseño y la ingeniería convergen. Mi especialidad es transformar conceptos creativos en productos digitales fluidos, priorizando siempre la armonía entre la estética visual y la eficiencia técnica.",
    extendedBio: "Con más de 3 años de trayectoria, he colaborado con startups y empresas consolidadas para materializar soluciones de alto impacto. Mi enfoque va más allá de escribir código: optimizo la interacción humana con la tecnología, asegurando que cada píxel tenga un propósito y cada transición se sienta natural.",
    motivation: "Me apasiona la intersección entre tecnología y arte; ese punto exacto donde el código limpio da vida a experiencias visuales que impactan y perduran.",
    philosophy: "Creo firmemente que el desarrollo de excelencia es aquel que es elegante, escalable y, sobre todo, accesible. Para mí, cada proyecto es una oportunidad para superar los límites de la web y construir un entorno digital más inclusivo y performante.",
    avatar: "https://customer-assets.emergentagent.com/job_futuredev-hub/artifacts/luotwcgt_Sara.gif",
    email: "luciaduque248@gmail.com",
    linkedin: "www.linkedin.com/in/sara-duque-desarrolladora-frontend",
    github: "https://github.com/luciaduque248"
};

export const projects = [
    // {
    //     id: 1,
    //     name: "EcoTracker Dashboard",
    //     description: "Dashboard interactivo para seguimiento de huella de carbono con visualizaciones en tiempo real",
    //     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    //     technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    //     demoUrl: "https://demo-ecotracker.com",
    //     githubUrl: "https://github.com/saraduque/ecotracker",
    //     category: "Web App"
    // },
    // {
    //     id: 2,
    //     name: "FinTech Mobile UI",
    //     description: "Diseño y desarrollo de interfaz móvil para aplicación de banca digital con animaciones fluidas",
    //     image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
    //     technologies: ["React Native", "Framer Motion", "Figma", "TypeScript"],
    //     demoUrl: "https://demo-fintech.com",
    //     githubUrl: "https://github.com/saraduque/fintech-ui",
    //     category: "Mobile"
    // },
    // {
    //     id: 3,
    //     name: "AI Content Generator",
    //     description: "Plataforma web para generación de contenido usando IA con interfaz intuitiva y moderna",
    //     image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
    //     technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
    //     demoUrl: "https://demo-aicontent.com",
    //     githubUrl: "https://github.com/saraduque/ai-content",
    //     category: "AI/ML"
    // },
    // {
    //     id: 4,
    //     name: "E-Learning Platform",
    //     description: "Plataforma educativa interactiva con sistema de progreso y gamificación",
    //     image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
    //     technologies: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
    //     demoUrl: "https://demo-elearning.com",
    //     githubUrl: "https://github.com/saraduque/elearning",
    //     category: "Education"
    // },
    // {
    //     id: 5,
    //     name: "Health & Wellness App",
    //     description: "Aplicación móvil para seguimiento de hábitos saludables con diseño centrado en el usuario",
    //     image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&h=300&fit=crop",
    //     technologies: ["Flutter", "Dart", "Firebase", "Lottie"],
    //     demoUrl: "https://demo-healthapp.com",
    //     githubUrl: "https://github.com/saraduque/healthapp",
    //     category: "Mobile"
    // },
    {
        id: 6,
        name: "Country Explorer",
        description: "Sitio web para explorar países del mundo, con filtros por nombre y región,",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Flag_Map_of_The_World.png",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        demoUrl: "https://countries-app-eta-seven.vercel.app/",
        githubUrl: "https://github.com/luciaduque248/CountriesApp.git",
        category: "Web App"
    },
    {
        id: 7,
        name: "Music Player",
        description: "Reproductor de música desarrollado con HTML, CSS y JavaScript. Permite reproducir, pausar, cambiar de canción y controlar el progreso de audio con una interfaz moderna y responsive.",
        image: "https://images.unsplash.com/photo-1616356607338-fd87169ecf1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image:
            AgroinnovaDemo,
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
        category: "Web App"
    },
    {
        id: 9,
        name: "CafeCom",
        description: "Diseño UX/UI de una plataforma digital orientada al sector cafetero. El proyecto fue desarrollado en Figma, enfocándose en investigación de usuarios, arquitectura de información y diseño de interfaces para la comercialización y gestión de productos de café. Actualmente en fase de diseño, sin implementación en código.",
        image: cafecomImg,
        technologies: ["Figma", "UX Research", "UI Design", "Prototyping"],
        demoUrl: "https://www.figma.com/proto/F9Fljzi1eZS5S76IIiQtAC/CafeCom?node-id=3-4&p=f&t=1ARjMevGkg2cU5OT-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A20",
        githubUrl: null,
        category: "UX/UI"
    },
    {
        id: 10,
        name: "HOTELIA",
        description: "Diseño UX/UI de una plataforma web para reservas hoteleras. El proyecto aborda el flujo completo de búsqueda, selección de habitaciones, reservas y gestión de estancias, priorizando usabilidad, claridad visual y experiencia del usuario. Desarrollado en Figma como prototipo interactivo.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop",
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
        image:
            ManageLandingPage,
        technologies: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://luciaduque248.github.io/Proyecto-Manage/",
        githubUrl: "https://github.com/luciaduque248/Proyecto-Manage.git",
        category: "Web App",
    },
    {
        id: 12,
        name: "Virtuosa",
        description:
            "Tienda online de ropa y maquillaje orientada a una experiencia de compra elegante y sencilla. Diseño enfocado en identidad de marca, navegación intuitiva y presentación visual de productos.",
        image:
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=300&fit=crop",
        technologies: ["React", "Tailwind CSS", "E-commerce UI"],
        demoUrl: "https://luciaduque248.github.io/VirtuosaCrud/",
        githubUrl: "https://github.com/luciaduque248/VirtuosaCrud.git",
        category: "Web App"
    },
    {
        id: 13,
        name: "Virtuosa",
        description:
            "Tienda online de ropa y maquillaje orientada a una experiencia de compra elegante y sencilla. Diseño enfocado en identidad de marca, navegación intuitiva y presentación visual de productos.",
        image:
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=300&fit=crop",
        technologies: ["Figma", "UX/UI Design", "Prototyping"],
        category: "UX/UI",
        demoUrl: "https://www.figma.com/proto/77kBTXLVhpGbghkWRoRINb/VIRTUOSA?node-id=439-1931&p=f&t=hJKfr0Oc8jl4GpZk-9&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=439%3A1931&show-proto-sidebar=1",
        githubUrl: null,
    },
    {
        id: 14,
        name: "Mi Pensum Interactivo",
        description:
            "Plataforma web para gestionar el progreso académico de Ingeniería Electrónica y Telecomunicaciones en la Universidad del Cauca. Permite consultar el pensum, prerrequisitos, notas, horarios e historial académico, con persistencia de datos e integración por voz mediante Alexa.",
        image: MiPensumUnicauca,
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
        title: "Frontend Developer",
        description: "Desarrollo de interfaces modernas y responsivas",
        icon: "💻",
        skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS"]
    },
    {
        title: "Backend Developer",
        description: "APIs robustas y arquitecturas escalables",
        icon: "⚙️",
        skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
    },
    {
        title: "UX/UI Designer",
        description: "Diseño centrado en el usuario y experiencias intuitivas",
        icon: "🎨",
        skills: ["Figma", "Prototyping", "User Research", "Design Systems"]
    },
    {
        title: "Fullstack Developer",
        description: "Soluciones completas de frontend a backend",
        icon: "🚀",
        skills: ["Full-stack", "DevOps", "CI/CD", "Cloud Deployment"]
    }
];

export const achievements = [
    {
        number: "3+",
        label: "Años de experiencia",
        description: "Desarrollando experiencias digitales"
    },
    {
        number: "10+",
        label: "Proyectos completados",
        description: "Desde startups hasta empresas"
    },
    {
        number: "15+",
        label: "Tecnologías dominadas",
        description: "Frontend, backend y diseño"
    },
    {
        number: "100%",
        label: "Clientes satisfechos",
        description: "Enfoque en calidad y resultados"
    }
];

export const values = [
    {
        title: "Innovación Constante",
        description: "Siempre explorando nuevas tecnologías y metodologías para crear soluciones más eficientes.",
        icon: "💡"
    },
    {
        title: "Código Limpio",
        description: "Escribo código que no solo funciona, sino que es mantenible, escalable y fácil de entender.",
        icon: "✨"
    },
    {
        title: "Experiencia de Usuario",
        description: "Cada decisión de diseño se toma pensando en brindar la mejor experiencia posible al usuario final.",
        icon: "👥"
    }
];