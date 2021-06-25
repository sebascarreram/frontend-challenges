const btnHamburger = document.querySelector(".nav--hamburger");
const nav = document.querySelector(".nav--top");

btnHamburger.addEventListener("click", (e) => {
  nav.classList.toggle("nav--top--open");
});
