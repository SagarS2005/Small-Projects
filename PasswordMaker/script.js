document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('form').addEventListener('submit',function(e){
        e.preventDefault()
        let input_length=document.getElementById('input_length').value
        let uppercase=document.getElementById('input_Uppercase').checked
        let number=document.getElementById('input_Number').checked
        let characters=document.getElementById('input_Character').checked

        function generatepass(){
            let password=""
            let str="a b c d e f g h i j k l m n o p q r s t u v w x y z";
            if(input_Uppercase) str+="A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
            if(input_Character) str+="! @ # $ % ";
            if(input_Number) str+="0123456789"
            let passString=str.replaceAll(' ','')
            console.log("passstring:",passString)


            let passLength=0;
            if(isNaN(input_length)){
                passLength=8
            }
            else{
                passLength=input_length
            }

            for (let i = 0; i < passLength; i++) {
                let random=Math.floor(Math.random()* passString.length)
                password+=passString[random]
            }
            return password
        }
        let generatePassword=generatepass()

        let span=document.getElementById('result')
        span.textContent="Password : "+generatePassword
        console.log(generatePassword)
    })
})