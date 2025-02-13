let sum = (a, b) => a + b;

let substract = (a, b) => a - b;

let multiply = (a, b) => a * b;

let divide = (a, b) => a / b;

let num1 = 0;

let oper = undefined;

let num2 = 0;

let chosen = undefined;

let first = undefined;

let second = undefined;

let operator = (num1, oper, num2) => oper(num1, num2); 


const display = document.querySelector(".display")

const clear = document.querySelector("#clear")

clear.addEventListener("click", () => {
    display.textContent = undefined;
    first = undefined;
  });

const plus = document.querySelector("#sum")

plus.addEventListener("click", () => {
    first = Number(display.textContent)
    display.textContent = undefined;
    chosen = sum;
  });

const one = document.querySelector("#one");

one.addEventListener("click", () => {
    display.textContent += 1
  });

const two = document.querySelector("#two");

two.addEventListener("click", () => {
    display.textContent += 2
  });

const operate = document.querySelector("#operate");

operate.addEventListener("click", () => {
    second = Number(display.textContent);
    display.textContent = operator(first, chosen, second)
  });

