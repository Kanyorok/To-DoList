const storageKey = 'Today\'s Tasks';

const interactiveList = () => {
  const checkedBox = document.querySelector('.staticUl');

  checkedBox.addEventListener('change', (event) => {
    const storedTasks = JSON.parse(localStorage.getItem(storageKey));
    if (event.target.matches('.checkedBox')) {
      const checkbox = event.target;
      const paragraph = checkbox.nextElementSibling;
      const taskId = parseInt(paragraph.id, 10);
      const actualVal = (taskId - 10) + 1;
      if (checkbox.checked) {
        paragraph.style.textDecoration = 'line-through';
        storedTasks.map((task) => {
          if (task.index === actualVal) {
            task.completed = true;
          }
          return task;
        });
      } else {
        paragraph.style.textDecoration = 'none';
        storedTasks.map((task) => {
          if (task.index === actualVal) {
            task.completed = false;
          }
          return task;
        });
      }
    }
    localStorage.setItem(storageKey, JSON.stringify(storedTasks));
  });
};

export default interactiveList;