if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

function init() {
}

document.addEventListener("DOMContentLoaded", () => {

  const data = [
    { emoji: "🇮🇳 🕌 🛕 🍛", answer: "india" },
    { emoji: "🇺🇸 🗽 🍔 🎬", answer: "usa" },
    { emoji: "🇯🇵 🗼 🍣 🎮", answer: "japan" },
    { emoji: "🇫🇷 🗼 🥐 🧀", answer: "france" },
    { emoji: "🇧🇷 ⚽ 🌴 🎉", answer: "brazil" },
    { emoji: "🇮🇹 🍕 🏛️ 🎭", answer: "italy" },
    { emoji: "🇨🇳 🧧 🏯 🥢", answer: "china" }
  ];

  const emojiEl = document.getElementById("countryEmoji");
  const input = document.getElementById("countryInput");
  const checkBtn = document.getElementById("checkCountry");
  const nextBtn = document.getElementById("nextCountry");
  const result = document.getElementById("countryResult");

  if (!checkBtn || !nextBtn) return;

  let current = null;

  function loadCountry() {
    current = data[Math.floor(Math.random() * data.length)];
    emojiEl.innerText = current.emoji;
    result.innerText = "";
    input.value = "";
  }

  checkBtn.addEventListener("click", () => {
    if (!input.value) {
      result.innerText = "😐 Naam toh likh bro";
      return;
    }

    if (input.value.trim().toLowerCase() === current.answer) {
      result.innerText = "🎉 Correct! GG 🌍";
      result.style.color = "lime";
    } else {
      result.innerText = "❌ Nope! Try again 😈";
      result.style.color = "red";
    }
  });

  nextBtn.addEventListener("click", loadCountry);


  loadCountry();

});

