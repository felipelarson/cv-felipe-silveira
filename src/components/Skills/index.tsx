import { useLanguage } from "../../i18n";

const frontendSkills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Sass/SCSS",
  "Zustand",
  "React Query",
  "SSR / SSG",
  "Responsive Design",
];

const backendSkills = [
  "Node.js",
  "NestJS",
  "RESTful API",
  "JWT",
  "Strapi (CMS)",
];

const aiSkills = [
  "OpenAI API",
  "Claude API",
  "Prompt Engineering",
  "LLM Integration",
  "AI-Powered Applications",
  "RAG",
];

const cloudSkills = [
  "AWS Lambda",
  "AWS S3",
  "API Gateway",
  "Serverless Architecture",
  "Event-driven Architecture",
];

const databaseSkills = [
  "PostgreSQL",
  "MongoDB",
  "Mongoose",
  "ORM",
];

const devopsSkills = [
  "Git",
  "GitHub",
  "Docker",
  "CI/CD",
  "Vercel",
];

export const Skills = () => {
  const { t } = useLanguage();

  return (
    <article>
      <h2 className="section-title">
        <i className="fa-solid fa-code"></i>
        {t.skills}
      </h2>

      <div className="skills-category">
        <p className="skills-category-title">{t.frontend}</p>
        <div className="skills-grid">
          {frontendSkills.map((skill) => (
            <span className="skill-badge" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <p className="skills-category-title">{t.backend}</p>
        <div className="skills-grid">
          {backendSkills.map((skill) => (
            <span className="skill-badge" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <p className="skills-category-title">{t.ai}</p>
        <div className="skills-grid">
          {aiSkills.map((skill) => (
            <span className="skill-badge" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <p className="skills-category-title">{t.cloud}</p>
        <div className="skills-grid">
          {cloudSkills.map((skill) => (
            <span className="skill-badge" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <p className="skills-category-title">{t.databases}</p>
        <div className="skills-grid">
          {databaseSkills.map((skill) => (
            <span className="skill-badge" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <p className="skills-category-title">{t.devops}</p>
        <div className="skills-grid">
          {devopsSkills.map((skill) => (
            <span className="skill-badge" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Languages section */}
      <h2 className="section-title" style={{ marginTop: 12 }}>
        <i className="fa-solid fa-globe"></i>
        {t.languages}
      </h2>
      <div className="languages-list">
        {t.langItems.map((item) => (
          <div className="language-item" key={item.name}>
            <span className="language-name">{item.name}</span>
            <span className="language-level">{item.level}</span>
          </div>
        ))}
      </div>
    </article>
  );
};
