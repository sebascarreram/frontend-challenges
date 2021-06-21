const lists = document.getElementById("lists");
import { cardList } from "./cardList.js";

window.addEventListener("resize", (e) => {
  if (e.target.innerWidth < 600) {
    kindFolder = "mobile";
    //    console.log("Yes, alo?");
  }
  //  abb(kindFolder);
  //  console.log(e.target.innerWidth);
});
cardList.forEach(({ name, image }) => {
  const li = document.createElement("li");
  li.className = "card__item";

  li.innerHTML = `
    <picture>
      <source
        srcset="./images/mobile/${image}" 
        media="(max-width: 37.5em)"
        >
      <img
        src="./images/desktop/${image}" 
        alt="${name}" 
        class="card__img"
        >
    </picture>
    <p class="card__text heading-tertiary">${name}</p>
  `;
  lists.appendChild(li);
});

//     <img class="card__img" style="${styleImage}" alt="${name}"/>
