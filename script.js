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

    if(q1 && q1.value==="Queue"){
        score++;
    }

    if(q2 &&
       q2.value==="Programming Language"){
        score++;
    }

    if(q3 &&
       q3.value==="100"){
        score++;
    }

    let percentage =
    (score/3)*100;

    document.getElementById("result")
    .innerHTML =
    "Your Score : "
    + score +
    "/3 (" +
    percentage +
    "%)";

    localStorage.setItem(
        "lastScore",
        percentage
    );
}

document
.getElementById("themeBtn")
.addEventListener("click",function(){

    document.body.classList.toggle("dark");

});