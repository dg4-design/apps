const leftFinger1 = document.getElementById("leftFinger1");
const leftFinger2 = document.getElementById("leftFinger2");
const leftFinger3 = document.getElementById("leftFinger3");
const leftFinger4 = document.getElementById("leftFinger4");
const leftFinger5 = document.getElementById("leftFinger5");

const rightFinger1 = document.getElementById("rightFinger1");
const rightFinger2 = document.getElementById("rightFinger2");
const rightFinger3 = document.getElementById("rightFinger3");
const rightFinger4 = document.getElementById("rightFinger4");
const rightFinger5 = document.getElementById("rightFinger5");

function half(element, finger) {
  const num = 2;
  r = Math.floor(Math.random() * num);

  if (r == 0) {
    element.innerHTML =
      "<img src='/image/janken/finger" + finger + "-close.png' />";
  } else if (r == 1) {
    element.innerHTML =
      "<img src='/image/janken/finger" + finger + "-open.png' />";
  }
}

function playJanken() {
  half(leftFinger1, 1);
  half(leftFinger2, 2);
  half(leftFinger3, 3);
  half(leftFinger4, 4);
  half(leftFinger5, 5);
  half(rightFinger1, 1);
  half(rightFinger2, 2);
  half(rightFinger3, 3);
  half(rightFinger4, 4);
  half(rightFinger5, 5);
}
