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

  removeBook = (index) => {
    const result = this.#tasks.filter((task, i) => i !== index);
    this.#tasks = result;
    localStorage.setItem('localStorageTasks', JSON.stringify(this.#tasks));
    window.location.reload();
  }

  getTasks = () => this.#tasks;

  getTasksLength = () => this.#tasks.length

  setTasks = (tasks) => {
    this.#tasks = tasks;
  }
}
