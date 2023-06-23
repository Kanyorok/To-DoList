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

  createTask = () => {
    this.taskContainer.innerHTML = '';
    this.tasks.forEach((task, index) => {
      const taskComponent = document.createElement('li');
      taskComponent.classList.add('listedTasks');
      taskComponent.setAttribute('id', `${index + 20}`);
      const divisionSect = document.createElement('div');
      divisionSect.classList.add('itemsTasks');
      taskComponent.append(divisionSect);
      const infoInput = document.createElement('input');
      infoInput.setAttribute('type', 'checkbox');
      const paragraph = document.createElement('p');
      paragraph.classList.add('editText');
      paragraph.innerHTML = `${task.desc}`;
      paragraph.setAttribute('id', `${index + 10}`);
      divisionSect.appendChild(infoInput);
      divisionSect.appendChild(paragraph);
      const spanned = document.createElement('button');
      const italic = document.createElement('i');
      italic.classList.add('fas');
      italic.setAttribute('id', `${index}`);
      italic.classList.add('deleteBtn');
      italic.classList.add('fa-grip-vertical');
      spanned.append(italic);
      taskComponent.append(spanned);

      this.taskContainer.appendChild(taskComponent);
    });
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
    this.createTask();

    // Reset input fields
    this.valTask.value = '';
  }

  formAct = () => {
    this.form.addEventListener('submit', this.addTask);
  }
}
