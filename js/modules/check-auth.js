import useLocalStorage from './helpers/use-local-storage.js';

export default class CheckAuth {
  constructor(unregisteredUser, createPost, posts, userLogged) {
    this.unregisteredUser = document.querySelector(unregisteredUser);
    this.createPost = document.querySelector(createPost);
    this.posts = document.querySelector(posts);
    this.userLogged = useLocalStorage('get', userLogged);
  }

  init() {
    // Verifica se o usuario está logado
    if (this.unregisteredUser && this.userLogged) {
      // Se usuario estiver logado, mostra um layout diferente ao usuario
      if (!this.unregisteredUser.classList.contains('d-none')) {
        this.unregisteredUser.classList.toggle('d-none');
      } else if (this.createPost.classList.contains('d-none')) {
        this.createPost.classList.toggle('d-none');
      } else if (this.posts.classList.contains('d-none')) {
        this.posts.classList.toggle('d-none');
      }
    }
  }
}
