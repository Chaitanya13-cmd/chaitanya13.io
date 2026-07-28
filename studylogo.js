document.addEventListener("DOMContentLoaded", () => {

  const allData = [
    { name: "BYJU'S", logo: "logos/byjus.png" },
    { name: "Unacademy", logo: "logos/unacademy.png" },
    { name: "Vedantu", logo: "logos/vedantu.png" },
    { name: "Next Topper", logo: "logos/nexttopper.png" },
    { name: "Physics Wallah", logo: "logos/physicswallah.png" }
  ];

  let pool = []; 

  const logoImg = document.getElementById("studyLogo");
  const buttons = document.querySelectorAll(".studyBtn");
  const result = document.getElementById("studyResult");
  const nextBtn = document.getElementById("nextStudy");

  function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }

  function resetPool() {
    pool = shuffle([...allData]);
  }

  function loadQuestion() {
    result.innerText = "";

    if (pool.length === 0) resetPool();

    const correct = pool.pop(); 
    logoImg.src = correct.logo;

    const options = shuffle([
      correct.name,
      ...shuffle(allData.filter(d => d.name !== correct.name))
        .slice(0, 3)
        .map(d => d.name)
    ]);

    buttons.forEach((btn, i) => {
      btn.innerText = options[i];
      btn.onclick = () => {
        if (btn.innerText === correct.name) {
          result.innerText = "🎉 Correct! Logo pehchaan OP 😎";
          result.style.color = "lime";
        } else {
          result.innerText = "💀 Wrong! Dhyaan se dekho";
          result.style.color = "red";
        }
      };
    });
  }

  nextBtn.addEventListener("click", loadQuestion);

  resetPool();
  loadQuestion();
});
