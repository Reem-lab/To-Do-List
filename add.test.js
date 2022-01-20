const { globaldocument } = require('./jsdom.js');
const { addElementsToPageFrom } = require('./add.js');

describe('Add tasks to list', () => {
  test('Add new task to list', () => {
    const newArray = [];
    globaldocument.getElementById('input-list').value = 'reemgaby';
    newArray.push({
      id: Date.now(),
      title: 'reemgaby',
      completed: false,
      index: newArray.length,
    });
    expect(addElementsToPageFrom(newArray)).toBe('reemgaby');
  });
  test('Adding a empty input === empty string', () => {
    const newArray = [];
    globaldocument.getElementById('input-list').value = '';
    newArray.push({
      id: Date.now(),
      title: '',
      completed: false,
      index: newArray.length,
    });
    expect(addElementsToPageFrom(newArray)).not.toBe('');
  });
});
