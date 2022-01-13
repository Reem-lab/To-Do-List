import './style.css';

// const listContainer = document.querySelector('.list-container');

// const task1 = {
//   description: 'Fix my car',
//   completed: true,
//   index: 1,
// };

// const task2 = {
//   description: 'Watch series',
//   completed: false,
//   index: 2,
// };

// const task3 = {
//   description: 'Read articles',
//   completed: false,
//   index: 3,
// };

// const lists = [task1, task2, task3];

// function displayTasks(lists) {
//   lists.forEach((list) => {
//     const html = ` <div class"task-div"> <input type="checkbox" name="task" value="task">
//        <label class="list-item" for="task${list.index}"> ${list.description}</label><br>
//       </div>`;

//     listContainer.insertAdjacentHTML('beforeend', html);
//   });
// }

// displayTasks(lists);

import './style.css';

const listContainer = document.querySelector('.list-container');

const lists = [];


const input = document.querySelector('.input-list');


const insertElement = (list) => {
  const lastIndex = list.length - 1;
  const description = list[lastIndex];
  const div = document.createElement('div');
  div.className = 'wrap-tasks';
  const html = `<div class"task-div"> <input type="checkbox" name="task" value="task">
       <p class="list-item" > ${description}</p>
      </div>
      <div class="img-dots"><button class="btn-remove" type="button"><i class="fas fa-trash"></i></button></div>
      `;

  div.innerHTML = html;
  listContainer.insertAdjacentElement('beforeend', div);

  const deletebtn = div.querySelector('.btn-remove');

  deletebtn.addEventListener('click', () => {
    div.remove();
  });
};


  /* <i class="fas fa-ellipsis-v"></i>  */



input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    lists.push(input.value);
    insertElement(lists);
    input.value = ' ';
  }
});


local storage but on one input

const saveData = () => {
  const dataList = {
    inputDescription: input.value,
  };
  localStorage.setItem('dataList', JSON.stringify(dataList));
};

input.addEventListener('input', saveData);

window.addEventListener('load', () => {
  const dataList = JSON.parse(localStorage.getItem('dataList'));
  input.value = dataList.inputDescription;
});
