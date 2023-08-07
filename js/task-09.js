function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector(".change-color");
const outColor = document.querySelector(".color");
btn.addEventListener("click", handlerClick);
function handlerClick() {
  outColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = outColor.textContent;
}
