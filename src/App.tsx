import "./App.css";
import { LanguageProvider } from "./i18n";
import {
  About,
  Contact,
  Degree,
  Experiences,
  Header,
  LanguageToggle,
  Projects,
  Skills,
} from "./components";

export const App = () => {
  return (
    <LanguageProvider>
      <div className="cv-wrapper">
        <Header />

        <div className="cv-main">
          <aside className="cv-sidebar">
            <Contact />
            <Skills />
            <Degree />
          </aside>

          <div className="cv-content">
            <About />
            <Experiences />
            <Projects />
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
};
