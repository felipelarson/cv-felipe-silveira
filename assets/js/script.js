let buttonPrint = document.querySelector("#btn_print_page");

buttonPrint.addEventListener("click", function (evt) {
  evt.preventDefault();
  window.print();
});
