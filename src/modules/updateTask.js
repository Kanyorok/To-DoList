const storageKey = 'Today\'s Tasks';

const handleEdit = (e) => {
  if (e.target.classList.contains('editText')) {
    const storedTasks = JSON.parse(localStorage.getItem(storageKey));

    const store = storedTasks.map((tasked) => tasked.index);
    const editableParagraph = document.getElementById(e.target.id);
    const buttonId = parseInt(e.target.id, 10);
    const actualId = buttonId - 10;
    for (let i = 0; i < store.length; i += 1) {
      const testV = store[i] - 1;
      if (actualId === testV) {
        const targetTask = document.getElementById(actualId.toString());
        if (targetTask && targetTask.classList.contains('fa-grip-vertical')) {
          targetTask.classList.replace('fa-grip-vertical', 'fa-trash');
          const liStyle = actualId + 20;
          const testCase = document.getElementById(liStyle.toString());
          testCase.style.backgroundColor = 'green';
        }
      }
    }
    const inputValue = editableParagraph.textContent.trim();
    const input = document.createElement('input');

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        const updatedValue = input.value.trim();
        input.replaceWith(editableParagraph);
        editableParagraph.textContent = updatedValue;

        const actualId = buttonId - 10;
        for (let i = 0; i < store.length; i += 1) {
          const testV = store[i] - 1;
          if (actualId === testV) {
            const targetTask = document.getElementById(actualId.toString());
            if (targetTask && targetTask.classList.contains('fa-trash')) {
              targetTask.classList.replace('fa-trash', 'fa-grip-vertical');
              const liStyle = actualId + 20;
              const testCase = document.getElementById(liStyle.toString());
              testCase.style.backgroundColor = 'transparent';
            }
          }
        }

        const updatedTasks = storedTasks.map((task) => {
          if (task.desc === inputValue) {
            task.desc = updatedValue;
          }
          return task;
        });
        localStorage.setItem(storageKey, JSON.stringify(updatedTasks));
      }
    };

    input.value = inputValue;

    input.addEventListener('keydown', handleKeyDown);
    editableParagraph.replaceWith(input);
    input.focus();
  }
};

const updateValue = () => {
  const paragraph = document.querySelector('.staticUl');
  paragraph.addEventListener('dblclick', handleEdit);
};

export default updateValue;