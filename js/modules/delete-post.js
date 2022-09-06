import initAlertUser from './alert-user.js';
import initPostItems from './post-items.js';
import initServer from './local-server.js';

export default function initDeletePost() {
  const btnsDeletePost = document.querySelectorAll('.button-delete-post');

  if (btnsDeletePost[0]) {
    btnsDeletePost.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        const btnId = event.target
          .getAttribute('id')
          .replace('button-delete-', '');
        const userLogged = JSON.parse(sessionStorage.getItem('userLogged'));
        const posts = JSON.parse(window.localStorage.getItem('posts'));
        posts.forEach((post, index) => {
          if (post.id == parseInt(btnId) && post.userId == userLogged.id) {
            posts.splice(index, 1);
            initAlertUser('success', 'Postagem apagada com sucesso');
          }
        });
        localStorage.setItem('posts', JSON.stringify(posts));
        initServer();
        initPostItems();
      });
    });
  }
}
