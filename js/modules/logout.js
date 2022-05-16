import initChangeBtnLogin from "./change-btn-login.js";
import initAlertUser from "./alert-user.js";

export default function initLogout() {
  const linkLogout = document.querySelector('#link-logout');

  if (linkLogout) {
    linkLogout.addEventListener('click', event => {
      event.preventDefault();
      const userLogged = JSON.parse(sessionStorage.getItem('userLogged'))[0];

      if (userLogged) {
        sessionStorage.removeItem('userLogged');
        initChangeBtnLogin();
        initAlertUser('success', 'Saiu da sessão com sucesso');
      }
    });
  }
}

