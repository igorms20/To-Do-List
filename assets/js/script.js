const task = document.querySelector('.task-input')
const taskAddBtn = document.querySelector('.task-add-button')
const taskList = document.querySelector('.task-list')
const taskOptions = document.querySelector('.task-options')

taskAddBtn.addEventListener("click", () => {
    if (task.value != "") {
        addTask()
    }
})


task.addEventListener("keypress", e => {
    if (e.key === "Enter" && task.value != '') {
        addTask()
    }
})

let count = 1
function addTask() {
    const addedTask = document.createElement('li')
    const addedTaskName = document.createElement('label')
    const checkbox = document.createElement('input')
    const remove = document.createElement('div')
    checkbox.id = `checkbox${count}`
    checkbox.type = "checkbox"
    checkbox.classList.add('checkbox')
    remove.classList.add('remove')

    addedTaskName.setAttribute('for', `checkbox${count}`)
    addedTaskName.innerHTML = task.value 

    addedTask.appendChild(checkbox)
    addedTask.appendChild(addedTaskName)
    addedTask.appendChild(remove)
    taskList.appendChild(addedTask)

    task.value = ""

    taskOptions.style.display = "flex"

    count += 1
}


function removeTask(e) {
    const removeButton = e.target.className
    if (removeButton === 'remove') {
        const removedTask = e.target.parentElement    
        // removedTask.style.display = "none"
        removedTask.remove()        
    }     
}

const tasksContainer = document.querySelector('.tasks')
tasksContainer.addEventListener("click", removeTask)
// tasksContainer.addEventListener("click", checkTask)


const clearAllBtn = document.getElementById('clear-all')
const checkAllBtn = document.getElementById('check-all')
const allTasks = document.getElementsByTagName('li')

clearAllBtn.addEventListener("click", () => { 
    while (allTasks.length > 0) {
        allTasks[0].remove()    
    }
})

let checkedTasks = false
checkAllBtn.addEventListener("click", () => {    
    const checkboxes = document.getElementsByClassName('checkbox')

    if (checkedTasks === false) {        
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = true
        }

        checkAllBtn.innerHTML = "Desmarcar todas as tarefas"
    } else {
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false
        }

        checkAllBtn.innerHTML = "Marcar todas as tarefas"
    }

    checkedTasks = !checkedTasks
})


if (allTasks.length === 0) {
    taskOptions.style.display = "none"
}