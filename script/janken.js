function half(element, finger) {
  const num = 2;
  r = Math.floor(Math.random() * num);

  if (r == 0) {
    document.getElementById(`${element}`).innerHTML =
      "<img src='/image/janken/finger" + finger + "-close.webp' />";
  } else if (r == 1) {
    document.getElementById(`${element}`).innerHTML =
      "<img src='/image/janken/finger" + finger + "-open.webp' />";
  }
}

function fingerLoop(hand) {
  for (i = 1; i < 6; i++) {
    half(hand + `Finger${i}`, i);
  }
}

function playJanken() {
  fingerLoop("left");
  fingerLoop("right");
}
