document.addEventListener("DOMContentLoaded", () => {

const allData = [

{ name:"BYJU'S", logo:"../../logos/byjus.png" },

{ name:"Unacademy", logo:"../../logos/unacademy.png" },

{ name:"Vedantu", logo:"../../logos/vedantu.png" },

{ name:"Next Topper", logo:"../../logos/nexttopper.png" },

{ name:"Physics Wallah", logo:"../../logos/physicswallah.png" }

];

const logoImg=document.getElementById("studyLogo");
const buttons=document.querySelectorAll(".studyBtn");
const result=document.getElementById("studyResult");
const nextBtn=document.getElementById("nextStudy");

let pool=[];

function shuffle(arr){
return arr.sort(()=>Math.random()-0.5);
}

function resetPool(){
pool=shuffle([...allData]);
}

function loadQuestion(){

result.innerText="";

if(pool.length===0) resetPool();

const correct=pool.pop();

logoImg.src=correct.logo;

let options=[correct.name];

while(options.length<4){

const random=allData[Math.floor(Math.random()*allData.length)].name;

if(!options.includes(random)) options.push(random);

}

options=shuffle(options);

buttons.forEach((btn,i)=>{

btn.innerText=options[i];

btn.onclick=()=>{

if(options[i]===correct.name){

result.innerText="🎉 Correct!";
result.style.color="lime";

}else{

result.innerText="❌ Wrong! It was "+correct.name;
result.style.color="red";

}

};

});

}

nextBtn.addEventListener("click",loadQuestion);

resetPool();
loadQuestion();

});