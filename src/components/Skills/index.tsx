const techs_list = [
  "JavaScript",
  "TypeScript",
  "React",
  "NextJS",
  "ContextAPI",
  "NestJS",
  "NodeJS",
  "Strapi",
  "Git",
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
