import { useLanguage } from "../../i18n";

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <article>
      <h2 className="section-title">
        <i className="fa-solid fa-address-card"></i>
        {t.contact}
      </h2>
      <div className="contact-list">
        <a href="mailto:felipelarson@gmail.com" className="contact-item">
          <span className="contact-icon">
            <i className="fa-solid fa-envelope"></i>
          </span>
          <span className="contact-text">felipelarson@gmail.com</span>
        </a>

        <a href="tel:+351968445348" className="contact-item">
          <span className="contact-icon">
            <i className="fa-solid fa-phone"></i>
          </span>
          <span className="contact-text">+351 968 445 348</span>
        </a>

        <a
          href="https://www.linkedin.com/in/felipe-larson-da-silveira/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <span className="contact-icon">
            <i className="fa-brands fa-linkedin-in"></i>
          </span>
          <span className="contact-text">/felipe-larson-da-silveira</span>
        </a>

        <a
          href="https://www.github.com/felipelarson"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <span className="contact-icon">
            <i className="fa-brands fa-github"></i>
          </span>
          <span className="contact-text">/felipelarson</span>
        </a>
      </div>
    </article>
  );
};
