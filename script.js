const projects = [
  {
    name: "four-card-feature-section-master",
    youtube_url: "https://www.youtube.com/"
  },
  {
    name: "base-apparel-coming-soon-master",
    youtube_url: "https://www.youtube.com"
  },
  {
    name: "signup-form-master",
    youtube_url: "https://www.youtube.com"
  },
  {
    name: "single-price-grid-component-master",
    youtube_url: "https://www.youtube.com"
  },
  {
    name: "ping-coming-soon-page-master",
    youtube_url: "https://www.youtube.com"
  },
  {
    name: "huddle-landing-page",
    youtube_url: "https://www.youtube.com"
  },
  {
    name: "huddle-landing-page-with-single",
    youtube_url: "https://www.youtube.com"
  },
  {
    name: "fylo-landing-page",
    youtube_url: "https://www.youtube.com"
  }
];

const list = document.getElementById("list");

projects.forEach(({ name, youtube_url }, i) => {
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
      <a target="_blank" href=${youtube_url} class="youtube">
        <li class="fab fa-youtube"></li>
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
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
