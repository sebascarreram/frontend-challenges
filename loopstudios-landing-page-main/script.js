const lists = document.getElementById("lists");
import { cardList } from "./cardList.js";

cardList.forEach(({ name, image }) => {
  const li = document.createElement("li");
  li.className = "card__item";
  const styleImage = `
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('./images/desktop/${image}')
  `;

  li.innerHTML = `
    <img class="card__img" style="${styleImage}"/>
    <p class="card__text heading-tertiary">${name}</p>
  `;
  lists.appendChild(li);
});
