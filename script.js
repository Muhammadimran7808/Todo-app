document.addEventListener("DOMContentLoaded", function () {
    const todoInput = document.getElementById("todoInput");
    const addBtn = document.getElementById("addBtn");
    const todoList = document.getElementById("todoList");
    const deleteAllBtn = document.getElementById("clear")
    const tasks = document.getElementById("tasks")

    // Load todos from local storage if available
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    function renderTodos() {
        todoList.innerHTML = "";
        todos.forEach((todo, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
        ${todo}
        <button class="delete-btn" data-index="${index}">Delete</button>`;
            todoList.appendChild(li);
        });
    }

    renderTodos();
    countTodo();

    addBtn.addEventListener("click", function () {
        const newTodo = todoInput.value.trim();
        if (newTodo !== "") {
            todos.push(newTodo);
            localStorage.setItem("todos", JSON.stringify(todos));
            renderTodos();
            countTodo();
            todoInput.value = "";
        }
    });

    todoList.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-btn")) {
            const index = e.target.getAttribute("data-index");
            todos.splice(index, 1);
            localStorage.setItem("todos", JSON.stringify(todos));
            renderTodos();
            countTodo();
        }
    });

    
    deleteAllBtn.addEventListener('click', ()=>{
        todos.length = 0;
        localStorage.removeItem("todos");
        renderTodos();
        countTodo();
    })

    function countTodo(){
        tasks.innerHTML = todos.length
    }
});
