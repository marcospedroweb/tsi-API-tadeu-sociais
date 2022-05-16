export default function initChangeBtnLogin() {
  const userLogged = JSON.parse(sessionStorage.getItem('userLogged'));

  if (userLogged) {
    const divLoginRegister = document.querySelector('#div-login-register');
    if (!divLoginRegister.classList.contains('d-none')) {
      divLoginRegister.classList.add('d-none');
      const divUserLogged = document.querySelector('#div-user-logged');
      if (divUserLogged.classList.contains('d-none')) {
        const spanUserName = divUserLogged.querySelector('#user-name');
        spanUserName.textContent = userLogged[0].name;
        divUserLogged.classList.remove('d-none');
      }
    }
  } else {
    const divLoginRegister = document.querySelector('#div-login-register');
    if (divLoginRegister.classList.contains('d-none')) {
      divLoginRegister.classList.remove('d-none');
      const divUserLogged = document.querySelector('#div-user-logged');
      if (!divUserLogged.classList.contains('d-none'))
        divUserLogged.classList.add('d-none');
    }
  }
}