import initGetWithJs from "./get-with-js.js";
import initAlertUser from "./alert-user.js";

export default function initLogin() {
  // Ao usuario clicar no botão de login, verifica se há dados nos inputs e se há conta compativel no localStorage
  // initGetWithJs();

  const formLogin = document.querySelector('#form-login');
  const userLogged = JSON.parse(sessionStorage.getItem('userLogged'));

  if (userLogged && window.location.href.indexOf('login.html') && formLogin)
    window.location.href = window.location.href.replace('login.html', 'index.html');

  if (formLogin) {
    formLogin.addEventListener('submit', event => {
      event.preventDefault();
      const tableUsers = JSON.parse(window.localStorage.getItem('users'));
      const email = formLogin.querySelector('#email').value;
      const password = formLogin.querySelector('#password').value;
      let matchedUser;

      tableUsers.forEach(user => {
        if (user.email === email && user.password === password)
          matchedUser = user;
      });

      if (matchedUser) {
        sessionStorage.setItem('userLogged', JSON.stringify(matchedUser));
        window.location.href = window.location.href.replace('register.html', 'index.html');
      } else {
        initAlertUser('danger', 'Senha e/ou email não correspondem.');
        formLogin.querySelector('#password').value = '';
      }
    });
  }
}