//Selectors
const todoInput = document.querySelector(".todo_input");
const todoButton = document.querySelector(".todo_button");
const todoList = document.querySelector(".todo_list");
const filterOption = document.querySelector(".filter_todo");

//Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", handleDeleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions

function addTodo(event) {
  event.preventDefault();
  if (todoInput.value === "") {
    return;
  }
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo_item");
  newTodo.innerText = todoInput.value;
  todoInput.value = "";
  todoDiv.appendChild(newTodo);
  const completedButton = document.createElement("button");
  completedButton.classList.add("complete_button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  todoDiv.appendChild(completedButton);
  const removeButton = document.createElement("button");
  removeButton.classList.add("remove_button");
  removeButton.innerHTML = '<i class="fas fa-trash"></i>';
  todoDiv.appendChild(removeButton);

  todoList.appendChild(todoDiv);
}

function handleDeleteCheck(event) {
  const item = event.target;
  if (item.classList[0] === "remove_button") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "complete_button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    item.classList.toggle("complete_button_active");
  }
}

// function filterTodo(e) {
//   const todos = todoDiv.childNodes;
//   todos.forEach(function (todo) {
//     switch (e.target.value) {
//       case "all":
//         todo.style.display = "flex";
//         break;
//       case "completed":
//         if (todo.classList.contains("completed")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//     }
//   });
// }
