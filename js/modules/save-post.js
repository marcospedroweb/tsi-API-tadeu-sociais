import initAlertUser from "./alert-user.js";
import initReset from "./reset.js";

export default function initSavePost(type, element) {
  function savePost(typePost, elementPost) {
    const userId = JSON.parse(sessionStorage.getItem('userLogged'))[0].id;
    const tableUsers = JSON.parse(window.localStorage.getItem('users'));
    const userMatched = tableUsers.registeredUsers[userId];
    const result = userMatched.posts.push(
      {
        id: userMatched.posts.length + 1,
        type: typePost,
        elementItem: elementPost,
      }
    );
    const newTableUsers = tableUsers;
    console.log(newTableUsers)
    if (result) {
      localStorage.setItem('users', JSON.stringify(newTableUsers));
      return result;
    } else
      return result;
  }

  if (type && element) {
    if (type === 'text') {
      if (element.textContent.length == 0) {
        initAlertUser('danger', 'É necessário escrever algo para realizar o post')
      } else {
        const result = savePost(type, element);
        if (result) {
          initReset('all');
          initAlertUser('success', 'Postagem criada com sucesso');
        } else {
          initReset('text');
          initAlertUser('danger', 'Houve um erro ao criar a postagem, tente novamente');
        }
      }
    } else {
      const result = savePost(type, element);
      if (result) {
        initReset('all');
        initAlertUser('success', 'Postagem criada com sucesso');
      } else {
        initReset('midia');
        initAlertUser('danger', 'Houve um erro ao criar a postagem, tente novamente');
      }
    }
  }
}