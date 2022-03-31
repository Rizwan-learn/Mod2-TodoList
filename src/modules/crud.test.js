import { addTask, removeTask } from '../__mock__/crud.js';

describe('crud', () => {
  test('add task', () => {
    expect(addTask(1, false, 'task1')).toEqual([
      { index: 1, completed: false, description: 'task1' },
    ]);
  });

  test('remove task', () => {
    addTask(1, false, 'task1');
    addTask(2, false, 'task2');
    addTask(3, false, 'task3');
    expect(removeTask(1)).toEqual([
      {
        completed: false,
        description: 'task2',
        index: 1,
      },
      {
        completed: false,
        description: 'task3',
        index: 2,
      },
    ]);
  });
});
