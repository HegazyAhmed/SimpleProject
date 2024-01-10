let container = document.querySelector(".container");

let buttons = document.querySelectorAll(".mki a button");
buttons[0].addEventListener("click", function () {
  window.open("contents/1.pdf");
});
buttons[1].addEventListener("click", function () {
  window.open("contents/2.pdf");
});
buttons[2].addEventListener("click", function () {
  window.open("contents/3.pdf");
});
buttons[5].addEventListener("click", function () {
  window.open("contents/6.pdf");
});
buttons[6].addEventListener("click", function () {
  window.open("contents/7.pdf");
});
buttons[7].addEventListener("click", function () {
  window.open("contents/8.pdf");
});
buttons[8].addEventListener("click", function () {
  window.open("contents/9.pdf");
});
buttons[9].addEventListener("click", function () {
  window.open("contents/10.pdf");
});

const content = document.querySelectorAll(".item");
content[0].addEventListener("click", function () {
  CSD[0].classList.toggle("block");
  CSD[1].classList.toggle("block");
  CSD[2].classList.toggle("block");
  CSD[3].classList.toggle("block");
});

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
