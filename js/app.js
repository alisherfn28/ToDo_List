const button = document.querySelector("#btn");
const block = document.querySelector("#block");
const userTask = document.querySelector("#Task");
const list = document.querySelector("#block"); // 'list' o'zgaruvchisi

function createCard(data) {
  return `
    <div class="card">
      <div class="title">
        <h3>${data.task}</h3>
      </div>
      <div class="images">
        <img src="./img/pen.svg" alt=" " />
        <img src="./img/clear.svg" id="img2" alt=" " />
      </div>
    </div>
  `;
}

function getDataFromLocalstorage() {
  let data = [];
  if (localStorage.getItem("todos")) {
    data = JSON.parse(localStorage.getItem("todos"));
  }
  return data;
}

button &&
  button.addEventListener("click", (event) => {
    event.preventDefault();
    let todo = {
      task: userTask.value.trim(),
      id: Date.now(),
    };

    if (todo.task) {
      let card = createCard(todo);
      list.innerHTML += card;
      userTask.value = "";
      userTask.focus();
    } else {
      alert("Iltimos, vazifangizni kiriting");
      userTask.focus();
    }

    let todos = getDataFromLocalstorage();
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  });

document.addEventListener("DOMContentLoaded", () => {
  let newTodo = getDataFromLocalstorage();

  newTodo.forEach((task) => {
    let card = createCard(task);
    list.innerHTML += card;
  });
});
