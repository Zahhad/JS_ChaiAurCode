document.addEventListener("DOMContentLoaded", loadTasks);

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => addTaskToDOM(task));
}

// Add task
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    addTaskToDOM(taskText);
    saveTask(taskText);
    taskInput.value = "";
});

// Add task to UI
function addTaskToDOM(taskText) {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="edit">✏️</button>
            <button class="delete">❌</button>
        </div>
    `;

    // Edit task
    li.querySelector(".edit").addEventListener("click", () => {
        const newText = prompt("Edit task:", taskText);
        if (newText) {
            li.querySelector("span").innerText = newText;
            updateTask(taskText, newText);
        }
    });

    // Delete task
    li.querySelector(".delete").addEventListener("click", () => {
        li.remove();
        removeTask(taskText);
    });

    taskList.appendChild(li);
}

// Save task to localStorage
function saveTask(taskText) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Update task in localStorage
function updateTask(oldText, newText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const index = tasks.indexOf(oldText);
    if (index !== -1) {
        tasks[index] = newText;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

// Remove task from localStorage
function removeTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
