function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const elements = {
  quantityBox: document.querySelector('#controls'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes')
}
elements.createBtn.addEventListener('click', createBoxes);
elements.destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  elements.boxes.innerHTML = ''
}

function createBoxes() {
  console.log(elements.quantityBox.value);
}