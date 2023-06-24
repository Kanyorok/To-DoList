import createTask from './createUi.js';

export default class AllTasks {
  constructor() {
    this.taskContainer = document.querySelector('.staticUl');
    this.valTask = document.querySelector('.taskItem');
    this.tasks = [];
    this.addTask = this.addTask.bind(this);
    this.taskItem = document.querySelector('.listedTasks');
    this.form = document.querySelector('form');
  }

  storedLocal = () => {
    if (localStorage.getItem('Today\'s Tasks') == null) {
      localStorage.setItem('Today\'s Tasks', JSON.stringify(this.tasks));
    }

    const store = localStorage.getItem('Today\'s Tasks');
    if (store) {
      this.tasks = JSON.parse(store);
    }
  }

  addTask = (e) => {
    e.preventDefault();
    const taskItemVal = this.valTask.value;
    const cachedArr = localStorage.getItem('Today\'s Tasks');
    const updatedArr = cachedArr ? JSON.parse(cachedArr) : [];
    const tasksItems = {
      index: updatedArr.length + 1,
      desc: taskItemVal,
      completed: false,
    };

    this.tasks = updatedArr;
    this.tasks.push(tasksItems);
    localStorage.setItem('Today\'s Tasks', JSON.stringify(this.tasks));
    createTask(this.tasks);

    // Reset input fields
    this.valTask.value = '';
  }

  formAct = () => {
    createTask(this.tasks);
    this.form.addEventListener('submit', this.addTask);
  }
}
