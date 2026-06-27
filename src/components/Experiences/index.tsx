import { useLanguage } from "../../i18n";

export const Experiences = () => {
  const { t } = useLanguage();

  return (
    <article>
      <h2 className="section-title">
        <i className="fa-solid fa-briefcase"></i>
        {t.experience}
      </h2>
      <div className="experience-list">
        {t.experienceItems.map((exp, i) => (
          <div className="experience-card" key={i}>
            <div className="experience-header">
              <span className="experience-company">{exp.company}</span>
              <span className="experience-period">{exp.period}</span>
            </div>
            {"context" in exp && exp.context && (
              <p className="experience-context">{exp.context}</p>
            )}
            <p className="experience-role">{exp.role}</p>
            <ul className="experience-desc">
              {exp.description.map((desc, j) => (
                <li key={j}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
};
