const greeting = document.querySelector("#greeting");
const changeTextButton = document.querySelector("#change-text");

changeTextButton.addEventListener("click", () => {
  greeting.textContent = "You clicked the button! ✨";
  changeTextButton.textContent = "Say hello again";
});
