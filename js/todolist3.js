const todoList = document.querySelector('#todo-list');
const todoBtn = todoList.querySelector('button');
const todoPage = todoList.querySelector('.todo-page');

const todoForm = todoPage.querySelector('.todo-form');
const todoInp = todoPage.querySelector('input');
const todoBox = todoPage.querySelector('ul');

const KEYTODO = 'key-todo';
//
todoBtn.addEventListener('click', showPage);
function showPage() {
  todoPage.classList.toggle('hidden');
}
//
let todoArr = [];
function todosub(event) {
  event.preventDefault();
  const tdValue = todoInp.value;
  todoInp.value = '';
  todoRecord(tdValue);
  todoArr.push(tdValue);
  todoSave();
}
function todoSave() {
  localStorage.setItem(KEYTODO, JSON.stringify(todoArr));
}
function todoRecord(event) {
  const li = document.createElement('li');
  todoBox.appendChild(li);
  const p = document.createElement('p');
  li.appendChild(p);
  p.innerText = event;
  const btn = document.createElement('button');
  btn.innerText = '❌';
  li.appendChild(btn);
  btn.addEventListener('click', (event) => {
    const delItem = event.target.parentElement;
    delItem.remove();
  })
}
const savedTodos = localStorage.getItem(KEYTODO);
console.log(savedTodos); // ["aa","aaa","aaa"]
if (savedTodos !== null) {
  //string->array
  const parseArr = JSON.parse(savedTodos);
  console.log(parseArr); // (3) ['aa', 'aaa', 'aaa']
  parseArr.forEach(todoRecord);
}
todoForm.addEventListener('submit', todosub);