const {addTaskToArray, deleteTasks} = require('./src/index.js');

Test('Add new task to list', () => {
    let arrayOfTasks = [];
    const addTaskToArray = jest.fn((taskText) => {
        const task = {
            id: Date.now(), 
            title: taskText,
            completed: false,
            index: arrayOfTasks.length,
          };
          arrayOfTasks.push(task);

          addElementsToPageFrom(arrayOfTasks);
          addDataToLocal(arrayOfTasks);
    })
     
})