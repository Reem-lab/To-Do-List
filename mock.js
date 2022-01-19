let arrayOfTasks = [];

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
  // addElementsToPageFrom(arrayOfTasks);

  // add to local storage
  // addDataToLocal(arrayOfTasks);
}

function deleteTaskWith(taskId) {
  arrayOfTasks = arrayOfTasks.filter((task) => task.id !== +taskId);
  // addDataToLocal(arrayOfTasks);
}

// function deleteTasks() {
//   const arrayOfTasks1 = arrayOfTasks.filter((task) => task.completed);
//   arrayOfTasks1.forEach((task) => {
//     deleteTaskWith(task.id);
//   });
// }

exports.addTaskToArray = addTaskToArray;
// exports.deleteTasks = deleteTaskWith;