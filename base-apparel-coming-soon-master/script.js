const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", e => {
  e.preventDefault();

  const emailVal = email.value;

  // Check if it is a valid email address
  if (!validateEmail(emailVal)) {
    form.classList.add("error");
    // form.classList.remove("success");
  } else {
    form.classList.remove("error");
    // form.classList.add("success");
    document.body.innerHTML = `
      <div style="height: 100vh; display: flex; align-items: center; justify-content: center;">
          <h1 style="font-size: 5rem;">Thank you !</h1>
      </div>
    `;
  }
});

validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
