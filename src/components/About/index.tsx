import { useLanguage } from "../../i18n";

export const About = () => {
  const { t } = useLanguage();

  return (
    <article>
      <h2 className="section-title">
        <i className="fa-solid fa-user"></i>
        {t.about}
      </h2>
      <p className="about-text">{t.aboutText}</p>
    </article>
  );
};
