let age=document.querySelector(".age")
let selary=document.querySelector(".selary")
let home=document.querySelector(".home")
let button=document.querySelector("button")
let output=document.querySelector(".output")


button.addEventListener('click',function(){
    if(!(age.value,selary.value,home.value)){
        output.style.display="block"
        output.style.color="rgb(253, 249, 3)"
        output.innerHTML="Aage form fillup koro!"

    }else  if(!(age.value>=20)){
        output.style.display="block"
        output.style.color="rgb(253, 3, 3)"
        output.innerHTML="Aage boro hoow Baba!"
        
    }else if(!(selary.value>=45000)){
        output.style.display="block"
        output.innerHTML="Amdr meye k biye krte hole minimum 45000 selary thakte hobe!"
        output.style.color="rgb(253, 3, 3)"

    }else if(!(home.value=="Dhaka")){
        output.style.display="block"
        output.innerHTML="Amdr meye k biye krte hole Dhaka bari thakte hobe! Bujjo?"
        output.style.color="rgb(253, 3, 3)"
    }else{
        output.style.display="block"
        output.innerHTML="Biya korte parbe"
         output.style.color="#38dc30"
    }
        

})