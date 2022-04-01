import {
    addTask,
    removeTask,
    deleteCompletedTasks,
    updateTask,
  } from '../__mock__/crud.js';
  
  describe('add task to list', () => {
    test('add tasks to the list', () => {
      addTask(1, false.valueOf, 'task1');
    });
    task = localStorage();
  });