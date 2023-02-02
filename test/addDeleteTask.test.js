/**
 * @jest-environment jsdom
 */
import Task from '../src/util/addDeleteTask.js';
import createDom from './__mocks__/fakeDom.js';

describe('Add 1 item', () => {
  test('test1', () => {
    const task = new Task();
    task.addTask('Task 1', false, 1);
    expect(task.getTasks()).toHaveLength(1);
  });

  test('Add one <li> tag with new item inside', () => {
    const task = new Task();
    const ul = createDom();
    ul.appendChild(task.addTask('Task 1', false, 1));
    expect(document.querySelectorAll('#list li')).toHaveLength(1);
  });

  test('Check <li> content', () => {
    const task = new Task();
    expect(task.addTask('Task 1', false, 1).textContent).toBe('Task 1');
  });

  test('Delete 1 line', () => {
    const task = new Task();
    task.removeTask(1);
    expect(task.getTasks()).toHaveLength(0);
  });
});
