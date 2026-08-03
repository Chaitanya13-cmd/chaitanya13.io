if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

function init() {
  // 👇 existing code yahin rahega
}

document.addEventListener("DOMContentLoaded", () => {

  const area = document.getElementById("dotArea");
  const startBtn = document.getElementById("startDots");
  const checkBtn = document.getElementById("checkDots");
  const input = document.getElementById("dotGuess");
  const result = document.getElementById("dotResult");

  if (!startBtn || !checkBtn) return;

  let count = 0;

  startBtn.addEventListener("click", () => {
    area.innerHTML = "";
    result.innerText = "";
    input.value = "";

    count = Math.floor(Math.random() * 11) + 5; // 5–15 dots

    for (let i = 0; i < count; i++) {
      const dot = document.createElement("div");
      dot.className = "dot";
      dot.style.left = Math.random() * 90 + "%";
      dot.style.top = Math.random() * 90 + "%";
      area.appendChild(dot);
    }

    // hide after 1 sec
    setTimeout(() => {
      area.innerHTML = "";
    }, 1000);
  });

  checkBtn.addEventListener("click", () => {
    if (!input.value) {
      result.innerText = "😐 Number toh daal bro";
      return;
    }

    if (Number(input.value) === count) {
      result.innerText = "🔥 Correct! Memory OP 🧠";
      result.style.color = "lime";
    } else {
      result.innerText = `💀 Wrong! It was ${count}`;
      result.style.color = "red";
    }
  });

});


