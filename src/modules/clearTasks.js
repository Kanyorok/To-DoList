import createTask from './createUi.js';

const storageKey = 'Today\'s Tasks';

const clearCompletedTasks = () => {
  const clearButton = document.querySelector('.clearAll');
  clearButton.addEventListener('click', () => {
    let storedTasks = JSON.parse(localStorage.getItem(storageKey));
    storedTasks = storedTasks.filter((task) => !task.completed);

    storedTasks.map((task, taskIndex) => {
      task.index = taskIndex + 1; // Update the ID value
      return task;
    });

    localStorage.setItem(storageKey, JSON.stringify(storedTasks));
    createTask(storedTasks);
  });
};

export default clearCompletedTasks;