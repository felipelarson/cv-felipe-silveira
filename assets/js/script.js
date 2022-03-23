let buttonPrint = document.querySelector("#btn_print_page");

buttonPrint.addEventListener("click", function (evt) {
  evt.preventDefault();
  window.print();
});

const localAge = document.querySelector("#age");
let today = new Date();
let age = today.getFullYear() - 1980;
localAge.innerHTML = age;

const techs = (receive_tech) => {
  const ul = document.querySelector(".skills");

  const li = document.createElement("li");
  li.innerText = receive_tech;

  ul.appendChild(li);
};

const techs_list = [
  "HTML 5",
  "CSS 3",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "ContextAPI",
  "Jest",
  "CyPress",
  "Git",
  "GitFlow",
  "PHP",
  "CodeIgniter",
  "Python",
  "Flask",
  "MySql",
  "Postegresql",
  "MongoDB",
  "NodeJS",
  "Inglês - B1",
];

techs_list.map((tech) => techs(tech));
