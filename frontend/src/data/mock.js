// Mock data para el portafolio de Sara Duque
export const personalInfo = {
    name: "Sara Duque",
    title: "Frontend Developer & UI Designer",
    slogan: "Crafting digital experiences with code precision & design innovation",
    bio: "Soy una desarrolladora frontend apasionada por crear experiencias digitales excepcionales. Me especializo en transformar ideas creativas en interfaces funcionales y atractivas, combinando mi amor por el código limpio con un ojo agudo para el diseño.",
    extendedBio: "Con más de 3 años de experiencia en el desarrollo web, he trabajado en proyectos que van desde startups innovadoras hasta empresas establecidas. Mi enfoque se centra en crear soluciones que no solo se vean increíbles, sino que también ofrezcan una experiencia de usuario excepcional.",
    motivation: "Me motiva la intersección entre tecnología y creatividad, donde cada línea de código puede dar vida a una experiencia visual impactante.",
    philosophy: "Creo firmemente que el mejor código es aquel que es elegante, mantenible y accesible. Cada proyecto es una oportunidad para aprender algo nuevo y superar los límites de lo que es posible en el desarrollo web.",
    avatar: "https://customer-assets.emergentagent.com/job_futuredev-hub/artifacts/luotwcgt_Sara.gif",
    email: "sara.duque@email.com",
    linkedin: "https://linkedin.com/in/saraduque",
    github: "https://github.com/saraduque"
};

export const projects = [
    {
        id: 1,
        name: "EcoTracker Dashboard",
        description: "Dashboard interactivo para seguimiento de huella de carbono con visualizaciones en tiempo real",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
        technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
        demoUrl: "https://demo-ecotracker.com",
        githubUrl: "https://github.com/saraduque/ecotracker",
        category: "Web App"
    },
    {
        id: 2,
        name: "FinTech Mobile UI",
        description: "Diseño y desarrollo de interfaz móvil para aplicación de banca digital con animaciones fluidas",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
        technologies: ["React Native", "Framer Motion", "Figma", "TypeScript"],
        demoUrl: "https://demo-fintech.com",
        githubUrl: "https://github.com/saraduque/fintech-ui",
        category: "Mobile"
    },
    {
        id: 3,
        name: "AI Content Generator",
        description: "Plataforma web para generación de contenido usando IA con interfaz intuitiva y moderna",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
        technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
        demoUrl: "https://demo-aicontent.com",
        githubUrl: "https://github.com/saraduque/ai-content",
        category: "AI/ML"
    },
    {
        id: 4,
        name: "E-Learning Platform",
        description: "Plataforma educativa interactiva con sistema de progreso y gamificación",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
        technologies: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
        demoUrl: "https://demo-elearning.com",
        githubUrl: "https://github.com/saraduque/elearning",
        category: "Education"
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
        number: "50+",
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