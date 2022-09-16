import changeLayout from './change-layout.js';
import alertUser from './helpers/alert-user.js';
import useSessionStorage from './helpers/use-session-storage.js';

export default class Logout {
  constructor(link) {
    this.linkLogout = document.querySelector(link);
    this.userLogged = useSessionStorage('userLogged');
  }

  init() {
    // Verifica se o usuario está logado, se estiver, desloga o usuario
    if (this.linkLogout) {
      this.linkLogout.addEventListener('click', (event) => {
        event.preventDefault();

        if (this.userLogged) {
          useSessionStorage('remove', 'userLogged');
          changeLayout.init();
          alertUser.alert('success', 'Saiu da sessão com sucesso');
        }
      });
    }
  }
}
