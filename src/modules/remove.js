import createTask from './createUi.js';

const taskContainer = document.querySelector('.staticUl');

const removeTask = (event) => {
  if (event.target.classList.contains('deleteBtn') && event.target.classList.contains('fa-trash')) {
    const buttonId = parseInt(event.target.id, 10);
    const cachedArr = localStorage.getItem('Today\'s Tasks');
    let tasks = JSON.parse(cachedArr);
    tasks = tasks.filter((task, taskIndex) => taskIndex !== buttonId);

    // Update ID values in the filtered array
    tasks = tasks.map((task, taskIndex) => {
      task.index = taskIndex + 1; // Update the ID value
      return task;
    });

    localStorage.setItem('Today\'s Tasks', JSON.stringify(tasks));
    createTask(tasks);
  }
};

const executeRemoval = () => {
  taskContainer.addEventListener('click', removeTask);
};

export default executeRemoval;
