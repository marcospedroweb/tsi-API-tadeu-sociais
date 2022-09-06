/* eslint-disable import/extensions */
import alertUser from './alert-user.js';

export default class Login {
  constructor(form, table) {
    this.form = document.querySelector(form);
    this.table = JSON.parse(localStorage.getItem(table));
    this.userLogged = JSON.parse(sessionStorage.getItem('userLogged'));
  }

  init() {
    if (
      this.userLogged &&
      this.form &&
      window.location.href.indexOf('login.html')
    )
      window.location.href = `${window.location.origin}/login.html`;

    if (this.form)
      this.form.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = this.form.querySelector('#email').value;
        const password = this.form.querySelector('#password').value;
        let matchedUser;

        this.table.forEach((user) => {
          if (user.email === email && user.password === password)
            matchedUser = user;
        });

        if (matchedUser) {
          sessionStorage.setItem('userLogged', JSON.stringify(matchedUser));
          window.location.href = `${window.location.origin}/index.html?success=account-created`;
        } else {
          alertUser.init('danger', 'Senha e/ou email não correspondem.');
          this.form.querySelector('#password').value = '';
        }
      });
  }
}
