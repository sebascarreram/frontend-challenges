const lists = document.getElementById("lists");
const hamburger = document.querySelector(".nav__hamburger");
import { cardList } from "./cardList.js";

let kindFolder = "desktop";

window.addEventListener("resize", (e) => {
  if (e.target.innerWidth < 600) {
    kindFolder = "mobile";
    //    console.log("Yes, alo?");
  }
  //  abb(kindFolder);
  //  console.log(e.target.innerWidth);
});
function abb(ee) {
  cardList.forEach(({ name, image }) => {
    const li = document.createElement("li");
    li.className = "card__item";

    const styleImage = `
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('./images/${ee}/${image}')
  `;

    li.innerHTML = `
    <img class="card__img" style="${styleImage}"/>
    <p class="card__text heading-tertiary">${name}</p>
  `;
    lists.appendChild(li);
  });
}

abb(kindFolder);

hamburger.addEventListener("click", (e) => {
//  console.log("Alo?");
  hamburger.classList.toggle("nav__hamburger--close");
});
