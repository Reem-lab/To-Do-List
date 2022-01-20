const { globaldocument } = require('../jsdom.js');
const { deleteTasks, addElementsToPageFrom } = require('./ClearAllCompleted.js');

describe('Delete tasks with completed status set in true', () => {
  // Add some task to delete after
  const newArray = [{
    id: Date.now() + 1,
    title: 'Task number 1',
    completed: true,
    index: 0,
  },
  {
    id: Date.now() + 2,
    title: 'Task number 2',
    completed: false,
    index: 1,
  },
  {
    id: Date.now() + 3,
    title: 'Task number 3',
    completed: true,
    index: 2,
  }];

  test('Add 3 tasks, the first and the last with completed status set to true', () => {
    expect(addElementsToPageFrom(newArray)).toBe(3);
  });

  test('Delete the first and last tasks. The number of remaning tasks should be 1.', () => {
    deleteTasks();
    const remTasksCount = globaldocument.querySelector('#task').childElementCount;
    expect(remTasksCount).toBe(1);
  });

  test('Check if there are any remaining tasks with completed status set to true', () => {
    const remTasks = JSON.parse(window.localStorage.getItem('tasks'));
    for (let j = 0; j < remTasks.length; j += 1) {
      expect(remTasks[j].completed).not.toBeTruthy();
    }
  });
});