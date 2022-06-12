export default function initChangeBtnLogin() {
  const userLogged = JSON.parse(sessionStorage.getItem('userLogged'));
  const divUnregisteredUser = document.querySelector('#unregistered-user');
  const divCreatePost = document.querySelector('#create-post');
  const divPosts = document.querySelector('#posts');

  if (userLogged && divUnregisteredUser) {
    //Nav
    const divLoginRegister = document.querySelector('#div-login-register');
    if (!divLoginRegister.classList.contains('d-none')) {
      divLoginRegister.classList.add('d-none');
      const divUserLogged = document.querySelector('#div-user-logged');
      if (divUserLogged.classList.contains('d-none')) {
        const spanUserName = divUserLogged.querySelector('#user-name');
        spanUserName.textContent = userLogged.name;
        divUserLogged.classList.remove('d-none');
      }
    }
    //Posts
    if (!divUnregisteredUser.classList.contains('d-none'))
      divUnregisteredUser.classList.toggle('d-none');
    if (divCreatePost.classList.contains('d-none'))
      divCreatePost.classList.toggle('d-none');
    if (divPosts.classList.contains('d-none'))
      divPosts.classList.toggle('d-none');
  } else {
    if (divUnregisteredUser) {
      //nav
      const divLoginRegister = document.querySelector('#div-login-register');
      if (divLoginRegister.classList.contains('d-none')) {
        divLoginRegister.classList.remove('d-none');
        const divUserLogged = document.querySelector('#div-user-logged');
        if (!divUserLogged.classList.contains('d-none'))
          divUserLogged.classList.add('d-none');
      }
      //Posts
      if (divUnregisteredUser.classList.contains('d-none'))
        divUnregisteredUser.classList.toggle('d-none');
      if (!divCreatePost.classList.contains('d-none'))
        divCreatePost.classList.toggle('d-none');
      if (!divPosts.classList.contains('d-none'))
        divPosts.classList.toggle('d-none');
    }
  }
}