const { addElementsToPageFrom } = require('./add.js');

describe('Add tasks to list', () => {
    const newArray = [];
    beforeEach(() => {
        //  const newArray = [];
        global.document.getElementById('task').innerHtml = '';
    });

    test('Add new task to list', () => {
        global.document.getElementsByClassName('input-list').value = 'reemgaby';
        newArray.push({
            id: Date.now(),
            title: 'reemgaby',
            completed: false,
            index: newArray.length,
        });
        expect(addElementsToPageFrom(newArray)).toBe('reemgaby');
    });

    test('Adding a empty input === undefined', () => {
        global.document.getElementsByClassName('input-list').value = '';
        newArray.push({
            id: Date.now(),
            title: '',
            completed: false,
            index: newArray.length,
        });
        expect(addElementsToPageFrom(newArray)).toBe(undefined);
    });
});
