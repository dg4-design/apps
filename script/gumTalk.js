const runGum = (gumData) => {
  const howManyTheme = gumData.length * 6;
  const manyElement = document.getElementById("howMany");

  manyElement.innerText = howManyTheme;

  const themeElement = document.getElementById("card");
  const gumButton = document.getElementById("gumButton");

  gumButton.onclick = () => {
    const random = (array) => array[Math.floor(Math.random() * array.length)];

    //ガムのデータをランダムに取得
    const getGum = random(gumData);

    //↑で取得したガムのデータの中のトークテーマをランダムに取得
    const getTheme = random(getGum);

    const result = [];
    themeElement.textContent = "";

    getGum.forEach((e, i) => {
      result.push(i);

      const themeItem = document.createElement("div");

      if (getGum[i] == getTheme) {
        themeItem.className = "item accent is-flex";
      } else {
        themeItem.className = "item is-flex";
      }

      const itemNum = document.createElement("p");
      itemNum.className = "number";
      itemNum.innerText = `${i + 1}`;

      const itemTxt = document.createElement("p");
      itemTxt.className = "theme";
      itemTxt.innerText = `${getGum[i]}話`;

      themeItem.appendChild(itemNum);
      themeItem.appendChild(itemTxt);
      themeElement.prepend(themeItem);
    });
  };
};

fetch("/data/gumData.json")
  .then((response) => response.json())
  .then((data) => {
    runGum(data);
  });
