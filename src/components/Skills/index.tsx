const techs_list = [
  'JavaScript',
  'TypeScript',
  'React',
  'NextJS',
  'ContextAPI',
  'NestJS',
  'NodeJS',
  'Strapi',
  'Git',
  'Postegresql',
  'MongoDB',
  'Inglês: Intermediário (B1) - Em progresso',
]

export const Skills = () => (
  <article>
    <h2>skills</h2>

    <ul className="skills">
      {techs_list.map((elm, idx) => {
        return <li key={idx}>{elm}</li>
      })}
    </ul>
  </article>
)
