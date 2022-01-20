const { globaldocument } = require('./jsdom.js');
const del = globaldocument.getElementById('delete');


function addDataToLocal(arrayOfTasks) {
    window.localStorage.setItem('tasks', JSON.stringify(arrayOfTasks));
  }


function deleteTaskWith(taskId) {
    let arrayOfTasks = JSON.parse(window.localStorage.getItem('tasks'));
    console.log(arrayOfTasks);
      arrayOfTasks = arrayOfTasks.filter((task) => task.id !== +taskId);
      console.log(arrayOfTasks);
    return arrayOfTasks.length;
    // addDataToLocal(arrayOfTasks);
  }


exports.deleteTaskWith = deleteTaskWith;
exports.addDataToLocal =addDataToLocal;