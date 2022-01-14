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


const listContainer = document.querySelector('.list-container');

const task1 = {
  description: 'Fix my car',
  completed: true,
  index: 1,
};

const task2 = {
  description: 'Watch series',
  completed: false,
  index: 2,
};

const task3 = {
  description: 'Read articles',
  completed: false,
  index: 3,
};

const lists = [task1, task2, task3];

const displayTasks = (lists) => {
  lists.forEach((list) => {
    const html = ` <div class"task-div"> <input type="checkbox" name="task" value="task">
       <label class="list-item" for="task${list.index}"> ${list.description}</label><br>
      </div>`;

    listContainer.insertAdjacentHTML('beforeend', html);
  });
};

displayTasks(lists);

