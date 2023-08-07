function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const elements = {
  quantityBox: document.querySelector("input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};
let amount = 5;
console.log(elements.quantityBox.value);
elements.createBtn.addEventListener("click", handlerClick);
elements.destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  elements.boxes.innerHTML = "";
}
function handlerClick(amount) {
  createBoxes(amount);
}

function createBoxes(amount) {
  let arr = [];
  for (let i = 0; i <= amount; i += 1) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();
    arr.push(
      `<div style = 'width: ${size}px; height: ${size}px; color = ${color}'></div>`
    );
  }
  console.log(arr);
  let markup = arr.map((el) => el).join("");
  console.log(markup);
  // console.log(elements.quantityBox.value);
  elements.boxes.innertHTML(markup);
}
