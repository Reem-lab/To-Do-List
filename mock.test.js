const { addTaskToArray } = require('./mock.js');

test('Add new task to list', () => {
    const arrayOfTasks = [];
    const addTaskToArray = jest.fn((taskText) => {
        const task = {
            id: Date.now(),
            title: taskText,
            completed: false,
            index: arrayOfTasks.length,
        };
        arrayOfTasks.push(task);
        // addElementsToPageFrom(arrayOfTasks);
        // addDataToLocal(arrayOfTasks);
    });
    // DOM ELEMENT
    // document.body.innerHTML =
    //     '<div class="tasks">' +
    //     '</div>';
    // addTaskToArray('This is an example');
    fn(addTaskToArray);
    expect(addTaskToArray).toBeCalled();
    // const list = document.querySelectorAll('.task');
    // expect(list).toHaveLength(1);
});