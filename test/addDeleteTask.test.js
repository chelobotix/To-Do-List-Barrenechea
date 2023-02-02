/**
 * @jest-environment jsdom
 */
import Task from '../src/util/addDeleteTask.js';
import createDom from './__mocks__/fakeDom.js';
import { getStorage } from './__mocks__/fakelocalstorage.js';

describe('test ', () => {
  const task = new Task();
  test('test local storage', () => {
    expect(getStorage()).toHaveLength(2);
  });
  test('test add task function', () => {
    task.addTask('Task 1', false, 1);
    expect(task.getTasks()).toHaveLength(1);
  });

  test('Add one <li> tag with new item inside', () => {
    const ul = createDom();
    ul.appendChild(task.addTask('Task 1', false, 1));
    expect(document.querySelectorAll('#list li')).toHaveLength(1);
  });

  test('Check <li> content', () => {
    expect(task.addTask('Task 1', false, 1).textContent).toBe('Task 1');
  });

  test('Delete 1 line', () => {
    task.removeTask(1);
    expect(task.getTasks()).toHaveLength(2);
  });
});
