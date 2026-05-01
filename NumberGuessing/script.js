document.addEventListener('DOMContentLoaded',function(){

    
    
    let btn=document.querySelector('.btn');
    
    // let btn=document.getElementsByClassName('btn');  this returns HTML collections therefore any modification or changes in element can't be possible becuase it can't find which element and property of a collection you want to manipulate

    let submit=document.querySelector('.Submit');
    
    
    btn.addEventListener('click',function(){
        let input=document.querySelector('#number');    //it will seletct input field
        if(input.value==''){
            alert("Please enter range");
            return;
        }
        let value=input.value;      // it return input field's value
        num=Math.floor(Math.random()*value)+1;
        
        // Appendig result on document page
        let p=document.createElement('p');
        p.innerText=`Number is ${num}`
        p.style.visibility="hidden"
        let div=document.querySelector('div');
        div.appendChild(p);

        submit.addEventListener('click',function submit(){
            let guessNumber=document.querySelector('.guessNumber');
            if(guessNumber.value==num){
                alert("You guessed right number")
                p.style.visibility='visible'            
            }
            else{
                alert("Wrong Guesses")
                p.style.visibility="Visible"
            
            }
            guessNumber.value=""
    });
    })

    
})


