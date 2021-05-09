import { projects } from "./projects.js";

const list = document.getElementById("list");

projects.forEach(({ name, github_url: github_url }, i) => {
  const listItem = document.createElement("li");
  listItem.className = "box";
  // listItem.innerHTML = `${i + 1}. ${formatProjectName(name)}`;

  listItem.innerHTML = `
    <a href="/${name}/index.html">
      <img src=/${name}/design/desktop-design.jpg />
      <p>${i + 1}. ${formatProjectName(name)}</p>
    </a>
    <div class="links-container">
      <a href="/${name}/index.html" class="eye">
        <li class="fas fa-eye"></li>
      </a>
      <a target="_blank" href=${github_url} class="github">
        <li class="fab fa-github"></li>
      </a>
    </div>
  `;

  // const linkProject = document.createElement("a");
  // linkProject.href = `/${name}/index.html`;

  // const img = document.createElement("img");
  // img.src = `/${name}/design/desktop-design.jpg`;

  // linkProject.prepend(img);
  // listItem.appendChild(link);
  list.appendChild(listItem);
});

function formatProjectName(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
