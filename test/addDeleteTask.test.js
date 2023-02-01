import Task from '../src/util/addDeleteTask.js';

describe('Add', () => {
  test('test1', () => {
    const task = new Task();
    task.addTask('Task 1', false, 1);
    task.addTask('Task 2', false, 2);
    expect(task.getTasks()).toHaveLength(1);
  });
});
