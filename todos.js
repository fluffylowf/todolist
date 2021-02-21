const toDoListForm = document.querySelector(".form--todos"),
  toDoInput = toDoListForm.querySelector(".todos__input");
let toDoLists = document.querySelector(".toDoLists");
let toDos = [];
const toDosLC = [];

function saveToDosLocal() {
  localStorage.setItem("TODOS", JSON.stringify(toDos));
}

function getToDosLocal() {
  return localStorage.getItem("TODOS");
}

function btnHandler(e) {
  const num = parseInt(e.target.parentNode.id);

  toDos.map((todo, idx) => {
    if (num === todo.id) {
      toDos.splice(idx, 1);

      saveToDosLocal();
    }
  });
  showToDos();
}

function showToDos() {
  toDoLists.innerText = "";
  const toDosFromLocal = JSON.parse(localStorage.getItem("TODOS"));

  toDosFromLocal.map((todo) => {
    const list = document.createElement("li");
    const removeBtn = document.createElement("button");
    removeBtn.innerText = ` ❤`;
    removeBtn.addEventListener("click", btnHandler);
    list.innerText = todo.text;
    list.setAttribute("id", todo.id);
    list.appendChild(removeBtn);
    toDoLists.appendChild(list);
  });
}

function toDoListFormHandler(e) {
  e.preventDefault();
  const id = Math.floor(Math.random() * 1000000);
  const data = {
    id,
    text: toDoInput.value,
  };
  toDos.push(data);
  toDoInput.value = "";
  saveToDosLocal();
  showToDos();
}

toDoListForm.addEventListener("submit", toDoListFormHandler);

function init() {
  if (getToDosLocal()) {
    toDos = JSON.parse(localStorage.getItem("TODOS"));
    showToDos();
  }
}
init();
