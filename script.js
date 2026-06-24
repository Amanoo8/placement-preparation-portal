document.addEventListener(
"DOMContentLoaded",
function(){

let name =
localStorage.getItem(
"studentName"
);

if(document.getElementById(
"welcome"
)){
document.getElementById(
"welcome"
).innerHTML =
"Welcome " + name;
}

});

let timeLeft = 60;

let timer =
setInterval(function(){

let timerElement =
document.getElementById(
"timer"
);

if(timerElement){

timerElement.innerHTML =
"Time Left : " +
timeLeft;

timeLeft--;

if(timeLeft < 0){

clearInterval(timer);

submitQuiz();

}

}

},1000);

function submitQuiz(){

let score = 0;

let q1 =
document.querySelector(
'input[name="q1"]:checked'
);

let q2 =
document.querySelector(
'input[name="q2"]:checked'
);

let q3 =
document.querySelector(
'input[name="q3"]:checked'
);

if(q1 &&
q1.value=="Queue")
score++;

if(q2 &&
q2.value==
"Programming Language")
score++;

if(q3 &&
q3.value=="100")
score++;

localStorage.setItem(
"score",
score + "/3"
);

window.location =
"result.html";

}
