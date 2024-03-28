//=========================================================
//ASS2

/*
let btn=document.querySelector("button")
btn.onclick=function(){
    btn.style.display='none'
}*/

function prop(){
    let prop=document.createElement("div")
    prop.className="prop";
    prop.style.cssText="text-align:center;position:absolute;left:50%;top:50%;transform:translate(-50%,50%);background-color: #eee"

let span=document.createElement("span")
span.textContent="X"
span.style.cssText=" right:-10px;border-radius:50%; background-color:red;position:absolute;display:flex;align-items:center;justify-content:center"

let h3=document.createElement("h3")
h3.textContent="Welcome"
let p=document.createElement("p")
p.textContent="llllllllllllllll"


span.onclick=function(){
    prop.remove()
}

prop.append(span)
prop.append(h3)
prop.append(p)

document.body.append(prop)//on peut utiliser preppend


}
window.setTimeout(prop,2000)

