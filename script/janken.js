const half = (element, finger) => {
  const r = Math.floor(Math.random() * 2);
  const target = document.getElementById(`${element}`);

  if (r == 0) {
    target.innerHTML = `<img src='/image/janken/finger${finger}-close.webp' />`;
  } else if (r == 1) {
    target.innerHTML = `<img src='/image/janken/finger${finger}-open.webp' />`;
  }
};

const fingerLoop = (hand) =>
  [...Array(5)].forEach((e, i) => half(`${hand}Finger${i}`, i));

const playJanken = () => {
  fingerLoop("left");
  fingerLoop("right");
};
