const body = document.querySelector("body");
const firstTheme = document.querySelector("#first");
const secondTheme = document.querySelector("#second");
const thirdTheme = document.querySelector("#third");
const ball = document.querySelector(".ball");

firstTheme.addEventListener("click", () => {
  ball.style.left = "4px";
  body.classList.add("theme1");
  body.classList.remove("theme2");
  body.classList.remove("theme3");
});

secondTheme.addEventListener("click", () => {
  ball.style.left = "35px";
  body.classList.remove("theme1");
  body.classList.add("theme2");
  body.classList.remove("theme3");
});

thirdTheme.addEventListener("click", () => {
  ball.style.left = "60px";
  body.classList.remove("theme1");
  body.classList.add("theme3");
  body.classList.remove("theme2");
});
