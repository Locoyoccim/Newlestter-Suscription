(function () {})();
let validar = document.querySelector(".button");
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let FirstSection = document.getElementById("seccion_1");
let SecondSection = document.getElementById("seccion_2");
let input = document.querySelector("input");
let confirmButton = document.getElementById("dimiss_button");

validar.addEventListener("click", (e) => {
  e.preventDefault();

  if (emailRegex.test(input.value)) {
    input.classList.remove("correo_invalido");
    FirstSection.classList.add("hidden");
    FirstSection.classList.add("sm:hidden");
    SecondSection.classList.remove("hidden");
    SecondSection.classList.add("sm:grid");
    document.getElementsByClassName("email_user")[0].innerText = input.value;
  } else {
    input.classList.add("correo_invalido");
    document.getElementsByClassName("msj_error")[0].classList.remove("hidden");
    document
      .getElementsByClassName("msj_error")[0]
      .classList.remove("transition-all");
    SecondSection.classList.remove("sm:grid");
    setTimeout(() => {
      input.classList.remove("correo_invalido");
      document.getElementsByClassName("msj_error")[0].classList.add("hidden");
    }, 3000);
  }

  confirmButton.addEventListener("click", () => {
    FirstSection.classList.remove("hidden");
    FirstSection.classList.remove("sm:hidden");
    SecondSection.classList.add("hidden");
    SecondSection.classList.remove("sm:grid");
    input.value = "";
  });
});
