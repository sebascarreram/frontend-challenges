let acc = document.getElementsByClassName("titleSub");
let i;
//console.log(acc);
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* 
     Toggle between adding and removing the "active" class,
     to highlight the button that controls the panel
      */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    //console.log(this.nextElementSibling);
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
