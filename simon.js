let gameSeq = [];
let userSeq = [];
let btns = ["red","yellow","green","blue"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

let reseet = 0;
let highest = 0;

document.addEventListener("keypress",() => {
    if(started == false){
        console.log("game started");
        started = true;
    }

    levelUp();
})

function levelUp() {
 userSeq = [];
level++;
h2.innerText = `level ${level}`;

let randIdx = Math.floor(Math.random() * 4);
let randColor = btns[randIdx];
let randBtn = document.querySelector(`.${randColor}`);
/* console.log(randIdx);
console.log(randColor);
console.log(randBtn); */
gameSeq.push(randColor);
console.log(gameSeq);
console.log(userSeq);
btnFlash(randBtn);
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 400);
}

function checkAns(idx) {
    /* console.log(userSeq[idx]);
    console.log(gameSeq[idx]);
    console.log(userSeq);
    console.log(gameSeq); */
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length)
           {
            setTimeout(levelUp,1000);
        }
    }
    
else
{
    if(reseet == 0){
        highest = level;
    }
    else{
        if(level > highest)
        highest = level;
    }
    h2.innerHTML = `game over . your score was <b>${level}</b> press any key to start . highest:- ${highest}`;
document.querySelector("body").style.backgroundColor = "red";
setTimeout(() => {
    document.querySelector("body").style.backgroundColor = "white";
}, 200);
reset();
}


}

function btnPress() {
/*     console.log(this); */
    let btn = this;
    userFlash(btn);

   userColor = btn.getAttribute("id");
   console.log(userColor);
   userSeq.push(userColor);
/*    console.log(userSeq);
   console.log(gameSeq);   
    */
   checkAns(userSeq.length-1);
/*   checkAns(gameSeq.length-1);  */
/*    console.log(gameSeq.length-1);
   console.log(userSeq.length-1); */
}

let allBtn = document.querySelectorAll(".btn");
console.log(allBtn);
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}

function reset() {
    reseet++;
  /*   console.log(reseet); */
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout( () => {
        btn.classList.remove("userFlash")
    },300);
}
