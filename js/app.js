// selecting the elemensts for the theme

const body = document.querySelector("body");
const firstTheme = document.querySelector("#first");
const secondTheme = document.querySelector("#second");
const thirdTheme = document.querySelector("#third");
const ball = document.querySelector(".ball");

// theme logic

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

// selecting the calculator button

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const resetButton = document.querySelector("[data-all-clear]");
const previousInput = document.querySelector("[data-previous-input]");
const currentInput = document.querySelector("[data-current-input]");

class Calculator {
  constructor(previousInput, currentInput) {
    this.previousInput = previousInput;
    this.currentInput = currentInput;
    this.clear();
  }

  clear() {
    this.currentOpperand = "";
    this.previousOpperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOpperand = this.currentOpperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOpperand.includes(".")) return;
    this.currentOpperand = this.currentOpperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOpperand === "") return;
    if (this.previousOpperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOpperand = this.currentOpperand;
    this.currentOpperand = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOpperand);
    const current = parseFloat(this.currentOpperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "/":
        computation = prev / current;
        break;
      case "*":
        computation = prev * current;
        break;
      default:
        return;
    }

    this.currentOpperand = computation;
    this.operation = undefined;
    this.previousOpperand = "";
  }

  updateDisplay() {
    this.currentInput.textContent = this.currentOpperand;
    this.previousInput.textContent = this.previousOpperand;
  }
}

const calculator = new Calculator(previousInput, currentInput);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.textContent);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.textContent);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

resetButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
