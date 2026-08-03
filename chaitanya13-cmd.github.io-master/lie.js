if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

function init() {
  // 👇 existing code yahin rahega
}

document.addEventListener("DOMContentLoaded", () => {

  const sets = [
    {
      items: [
        "The Sun is a star",
        "Water boils at 100°C",
        "Humans can breathe underwater"
      ],
      lieIndex: 2
    },
    {
      items: [
        "JavaScript runs in browsers",
        "HTML is a programming language",
        "CSS styles web pages"
      ],
      lieIndex: 1
    },
    {
      items: [
        "Earth revolves around the Sun",
        "Moon produces its own light",
        "Earth has gravity"
      ],
      lieIndex: 1
    },
    {
      items: [
        "2 + 2 = 4",
        "5 × 5 = 25",
        "9 ÷ 0 = 3"
      ],
      lieIndex: 2
    }
  ];

  const items = document.querySelectorAll(".lieItem");
  const result = document.getElementById("lieResult");
  const nextBtn = document.getElementById("nextLie");

  if (!items.length || !nextBtn) return;

  let currentLie = 0;

  function loadLie() {
    const pick = sets[Math.floor(Math.random() * sets.length)];
    currentLie = pick.lieIndex;
    result.innerText = "";

    items.forEach((el, i) => {
      el.innerText = pick.items[i];
      el.onclick = () => {
        if (i === currentLie) {
          result.innerText = "🎉 Correct! Lie pakad li 😎";
          result.style.color = "lime";
        } else {
          result.innerText = "💀 Wrong! Ye sach tha 😈";
          result.style.color = "red";
        }
      };
    });
  }

  nextBtn.addEventListener("click", loadLie);

  loadLie();
});


