let btnFirst = document.querySelector("#first");
let btnSecond = document.querySelector("#second");
let btnThird = document.querySelector("#third");
let btnFourth = document.querySelector("#fourth");
let btnFifth = document.querySelector("#fifth");

let circle = document.querySelector(".circle");
let count = 0;
let count1 = 0;
btnFirst.onclick = function () {
  count++;
  if (count % 2 === 0) {
    circle.style.background = "red";
  } else {
    circle.style.background = "yellow";
  }
};
btnSecond.onclick = function () {
  count1++;
  if (count1 % 2 === 0) {
    circle.style.borderRadius = "50%";
  } else {
    circle.style.borderRadius = 0;
  }
};

btnThird.onclick = function () {
  circle.style.height = "100px";
  circle.style.width = "100px";
};
btnFourth.onclick = function () {
  circle.style.height = "20px";
  circle.style.width = "20px";
};
btnFifth.onclick = function () {
  alert("Привет, мир ! ");
};
console.log("Я консоль ");
