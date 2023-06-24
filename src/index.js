import './styles/style.css';
import AllTasks from './modules/addNewTask.js';
import updateValue from './modules/updateTask.js';
import executeRemoval from './modules/remove.js';
import interactiveList from './modules/interactiveList.js';
import clearCompletedTasks from './modules/clearTasks.js';

const testWork = new AllTasks();
clearCompletedTasks();
testWork.storedLocal();

testWork.formAct();

executeRemoval();
updateValue();
interactiveList();
