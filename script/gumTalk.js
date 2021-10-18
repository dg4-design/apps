function readGum() {
  var f = "/data/gumData.json";
  var retJson;

  var obj = new XMLHttpRequest();

  obj.open("get", f, false);
  obj.onload = function () {
    try {
      retJson = JSON.parse(this.responseText);
    } finally {
    }
  };
  obj.send(null); //ここで読込実行。
  return retJson;
}

const gumData = readGum();

const howManyTheme = gumData.length * 6;
const manyElement = document.getElementById("howMany");

manyElement.insertAdjacentHTML("afterbegin", howManyTheme);

const themeElement = document.getElementById("card");
const gumButton = document.getElementById("gumButton");

gumButton.onclick = function gumTalk() {
  function random(array) {
    randomData = array[Math.floor(Math.random() * array.length)];
    return randomData;
  }

  //ガムのデータをランダムに取得
  const getGum = random(gumData);

  //↑で取得したガムのデータの中のトークテーマをランダムに取得
  const getTheme = random(getGum);

  const result = [];

  themeElement.textContent = "";

  for (var i = 0; i < getGum.length; i++) {
    result.push(i);

    if (getGum[i].id == getTheme.id) {
      const kakikomuElements =
        "<div class='item accent is-flex'><p class='number'>" +
        getGum[i].id +
        "</p><p class='theme'>" +
        getGum[i].theme +
        "話</p></div>";

      themeElement.insertAdjacentHTML("afterbegin", kakikomuElements);
    } else {
      const kakikomuElements =
        "<div class='item is-flex''><p class='number'>" +
        getGum[i].id +
        "</p><p class='theme'>" +
        getGum[i].theme +
        "話</p></div>";

      themeElement.insertAdjacentHTML("afterbegin", kakikomuElements);
    }
  }
};
