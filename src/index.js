<<<<<<< HEAD

import "./style.css";

const input = document.querySelector(".input-list");
const submit = document.querySelector(".add");
const tasksDiv = document.querySelector(".tasks");
const deletebtn = document.querySelector(".deletebtn");

//empty array
let arrayOfTasks = [];

//ckeck if there is any thing in local storage
if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

//trigger data from local storage
getDataFromLocal();

//submit tasks
submit.onclick = function () {
  if (input !== " ") addTaskToArray(input.value); //Add task to array
  input.value = " "; //empty the input
};

//click on task elemnt to delete
tasksDiv.addEventListener("click", (e) => {
  //remove from page
  if (e.target.classList.contains("del")) {
    //remove from local
    deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
    //remove from page
    e.target.parentElement.remove();
  }

  //task element and update
  if (e.target.classList.contains("checked")) {
    //toggele completed for the task
    toggleStatusTask(e.target.parentElement.getAttribute("data-id")); //here we don't call parent because we are on it
    //toggle done class
    e.target.classList.toggle("done");
=======
/* eslint-disable no-use-before-define */
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
>>>>>>> 531f72a59229ae2010bfccc6c2832444b8a1d398
  }
});

function addTaskToArray(taskText) {
  const task = {
<<<<<<< HEAD
    id: Date.now(), //make it quall to time to be different
=======
    id: Date.now(), // make it quall to time to be different
>>>>>>> 531f72a59229ae2010bfccc6c2832444b8a1d398
    title: taskText,
    completed: false,
    index: arrayOfTasks.length,
  };
<<<<<<< HEAD
  //push my tasks to array
  arrayOfTasks.push(task);

  //Add elemnt to my page
  addElementsToPageFrom(arrayOfTasks);

  //add to local storage
=======
  // push my tasks to array
  arrayOfTasks.push(task);

  // Add elemnt to my page
  addElementsToPageFrom(arrayOfTasks);

  // add to local storage
>>>>>>> 531f72a59229ae2010bfccc6c2832444b8a1d398
  addDataToLocal(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks) {
<<<<<<< HEAD
  //empty task div if has any data
  tasksDiv.innerHTML = " ";

  //looping arryof tasks

  arrayOfTasks.forEach((task) => {
    //create main div
    let div = document.createElement("div");
    div.className = "task";

    //check if task id done
    if (task.completed) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    // div.appendChild(document.createTextNode(task.title));

    //create checkbox
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.className = "checked";
    checkbox.appendChild(document.createTextNode(""));
    div.appendChild(checkbox);

    //create input description
    let desc = document.createElement("input");
    desc.setAttribute("value", task.title);
    desc.className = "desc";
    div.appendChild(desc);

    //create delete span
    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("Delete"));
    //append button to div
    div.appendChild(span);

    desc.addEventListener("change", (e) => {
=======
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
>>>>>>> 531f72a59229ae2010bfccc6c2832444b8a1d398
      task.title = e.target.value;
      addDataToLocal(arrayOfTasks);
    });

<<<<<<< HEAD
    //add div to container
=======
    // add div to container
>>>>>>> 531f72a59229ae2010bfccc6c2832444b8a1d398
    tasksDiv.appendChild(div);
  });
}

<<<<<<< HEAD
function addDataToLocal(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocal() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data); // convert into an object
=======
// function to add data on local storage
function addDataToLocal(arrayOfTasks) {
  window.localStorage.setItem('tasks', JSON.stringify(arrayOfTasks));
}

function getDataFromLocal() {
  const data = window.localStorage.getItem('tasks');
  if (data) {
    const tasks = JSON.parse(data); // convert into an object
>>>>>>> 531f72a59229ae2010bfccc6c2832444b8a1d398
    addElementsToPageFrom(tasks);
  }
}

function deleteTaskWith(taskId) {
<<<<<<< HEAD
  //filter //taskId = e.target.parentelemnt.getAttribute(data-id);
=======
  // filter //taskId = e.target.parentelemnt.getAttribute(data-id);
  // eslint-disable-next-line eqeqeq
>>>>>>> 531f72a59229ae2010bfccc6c2832444b8a1d398
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addDataToLocal(arrayOfTasks);
}

function toggleStatusTask(taskId) {
  for (let i = 0; i < arrayOfTasks.length; i += 1) {
<<<<<<< HEAD
    if (arrayOfTasks[i].id == taskId) {
      arrayOfTasks[i].completed == false
=======
    // eslint-disable-next-line eqeqeq
    if (arrayOfTasks[i].id == taskId) {
      // eslint-disable-next-line no-unused-expressions
      arrayOfTasks[i].completed === false
>>>>>>> 531f72a59229ae2010bfccc6c2832444b8a1d398
        ? (arrayOfTasks[i].completed = true)
        : (arrayOfTasks[i].completed = false);
    }
  }
  addDataToLocal(arrayOfTasks);
}

<<<<<<< HEAD
deletebtn.addEventListener("click", (id) => {
  // tasksDiv.innerHTML = " ";
  deleteTasks();
  //  tasksDiv.innerHTML = " ";
=======
deletebtn.addEventListener('click', () => {
  deleteTasks();
>>>>>>> 531f72a59229ae2010bfccc6c2832444b8a1d398
  addElementsToPageFrom(arrayOfTasks);
});

function deleteTasks() {
<<<<<<< HEAD
  const arrayOfTasks1 = arrayOfTasks.filter((task) => task.completed == true);
  arrayOfTasks1.forEach((task) => {
    deleteTaskWith(task.id);
  });
};
=======
  const arrayOfTasks1 = arrayOfTasks.filter((task) => task.completed);
  arrayOfTasks1.forEach((task) => {
    deleteTaskWith(task.id);
  });
}
>>>>>>> 531f72a59229ae2010bfccc6c2832444b8a1d398
