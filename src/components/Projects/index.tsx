import { useLanguage } from "../../i18n";

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <article>
      <h2 className="section-title">
        <i className="fa-solid fa-diagram-project"></i>
        {t.projects}
      </h2>
      <div className="projects-grid">
        {t.projectItems.map((project, i) => (
          <div className="project-card" key={i}>
            <h3 className="project-name">
              {project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                  {/* <i className="fa-solid fa-arrow-up-right-from-square"></i> */}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-techs">
              {project.techs.map((tech) => (
                <span className="tech-badge" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};
