const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
      integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
      crossorigin="anonymous"/>

    <title>To do List</title>
</head>
<body>
    <div class="list-items">
        <div class="to-do">Today's To Do 💪🏻</div>
        <div class="input">
            <input class="input-list" type="text" maxlength="50" placeholder="Add to your list...">
            <input type="submit" class="add" value="Add task">
        </div>
        <div id="task" class="tasks" >
            
        </div>
        <button class="deletebtn" type="button">Clear All Completed </button>
    </div>
</body>
</html>`);

global.document = dom.window.document;
global.window = dom.window;

const arrayOfTasks = [];
const tasksDiv = global.document.getElementById('task');

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
