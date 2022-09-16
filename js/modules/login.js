/* eslint-disable operator-linebreak */
import alertUser from './helpers/alert-user.js';
import useLocalStorage from './helpers/use-local-storage.js';
import useSessionStorage from './helpers/use-session-storage.js';

export default class Login {
  constructor(form, table) {
    this.form = document.querySelector(form);
    this.table = useLocalStorage('get', table);
    this.userLogged = useSessionStorage('get', 'userLogged');
  }

  handleSubmit(event) {
    event.preventDefault();
    const email = this.form.querySelector('#email').value;
    const password = this.form.querySelector('#password').value;
    let matchedUser;

    this.table.forEach((user) => {
      if (user.email === email && user.password === password) {
        matchedUser = user;
      }
    });

    if (matchedUser) {
      useSessionStorage('userLogged', matchedUser);
      window.location.href = `${window.location.origin}/index.html`;
    } else {
      alertUser.init('danger', 'Senha e/ou email não correspondem.');
      this.form.querySelector('#password').value = '';
    }
  }

  init() {
    if (
      this.userLogged &&
      this.form &&
      window.location.href.indexOf('login.html')
    ) {
      window.location.href = `${window.location.origin}/login.html`;
    }

    if (this.form) {
      this.form.addEventListener('submit', this.handleSubmit);
    }
  }
}
