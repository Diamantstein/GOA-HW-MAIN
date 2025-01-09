import {addTask, addTasks, renderTasks, tasks} from './tasks.js'


const taskInput = document.getElementById('input')
const addTaskButton = document.getElementById('addTaskButton')
const taskList = document.getElementById('tasks')

if (localStorage.getItem('tasks')) {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'))
    savedTasks.forEach(task => {
        addTask(task.text)
    })
    renderTasks(taskList)


}

addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim()
    if (taskText !== '') {
        addTask(taskText) 
        taskInput.value = ''
        renderTasks(taskList)
        saveTasksToLocalStorage()
    }

})


function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}


renderTasks(taskList)