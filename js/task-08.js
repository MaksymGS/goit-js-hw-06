const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;

  if (email.value !== "" && password.value !== "") {
    console.log({ Email: email.value, Password: password.value });
    evt.currentTarget.reset();
  } else {
    alert("Заповніть всі елементи форми");
  }
}
