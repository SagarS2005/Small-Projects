let gameSeq=[]
let  userSeq=[]


let start=false;
let level=0;
let h2=document.querySelector('h2')
// let box1=document.querySelector(".red");
// let box2=document.querySelector(".green");
// let box3=document.querySelector(".blue");
// let box4=document.querySelector(".yellow");


// console.dir(box1)
// console.log(box1)
// console.log("hello")

let btns = ['red','green','blue','yellow'];
// let boxes=document.querySelector(".container")


function flash(btn){
    btn.classList.add('flash');
    setTimeout(()=>{
        btn.classList.remove('flash');
    },300)
    // enteruserSeq();

}
function userflash(btn){
    btn.classList.add('userflash');
    setTimeout(()=>{
        btn.classList.remove('userflash');
    },300)
    

}

function levelUp(){
    userSeq=[]
    level = level + 1;
    h2.textContent= ` Level ${level }`;
    let index= Math.floor(Math.random()*4);
    let randColor=btns[index];
    let randBtn=document.querySelector(`.${randColor}`)
    // let randomBox=boxes[index]
    // console.log(index)
    // console.log(randColor)
    // console.log(randBtn)
    gameSeq.push(randColor);
    console.log(gameSeq)

    flash(randBtn)
    

}

document.addEventListener('keypress'  ,function(){
  
    if(start ==false){
        
        console.log("Game Started")
        start=true;
       
        levelUp()

        
    } 
});

function checkSeq(idx){
   
    

    if(userSeq[idx] ===gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000)
        }
    }
    else{
        h2.innerHTML= ` Game Over! Your score is ${level} <br>Press any to restart`
        let body=document.querySelector('body');
        body.style.backgroundColor='red';
        setTimeout(()=>{
            body.style.backgroundColor='white'
        },400);
        reset();
    }
}

function buttonPress(){
    userflash(this)
    // console.log(this);
    let usercolor=this.getAttribute('id');
    console.log(usercolor)
    userSeq.push(usercolor)
    checkSeq(userSeq.length-1)
}


let buttons=document.querySelectorAll('.btn');
for(let btn of buttons){
    btn.addEventListener('click',buttonPress)
}


function reset(){
    start=false
    gameSeq=[]
    userSeq=[]
    level=0;
}