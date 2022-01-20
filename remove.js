const { globaldocument } = require('./jsdom.js');

const del = globaldocument.getElementById('delete');

function addDataToLocal(arrayOfTasks) {
  window.localStorage.setItem('tasks', JSON.stringify(arrayOfTasks));
}

function deleteTaskWith(taskId) {
  let arrayOfTasks = JSON.parse(window.localStorage.getItem('tasks'));
  arrayOfTasks = arrayOfTasks.filter((task) => task.id !== +taskId);
  addDataToLocal(arrayOfTasks);
  return arrayOfTasks.length;
}

exports.deleteTaskWith = deleteTaskWith;
exports.addDataToLocal = addDataToLocal;