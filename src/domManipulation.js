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
          <input class="taskInput" type="checkbox" id="task_${task.index}" name="checkbox"></input>
          <input class="taskInput" type="text" name="text" value="${task.description}"/>
          <a class="more" href="">
            <img id="imgMore_${task.index}" class="more" src="./assets/images/more.png" alt="more" />
          </a>
        </form>
      </li>`;
    }
  });
  ul.innerHTML = aux;

  function formatForm(identifier, form, e) {
    if (e.type === 'focus') {
      document.querySelector(identifier).src = './assets/images/trash.png';
      form.classList.add('formBGFocus');
      form.elements.text.classList.add('formBGFocus');
    } else {
      document.querySelector(identifier).src = './assets/images/more.png';
      form.classList.remove('formBGFocus');
      form.elements.text.classList.remove('formBGFocus');
    }
  }

  /* -------------------------------- listeners ------------------------------- */
  form.addEventListener('submit', () => {
    task.addTask(form.elements.text.value, false, task.getTasksLength() + 1);
  });

  document.querySelectorAll('form.taskInput').forEach((form, index) => {
    const identifier = `#imgMore_${index + 1}`;
    form.elements.text.addEventListener('focus', (e) => {
      formatForm(identifier, form, e);
      document.querySelector(identifier).addEventListener('click', () => {
        task.removeTask(index);
        task.updateIndex();
      });
    });

    form.elements.text.addEventListener('blur', (e) => {
      formatForm(identifier, form, e);
    });

    form.elements.text.addEventListener('keyup', () => {
      task.updateTask(index, form.elements.text.value);
    });

    form.elements.checkbox.addEventListener('change', (e) => {
      if (e.currentTarget.checked) {
        form.elements.text.classList.add('line-through');
      } else {
        form.elements.text.classList.remove('line-through');
      }
    });
  });

  document.querySelector('p.clearAll').addEventListener('click', () => {
    const aux = [];
    document.querySelectorAll('form.taskInput').forEach((form, index) => {
      if (form.checkbox.checked) {
        aux.push(index);
      }
    });
    task.removeMultiple(aux);
    task.updateIndex();
    window.location.reload();
  });
};

export default displayTasks;
