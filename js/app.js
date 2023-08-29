const body = document.querySelector("body");

const firstTheme = document.querySelector("#first");
const secondTheme = document.querySelector("#second");
const thirdTheme = document.querySelector("#third");

const radios = document.querySelector(".radios");

const ball = document.querySelector(".ball");

const screen = document.querySelector(".calculator__screen");

firstTheme.addEventListener("click", () => {
  ball.style.left = "4px";
  body.style.backgroundColor = " hsl(222, 26%, 31%)";
  ball.style.backgroundColor = " hsl(6, 63%, 50%)";
  radios.style.backgroundColor = "hsl(223, 31%, 20%)";
  screen.style.backgroundColor = " hsl(224, 36%, 15%)";
});

secondTheme.addEventListener("click", () => {
  ball.style.left = "35px";
  body.style.backgroundColor = "hsl(0, 0%, 90%)";
  ball.style.backgroundColor = " hsl(25, 98%, 40%)";
  radios.style.backgroundColor = "hsl(0, 5%, 81%)";
  screen.style.backgroundColor = " hsl(0, 0%, 93%)";
});

thirdTheme.addEventListener("click", () => {
  ball.style.left = "60px";
  body.style.backgroundColor = " hsl(268, 75%, 9%)";
  ball.style.backgroundColor = " hsl(176, 100%, 44%)";
  radios.style.backgroundColor = " hsl(268, 71%, 12%)";
  screen.style.backgroundColor = "hsl(268, 71%, 12%)";
});
