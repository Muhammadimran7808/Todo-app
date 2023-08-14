let addBtn = document.getElementsByClassName("add-btn")[0]
let todoList = document.getElementsByClassName("todo-list")[0]
let input = document.getElementById("todo")
let inputTodo = ""
if(localStorage.length === 0){
    var counter = 0;
}
else{
    counter = (localStorage.length)
}


document.body.onload = ()=>{
    for (let i = 0; i < localStorage.length; i++) {

        inputTodo += `
        <div class="todo">
                <p>${localStorage.getItem(i)}</p>
                <div id="${i}" title="Delete todo" class="delete-btn">
                <i class="fa-solid fa-trash"></i>
                </div>
            </div>
            `
        todoList.innerHTML = inputTodo
        input.value = ""
    }
}









addBtn.addEventListener("click", () => {
    if (input.value == "") { }
    else {
        localStorage.setItem(`${counter}`,input.value)
        inputTodo += `
        <div class="todo">
                <p>${localStorage.getItem(counter)}</p>
                <div id="${counter}" class="delete-btn" title="Delete todo">
                <i class="fa-solid fa-trash"></i>
                </div>
            </div>
            `
    }
    counter +=1
    todoList.innerHTML = inputTodo
    input.value = ""
})

let deleteBtn = document.getElementsByClassName("delete-btn")
let d = Array.from(deleteBtn)
for (let i of d) {
    i.addEventListener('click', () => {
        // localStorage.removeItem()
        console.log("jbubb "+i.id)
    })
}


let tasks = document.getElementById("tasks")
tasks.innerHTML = localStorage.length
document.addEventListener('click',()=>{
    tasks.innerHTML = localStorage.length
})

