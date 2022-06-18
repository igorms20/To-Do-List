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

    const taskList = document.querySelector('.task-list')

    addedTask.appendChild(checkbox)
    addedTask.appendChild(addedTaskName)
    addedTask.appendChild(remove)
    taskList.appendChild(addedTask)

    task.value = ""
    count += 1
}


function removeTask(e) {
    const removeButton = e.target.className
    if (removeButton === 'remove') {
        const removedTask = e.target.parentElement    
        removedTask.style.display = "none"        
    }     
}

const tasksContainer = document.querySelector('.tasks')
tasksContainer.addEventListener("click", removeTask)
// tasksContainer.addEventListener("click", checkTask)


const clearAllBtn = document.getElementById('clear-all')
const checkAllBtn = document.getElementById('check-all')
const allTasks = document.getElementsByTagName('li')

clearAllBtn.addEventListener("click", () => {
    for (let i = 0; i < allTasks.length; i++) {
        allTasks[i].style.display = "none"       
    }
})

checkAllBtn.addEventListener("click", () => {
    const checkboxes = document.getElementsByClassName('checkbox')
    // const labels = document.getElementsByTagName('label')
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].setAttribute("checked", "")        
    }
})
