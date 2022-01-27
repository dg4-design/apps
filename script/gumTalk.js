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

    themeElement.textContent = "";

    getGum.forEach((e, i) => {
      const themeItem = document.createElement("div");
      themeItem.className = "item is-flex";
      e == getTheme && themeItem.classList.add("accent");

      const itemNum = document.createElement("p");
      itemNum.className = "number";
      itemNum.innerText = `${i + 1}`;

      const itemTxt = document.createElement("p");
      itemTxt.className = "theme";
      itemTxt.innerText = `${e}話`;

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
