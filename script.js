"use strict"

let hour = 0;
let minute = 0;
let second = 0;
let interval

function twoDigits(digit) {
    if(digit<10){
        return("0"+digit)
    }else{
        return(digit)
    }
    
}

function start(){
    interval=setInterval(contador,1)
}
function pause(){
    clearInterval(interval)
}
function  parar(){
clearInterval(interval)
second=0
minute=0
hour=0
document.querySelector('.contador').innerText="00:00";

}


function contador(){
second++
if(second== 60){
minute++
second=0
if(minute==60){
    minute=0
    hour++
}
}
document.querySelector('.contador').innerText=twoDigits(hour)+":"+twoDigits(minute)+ ":"+twoDigits(second);
}