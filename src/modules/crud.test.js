import { addTask, removeTask } from '../__mock__/crud.js';

describe('crud', () => {
  test('add task', () => {
    expect(addTask(1, false, 'love life')).toEqual([
      { index: 1, completed: false, description: 'love life' },
    ]);
  });


});