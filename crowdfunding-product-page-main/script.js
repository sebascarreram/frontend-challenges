// Get the modal
const modal = document.getElementById("nav");

// Get background modal
const backgroundDark = document.getElementById("background-modal");

// Get Body
const body = document.querySelector("body");

// Get the button that opens the modal
const btn = document.getElementById("btn__hamburger");

// When the user clicks the button
btn.onclick = function () {
	// Show modal
  modal.classList.toggle("nav--active");
	// Show background dark
  backgroundDark.classList.toggle("background-modal--active");
	// Change hamburger to close
  btn.classList.toggle("header__hamburger--active");
	// Active overflow: Hidden
  body.classList.toggle("body--active");
};
