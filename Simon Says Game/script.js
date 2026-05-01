const gameSeq=[]
const userSeq=[]


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

let boxes = ['red','green','blue','yellow'];
// let boxes=document.querySelector(".container")


function flash(box){
    box.classList.add('flash');
    setTimeout(()=>{
        box.classList.remove('flash');
    },300)
    enteruserSeq();
    
    
     

}

function levelUp(){
    level = level + 1;
    h2.textContent= ` Level ${level }`;
    let index= Math.floor(Math.random()*4);
    let randomBox=document.querySelector(`.${boxes[index]}`);
    // let randomBox=boxes[index]
    console.log(randomBox)
    gameSeq.push(randomBox);

    flash(randomBox)
    

}
let isEqual=true;
document.addEventListener('keypress'  ,function(){
    // isEqual=false;

    if(start ==false){
        
        console.log("Game Started")
        start=true;
       
        levelUp()
        console.log(isEqual);
        
    } 
});

function buttonPress(){
    flash(this)
    console.log(this);
    userSeq.push(this)
    for (let i = 0; i < userSeq.length; i++) {
        if (userSeq[i] !== gameSeq[i]) {
            console.log("Not match")
            return;
            
        }
        else{
            console.log("match")
            // isEqual=true;
        }
    }

}

function enteruserSeq(){
    let btns=document.querySelectorAll('.box');
    for(let btn of btns){
        btn.addEventListener('click',buttonPress)
    }
}
