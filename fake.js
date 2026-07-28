if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

function init() {
}

const facts = [
  { text: "The Sun rises in the East.", answer: true },
  { text: "Humans can breathe underwater without help.", answer: false },
  { text: "JavaScript is the same as Java.", answer: false },
  { text: "The Earth revolves around the Sun.", answer: true },
  { text: "2 + 2 = 5", answer: false },
  { text: "Light travels faster than sound.", answer: true },
  { text: "Bananas grow on trees.", answer: false },
  { text: "HTML is a programming language.", answer: false },
  { text: "Water boils at 100°C.", answer: true }
];

let currentFact = null;

const factText = document.getElementById("factText");
const result = document.getElementById("factResult");
const trueBtn = document.getElementById("trueBtn");
const falseBtn = document.getElementById("falseBtn");
const nextBtn = document.getElementById("nextFact");

function loadRandomFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  currentFact = facts[randomIndex];
  factText.innerText = currentFact.text;
  result.innerText = "";
}

trueBtn.addEventListener("click", () => checkAnswer(true));
falseBtn.addEventListener("click", () => checkAnswer(false));

function checkAnswer(choice) {
  if (choice === currentFact.answer) {
    result.innerText = "😎 Correct! Brain OP";
    result.style.color = "lime";
  } else {
    result.innerText = "🤡 Wrong! Fake pakad nahi paya";
    result.style.color = "red";
  }
}

nextBtn.addEventListener("click", loadRandomFact);

// start game
loadRandomFact();

