
function addTask() {
    const task = document.querySelector('.task-input')
    const taskName = task.value
    console.log(taskName)    

    const addedTask = document.createElement('li')
    const addedTaskName = document.createElement('span')
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.classList.add('checkbox')

    addedTaskName.innerHTML = taskName    

    const taskList = document.querySelector('.task-list')

    addedTask.appendChild(checkbox)
    addedTask.appendChild(addedTaskName)
    taskList.appendChild(addedTask)


}

// CHEKED TASKS
const checkboxes = document.getElementsByClassName('checkbox')

for (let i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];
    checkbox.addEventListener("click", () => {
        console.log(checkbox)
    })
    
}