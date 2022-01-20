const { globaldocument } = require('./jsdom.js');
const { deleteTaskWith, addDataToLocal } = require('./remove.js');


describe('Delete tasks ', () => {
    test('delete task with id', () => {
        const newArray = [];
        globaldocument.getElementById('input-list').value = 'reemgaby';
        newArray.push({
          id: Date.now(),
          title: 'reemgaby',
          completed: false,
          index: newArray.length,
        });
        addDataToLocal(newArray);
        console.log(window.localStorage.getItem('tasks'))
        expect(deleteTaskWith('1642640345257')).toBe(0);
    })


})