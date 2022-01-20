const { globaldocument } = require('./jsdom.js');
const { deleteTaskWith, addDataToLocal } = require('./remove.js');

describe('Delete tasks ', () => {
  test('Delete task with id', () => {
    const newArray = [];
    globaldocument.getElementById('input-list').value = 'reemgaby';
    const currentTime = Date.now();
    newArray.push({
      id: currentTime,
      title: 'reemgaby',
      completed: false,
      index: newArray.length,
    });
    addDataToLocal(newArray);
    expect(deleteTaskWith(currentTime)).toBe(0);
  });
});