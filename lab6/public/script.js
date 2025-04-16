const listNameInput = document.getElementById('list-name-input');
const addListBtn = document.getElementById('add-list');
const listsContainer = document.getElementById('lists-container');

let todoLists = JSON.parse(localStorage.getItem('todoLists')) || [];

function saveAll() {
  localStorage.setItem('todoLists', JSON.stringify(todoLists));
}

function renderAllLists() {
  listsContainer.innerHTML = '';
  todoLists.forEach((list, listIndex) => {
    const listDiv = document.createElement('div');
    listDiv.className = 'todo-list';

    listDiv.innerHTML = `
      <h2>
        ${list.name}
        <button onclick="deleteList(${listIndex})">🗑️</button>
      </h2>
      <input type="text" placeholder="Нове завдання..." onkeypress="handleAddTask(event, ${listIndex})">
      <ul class="task-list" id="task-list-${listIndex}"></ul>
    `;

    listsContainer.appendChild(listDiv);
    renderTasks(list.tasks, listIndex);
  });
}

function renderTasks(tasks, listIndex) {
  const taskListEl = document.getElementById(`task-list-${listIndex}`);
  taskListEl.innerHTML = '';

  tasks.forEach((task, taskIndex) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button onclick="toggleComplete(${listIndex}, ${taskIndex})">✔️</button>
        <button onclick="deleteTask(${listIndex}, ${taskIndex})">🗑️</button>
      </div>
    `;
    taskListEl.appendChild(li);
  });
}

function addList() {
  const name = listNameInput.value.trim();
  if (name) {
    todoLists.push({ name, tasks: [] });
    listNameInput.value = '';
    saveAll();
    renderAllLists();
  }
}

function handleAddTask(event, listIndex) {
  if (event.key === 'Enter') {
    const input = event.target;
    const text = input.value.trim();
    if (text) {
      todoLists[listIndex].tasks.push({ text, completed: false });
      input.value = '';
      saveAll();
      renderAllLists();
    }
  }
}

function toggleComplete(listIndex, taskIndex) {
  const task = todoLists[listIndex].tasks[taskIndex];
  task.completed = !task.completed;
  saveAll();
  renderAllLists();
}

function deleteTask(listIndex, taskIndex) {
  todoLists[listIndex].tasks.splice(taskIndex, 1);
  saveAll();
  renderAllLists();
}

function deleteList(listIndex) {
  if (confirm('Видалити список?')) {
    todoLists.splice(listIndex, 1);
    saveAll();
    renderAllLists();
  }
}

addListBtn.addEventListener('click', addList);
renderAllLists();
