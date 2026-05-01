const input = document.querySelector('input');
const AddBtn= document.querySelector('#AddBtn')
const ul=document.querySelector('ul')

AddBtn.addEventListener('click',function(e){
    // console.log(input.value)
    e.preventDefault()  

    let li=document.createElement('li');
    li.innerText=input.value + "        ";
    
    if( input.value != 0){
        ul.appendChild(li)
        input.value=''
    }

    let delBtn=document.createElement('button');
    delBtn.innerText="Delete Task "
    li.append(delBtn)

    delBtn.addEventListener('click',function(){
        let li=this.parentElement
        // console.log(li)
        li.remove()

    })
})

