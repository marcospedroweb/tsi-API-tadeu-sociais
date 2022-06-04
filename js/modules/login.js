import initGetWithJs from "./get-with-js.js";
import initAlertUser from "./alert-user.js";

export default function initLogin() {
  // Ao usuario clicar no botão de login, verifica se há dados nos inputs e se há conta compativel no localStorage
  // initGetWithJs();

  const formLogin = document.querySelector('#form-login');

  if (formLogin) {
    formLogin.addEventListener('submit', event => {
      event.preventDefault();
      const tableUsers = JSON.parse(window.localStorage.getItem('users'));
      const registeredUsers = tableUsers.registeredUsers;
      const email = formLogin.querySelector('#email').value;
      const password = formLogin.querySelector('#password').value;
      let matchedUser;

      registeredUsers.forEach(element => {
        if (element.email === email && element.password === password)
          matchedUser = element.id.toString() || true;
      });

      if (matchedUser) {
        sessionStorage.setItem('userLogged', JSON.stringify(registeredUsers));
        window.location.href = "/index.html?success=user-logged";
      } else {
        initAlertUser('danger', 'Senha e/ou email não correspondem.');
        formLogin.querySelector('#password').value = '';
      }
    });
  }
}