const todoTask = document.querySelector('.todo-task');
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector('.todo-list');


todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteComplete);

function addTodo(event){
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo','draggable')

    const newTodo = document.createElement('li');
    newTodo.innerText= todoTask.value;
    newTodo.classList.add("todo-task")
    todoDiv.appendChild(newTodo)

    const completeBtn = document.createElement('button')
    completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    completeBtn.classList.add("complete-btn")
    todoDiv.appendChild(completeBtn)

    const trashBtn = document.createElement('button')
    trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashBtn.classList.add("delete-btn")
    todoDiv.appendChild(trashBtn)

    todoList.appendChild(todoDiv)    
}
function deleteComplete(event){
    event.preventDefault()
    const item = event.target;
    if (item.classList[0] === 'delete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("fall");
        todo.addEventListener('transitionend',function(){
            todo.remove()
        })
    }
    if (item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

const draggables= document.querySelectorAll('.draggable')
const container = document.querySelectorAll(".Entire-list")

draggables.forEach(draggable =>{
    draggable.addEventListener('dragstart',() => {
        console.log('drag started')
    })
})