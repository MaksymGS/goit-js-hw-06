const input = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

input.addEventListener("input", handlerSearch);

function handlerSearch(evt) {
  output.style.fontSize = `${evt.currentTarget.value}px`;
}
