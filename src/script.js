// const listContainer = document.querySelector('.list-container');

// const lists =[];

// const createNewTask = (list) => {

//      listContainer.innerHTML = `<div class"task-div">
//    <input type="checkbox" name="task" value="task">
//      <label class="list-item" for="task${list.index}"> ${list.description}</label><br>
//     </div>`;

// }

// lists.forEach((list)=>{

// })

const listContainer = document.querySelector('.list-container');

class List {
  lists = [];

  constructor(description) {
    this.desciption = description;
  }

  static setLocalStorage = () => {
    const data = JSON.stringify(List.lists);
    localStorage.setItem('lists', data);
  }

  deleteTask(description) {
    List.lists = List.lists.filter((list) => list.description !== description);
  }

  createToDoList(list) {
    const taskDiv = document.createElement('div');
    const description = document.createElement('label');
    const checkBox = document.createElement('checkbox');
    const dotsIcon = document.createElement('img');
    const deletelist = document.createElement('button');

    taskDiv.appendChild(checkBox);
    taskDiv.appendChild(description);
    taskDiv.appendChild(dotsIcon);
    taskDiv.appendChild(deletelist);
    listContainer.appendChild(taskDiv);

    deletelist.addEventListener('click', () => {
      this.deleteTask(list.description);
      listContainer.removeChild(taskDiv);
    });
  }

  iterateList() {
    List.lists.forEach((list) => {
      this.createToDoList(list);
    });
  }

  saveTasks() {
    const list = new List(description);
    lists.push(list);
    List.setLocalStorage(List.lists);
    this.createToDoList(list);
  }
}

const input = document.querySelector('.input-list');

const list = new List();

input.addEventListener('keydown', (e) => {
  // e.preventDefault();
  // console.log(e.key);

  if (e.key === 'Enter') {
    saveTasks();
    description.value = ' ';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('lists') !== null) {
    const myList = JSON.parse(localStorage.getItem('lists'));
    List.lists = mylist;
  }
  list.iterateList();
});