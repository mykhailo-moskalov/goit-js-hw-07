function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");

const colorChangeButton = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

colorChangeButton.addEventListener("click", () => {
  const randomHexColor = getRandomHexColor();

  body.style.backgroundColor = `${randomHexColor}`;

  colorName.textContent = randomHexColor;
});
