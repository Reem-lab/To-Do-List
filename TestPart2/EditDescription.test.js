const { globaldocument } = require('../jsdom.js');
const { addElementsToPageFrom, updateDesc } = require('./EditDescription.js');

describe('Update the description of task', () => {
  // Add some task to delete after
  const newArray = [{
    id: Date.now(),
    title: 'reemgaby',
    completed: true,
    index: 0,
  }];

  test('Add one task the Dom', () => {
    expect(addElementsToPageFrom(newArray)).toBe(1);
  });

  test('Update the description of task ', () => {
    const status = globaldocument.querySelector('#task .desc');
    status.value = 'reemgabyUpdated';
    expect(updateDesc(newArray[0])).toBe('reemgabyUpdated');
  });

  // test('Update the task description', () => {
  //   const status = globaldocument.querySelector('#task .desc');
  //   status.value = 'reemgabyupdate';
  //   globaldocument.querySelector('#task .desc').dispatchEvent(new globalwindow.MouseEvent('change'));
    // expect(JSON.parse(window.localStorage.getItem('tasks'))[0].title).toBe('reemgabyupdate');
  // });

});