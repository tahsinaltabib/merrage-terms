let age=document.querySelector(".age")
let salery=document.querySelector(".salery")
let home=document.querySelector(".home")
let button=document.querySelector("button")
let output=document.querySelector(".output")


button.addEventListener('click',function(){
    if(!(age.value,salery.value,home.value)){
        output.style.display="block"
        output.style.color="rgb(253, 249, 3)"
        output.innerHTML="First, fill up the form!"

    }else  if(!(age.value>18)){
        output.style.display="block"
        output.style.color="rgb(253, 3, 3)"
        output.innerHTML="You are still young. You need to get older first."
        
    }else if(!(salery.value>=40000)){
        output.style.display="block"
        output.innerHTML="To marry our daughter, you need to earn a minimum of 40000 a month."
        output.style.color="rgb(253, 3, 3)"

    }else if(!(home.value=="Dhaka")){
        output.style.display="block"
        output.innerHTML="You need to have a house in Dhaka as well."
        output.style.color="rgb(253, 3, 3)"
    }else{
        output.style.display="block"
        output.innerHTML="Then you will be able to marry our daughter!"
         output.style.color="Green"
    }
        

})