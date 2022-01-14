import './style.css';

const listContainer = document.querySelector('.list-container');
// eslint-disable-next-line import/no-mutable-exports
export let lists = [];
// eslint-disable-next-line no-unused-vars
let index = 1;

// local storage
export const saveData = () => {
  localStorage.setItem('dataList', JSON.stringify(lists));
};

export const deleteTask = (i) => {
  const index = i;
  lists = lists.filter((item) => item.index !== index);
  saveData();
};

export const insertElement = (list) => {
  const description = list.desc;
  const i = list.index;
  const div = document.createElement('div');
  div.className = 'wrap-tasks';
  const html = `<div class"task-div"> <input class="checked" type="checkbox" name="task" value="task">
       <input type="text" class="list-item" value="${description}" >
      </div>
      <div class="img-dots"><button class="btn-remove" type="button"><i class="fas fa-trash"></i></button></div>
      `;

  div.innerHTML = html;
  listContainer.insertAdjacentElement('beforeend', div);

  const deletebtn = div.querySelector('.btn-remove');

  deletebtn.addEventListener('click', () => {
    div.remove();
    deleteTask(i);
  });
};

window.addEventListener('load', () => {
  if (localStorage.getItem('dataList')) {
    lists = JSON.parse(localStorage.getItem('dataList'));
    for (let i = 0; i < lists.length; i += 1) {
      insertElement(lists[i]);
    }
    index = lists.length + 1;
  }
});
