
let div=document.createElement("div")
div.textContent="3"
let counter=setInterval(count,1000)

function count(){
 div.innerHTML-=1
   document.body.prepend(div)//yjibh 9bl scscript 

   if (div.innerHTML === "2"){
 
    window.open("https://elzero.org/-110/","_blank","width=100, top=70px ,left=200,height=170px") 
}
    if (div.innerHTML === "0"){
       clearInterval(counter)
     
    }



}
   