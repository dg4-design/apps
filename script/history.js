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
  const formGroupCol = Array.from(
    document.getElementById("formGroup").children
  );
  const data = [];
  formGroupCol.forEach((fChank) => {
    data.push({
      date: new Date(fChank.children[0].children[0].value),
      content: fChank.children[0].children[1].value,
    });
  });

  const output = document.getElementById("output");

  const varticaLine = document.createElement("div");
  varticaLine.className = "vartica-line";
  output.innerHTML = "";
  output.appendChild(varticaLine);

  const line = document.createElement("div");
  line.className = "line";
  varticaLine.appendChild(line);

  const hisList = document.createElement("ul");
  hisList.className = "his-list";
  output.appendChild(hisList);

  data.forEach((content) => {
    const hisContent = document.createElement("li");
    hisContent.className = "his-content is-flex";
    hisList.appendChild(hisContent);

    const contentDate = document.createElement("div");
    contentDate.className = "content-date is-flex";
    hisContent.appendChild(contentDate);

    const year = document.createElement("div");
    year.className = "year";
    year.innerText = content.date.getFullYear();
    contentDate.appendChild(year);

    const dot = document.createElement("div");
    dot.className = "dot";
    contentDate.appendChild(dot);

    const monthDate = document.createElement("div");
    monthDate.className = "month-date";
    monthDate.innerText = `${
      content.date.getMonth() + 1
    }/${content.date.getDate()}`;
    contentDate.appendChild(monthDate);

    const contentText = document.createElement("div");
    contentText.className = "content-text";
    contentText.innerText = content.content;
    hisContent.appendChild(contentText);
  });
};
