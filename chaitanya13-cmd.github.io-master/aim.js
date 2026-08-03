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
let bestScore = localStorage.getItem("aimBest") || 0;
let xp = Number(localStorage.getItem("playerXP")) || 0;

document.getElementById("playerXP").innerText = xp;

document.getElementById("playerLevel").innerText =
Math.floor(xp / 100) + 1;

document.getElementById("bestScore").innerText = bestScore;

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

    target.addEventListener("click",()=>{

score++;

scoreText.innerText=score;

const msgs=[

"🔥 Nice!",

"⚡ Great Shot!",

"🎯 Perfect!",

"💥 Boom!",

"🚀 Awesome!",

"👑 Insane!"

];

result.innerText=

msgs[Math.floor(Math.random()*msgs.length)];

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
let earnedXP = score * 2;

xp += earnedXP;

localStorage.setItem("playerXP", xp);

document.getElementById("playerXP").innerText = xp;

document.getElementById("playerLevel").innerText =
Math.floor(xp / 100) + 1;

let newRecord = false;

if (score > bestScore) {

    bestScore = score;

    localStorage.setItem("aimBest", bestScore);

    document.getElementById("bestScore").innerText = bestScore;

    newRecord = true;

}
    clearInterval(timer);

    area.innerHTML = "";

    let stars = "⭐";

    if(score>=30) stars="⭐⭐⭐⭐⭐";
    else if(score>=25) stars="⭐⭐⭐⭐";
    else if(score>=18) stars="⭐⭐⭐";
    else if(score>=10) stars="⭐⭐";

    let message="😈 Keep Practicing!";

    if(score>=30)
        message="👑 LEGENDARY AIM!";
    else if(score>=25)
        message="🔥 Amazing Aim!";
    else if(score>=18)
        message="🎯 Great Job!";
    else if(score>=10)
        message="💪 Nice Try!";

    result.innerHTML = `

<h2>🎉 GAME OVER</h2>

${newRecord ? "<h2 style='color:gold;'>🏆 NEW HIGH SCORE!</h2>" : ""}

<h3>🎯 Score : ${score}</h3>

<h3>🏆 Best : ${bestScore}</h3>

<h3>${stars}</h3>

<p>${message}</p>

<h3>⭐ XP Earned : +${earnedXP}</h3>

<h3>🎖 Level : ${Math.floor(xp/100)+1}</h3>

<br>

<button id="restartGame">

🔄 Play Again

</button>

`;

document.getElementById("restartGame")
.addEventListener("click",()=>{

startBtn.click();

});

      }

    }, 1000);

  });

});
