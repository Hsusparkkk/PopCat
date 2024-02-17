const body = document.querySelector("body")
let coElem = document.querySelector("#coElem")
const loopArea = document.querySelector("#loopArea")
// let a = 1;


let v = 500/1000
let time = window.innerWidth+coElem.offsetWidth/v
let reGenrT = coElem.offsetWidth/v
let elemWidth = coElem.offsetWidth




function apr(){
    // loopArea.appendChild(cloned)
    coElem.style.animation = "runMarq "+time+"ms forwards linear"
    reGenrT = elemWidth/v
    let cloned = coElem.cloneNode(true)
    loopArea.appendChild(cloned)
    
    setTimeout(() => {
        loopArea.removeChild(cloned)
    }, time+1000);

}

// main

loopArea.removeChild(coElem)
apr()
setInterval(() => {
    apr()
    
}, reGenrT);


setInterval(()=>{
    body.style.backgroundColor = "rgb("+Math.floor(Math.random()*225)+","+Math.floor(Math.random()*225)+","+Math.floor(Math.random()*225)+")"
},Math.floor(Math.random()*v*1000))







