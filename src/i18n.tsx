import React, { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "pt" | "en";

const translations = {
    pt: {
        // Header
        role: "Desenvolvedor FullStack",
        location: "Lisboa - Portugal",

        // Section titles
        contact: "Contato",
        education: "Formação",
        experience: "Experiência Profissional",
        skills: "Habilidades",
        about: "Sobre Mim",
        projects: "Projetos",
        languages: "Idiomas",
        printBtn: "Imprimir CV",

        // About
        aboutText:
            "Desenvolvedor Full Stack com experiência em transformar requisitos complexos em soluções robustas e escaláveis, atuando tanto no frontend com Next.js quanto no backend com NestJS. Tenho facilidade em conectar diferentes tecnologias e criar arquiteturas eficientes. Sou movido por desafios técnicos e busco constantemente entregar produtos que agreguem valor real ao negócio.",

        // Education
        educationItems: [
            {
                school: "Kenzie Academy Brasil",
                course: "Desenvolvedor Web Full Stack",
                period: "04/2021 — 04/2022",
            },
            {
                school: "ETIC — Escola de Tecnologias, Inovação e Criação",
                course: "Web Development",
                period: "08/2019 — 07/2020",
            },
        ],

        // Experiences
        experienceItems: [
            {
                company: "GML Transmission Solutions (Enline Transmission)",
                period: "06/2022 — Presente",
                role: "Desenvolvedor Fullstack",
                description: [
                    "Desenvolvimento de novas funcionalidades em plataforma de monitoramento de linhas de transmissão",
                    "Manutenção e evolução de sistemas legados e novos módulos",
                    "Suporte técnico aos utilizadores internos e externos",
                    "Integração com APIs de mapas (Google Maps, Mapbox), gráficos (Plotly) e serviços AWS",
                ],
            },
            {
                company: "Kenzie Academy Brasil",
                period: "09/2021 — 12/2021",
                role: "Peer Coach (Monitoria)",
                description: [
                    "Suporte técnico aos alunos em JavaScript, React, Redux e TypeScript",
                    "Revisão e correção de código",
                    "Acompanhamento personalizado dos alunos",
                ],
            },
        ],

        // Skills
        frontend: "Frontend",
        backend: "Backend",
        tools: "Ferramentas",

        // Languages
        langItems: [
            { name: "Português", level: "Nativo" },
            { name: "Inglês", level: "Intermediário (B1)" },
            { name: "Espanhol", level: "Básico" },
        ],

        // Projects
        projectItems: [
            {
                name: "Grid-Sight",
                description:
                    "Plataforma de monitoramento de redes elétricas com mapas interativos, gêmeos digitais e análise em tempo real",
                techs: [
                    "Next.js 15",
                    "React 19",
                    "TypeScript",
                    "Tailwind CSS",
                    "Zustand",
                    "Mapbox GL",
                    "Google Maps",
                    "Plotly.js",
                    "React Flow",
                ],
                url: "http://questionary-dev.enline-transmission.com/",
            },
            {
                name: "Enline Transmission — Site Institucional",
                description: "Website institucional da empresa com design moderno e responsivo",
                techs: ["Next.js", "TypeScript", "Chakra UI"],
                url: "https://www.enline-transmission.com/",
            },
            {
                name: "Fault Location Module",
                description:
                    "Módulo de localização de falhas em linhas de transmissão com visualização de dados",
                techs: ["Next.js", "TypeScript", "Sass", "Plotly", "AWS S3", "Lambda"],
                url: "https://development.enline-transmission.com/",
            },
            {
                name: "Dynamic Line Rating",
                description:
                    "Sistema de classificação dinâmica de linhas de transmissão com dados meteorológicos",
                techs: ["Next.js", "TypeScript", "Sass", "Plotly", "Lambda"],
                url: "",
            },
            {
                name: "EMS — API RESTful",
                description: "API backend para sistema de gerenciamento de energia",
                techs: ["NestJS", "TypeScript", "MongoDB", "AWS S3"],
                url: "https://ems.enline-transmission.com/login",
            },
        ],
    },

    en: {
        // Header
        role: "FullStack Developer",
        location: "Lisbon - Portugal",

        // Section titles
        contact: "Contact",
        education: "Education",
        experience: "Professional Experience",
        skills: "Skills",
        about: "About Me",
        projects: "Projects",
        languages: "Languages",
        printBtn: "Print CV",

        // About
        aboutText:
            "Full Stack Developer focused on the JavaScript/TypeScript ecosystem, with command of NestJS and Next.js. Experienced in creating end-to-end solutions, I seek to transform complex problems into scalable and efficient systems. My approach combines technical rigor with a mindset oriented towards innovation and business impact.",

        // Education
        educationItems: [
            {
                school: "Kenzie Academy Brasil",
                course: "Full Stack Web Developer",
                period: "04/2021 — 04/2022",
            },
            {
                school: "ETIC — School of Technology, Innovation & Creation",
                course: "Web Development",
                period: "08/2019 — 07/2020",
            },
        ],

        // Experiences
        experienceItems: [
            {
                company: "GML Transmission Solutions (Enline Transmission)",
                period: "06/2022 — Present",
                role: "Fullstack Developer",
                description: [
                    "Development of new features for a power transmission line monitoring platform",
                    "Maintenance and evolution of legacy systems and new modules",
                    "Technical support for internal and external users",
                    "Integration with map APIs (Google Maps, Mapbox), charting (Plotly), and AWS services",
                ],
            },
            {
                company: "Kenzie Academy Brasil",
                period: "09/2021 — 12/2021",
                role: "Peer Coach (Mentoring)",
                description: [
                    "Technical support for students in JavaScript, React, Redux, and TypeScript",
                    "Code review and correction",
                    "Personalized student guidance and follow-up",
                ],
            },
        ],

        // Skills
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools",

        // Languages
        langItems: [
            { name: "Portuguese", level: "Native" },
            { name: "English", level: "Intermediate (B1)" },
            { name: "Spanish", level: "Basic" },
        ],

        // Projects
        projectItems: [
            {
                name: "Grid-Sight",
                description:
                    "Power grid monitoring platform with interactive maps, digital twins, and real-time analytics",
                techs: [
                    "Next.js 15",
                    "React 19",
                    "TypeScript",
                    "Tailwind CSS",
                    "Zustand",
                    "Mapbox GL",
                    "Google Maps",
                    "Plotly.js",
                    "React Flow",
                ],
                url: "http://questionary-dev.enline-transmission.com/",
            },
            {
                name: "Enline Transmission — Corporate Website",
                description: "Company website with modern, responsive design",
                techs: ["Next.js", "TypeScript", "Chakra UI"],
                url: "https://www.enline-transmission.com/",
            },
            {
                name: "Fault Location Module",
                description:
                    "Transmission line fault location module with data visualization",
                techs: ["Next.js", "TypeScript", "Sass", "Plotly", "AWS S3", "Lambda"],
                url: "https://development.enline-transmission.com/",
            },
            {
                name: "Dynamic Line Rating",
                description:
                    "Dynamic transmission line rating system with weather data integration",
                techs: ["Next.js", "TypeScript", "Sass", "Plotly", "Lambda"],
                url: "",
            },
            {
                name: "EMS — RESTful API",
                description: "Backend API for energy management system",
                techs: ["NestJS", "TypeScript", "MongoDB", "AWS S3"],
                url: "https://ems.enline-transmission.com/login",
            },
        ],
    },
} as const;

type Translations = typeof translations.pt;

interface LanguageContextType {
    lang: Lang;
    t: Translations;
    toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: "pt",
    t: translations.pt,
    toggleLang: () => { },
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<Lang>("pt");
    const toggleLang = () => setLang((prev) => (prev === "pt" ? "en" : "pt"));
    const t = translations[lang] as unknown as Translations;

    return (
        <LanguageContext.Provider value={{ lang, t, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
