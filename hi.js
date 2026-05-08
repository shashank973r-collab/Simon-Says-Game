
let h3=document.querySelector("h3");
let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let colours=["yellow","green","blue","red"];

document.addEventListener("keypress",function(){
if (started==false){
 started= true;
  levelup();
}
});

function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function()
{btn.classList.remove("flash")
},250);
}
let startbtn = document.querySelector("#start");

startbtn.addEventListener("click", function(){

    if(started == false){
        started = true;
        levelup();
    }

});

function levelup(){
    userseq=[];
    level++;
    h3.innerText=`Level ${level}`;

    let rand=Math.floor((Math.random()*3)+1);
    let col=colours[rand];
    let randbtn=document.querySelector(`.${col}`);
    gameseq.push(col);
    console.log(gameseq);
    btnFlash(randbtn);
}
  
function check(idx){
    if(userseq[idx]=== gameseq[idx]){
        if(userseq.length == gameseq.length){
          setTimeout(levelup,1000);
}
    }
    else{
        h3.innerHTML=`Oops! Game over. Your score was<b>${level}</b>.<br> press spacebar to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
         document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
   let btn= this;
   btnFlash(btn);
   usercol=btn.getAttribute("id");
   console.log(usercol);
   userseq.push(usercol);
   check(userseq.length-1);
}

let allbtns=document.querySelectorAll("div");
for (btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameseq= [];
    userseq= [];
    level=0;
}