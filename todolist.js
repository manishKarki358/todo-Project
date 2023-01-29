const todoInput=document.querySelector('.todo-input')
const todoButton=document.querySelector('.todo-button')
const todoList=document.querySelector('.todo-lists')
const filterOption=document.querySelector('.select')

todoButton.addEventListener('click',addTodo)
filterOption.addEventListener('click',filterTodo)


function addTodo(){
    if(todoInput.value!=='')
    {

        const todoDiv=document.createElement('div')
        todoDiv.classList.add('new-todo')
        todoList.appendChild(todoDiv)
    
        const todoLi=document.createElement('li')
        todoLi.classList.add('new-todo-list')
        todoLi.innerText=todoInput.value
        todoDiv.appendChild(todoLi)
    
        const completedButton=document.createElement('button')
        completedButton.classList.add('completed-button')
        completedButton.innerHTML="<i class='fa fa-check'></i>"
        todoDiv.appendChild(completedButton)
    
    
        const deleteButton=document.createElement('button')
        deleteButton.classList.add('delete-button')
        deleteButton.innerHTML="<i class='fa fa-trash'></i>"
        todoDiv.appendChild(deleteButton)

        deleteButton.addEventListener('click',()=>{
            todoDiv.classList.add('disappear')
            todoDiv.addEventListener('transitionend',()=>{
                todoDiv.remove()
            })
            
        })
        completedButton.addEventListener('click',()=>{
            todoDiv.classList.toggle('completed')
            
        })
    }
    todoInput.value=""
}
function  filterTodo(e){
    const todoss=Array.from(todoList.children)
   todoss.forEach((todo)=>{
               switch(e.target.value){
            case "all":
               
                todo.style.display="flex"
            break
            case "completed":
              
                if(todo.classList.contains('completed')){
                  
                todo.style.display="flex"
            }
                else{
                    
                    todo.style.display="none"
                }
                break
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                  
                    todo.style.display="flex"
            }
                else{
                      
                    todo.style.display="none"
                }


        }
    })
    
    }
