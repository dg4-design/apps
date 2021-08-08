function runDic() {
  var read = document.getElementById("read").value;
  var write = document.getElementById("write").value;
  var mean = document.getElementById("mean").value;

  const output = document.getElementById("output");

  output.innerHTML =
    `<p><span class="bold">${read}</span>` + `【${write}】` + `${mean}</p>`;

  read = "";
  write = "";
  mean = "";
}
