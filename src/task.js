export default class Task {
  #tasks = [];

  constructor() {
    this.#tasks = [];
  }

  addTask = (description, completed, index) => {
    const newTask = {
      description,
      completed,
      index,
    };
    this.#tasks.push(newTask);
    localStorage.setItem('localStorageTasks', JSON.stringify(this.#tasks));
  }

  removeTask = (index) => {
    const result = this.#tasks.filter((task, i) => i !== index);
    this.#tasks = result;
  }

  removeMultiple = (array) => {
    for (let i = array.length - 1; i >= 0; i -= 1) {
      this.#tasks.splice(array[i], 1);
    }
  };

  updateTask = (index, content) => {
    this.#tasks[index].description = content;
    localStorage.setItem('localStorageTasks', JSON.stringify(this.#tasks));
  }

  updateState = (index, state) => {
    this.#tasks[index].completed = state;
    localStorage.setItem('localStorageTasks', JSON.stringify(this.#tasks));
  }

  updateIndex() {
    this.#tasks.forEach((task, index) => {
      task.index = index + 1;
    });
    localStorage.setItem('localStorageTasks', JSON.stringify(this.#tasks));
  }

  getTasks = () => this.#tasks;

  getTasksLength = () => this.#tasks.length

  setTasks = (tasks) => {
    this.#tasks = tasks;
  }
}
