import { FC } from "react";
import { useLanguage } from "../../i18n";
import profileImage from "../../img/Foto_perfil.jpeg";

export const Header: FC = () => {
  const { lang, t, toggleLang } = useLanguage();

  return (
    <header className="cv-header">
      <div className="header-actions no-print">
        <button className="print-btn no-print" onClick={() => window.print()}>
          <i className="fa-solid fa-print"></i>
          {t.printBtn}
        </button>
        <div className="lang-toggle">
          <button
            className={`lang-btn ${lang === "pt" ? "active" : ""}`}
            onClick={lang !== "pt" ? toggleLang : undefined}
          >
            PT
          </button>
          <button
            className={`lang-btn ${lang === "en" ? "active" : ""}`}
            onClick={lang !== "en" ? toggleLang : undefined}
          >
            EN
          </button>
        </div>
      </div>

      <div className="header-content">
        <div className="header-avatar-ring">
          <img src={profileImage} alt="Felipe L. Silveira" />
        </div>
        <div className="header-info">
          <h1 className="header-name">Felipe L. Silveira</h1>
          <p className="header-role">{t.role}</p>
          <p className="header-location">
            <i className="fa-solid fa-location-dot"></i>
            {t.location}
          </p>
        </div>
      </div>
    </header>
  );
};
