const taskContainer = document.querySelector('.staticUl');

const createTask = (info) => {
  const actionTask = info;
  taskContainer.innerHTML = '';
  actionTask.forEach((task, index) => {
    const taskComponent = document.createElement('li');
    taskComponent.classList.add('listedTasks');
    taskComponent.setAttribute('id', `${index + 20}`);
    const divisionSect = document.createElement('div');
    divisionSect.classList.add('itemsTasks');
    taskComponent.append(divisionSect);
    const infoInput = document.createElement('input');
    infoInput.classList.add('checkedBox');
    infoInput.setAttribute('type', 'checkbox');
    const paragraph = document.createElement('p');
    paragraph.classList.add('editText');
    paragraph.innerHTML = `${task.desc}`;
    paragraph.setAttribute('id', `${index + 10}`);
    if (task.completed === true) {
      infoInput.checked = true;
      paragraph.style.textDecoration = 'line-through';
    } else {
      infoInput.checked = false;
      paragraph.style.textDecoration = 'none';
    }
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

    taskContainer.appendChild(taskComponent);
  });
};

export default createTask;