import AllTasks from './addNewTask.js';

const actionTask = new AllTasks();

const removeTask = (event) => {
  if (event.target.classList.contains('deleteBtn') && event.target.classList.contains('fa-trash')) {
    const buttonId = parseInt(event.target.id, 10);
    const cachedArr = localStorage.getItem('Today\'s Tasks');
    actionTask.tasks = JSON.parse(cachedArr);
    actionTask.tasks = actionTask.tasks.filter((task, taskIndex) => taskIndex !== buttonId);

    // Update ID values in the filtered array
    actionTask.tasks = actionTask.tasks.map((task, taskIndex) => {
      task.index = taskIndex + 1; // Update the ID value
      return task;
    });

    localStorage.setItem('Today\'s Tasks', JSON.stringify(actionTask.tasks));
    actionTask.createTask();
  }
};

const executeRemoval = () => {
  actionTask.taskContainer.addEventListener('click', removeTask);
};

export default executeRemoval;
