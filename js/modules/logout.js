import changeBtnLogin from './change-btn-login.js';
import alertUser from './alert-user.js';

export default class Logout {
  constructor(link) {
    this.linkLogout = document.querySelector(link);
    this.userLogged = JSON.parse(sessionStorage.getItem('userLogged'));
  }

  init() {
    // Verifica se o usuario está logado, se estiver, desloga o usuario
    if (this.linkLogout) {
      this.linkLogout.addEventListener('click', (event) => {
        event.preventDefault();

        if (this.userLogged) {
          sessionStorage.removeItem('userLogged');
          changeBtnLogin.init();
          alertUser('success', 'Saiu da sessão com sucesso');
        }
      });
    }
  }
}
