import {
  createUserFromAPI
} from './fetchAPI.js';

const form = document.getElementById('registrationForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {
    name: event.target.name.value,
    email: event.target.email.value,
    password: event.target.password.value
  };

  createUserFromAPI(data)
    .then(() => {
      window.location.pathname = 'login/'
    })
    .catch(err => console.error(err));

  //window.localStorage.setItem('user', JSON.stringify(data))
})