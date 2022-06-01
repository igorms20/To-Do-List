
function addTask() {
    const task = document.querySelector('.task-input')
    const taskName = task.value  
    if (taskName != "") {        
        const addedTask = document.createElement('li')
        const addedTaskName = document.createElement('span')
        const checkbox = document.createElement('input')
        const remove = document.createElement('div')
        checkbox.type = "checkbox"
        checkbox.classList.add('checkbox')
        remove.classList.add('remove')
    
        addedTaskName.innerHTML = taskName    
    
        const taskList = document.querySelector('.task-list')
    
        addedTask.appendChild(checkbox)
        addedTask.appendChild(addedTaskName)
        addedTask.appendChild(remove)
        taskList.appendChild(addedTask)

        task.value = ""
    }

}

const task = document.querySelector('.task-input')

task.addEventListener("keypress", e => {
    if (e.key === "Enter" && task.value != '') {
    
        const task = document.querySelector('.task-input')
        const taskName = task.value  
    
        const addedTask = document.createElement('li')
        const addedTaskName = document.createElement('span')
        const checkbox = document.createElement('input')
        const remove = document.createElement('div')
        checkbox.type = "checkbox"
        checkbox.classList.add('checkbox')
        remove.classList.add('remove')
    
        addedTaskName.innerHTML = taskName    
    
        const taskList = document.querySelector('.task-list')
    
        addedTask.appendChild(checkbox)
        addedTask.appendChild(addedTaskName)
        addedTask.appendChild(remove)
        taskList.appendChild(addedTask)     
        
        task.value = ""
    }
})


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

