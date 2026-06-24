import { auth }
from "./firebase.js";

import { db }
from "./firebase.js";

import {
collection,
addDoc
}
from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

let time = 60;

let timer =
setInterval(()=>{

document.getElementById(
"timer"
).innerHTML =
time;

time--;

if(time < 0){

clearInterval(timer);

submitQuiz();

}

},1000);

window.submitQuiz =
async function(){

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

let q4 =
document.querySelector(
'input[name="q4"]:checked'
);

if(q1 && q1.value=="Queue")
score++;

if(q2 &&
q2.value=="Programming Language")
score++;

if(q3 &&
q3.value=="100")
score++;

if(q4 &&
q4.value=="Database Management System")
score++;

localStorage.setItem(
"score",
score
);

try{

await addDoc(
collection(
db,
"scores"
),
{
email:
auth.currentUser.email,
score:score,
date:
new Date()
}
);

}
catch(err){
console.log(err);
}

window.location =
"result.html";

}