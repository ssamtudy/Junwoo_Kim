// find html
const clock = document.querySelector('#clock');
const dateClock = clock.querySelector('.date-clock');
const timeClock = clock.querySelector('.time-clock');

//dateClock
dateF();
function dateF() {
  const today = new Date;
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const monthArr = ['December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];
  const date = today.getDate();
  const day = today.getDay(); //0 == 일요일
  const dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satday'];
  dateClock.innerText = `${year} ${dayArr[day]}, ${monthArr[month]} ${date}`;
}
//timeClock
setInterval(clockF, 1000);
function clockF() {
  const today = new Date;
  let hours = today.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM'; // am pm 구분해주기
  hours = hours % 12;
  hours = hours ? hours : 12; // hours '0' should be '12'
  const mins = String(today.getMinutes()).padStart(2, '0');
  const secs = String(today.getSeconds()).padStart(2, '0');
  timeClock.innerText = `${hours} : ${mins} : ${secs} ${ampm}`;
}