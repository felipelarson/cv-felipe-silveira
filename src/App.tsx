import "./App.css";
import { LanguageProvider } from "./i18n";
import {
  About,
  Degree,
  Experiences,
  Header,
  Projects,
  Skills,
} from "./components";

export const App = () => {
  return (
    <LanguageProvider>
      <div className="cv-wrapper">
        <Header />
        <div className="cv-body">
          <About />
          <Skills />
          <Experiences />
          <Projects />
          <Degree />
        </div>
      </div>
    </LanguageProvider>
  );
};
