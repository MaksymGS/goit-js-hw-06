const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const valueSet = document.querySelector("#value")

btnDecrement.addEventListener('click', handlerClick);
btnIncrement.addEventListener('click', handlerClick);

let counterValue = 0;

function handlerClick (evt) {
counterValue += Number(evt.currentTarget.textContent);
valueSet.innerHTML = `<span id="value">${counterValue}</span>`
}
