const ExperiencesMock = [
  {
    company: "GML Transmission Solutions (Enline transmission)",
    period: "06/2022 - atualmente",
    role: "Desenvolvedor Fullstack",
    description: [
      "Desenvolvimento de novas funcionalidades",
      "Manutenção de sistemas",
      "Suporte aos usuários",
    ],
  },
  {
    company: "Kenzie Academy Brasil",
    period: "09/2021 - 12/2021",
    role: "Peer Coach (Monitoria)",
    description: [
      "Suportes Técnicos aos alunos",
      "Correção dos códigos (JavaScript, React, Redux, Typescript)",
      "Acompanhamento pessoal dos alunos",
    ],
  },
];

export const Experiences = () => (
  <>
    <article className="experience">
      <h2>Experiências</h2>
      {ExperiencesMock.map((experience) => (
        <div className="experience__container">
          <h3>
            {experience.company} - {experience.period}
          </h3>
          <p>{experience.role}</p>
          {experience.description.map((description) => (
            <p>{description}</p>
          ))}
        </div>
      ))}
    </article>
  </>
);
