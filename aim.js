if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

function init() {

}

document.addEventListener("DOMContentLoaded", () => {

  const startBtn = document.getElementById("startAim");
  const area = document.getElementById("aimArea");
  const timeText = document.getElementById("aimTime");
  const scoreText = document.getElementById("aimScore");
  const result = document.getElementById("aimResult");

  if (!startBtn || !area) {
    console.error("Aim Trainer elements missing");
    return;
  }

  let time = 10;
  let score = 0;
  let timer = null;

  function spawnTarget() {
    area.innerHTML = "";

    const target = document.createElement("div");
    target.className = "target";

    const maxX = area.clientWidth - 30;
    const maxY = area.clientHeight - 30;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    target.style.left = x + "px";
    target.style.top = y + "px";

    target.addEventListener("click", () => {
      score++;
      scoreText.innerText = score;
      spawnTarget();
    });

    area.appendChild(target);
  }

  startBtn.addEventListener("click", () => {
    score = 0;
    time = 10;
    scoreText.innerText = score;
    timeText.innerText = time;
    result.innerText = "";

    spawnTarget();

    clearInterval(timer);
    timer = setInterval(() => {
      time--;
      timeText.innerText = time;

      if (time <= 0) {
        clearInterval(timer);
        area.innerHTML = "";
        result.innerText =
          score >= 15 ? "🔥 AIM OP!" : "😈 Aim needs practice";
      }
    }, 1000);
  });

});

