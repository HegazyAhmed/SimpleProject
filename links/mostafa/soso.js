let ch = document.querySelectorAll(".as");
let container = document.querySelector(".container");

ch[1].addEventListener("click", function () {
  container.classList.add("block");
  ch[0].classList.add("none");
  ch[1].classList.add("none");
  console.log(1);
});
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

