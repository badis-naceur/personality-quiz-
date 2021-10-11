
var questionCount = 0;
var result1Score = 0;
var result2Score = 0;
var result3Score = 0;
var result4Score = 0;

//first question
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
//second question
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
//third question
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
//fourth question
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
//fifty question
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");
var result = document.getElementById("result");

q1a1.addEventListener("click", result1);
q1a2.addEventListener("click", result2);
q1a3.addEventListener("click", result3);
q1a4.addEventListener("click", result4);

q2a1.addEventListener("click", result1);
q2a2.addEventListener("click", result2);
q2a3.addEventListener("click", result3);
q2a4.addEventListener("click", result4);

q3a1.addEventListener("click", result1);
q3a2.addEventListener("click", result2);
q3a3.addEventListener("click", result3);
q3a4.addEventListener("click", result4);

q4a1.addEventListener("click", result1);
q4a2.addEventListener("click", result2);
q4a3.addEventListener("click", result3);
q4a4.addEventListener("click", result4);

q5a1.addEventListener("click", result1);
q5a2.addEventListener("click", result2);
q5a3.addEventListener("click", result3);
q5a4.addEventListener("click", result4);

function result1() {
  result1Score++; questionCount++;
  if (questionCount >= 5) {
    updateResult();
  }
}
function result2() {
  result2Score++; questionCount++;

  if (questionCount >= 5) {
    updateResult();
  }
}
function result3() {
  result3Score++; questionCount++;
  if (questionCount >= 5) {
    updateResult();
  }
}
function result4() {
  result4Score++; questionCount++;
  if (questionCount >= 5) {
    updateResult();
  }
}
function updateResult() {
  if (result1Score >= 3) {
    result.innerHTML = "you will be an examplary developer so hold on tight to that attitude!";
  } else if (result2Score >3) {
    result.innerHTML =
      "no one is born ready but with your determination you'll get there ";
  } else if (result3Score >3) {
    result.innerHTML = 
    "you are new to this level of hacking, keep your head high and you'll find all of your effort maide into a success";
  } else if (result4Score > 3) {
    result.innerHTML = "apperantly you feel a lot stress and exaution , try to be more organized and your skills will be sharper";
  } else if (result1Score >=2) {
    result.innerHTML = 
    "you have some trouble keeping track with the course, try to have more closure with your collegues at home and revisit every thing youd did in hack and you'll be garenteed to see a diffrence";
  } else if (result2Score >= 2) {
    result.innerHTML = 
    "heyy! every one at some point in their life start doubting their choice when the road get too bumpy, don't give up even if you're not on the desired level because the key to excellency is stamina";
  } else if (result3Score >= 2) {
    result.innerHTML = "myy frieend have some hoope in your life and try to find the joy in being stuck in javascript otherwise you will always face the same trouble.";
  } else if (result4Score >= 2) {
    result.innerHTML = "appearantly you are facing an emotional delimma , please contact a psychitrist ASAP";
  } else {
    result.innerHTML = "as we see it you have a collection of negative traits that are slowing you down from reaching your goals,please have some patience and discipline to surpass your current level.";
  }
}
