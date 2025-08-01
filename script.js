// Load tasks from localStorage
document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => addTaskToUI(task));
}

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return;

    addTaskToUI(taskText);
    saveTask(taskText);

    input.value = "";
}

function addTaskToUI(taskText) {
    const list = document.getElementById("taskList");
    const li = document.createElement("li");
    
    const span = document.createElement("span");
    span.textContent = taskText;
    
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete-btn";
    delBtn.onclick = () => deleteTask(li, taskText);

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
}

function saveTask(taskText) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(li, taskText) {
    li.remove();
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

function clearAll() {
    document.getElementById("taskList").innerHTML = "";
    localStorage.removeItem("tasks");
}
