const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (e) => {
  nameOutput.textContent = e.currentTarget.value.trim();
  if (e.currentTarget.value.trim() === "") {
    nameOutput.textContent = "Anonymous";
  }
});
