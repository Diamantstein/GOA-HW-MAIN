


export const tasks = []


export function addTask (taskText) {
    const task = {
        text: taskText,
        completed: false
    }
    tasks.push(task)
}


export function toggleTaskComp(index) {
    tasks[index].completed = !tasks[index].completed

}

export function removeTask (index) {
    tasks.splice (index, 1)

}

export function renderTasks(taskListenElement) {
    taskListElement.innerHTML = ''
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li')
        taskElement.textContent = task.text

        if (task.completed) {
            taskElement.classList.add('Completed')
        }

        taskElement.addEventListener('click', () => {
            toggleTaskComp(index)
            renderTasks(taskListElement)
        })

        const removeButton = document.getElement('button')
        removeButton.textContent = 'Remove'
        removeButton.addEventListener('click', (event) => {
            event.stopPropagation()
            removeTask(index)
            renderTasks(taskListElement)
        })

        taskElement.appendChild(removeButton)
        taskElement.appendChild(taskElement)
    })

}
