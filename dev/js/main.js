// require('modules');
import { users } from './modules/users';
import HTTP from './modules/http';

const loginBtn = document.querySelector('.btn-check-login');
const skipBtn = document.querySelector('.btn-skip-login');

skipBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e);
  location.hash = 'about';
});

// API Food2Fork
const API_KEY = '747d4384e90b4cba17961f155c8fbde1';
const http = new HTTP();

loginBtn.addEventListener('click', getFormInput);


// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// http.get(`http://food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken`)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// http.post('https://jsonplaceholder.typicode.com/users', {name: 'Dima', age: 28})
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// http.put('https://jsonplaceholder.typicode.com/users/1', {name: 'Dima', age: 28})
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// http.delete('https://jsonplaceholder.typicode.com/users/1')
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

function isEmpty(value) {
  return value.trim().length > 0;
}

function showMessage(message) {
  const messageEl = document.querySelector('.message-login');
  const p = document.createElement('p');
  p.textContent = message;
  messageEl.appendChild(p);

  setTimeout(() => messageEl.removeChild(p), 3000);
}

function validateInput(input, elem) {
  console.log(elem);
  if (isEmpty(input)) {
    return true;
  }

  showMessage(`Заполните поле ${elem.parentElement.textContent}`);
  return;
}

function getUser({login, password}) {
  const userProfile = users.find(field => field.login === login);

  if (!userProfile) {
    showMessage('Неправильный Login');
    return;
  }
  const passwordCheck = userProfile.password === password;

  if (!passwordCheck) {
    showMessage('Неправильный Password');
    return;
  }

  return userProfile;
}

function getFormInput(e) {
  e.preventDefault();
  const form = document.querySelector('.m-form-login');
  const inputs = form.getElementsByTagName('input');
  const inputsValidationArr = [...inputs].map((input) => validateInput(input.value, input));
  const inputsValid = inputsValidationArr.every(res => res === true);
  
  if (inputsValid) {
    let login = form.elements['login'];
    let password = form.elements['password'];
    const loginData = {
      login: login.value,
      password: password.value
    }

    const validationPassed = getUser(loginData);
    if (!validationPassed) {
      login.value = '';
      password.value = '';
      return;
    }
    console.log(validationPassed);
    showMessage(`Добро пожаловать, ${validationPassed.login}!`);
  }
}
// Smooth scroll
var scroll = new SmoothScroll('a[href*="#"], .btn-skip-login');
