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
            "Desenvolvedor Full Stack com experiência profissional na construção de aplicações web escaláveis utilizando JavaScript, TypeScript, React, Next.js, Node.js e NestJS. Especializado em arquiteturas serverless com AWS Lambda e S3, design de APIs RESTful e bancos de dados NoSQL/SQL. Histórico comprovado de entrega de funcionalidades em produção no setor de energia, com experiência adicional em Python e PHP. Experiente em trabalhar com equipes multifuncionais utilizando metodologias ágeis.",

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
                company: "Enline Transmission (GML Transmission Solutions)",
                period: "06/2022 — Presente",
                role: "Desenvolvedor Full Stack",
                description: [
                    "Desenvolveu e implantou uma plataforma de questionários dinâmicos com Next.js, TypeScript, Strapi (CMS headless) e AWS S3, substituindo um processo manual e reduzindo o tempo de coleta de dados para engenheiros de campo.",
                    "Construiu o site institucional da empresa do zero com Next.js, TypeScript e Chakra UI, entregando um produto totalmente responsivo e acessível alinhado às diretrizes de marca.",
                    "Implementou um módulo de localização de falhas integrando gráficos Plotly com AWS Lambda para computação sob demanda, permitindo que engenheiros identifiquem falhas em linhas de transmissão de alta tensão com precisão visual.",
                    "Desenvolveu um dashboard de Classificação Dinâmica de Linhas (DLR) com Next.js, TypeScript, SASS e Plotly, processando dados de sensores em tempo real via funções Lambda para otimizar decisões de capacidade da rede elétrica.",
                    "Projetou e manteve uma API RESTful (EMS) com NestJS, TypeScript, MongoDB e AWS S3, servindo como backbone para múltiplos produtos internos e integrações externas.",
                    "Prestou suporte contínuo Tier-1/2 a utilizadores internos e externos, reduzindo o tempo médio de resposta para bugs críticos reportados pelas equipes de campo.",
                ],
            },
            {
                company: "Kenzie Academy Brasil",
                period: "09/2021 — 12/2021",
                role: "Technical Mentor (Peer Coach)",
                description: [
                    "Mentorou uma turma de 20+ desenvolvedores júnior por meio de revisões semanais de código em JavaScript, React, Redux e TypeScript, melhorando as pontuações médias dos projetos do grupo.",
                    "Ofereceu orientação personalizada 1:1 sobre debugging, decisões de arquitetura e boas práticas, acelerando a progressão dos alunos no programa intensivo de 12 meses.",
                    "Identificou lacunas recorrentes de conhecimento e encaminhou feedback curricular aos instrutores, contribuindo para melhorias iterativas no conteúdo do curso.",
                ],
            },
        ],

        // Skills
        frontend: "Frontend",
        backend: "Backend",
        cloud: "Nuvem",
        databases: "Banco de Dados",
        devops: "DevOps",
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
            "Full Stack Developer with professional experience building scalable web applications using JavaScript, TypeScript, React, Next.js, Node.js, and NestJS. Proficient in serverless architectures with AWS Lambda and S3, RESTful API design, and NoSQL/SQL databases. Track record of delivering production-grade features in the energy-tech sector, with additional experience in Python and PHP. Experienced working in cross-functional teams using agile methodologies.",

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
                company: "Enline Transmission (GML Transmission Solutions)",
                period: "Jun 2022 — Present",
                role: "Full Stack Developer",
                description: [
                    "Developed and deployed a dynamic questionnaire platform using Next.js, TypeScript, Strapi (headless CMS), and AWS S3, replacing a manual process and reducing data collection time for field engineers.",
                    "Built the company's public website from scratch using Next.js, TypeScript, and Chakra UI, delivering a fully responsive and accessible product aligned with brand guidelines.",
                    "Implemented a fault-location module integrating Plotly charts with AWS Lambda for on-demand computation, enabling engineers to identify high-voltage transmission-line faults with visual precision.",
                    "Engineered a Dynamic Line Rating (DLR) dashboard with Next.js, TypeScript, SASS, and Plotly, processing real-time sensor data via Lambda functions to optimise grid capacity decisions.",
                    "Designed and maintained a RESTful API (EMS) using NestJS, TypeScript, MongoDB, and AWS S3, serving as the backbone for multiple internal products and external integrations.",
                    "Provided ongoing Tier-1/2 user support, reducing average response time for critical bugs reported by field teams.",
                ],
            },
            {
                company: "Kenzie Academy Brasil",
                period: "Sep 2021 — Dec 2021",
                role: "Technical Mentor (Peer Coach)",
                description: [
                    "Mentored a cohort of 20+ junior developers through weekly code reviews in JavaScript, React, Redux, and TypeScript, improving average project scores across the group.",
                    "Delivered personalised 1:1 guidance on debugging, architecture decisions, and best practices, accelerating learner progression in a 12-month intensive bootcamp programme.",
                    "Identified recurring knowledge gaps and escalated curriculum feedback to instructors, contributing to iterative improvements in course content.",
                ],
            },
        ],

        // Skills
        frontend: "Frontend",
        backend: "Backend",
        cloud: "Cloud",
        databases: "Databases",
        devops: "DevOps",
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
