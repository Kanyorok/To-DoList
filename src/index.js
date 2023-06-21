import './styles/style.css';

const toDoTasks = [
  {
    index: 0,
    description: 'Go to Gym',
    completed: false,
  },
  {
    index: 1,
    description: 'Buy Groceries',
    completed: false,
  },
  {
    index: 2,
    description: 'Purchase Clothes',
    completed: false,
  },
];

const tasksTodo = () => {
  const divCard = toDoTasks.map((task) => `<li class="listedTasks">
              <div>
                <input type="checkbox" class="check">
                  ${task.description}
              </div>
              <span><i class="fas fa-grip-vertical"></i></span>
              </li>`);
  return divCard;
};

window.addEventListener('load', () => {
  document.querySelector('.staticUl').innerHTML = tasksTodo().join('');
});