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
  const tdObj = {
    text: tdValue,
    id: Date.now()
  };
  todoRecord(tdObj);
  todoArr.push(tdObj);
  todoSave();
}
function todoSave() {
  localStorage.setItem(KEYTODO, JSON.stringify(todoArr));
}
function todoRecord(event) {//event == tdObj
  const li = document.createElement('li');
  li.id = event.id;
  todoBox.appendChild(li);
  const p = document.createElement('p');
  li.appendChild(p);
  p.innerText = event.text;
  const btn = document.createElement('button');
  btn.innerText = '❌';
  li.appendChild(btn);
  btn.addEventListener('click', (event) => {
    const delItem = event.target.parentElement;
    delItem.remove();
    //filtering
    todoArr = todoArr.filter(element => element.id !== parseInt(delItem.id));
    todoSave();
  })
}
const savedTodos = localStorage.getItem(KEYTODO);
if (savedTodos !== null) {
  //string->array
  const parseArr = JSON.parse(savedTodos);
  parseArr.forEach(todoRecord);
}
todoForm.addEventListener('submit', todosub);