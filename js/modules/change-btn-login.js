class ChangeBtnLogin {
  constructor(unregisteredUser, createPost, posts) {
    this.divUnregisteredUser = document.querySelector(unregisteredUser);
    this.divCreatePost = document.querySelector(createPost);
    this.divPosts = document.querySelector(posts);
    this.userLogged = JSON.parse(sessionStorage.getItem('userLogged'));
  }

  init() {
    // Div com os btns de login
    const divLoginRegister = document.querySelector('#div-login-register');

    // Verifica se o usuario está logado
    if (this.userLogged && this.divUnregisteredUser) {
      // Main Nav
      // Verifica se a div com btns estão visiceis
      if (!divLoginRegister.classList.contains('d-none')) {
        // Se estiver, esconde o mesmo
        divLoginRegister.classList.add('d-none');

        const divUserLogged = document.querySelector('#div-user-logged');
        // Verifica se a div com nome do usuario está invisivel
        if (divUserLogged.classList.contains('d-none')) {
          // Se estiver, adiciona o nome do usuario e mostra o div
          const spanUserName = divUserLogged.querySelector('#user-name');
          spanUserName.textContent = this.userLogged.name;
          divUserLogged.classList.remove('d-none');
        }
      }

      // Div Posts
      // Verifica se a div pedindo login está visivel
      if (!this.divUnregisteredUser.classList.contains('d-none'))
        this.divUnregisteredUser.classList.toggle('d-none');

      // Verifica se a div de criar posts está invisivel
      if (this.divCreatePost.classList.contains('d-none'))
        this.divCreatePost.classList.toggle('d-none');

      // Verifica se a div de posts está invisivel
      if (this.divPosts.classList.contains('d-none'))
        this.divPosts.classList.toggle('d-none');
    } else if (this.divUnregisteredUser) {
      // Verifica se o usuario está deslogado
      // nav
      if (divLoginRegister.classList.contains('d-none')) {
        divLoginRegister.classList.remove('d-none');
        const divUserLogged = document.querySelector('#div-user-logged');
        if (!divUserLogged.classList.contains('d-none'))
          divUserLogged.classList.add('d-none');
      }
      // Posts
      if (this.divUnregisteredUser.classList.contains('d-none'))
        this.divUnregisteredUser.classList.toggle('d-none');
      if (!this.divCreatePost.classList.contains('d-none'))
        this.divCreatePost.classList.toggle('d-none');
      if (!this.divPosts.classList.contains('d-none'))
        this.divPosts.classList.toggle('d-none');
    }
  }
}

const changeBtnLogin = new ChangeBtnLogin(
  '#unregistered-user',
  '#create-post',
  '#posts',
);

export default changeBtnLogin;
