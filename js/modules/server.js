export default function initServer() {
  //Inicia o "servidor" no localStorage

  if (!localStorage.getItem('users') && !localStorage.getItem('posts')) {
    const users = [];
    const posts = [];
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('posts', JSON.stringify(posts));
  } else {
    const users = JSON.parse(window.localStorage.getItem('users'));
    if (users.length > 0) {
      users.forEach((user, index) => {
        user.id = index;
      });

      localStorage.setItem('users', JSON.stringify(users));
    }
  }
}
