console.log("Script Loaded")


document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault()   // it force the form to not send data to the browser
    const age=document.getElementById('age').value
    // console.log(age)

    const hieght=document.getElementById('height').value 
    const weight=document.getElementById('weight').value
    console.log(age)
    console.log(hieght)
    console.log(weight)

    const res= weight/(hieght*hieght)


    const div=document.getElementById('result')
    const p=document.createElement('p');
    p.innerHTML=`BMI is :${res}`
    // p.textContent=`BMI is :${res}`
    div.appendChild(p)  

    
})