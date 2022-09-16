import useSessionStorage from './helpers/use-session-storage.js';

class ChangeLayout {
  constructor(
    unregisteredUser,
    createPost,
    posts,
    btnsLoginRegister,
    userLogged,
    userName,
  ) {
    this.divUnregisteredUser = document.querySelector(unregisteredUser);
    this.divCreatePost = document.querySelector(createPost);
    this.divPosts = document.querySelector(posts);
    // Div com os btns de login
    this.divLoginRegister = document.querySelector(btnsLoginRegister);
    this.divUserLogged = document.querySelector(userLogged);
    this.spanUserName = document.querySelector(userName);
    this.userLogged = useSessionStorage('userLogged');
  }

  showLayoutUnregisteredUser() {
    // Mostrando a div nav para usuario não logado
    if (this.divLoginRegister.classList.contains('d-none')) {
      this.divLoginRegister.classList.remove('d-none');
      const divUserLogged = document.querySelector('#div-user-logged');
      if (!divUserLogged.classList.contains('d-none')) {
        divUserLogged.classList.add('d-none');
      }
    }
    // Mostrando divs relacionadas a Posts
    if (this.divUnregisteredUser.classList.contains('d-none')) {
      this.divUnregisteredUser.classList.toggle('d-none');
    }
    if (!this.divCreatePost.classList.contains('d-none')) {
      this.divCreatePost.classList.toggle('d-none');
    }
    if (!this.divPosts.classList.contains('d-none')) {
      this.divPosts.classList.toggle('d-none');
    }
  }

  showLayoutUserLogged() {
    // Main Nav
    // Verifica se a div com btns login/register estão visiveis
    if (!this.divLoginRegister.classList.contains('d-none')) {
      // Se estiver, esconde o mesmo
      this.divLoginRegister.classList.add('d-none');

      // Verifica se a div com nome do usuario está invisivel
      if (this.divUserLogged.classList.contains('d-none')) {
        // Se estiver, adiciona o nome do usuario e mostra o div
        this.spanUserName.textContent = this.userLogged.name;
        this.divUserLogged.classList.remove('d-none');
      }
    }

    // Div Posts
    // Verifica se a div pedindo login está visivel
    if (!this.divUnregisteredUser.classList.contains('d-none')) {
      this.divUnregisteredUser.classList.toggle('d-none');
    }

    // Verifica se a div de criar posts está invisivel
    if (this.divCreatePost.classList.contains('d-none')) {
      this.divCreatePost.classList.toggle('d-none');
    }

    // Verifica se a div de posts está invisivel
    if (this.divPosts.classList.contains('d-none')) {
      this.divPosts.classList.toggle('d-none');
    }
  }

  init() {
    // Verifica se o usuario está logado
    if (this.userLogged && this.divUnregisteredUser) {
      this.showLayoutUserLogged();
    } else if (!this.userLogged && this.divUnregisteredUser) {
      // Verifica se o usuario está deslogado
      this.showLayoutUnregisteredUser();
    }
  }
}

const changeLayout = new ChangeLayout(
  '#unregistered-user',
  '#create-post',
  '#posts',
  '#div-login-register',
  '#div-user-logged',
  '#user-name',
);

export default changeLayout;
