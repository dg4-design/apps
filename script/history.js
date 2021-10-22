var i = 1;
function addForm() {
  const parent = document.getElementById("formGroup");
  parent.insertAdjacentHTML(
    "beforeend",
    `
    <div id="formChank${i}" class="form-chank is-flex">
      <div class="input-area is-flex">
        <input type="date" value="2021-01-01" required />
        <textarea
          type="text"
          placeholder="歴史の内容"
          required
        ></textarea>
      </div>
      <button id="${i}" onclick="deleteForm(this)">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
    `
  );

  i++;
}

function deleteForm(target) {
  const targetElm = document.getElementById(`formChank${target.id}`);
  targetElm.remove();
}

function runHistory() {
  const formGroupCol = document.getElementById("formGroup").children;
  var data = [];

  for (var j = 0; j < formGroupCol.length + 1; j++) {
    const formChank = document.getElementById(`formChank${j}`);
    if (formChank !== null) {
      data.push({
        date: new Date(formChank.children[0].children[0].value),
        content: formChank.children[0].children[1].value,
      });
    }
  }

  const output = document.getElementById("output");
  output.innerHTML = "";

  output.insertAdjacentHTML(
    "beforeend",
    `
    <div class="vartica-line">
      <div class="line"></div>
    </div>
    <ul id="hisList" class="his-list"></ul>
    `
  );

  const hisList = document.getElementById("hisList");

  for (var k = 0; k < data.length; k++) {
    hisList.insertAdjacentHTML(
      "beforeend",
      `
      <li class="his-content is-flex">
        <div class="content-date is-flex">
          <div class="year">${data[k].date.getFullYear()}</div>
          <div class="dot"></div>
          <div class="month-date">${data[k].date.getMonth() + 1}/${data[
        k
      ].date.getDate()}</div>
        </div>
        <div class="content-text">
          ${data[k].content}
        </div>
      </li>
      `
    );
  }
}
