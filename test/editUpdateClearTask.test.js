/**
 * @jest-environment jsdom
 */
import Task from '../src/util/editUpdateClearTask.js';
// import createDom from './__mocks__/fakeDom.js';
import { fillStorage, getStorage } from './__mocks__/fakelocalstorage.js';

describe('test update edit and clear methods', () => {
  const task = new Task();
  fillStorage();
  test('editing the task description', () => {
    task.updateTask(1, 'new content');
    expect(getStorage()[1].description).toBe('new content');
  });
  test('update the task status', () => {
    task.updateState(1, true);
    expect(getStorage()[1].completed).toBeTruthy();
  });
  test('clear all completed ', () => {
    task.removeMultiple([2, 3]);
    expect(getStorage()[2]).toBeUndefined();
    expect(getStorage()[3]).toBeUndefined();
  });
});
