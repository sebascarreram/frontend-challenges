const input = document.querySelector("input[type=range]");

input.addEventListener(
  "input",
  function (evt) {
    updateInput(input);
  },
  false
);

function updateInput(input) {
  input.style.setProperty("--value", input.value);
}

updateInput(input);
