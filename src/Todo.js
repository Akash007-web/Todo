// selectors...
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
// event Listeners....
todoButton.addEventListener('click',addTodo)
todoList.addEventListener('click',deleteCheck)
// function...
function addTodo(e) {
   e.preventDefault()
   let todoDiv = document.createElement('div')
   todoDiv.classList.add('todo')
  //  CREATE LI
   const newTodo = document.createElement('li')
   newTodo.innerText = todoInput.value
   newTodo.classList.add('todoItem')
   todoDiv.appendChild(newTodo)

  //  Check MARK BUTTON
  const checkButton = document.createElement('button')
  checkButton.classList.add('complete-btn')
  checkButton.innerHTML = '<i class="fas fa-check"></i>'
  todoDiv.appendChild(checkButton)



  //  trash  BUTTON
  const trashButton = document.createElement('button')
  trashButton.classList.add('del-btn')
  trashButton.innerHTML = '<i class="fas fa-trash"></i>'
  todoDiv.appendChild(trashButton)
// APPEND CHILD TO TODO_LIst
 todoList.appendChild(todoDiv)
todoInput.value=''
}


// DELETE THESE ITEMS
function deleteCheck(e) {
   const item = e.target
   if(item.classList[0]==='del-btn') {
     const todo = item.parentElement;
      todo.remove()
     

   }
}