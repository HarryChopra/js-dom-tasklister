const tasksEl = document.querySelector('ul#tasks');
const taskDescriptionEl = document.querySelector('input#new-task-description');
const formEl = document.querySelector('form#create-task-form');

function addDeleteButton(el) {
    const delBtn = document.createElement('button');
    delBtn.textContent = 'x';
    delBtn.style.marginLeft = '5px';
    el.append(delBtn);
}

function addTaskHandler(e) {
    e.preventDefault();
    const taskEl = document.createElement('li');
    taskEl.textContent = taskDescriptionEl.value;
    e.target.reset();
    addDeleteButton(taskEl);
    tasksEl.appendChild(taskEl);
}

function deleteTaskHandler(e) {
    if (e.target.nodeName === 'BUTTON') e.target.parentNode.remove();
}

function addListeners() {
    formEl.addEventListener('submit', addTaskHandler);
    tasksEl.addEventListener('click', deleteTaskHandler);
}

document.addEventListener('DOMContentLoaded', addListeners);
