// Part 2: Functions — Scope, Parameters & Return Values

// Global variable
let animationCount = 0;

// Function with parameters + return value
function addNumbers(a, b) {
  return a + b;
}

// Local scope example
function logAnimation() {
  let message = `Animation #${animationCount} triggered`;
  console.log(message); // local variable "message"
}

// DOM Elements
const animateBox = document.getElementById("animateBox");
const animateBtn = document.getElementById("animateBtn");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");

// Part 3: Combine CSS + JS
animateBtn.addEventListener("click", () => {
  animationCount = addNumbers(animationCount, 1); // using function
  animateBox.classList.add("move");

  // Remove class after animation ends so it can restart
  animateBox.addEventListener("animationend", () => {
    animateBox.classList.remove("move");
  });

  logAnimation();
});

// Modal logic
openModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

