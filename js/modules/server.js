export default function initServer() {
  //Inicia o "servidor" no localStorage
  if (!localStorage.getItem('users')) {
    const users = [];
    localStorage.setItem('users', JSON.stringify(users));

  } else if (!localStorage.getItem('posts')) {
    const posts = [];
    localStorage.setItem('posts', JSON.stringify(posts));
  } else {
    const users = JSON.parse(window.localStorage.getItem('users'));
    const posts = JSON.parse(window.localStorage.getItem('posts'));
    if (users.length > 0) {
      users.forEach((user, index) => {
        user.id = index;
      });

      localStorage.setItem('users', JSON.stringify(users));
    }
    if (posts.length > 0) {
      posts.forEach((post, index) => {
        post.id = index;
      });

      localStorage.setItem('posts', JSON.stringify(posts));
    }
  }
}
