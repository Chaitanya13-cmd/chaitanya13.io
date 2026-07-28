if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

function init() {
}

const cars = [
  "Audi","BMW2","Mercedes","Toyota","Honda",
  "Hyundai","Kia","Tata","Mahindra","Ford",
  "Chevrolet","Volkswagen","Nissan","Renault",
  "Skoda","Volvo","Jaguar","Porsche",
  "Lamborghini","Ferrari"
];

let unusedCars = [...cars];   
let correctCar = "";
let answered = false;

const carLogo = document.getElementById("carLogo");
const carButtons = document.querySelectorAll(".carBtn");
const carResult = document.getElementById("carResult");
const nextCar = document.getElementById("nextCar");

function loadCarGame() {
  carResult.textContent = "";
  answered = false;

 
  if (unusedCars.length === 0) {
    unusedCars = [...cars];
  }

  const index = Math.floor(Math.random() * unusedCars.length);
  correctCar = unusedCars.splice(index, 1)[0];

  carLogo.src = `assets/car-logos/${correctCar.toLowerCase()}.png`;

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
  if (answered) return; 
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

loadCarGame();



