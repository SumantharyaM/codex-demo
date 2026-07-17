const form = document.querySelector("#contact-form");
const message = document.querySelector("#form-message");

if (form) {
  document.querySelector("#year").textContent = new Date().getFullYear();
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = new FormData(form).get("name");
    message.textContent = `Thank you, ${name}. A grandpal care coordinator will call you soon.`;
    form.reset();
  });
}
