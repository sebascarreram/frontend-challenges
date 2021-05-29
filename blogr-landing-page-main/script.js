const btn = document.getElementsByClassName("navMobile__btn");
const btnLines = document.querySelector(".navMobile__lines");
const content = document.querySelector(".navMobile__card");
const dark = document.querySelector(".backgroundDark");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    const content = this.nextElementSibling;
    console.log(content);
    content.classList.toggle("active");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

btnLines.addEventListener("click", (e) => {
  console.log(e)
  content.classList.toggle("active")
  btnLines.classList.toggle("close");
  dark.classList.toggle("backgroundDark--active");
})
