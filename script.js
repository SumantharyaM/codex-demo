const form = document.querySelector("#contact-form");
const message = document.querySelector("#form-message");

document.querySelector("#year").textContent = new Date().getFullYear();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(form).get("email");
  message.textContent = `Thanks — we'll be in touch at ${email}.`;
  form.reset();
});
