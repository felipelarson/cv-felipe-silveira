import "./App.css";
import {
  About,
  Assign,
  Contact,
  Degree,
  Experiences,
  Header,
  Projects,
  Skills,
} from "./components";

export const App = () => {
  return (
    <>
      <Header />

      <main>
        <section>
          <Contact />

          <Degree />

          <Experiences />

          <Assign />
        </section>

        <section className="section2">
          <Skills />

          <About />

          <Projects />
        </section>
      </main>
    </>
  );
};
