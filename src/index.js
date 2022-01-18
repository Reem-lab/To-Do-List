import './style.css';

const input = document.querySelector('.input-list');
const submit = document.querySelector('.add');
const tasksDiv = document.querySelector('.tasks');
const deletebtn = document.querySelector('.deletebtn');

// empty array
let arrayOfTasks = [];

// ckeck if there is any thing in local storage
if (localStorage.getItem('tasks')) {
  arrayOfTasks = JSON.parse(localStorage.getItem('tasks'));
}

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

function addTaskToArray(taskText) {
  const task = {
    id: Date.now(), // make it quall to time to be different
    title: taskText,
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

function getDataFromLocal() {
  const data = window.localStorage.getItem('tasks');
  if (data) {
    const tasks = JSON.parse(data); // convert into an object
    addElementsToPageFrom(tasks);
  }
}

function deleteTaskWith(taskId) {
  // filter //taskId = e.target.parentelemnt.getAttribute(data-id);
  // eslint-disable-next-line eqeqeq
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addDataToLocal(arrayOfTasks);
}

function toggleStatusTask(taskId) {
  for (let i = 0; i < arrayOfTasks.length; i += 1) {
    if (arrayOfTasks[i].id === +taskId) { // +to make it numbers
      arrayOfTasks[i].completed = !arrayOfTasks[i].completed;
    }
  }
  addDataToLocal(arrayOfTasks);
}

function deleteTasks() {
  const arrayOfTasks1 = arrayOfTasks.filter((task) => task.completed);
  arrayOfTasks1.forEach((task) => {
    deleteTaskWith(task.id);
  });
}

deletebtn.addEventListener('click', () => {
  deleteTasks();
  addElementsToPageFrom(arrayOfTasks);
});

// trigger data from local storage
getDataFromLocal();

// submit tasks
submit.onclick = () => {
  if (input !== ' ') addTaskToArray(input.value); // Add task to array
  input.value = ' '; // empty the input
};

// click on task elemnt to delete
tasksDiv.addEventListener('click', (e) => {
  // remove from page
  if (e.target.classList.contains('del')) {
    // remove from local
    deleteTaskWith(e.target.parentElement.getAttribute('data-id'));
    // remove from page
    e.target.parentElement.remove();
  }

  // task element and update
  if (e.target.classList.contains('checked')) {
    // toggele completed for the task
    toggleStatusTask(e.target.parentElement.getAttribute('data-id')); // here we don't call parent because we are on it
    // toggle done class
    e.target.classList.toggle('done');
  }
});
