const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", handlerSearch);

function handlerSearch(evt) {
  if (evt.currentTarget.value !== "") {
    outputName.textContent = evt.currentTarget.value;
  } else {
    outputName.textContent = "Anonymous";
  }
}
