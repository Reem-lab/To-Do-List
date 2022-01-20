const { globaldocument } = require('./jsdom.js');

const arrayOfTasks = [];
const tasksDiv = globaldocument.getElementById('task');
const taskInput = globaldocument.getElementById('input-list');
// function to add data on local storage
function addDataToLocal(arrayOfTasks) {
  window.localStorage.setItem('tasks', JSON.stringify(arrayOfTasks));
}
function addElementsToPageFrom(arrayOfTasks) {
  // empty task div if has any data
  tasksDiv.innerHTML = ' ';
  // looping arryof tasks
  arrayOfTasks.forEach((task) => {
    // create main div
    const div = document.createElement('div');
    div.className = 'task';
    // check if task id done
    if (task.completed) {
      div.className = 'task done';
    }
    div.setAttribute('data-id', task.id);
    // create checkbox
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.className = 'checked';
    checkbox.appendChild(document.createTextNode(''));
    div.appendChild(checkbox);
    // create input description
    const desc = document.createElement('input');
    desc.setAttribute('value', task.title);
    desc.className = 'desc';
    div.appendChild(desc);
    // create delete span
    const span = document.createElement('span');
    span.className = 'del';
    span.id = 'delete';
    span.appendChild(document.createTextNode('Delete'));
    // append button to div
    div.appendChild(span);
    desc.addEventListener('change', (e) => {
      task.title = e.target.value;
      addDataToLocal(arrayOfTasks);
    });
    // add div to container
    tasksDiv.appendChild(div);
  });
  return taskInput.value;
}
function addTaskToArray() {
  const task = {
    id: Date.now(), // make it quall to time to be different
    title: ' ',
    completed: false,
    index: arrayOfTasks.length,
  };
  // push my tasks to array
  arrayOfTasks.push(task);
  // Add elemnt to my page
  addElementsToPageFrom(arrayOfTasks);
  // add to local storage
  addDataToLocal(arrayOfTasks);
}
exports.addElementsToPageFrom = addElementsToPageFrom;
exports.addTaskToArray = addTaskToArray;