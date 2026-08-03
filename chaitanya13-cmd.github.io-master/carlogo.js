if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

function init() {
  // 👇 existing code yahin rahega
}

const cars = [
  "Audi","BMW2","Mercedes","Toyota","Honda",
  "Hyundai","Kia","Tata","Mahindra","Ford",
  "Chevrolet","Volkswagen","Nissan","Renault",
  "Skoda","Volvo","Jaguar","Porsche",
  "Lamborghini","Ferrari"
];

let unusedCars = [...cars];   // 👈 repeat control
let correctCar = "";
let answered = false;

const carLogo = document.getElementById("carLogo");
const carButtons = document.querySelectorAll(".carBtn");
const carResult = document.getElementById("carResult");
const nextCar = document.getElementById("nextCar");

function loadCarGame() {
  carResult.textContent = "";
  answered = false;

  // 🔁 reset ONLY after all cars used
  if (unusedCars.length === 0) {
    unusedCars = [...cars];
  }

  // 🎯 pick & REMOVE car
  const index = Math.floor(Math.random() * unusedCars.length);
  correctCar = unusedCars.splice(index, 1)[0];

  carLogo.src = `../car-logos/${correctCar.toLowerCase()}.png`;

  let options = [correctCar];

  while (options.length < 4) {
    let random = cars[Math.floor(Math.random() * cars.length)];
    if (!options.includes(random)) {
      options.push(random);
    }
  }

  options.sort(() => Math.random() - 0.5);

  carButtons.forEach((btn, i) => {
    btn.textContent = options[i];
    btn.disabled = false;
    btn.onclick = () => checkCar(options[i]);
  });
}

function checkCar(selected) {
  if (answered) return; // ❌ double click protection
  answered = true;

  carButtons.forEach(btn => btn.disabled = true);

  if (selected === correctCar) {
    carResult.textContent = "✅ Correct!";
    carResult.style.color = "lightgreen";
  } else {
    carResult.textContent = `❌ Wrong! It was ${correctCar}`;
    carResult.style.color = "salmon";
  }
}

nextCar.onclick = loadCarGame;

// 🚀 first question
loadCarGame();



