const ExperiencesMock = [
  {
    company: "GML Transmission Solutions (Enline transmission)",
    period: "06/2022 - present",
    role: "Fullstack Developer",
    description: [
      "Development of new features",
      "System maintenance",
      "User support",
    ],
  },
  {
    company: "Kenzie Academy Brasil",
    period: "09/2021 - 12/2021",
    role: "Peer Coach (Monitoring)",
    description: [
      "Technical support to students",
      "Code review (JavaScript, React, Redux, TypeScript)",
      "Personalized student guidance",
    ],
  },
];

export const Experiences = () => (
  <>
    <article className="experience">
      {/* <h2>Experiências</h2> */}
      <h2>Experiences</h2>
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
