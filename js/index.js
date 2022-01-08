//find html
const loginPage = document.querySelector('#login-page');
const loginForm = document.querySelector('#login-form');
const nameInp = loginForm.querySelector('input');
const loginBtn = loginForm.querySelector('button');
// starpage
const startPage = document.querySelector('#start-page');
//username
const user = startPage.querySelector('#user');
const singedInUser = user.querySelector('.signed-in-user');
const USERNAME = 'username';

//function
function earlySet() {//default setting
  loginPage.hidden = false;
  startPage.hidden = true;
  loginForm.addEventListener('submit', loginSub);
}
function loginSub(event) {///2번
  event.preventDefault();
  localStorage.setItem(USERNAME, nameInp.value);
  recordName();
}
function recordName() {///3번
  const savedName = localStorage.getItem(USERNAME);
  singedInUser.innerText = `Good morning, ${savedName}!`;
  start();
}
function start() {
  loginPage.hidden = true;
  startPage.hidden = false;
}
//default setting
const savedName = localStorage.getItem(USERNAME);
///1번 //값이 없는 초기화면
if (savedName === null) {
  earlySet();
} else {
  recordName();
}
const renameBtn = document.querySelector('.rename');
renameBtn.addEventListener('click', refresh);
function refresh() {
  localStorage.removeItem(USERNAME);
  nameInp.value = null; //인풋값 초기화
  earlySet();
}