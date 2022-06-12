import initAlertUser from "./alert-user.js";
import initPostItems from "./post-items.js";

export default function initSavePost(postObj) {

  if (postObj) {
    const tablePosts = JSON.parse(window.localStorage.getItem('posts'));
    const result = tablePosts.push(postObj);
    if (result) {
      localStorage.setItem('posts', JSON.stringify(tablePosts));
      initAlertUser('success', 'Postagem realizado com sucesso!');
      initPostItems();
    } else
      initAlertUser('danger', 'Houve um erro ao realizar a postagem, tente novamente');

  }
}