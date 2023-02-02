import { fillStorage, storage } from '../../test/__mocks__/fakelocalstorage.js';

export default class Task {
  #tasks = [];

  constructor() {
    this.#tasks = [];
    fillStorage();
  }

  removeMultiple = (array) => {
    const result = this.#tasks.filter((elem, index) => array.indexOf(index) === -1);
    this.#tasks = result;
  }

  updateTask = (index, content) => {
    this.#tasks[index].description = content;
    localStorage.setItem('localStorageTasks', JSON.stringify(this.#tasks));
  }

  updateState = (index, state) => {
    this.#tasks[index].completed = state;
    localStorage.setItem('localStorageTasks', JSON.stringify(this.#tasks));
  }

  getTasks = () => this.#tasks;

  getTasksLength = () => this.#tasks.length

  setTasks = (tasks) => {
    this.#tasks = tasks;
  }
}
