import './styles/style.css';
import AllTasks from './modules/addNewTask.js';
import updateValue from './modules/updateTask.js';
import executeRemoval from './modules/remove.js';

const testWork = new AllTasks();
testWork.storedLocal();
testWork.formAct();
testWork.createTask();
executeRemoval();
updateValue();
