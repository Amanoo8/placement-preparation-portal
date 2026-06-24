import { auth }
from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
}
from
"https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

let registerBtn =
document.getElementById(
"registerBtn"
);

if(registerBtn){

registerBtn.onclick=()=>{

let email =
document.getElementById(
"email"
).value;

let password =
document.getElementById(
"password"
).value;

createUserWithEmailAndPassword(
auth,
email,
password
)
.then(()=>{
document.getElementById(
"msg"
).innerHTML=
"Registration Successful";
})
.catch(err=>{
document.getElementById(
"msg"
).innerHTML=
err.message;
});

};
}

let loginBtn =
document.getElementById(
"loginBtn"
);

if(loginBtn){

loginBtn.onclick=()=>{

let email =
document.getElementById(
"email"
).value;

let password =
document.getElementById(
"password"
).value;

signInWithEmailAndPassword(
auth,
email,
password
)
.then(()=>{
window.location=
"dashboard.html";
})
.catch(err=>{
document.getElementById(
"msg"
).innerHTML=
err.message;
});

};
}
