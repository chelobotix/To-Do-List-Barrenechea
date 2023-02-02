import { fillStorage, storage, setStorage } from '../../test/__mocks__/fakelocalstorage.js';

export default class Task {
  #tasks = [];

  constructor() {
    this.#tasks = [
      {
        description: 'task 1',
        completed: false,
        index: 1,
      },
      {
        description: 'task 2',
        completed: false,
        index: 2,
      },
    ];
    fillStorage();
  }

  removeMultiple = (array) => {
    const result = this.#tasks.filter((elem, index) => array.indexOf(index) === -1);
    this.#tasks = result;
    setStorage(result);
  }

  updateTask = (index, content) => {
    storage[index].description = content;
    this.#tasks[index].description = content;
    localStorage.setItem('localStorageTasks', JSON.stringify(this.#tasks));
  }

  updateState = (index, state) => {
    storage[index].completed = state;
    this.#tasks[index].completed = state;
    localStorage.setItem('localStorageTasks', JSON.stringify(this.#tasks));
  }

  getTasks = () => this.#tasks;

  getTasksLength = () => this.#tasks.length

  setTasks = (tasks) => {
    this.#tasks = tasks;
  }
}
