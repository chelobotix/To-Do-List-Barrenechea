import { fillStorage, storage } from '../../test/__mocks__/fakelocalstorage.js';

export default class Task {
  #tasks = [];

  constructor() {
    this.#tasks = [];
    fillStorage();
  }

  addTask = (description, completed, index) => {
    const newTask = {
      description,
      completed,
      index,
    };
    this.#tasks.push(newTask);
    storage.push(newTask);
    localStorage.setItem('localStorageTasks', JSON.stringify(this.#tasks));
    const li = document.createElement('li');
    li.textContent = `${this.#tasks[this.#tasks.length - 1].description}`;
    return li;
  }

  removeTask = (index) => {
    const result = this.#tasks.filter((task, i) => i !== index);
    this.#tasks = result;
  }

  getTasks = () => this.#tasks;

  getTasksLength = () => this.#tasks.length

  setTasks = (tasks) => {
    this.#tasks = tasks;
  }
}
