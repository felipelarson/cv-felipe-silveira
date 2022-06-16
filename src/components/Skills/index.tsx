const techs_list = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Python",
  "TypeScript",
  "React",
  "Redux",
  "ContextAPI",
  "Git",
  // "GitFlow",
  "CodeIgniter",
  "Flask",
  "NodeJS",
  "Express",
  "Django",
  "MySql",
  "Postegresql",
  "MongoDB",
  "Jest",
  "API Rest",
  "Inglês - B1",
];


export const Skills = () => (
  <article>
    <h2>qualificações</h2>

    <ul className="skills">
      {
        techs_list.map((elm, idx) => {
          return (
            <li key={idx}>{elm}</li>
          )
        })
      }
    </ul>
  </article>
)