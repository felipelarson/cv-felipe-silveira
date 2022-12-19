const techs_list = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "NextJS",
  "ContextAPI",
  "Git",
  "NodeJS",
  "Express",
  "Strapi",
  "Postegresql",
  "MongoDB",
  "Inglês - B1",
];

export const Skills = () => (
  <article>
    <h2>qualificações</h2>

    <ul className="skills">
      {techs_list.map((elm, idx) => {
        return <li key={idx}>{elm}</li>;
      })}
    </ul>
  </article>
);
