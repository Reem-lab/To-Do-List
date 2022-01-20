const { toggleStatusTask, addElementsToPageFrom } = require('./UpdateStatus.js');

describe('Update status completed to true', () => {
    test('test status from false to true', () => {
        const newArray = [{
            id: Date.now(),
            title: 'reemgaby',
            completed: false,
            index: 0,
          }];
          expect(addElementsToPageFrom(newArray)).toBe(1);
          expect(toggleStatusTask(newArray[0].id)).toBe(true);
    });
});
