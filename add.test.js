const { addElementsToPageFrom } = require('./add.js');

describe('Add tasks to list', () => {

    beforeEach(() => {
        //  const newArray = [];
        global.document.getElementById('task').innerHtml = '';
    });
    
    test('Add new task to list', () => {
        const newArray = [];
        global.document.getElementsByClassName('input-list').value = 'reemgaby';
        expect(addElementsToPageFrom(newArray)).toBe('reemgaby');
    });
});
