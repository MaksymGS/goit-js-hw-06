const input = document.querySelector("#validation-input");

input.addEventListener("blur", handlerSearch);

function handlerSearch(evt) {
  if (
    Number(evt.currentTarget.dataset.length) === evt.currentTarget.value.length
  ) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
        input.classList.add("invalid");
  }
  console.log(evt.currentTarget.classList);
}
