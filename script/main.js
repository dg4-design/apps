const gumData = [
  [
    { id: 1, theme: "海外の" },
    { id: 2, theme: "マーケティングの" },
    { id: 3, theme: "アジアの" },
    { id: 4, theme: "あだ名の" },
    { id: 5, theme: "一昨日食べたかった物の" },
    { id: 6, theme: "精霊の" },
  ],
  [
    { id: 1, theme: "試合の" },
    { id: 2, theme: "蟹の" },
    { id: 3, theme: "薬の" },
    { id: 4, theme: "ご馳走の" },
    { id: 5, theme: "プロテインの" },
    { id: 6, theme: "二つ名の" },
  ],
  [
    { id: 1, theme: "野生の" },
    { id: 2, theme: "林の" },
    { id: 3, theme: "上着の" },
    { id: 4, theme: "船の" },
    { id: 5, theme: "コンタクトの" },
    { id: 6, theme: "猫の" },
  ],
  [
    { id: 1, theme: "犬の" },
    { id: 2, theme: "意識高い" },
    { id: 3, theme: "アレルギーの" },
    { id: 4, theme: "ボルテージの" },
    { id: 5, theme: "昆布の" },
    { id: 6, theme: "サウナの" },
  ],
  [
    { id: 1, theme: "小学校の" },
    { id: 2, theme: "男子の" },
    { id: 3, theme: "納豆の" },
    { id: 4, theme: "好きなお店の" },
    { id: 5, theme: "昔の" },
    { id: 6, theme: "地元の" },
  ],
  [
    { id: 1, theme: "桃の缶詰の" },
    { id: 2, theme: "新幹線の" },
    { id: 3, theme: "タンポポの" },
    { id: 4, theme: "じゃがいもの" },
    { id: 5, theme: "焼き芋の" },
    { id: 6, theme: "泣いた" },
  ],
  [
    { id: 1, theme: "プレゼントの" },
    { id: 2, theme: "ピザの" },
    { id: 4, theme: "ストリーミングの" },
    { id: 5, theme: "先月の" },
    { id: 6, theme: "チャンスの" },
    { id: 3, theme: "四季の" },
  ],
  [
    { id: 1, theme: "笑った" },
    { id: 2, theme: "おそらく伝わらない" },
    { id: 3, theme: "おやつの" },
    { id: 4, theme: "人生最高の" },
    { id: 5, theme: "ナイフの" },
    { id: 6, theme: "写真の" },
  ],
  [
    { id: 1, theme: "寺の" },
    { id: 2, theme: "工場の" },
    { id: 3, theme: "SF雑誌の" },
    { id: 4, theme: "テコンドーの" },
    { id: 5, theme: "趣味の" },
    { id: 6, theme: "記憶の" },
  ],
  [
    { id: 1, theme: "スーパーマーケットの" },
    { id: 2, theme: "さすがと思った" },
    { id: 3, theme: "シャンプーの" },
    { id: 4, theme: "中華料理の" },
    { id: 5, theme: "ファイナルの" },
    { id: 6, theme: "先生の" },
  ],
  [
    { id: 1, theme: "来月の" },
    { id: 2, theme: "ペットの" },
    { id: 3, theme: "パッケージの" },
    { id: 4, theme: "バナナの" },
    { id: 5, theme: "ファンタジーの" },
    { id: 6, theme: "伏線の" },
  ],
  [
    { id: 1, theme: "ギリセーフの" },
    { id: 2, theme: "桃の" },
    { id: 3, theme: "座席の" },
    { id: 4, theme: "傘の" },
    { id: 5, theme: "置き物の" },
    { id: 6, theme: "億万長者の" },
  ],
  [
    { id: 1, theme: "熊の" },
    { id: 2, theme: "豆の" },
    { id: 3, theme: "昔の流行りの" },
    { id: 4, theme: "縛りの" },
    { id: 5, theme: "貨幣の" },
    { id: 6, theme: "羊の" },
  ],
];

const gumButton = document.getElementById("gumButton");

gumButton.onclick = function gumTalk() {
  function random(array) {
    randomData = array[Math.floor(Math.random() * array.length)];
    return randomData;
  }

  const getGum = random(gumData);
  const getTheme = random(getGum);

  // const numberElement = document.getElementById("number");
  // numberElement.innerHTML = JSON.stringify(getTheme.id);

  const themeElement = document.getElementById("theme");
  themeElement.innerHTML =
    JSON.stringify(getTheme.theme).replace(/^"(.*)"$/, "$1") + "話";
};
