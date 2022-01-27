const half = (element, finger) => {
  const r = Math.floor(Math.random() * 2);
  const img = document.createElement("img");
  document.getElementById(`${element}`).innerHTML = "";
  document.getElementById(`${element}`).appendChild(img);
  img.src = `/image/janken/finger${finger}-open.webp`;
  r == 0 && (img.src = `/image/janken/finger${finger}-close.webp`);
};

const fingerLoop = (hand) =>
  [...Array(5)].forEach((e, i) => half(`${hand}Finger${i}`, i));

const playJanken = () => {
  fingerLoop("left");
  fingerLoop("right");
};
