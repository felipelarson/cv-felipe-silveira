import { useLanguage } from "../../i18n";

const frontendSkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Sass",
  "Zustand",
  "React Query",
  "React Hook Form",
];

const backendSkills = [
  "Node.js",
  "NestJS",
  "Strapi",
  "PostgreSQL",
  "MongoDB",
  "REST API",
];

const toolsSkills = [
  "Git",
  "AWS (S3, Lambda)",
  "Mapbox GL",
  "Google Maps API",
  "Plotly.js",
  "Docker",
  "Biome",
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
        <p className="skills-category-title">{t.tools}</p>
        <div className="skills-grid">
          {toolsSkills.map((skill) => (
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
