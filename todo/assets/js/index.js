const action = document.getElementById('task1');
const list = document.querySelector('items')
const state = document.getElementById('state');
const add = document.getElementById('add');

add.addEventListener('click', () => {
    list.append('something');
    
    // action.innerHTML = 'Task 1';
}); 