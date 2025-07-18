const loginForm = document.querySelector(".login-form");
const input = document.querySelectorAll("input");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const userData = {};

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  userData.email = email;
  userData.password = password;

  form.reset();

  console.log(userData);
}
