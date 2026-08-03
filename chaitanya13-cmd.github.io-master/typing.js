document.addEventListener("DOMContentLoaded", () => {

  const sentences = [
    "frontend bugs are annoying",
    "practice makes you better",
    "javascript is powerful",
    "typing fast is a skill",
    "debugging builds patience"
  ];

  let startTime = 0;
  let currentSentence = "";

  const sentenceEl = document.getElementById("typingSentence");
  const input = document.getElementById("typingInput");
  const result = document.getElementById("typingResult");
  const startBtn = document.getElementById("startTyping");
  const checkBtn = document.getElementById("checkTyping");

  if (!startBtn || !checkBtn) return;

  startBtn.addEventListener("click", () => {
    currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
    sentenceEl.innerText = currentSentence;
    input.value = "";
    result.innerText = "";
    input.focus();
    startTime = Date.now();
  });

  checkBtn.addEventListener("click", () => {
    if (!input.value) {
      result.innerText = "😐 Type toh kar bro";
      return;
    }

    const timeTaken = (Date.now() - startTime) / 1000;
    const words = currentSentence.split(" ").length;
    const wpm = Math.round((words / timeTaken) * 60);

    if (input.value.trim() === currentSentence) {
      result.innerText = `🔥 Perfect! WPM: ${wpm}`;
      result.style.color = "lime";
    } else {
      result.innerText = `😈 Mistakes detected. WPM: ${wpm}`;
      result.style.color = "red";
    }
  });

});
