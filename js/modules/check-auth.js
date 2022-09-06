export default class CheckAuth {
  constructor(unregisteredUser, createPost, posts, userLogged) {
    this.unregisteredUser = document.querySelector(unregisteredUser);
    this.createPost = document.querySelector(createPost);
    this.posts = document.querySelector(posts);
    this.userLogged = JSON.parse(sessionStorage.getItem(userLogged));
  }

  init() {
    if (this.unregisteredUser && this.userLogged) {
      if (!this.unregisteredUser.classList.contains('d-none'))
        this.unregisteredUser.classList.toggle('d-none');
      if (this.createPost.classList.contains('d-none'))
        this.createPost.classList.toggle('d-none');
      if (this.posts.classList.contains('d-none'))
        this.posts.classList.toggle('d-none');
    }
  }
}
