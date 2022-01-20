const { globaldocument } = require('./jsdom.js');
const { deleteTaskWith, addElementsToPageFrom } = require('./remove.js');

describe('Delete one task by id from task array, local storage, and DOM', () => {
  // Add some task to delete after
  const newArray = [];
  for (let i = 1; i <= 3; i += 1) {
    test(`Add Task number ${i}. It returns the number of tasks from the DOM with should match with the array's length.`, () => {
      globaldocument.getElementById('input-list').value = `Task number ${i}`;
      newArray.push({
        id: Date.now(),
        title: `Task number ${i}`,
        completed: false,
        index: newArray.length,
      });
      expect(addElementsToPageFrom(newArray)).toBe(i);
    });
  }

  test('Delete one task. It returns the number of remaning tasks to be equal to the number of tasks in local storage.', () => {
    const idToDel = newArray[1].id;
    expect(deleteTaskWith(idToDel)).toBe(JSON.parse(window.localStorage.getItem('tasks')).length);
  });

  test('Delete remaing tasks one by one to empty the list', () => {
    const remTasks = JSON.parse(window.localStorage.getItem('tasks'));
    for (let j = 0; j < remTasks.length; j += 1) {
      expect(deleteTaskWith(remTasks[j].id)).toBe(JSON.parse(window.localStorage.getItem('tasks')).length);
    }
  });

  test('Delete an unexistent task from an empty array does not affect the web execution', () => {
    expect(deleteTaskWith(1)).not.toBeUndefined();
  });
});
