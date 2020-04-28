const form = document.getElementById("form");

form.addEventListener("submit", e => {
  e.preventDefault();

  const email = form["email"];
  const emailVal = email.value;

  const small = form.querySelector("small");

  // EMPTY
  if (!emailVal) {
    form.classList.add("error");
    small.innerText = "Email cannot be empty";
    small.style.display = "inline-block";
  } else if (!validateEmail(emailVal)) {
    form.classList.add("error");
    small.innerText = "Email is invalid";
    small.style.display = "inline-block";
  } else {
    form.classList.remove("error");
    small.innerText = "";
    small.style.display = "none";
  }
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
