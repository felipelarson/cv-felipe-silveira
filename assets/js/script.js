let buttonPrint = document.querySelector("#btn_print_page");

buttonPrint.addEventListener("click", function (evt) {
  evt.preventDefault();
  window.print();
});

const localAge = document.querySelector("#age");
let today = new Date();
let age = today.getFullYear() - 1980;
localAge.innerHTML = age;
