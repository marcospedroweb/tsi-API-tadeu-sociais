import initGetWithJs from "./get-with-js.js";

export default function initLogin() {
  initGetWithJs();

  const formLogin = document.querySelector('form-login');

  if (formLogin) {
    formLogin.addEventListener('submit', event => {
      event.preventDefault();
      const tableUsers = JSON.parse(window.localStorage.getItem('users'));
      const email = formLogin.querySelector('#email').value;
      const password = formLogin.querySelector('#password').value;
      let matchedUser;

      tableUsers.registeredUsers.forEach((element, index) => {
        if (element.email === email)
          matchedUser = index;
      });


    });
  }


}