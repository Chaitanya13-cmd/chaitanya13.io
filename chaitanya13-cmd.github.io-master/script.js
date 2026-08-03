document.addEventListener("DOMContentLoaded", () => {


  let targetId = "";

  document.querySelectorAll(".game-card").forEach(card => {

    card.addEventListener("click", () => {

        const targetId = card.dataset.target;

        window.location.href = `assets/allgames/${targetId}.html`;

    });

});


});

document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value.trim();
  if (!query) return;

  const q = encodeURIComponent(query);

  document.getElementById("googleLink").href =
    `https://www.google.com/search?q=${q}`;

  document.getElementById("bingLink").href =
    `https://www.bing.com/search?q=${q}`;

  document.getElementById("duckLink").href =
    `https://duckduckgo.com/?q=${q}`;

  document.getElementById("yahooLink").href =
    `https://search.yahoo.com/search?p=${q}`;

  document.getElementById("ecosiaLink").href =
    `https://www.ecosia.org/search?q=${q}`;
});

/* ===============================
   PREMIUM GAMING EFFECTS
================================*/

document.addEventListener("DOMContentLoaded",()=>{

// Create background particles
const particles=document.createElement("div");
particles.id="particles";
document.body.appendChild(particles);

for(let i=0;i<40;i++){

const p=document.createElement("span");

p.style.left=Math.random()*100+"vw";
p.style.top=Math.random()*100+"vh";

p.style.animationDuration=
8+Math.random()*12+"s";

p.style.animationDelay=
Math.random()*5+"s";

particles.appendChild(p);

}

// Mouse glow
const glow=document.createElement("div");
glow.id="mouseGlow";
document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});

// Card hover tilt

document.querySelectorAll(".game-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/15;
const rotateX=(rect.height/2-y)/15;

card.style.transform=
`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(900px) rotateX(0) rotateY(0) scale(1)";

});

});

});
/* ===== Mouse Glow ===== */

const glow = document.createElement("div");
glow.className = "mouse-glow";
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});
/* ===========================
   Floating Particles
=========================== */

const particleContainer = document.getElementById("particles");

for(let i=0;i<40;i++){

    const p=document.createElement("div");

    p.className="particle";

    p.style.left=Math.random()*100+"vw";

    p.style.animationDuration=
        (8+Math.random()*10)+"s";

    p.style.animationDelay=
        Math.random()*8+"s";

    p.style.opacity=Math.random();

    particleContainer.appendChild(p);

}

/* ===========================
Loading Screen
=========================== */

/*=========================
GAME LOADER
=========================*/

window.addEventListener("load",()=>{

const loadingText=document.getElementById("loadingText");

const messages=[

"🎮 Initializing...",

"⚡ Loading Assets...",

"🌍 Preparing Adventure...",

"🎯 Loading Games...",

"🚀 Almost Ready..."

];

let index=0;

const interval=setInterval(()=>{

index++;

if(index<messages.length){

loadingText.textContent=messages[index];

}

},500);

setTimeout(()=>{

clearInterval(interval);

const loader=document.getElementById("loader");

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},700);

},2800);

});
/*=========================
PLAYER PROFILE
=========================*/

let player = JSON.parse(localStorage.getItem("cgzPlayer")) || {

name:"New Gamer",

xp:0,

games:0,

streak:1

};

function updateProfile(){

document.getElementById("playerName").textContent=player.name;

document.getElementById("playerXP").textContent=player.xp;

document.getElementById("gamesPlayed").textContent=player.games;

document.getElementById("playerStreak").textContent=player.streak;

const level=Math.floor(player.xp/100)+1;

document.getElementById("playerLevel").textContent=level;

document.getElementById("xpFill").style.width=(player.xp%100)+"%";

localStorage.setItem("cgzPlayer",JSON.stringify(player));

}

updateProfile();
document.getElementById("changeNameBtn").addEventListener("click",()=>{

const newName=prompt("Enter your gamer name:");

if(newName && newName.trim()!=""){

player.name=newName.trim();

updateProfile();

}

});
/*=========================
ADD XP FUNCTION
=========================*/

function addXP(amount){

player.xp += amount;

player.games++;

const oldLevel = Math.floor((player.xp - amount)/100)+1;
const newLevel = Math.floor(player.xp/100)+1;

updateProfile();

showReward("+"+amount+" XP");

if(newLevel > oldLevel){

showReward("🎉 LEVEL UP! Level "+newLevel);

}

}
/*=========================
XP POPUP
=========================*/

function showReward(text){

const popup=document.createElement("div");

popup.className="reward-popup";

popup.innerHTML=text;

document.body.appendChild(popup);

setTimeout(()=>{

popup.classList.add("show");

},50);

setTimeout(()=>{

popup.classList.remove("show");

setTimeout(()=>popup.remove(),500);

},2200);

}
function searchPlatform(platform){

const query=document.getElementById("searchInput").value.trim();

if(query===""){
alert("Please enter something to search.");
return;
}

const url=encodeURIComponent(query);

switch(platform){

case "google":
window.open(`https://www.google.com/search?q=${url}`,"_blank");
break;

case "youtube":
window.open(`https://www.youtube.com/results?search_query=${url}`,"_blank");
break;

case "bing":
window.open(`https://www.bing.com/search?q=${url}`,"_blank");
break;

case "duck":
window.open(`https://duckduckgo.com/?q=${url}`,"_blank");
break;

case "yahoo":
window.open(`https://search.yahoo.com/search?p=${url}`,"_blank");
break;

}

}