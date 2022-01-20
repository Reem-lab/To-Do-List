const { globaldocument } = require('../jsdom.js');
const { addElementsToPageFrom } = require('./ClearAllCompleted.js');

describe('Delete tasks with completed status set in true', () => {
  // Add some task to delete after
  const newArray = [{
    id: Date.now(),
    title: 'Task number 1',
    completed: true,
    index: 0,
  }];

  test('Add a valid task to the array DOM', () => {
    expect(addElementsToPageFrom(newArray)).toBe(1);
  });
});