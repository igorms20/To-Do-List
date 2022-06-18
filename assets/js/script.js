const task = document.querySelector('.task-input')

const taskAddBtn = document.querySelector('.task-add-button')

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

function addTask() {
    const addedTask = document.createElement('li')
    const addedTaskName = document.createElement('span')
    const checkbox = document.createElement('input')
    const remove = document.createElement('div')
    checkbox.type = "checkbox"
    checkbox.classList.add('checkbox')
    remove.classList.add('remove')

    addedTaskName.innerHTML = task.value   

    const taskList = document.querySelector('.task-list')

    addedTask.appendChild(checkbox)
    addedTask.appendChild(addedTaskName)
    addedTask.appendChild(remove)
    taskList.appendChild(addedTask)

    task.value = ""

}


function removeTask(e) {
    const removeButton = e.target.className
    if (removeButton === 'remove') {
        const removedTask = e.target.parentElement    
        removedTask.classList.add('removed')        
    }     
}
    

function checkTask(e) {
    const checkedTask = e.target.parentElement
    checkedTask.classList.toggle('checked')
}

const tasksContainer = document.querySelector('.tasks')
tasksContainer.addEventListener("click", removeTask)
tasksContainer.addEventListener("click", checkTask)

