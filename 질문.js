const loginPage = document.querySelector('#login-page');
const loginForm = document.querySelector('#login-form');
const nameInp = loginForm.querySelector('input');
const loginBtn = loginForm.querySelector('button');
// starpage
const startPage = document.querySelector('#start-page');
//username
const userName = startPage.querySelector('.username');
const USERNAME = 'username';
//function
function loginSub(event) {
  event.preventDefault();
  const valueName = nameInp.value;
  localStorage.setItem(USERNAME, valueName);
  const savedName = localStorage.getItem(USERNAME);
  userName.innerText = `USERNAME: ${savedName}`;
  loginPage.hidden = true;
  startPage.hidden = false;
}

//default setting
const savedName = localStorage.getItem(USERNAME);
if (savedName === null) {//값이 없는 초기화면
  startPage.hidden = true;
  loginForm.addEventListener('submit', loginSub);
} else {//값이 있다면
  loginSub();
}
//이거랑