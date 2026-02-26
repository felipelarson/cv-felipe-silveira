import { useLanguage } from "../../i18n";

export const Degree = () => {
  const { t } = useLanguage();

  return (
    <article>
      <h2 className="section-title">
        <i className="fa-solid fa-graduation-cap"></i>
        {t.education}
      </h2>
      <div className="education-list">
        {t.educationItems.map((item, i) => (
          <div className="education-item" key={i}>
            <p className="education-school">{item.school}</p>
            <p className="education-course">{item.course}</p>
            <p className="education-period">{item.period}</p>
          </div>
        ))}
      </div>
    </article>
  );
};
