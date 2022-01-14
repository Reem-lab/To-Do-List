import './style.css';
import {
  insertElement,
  lists,
  saveData,
// eslint-disable-next-line import/extensions
} from './createList';

const completed = false;
let index = 1;
const input = document.querySelector('.input-list');

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const task = {
      desc: input.value,
      completed,
      index,
    };
    lists.push(task);
    insertElement(task);
    saveData();
    index += 1;
    input.value = ' ';
  }
});
