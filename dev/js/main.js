// require('modules');
import { users } from './modules/users'

const loginBtn = document.querySelector('.btn-check-login');

loginBtn.addEventListener('click', getFormInput);

function isEmpty(value) {
  if (value.trim().length > 0) {
    return true;
  }
  return;
}

function showMessage(message) {
  const messageEl = document.querySelector('.message');
  const p = document.createElement('p');
  p.textContent = message;
  messageEl.appendChild(p);

  setTimeout(() => messageEl.removeChild(p), 3000);
}

function validateInput(input, elem) {
  if (isEmpty(input)) {
    return true;
  }

  showMessage(`Заполните поле '${elem.textContent}''`);
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
  const inputsValidationArr = [...inputs].map((input) => validateInput(input.value, input.parentElement));
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

    var state = { 'page_id': 1, 'user_id': 5 };
    var title = 'Main';
    var url = '/main.html';

    history.pushState(null, '', url);
    // console.log(history.pushState);


  }
}