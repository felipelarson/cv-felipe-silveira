let buttonPrint = document.querySelector("#btn_print_page");

buttonPrint.addEventListener("click", function (evt) {
  evt.preventDefault();
  window.print();
});

// const localAge = document.querySelector("#age");
// let today = new Date();
// let age = today.getFullYear() - 1980;
// localAge.innerHTML = age;

const techs = (receive_tech) => {
  const ul = document.querySelector(".skills");

  const li = document.createElement("li");
  li.innerText = receive_tech;

  ul.appendChild(li);
};

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

techs_list.map((tech) => techs(tech));
