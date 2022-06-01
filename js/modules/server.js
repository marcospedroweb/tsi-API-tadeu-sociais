export default function initServer() {
  //Inicia o "servidor" no localStorage

  if (!localStorage.getItem('users')) {
    const users = {
      "registeredUsers": [],
    };
    localStorage.setItem('users', JSON.stringify(users));
  } else {
    const tableUsers = JSON.parse(window.localStorage.getItem('users'));
    const registeredUsers = tableUsers.registeredUsers;
    if (registeredUsers.length > 0) {
      registeredUsers.forEach((element, index) => {
        element.id = index;
      });

      const users = {
        "registeredUsers": registeredUsers,
      }
      localStorage.setItem('users', JSON.stringify(users));
    }
  }
}
