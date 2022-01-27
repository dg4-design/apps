let i = 0;
const addForm = () => {
  const formChank = document.createElement("div");
  formChank.className = "form-chank is-flex";
  document.getElementById("formGroup").appendChild(formChank);

  const inputArea = document.createElement("div");
  inputArea.className = "input-area is-flex";
  formChank.appendChild(inputArea);

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.value = "2022-01-01";
  dateInput.required = true;
  inputArea.appendChild(dateInput);

  const textInput = document.createElement("textarea");
  textInput.type = "text";
  textInput.placeholder = "歴史の内容";
  textInput.required = true;
  inputArea.appendChild(textInput);

  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("click", () => formChank.remove());
  formChank.appendChild(deleteButton);

  const buttonIcon = document.createElement("i");
  buttonIcon.className = "far fa-trash-alt";
  deleteButton.appendChild(buttonIcon);

  i++;
};
addForm();

const runHistory = () => {
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
};
