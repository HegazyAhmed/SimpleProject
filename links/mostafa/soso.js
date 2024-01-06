let ch = document.querySelectorAll(".as");
let container = document.querySelector(".container");

ch[1].addEventListener("click", function () {
  container.classList.add("block");
  ch[0].classList.add("none");
  ch[1].classList.add("none");
  console.log(1);
});
