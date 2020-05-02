const form = document.getElementById("form");

form.addEventListener("submit", e => {
  e.preventDefault();

  const firstName = form["firstname"].value;
  const lastName = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  // alert(firstName);

  if (!firstName) {
    addErrorTo("firstname", "First name is required");
  } else {
    removeErrorTo("firstname");
  }

  if (!lastName) {
    addErrorTo("lastname", "Last name is required");
  } else {
    removeErrorTo("lastname");
  }

  if (!email) {
    addErrorTo("email", "Email is required");
  } else if (!validateEmail(email)) {
    addErrorTo("email", "Email is not valid");
  } else {
    removeErrorTo("email");
  }

  if (!password) {
    addErrorTo("password", "Password is required");
  } else {
    removeErrorTo("password");
  }
});

addErrorTo = (field, message) => {
  const formControl = form[field].parentNode;
  formControl.classList.add("error");

  const small = form[field].parentNode.querySelector("small");
  // const error = form[field].parentNode.querySelector("img");

  // small.style.opacity = "1";
  // error.style.opacity = "1";

  small.innerHTML = message;
};

removeErrorTo = field => {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");

  // const small = formControl.querySelector("small");
  // const error = form[field].parentNode.querySelector("img");

  // small.style.opacity = "0";
  // error.style.opacity = "0";
};

validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
