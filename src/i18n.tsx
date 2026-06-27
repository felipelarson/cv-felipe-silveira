import React, { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "pt" | "en";

const translations = {
    pt: {
        // Header
        role: "Engenheiro de Software · Full Stack & Integração com IA",
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
            "Engenheiro de Software Full Stack com 4+ anos entregando aplicações de produção com processamento de dados em tempo real, arquitetura serverless na AWS e APIs RESTful robustas. Nos últimos anos, desenvolvi expertise prática em integração de LLMs (OpenAI e Claude API), construção de aplicações full stack com IA e fundamentos de prompt engineering. Stack principal: React/Next.js, TypeScript, NestJS e AWS (Lambda, S3, API Gateway) — com foco crescente em AI-powered applications.",

        // Education
        educationItems: [
            {
                school: "DeepLearning.AI / Coursera",
                course: "LLMs & Prompt Engineering",
                period: "2024 — 2025",
            },
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
                context: "Startup de software desenvolvendo plataforma SaaS de monitoramento e análise de dados em tempo real para infraestrutura crítica — atendendo operadores enterprise na Europa.",
                period: "06/2022 — Presente",
                role: "Desenvolvedor Full Stack",
                description: [
                    "Desenvolveu módulo de detecção e visualização de anomalias em tempo real integrando Plotly com AWS Lambda, processando streams contínuos de dados de sensores IoT e reduzindo o tempo de diagnóstico de horas para minutos.",
                    "Construiu dashboard operacional em tempo real com Next.js, TypeScript, SASS e Plotly, processando dados de sensores via funções Lambda para otimizar decisões críticas de capacidade em escala.",
                    "Projetou e manteve a API RESTful central da plataforma (EMS) com NestJS, TypeScript, MongoDB e AWS S3 — backbone de 3+ produtos internos e integrações com clientes externos.",
                    "Implantou plataforma de questionários dinâmicos com Next.js, Strapi (CMS headless) e AWS S3, substituindo processo manual em papel e reduzindo o tempo de coleta dos usuários de campo em ~60%.",
                    "Construiu o site institucional do zero com Next.js, TypeScript e Chakra UI, entregando produto responsivo e acessível com milhares de visitantes mensais.",
                ],
            },
            {
                company: "Kenzie Academy Brasil",
                context: "Maior bootcamp de desenvolvimento Full Stack do Brasil — programa intensivo de 12 meses formando desenvolvedores para o mercado.",
                period: "09/2021 — 12/2021",
                role: "Technical Mentor",
                description: [
                    "Conduziu revisões semanais de código para uma turma de 20+ desenvolvedores júnior em JavaScript, React, Redux e TypeScript, elevando a qualidade média dos projetos da turma.",
                    "Entregou sessões 1:1 de orientação técnica em debugging, arquitetura e boas práticas, acelerando a progressão dos alunos dentro do programa intensivo.",
                    "Identificou padrões de lacunas de conhecimento e reportou feedback curricular aos instrutores, contribuindo para melhorias iterativas no programa.",
                ],
            },
        ],

        // Skills
        frontend: "Frontend",
        backend: "Backend",
        ai: "Inteligência Artificial",
        cloud: "Nuvem",
        databases: "Banco de Dados",
        devops: "DevOps",
        tools: "Ferramentas",

        // Languages
        langItems: [
            { name: "Português", level: "Nativo" },
            { name: "Inglês", level: "Proficiência Profissional" },
            { name: "Espanhol", level: "Básico" },
        ],

        // Projects
        projectItems: [
            {
                name: "[Nome do Projeto AI]",
                description:
                    "Aplicação full stack com integração de LLMs via OpenAI API — [descreva o que faz]. Atualize este campo com o nome e descrição reais do seu projeto.",
                techs: ["Next.js", "TypeScript", "OpenAI API", "Node.js", "React"],
                url: "",
            },
            {
                name: "Plataforma de Monitoramento em Tempo Real",
                description:
                    "Plataforma SaaS com mapas interativos, gêmeos digitais e análise de dados em tempo real para infraestrutura crítica",
                techs: [
                    "Next.js 15",
                    "React 19",
                    "TypeScript",
                    "Tailwind CSS",
                    "Zustand",
                    "Mapbox GL",
                    "Plotly.js",
                    "React Flow",
                ],
                url: "",
            },
            {
                name: "Dashboard Operacional em Tempo Real",
                description:
                    "Dashboard de otimização de capacidade processando streams de dados de sensores IoT via AWS Lambda com visualizações Plotly",
                techs: ["Next.js", "TypeScript", "Sass", "Plotly", "Lambda"],
                url: "",
            },
            {
                name: "API RESTful — Sistema de Gestão de Ativos",
                description: "API backend para plataforma de gestão de ativos com múltiplas integrações",
                techs: ["NestJS", "TypeScript", "MongoDB", "AWS S3"],
                url: "",
            },
            {
                name: "Site Institucional",
                description: "Website institucional moderno e responsivo com foco em acessibilidade e performance",
                techs: ["Next.js", "TypeScript", "Chakra UI"],
                url: "https://www.enline-transmission.com/",
            },
        ],
    },

    en: {
        // Header
        role: "Software Engineer · Full Stack & AI Integration",
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
            "Software Engineer with 4+ years delivering production applications with real-time data processing, AWS serverless architecture, and robust RESTful APIs. Alongside professional work, I've built hands-on expertise integrating LLMs (OpenAI and Claude APIs) into full-stack applications, and completed focused training in prompt engineering and LLM fundamentals. Core stack: React/Next.js, TypeScript, NestJS, and AWS (Lambda, S3, API Gateway) — with a growing focus on AI-powered product development.",

        // Education
        educationItems: [
            {
                school: "DeepLearning.AI / Coursera",
                course: "LLMs & Prompt Engineering",
                period: "2024 — 2025",
            },
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
                context: "Software startup building a SaaS platform for real-time data monitoring and analysis of critical infrastructure — serving enterprise operators across Europe.",
                period: "Jun 2022 — Present",
                role: "Full Stack Developer",
                description: [
                    "Built a real-time anomaly detection and visualization module integrating Plotly with AWS Lambda — processing continuous IoT sensor data streams and cutting diagnosis time from hours to minutes.",
                    "Engineered a real-time operational dashboard with Next.js, TypeScript, SASS, and Plotly, processing live sensor data via Lambda functions to drive critical capacity decisions at scale.",
                    "Designed and maintained the platform's core RESTful API (EMS) using NestJS, TypeScript, MongoDB, and AWS S3 — backbone for 3+ internal products and external client integrations.",
                    "Deployed a dynamic questionnaire platform with Next.js, Strapi (headless CMS), and AWS S3, replacing a paper-based process and cutting data-collection time by ~60%.",
                    "Built the company's public website from scratch with Next.js, TypeScript, and Chakra UI, delivering a responsive, accessible product serving thousands of monthly visitors.",
                ],
            },
            {
                company: "Kenzie Academy Brasil",
                context: "Brazil's leading Full Stack developer bootcamp — 12-month intensive programme training developers for the job market.",
                period: "Sep 2021 — Dec 2021",
                role: "Technical Mentor",
                description: [
                    "Led weekly code reviews for a cohort of 20+ junior developers in JavaScript, React, Redux, and TypeScript, raising average project quality across the group.",
                    "Delivered targeted 1:1 sessions on debugging, architecture decisions, and engineering best practices, accelerating learner progression in a high-intensity programme.",
                    "Identified recurring knowledge gaps and escalated curriculum feedback to instructors, contributing to iterative improvements in course content.",
                ],
            },
        ],

        // Skills
        frontend: "Frontend",
        backend: "Backend",
        ai: "Artificial Intelligence",
        cloud: "Cloud",
        databases: "Databases",
        devops: "DevOps",
        tools: "Tools",

        // Languages
        langItems: [
            { name: "Portuguese", level: "Native" },
            { name: "English", level: "Professional Working Proficiency" },
            { name: "Spanish", level: "Basic" },
        ],

        // Projects
        projectItems: [
            {
                name: "[AI Project Name]",
                description:
                    "Full-stack application integrating LLMs via OpenAI API — [describe what it does]. Update this field with your project's real name and description.",
                techs: ["Next.js", "TypeScript", "OpenAI API", "Node.js", "React"],
                url: "",
            },
            {
                name: "Real-Time Infrastructure Monitoring Platform",
                description:
                    "SaaS platform with interactive maps, digital twins, and real-time data analytics for critical infrastructure operations",
                techs: [
                    "Next.js 15",
                    "React 19",
                    "TypeScript",
                    "Tailwind CSS",
                    "Zustand",
                    "Mapbox GL",
                    "Plotly.js",
                    "React Flow",
                ],
                url: "",
            },
            {
                name: "Real-Time Operational Dashboard",
                description:
                    "Capacity optimisation dashboard processing live IoT sensor data streams via AWS Lambda with Plotly visualizations",
                techs: ["Next.js", "TypeScript", "Sass", "Plotly", "Lambda"],
                url: "",
            },
            {
                name: "RESTful API — Asset Management System",
                description: "Backend API for a multi-product asset management platform with external integrations",
                techs: ["NestJS", "TypeScript", "MongoDB", "AWS S3"],
                url: "",
            },
            {
                name: "Corporate Website",
                description: "Modern, accessible company website focused on performance and brand alignment",
                techs: ["Next.js", "TypeScript", "Chakra UI"],
                url: "https://www.enline-transmission.com/",
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
