let answerarea = document.querySelector(".answers-area");
let countspan = document.querySelector(".count span");
let quizarea = document.querySelector(".quiz-area");
let bulletsspans = document.querySelector(".bullets");
let results = document.querySelector(".results");

// let countspan = d ocument.querySelector(".count");
let currentindex = 0;
let submitbtn = document.querySelector(".submit-button");
let rightanswer = 0;
function getquestions() {
  let myrequest = new XMLHttpRequest();

  myrequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let jsonobject = JSON.parse(this.responseText);
      let qcount = jsonobject.length;
      createbullets(qcount);
      addquestdata(jsonobject[currentindex], qcount);
      submitbtn.onclick = function () {
        // get right answer
        let theright = jsonobject[currentindex].right_answer;
        //incraease index
        currentindex++;
        //check
        checkanswer(theright, qcount);
        ///remove prev ques
        quizarea.innerHTML = "";
        answerarea.innerHTML = "";
        addquestdata(jsonobject[currentindex], qcount);
        /// bullets class
        bulletclass();
        /// result
        showresult(qcount);
      };
    }

    ////add ques data
  };

  myrequest.open("GET", "questions.json", true);
  myrequest.send();
}
getquestions();
function createbullets(nums) {
  countspan.innerHTML = nums;

  for (let i = 0; i < nums; i++) {
    let bullets = document.createElement("span");
    let spanfather = document.querySelector(".spans");
    if (i === 0) {
      bullets.className = "on";
    }
    spanfather.appendChild(bullets);
  }
}

function addquestdata(obj, count) {
  if (currentindex < count) {
    //create h2 ques
    let quest = document.createElement("h2");
    ///create quest text
    let questtext = document.createTextNode(obj["title"]);
    //append
    quest.appendChild(questtext);
    quizarea.appendChild(quest);
    /// answers
    for (let i = 1; i <= 4; i++) {
      let answer = document.createElement("div");
      answer.classList.add("answer");
      let radio = document.createElement("input");
      radio.name = "question";
      radio.type = "radio";
      radio.id = `answer_${i}`;
      radio.dataset.answer = obj[`answer_${i}`];
      ///

      ///
      let label = document.createElement("label");
      label.htmlFor = `answer_${i}`;
      let labeltext = document.createTextNode(obj[`answer_${i}`]);
      label.appendChild(labeltext);
      ////appeed
      answer.appendChild(radio);
      answer.appendChild(label);
      answerarea.appendChild(answer);
    }
  }
}

function checkanswer(a, c) {
  let answers = document.getElementsByName("question");
  let thechosenanswer;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      thechosenanswer = answers[i].dataset.answer;
    }
  }
  if (a === thechosenanswer) {
    rightanswer++;
  }
}

function bulletclass() {
  let bulletsspan = document.querySelectorAll(".bullets .spans span");
  let arrayfromspan = Array.from(bulletsspan);
  arrayfromspan.forEach(function (span, index) {
    if (currentindex === index) {
      span.className = "on";
    }
  });
}

function showresult(count) {
  let theresult;
  if (currentindex === count) {
    quizarea.remove();
    answerarea.remove();
    submitbtn.remove();
    bulletsspans.remove();

    if (rightanswer > count / 2 && rightanswer < count) {
      theresult = `<span class="good">Good</span>, ${rightanswer} From ${count} Is Good :)`;
    } else if (rightanswer === count) {
      theresult = `<span class="perfect">Perfectoo</span>, All Answers Are True :o`;
    } else {
      theresult = `<span class="bad">Bad</span>, ${rightanswer} From ${count} Is Bad :)`;
    }
    results.innerHTML = theresult;
  }
}
///////////////
// let pdf = document.querySelector(".pdf");
// function getpdf() {
//   let myrequests = new XMLHttpRequest();
//   myrequests.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       let jsonpdf = JSON.parse(this.responseText);
//       let number = jsonpdf.length;
//       pdf.onclick = function () {
//         window.open(jsonpdf[0]);
//       };
//     }
//   };
//   myrequests.open("GET", "pdf.json", true);
//   myrequests.send();
// }
// getpdf();
