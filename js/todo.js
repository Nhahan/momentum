const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    span.innerText = newToDo;

    const button = document.createElement("button");

    button.innerText = ":x:";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    toDos.push(newToDo);

    paintToDo(newToDo);

    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const storageToDos = localStorage.getItem(TODOS_KEY)

if (storageToDos !== null) {
    const parsedToDos = JSON.parse(storageToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo());
}