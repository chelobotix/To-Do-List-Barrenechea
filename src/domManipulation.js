import Task from './task.js';

const displayTasks = () => {
  const task = new Task();
  const ul = document.querySelector('#ulList');
  const form = document.querySelector('#addTaskForm');
  /* ------------------------ localStorage verification ----------------------- */

  if (JSON.parse(localStorage.getItem('localStorageTasks')) === null) {
    localStorage.setItem('localStorageTasks', JSON.stringify(task.getTasks()));
  } else {
    task.setTasks(JSON.parse(localStorage.getItem('localStorageTasks')));
  }

  /* ----------------------------------- DOM ---------------------------------- */
  let aux = '';
  task.getTasks().forEach((task) => {
    if (!task.completed) {
      aux += `<li>
        <form class="taskInput" id="formTask_${task.index}">
          <input class="taskInput" type="checkbox" id="task_${task.index}" name="checkbox_${task.index}"></input>
          <input class="taskInput" type="text" name="text_${task.index}" value="${task.description}"/>
          <a class="more" href="...">
            <img id="imgMore_${task.index}" class="more" src="./assets/images/more.png" alt="more" />
          </a>
        </form>
      </li>`;
    }
  });
  ul.innerHTML = aux;
  /* -------------------------------- listeners ------------------------------- */
  form.addEventListener('submit', () => {
    task.addTask(form.elements.text.value, false, task.getTasksLength() + 1);
  });
};

export default displayTasks;
