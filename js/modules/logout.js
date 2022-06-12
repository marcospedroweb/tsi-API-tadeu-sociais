import initChangeBtnLogin from "./change-btn-login.js";
import initAlertUser from "./alert-user.js";

export default function initLogout() {
  // Verifica se o usuario está logado, se estiver, desloga o usuario

  const linkLogout = document.querySelector('#link-logout');

  if (linkLogout) {
    linkLogout.addEventListener('click', event => {
      event.preventDefault();
      const userLogged = JSON.parse(sessionStorage.getItem('userLogged'));

      if (userLogged) {
        sessionStorage.removeItem('userLogged');
        initChangeBtnLogin();
        initAlertUser('success', 'Saiu da sessão com sucesso');
      }
    });
  }
}

