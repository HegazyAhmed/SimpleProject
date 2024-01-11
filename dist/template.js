"use strict";

///////////////////
// Write Your Generator Function Here

var sidebarBox = document.querySelector("#box");
var sidebarBtn = document.querySelector("#btn");
var pageWrapper = document.querySelector("#main-content");

sidebarBtn.addEventListener("click", function (event) {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
    sidebarBox.classList.remove("active");
  } else {
    this.classList.add("active");
    sidebarBox.classList.add("active");
  }
});

window.addEventListener("keydown", function (event) {
  if (sidebarBox.classList.contains("active") && event.keyCode === 27) {
    sidebarBtn.classList.remove("active");
    sidebarBox.classList.remove("active");
  }
});
// let fontOne = document.querySelector(".font-one");
// let fontTwo = document.querySelector(".font-two");
// let fontThree = document.querySelector(".font-three");
// let fontfour = document.querySelector(".font-four");
// let fontfive = document.querySelector(".font-five");
// let fontsix = document.querySelector(".font-six");
// let exampleshow = document.querySelector(".example-show");

// fontOne.addEventListener("click", function fontone() {
//   exampleshow.classList.remove(
//     "franklin",
//     "georgia",
//     "Gill-Sans",
//     "Trebuchet-MS",
//     "Times-New-Roman"
//   );
//   exampleshow.classList.add("sans-serif");
// });
// fontTwo.addEventListener("click", function fonttwo() {
//   exampleshow.classList.remove(
//     "sans-serif",
//     "georgia",
//     "Gill-Sans",
//     "Trebuchet-MS",
//     "Times-New-Roman"
//   );
//   exampleshow.classList.add("franklin");
// });
// fontThree.addEventListener("click", function fontthree() {
//   exampleshow.classList.remove(
//     "sans-serif",
//     "franklin",
//     "Gill-Sans",
//     "Trebuchet-MS",
//     "Times-New-Roman"
//   );
//   exampleshow.classList.add("georgia");
// });
// fontfour.addEventListener("click", function fontfour() {
//   exampleshow.classList.remove(
//     "sans-serif",
//     "franklin",
//     "Trebuchet-MS",
//     "georgia",
//     "Times-New-Roman"
//   );
//   exampleshow.classList.add("Gill-Sans");
// });
// fontfive.addEventListener("click", function fontfive() {
//   exampleshow.classList.remove(
//     "sans-serif",
//     "franklin",
//     "Gill-Sans",
//     "georgia",
//     "Times-New-Roman"
//   );
//   exampleshow.classList.add("Trebuchet-MS");
// });
// fontsix.addEventListener("click", function fontsix() {
//   exampleshow.classList.remove(
//     "sans-serif",
//     "franklin",
//     "Gill-Sans",
//     "Trebuchet-MS",
//     "georgia"
//   );
//   exampleshow.classList.add("Times-New-Roman");
// });

const CSD = document.querySelectorAll("#CSD");
const CSDA = document.querySelectorAll("#CSDA");
const CSDB = document.querySelectorAll("#CSDB");
const CSDC = document.querySelectorAll("#CSDC");
const content = document.querySelectorAll(".item");
const tklf = document.querySelector("#tklf");
const quizs = document.querySelector("#quizs");
const themes = document.querySelector("#themes");
////////////////LINKS//////////////////
CSD[0].addEventListener("click", function () {
  window.open("links/mostafa/soso.html");
});
CSDB[0].addEventListener("click", function () {
  window.open("links/quiz/index.html");
});
///////////////SIDE BAR ///////////////////
content[1].addEventListener("click", function () {
  for (var i = 0; i < CSD.length; i++) {
    CSD[i].classList.toggle("block");
  }
});
tklf.addEventListener("click", function () {
  for (var i = 0; i < CSDA.length; i++) {
    CSDA[i].classList.toggle("block");
  }
});
quizs.addEventListener("click", function () {
  for (var i = 0; i < CSDB.length; i++) {
    CSDB[i].classList.toggle("block");
  }
});
themes.addEventListener("click", function () {
  for (var i = 0; i < CSDC.length; i++) {
    CSDC[i].classList.toggle("block");
  }
});
const CSDT = document.querySelectorAll(".squ");
CSDT[0].addEventListener("click", function () {
  window.open("links/mostafa/soso.html");
});
/////////////////////////////////////////////////////
////slider
document.getElementById("show-element").onclick = function () {
  var element = document.getElementById("to-show");
  if (element.className === "hide") {
    element.className = "show";
    document.getElementsByTagName("body")[0].className = "on";
    document.getElementById("show-element").className = "active";
  } else {
    element.className = "hide";
    document.getElementsByTagName("body")[0].className = "off";
    document.getElementById("show-element").className = "";
  }
};
///////////////////////
