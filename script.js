const form = document.querySelector("#help-form");
const message = document.querySelector("#form-message");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = new FormData(form).get("name").trim();
  message.textContent = `Thank you, ${name}. A GranPal care coordinator will be in touch soon.`;
  form.reset();
});
