import addTask from './src\__mock__\crud.js';

describe('crud', () => {
    test('add task', () =>{
        expect(addTask(1, false, 'this is a discription')).toEqual([
            {index: 1 , completed: false, description: 'this is a discription'}
        ])
    } )
})